# The Control: does the folder earn its place?

An entry for Weekly Comp #14.

**The folder** answers questions about the rules of two made-up organisations: a film society and a village hall. It holds their 18 documents, a map saying what each document covers, and instructions on how to look things up and how to answer.

**The test** asked ten questions three ways: with nothing, with the documents alone, and with the documents and the folder's instructions. The questions were written by ChatGPT, checked by Gemini and drawn at random, before the instructions were committed. The rule for judging the folder was written before any of it.

## What happened

- The folder got the model to its answers in half the steps: 2.37 per session against 5.03 with the documents alone, fewer on 10 of 10 questions.
- Its answers were marked right less often: 28, 23 and 23 of 30 on three gradings, against 30 of 30 for the documents alone on all three.
- It put more text in front of the model, not less: 9,689 characters against 7,191.
- So, by the rule fixed in advance, the folder's instructions **did not earn their place** over the documents alone.
- Against no folder at all the folder wins, 23 to 28 of 30 against 0 of 30. The documents do that work, which is why the documents alone are the control that matters.

Every answer that lost a mark gives the right yes or no and the right figure. Each left out a detail the answer key wanted, because the folder tells the model to answer what was asked and stop. On ten more questions held back from the test, both set-ups scored 30 of 30 and the folder still took fewer steps on all ten.

**What the control changed.** As a follow-up, one line was added to the folder's rules and the test was run again. The lost marks came back, 30 of 30 on all three gradings, with the steps unchanged. The folder still put more text in front of the model, so by the same rule it still did not earn its place. The first verdict stands.

The most surprising line in [`results.md`](/results.md): "The folder reached fewer right answers. Fewer steps did not come with equal answers."

## Where to go

The `README.md` at the top of the repo is not a guide. It is the folder's map, one of the files under test.

| If you want | Open |
|---|---|
| The guide, and three commands to test it yourself | [`START-HERE.md`](/START-HERE.md) |
| The experiment and the result as pictures | [`summary.pdf`](/summary.pdf) |
| Every figure, tie and loss | [`results.md`](/results.md) |
| The questions and expected answers | [`questions.md`](/questions.md) |
| The raw transcripts | [`control/`](/control) and [`treatment/`](/treatment) |
| What was checked after the result, including a re-run on a second machine | [`after-the-run.md`](/after-the-run.md) |
| The follow-up: one change to the folder, and its re-run | [`folder-change/`](/folder-change) |
| What was done differently from the plan, and what was corrected | [`DEVIATIONS.md`](/DEVIATIONS.md) |
