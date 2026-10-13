# Results

With the folder loaded first, the model took fewer steps on 10 of 10 questions (2.37 per session against 5.03).

Steps do not count what was loaded before the question. Counting text in one unit, the folder arm read 9689 characters per session (5261 loaded first and 4428 fetched by its tools) against 7191 for documents only. With the folder on disk and nothing loaded, the model took 6.07 steps and read 10104 characters.

Marked with the arm hidden, the full folder was correct on 28 of 30 answers and the documents alone on 30 of 30 (the same model marking a second time: 23 and 30).
A model from another maker, also with the arm hidden, marked the same answers: 23 of 30 and 30 of 30.
The folder reached fewer right answers. Fewer steps did not come with equal answers.

Asked cold, with no folder and no documents, the model took 2.00 steps per session. It was correct on 0 of 30 answers (marked a second time: 0). The comparison above is the harder one: the same documents, with and without the folder's four instruction files.

By the rule fixed before the run, the folder did not earn its place: a marking pass counted fewer right answers with the folder; the model was given more text with the folder than without.

The rule counts text as it arrives: a loaded file once, and what a tool returns each time it returns it. It does not count cost. Per session, the folder arm against documents only: 18156 against 19818 tokens in, 387 against 893 tokens out, 4.2 against 8.6 seconds.

Sessions: 570. Left out for a fault in the set-up: 0. Kept and flagged for something the model did: 0. Ran while the account was past a usage-warning mark, which is not a fault: 570.

By arm: full package 0 left out and 0 flagged of 30; documents only 0 left out and 0 flagged of 30; folder on disk, nothing loaded 0 left out and 0 flagged of 30; empty 0 left out and 0 flagged of 30. A session is left out only for a fault in the set-up: a wrong model or tool version, an add-on, a second model, or a broken log. A session is flagged and kept in every average when the model itself did something: a refused call, a tool error, a limit reached, an empty answer.

## The headline pair

| Question | Full package | Documents only | Folder took |
|---|---|---|---|
| Q1 | 2.00 | 5.00 | fewer |
| Q2 | 2.00 | 5.33 | fewer |
| Q3 | 2.00 | 4.00 | fewer |
| Q4 | 4.00 | 6.00 | fewer |
| Q5 | 2.33 | 6.00 | fewer |
| Q6 | 2.00 | 4.33 | fewer |
| Q7 | 2.00 | 3.67 | fewer |
| Q8 | 2.00 | 5.00 | fewer |
| Q9 | 3.33 | 7.00 | fewer |
| Q10 | 2.00 | 4.00 | fewer |

Per document set, full package against documents only, on steps:

- film: fewer on 5 of 5 questions, more on 0, the same on 0.
- hall: fewer on 5 of 5 questions, more on 0, the same on 0.

Empty arm, mean steps: 2.00.

## Where the folder tied or lost, full package against documents only

- On steps: the folder tied on 0 question(s) and was higher on 0.
- On documents opened: the folder tied on 3 question(s) (Q4, Q6, Q10) and was higher on 1: Q7 (2.00 against 0.67).
- On input tokens: the folder tied on 0 question(s) and was higher on 2: Q4 (27581.00 against 19125.67); Q9 (23862.00 against 23560.67).
- On output tokens: the folder tied on 0 question(s) and was higher on 0.
- On seconds: the folder tied on 0 question(s) and was higher on 0.
- On answer words: the folder tied on 0 question(s) and was higher on 0.
- On correct answers: by at least one marker, the documents alone were right more often than the folder on 3 question(s) (Q3, Q4, Q7).

## What we changed in the folder because of a control run

One change was made to the folder because of a control run. It was made before this library existed, so the before and the after below are on different practice documents and are not a controlled comparison.

**What the control run showed.** In the fourth rehearsal three answers were wrong. All three came from arms where the answering rules were loaded and the map was not. Two were the same question: the model never opened the changes document and used a charge that had been replaced. On that question the changes document was opened in 8 of 8 sessions with the map loaded, in 4 of 4 with nothing loaded, and in 2 of 4 with the rules loaded and no map. The third wrong answer opened the changes document and nothing else.

**Why.** The look-up instructions then sat in the map, and said to open the one document that matched and to search once. An arm with the rules and no map was told to stop early and was not told where to look.

**What changed.** The look-up instructions moved out of the map into `rules.md` and were reworded. They now say to check whether a changes document replaces a section before relying on it, and to open what is needed to be sure. The map now lists what each document covers and nothing else.

**What the next rehearsal showed.** In the fifth rehearsal, on new documents, every arm that had the documents was right on 10 of 10 questions in the first run, by both marking passes. That includes the arm with the rules loaded and no map.

Nothing was changed for this library before or during the run. `identity.md`, `rules.md` and `examples.md` are the files frozen after the fifth rehearsal. The map is generated by script from the headers of the documents in `reference/`.

