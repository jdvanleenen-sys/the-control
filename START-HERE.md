# Start here

This repo is a folder and a test of whether the folder earns its place.

`README.md` at the top of the repo is part of the folder under test: it is the map the model loads. It is not a guide to the repo. This page is.

## What happened, in seven lines

- With the folder's instruction files loaded, the model took fewer steps on 10 of 10 questions: 2.37 per session against 5.03 with the same documents and no instruction files.
- It was marked right less often: 28, 23 and 23 of 30 on three marking passes, against 30 of 30 for the documents alone on all three.
- It was given more text, not less: 9,689 characters per session against 7,191.
- By a rule fixed before any document existed, the instruction files did not earn their place over the documents alone.
- Against the brief's own control, no folder at all, the folder wins as it must: 23 to 28 of 30 against 0 of 30. The documents do that work.
- Every answer the folder lost a mark on gives the same yes or no and the same figure as the expected answer. Each left out a detail the answer key asks for and the question does not. The folder's rules tell the model to answer what was asked and stop.
- On ten more questions it had never been tested on, the folder took fewer steps on 10 of 10 and both set-ups were marked right on 30 of 30. The loss of marks did not repeat.

The folder is a small library of made-up rules for two organisations (`reference/`), a map of the documents (`README.md`), and instructions on how to look things up and how to answer (`identity.md`, `rules.md`, `examples.md`). `results.md` has every figure, tie and loss. `after-the-run.md` has what was checked afterwards. `summary.html` is the same story on one page.

## What is compared

| Run | What the model had | Transcripts |
|---|---|---|
| Control, as the brief asks: no folder | Nothing. No documents, no instruction files. | `control/empty/` |
| Control, the harder one | The documents, with no instruction files. | `control/documents-only/` |
| Treatment | The documents and the four instruction files, loaded first. | `treatment/` |

Same model, same questions, one fresh session per question, three runs of each. The questions and their expected answers are in `questions.md`. They were committed before the four instruction files and before any run. The documents were committed before the questions, because the questions were written from them.

Sixteen more set-ups were run at the same time: every mix of the four instruction files loaded or not, and one folder with a map made wrong on purpose. That is 19 set-ups and 570 sessions. They are in an appendix of `results.md`, and their raw logs are under `runs/sealed/logs/`.

## How the folder reaches the model

Every session gets the same prompt: the question and nothing else. What differs is the working folder the session starts in. For the treatment, that folder holds the documents, the four instruction files, and a file named `CLAUDE.md` with these four lines:

```
@README.md
@identity.md
@rules.md
@examples.md
```

Claude Code reads that file before the question and loads the four files it names. The control folders have no `CLAUDE.md`. `runs/sealed/key-staged.json` lists every file each set-up held, and `runs/sealed/probe.md` is the check, made before the run, that each set-up was given exactly the files its `CLAUDE.md` names.

The raw log of a session records what the model did, not the prompt it was sent. The prompt is in the `.meta.json` beside each log under `runs/sealed/logs/`, and at the top of each readable transcript.

## Three things you can do

**1. Ask a question of your own.** This is the quickest test of whether the result holds on a question we did not write.

```
node tools/ask.mjs "Under the Quillbrook Village Hall rules: your question"
```

Three sessions, about half a minute. It prints what each of the three runs did and what it answered. The other organisation is the Fenwray Film Society. You need Node 20 or later and Claude Code signed in; `RUN.md` has the set-up, including one thing to know on Windows.

**2. Run it all again.**

```
node tools/rerun.mjs --name sealed
```

Thirty sessions for one pass of every question in the three runs above, about four minutes. It prints your numbers beside ours and says whether the headline came out the same way. `RUN.md` has what a re-run should and should not match.

**3. Check that nothing was changed after the fact.**

```
node verify/check.mjs
node verify/history.mjs
```

The first rebuilds every table and transcript from the raw logs and fails on any difference. The second reads the commit history and fails if anything is out of order.

The history shows the order of the commits. It cannot show when they were made: this repo was built locally and pushed once, after the run.

## A script, and the Claude project as well

The brief describes dropping the folder into a Claude project. That was done too: all ten questions in a project holding the folder, and again in a plain chat with no project. The prompts were sent through the browser by the build session (the Claude Code session that built this entry), not typed by hand; `DEVIATIONS.md` says how. `claude-project.md` says what happened, the saved chats are in `claude-project/`, and `results.md` carries the page word for word.

A project keeps no log of what the model opened, so it can show whether answers were right and nothing about how the model got there. That is why the steps come from a script: one command, a pinned model, and every session's raw log. The two are never mixed. If you re-run in a project you should expect to match the project page, not the step counts.

## Can the test itself be trusted

`results.md` has a section with that name. It shows two checks on the test, not on the folder:

- Each run compared with another run of the same thing. The counting rule found no difference there.
- A folder made wrong on purpose, with a map that points to the wrong documents. The test did not clearly catch it: more steps on 8 of 10 questions, where the rule needs 9, and the two marking passes disagree on which folder got more answers right.

## Where things are

| Path | What |
|---|---|
| `identity.md`, `rules.md`, `examples.md`, `README.md`, `reference/` | The folder under test |
| `questions.md`, `questions-heldout.md` | The ten questions and expected answers, and the ten the draw did not pick |
| `control/`, `treatment/`, `results.md` | The runs and what changed |
| `summary.html`, `summary.pdf` | The result on one page |
| `after-the-run.md`, `after-the-run/` | What was checked after the reveal, with its logs: a person's marks on seven answers, a re-run from a fresh clone, the held-out questions, a question made up on the spot |
| `EXPERIMENT.md` | The design, written first: what is compared, what is counted, the sentences that may be published |
| `PREREGISTRATION.md`, `MARKING.md`, `RUN.md` | How it was run, marked and can be re-run |
| `DEVIATIONS.md`, `folder-changes.md`, `limits.md` | What was done differently and what was corrected, what changed in the folder, what this cannot show |
| `PILOTS.md`, `pilots/` | Every rehearsal before this run, what was looked at, what changed because of it, and a probe on a larger library. The probe's logs are from the last rehearsal and hold that rehearsal's documents, not this entry's |
| `claude-project.md`, `claude-project/` | The same questions asked in a Claude project and in a plain chat |
| `generator/` | The prompts given to the outside models that wrote the documents and questions and checked the key |
| `lib/`, `tools/`, `verify/`, `runs/` | The harness, the checks, and the raw logs. `runs/sealed/marking/` has the record of each marking session |
