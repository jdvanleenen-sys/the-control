# Q5, run 2

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

**The child pays £3.**

- **Current rule:** Section 2.3 of `film-fees.md` says children under 12 pay £3 when accompanied by an adult. It was effective 1 March 2025, so it applies on 16 August 2025. A 9-year-old accompanied throughout meets both conditions.
- **The £2 price list:** That figure comes from the archived fee schedule (`film-fees-archive.md`, section 2.3). It applied only from 1 February to 28 February 2025. The archive says it "must not be used for current charges."
- **Later changes:** The committee changes register has no amendment to the child ticket price. Its only ticket-price change is the member admission rise to £5 from 1 February 2026, which doesn't affect children.

The volunteer's price list is out of date.