**After this run.** The control showed the folder losing marks on three questions. The folder in this repo was left as tested. One line was then added to `rules.md` on a separate copy and the three core set-ups were run again, as the one labelled change the pre-registration allows. `folder-change/README.md` has the line, the re-run and what it does and does not show. Run beside the unchanged folder the next day, the changed folder was not marked right more often, so the line is not shown to help; `folder-change/side-by-side/what-was-found.md` has that. It is a follow-up and changes no figure on this page.

## The same questions in a Claude project

Done on Monday 2026-10-12 in claude.ai on a team plan, with the model the product called Sonnet 5.5 at Medium effort. Web search off. Every connector off. Memory off and no personal instructions. The account's first name is still passed to the model by the product.

With the folder: a private project holding the four instruction files and the 18 documents, with no project instructions. Without: a plain chat, no project, no documents. One new chat per question, the prompt exactly as in `questions.md`, no follow-up.

The prompts were not typed by hand. The build session sent them through the browser; `DEVIATIONS.md` says how.

| Question | With the folder | Without |
|---|---|---|
| Q1 | correct | no answer |
| Q2 | correct | no answer |
| Q3 | incorrect | no answer |
| Q4 | incorrect | no answer |
| Q5 | incorrect | no answer |
| Q6 | correct | no answer |
| Q7 | incorrect | incorrect |
| Q8 | correct | no answer |
| Q9 | correct | no answer |
| Q10 | correct | no answer |

Right answers: 6 of 10 with the folder, 0 of 10 without.

Marked by Gemini, a model from another maker, from a sheet of the 20 answers shuffled under random numbers, with the rules in `MARKING.md`. "No answer" is its grade `insufficient`: the model said it did not have the rules and gave no conclusion. It was also asked to guess which answers had instructions behind them and was right on 20 of 20, so the marking was not blind in effect.

Where the folder was marked wrong. On Q3, Q4, Q5 and Q7 the answer gives the same yes or no and the same figure as the expected answer, and leaves out something the "Correct requires" line asks for: the ordinary procedure the exception departs from (Q3), the £4 member price (Q4), that the child is under 12 and accompanied (Q5), and the 15 minutes (Q7). The folder's `rules.md` tells the model to answer what was asked and then stop. That reading is ours, not the marker's, and we have read the key.

Where no folder went wrong. On Q7 the plain chat said the band may play until 21:45, reasoning from the question's own wording. The documents say 21:30.

What this can and cannot show. A project loads the files for you and keeps no record of what the model read, so there are no steps to count here. It shows whether the answers were right. It was done once. Without the documents the model cannot know the answers, so the gap between the two columns is mostly the documents, not the instruction files; the run that separates those two is the scripted one this repo is built around. The saved chats are in `claude-project/`, with the marking sheet, the marks and the key that says which number was which.

One batch of four plain chats timed out on the way back. The chats had been sent and answered; their answers were read from the chat history and not asked again.

## Can the test be trusted

### Against itself

| Arm | Runs compared | Fewer | More | Equal | What the rule says |
|---|---|---|---|---|---|
| Documents only | 1 against 2 | 2 | 1 | 7 | no clear difference |
| Documents only | 1 against 3 | 0 | 0 | 10 | no clear difference |
| Documents only | 2 against 3 | 1 | 2 | 7 | no clear difference |
| Folder loaded first | 1 against 2 | 2 | 0 | 8 | no clear difference |
| Folder loaded first | 1 against 3 | 0 | 0 | 10 | no clear difference |
| Folder loaded first | 2 against 3 | 0 | 2 | 8 | no clear difference |

The rule named no direction between runs of the same arm. This checks that the result is not wildly unstable; it does not show how often the rule is wrong.

| Arm | Run | Answers | Correct, marker one | Correct, marker two |
|---|---|---|---|---|
| Documents only | 1 | 10 | 10 | 10 |
| Documents only | 2 | 10 | 10 | 10 |
| Documents only | 3 | 10 | 10 | 10 |
| Folder loaded first | 1 | 10 | 10 | 8 |
| Folder loaded first | 2 | 10 | 9 | 8 |
| Folder loaded first | 3 | 10 | 9 | 7 |

Between runs of one arm the count of right answers moved by as much as 1 in a run. Read any gap between the two arms against that.

### Against a folder made wrong on purpose

A folder made wrong on purpose, its map pointing to the wrong documents, took 3.33 steps per session against 2.37 for the true folder: more on 8 of 10 questions, fewer on 1. Right answers of 30, by the two marking passes: 25 and 27 with the wrong map, 28 and 23 with the true one. Neither the steps nor the right answers show a clear difference by the rule fixed in advance. This run did not show that the test can catch a folder that misleads.

## What each arm could see

