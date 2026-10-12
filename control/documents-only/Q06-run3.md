# Q6, run 3

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A hirer books the Meeting Room on 6 September 2025 and asks for one portable speaker and three sets of folding display boards. Ignoring room hire and deposits, what is the total equipment charge?

## Steps (4)

1. Grep Quillbrook|portable speaker|display board
2. Glob **/*
3. Read reference/hall/hall-fees.md
4. Read reference/hall/hall-changes.md

## Answer

The total equipment charge is **£25**.

- **Portable speaker:** £10 per booking, so £10 (hall-fees.md §4.2).
- **Folding display boards:** £5 per set per booking, so 3 × £5 = £15 (§4.3).

A booking on 6 September 2025 falls under the charges that took effect on 1 April 2025 (§1.2). None of the later committee changes in hall-changes.md alter equipment fees. The discount for registered village groups doesn't apply to equipment either (§3.4).

The equipment has to be hired alongside the room, which the Meeting Room booking covers (§4.4). Availability still needs confirming under hall-bookings.md (§4.5).
