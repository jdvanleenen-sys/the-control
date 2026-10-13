// Builds the marking sheets for the side-by-side run: the answers of both copies together, every answer
// shuffled under a random number, with the path of the folder a session ran in replaced, so a
// marker cannot read the set-up off an answer. Writes the full sheet, a sheet of the two
// headline set-ups for the outside marker, the key, and one room per marking pass.
//   node open-sheet.mjs <repo> <run folder name under runs/> <questions file> <seed text>

import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const [repo, runName, questionsFile, seedText] = process.argv.slice(2);
const load = (path) => import(pathToFileURL(join(repo, path)));
const { loadQuestions } = await load('lib/questions.mjs');
const { seededRandom, shuffle, uniqueNumbers } = await load('lib/rng.mjs');
const { parseLog, resultRecord } = await load('lib/session.mjs');
const { STAGE_ROOT } = await load('lib/config.mjs');

const run = join(repo, 'runs', runName);
const ARMS = { unchanged: 'unchanged folder', changed: 'changed folder', docsA: 'documents only (beside unchanged)', docsB: 'documents only (beside changed)', emptyA: 'empty (beside unchanged)', emptyB: 'empty (beside changed)' };
const STAGED = /[A-Za-z]:[\\/]+tc[\\/]+open-[A-Za-z0-9]+[\\/]+w\d+/g;
const questions = Object.fromEntries(loadQuestions(join(repo, questionsFile)).map((q) => [q.id, q]));

const answers = [];
for (const arm of Object.keys(ARMS)) {
  for (const runDir of readdirSync(join(run, 'logs', arm)).sort()) {
    for (const file of readdirSync(join(run, 'logs', arm, runDir)).filter((name) => name.endsWith('.jsonl')).sort()) {
      const { events } = parseLog(readFileSync(join(run, 'logs', arm, runDir, file), 'utf8'));
      const text = String(resultRecord(events)?.result ?? '(no answer)').trim().replace(STAGED, '[working folder]');
      answers.push({ arm, run: Number(runDir.slice(1)), question: file.replace('.jsonl', ''), text });
    }
  }
}
const order = shuffle(answers, seededRandom(seedText));
uniqueNumbers(order.length).forEach((number, i) => { order[i].number = number; });

function sheet(rows) {
  const lines = ['# Marking sheet', '', `Answers: ${rows.length}.`, ''];
  for (const a of rows) {
    const q = questions[a.question];
    lines.push(`## Answer ${a.number}`, '', `**Question:** ${q.prompt}`, '', `**Expected answer:** ${q.expected}`, '', `**Correct requires:** ${q.requires}`, '', '**The answer to mark:**', '', a.text, '');
  }
  return lines.join('\n');
}

const full = sheet(order);
writeFileSync(join(run, 'marking-sheet.md'), full);
writeFileSync(join(run, 'marking-sheet-outside.md'), sheet(order.filter((a) => !a.arm.startsWith('empty'))));
writeFileSync(join(run, 'marking-key.csv'), `number,arm,run,question\n${order.map((a) => `${a.number},${ARMS[a.arm]},${a.run},${a.question}`).join('\n')}\n`);
for (const marker of ['one', 'two']) {
  const room = join(STAGE_ROOT, `marking-${runName}-${marker}`);
  rmSync(room, { recursive: true, force: true });
  mkdirSync(room, { recursive: true });
  writeFileSync(join(room, 'sheet.md'), full);
  cpSync(join(repo, 'MARKING.md'), join(room, 'MARKING.md'));
  cpSync(join(repo, 'reference'), join(room, 'reference'), { recursive: true });
}
console.log(`${runName}: ${order.length} answers on the full sheet, ${order.filter((a) => !a.arm.startsWith('empty')).length} on the outside marker's`);