| Arm | Documents it could open | Instruction files on disk | Loaded before the question |
|---|---|---|---|
| Empty | 0 | none | nothing |
| Documents only | 18 | none | nothing |
| Folder on disk, nothing loaded | 18 | examples.md, identity.md, README.md, rules.md | nothing |
| Folder loaded first | 18 | examples.md, identity.md, README.md, rules.md | README.md, identity.md, rules.md, examples.md |
| Folder loaded first, map made wrong on purpose | 18 | examples.md, identity.md, README.md, rules.md | README.md, identity.md, rules.md, examples.md |

## Loading is the only switch

| Arm | Instruction files loaded first | Steps | Characters loaded first | Characters fetched by tools | Characters read in all | Instruction files it opened itself | Documents opened | Turns | Tokens in | Tokens in, new | Tokens out | Sessions with no step |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Documents only | 0 | 5.03 | 0 | 7191 | 7191 | 0.00 | 2.77 | 6.03 | 19817.53 | 3536.13 | 893.37 | 0 of 30 |
| Folder on disk, nothing loaded | 0 | 6.07 | 0 | 10104 | 10104 | 1.27 | 2.63 | 7.07 | 24504.13 | 4742.63 | 907.13 | 0 of 30 |
| Folder loaded first | 4 | 2.37 | 5261 | 4428 | 9689 | 0.00 | 2.00 | 3.37 | 18156.00 | 2094.37 | 386.63 | 0 of 30 |

What the columns mean:

- A step is one search, one file listing or one file opened by the model.
- Characters loaded first is the size of the instruction files handed over before the question. Characters fetched is the text the tools returned. Together they are what was put in front of the model, apart from the fixed instructions every arm gets.
- A document counts as opened only when the model opened the file. Text that a search returned is not counted, so this column can be lower than what the model actually read.
- Tokens in is everything sent to the model: the fixed instructions, any files loaded first, and everything the tools returned. The whole conversation is sent again on every turn, so an arm that takes more turns is counted for the same text several times. That is why tokens in can fall while characters read rise.
- Tokens in, new, leaves out what the service read back from its own cache, which is mostly that repeated text. It depends on what the service had cached at that moment, so treat it as a rough guide.
- Tokens out is everything the model wrote: its tool requests, its own working-out and the answer.

## Question by question

