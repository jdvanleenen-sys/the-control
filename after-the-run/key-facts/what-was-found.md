# Counting the facts the key asks for: what was found

Done on Tuesday 2026-10-13, after `prediction.md` in this folder was committed with the script. `node tools/key-facts.mjs` searches every answer for the things its question's "Correct requires" line says the answer must give. No marker and no model is involved, so it prints the same thing every time; what it printed is `count.md`.

## The headline pair

| Answers holding every fact the key asks for | Full folder | Documents alone |
|---|---|---|
| The sealed run | 21 of 30 | 30 of 30 |
| Three re-runs, together | 24 of 30 | 30 of 30 |
| Side by side, the unchanged folder | 26 of 30 | 30 of 30 and 30 of 30 |

In each of these three batches the documents alone gave everything the key asks for and the folder did not. (In a fourth, the first follow-up, the documents alone fell short on one answer; see expectation 6.) Every answer the folder fell short on is to Q3, Q4 or Q7, and each is short by one thing: the ordinary procedure the exception departs from, the £4 member price, or the 15-minute overrun.

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

The four set-ups without the two files that shape the answer hold every fact in 28 or 29 of 30. The twelve with either of them hold every fact in 21 to 25, 23.3 on average. The two groups do not overlap. Loading the map makes no difference to the count on average (24.75 of 30 across the eight set-ups with it, 24.63 across the eight without); loading the rules or the examples does.

## Against what was expected

1. In the sealed run the full folder holds every fact in fewer answers than the documents alone, and in no more than 24 of 30. **Held.** 21 against 30. The hand search made before this had already found six of the folder's answers short, so this one was settled before it was written and is not a test.
2. Every answer the full folder falls short on, in every batch, is to Q3, Q4 or Q7. **Held.**
3. The four set-ups with neither `rules.md` nor `examples.md` each hold every fact in at least 27 of 30. **Held.** 29, 29, 28 and 29.
4. The twelve with either loaded hold every fact in fewer answers on average than those four. **Held.** 23.3 against 28.75.
5. The map loaded alone holds every fact in at least 28 of 30. **Held.** 28.
6. The documents alone hold every fact in every answer in every later batch. **Did not hold.** One documents-only answer in the first follow-up, to Q7 in its third run, gives 21:30 and no 15 minutes. All three markers had marked it correct.
7. Side by side, the changed and unchanged folders differ by 2 answers or less. **Held.** 27 and 26.

## How it sits beside the markers

- **In the re-runs it agrees with Gemini exactly.** The six folder answers the count finds short are the six Gemini marked wrong, answer for answer. That agreement did not last: side by side, Gemini passed all seven answers the count finds short. The model under test passed five of those six on one pass and all six on the other.
- **In the sealed run it is stricter than any marker.** It finds nine folder answers short; the strictest markings failed seven. The two it adds are Q4 answers that give £7 and never the £4.
- **Side by side it finds what the markers passed.** Four answers short for the unchanged folder and three for the changed one, where the markers failed none and one.

So two things moved from batch to batch. The folder left a fact out less often: 9, then 6, then 4 of its nine answers to Q3, Q4 and Q7, which is 21, 24 and 26 of 30 on the count. And the markers differed on whether to fail an answer for it. The count takes the second of those away and leaves the first.

## What it does not show

- **It is not a mark.** It does not read the conclusion. A fact can sit in a sentence that gets the answer wrong, and the count would pass it.
- **The patterns are choices, and one of them matters.** Each one decides what counts as giving a fact. They are in `tools/key-facts.mjs` to read and to argue with. The key for Q7 asks the answer to "identify the proposed 15-minute overrun", and the pattern wants the 15 minutes said. Most of the answers it counts short on Q7 give both 21:30 and 21:45 and leave the subtraction to the reader: 33 of 38 in the sealed run. Read the key the other way, so that giving both times is enough, and the full folder holds every fact in 24 of 30 in the sealed run, not 21; the re-runs come to 26 and the side-by-side run to 28 and 29; the four set-ups without the rules or the examples come to 29 or 30 and the twelve with either to 24 to 28, which still do not overlap; and expectation 6 holds. The direction is the same on either reading and the size is not. The patterns were fixed before the count was run and have not been changed.
- **It does not check everything the key asks for.** It does not check any yes or no, which figure goes with which date on Q1 and Q2, or that an answer declines to decide on Q10. On Q8, Q9 and Q10 a bare number can be matched by a section number. One answer that falls short on Q3 by the pattern does name the ordinary procedure in other words (the map alone, third run), so that set-up reads 28 where a reader would say 29.
- **It was written after the run,** by people who had seen the markers disagree and had already searched by hand for two of the facts. `prediction.md` says which.
- **It counts what the key asks for, not what the question asks for.** At least five of the ten keys ask for more than their question does (`DEVIATIONS.md`). An answer that stops where the question stops is counted short here, as it was by the markers.
- **It changes nothing in the verdict,** which rests on the sealed run's marks and on the text put in front of the model.

`verify/check.mjs` does not cover this folder. To check `count.md`, run the command and compare.
