# The Control: does the folder earn its place?

An entry for Weekly Comp #14.

**The folder** answers questions about the rules of two made-up organisations: a film society and a village hall. It holds their 18 documents, a map saying what each document covers, and instructions on how to look things up and how to answer.

The test is of the folder's instructions, not of its subject: the documents are identical in every set-up. They are made up on purpose, so the model cannot answer from what it already knows; with nothing in front of it, it scored 0 of 30. The same scripts ran rehearsals on other made-up document sets before this one ([`PILOTS.md`](/PILOTS.md)).

**The test** asked ten questions three ways: with nothing, with the documents alone, and with the documents and the folder's instructions. The questions were written by ChatGPT, checked by Gemini and drawn at random, before the instructions were committed. The rule for judging the folder was written before any of it.

## What happened

- The folder got the model to its answers in half the steps: 2.37 per session against 5.03 with the documents alone, fewer on 10 of 10 questions.
- Its answers were marked right less often: 28, 23 and 23 of 30 on three gradings, against 30 of 30 for the documents alone on all three.
- It put more text in front of the model, not less: 9,689 characters against 7,191.
- So, by the rule fixed in advance, the folder's instructions **did not earn their place** over the documents alone.
- Against no folder at all the folder wins, 23 to 28 of 30 against 0 of 30. The documents do that work. In a Claude project, the way the brief describes, it was 6 of 10 against 0 of 10 with no project.

The most surprising line in [`results.md`](/results.md): "The folder reached fewer right answers. Fewer steps did not come with equal answers."

## What we checked afterwards

- **The lost marks.** Each answer that lost a mark had the right yes or no and the right figure, and left out a detail the answer key wanted. On ten held-back questions the loss did not repeat: 30 of 30 both ways. Three re-runs graded afterwards with the set-up hidden lost marks again by two of three gradings, on the same three questions.
- **Someone else ran it.** Jordan Shaw, a community member with no part in the build, re-ran it on their own machine: 2.40 steps against 5.60. On one question of their own, asked once, the folder gave the right figure and the documents alone gave an out-of-date one.
- **Which part did what, counted without a marker.** A script searches each answer for the facts the key asks for. It was written after the run and is a count, not a mark. Documents alone: 30 of 30. Full folder: 21. The four set-ups with neither the rules nor the examples loaded: 28 or 29. The twelve with either: 21 to 25. The map saves the steps and, on average, costs no facts; the files that shape the answer cost them.
- **The follow-up.** One line was added to the rules on a separate copy. Alone, the changed folder scored 30 of 30. Run beside the unchanged folder the next day, it did no better: 29, 29 and 30 against 30, 30 and 30. So the line is not shown to help, and the folder in this repo is the one that was tested.
- **How steady the loss is.** Marks moved with the batch and the marker: 23 to 28 of 30, then 24 to 30, then 30. The count moved too: 21, 24 and 26 of 30, against 30 for the documents alone in each of those batches.

## Where to go

The `README.md` at the top of the repo is not a guide. It is the folder's map, one of the files under test.

| If you want | Open |
|---|---|
| The guide, and three ways to test it yourself | [`START-HERE.md`](/START-HERE.md) |
| The experiment and the result as pictures | [`summary.pdf`](/summary.pdf) |
| Every figure, tie and loss | [`results.md`](/results.md) |
| The questions and expected answers | [`questions.md`](/questions.md) |
| The raw transcripts | [`control/`](/control) and [`treatment/`](/treatment) |
| What was checked afterwards, with its logs | [`after-the-run.md`](/after-the-run.md) |
| The follow-up | [`folder-change/`](/folder-change) |
| What was done differently, and what was corrected | [`DEVIATIONS.md`](/DEVIATIONS.md) |