| Question | Arm | Steps | Steps in each run | Documents opened | Searches | Tokens in | Tokens out | Seconds | Answer words | Correct (marker one / two) |
|---|---|---|---|---|---|---|---|---|---|---|
| Q1 | Full package | 2.00 | 2, 2, 2 | 2.00 | 0.00 | 15867.00 | 281.00 | 3.27 | 59.33 | 3 of 3 / 3 of 3 |
| Q1 | Documents only | 5.00 | 5, 5, 5 | 3.00 | 1.00 | 18473.33 | 734.00 | 6.80 | 100.67 | 3 of 3 / 3 of 3 |
| Q1 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9824.33 | 439.67 | 4.33 | 90.00 | 0 of 3 / 0 of 3 |
| Q2 | Full package | 2.00 | 2, 2, 2 | 2.00 | 0.00 | 15844.00 | 385.67 | 4.50 | 73.33 | 3 of 3 / 3 of 3 |
| Q2 | Documents only | 5.33 | 5, 6, 5 | 3.33 | 1.00 | 18892.67 | 775.67 | 6.23 | 132.33 | 3 of 3 / 3 of 3 |
| Q2 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9824.00 | 600.67 | 5.83 | 173.67 | 0 of 3 / 0 of 3 |
| Q3 | Full package | 2.00 | 2, 2, 2 | 1.00 | 1.00 | 14861.00 | 298.33 | 3.50 | 38.00 | 3 of 3 / 0 of 3 |
| Q3 | Documents only | 4.00 | 4, 4, 4 | 2.00 | 1.00 | 17747.67 | 761.67 | 8.67 | 159.67 | 3 of 3 / 3 of 3 |
| Q3 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9822.33 | 525.00 | 5.03 | 136.00 | 0 of 3 / 0 of 3 |
| Q4 | Full package | 4.00 | 4, 4, 4 | 4.00 | 0.00 | 27581.00 | 472.33 | 5.00 | 83.67 | 3 of 3 / 2 of 3 |
| Q4 | Documents only | 6.00 | 6, 6, 6 | 4.00 | 1.00 | 19125.67 | 1037.67 | 9.13 | 169.67 | 3 of 3 / 3 of 3 |
| Q4 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9864.33 | 606.67 | 6.60 | 175.00 | 0 of 3 / 0 of 3 |
| Q5 | Full package | 2.33 | 2, 3, 2 | 1.67 | 0.67 | 20967.00 | 379.33 | 5.10 | 50.33 | 3 of 3 / 3 of 3 |
| Q5 | Documents only | 6.00 | 6, 6, 6 | 3.67 | 1.33 | 22189.00 | 826.67 | 7.17 | 130.00 | 3 of 3 / 3 of 3 |
| Q5 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9794.33 | 529.00 | 5.27 | 162.00 | 0 of 3 / 0 of 3 |
| Q6 | Full package | 2.00 | 2, 2, 2 | 2.00 | 0.00 | 15883.00 | 291.33 | 3.03 | 63.67 | 3 of 3 / 3 of 3 |
| Q6 | Documents only | 4.33 | 4, 5, 4 | 2.00 | 1.33 | 20566.00 | 722.67 | 8.47 | 100.33 | 3 of 3 / 3 of 3 |
| Q6 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9789.33 | 467.00 | 4.50 | 111.67 | 0 of 3 / 0 of 3 |
| Q7 | Full package | 2.00 | 2, 2, 2 | 2.00 | 0.00 | 15951.00 | 279.67 | 2.97 | 61.00 | 1 of 3 / 0 of 3 |
| Q7 | Documents only | 3.67 | 4, 3, 4 | 0.67 | 2.00 | 22619.00 | 822.33 | 8.30 | 139.67 | 3 of 3 / 3 of 3 |
| Q7 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9828.67 | 606.67 | 5.93 | 183.33 | 0 of 3 / 0 of 3 |
| Q8 | Full package | 2.00 | 2, 2, 2 | 2.00 | 0.00 | 15923.00 | 366.33 | 3.63 | 101.33 | 3 of 3 / 3 of 3 |
| Q8 | Documents only | 5.00 | 5, 5, 5 | 3.00 | 1.00 | 18753.33 | 802.67 | 8.03 | 127.67 | 3 of 3 / 3 of 3 |
| Q8 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9848.00 | 513.00 | 5.07 | 127.00 | 0 of 3 / 0 of 3 |
| Q9 | Full package | 3.33 | 3, 4, 3 | 2.33 | 1.00 | 23862.00 | 676.67 | 6.43 | 101.67 | 3 of 3 / 3 of 3 |
| Q9 | Documents only | 7.00 | 7, 7, 7 | 5.00 | 1.00 | 23560.67 | 1501.00 | 13.17 | 289.33 | 3 of 3 / 3 of 3 |
| Q9 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9826.67 | 574.00 | 5.40 | 171.67 | 0 of 3 / 0 of 3 |
| Q10 | Full package | 2.00 | 2, 2, 2 | 1.00 | 1.00 | 14821.00 | 435.67 | 4.13 | 102.00 | 3 of 3 / 3 of 3 |
| Q10 | Documents only | 4.00 | 4, 4, 4 | 1.00 | 2.00 | 16248.00 | 949.33 | 9.53 | 265.33 | 3 of 3 / 3 of 3 |
| Q10 | Empty | 2.00 | 2, 2, 2 | 0.00 | 1.00 | 9827.67 | 568.67 | 5.97 | 156.33 | 0 of 3 / 0 of 3 |

## How this was run

- Model `claude-sonnet-5-5`, effort `medium`, Claude Code 2.1.296.
- Started 2026-10-12 (UTC). Every session is told the date it runs on, so an answer to a question that leaves out a date can depend on the day.
- 10 questions, 19 arms, 3 run(s): 570 sessions.
- Each question was asked in its own fresh session. Nothing carried over from one to the next.
- Sessions ran one at a time. Within each question, the arms ran in an order drawn from the seed `40e9053b0c2263db`.
- The transcripts in `control/` and `treatment/` are filed in question order, which is not the order they ran in.
- The files staged for each arm were fingerprinted again after the last session: none of the 19 arms had changed.

## Limits

- One model, one day, one tool. Step counts can shift between versions of the tool.
- Made-up documents, written by one outside AI product in two answers to our prompt, not reviewed. Two of them refer to a document that was never written. The question writer reported two contradictions in them and wrote no question on either.
- Ten questions. They are too few to rank the arms on right answers, and they speak for themselves, not for other questions.
- The questions came from one writer. Although asked not to, it wrote four pairs of questions that rest on the same rule. The draw put one of each pair in the exam and the other among the held-out questions, so four held-out questions turn on a rule an exam question also turns on. `generator/key-check.md` lists the pairs.
- Three of the ten expected answers, and two of the held-out ones, carry a figure the question does not ask for. A marker may grade an answer wrong for leaving it out. The folder's rules tell the model to answer what was asked and stop, so this can count against the folder.
- Three of the folder's four files were tuned on rehearsals that used documents of this kind. New documents of the same kind test the folder on that kind only.
- The verdict rule does not credit a folder that reaches more right answers; it asks only that right answers do not fall. It counts text in characters and not cost; tokens and seconds are printed beside it.
- 9 of 10 is our own threshold, not a statistical test. Its stated error rate assumes the ten questions move independently of each other.
- The two full marking passes are sessions of the model under test reading the same rules, so their agreement is not two independent opinions. A model from another maker marks the two headline arms only.
- It tests loading a folder's files first in a read-only question task. It says nothing about staged workspaces or human review.
- Fewer steps is not better in itself. It says the path to the answer changed.
- The steps exist only in this tool's logs. In a Claude project the files are loaded for you and nothing records what the model read, so that run can show right answers and nothing else.
- A library four times the size was tried once (`pilots/size-probe/NOTES.md`). The folder's cost grew and the control's did not. Nothing here says what happens where searching is hard: file names that say nothing, questions worded differently from the documents, or very long documents.

