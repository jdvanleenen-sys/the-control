# own, run 1

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: What does it cost to hire the Main Hall for three hours with the kitchen on 10 December 2025, for a hirer with no discount?

## Steps (4)

1. Grep Quillbrook
2. Glob **/*
3. Read reference/hall/hall-fees.md
4. Read reference/hall/hall-changes.md

## Answer

The hire costs **£92**.

- **Main Hall:** 3 hours at £28 per hour is £84. The £28 rate comes from the committee change effective 1 November 2025 (`hall-changes.md` §2). It replaced the original £24 rate in `hall-fees.md` §2.1. An event on 10 December 2025 falls after that date.
- **Kitchen:** £8 per booking (`hall-fees.md` §2.3).
- **Minimum booking:** Three hours is above the two-hour minimum, so no adjustment applies.

The £30 booking deposit counts towards this total, so it is not an extra charge. A £100 damage deposit would be extra only if alcohol is served.
