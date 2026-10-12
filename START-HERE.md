# Start here

This repo is a folder and a test of whether the folder earns its place.

`README.md` at the top of the repo is part of the folder under test: it is the map the model loads. It is not a guide to the repo. This page is.

## The result

- With the folder's instruction files loaded, the model took fewer steps on 10 of 10 questions: 2.37 per session against 5.03 with the same documents and no instruction files.
- It was marked right less often: 28, 23 and 23 of 30 on three marking passes, against 30 of 30 for the documents alone on all three. It was also given more text: 9,689 characters per session against 7,191.
- By a rule fixed before any document existed, the instruction files did not earn their place over the documents alone.
- Against the brief's own control, no folder at all, the folder wins as it must: 23 to 28 of 30 against 0 of 30. The documents do that work.

What was checked afterwards is in `after-the-run.md`: ten held-out questions, where the loss of marks did not repeat, and a re-run on a second machine. `folder-change/README.md` has the follow-up, where one line added to the rules on a separate copy brought the marks back and left the verdict where it was.

## What is compared

| Run | What the model had | Transcripts |
|---|---|---|
| Control, as the brief asks: no folder | Nothing. No documents, no instruction files. | `control/empty/` |
| Control, the harder one | The documents, with no instruction files. | `control/documents-only/` |
| Treatment | The documents and the four instruction files, loaded first. | `treatment/` |

Same model, same questions, one fresh session per question, three runs of each. `questions.md` has the questions and expected answers. It was committed before the four instruction files and before any run, and after the documents, because the questions were written from them.

Sixteen more set-ups ran at the same time: every mix of the four instruction files loaded or not, and a folder with a map made wrong on purpose. That is 19 set-ups and 570 sessions. They are in an appendix of `results.md`.

## Three things you can do

You need Node 20 or later and Claude Code signed in. `RUN.md` has the set-up, including one thing to know on Windows.

**1. Ask a question of your own.** The quickest test of whether the result holds on a question we did not write. Three sessions, about half a minute.

```
node tools/ask.mjs "Under the Quillbrook Village Hall rules: your question"
```

The other organisation is the Fenwray Film Society.

**2. Run it all again.** Thirty sessions, about four minutes. It prints your numbers beside ours and says whether the headline came out the same way.

```
node tools/rerun.mjs --name sealed
```

**3. Check that nothing was changed after the fact.** The first command rebuilds every table and transcript from the raw logs and fails on any difference. The second reads the commit history and fails if anything is out of order.

```
node verify/check.mjs
node verify/history.mjs
```

The history shows the order of the commits. It cannot show when they were made: this repo was built locally and pushed only after the run.

## How the folder reaches the model

Every session gets the same prompt: the question and nothing else. What differs is the folder the session starts in. For the treatment, that folder holds the documents, the four instruction files, and a `CLAUDE.md` with four lines:

```
@README.md
@identity.md
@rules.md
@examples.md
```

Claude Code loads the four files it names before the question. The control folders have no `CLAUDE.md`. `runs/sealed/key-staged.json` lists every file each set-up held. The exact prompt is at the top of each readable transcript.

## The Claude project

The brief describes dropping the folder into a Claude project. That was done too, and `claude-project.md` has it: 6 of 10 with the folder against 0 of 10 in a plain chat. The prompts were sent through the browser by the Claude Code session that built this entry, not typed by hand; `DEVIATIONS.md` says how.

A project keeps no log of what the model opened, so the steps come from a script instead. If you re-run in a project, expect to match the project page, not the step counts. Load only the folder itself: the four instruction files and the documents in `reference/`. `questions.md` holds the expected answers and must stay out.

## Can the test itself be trusted

`results.md` has a section with that name. Two checks on the test, not on the folder:

- Each run compared with another run of the same thing. The counting rule found no difference.
- A folder made wrong on purpose. The test did not clearly catch it: more steps on 8 of 10 questions, where the rule needs 9, and the two marking passes disagree on which folder got more answers right.

## Where things are

| Path | What |
|---|---|
| `identity.md`, `rules.md`, `examples.md`, `README.md`, `reference/` | The folder under test |
| `questions.md`, `questions-heldout.md` | The ten questions and expected answers, and the ten the draw did not pick |
| `control/`, `treatment/`, `results.md` | The runs and what changed |
| `summary.html`, `summary.pdf` | The result on one page |
| `after-the-run.md`, `after-the-run/` | What was checked after the reveal, with its logs |
| `folder-change/` | The follow-up. Start with its `README.md`. Its `rules-changed.md` is a copy made for the follow-up; the `rules.md` at the top is the one that was tested |
| `EXPERIMENT.md`, `PREREGISTRATION.md` | The design and the rule, written first |
| `MARKING.md`, `RUN.md` | How it was marked and how to re-run it |
| `DEVIATIONS.md`, `folder-changes.md`, `limits.md` | What was done differently, what changed in the folder, what this cannot show |
| `PILOTS.md`, `pilots/` | Every rehearsal before this run. The probe's logs hold the last rehearsal's documents, not this entry's |
| `claude-project.md`, `claude-project/` | The same questions asked in a Claude project and in a plain chat |
| `generator/` | The prompts given to the outside models that wrote the documents and questions and checked the key |
| `lib/`, `tools/`, `verify/`, `runs/` | The harness, the checks and the raw logs |