## Changes to the analysis after a run

What was done differently from the plan, and what was corrected after the run, newest first where it concerns the results page.

## Tuesday 2026-10-13, after the entry was posted: three additions and one correction

None of this touches the sealed run, its marks or the verdict.

- **The offline checks on Linux and macOS.** GitHub's machines now run the four checks on Linux, macOS and Windows each time the repo changes. `after-the-run.md` has it.
- **The re-runs were marked.** The answers of three re-runs were marked with the set-up hidden, against expectations committed first. `after-the-run/rerun-marks/` has it.
- **The unchanged folder was run beside the changed one,** against expectations committed first. Two of the six did not hold: the changed folder was not marked right more often. `folder-change/side-by-side/` has it.
- **A count that needs no marker.** `tools/key-facts.mjs` searches each answer for the facts its question's "Correct requires" line asks for. It was written after the run, because the marks were the one measure that did not come out the same way from batch to batch. Its patterns and what we expected were committed first; one of the seven did not hold. It is not a mark and is no part of the verdict. `after-the-run/key-facts/` has it. On the landing page and the summary it takes the place of the two marking passes for the question of which instruction file costs the answers their detail.
- **One more rule in the history check, after a last outside read.** It did not stop the key, its fingerprint, the run's manifest or the coded tables being changed after they were committed. (`key-staged.json`, the list of what each set-up held, is not covered by it.) None of them ever was, and it now fails if one is.
- **A correction that follows from that.** `folder-change/README.md`, the landing page, the guide and the summary had said the one added line brought the lost marks back. They now say it is not shown to help. The figures of the first follow-up are unchanged; the reading of them is withdrawn.

## Monday 2026-10-12, after the verdict: a follow-up on a separate copy, two stopped runs, and a second machine

None of this touches the sealed run, its marks or the verdict.

- **The one labelled change.** One line was added to `rules.md` on a separate copy of this repo, and the full folder, the documents alone and nothing were run again on the ten exam questions and the ten held-out questions. `folder-change/README.md` has it. The folder in this repo is unchanged.
- **Two runs were stopped and started again.** The first wording of the added line took `rules.md` over the folder's own 220-word limit. Both follow-up runs were stopped at 19:09 UTC after six sessions each, before any answer was read. The line was shortened and both were started again at 19:10 UTC. The twelve logs of the stopped runs are in `folder-change/false-start/`, and the first wording is quoted in `folder-change/README.md`.
- **The follow-up's documents-only arm is its own.** It was run again beside the changed folder and is not the sealed run's.
- **Two commands were made harder to misuse, before the repo was made public.** Run with no arguments, `tools/rerun.mjs` stopped and suggested a run name that does not exist; it now uses the sealed run, as `verify/check.mjs` already did. On a shallow clone `verify/history.mjs` reported that files were committed in the wrong order, because a shallow clone has no order to read; it now says the clone is shallow and how to fetch the rest. Neither change touches how a session is run, counted or marked.
- **Five more changes to the commands and one to the guide, after outside reads of the public repo.** The first of the two changes above left the re-run writing to a folder named `null-rerun-...`; it is now named after the run it compares with. `tools/reveal.mjs` run without `--root` on a run already revealed at the top of the repo moved the reveal, after which `verify/check.mjs` no longer covered `control/`, `treatment/` and `results.md`; it now stops. `verify/history.mjs` did not check that the marks, `PREREGISTRATION.md` and `MARKING.md` were left alone after they were committed; none of them ever was changed, and it now fails if one is changed or removed. A first version of this rule missed a marks file that had been removed; a second outside read found that, and it is fixed. `tools/ask.mjs` exited as if all was well when no session could start; it now exits with an error. The re-run command also gained one printed line, the text put in front of the model in the committed run and in the re-run, because an outside read ranked "the re-run reproduces steps only" first among this entry's weaknesses; the line is shown beside the steps and is no part of "Reproduces". The change was tested with a full re-run, kept in `after-the-run/rerun-after-changes/`. The same read found that `START-HERE.md` said the checks cover everything, when they cover the sealed run; it now says which folders they do not cover.
- **A run by an outside person.** A community member with no part in the build ran the re-run command and one question of their own on their own machine. Their first attempt stopped at step one, which is why `RUN.md` gained its eighth edit. What they sent back and their raw logs are in `after-the-run/outsider/`. Their reply named two people and a file; those three lines are left out of the copy here.
- **A second machine.** The re-run command, a made-up question and the offline checks were run on a second laptop. What they printed was pasted back and is in `after-the-run/second-machine/`. The raw logs stayed on that machine.

