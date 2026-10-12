# Q5, run 1

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: A parent brings their 9-year-old child to a public screening on 16 August 2025 and accompanies them throughout. A volunteer has found an old price list showing that children under 12 pay £2. What is the correct ticket price for the child?

## Steps (6)

1. Grep Fenwray
2. Glob **/*
3. Read reference/film/film-fees.md
4. Read reference/film/film-fees-archive.md
5. Read reference/film/film-changes.md
6. Read reference/film/film-screenings.md

## Answer

**The correct price is £3.**

- **Current rule:** Section 2.3 of `film-fees.md` (effective 1 March 2025) says children under 12 pay £3 when accompanied by an adult. The 9-year-old is under 12, and the parent accompanies them throughout, so the condition is met.
- **The £2 price list is out of date:** It matches section 2.3 of `film-fees-archive.md`. That schedule applied only from 1 February to 28 February 2025 and was superseded in full on 1 March 2025. The archive says it "must not be used for current charges."
- **No later change affects it:** `film-changes.md` doesn't touch the child ticket price. Its only ticket-price change is for member admission, which doesn't apply to a child.
- **The screening date doesn't matter:** The screening on 16 August 2025 was after 1 March 2025, so the current schedule applied.
