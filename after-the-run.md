# After the run

Everything on this page was done after the key was revealed. None of it changes `results.md`, which is built from the logs and the marks and is checked against them. It is here so a reader can see what was looked at afterwards and what was left alone.

## A person marked the seven answers the markers did not all pass

Seven of the full folder's 30 answers were marked wrong by at least one of the three markers. All 30 of the documents-only answers were marked right by all three. The person who built this entry marked those seven by the rules in `MARKING.md`. He knew they were folder answers. He had been told which three questions the losses were on, and had not seen any marker's grade for any single answer.

| Question, run | Pass one | Pass two | Gemini | Person |
|---|---|---|---|---|
| Q3, run 1 | correct | incorrect | incorrect | correct |
| Q3, run 2 | correct | incorrect | incorrect | correct |
| Q3, run 3 | correct | incorrect | incorrect | correct |
| Q4, run 3 | correct | incorrect | incorrect | correct |
| Q7, run 1 | correct | incorrect | incorrect | incorrect |
| Q7, run 2 | incorrect | incorrect | incorrect | incorrect |
| Q7, run 3 | incorrect | incorrect | incorrect | incorrect |

His seven marks are in `after-the-run/person-marks.csv`. He marked only answers that a marker had failed, so his marks could only raise the folder's count, never lower it. If the other 23 answers stand as marked, his count for the folder is 27 of 30. By every marker the folder has fewer right answers than the documents alone, so the verdict does not turn on who marked.

What the seven have in common. Each gives the same yes or no and the same figure as the expected answer. Each leaves out something the "Correct requires" line asks for: on Q3 the ordinary procedure the exception departs from, on Q4 the £4 member price, on Q7 that 21:45 is 15 minutes over. The markers split on whether leaving that out makes an answer wrong. The person passed Q3 and Q4 and failed Q7.

## What the pre-registration expected, and what happened

It expected fewer steps, more text and so the verdict "did not earn its place". All three happened. It also named three questions, Q4, Q7 and Q10, where the folder might lose marks for being brief. The losses came on Q3, Q4 and Q7. Q10 was marked right on every pass; Q3 was not foreseen.

## A result the design flagged

The design said that if steps fell through a file other than the map, it would mean the model had been told to read less. Steps did fall with every one of the four files, on 10 of 10 questions each. With nothing loaded the model took 6.07 steps; with only the map, 2.50; with only the rules, 3.70; with only `identity.md`, which is 50 words and says nothing about looking things up, 4.60; with only `examples.md`, 4.60. So part of the saving is not the map pointing the way. Being handed any instructions first made the model look around less. Only the map and the rules had predictions; the other two are shown and were not claimed.

`examples.md` also shortened answers more than `rules.md` did: 68 words against 127 with and without the examples, and 85 against 110 for the rules.

## What this run says to change in the folder

`rules.md` says: "Answer every part asked. Then stop." It worked: answers with the rules loaded were shorter on 10 of 10 questions. Our reading is that it also cost marks, because a short answer says what applies and not what the asker wrongly expected.

The change it points to is one line: when a figure or a rule the asker is relying on does not apply, say which one and by how much. The pre-registration allows one labelled change with its own re-run.

Before changing anything, the loss was checked on questions the folder had never been tested on. That is the held-out section below: on ten more questions from the same pool, marked the same way, the folder lost no marks at all. So the control did not show a fault in the folder that repeats. Our reading is that it showed answer keys that ask for more than their questions do, and a folder that answers the question asked. That reading is not proved: two of the held-out keys also ask for something extra, and the folder lost nothing on them, so strict keys are not the whole story.

The folder at the top of this repo was therefore left as tested. Adding the line there would have fitted the folder to three keys on the day they were seen, and on the held-out questions there was nothing to fix. What the control changed is what we would claim for the folder: it halves the steps, it does not make answers more right, and it costs more text than it saves.

## The one labelled change, made on a separate copy

Leaving the folder alone left a question open: would the line do what this page says it would? So the one change the pre-registration allows was made on a separate copy of the repo and re-run, on the exam questions and on the held-out questions. `folder-change/README.md` has all of it. In short:

- The line added to `rules.md`: "Say what would otherwise apply, and the difference."
- Marked right, changed folder: 30 of 30 on all three gradings, on both sets of questions. Documents alone: the same.
- Steps: 2.33 against 5.20 on the exam questions and 2.43 against 5.13 on the held-out ones, fewer on 10 of 10 both times.
- Text: 9,579 characters against 7,665. Still more with the folder.

By the rule fixed before the first run the changed folder still does not earn its place, because the text still rises. The line is fitted to the questions it was tested on, so this is a follow-up and not a second verdict. `results.md` is unchanged.

## The re-run a visitor is invited to do

Done once from a fresh clone of this repo, on the same day and machine, with `node tools/rerun.mjs --name sealed`: 30 sessions.

- Committed run: fewer steps with the folder on 10 of 10 questions, 2.37 per session against 5.03.
- Re-run: fewer steps with the folder on 10 of 10 questions, 2.50 against 5.10.

The command printed "Reproduces: YES". Its 30 raw logs, readable transcripts and what it printed are in `after-the-run/rerun/`. From the same clone, every self-test passed, `verify/check.mjs` and `verify/history.mjs` passed, and running the draw again on the committed pool gave the same ten exam questions.

## The same re-run on a second machine

A second laptop that had never held this repo. Git, Node 24.20.0 and Claude Code 2.1.296 were installed on it that afternoon, the repo was cloned from GitHub, and the same command was run: 30 sessions.

- Re-run: fewer steps with the folder on 10 of 10 questions, 2.30 per session against 5.20.

The command printed "Reproduces: YES", with no session left out. What it printed is in `after-the-run/second-machine/rerun-printed.txt`, as pasted back from that machine. The raw logs stayed there.

`node tools/ask.mjs` was run there too, with a question made up on the spot: the cost of the Meeting Room for two hours on 5 March 2026. The full folder and the documents alone both answered £24, which is what the documents give. The folder took 2 steps and the documents alone 4. What it printed is in `after-the-run/second-machine/ask-printed.txt`.

The offline checks were run there as well, at commit 93195b0: `verify/check.mjs`, `verify/history.mjs` and `verify/folder.mjs` passed, and 172 of 172 self-test cases passed. What they printed is in `after-the-run/second-machine/checks-printed.txt`.

It was the same Claude account, the same day and the same version of the tool, run by the person who built this entry. Not tried on that machine: another account, another day, another version of the tool. The next section is a run by a person with no part in the build.

## A re-run by someone who did not build it

Jordan Shaw, a member of the same online community with no part in building this entry, ran it on their own Windows machine with their own installation of Claude Code (2.1.296, Node 22.23.2), from a fresh clone of the public repo at commit 48c0db8. They were asked to change nothing and to send back whatever happened.

**The first attempt stopped at step one.** Their Claude Code was installed only as the VS Code extension, so there was no `claude` command, and `RUN.md` said to set `CLAUDE_BIN` without saying where the extension keeps the program. They stopped and reported it. `RUN.md` was amended, and they started again from the amended page.

**The re-run.** `node tools/rerun.mjs --name sealed`, 30 sessions, none left out for a fault.

- Committed run: fewer steps with the folder on 10 of 10 questions, 2.37 per session against 5.03.
- Their re-run: fewer steps with the folder on 10 of 10 questions, 2.40 against 5.60.

The command printed "Reproduces: YES". That is steps only; a re-run does not mark answers.

**A question they wrote themselves.** A Main Hall booking for 18 July 2026, cancelled in writing on 1 July 2026: what share of the hire charge is refunded, and is the £30 booking deposit returned? The documents give 25%, with the deposit kept: `hall-refunds.md` section 2.2 says 50% for 14 to 27 days' notice, and `hall-changes.md` section 6 replaces that with 25% from 1 June 2026.

- The full folder answered 25%, in 2 steps, and cited the change.
- The documents alone answered 50%, in 4 steps. Its own answer says it read `hall-refunds.md` and `hall-bookings.md`; it did not open `hall-changes.md`.
- With nothing, the model said it did not have the rules.

