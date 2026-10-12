# Q6, run 2

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A hirer books the Meeting Room on 6 September 2025 and asks for one portable speaker and three sets of folding display boards. Ignoring room hire and deposits, what is the total equipment charge?

## Steps (5)

1. Grep Quillbrook
2. Glob **/*
3. Read reference/hall/hall-fees.md
4. Read reference/hall/hall-changes.md
5. Grep "speaker|display board|equipment" in reference/hall

## Answer

The total equipment charge is **£25**.

- **Portable speaker:** £10 per booking (hall-fees.md §4.2), so 1 × £10 = £10.
- **Folding display boards:** £5 per set per booking (§4.3), so 3 × £5 = £15.

The 6 September 2025 booking falls under the current charges, which apply to bookings starting on or after 1 April 2025 (§1.2). The older rates in hall-fees-archive.md (£8 and £4) don't apply. The committee changes register doesn't alter any equipment fees. The 20% village-group discount wouldn't reduce this anyway, because it excludes equipment (§3.4).

Equipment can only be hired alongside a room (§4.4), which the Meeting Room booking satisfies. It also has to be requested when the booking is made, and its availability confirmed under hall-bookings.md (§4.5).
