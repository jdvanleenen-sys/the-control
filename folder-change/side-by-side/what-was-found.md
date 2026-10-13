# The unchanged folder beside the changed one: what was found

Done on Tuesday 2026-10-13, after `prediction.md` in this folder was committed. Two copies of this repo at commit 8c7aff3, one with the folder as tested and one with the one added line in `rules.md`, each ran the ten exam questions three times in three set-ups, started two seconds apart. 180 sessions, none left out for a fault and none flagged. All the answers went on one shuffled sheet and were marked twice by the model under test and once by Gemini 3.8 Flash. Each pass by the model was four sessions, each given a quarter of the sheet, 45 answers.

## The added line did not raise the marks

| Marked right, of 30 | First pass | Second pass | Gemini |
|---|---|---|---|
| Unchanged folder | 30 | 30 | 30 |
| Changed folder | 29 | 29 | 30 |
| Documents alone, beside the unchanged folder | 30 | 30 | 30 |
| Documents alone, beside the changed folder | 30 | 30 | 30 |

The unchanged folder lost no mark on any marking, so in the marks there was nothing for the line to bring back. The one answer marked wrong was the changed folder's, on Q7 in its third run, by both passes of the model under test. Gemini passed it.

## What the line did do

| Per session | Unchanged folder | Changed folder | Documents alone |
|---|---|---|---|
| Steps | 2.40 | 2.40 | 5.27 and 5.10 |
| Questions with fewer steps than the documents alone | 10 of 10 | 10 of 10 | |
| Answer words | 75 | 94 | 166 and 159 |
| Text put in front of the model, characters | 9,611 | 9,643 | 7,724 and 7,395 |
| Tokens in | 17,759 | 18,218 | 20,984 and 20,714 |
| Tokens out | 398 | 452 | 907 and 864 |
| Seconds | 3.8 | 4.3 | 7.8 and 7.8 |

It made the answers about 19 words longer and left the steps where they were.

## Against what was expected

1. The changed folder right on more answers than the unchanged folder by at least two of the three markings. **Did not hold.** It was right on one fewer by two markings and on the same number by the third.
2. The changed folder right on 30 of 30 by at least two of the three markings. **Did not hold.** 29, 29 and 30.
3. Every mark the unchanged folder loses is on Q3, Q4 or Q7. **Nothing to test.** It lost none.
4. Both folders take fewer steps than the documents alone on at least 9 of 10 questions, and their steps differ by less than 0.3. **Held.** 10 of 10 each, and 2.40 against 2.40.
5. The changed folder's answers are longer by between 5 and 30 words. **Held.** 19 words.
6. Both folders put more text in front of the model than the documents alone. **Held.**

## What it shows

Run like for like, the one added line is not shown to help. The earlier follow-up in this folder set the changed folder's 30 of 30 against the original folder's 28, 23 and 23 from the sealed run and read the difference as the marks coming back. That difference is no bigger than batches and markings alone have produced, so it cannot be put down to the line.

It also shows how unsteady the loss of marks is. The same unchanged folder, on the same ten questions and the same answer key, has now been marked right on:

| | First pass | Second pass | Gemini |
|---|---|---|---|
| The sealed run | 28 | 23 | 23 |
| Three re-runs, marked together (`after-the-run/rerun-marks/`) | 29 | 30 | 24 |
| This run | 30 | 30 | 30 |

The documents alone were marked right on 30 of 30 every time. So the folder has never been marked above the documents alone and has been marked below them on five of these nine markings. Whether it loses marks, and how many, has varied from one batch of sessions to the next and from one marker to the next. A search of the text for the detail the key asks for on Q4 (the £4 member price) and Q7 (the 15-minute overrun) finds it missing from 6 of the folder's 6 answers in the sealed run, 3 of 6 in the three re-runs, and 3 of 6 in the side-by-side run for each folder. The documents alone gave it in every answer in every batch. That search is not a marking, and Q3 was not searched. So two things have varied: how often the folder leaves the detail out, and whether a marker fails an answer for it.

## What it does not show

- **That the changed folder's answers were any fuller than the unchanged folder's.** They were not, on the two questions we checked by a search of the text. The key for Q7 asks for the 15-minute overrun and the key for Q4 for the £4 member price. Of the six answers each folder gave to those two questions, the detail is missing from three of the unchanged folder's (Q7 runs 1 and 3, Q4 run 3) and three of the changed folder's (Q7 runs 2 and 3, Q4 run 3). The documents alone gave it every time. Of those six answers that left it out, the markers failed one, the changed folder's Q7 in run 3, and passed five. So the 30 against 29 is the markers treating the same omission two ways, and "nothing to bring back" is true of the marks and not of the answers. That search is not a marking, and Q3 was not searched. A count of every fact on all ten questions was made afterwards, in `after-the-run/key-facts/`.
- **That the line does what it was written to do.** It asks for what would otherwise apply and the difference. The changed folder left that out as often as the unchanged one on those two questions.
- **That the markers were as strict as before.** Gemini marked all 120 answers on its sheet correct. About half an hour earlier, on a sheet of 60, it had failed six folder answers on Q3, Q4 and Q7. This sheet was twice as long. No answer was sent back to be marked again.
- **That each marking session counted its own work right.** Every session was shown the heading of the whole sheet, which says 180 answers, while holding 45. Several closed by reporting a count that differs from the lines it wrote. The marks files hold a line for every answer, and the check on that passed.
- **Anything about the held-out questions,** which were left out of this run.
- **It is no part of the verdict.** The sealed run, its marks and its verdict are as they were. The folder still puts more text in front of the model than the documents alone in every run.

## Where it is

`logs/` has the raw log and a readable transcript of all 180 sessions: `unchanged/` and `changed/` are the two folders, `docsA/` and `emptyA/` ran beside the unchanged folder, `docsB/` and `emptyB/` beside the changed one. `printed-unchanged.txt` and `printed-changed.txt` are what the two commands printed. `marking-sheet.md` is the sheet the model marked and `marking-sheet-outside.md` the one Gemini marked. `marks-one.csv`, `marks-two.csv` and `marks-outside.csv` are the marks and `marking-key.csv` says which answer was which. `marking/` has the record of the eight marking sessions, and `sheet.mjs` is the script that built the sheets, seeded with the text `side-by-side-2026-10-13`. Gemini's marks are as pasted back from a temporary chat, which was not saved. `verify/check.mjs` does not cover this folder.
