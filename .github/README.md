# The Control: does the folder earn its place?

An entry for Weekly Comp #14. A folder of instructions for answering questions about a small library of made-up rules, and a test of whether the folder helps.

**Read [`START-HERE.md`](/START-HERE.md) first.** The `README.md` at the top of the repo is not a guide. It is the folder's map, one of the files under test, and it is loaded by the model.

## What happened

- With the folder's instruction files loaded, the model took fewer steps on 10 of 10 questions: 2.37 per session against 5.03 with the same documents and no instruction files.
- It was marked right less often: 28, 23 and 23 of 30 on three marking passes, against 30 of 30 for the documents alone on all three.
- It was given more text, not less: 9,689 characters per session against 7,191.
- By a rule fixed before any document existed, the instruction files did not earn their place over the documents alone.
- Against no folder at all, the folder wins as it must: 28 of 30 against 0 of 30. The documents do that work.

## Where to go

| If you want | Open |
|---|---|
| The guide to this repo, and three commands to test it yourself | [`START-HERE.md`](/START-HERE.md) |
| Every figure, tie and loss | [`results.md`](/results.md) |
| The result on one page | [`summary.pdf`](/summary.pdf) |
| The questions and expected answers | [`questions.md`](/questions.md) |
| The raw transcripts | [`control/`](/control) and [`treatment/`](/treatment) |
| What was done differently from the plan, and what was corrected | [`DEVIATIONS.md`](/DEVIATIONS.md) |
