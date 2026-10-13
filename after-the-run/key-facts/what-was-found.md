# Counting the facts the key asks for: what was found

Done on Tuesday 2026-10-13, after `prediction.md` in this folder was committed with the script. `node tools/key-facts.mjs` searches every answer for the things its question's "Correct requires" line says the answer must give. No marker and no model is involved, so it prints the same thing every time; what it printed is `count.md`.

## The headline pair

| Answers holding every fact the key asks for | Full folder | Documents alone |
|---|---|---|
| The sealed run | 21 of 30 | 30 of 30 |
| Three re-runs, together | 24 of 30 | 30 of 30 |
| Side by side, the unchanged folder | 26 of 30 | 30 of 30 and 30 of 30 |

In every batch the documents alone gave everything the key asks for and the folder did not. Every answer the folder fell short on is to Q3, Q4 or Q7, and each is short by one thing: the ordinary procedure the exception departs from, the £4 member price, or the 15-minute overrun.

## Which file costs the facts

The sealed run loaded the four instruction files in every mix. Counted the same way, of 30 answers each:

| Neither `rules.md` nor `examples.md` loaded | | With `rules.md` or `examples.md` loaded | |
|---|---|---|---|
| Nothing loaded | 29 | Rules | 22 |
| Role | 29 | Examples | 24 |
| Map | 28 | Rules + examples | 23 |
| Map + role | 29 | Role + rules | 24 |
| | | Role + examples | 23 |
| | | Role + rules + examples | 23 |
| | | Map + rules | 24 |
| | | Map + examples | 22 |
| | | Map + rules + examples | 24 |
| | | Map + role + rules | 25 |
| | | Map + role + examples | 25 |
| | | All four | 21 |

The four set-ups without the two files that shape the answer hold every fact in 28 or 29 of 30. The twelve with either of them hold every fact in 21 to 25, 23.3 on average. The two groups do not overlap. The map costs no facts; it is the rules and the examples that do.

## Against what was expected

1. In the sealed run the full folder holds every fact in fewer answers than the documents alone, and in no more than 24 of 30. **Held.** 21 against 30.
2. Every answer the full folder falls short on, in every batch, is to Q3, Q4 or Q7. **Held.**
3. The four set-ups with neither `rules.md` nor `examples.md` each hold every fact in at least 27 of 30. **Held.** 29, 29, 28 and 29.
4. The twelve with either loaded hold every fact in fewer answers on average than those four. **Held.** 23.3 against 28.75.
5. The map loaded alone holds every fact in at least 28 of 30. **Held.** 28.
6. The documents alone hold every fact in every answer in every later batch. **Did not hold.** One documents-only answer in the first follow-up, to Q7 in its third run, gives 21:30 and no 15 minutes. All three markers had marked it correct.
7. Side by side, the changed and unchanged folders differ by 2 answers or less. **Held.** 27 and 26.

## How it sits beside the markers

- **In the re-runs it agrees with Gemini exactly.** The six folder answers the count finds short are the six Gemini marked wrong, answer for answer. The model under test passed five of those six on one pass and all six on the other.
- **In the sealed run it is stricter than any marker.** It finds nine folder answers short; the strictest markings failed seven. The two it adds are Q4 answers that give £7 and never the £4.
- **Side by side it finds what the markers passed.** Four answers short for the unchanged folder and three for the changed one, where the markers failed none and one.

So the marks moved from batch to batch mostly because markers differ on whether to fail an answer for leaving a fact out. The count, which does not have that choice to make, moved less: 21, 24 and 26 of 30.

## What it does not show

- **It is not a mark.** It does not read the conclusion. A fact can sit in a sentence that gets the answer wrong, and the count would pass it.
- **The patterns are choices.** Each one decides what counts as, say, mentioning the ordinary procedure. They are in `tools/key-facts.mjs` to read and to argue with. The loosest are the two for Q3.
- **It was written after the run,** by people who had seen the markers disagree and had already searched by hand for two of the facts. `prediction.md` says which.
- **It counts what the key asks for, not what the question asks for.** At least five of the ten keys ask for more than their question does (`DEVIATIONS.md`). An answer that stops where the question stops is counted short here, as it was by the markers.
- **It changes nothing in the verdict,** which rests on the sealed run's marks and on the text put in front of the model.

`verify/check.mjs` does not cover this folder. To check `count.md`, run the command and compare.
