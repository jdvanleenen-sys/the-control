# The follow-up: one line, tested on a copy

This is a follow-up, done after the sealed run and its verdict. It does not replace them. `results.md` and the verdict in it stand exactly as they were.

The pre-registration allows one labelled change to the folder after the results, with its own re-run of the three core set-ups, reported beside the first run and never merged into it. This is that change.

## What the control found

With the folder loaded, the model was marked right less often than with the documents alone: 28, 23 and 23 of 30 on three gradings, against 30 of 30. The seven answers that lost a mark all gave the right yes or no and the right figure. Each left out something the answer key asked for: the ordinary rule the exception departs from, the price that did not apply, how far over the limit something was.

The folder's `rules.md` says "Answer every part asked. Then stop." Our reading, which is not proved: the answers were stopping before saying what the asker had wrong.

## The one change

One line was added to `rules.md`, under "How to answer":

> Say what would otherwise apply, and the difference.

Nothing else in the folder changed. The changed file is `folder-change/rules-changed.md`. It is 218 words; the folder's limit for that file is 220.

## The re-run

Full folder with the changed rules, documents alone, and nothing: the ten exam questions three times each, and the ten held-out questions three times each. 180 sessions, none left out and none flagged. Same model, same settings, same tools as the sealed run, on the same day. Marked the same way: twice by the model under test and once by Gemini 3.8 Flash, from shuffled sheets with the set-up hidden.

### The ten exam questions

| | Original folder (sealed run) | Changed folder | Documents alone (this re-run) |
|---|---|---|---|
| Steps per session | 2.37 | 2.33 | 5.20 |
| Questions with fewer steps than documents alone | 10 of 10 | 10 of 10 | |
| Marked right, first pass | 28 of 30 | 30 of 30 | 30 of 30 |
| Marked right, second pass | 23 of 30 | 30 of 30 | 30 of 30 |
| Marked right, Gemini | 23 of 30 | 30 of 30 | 30 of 30 |
| Answer words | 73 | 90 | 158 |
| Text put in front of the model, characters | 9,689 | 9,579 | 7,665 |
| Tokens in | 18,156 | 17,826 | 20,410 |
| Tokens out | 387 | 431 | 859 |
| Seconds | 4.2 | 4.1 | 7.3 |

The characters, tokens, seconds and answer words in this table are counted from the raw logs in `folder-change/exam/logs/` the way `lib/session.mjs` counts them. `verify/check.mjs` covers the sealed run and does not cover this folder.

### The ten held-out questions

| | Changed folder | Documents alone |
|---|---|---|
| Steps per session | 2.43 | 5.13 |
| Questions with fewer steps | 10 of 10 | |
| Marked right, each of three gradings | 30 of 30 | 30 of 30 |
| Answer words | 94 | 156 |

## What it shows

- **The lost marks came back.** With the added line the folder was marked right on 30 of 30 exam answers by all three gradings. Answers grew by about 17 words and stayed well under the length of the documents-only answers.
- **The steps did not move.** 2.33 per session, fewer than the documents alone on 10 of 10 questions.
- **Nothing broke on the held-out questions.** 30 of 30 on all three gradings, fewer steps on 10 of 10.
- **By the rule fixed before the first run, the changed folder still does not earn its place.** Steps clearly fell and no grading counted fewer right answers, but the folder still puts more text in front of the model than the documents alone: 9,579 characters against 7,665. The change brought back the marks the control showed lost. It did not touch the cost the control also found.

## What it does not show

- **The line was written after seeing which answers lost marks,** and it is tested on those same ten questions. It is fitted to them. The held-out questions are the only check that it did no harm elsewhere, and the original folder had already scored 30 of 30 on those.
- **It is one re-run on one day.** The original folder's marks moved between gradings; these did not, but that is three gradings of one set of answers.
- **The markers could tell the set-ups apart.** Gemini's guesses were right on 6 of 60 and 0 of 60, which separates the two as surely as 54 and 60 would. The two passes by the model under test guessed right on 39 of 60 and 36 of 57 for the exam, and 35 and 31 of 60 for the held-out questions.
- **The documents-only figures here are from this re-run,** not the sealed run. They differ a little: 5.20 steps against 5.03, and 7,665 characters against 7,191.

## A false start

The first wording of the added line was:

> When a figure or a rule the question relies on does not apply, say which one and by how much. That is part of the answer, not an extra.

That is 29 words, and it took `rules.md` to 239 words by the folder check's count, over the folder's own limit of 220. The check failed, and both runs were stopped after six sessions each. No answer from them had been read. The line was cut to the eight words above, and the runs were started again within a minute. The twelve logs from the stopped runs are in `folder-change/false-start/` and are not in any figure above.

## Where it is

| Path | What |
|---|---|
| `folder-change/rules-changed.md` | The changed file |
| `folder-change/exam/` | The exam re-run: raw logs, readable transcripts, what the tool printed, the marking sheets, the three sets of marks and the key |
| `folder-change/heldout/` | The same for the held-out questions, with every answer beside the expected one in `report.md` |
| `folder-change/marking/` | The scripts that built the sheets and ran the marking passes, and the record of each marking session |
| `folder-change/false-start/` | The twelve logs from the stopped first attempt |

The re-run was made from a separate copy of this repo with the one line added, so the folder at the top of this repo is still the folder the sealed run tested, and `node verify/check.mjs` still confirms it.
