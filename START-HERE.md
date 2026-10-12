# Start here

This repo is a folder and a test of whether the folder earns its place.

`README.md` is part of the folder under test: it is the map the model loads. It is not a guide to the repo. This page is.

## What happened, in five lines

- With the folder loaded, the model took fewer steps on 10 of 10 questions: 2.37 per session against 5.03 with the same documents and no folder.
- It was marked right less often: 28, 23 and 23 of 30 by three markers, against 30 of 30 for the documents alone by all three.
- It was given more text, not less: 9,689 characters per session against 7,191.
- By a rule fixed before any document existed, the folder did not earn its place.
- With no folder and no documents, the model was right on 0 of 30.

The folder is a small library of made-up rules for two organisations, with a map of the documents and instructions on how to look things up and how to answer. `results.md` has every figure, tie and loss. `after-the-run.md` has what was checked afterwards.

## What is compared

| Run | What the model had | Transcripts |
|---|---|---|
| Control, as the brief asks: no folder | Nothing. No folder, no documents. | `control/empty/` |
| Control, the harder one | The documents, with no instruction files. | `control/documents-only/` |
| Treatment | The documents and the folder's four instruction files, loaded first. | `treatment/` |

Same model, same questions, same order, one fresh session per question. The questions and their expected answers are in `questions.md`, committed before any folder file and before any run.

The result, losses and ties included, is `results.md`. It opens with what happened and with a verdict from a rule that was fixed before the run.

## Three things you can do

**1. Ask a question of your own.** This is the quickest test of whether the result holds on a question we did not write.

```
node tools/ask.mjs "Under the Quillbrook Village Hall rules: your question"
```

Three sessions, about half a minute. It prints what each of the three runs did and what it answered. The other organisation is the Fenwray Film Society. You need Node 20 or later and Claude Code signed in; `RUN.md` has the set-up.

**2. Run it all again.**

```
node tools/rerun.mjs --name sealed
```

Thirty sessions for one pass of every question in the three runs above, about four minutes. It prints your numbers beside ours and says whether the headline came out the same way. `RUN.md` has the set-up and what a re-run should and should not match.

**3. Check that nothing was changed after the fact.**

```
node verify/check.mjs
node verify/history.mjs
```

The first rebuilds every table and transcript from the raw logs and fails on any difference. The second reads the commit history and fails if anything is out of order.

## A script, and the Claude project as well

The brief describes dropping the folder into a Claude project. That was done too, by hand: all ten questions in a project holding the folder, and again in a plain chat with no project. `claude-project.md` says what happened, the pasted chats are in `claude-project/`, and `results.md` carries the page word for word.

A project keeps no log of what the model opened, so it can show whether answers were right and nothing about how the model got there. That is why the steps come from a script: one command, a pinned model, and every session's raw log. The two are never mixed. If you re-run in a project you should expect to match the project page, not the step counts.

## Can the test itself be trusted

`results.md` has a section with that name. It shows two checks on the test, not on the folder:

- Each run compared with another run of the same thing. The counting rule should find no difference there.
- A folder made wrong on purpose, with a map that points to the wrong documents. The test should catch it.

## Where things are

| Path | What |
|---|---|
| `identity.md`, `rules.md`, `examples.md`, `README.md`, `reference/` | The folder under test |
| `questions.md`, `questions-heldout.md` | The ten questions and expected answers, and the ten the draw did not pick |
| `after-the-run.md` | What was checked after the reveal: a person's marks on seven answers, a re-run from a fresh clone, the held-out questions |
| `control/`, `treatment/`, `results.md` | The runs and what changed |
| `EXPERIMENT.md` | The design, written first: what is compared, what is counted, the sentences that may be published |
| `PREREGISTRATION.md`, `MARKING.md`, `RUN.md` | How it was run, marked and can be re-run |
| `PILOTS.md`, `pilots/` | Every rehearsal before this run, what was looked at, what changed because of it, and a probe on a library four times the size |
| `DEVIATIONS.md`, `folder-changes.md`, `limits.md` | What changed after a run, what changed in the folder, what this cannot show |
| `claude-project.md`, `claude-project/` | The same questions asked by hand in a Claude project and in a plain chat |
| `generator/` | The prompts given to the outside models that wrote the documents and questions and checked the key |
| `lib/`, `tools/`, `verify/`, `runs/` | The harness, the checks, and the raw logs |