## Monday 2026-10-12, after the reveal: four faults in how results are presented, found by two outside reads

Two fresh sessions were given the competition rules and a clone of this repo and asked to break it. They found the faults below. The fixing commit is the one that added this note. The page and the code as they stood are in the history at the commit before it. No count of steps, no grade and no headline sentence changed, and the verdict on the folder is the same.

1. **The wrong-map check claimed more than the marks support.** The page said "The test caught the bad folder" on the strength of right answers, 25 against 28. That was the first marking pass alone. The second pass has it the other way round, 27 against 23. On steps the wrong map was higher on 8 of 10 questions, which is below the 9-or-10 rule. The check now needs fewer right answers by both passes, and the sentence prints both. On this run it now reads that the run did not show the test can catch a folder that misleads. Files: `verify/results.mjs`.
2. **A sentence left over from the rehearsals.** The line listing faults by arm ended "In the empty arm the model sometimes looks outside its folder and is refused." In this run no session was refused anything. The sentence is removed. Files: `verify/results.mjs`.
3. **Usage-warning sessions were counted and not shown.** The pre-registration says they are counted and shown. All 570 sessions ran while the account was past a usage-warning mark; `runs/sealed/scan.md` said so and the results page did not. It now does. Files: `verify/results.mjs`.
4. **The readable transcripts hid what a search looked for.** When the model gave a search both a pattern and a folder, the readable page printed only the folder, as `Grep .`. It now prints both. This changed 56 of the 90 readable transcripts: 20 under `control/documents-only/`, 25 under `control/empty/` and 11 under `treatment/`. An earlier wording of this note said 37, which was the number of files where the folder was printed as a bare `.`; the count of files changed is 56. No raw log changed: the 90 `.jsonl` files beside them were always complete and are byte for byte what the run wrote. Files: `lib/session.mjs`, `lib/transcript.mjs`.

`verify/selftest-proof.mjs` gained a case for the first fault.

## Monday 2026-10-12, the Claude project run was not done by hand

`EXPERIMENT.md` and `PREREGISTRATION.md` say the ten questions are asked "by hand" in a Claude project and in a plain chat. They were asked through the browser by the build session, which is a Claude model driving the page: it typed each prompt, sent it, and copied the page text of the answer. No follow-up was sent and no chat was redone. A person gave the go-ahead and changed the account's settings; a person did not type the prompts.

What that changes: nothing in what was asked. The prompts are the ones in `questions.md`, typed character for character, and each saved chat shows the prompt as the page displayed it. The build session has read every expected answer, so it does not mark these answers. The pre-registration said the person marking them would see which answer was which; they were marked by Gemini instead, from a shuffled sheet.

One batch of four plain chats timed out on the way back. The chats had been sent and answered; their answers were read from the chat history afterwards and not asked again.

## Statements in the pages written before the run that are wrong or were not carried out

Those pages are left as they were written, with one exception: `RUN.md` was edited after the run in ten places. A sentence at the top says so. Two notes under "What you need", on starting Claude Code on Windows and on what a session inherits. One line saying to clone the repo in full, because the history check reads every commit. Two paragraphs under the re-run step: what to do if every session is listed as a fault, and that a re-run compares steps and does not mark answers. And the words "named the same way everywhere" were taken out of the re-run step, because they were not true. The eighth was added after the first outside person to try a re-run stopped at the first step: Claude Code was installed only as the VS Code extension, so there was no `claude` command, and the page said to set `CLAUDE_BIN` without saying where the extension keeps the program. It now does. The ninth and tenth are two corrections found by an outside read after the repo was public: the tools leave their staging folders behind when they stop on an error, and web search should be off in the project as well as in the plain chat, as it was in our own run. An earlier wording of this note listed three of the ten. They help a visitor run it and change nothing about how the sealed run was made. The corrections to everything else are here.