This is the only question in this entry on which the documents alone gave a wrong figure. It is one question asked once, the answers were checked against the documents by the person who asked and by us and were not put through the markers, and in the sealed run the documents alone were marked right on all 30 answers, changed rules included. So it is one case, not a finding. The folder's `rules.md` tells the model to check whether a changes document replaces a section; here that is the step the documents-only session skipped.

Their raw logs and what they sent are in `after-the-run/outsider/`. It was the same day and the same version of the tool. Not tried: another day, another version of the tool, another operating system.

## How the marking was run

Each of the two full passes was split over four sessions of the model under test, started together by `runs/sealed/marking/mark.mjs`. Each session had a quarter of the sheet, `MARKING.md` and the documents, and wrote its own marks. The record of each session and the marks it wrote are in `runs/sealed/marking/`. The eight sessions took about two minutes. The marking sheets replace the path of the folder a session ran in with `[working folder]`, so a marker cannot read a set-up's code off an answer; nothing else in an answer is changed.

The outside marker was Gemini in the browser. The key check and the held-out marking used Gemini 3.8 Flash. The version used for the exam's two sheets was not written down at the time. The chats were not saved.

The marking is the weakest part of this entry. The two passes by the same model disagree on 55 of 574 answers. The key asks for more than the question does on some questions, and whether leaving that out makes an answer wrong is what the markers split on.

## The size of each instruction file

The design said each file's size would be printed beside its effect. It is here instead.

| File | Words | Characters |
|---|---|---|
| `README.md`, the map | 328 | 2,887 |
| `identity.md` | 50 | 288 |
| `rules.md` | 209 | 1,116 |
| `examples.md` | 159 | 970 |

## The held-out questions

The ten questions the draw did not pick, asked three times each in the full folder, the documents alone and nothing: 90 sessions. `runs/heldout/report.md` has every answer beside the expected one. They were marked the same way as the exam: twice by the model under test and once by Gemini 3.8 Flash, from shuffled sheets with the set-up hidden. The sheets, the marks and the key are in `runs/heldout/`.

| | Full folder | Documents only | Empty |
|---|---|---|---|
| Steps per session | 2.37 | 5.20 | 2.00 |
| Answer words | 78 | 160 | 148 |
| Marked right, first pass | 30 of 30 | 30 of 30 | 0 of 30 |
| Marked right, second pass | 30 of 30 | 30 of 30 | 0 of 30 |
| Marked right, Gemini | 30 of 30 | 30 of 30 | not marked |

The folder took fewer steps on 10 of 10 held-out questions, and lost no marks on any of them. The two passes by the model under test agree on all 90 answers.

So the loss on right answers did not repeat. On the exam it came from three questions, Q3, Q4 and Q7, whose keys ask for a detail the question does not. The ten held-out questions came from the same pool by the same draw, and none of them cost the folder a mark. The fewer steps held on all twenty questions. The fewer right answers held on three of the twenty.

Two cautions. These marks were made after the exam's result was known, though the markers were not told it. And the markers could still tell the set-ups apart: Gemini's guesses were right on 5 of 60, which is as telling as 55 of 60 with the labels the other way round.

Four of the ten held-out questions turn on a rule that an exam question also turns on; `generator/key-check.md` lists the pairs.

## The draw took the second question of nine pairs

The pool has two questions of each type for each organisation. The draw picked the second of the pair in nine of the ten slots and the first in one. That looks like a pattern, so it was tested. The generator is fair: over 20,000 draws between two items it kept the first 9,906 times. And about 2 in 100 seeds give nine or ten slots the same way round. So this is a 1-in-50 outcome of a fair draw, not a bias in it. The seed is the fingerprint of the pool, and running `tools/draw.mjs`'s logic again on the committed pool gives the same ten.

## A question nobody had written down

`node tools/ask.mjs` was run once from the fresh clone with a question made up on the spot: the cost of the Main Hall for three hours with the kitchen on 10 December 2025, with no discount. The full folder and the documents alone both answered £92, which is what the documents give. The folder took 2 steps and the documents alone 4. With nothing, the model said it did not have the rules. The three logs are in `after-the-run/ask/`.
