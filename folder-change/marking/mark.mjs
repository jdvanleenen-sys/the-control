// Runs the two full marking passes for a sealed run. Each pass is one room; each room is split
// into four parts, each part marked by its own session of the model under test, which sees the
// rules, a slice of the sheet and the documents, and nothing that names an arm.
//   node mark.mjs <entry repo> <run name>

import { spawn } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const [repo, name] = process.argv.slice(2);
const load = (path) => import(pathToFileURL(join(repo, path)));
const { CLAUDE_BIN, EFFORT, MODEL, STAGE_ROOT } = await load('lib/config.mjs');
const { sessionEnv } = await load('lib/claude.mjs');
const { HEADER, parseMarks } = await load('verify/marks.mjs');

const PARTS = 4;
const PROMPT = 'Read MARKING.md in this folder and follow it exactly. Mark every answer in sheet.md, reading the whole sheet. Write marks.csv in this folder with one line for every answer on the sheet. Do not stop early.';
const ARGS = ['--setting-sources', 'project', '-p', PROMPT, '--model', MODEL, '--effort', EFFORT, '--tools', 'Read,Glob,Grep,Write', '--allowedTools', 'Read,Glob,Grep,Write', '--permission-mode', 'acceptEdits', '--strict-mcp-config', '--disable-slash-commands', '--output-format', 'json'];

function splitRoom(room) {
  const sheet = readFileSync(join(room, 'sheet.md'), 'utf8').replace(/\r\n/g, '\n');
  const [head, ...answers] = sheet.split(/\n(?=## Answer \d+\n)/);
  const size = Math.ceil(answers.length / PARTS);
  const parts = [];
  for (let i = 0; i < PARTS; i += 1) {
    const dir = join(room, `part${i + 1}`);
    rmSync(dir, { recursive: true, force: true });
    mkdirSync(dir, { recursive: true });
    const slice = answers.slice(i * size, (i + 1) * size);
    writeFileSync(join(dir, 'sheet.md'), `${head}\n${slice.join('\n')}`);
    cpSync(join(room, 'MARKING.md'), join(dir, 'MARKING.md'));
    cpSync(join(room, 'reference'), join(dir, 'reference'), { recursive: true });
    parts.push({ dir, numbers: slice.map((a) => a.match(/^## Answer (\d+)/)[1]) });
  }
  return parts;
}

function runPart(part, label) {
  return new Promise((resolve) => {
    const started = Date.now();
    const child = spawn(CLAUDE_BIN, ARGS, { cwd: part.dir, env: sessionEnv(), windowsHide: true });
    let out = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { out += d; });
    child.on('close', (code) => {
      writeFileSync(join(part.dir, 'session.json'), out);
      const csv = join(part.dir, 'marks.csv');
      const failures = existsSync(csv) ? parseMarks(readFileSync(csv, 'utf8'), part.numbers).failures : ['marks.csv was not written'];
      console.log(`${label}: exit ${code}, ${Math.round((Date.now() - started) / 1000)} s, ${part.numbers.length} answers, ${failures.length === 0 ? 'complete' : `${failures.length} problem(s): ${failures.slice(0, 3).join('; ')}`}`);
      resolve({ part, failures });
    });
  });
}

const jobs = [];
const rooms = {};
for (const marker of ['one', 'two']) {
  rooms[marker] = splitRoom(join(STAGE_ROOT, `marking-${name}-${marker}`));
  rooms[marker].forEach((part, i) => jobs.push(runPart(part, `marker ${marker}, part ${i + 1}`)));
}
console.log(`${jobs.length} marking sessions started, model ${MODEL}, effort ${EFFORT}`);
const done = await Promise.all(jobs);
for (const marker of ['one', 'two']) {
  const mine = done.filter((d) => rooms[marker].includes(d.part));
  if (mine.some((d) => d.failures.length > 0)) { console.log(`marker ${marker}: not complete, nothing written to the run folder`); continue; }
  const lines = mine.flatMap((d) => readFileSync(join(d.part.dir, 'marks.csv'), 'utf8').replace(/\r/g, '').split('\n').filter((line) => line.trim() !== '' && line !== HEADER));
  writeFileSync(join(repo, 'runs', name, `marks-${marker}.csv`), `${HEADER}\n${lines.join('\n')}\n`);
  console.log(`marker ${marker}: ${lines.length} marks written to runs/${name}/marks-${marker}.csv`);
}