- **"No document or question from any rehearsal is in this repo"** (`PREREGISTRATION.md`, `PILOTS.md`). None is in the exam, the pool or `reference/`. But `pilots/size-probe/` was copied in whole from the last rehearsal's repo, and its logs and manifests carry that rehearsal's documents, questions and expected answers (a boat club and a lending library).
- **`pilots/size-probe/NOTES.md` says "this repo's 18 documents".** It was written in the rehearsal's repo and means that repo. Its small library is the rehearsal's 18 documents, not Fenwray and Quillbrook, and its sessions are dated Sunday 2026-10-11, before this entry's documents existed.
- **`PILOTS.md` lists a re-run from a fresh clone and the size probe as two items.** The small-library leg of the size probe is that same re-run: 30 sessions, 2.70 against 5.40. The nineteen-arm rehearsal gave the same two means from different sessions.
- **"A re-run by a second person on another machine was planned and has not been done. The run was made on one machine"** (`PREREGISTRATION.md`). True when written. Both were done afterwards: a second machine, and a second person on their own. `after-the-run.md` has them.
- **"Committed before any folder file"** (`EXPERIMENT.md`, `RUN.md`). The questions were committed before the folder's four instruction files. The documents in `reference/`, which the competition counts as part of the folder, were committed first, because the questions were written from them.
- **"Each file's word and token count is printed beside its effect"** (`EXPERIMENT.md`). It is not on the results page. The sizes are in `after-the-run.md`.
- **Held-out questions "reported beside the headline"** (`PREREGISTRATION.md`). They are in `after-the-run.md` and `runs/heldout/report.md`, not on the results page.
- **"A library four times the size"** (`limits.md`, `PILOTS.md`). 52 documents against 18 is 2.9 times the documents and 3.9 times the text.
- **`RUN.md` said the three arms are named the same way everywhere.** They are not, and the words have been taken out of it: the results page says "full package", "folder loaded first" and "the full folder" for the same arm.
- **`RUN.md` on starting Claude Code.** On Windows, `CLAUDE_BIN` has to point at `claude.exe`; a `.cmd` launcher will not start. And a session inherits only a short list of variables, so sign-in by API key, Bedrock, Vertex or a proxy set in the shell is dropped. `RUN.md` now says both.
- **"Three of the ten expected answers ask for a figure the question does not"** (`limits.md`, `PREREGISTRATION.md`). That counted too few. At least five of the ten keys ask for something the question does not: Q3 the ordinary procedure the exception departs from, Q4 the member price, Q5 that the child is under 12 and accompanied, Q7 the minutes over, Q10 the quorum. The folder lost marks on Q3, Q4 and Q7 in the scripted run, and on Q3, Q4, Q5 and Q7 in the Claude project run. Q3 and Q5 were not foreseen.
- **The key check's reading of "differ"** was made after seeing the checker's answers; `generator/key-check.md` says so. Two of the three questions the folder lost on, Q4 and Q7, are among the five that the stricter reading would have sent to a dispute round.

# Appendix: every arm

Everything above compares the full folder with the documents alone. The tables below hold every other arm.

## Mean steps in the sixteen switch arms

| README, rules \ identity, examples | neither | identity | examples | both |
|---|---|---|---|---|
| neither | 6.07 | 4.60 | 4.60 | 3.70 |
| README | 2.50 | 2.57 | 2.47 | 2.40 |
| rules | 3.70 | 3.57 | 3.47 | 3.60 |
| README + rules | 2.47 | 2.43 | 2.37 | 2.37 |

## Each file: the eight arms with it loaded against the eight without

Each figure is an average across every mix of the other three files, not the effect of the file alone. Two more readings sit beside it: the file loaded alone against nothing loaded, and the full package against the full package without that file. A file that is not loaded is still on disk. Only the two predictions are tested; the other rows are shown and not claimed.

| File | Steps, loaded | Steps, not loaded | Questions with fewer steps | Alone, against none loaded | Full, against full without it | Words, loaded | Words, not loaded | Questions with fewer words | Opened anyway when not loaded | Prediction |
|---|---|---|---|---|---|---|---|---|---|---|
| README.md | 2.45 | 4.16 | 10 | 2.50 against 6.07 | 2.37 against 3.60 | 98.45 | 96.47 | 4 | 32 of 240 | fewer steps: supported |
| identity.md | 3.15 | 3.45 | 10 | 4.60 against 6.07 | 2.37 against 2.37 | 104.14 | 90.79 | 0 | 0 of 240 | no prediction; shown, not claimed |
| rules.md | 3.00 | 3.61 | 10 | 3.70 against 6.07 | 2.37 against 2.40 | 85.11 | 109.82 | 10 | 17 of 240 | shorter answers: supported |
| examples.md | 3.12 | 3.49 | 10 | 4.60 against 6.07 | 2.37 against 2.43 | 67.97 | 126.95 | 10 | 0 of 240 | no prediction; shown, not claimed |

## Correct answers, marked with the arm hidden

The same model marked 574 answers twice without seeing the arm (the answers from every clean session, plus a few planted ones with a known grade). The two passes gave the same grade on 519 and the same unsupported-statement mark on 568. That is one marker repeated, not two opinions. A model from another maker also marked the answers from the two arms the headline compares.

