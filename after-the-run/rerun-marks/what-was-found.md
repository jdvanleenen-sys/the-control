# Marking the re-runs: what was found

Done on Tuesday 2026-10-13, after `prediction.md` in this folder was committed. 60 answers from three re-runs, 30 with the full folder and 30 with the documents alone, marked with the set-up hidden: twice by the model under test and once by Gemini 3.8 Flash. No mark was changed after it was written.

## Marked right, of 30

| | First pass | Second pass | Gemini |
|---|---|---|---|
| Documents alone | 30 | 30 | 30 |
| Full folder | 29 | 30 | 24 |
| Full folder, in the sealed run | 28 | 23 | 23 |

Each re-run is 10 folder answers. By re-run, the folder was marked right on:

| Re-run | First pass | Second pass | Gemini |
|---|---|---|---|
| Fresh clone, by the builder | 9 | 10 | 8 |
| Outside runner | 10 | 10 | 8 |
| By the builder, after the tool changes | 10 | 10 | 8 |

## The marks the folder lost

| Question | Re-run | First pass | Second pass | Gemini |
|---|---|---|---|---|
| Q3 | Fresh clone | correct | correct | incorrect |
| Q3 | Outside runner | correct | correct | incorrect |
| Q3 | After the tool changes | correct | correct | incorrect |
| Q4 | Outside runner | correct | correct | incorrect |
| Q7 | Fresh clone | incorrect | correct | incorrect |
| Q7 | After the tool changes | correct | correct | incorrect |

Every other folder answer, and every documents-only answer, was marked correct by all three.

## Against what was expected

1. The documents alone right on 30 of 30 by all three markings. **Held.**
2. The full folder right on fewer than 30 by at least two of the three. **Held**, by the first pass (29) and Gemini (24). The second pass found no loss.
3. Every mark the folder loses is on Q3, Q4 or Q7. **Held.** Seven lost marks across the three markings, all on those questions.
4. The two passes by the model under test disagree on at least one folder answer. **Held**, on one: Q7 from the fresh-clone re-run.

## What it shows

The documents alone were right on every answer by every marking, as in the sealed run, so the folder could at best have tied. By one marking it did; by the other two it lost marks. Where it lost them, it lost them on the same three questions as in the sealed run and on no other. That includes the run made by an outside person, on Gemini's marking.

## What it does not show

- **How big the loss is depends on who marks.** The model under test found one lost mark and then none. Gemini found six, and every lost mark on Q3 and Q4 is Gemini's. In the sealed run the same two passes by the model found two and seven. The direction repeated by two of the three markings, one of them by a single mark; the size did not settle.
- **Two of the three markings could tell the set-ups apart.** Gemini guessed the set-up wrong on 60 of 60, which separates the two as surely as 60 right would. The second pass by the model guessed right on 42 of 60. The first pass guessed right on 29 of 60, which is no better than chance.
- **These are the same ten questions and the same answer key** as the sealed run, with the same keys that ask for more than their questions do. This checks whether the result repeats, not whether the key is fair.
- **It is no part of the verdict.** The sealed run, its marks and its verdict are as they were.

## Where it is

`marking-sheet.md` is the sheet the model marked, with the answers given nothing as well. `marking-sheet-outside.md` is the sheet Gemini marked. `marks-one.csv`, `marks-two.csv` and `marks-outside.csv` are the marks, `marking-key.csv` says which answer was which (its `run` column is 1 for the fresh clone, 2 for the outside runner, 3 for the run after the tool changes), and `marking/` has the record of each of the eight marking sessions. The scripts are the ones in `folder-change/marking/`. `verify/check.mjs` does not cover this folder. The shuffle was seeded with the text `rerun-marks-2026-10-13`. Gemini's marks are as pasted back from a temporary chat, which was not saved. The order (prediction first, marking after) is shown by the commit order alone.
