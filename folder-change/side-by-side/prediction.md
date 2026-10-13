# The unchanged folder beside the changed one: what will be done, and what we expect

Written and committed on Tuesday 2026-10-13, before either run was started.

## Why

The follow-up in this folder compared the changed folder with the original folder's marks from the sealed run, which was a different batch of sessions marked at a different time. So it showed that the changed folder scored 30 of 30, and not that the one added line was the reason. This runs the two folders at the same time and marks them together.

## What will be run

Two copies of this repo at the same commit, started together:

- one with the folder as it is in this repo, the one the sealed run tested;
- one with `rules.md` replaced by `folder-change/rules-changed.md`, which adds the one line "Say what would otherwise apply, and the difference." Nothing else differs.

In each copy: `node tools/rerun.mjs --runs 3`. That is the ten exam questions, three times, with the full folder, the documents alone and nothing. 90 sessions in each copy, 180 in all. The held-out questions are left out: both folders were already marked right on 30 of 30 of them, so they cannot show a difference.

## How it will be marked

All the answers from both copies go on one sheet, shuffled under random numbers, with the working-folder path replaced and nothing to say which copy or set-up an answer came from. They are marked twice by the model under test, by the rules in `MARKING.md`, and once by Gemini from a sheet holding only the answers given with documents. No answer is re-marked and no mark is changed once written.

## What we expect

1. The changed folder is marked right on more answers than the unchanged folder by at least two of the three markings.
2. The changed folder is marked right on 30 of 30 by at least two of the three markings.
3. Every mark the unchanged folder loses is on Q3, Q4 or Q7.
4. Both folders take fewer steps than the documents alone on at least 9 of 10 questions, and the two folders' steps per session differ by less than 0.3.
5. The changed folder's answers are longer than the unchanged folder's, by between 5 and 30 words on average.
6. Both folders put more text in front of the model than the documents alone.

## What each outcome would mean

If 1 and 2 hold, the added line is shown to bring the marks back in a like-for-like comparison. If the unchanged folder also scores 30 of 30, or the changed folder also loses marks, the earlier follow-up overstated what the line does, and this page's results and `folder-change/README.md` will say so.

Whatever is found is reported. The sealed run, its marks and its verdict are not changed by this, and the folder at the top of this repo stays the one that was tested.