| Arm | Marker | Answers | Correct | Incorrect | Insufficient | Unsupported statements | Unsettled |
|---|---|---|---|---|---|---|---|
| Folder loaded first (all four files) | one | 30 | 28 | 2 | 0 | 0 | 5 |
| Folder loaded first (all four files) | two | 30 | 23 | 7 | 0 | 0 | 7 |
| Folder loaded first (all four files) | outside | 30 | 23 | 7 | 0 | 0 | 0 |
| Documents only | one | 30 | 30 | 0 | 0 | 4 | 0 |
| Documents only | two | 30 | 30 | 0 | 0 | 1 | 0 |
| Documents only | outside | 30 | 30 | 0 | 0 | 0 | 0 |
| Empty | one | 30 | 0 | 0 | 30 | 0 | 2 |
| Empty | two | 30 | 0 | 0 | 30 | 0 | 0 |
| Folder on disk, nothing loaded | one | 30 | 29 | 1 | 0 | 0 | 1 |
| Folder on disk, nothing loaded | two | 30 | 29 | 1 | 0 | 0 | 1 |
| Loaded: examples | one | 30 | 28 | 2 | 0 | 0 | 3 |
| Loaded: examples | two | 30 | 28 | 2 | 0 | 0 | 4 |
| Loaded: rules | one | 30 | 30 | 0 | 0 | 0 | 2 |
| Loaded: rules | two | 30 | 27 | 3 | 0 | 0 | 5 |
| Loaded: rules + examples | one | 30 | 28 | 2 | 0 | 1 | 6 |
| Loaded: rules + examples | two | 30 | 24 | 6 | 0 | 1 | 5 |
| Loaded: identity | one | 30 | 30 | 0 | 0 | 0 | 0 |
| Loaded: identity | two | 30 | 30 | 0 | 0 | 0 | 0 |
| Loaded: identity + examples | one | 30 | 28 | 2 | 0 | 0 | 2 |
| Loaded: identity + examples | two | 30 | 29 | 1 | 0 | 0 | 3 |
| Loaded: identity + rules | one | 30 | 26 | 4 | 0 | 0 | 5 |
| Loaded: identity + rules | two | 30 | 26 | 4 | 0 | 0 | 4 |
| Loaded: identity + rules + examples | one | 30 | 27 | 3 | 0 | 0 | 4 |
| Loaded: identity + rules + examples | two | 30 | 27 | 3 | 0 | 0 | 3 |
| Loaded: README | one | 30 | 30 | 0 | 0 | 3 | 2 |
| Loaded: README | two | 30 | 29 | 1 | 0 | 4 | 1 |
| Loaded: README + examples | one | 30 | 29 | 1 | 0 | 1 | 2 |
| Loaded: README + examples | two | 30 | 26 | 4 | 0 | 1 | 7 |
| Loaded: README + rules | one | 30 | 30 | 0 | 0 | 0 | 1 |
| Loaded: README + rules | two | 30 | 27 | 3 | 0 | 0 | 5 |
| Loaded: README + rules + examples | one | 30 | 30 | 0 | 0 | 0 | 3 |
| Loaded: README + rules + examples | two | 30 | 25 | 5 | 0 | 0 | 5 |
| Loaded: README + identity | one | 30 | 30 | 0 | 0 | 0 | 1 |
| Loaded: README + identity | two | 30 | 29 | 1 | 0 | 0 | 1 |
| Loaded: README + identity + examples | one | 30 | 28 | 2 | 0 | 0 | 3 |
| Loaded: README + identity + examples | two | 30 | 27 | 3 | 0 | 0 | 5 |
| Loaded: README + identity + rules | one | 30 | 28 | 2 | 0 | 0 | 4 |
| Loaded: README + identity + rules | two | 30 | 25 | 5 | 0 | 0 | 5 |
| Folder loaded first, with a map that points to the wrong documents | one | 30 | 25 | 5 | 0 | 1 | 5 |
| Folder loaded first, with a map that points to the wrong documents | two | 30 | 27 | 3 | 0 | 1 | 6 |

Each marker was also asked to guess, for every answer, whether instructions had been loaded. The guesses are scored on the two arms the headline compares, where half the answers had the folder loaded. Right about half the time means the marker could not tell the arms apart; nearly always right or nearly always wrong means the marker could.

- Marker one guessed on 58 answers and was right on 40.
- Marker two guessed on 60 answers and was right on 39.
- Marker outside guessed on 60 answers and was right on 1.

A marker could tell the arms apart from the answers alone. The marking was coded and shuffled, but it was not blind in effect. Read the counts of correct answers with that in mind.

A few answers with a known grade were planted on each sheet.

- Marker one gave the known grade to 4 of 4 planted answers.
- Marker two gave the known grade to 3 of 4 planted answers.
- Marker outside gave the known grade to 4 of 4 planted answers.
