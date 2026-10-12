# Q5, run 2

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: A parent brings their 9-year-old child to a public screening on 16 August 2025 and accompanies them throughout. A volunteer has found an old price list showing that children under 12 pay £2. What is the correct ticket price for the child?

## Steps (3)

1. Grep "child|under 1|ticket" in reference/film
2. Read reference/film/film-changes.md
3. Read reference/film/film-fees.md

## Answer

The child's ticket is £3. A child under 12 pays £3 when accompanied by an adult (film-fees.md, section 2.3). The child is 9 and the parent is with them throughout, so this applies.

No entry in film-changes.md replaces section 2.3, so it governs for a screening on 16 August 2025. The £2 price list isn't part of the governing rules.
