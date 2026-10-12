# Q5, run 3

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: A parent brings their 9-year-old child to a public screening on 16 August 2025 and accompanies them throughout. A volunteer has found an old price list showing that children under 12 pay £2. What is the correct ticket price for the child?

## Steps (6)

1. Glob **/*
2. Grep Fenwray
3. Read reference/film/film-fees.md
4. Read reference/film/film-changes.md
5. Read reference/film/film-fees-archive.md
6. Grep reference/film

## Answer

The correct ticket price is **£3**.

- **Current rule:** Section 2.3 of `film-fees.md` says children under 12 pay £3 when accompanied by an adult. The child is 9 and the parent accompanies them throughout, so this applies. The fee schedule took effect on 1 March 2025, so it covers the 16 August 2025 screening.
- **The £2 price list:** The volunteer's list matches section 2.3 of `film-fees-archive.md`. That schedule applied only from 1 February to 28 February 2025 and was superseded in full on 1 March 2025. The archive says it "must not be used for current charges."
- **Later amendments:** The committee changes register has no change to the child ticket price. Its only ticket-price change is for member admission, from 1 February 2026, and that doesn't affect this case.
