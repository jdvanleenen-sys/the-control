# Marking the re-runs: what will be done, and what we expect

Written and committed on Tuesday 2026-10-13, before any re-run answer was put on a marking sheet or marked.

## Why

The verdict on the folder rests on three things: steps, the text put in front of the model, and right answers. Steps and text came out the same way on every re-run. Right answers were never checked on a re-run, because no re-run was marked. This marks them.

## What will be marked

The answers of the full folder and of the documents alone from the three re-runs whose raw logs are in this repo:

- `after-the-run/rerun/`, a fresh clone, by the builder
- `after-the-run/outsider/rerun/`, by an outside person on their own machine
- `after-the-run/rerun-after-changes/`, by the builder

That is 3 re-runs of 10 questions in 2 set-ups: 60 answers, 30 from each set-up. The answers with nothing loaded are put on the model's sheet as well, as they were in the sealed run, and are not sent to the outside marker.

## How

The same way as the sealed run. The answers are shuffled under random numbers with the set-up hidden and the working-folder path replaced. They are marked twice by the model under test, by the rules in `MARKING.md`, and once by Gemini from a sheet holding only the two set-ups with documents. The scripts are the ones used for the follow-up, in `folder-change/marking/`. No answer is re-marked and no mark is changed once written.

## What we expect

In the sealed run the folder lost marks on Q3, Q4 and Q7 and nowhere else, and the documents alone lost none.

1. The documents alone are marked right on 30 of 30 by all three markings.
2. The full folder is marked right on fewer than 30 of 30 by at least two of the three markings.
3. Every mark the folder loses is on Q3, Q4 or Q7.
4. The two markings by the model under test disagree with each other on at least one folder answer, as they did in the sealed run.

## What each outcome would mean

If the folder again loses marks on those questions, the third thing the verdict rests on came out the same way on runs that were not made for the sealed result, one of them by someone else.

If the folder loses no marks, or loses them on other questions, then the loss of marks in the sealed run did not repeat, and this page and `after-the-run.md` will say so.

Whatever is found is reported. The sealed run, its marks and its verdict are not changed by this.
