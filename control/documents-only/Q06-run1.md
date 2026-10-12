# Q6, run 1

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A hirer books the Meeting Room on 6 September 2025 and asks for one portable speaker and three sets of folding display boards. Ignoring room hire and deposits, what is the total equipment charge?

## Steps (4)

1. Grep Quillbrook|portable speaker|display board
2. Glob **/*
3. Read reference/hall/hall-fees.md
4. Read reference/hall/hall-changes.md

## Answer

The total equipment charge is **£25**.

- Portable speaker: £10 per booking (`hall-fees.md` §4.2), so £10.
- Folding display boards: £5 per set per booking (§4.3), so 3 sets × £5 = £15.

Together that is £10 + £15 = £25.

The 6 September 2025 booking falls under these charges because they apply to bookings starting on or after 1 April 2025 (§1.2). The changes register (`hall-changes.md`) doesn't alter any equipment fees. The village group discount wouldn't apply to equipment either (§3.4).
