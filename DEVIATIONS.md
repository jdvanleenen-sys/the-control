# Deviations

## Monday 2026-10-12, after the reveal: four faults in how results are presented, found by two outside reads

Two fresh sessions were given the competition rules and a clone of this repo and asked to break it. They found the faults below. The fixing commit is this one. The page and the code as they stood are in the history at the commit before it. No count of steps, no grade and no headline sentence changed, and the verdict on the folder is the same.

1. **The wrong-map check claimed more than the marks support.** The page said "The test caught the bad folder" on the strength of right answers, 25 against 28. That was the first marking pass alone. The second pass has it the other way round, 27 against 23. On steps the wrong map was higher on 8 of 10 questions, which is below the 9-or-10 rule. The check now needs fewer right answers by both passes, and the sentence prints both. On this run it now reads that the run did not show the test can catch a folder that misleads. Files: `verify/results.mjs`.
2. **A sentence left over from the rehearsals.** The line listing faults by arm ended "In the empty arm the model sometimes looks outside its folder and is refused." In this run no session was refused anything. The sentence is removed. Files: `verify/results.mjs`.
3. **Usage-warning sessions were counted and not shown.** The pre-registration says they are counted and shown. All 570 sessions ran while the account was past a usage-warning mark; `runs/sealed/scan.md` said so and the results page did not. It now does. Files: `verify/results.mjs`.
4. **The readable transcripts hid what a search looked for.** When the model gave a search both a pattern and a folder, the readable page printed only the folder, as `Grep .`. It now prints both. This touched 37 of the 90 readable transcripts. The raw logs beside them were always complete and are unchanged. Files: `lib/session.mjs`, `lib/transcript.mjs`.

`verify/selftest-proof.mjs` gained a case for the first fault.

## Monday 2026-10-12, the Claude project run was not done by hand

`EXPERIMENT.md` and `PREREGISTRATION.md` say the ten questions are asked "by hand" in a Claude project and in a plain chat. They were asked through the browser by the build session, which is a Claude model driving the page: it typed each prompt, sent it, and copied the page text of the answer. No follow-up was sent and no chat was redone. A person gave the go-ahead and changed the account's settings; a person did not type the prompts.

What that changes: nothing in what was asked. The prompts are the ones in `questions.md`, typed character for character, and each saved chat shows the prompt as the page displayed it. The build session has read every expected answer, so it does not mark these answers. The pre-registration said the person marking them would see which answer was which; they were marked by Gemini instead, from a shuffled sheet.

One batch of four plain chats timed out on the way back. The chats had been sent and answered; their answers were read from the chat history afterwards and not asked again.

## Statements in the pages written before the run that are wrong or were not carried out

Those pages are left as they were written. The corrections are here.

- **"No document or question from any rehearsal is in this repo"** (`PREREGISTRATION.md`, `PILOTS.md`). None is in the exam, the pool or `reference/`. But `pilots/size-probe/` was copied in whole from the last rehearsal's repo, and its logs and manifests carry that rehearsal's documents, questions and expected answers (a boat club and a lending library).
- **`pilots/size-probe/NOTES.md` says "this repo's 18 documents".** It was written in the rehearsal's repo and means that repo. Its small library is the rehearsal's 18 documents, not Fenwray and Quillbrook, and its sessions are dated Sunday 2026-10-11, before this entry's documents existed.
- **`PILOTS.md` lists a re-run from a fresh clone and the size probe as two items.** The small-library leg of the size probe is that same re-run: 30 sessions, 2.70 against 5.40. The nineteen-arm rehearsal gave the same two means from different sessions.
- **"Committed before any folder file"** (`EXPERIMENT.md`, `RUN.md`). The questions were committed before the folder's four instruction files. The documents in `reference/`, which the competition counts as part of the folder, were committed first, because the questions were written from them.
- **"Each file's word and token count is printed beside its effect"** (`EXPERIMENT.md`). It is not on the results page. The sizes are in `after-the-run.md`.
- **Held-out questions "reported beside the headline"** (`PREREGISTRATION.md`). They are in `after-the-run.md` and `runs/heldout/report.md`, not on the results page.
- **"A library four times the size"** (`limits.md`, `PILOTS.md`). 52 documents against 18 is 2.9 times the documents and 3.9 times the text.
- **`RUN.md` says the three arms are named the same way everywhere.** They are not: the results page says "full package", "folder loaded first" and "the full folder" for the same arm.
- **`RUN.md` on starting Claude Code.** On Windows, `CLAUDE_BIN` has to point at `claude.exe`; a `.cmd` launcher will not start. And a session inherits only a short list of variables, so sign-in by API key, Bedrock, Vertex or a proxy set in the shell is dropped. `RUN.md` now says both.
- **The key check's reading of "differ"** was made after seeing the checker's answers; `generator/key-check.md` says so. Two of the three questions the folder lost on, Q4 and Q7, are among the five that the stricter reading would have sent to a dispute round.
