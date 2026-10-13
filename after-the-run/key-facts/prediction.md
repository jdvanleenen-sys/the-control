# Counting the facts the key asks for: what will be done, and what we expect

Written and committed on Tuesday 2026-10-13, before the count was run on any set-up but the two named below.

## Why

Three things decide the verdict. Two of them, steps and text, are counted from the logs by a script, and they came out the same way in every re-run. The third, right answers, is judged by a marker, and it did not: the same folder on the same ten questions was marked right on 23 to 28 of 30, then 24 to 30, then 30 of 30. The part of this experiment that does not repeat is the part that needs a judge.

So this adds a count that needs none. Each question's "Correct requires" line says what an answer must give: a figure, a time, a named detail. `tools/key-facts.mjs` searches each answer for each of those things. The same answer gives the same count every time.

## What it is not

It is not a mark, and it replaces nothing. It does not read an answer's conclusion, so it cannot tell a right yes from a wrong one. It was written after the run and after we had seen that markers disagree. The verdict was fixed by the rule in `EXPERIMENT.md` on the sealed run's marks and is unchanged whatever this finds.

## How the patterns were checked, and what we had already seen

The patterns were written from the ten "Correct requires" lines in `questions.md`. They were then run on two set-ups of the sealed run only, as a check that they work: the documents alone, which every marker marked right on 30 of 30, and the empty set-up, which every marker marked right on 0 of 30. The count gave 30 of 30 and 0 of 30 on the first attempt, and no pattern was changed afterwards.

Before writing this we had searched by hand for two of these facts, the £4 on Q4 and the 15 minutes on Q7, in the full folder's and the documents-only answers of every batch. So expectations 1, 4 and 6 below are partly known for those two questions. Nothing had been counted on Q3, on the other seven questions, or on any of the other sixteen set-ups of the sealed run.

## What we expect

1. In the sealed run the full folder holds every fact in fewer answers than the documents alone, and in no more than 24 of 30.
2. Every answer the full folder falls short on, in every batch, is to Q3, Q4 or Q7.
3. Of the sixteen set-ups that load the four instruction files in every mix, the four with neither `rules.md` nor `examples.md` loaded each hold every fact in at least 27 of 30 answers.
4. The twelve with `rules.md` or `examples.md` loaded hold every fact in fewer answers, on average, than those four.
5. The map loaded alone holds every fact in at least 28 of 30.
6. The documents alone hold every fact in every answer in every later batch.
7. Side by side, the changed folder and the unchanged folder hold every fact in a number of answers that differs by 2 or less.

## What each outcome would mean

If 3, 4 and 5 hold, the count says without a marker what the two marking passes only pointed at: the map costs no facts, and the files that shape the answer do. If they do not hold, the reading on the landing page that the lost marks go with the rules and the examples is not supported by this count, and the pages will say so.

Whatever is found is reported.
