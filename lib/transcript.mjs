// Turns one raw session log into a transcript a person can read: the exact prompt, every step
// in order, and the answer. The raw log sits beside it and is the record.

import { parseLog, resultRecord, toolCalls } from './session.mjs';

export function transcript(logText, meta) {
  const { events } = parseLog(logText);
  const calls = toolCalls(events, meta.stageDir);
  const steps = calls.length === 0 ? ['(no steps)'] : calls.map((call, i) => `${i + 1}. ${call.tool} ${call.target}${call.ok ? '' : ' (refused)'}`.trimEnd());
  return [
    `# ${meta.question}, run ${meta.run}`, '',
    '## Prompt, exactly as sent', '', `> ${meta.prompt}`, '',
    `## Steps (${calls.length})`, '', ...steps, '',
    '## Answer', '', String(resultRecord(events)?.result ?? '(no answer)').trim(), '',
  ].join('\n');
}
