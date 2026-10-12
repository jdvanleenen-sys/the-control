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

## What this run says to change in the folder, which has not been changed

`rules.md` says: "Answer every part asked. Then stop." It worked: answers with the rules loaded were shorter on 10 of 10 questions. It also cost marks, because a short answer says what applies and not what the asker wrongly expected.

The change it points to is one line: when a figure or a rule the asker is relying on does not apply, say which one and by how much. That has not been made. The pre-registration allows one labelled change with its own re-run; making it would tune the folder to this key on the day it was seen, and the result above is the one that was measured.

## The re-run a visitor is invited to do

Done once from a fresh clone of this repo, on the same day and machine, with `node tools/rerun.mjs --name sealed`: 30 sessions.

- Committed run: fewer steps with the folder on 10 of 10 questions, 2.37 per session against 5.03.
- Re-run: fewer steps with the folder on 10 of 10 questions, 2.50 against 5.10.

The command printed "Reproduces: YES". Its 30 raw logs, readable transcripts and what it printed are in `after-the-run/rerun/`. From the same clone, every self-test passed, `verify/check.mjs` and `verify/history.mjs` passed, and running the draw again on the committed pool gave the same ten exam questions.

Not tried: another machine, another account, another day, another version of the tool.

## How the marking was run

Each of the two full passes was split over four sessions of the model under test, started together by `runs/sealed/marking/mark.mjs`. Each session had a quarter of the sheet, `MARKING.md` and the documents, and wrote its own marks. The record of each session and the marks it wrote are in `runs/sealed/marking/`. The eight sessions took about two minutes. The marking sheets replace the path of the folder a session ran in with `[working folder]`, so a marker cannot read a set-up's code off an answer; nothing else in an answer is changed.

The outside marker was Gemini in the browser. The key check used Gemini 3.8 Flash; the version used for the two marking sheets was not recorded, and the chats were not saved.

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

The ten questions the draw did not pick, asked three times each in the full folder, the documents alone and nothing: 90 sessions. `runs/heldout/report.md` has every answer beside the expected one. They were not marked.

| | Full folder | Documents only | Empty |
|---|---|---|---|
| Steps per session | 2.37 | 5.20 | 2.00 |
| Answer words | 78 | 160 | 148 |

The folder took fewer steps on 10 of 10 held-out questions. Four of the ten turn on a rule that an exam question also turns on; `generator/key-check.md` lists the pairs.

## A question nobody had written down

`node tools/ask.mjs` was run once from the fresh clone with a question made up on the spot: the cost of the Main Hall for three hours with the kitchen on 10 December 2025, with no discount. The full folder and the documents alone both answered £92, which is what the documents give. The folder took 2 steps and the documents alone 4. With nothing, the model said it did not have the rules. The three logs are in `after-the-run/ask/`.
