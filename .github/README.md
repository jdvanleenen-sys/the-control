# The Control: does the folder earn its place?

An entry for Weekly Comp #14.

**The folder** answers questions about the rules of two made-up organisations: a film society and a village hall. It holds their 18 documents, a map saying what each document covers, and instructions on how to look things up and how to answer.

**The test** asked ten questions three ways: with nothing, with the documents alone, and with the documents and the folder's instructions. The questions were written by ChatGPT, checked by Gemini and drawn at random, before the instructions were committed. The rule for judging the folder was written before any of it.

## What happened

- The folder got the model to its answers in half the steps: 2.37 per session against 5.03 with the documents alone, fewer on 10 of 10 questions.
- Its answers were marked right less often: 28, 23 and 23 of 30 on three gradings, against 30 of 30 for the documents alone on all three.
- It put more text in front of the model, not less: 9,689 characters against 7,191.
- So, by the rule fixed in advance, the folder's instructions **did not earn their place** over the documents alone.
- Against no folder at all the folder wins, 23 to 28 of 30 against 0 of 30. The documents do that work, which is why the documents alone are the control that matters. Asked in a Claude project, the way the brief describes, the folder scored 6 of 10 against 0 of 10 in a plain chat.

Every answer that lost a mark gives the right yes or no and the right figure. Each left out a detail the answer key wanted. Our reading, which is not proved: the folder's rules and examples push for short answers, and a short answer leaves that detail out. On ten more questions held back from the test, both set-ups scored 30 of 30 and the folder still took fewer steps on all ten.

**Someone else ran it.** Jordan Shaw, a community member with no part in the build, cloned the repo and re-ran it on their own machine: 2.40 steps against 5.60, fewer on 10 of 10. On a question they wrote themselves, about a refund rule that had been changed, the folder gave the right figure and the documents alone gave the old one. That is one question asked once.

**Which part did what.** The folder does two jobs: the map helps the model find the answer, and the rules and examples shape how it writes the answer. The four instruction files were loaded in every mix, sixteen set-ups with the full folder as one of them, to tell the two apart. The map alone got nearly all the saving in steps, 2.50 per session. The 4 set-ups with neither the rules nor the examples loaded lost at most 1 answer of 30; all 12 with either one loaded lost 2 or more on at least one marking pass. Apart from the full folder, these were marked twice by the model under test and not by Gemini, and the two passes differ, so this is a pointer and not a proof. The table is in the appendix of [`results.md`](/results.md).

**The follow-up.** One line was added to the folder's rules on a separate copy and the test was run again. The folder in this repo is the one that was tested. The lost marks came back, 30 of 30 on all three gradings, with the steps unchanged. The folder still put more text in front of the model, so by the same rule it still did not earn its place. The first verdict stands.

The most surprising line in [`results.md`](/results.md): "The folder reached fewer right answers. Fewer steps did not come with equal answers."

## Where to go

The `README.md` at the top of the repo is not a guide. It is the folder's map, one of the files under test.

| If you want | Open |
|---|---|
| The guide, and three ways to test it yourself | [`START-HERE.md`](/START-HERE.md) |
| The experiment and the result as pictures | [`summary.pdf`](/summary.pdf) |
| Every figure, tie and loss | [`results.md`](/results.md) |
| The questions and expected answers | [`questions.md`](/questions.md) |
| The raw transcripts | [`control/`](/control) and [`treatment/`](/treatment) |
| What was checked after the result, including a re-run by an outside person on their own machine | [`after-the-run.md`](/after-the-run.md) |
| The follow-up: one line added to the rules on a copy, and its re-run | [`folder-change/`](/folder-change) |
| What was done differently from the plan, and what was corrected | [`DEVIATIONS.md`](/DEVIATIONS.md) |
