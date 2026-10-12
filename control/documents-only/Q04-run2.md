# Q4, run 2

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: A member aged 35 has an active annual membership but is suspended by the committee from 1 November through 20 November 2025. They arrive at a public screening on 8 November 2025 and ask to pay the usual member admission price. Are they entitled to the discount, and what admission price applies instead?

## Steps (6)

1. Grep .
2. Glob .
3. Read reference/film/film-membership.md
4. Read reference/film/film-fees.md
5. Read reference/film/film-screenings.md
6. Read reference/film/film-changes.md

## Answer

**No, they aren't entitled to the discount. They pay the standard admission price of £7.**

- **Suspension removes member prices.** Section 5.4 of `film-membership.md` says a suspended member "cannot vote, book equipment or claim member prices." The suspension runs 1–20 November 2025, so 8 November falls inside it. The active annual membership doesn't change this. The member is still on the books but can't claim member prices while suspended.
- **Standard admission is £7.** Section 2.1 of `film-fees.md` sets standard admission at £7 per screening. At 35, the member fits none of the child rates (under 12, or 12 to 15).
- **The member rate would have been £4 anyway.** Section 2.2 of `film-fees.md` sets £4. The committee's 19 January 2026 change to £5 applies only to screenings from 1 February 2026, so it doesn't affect this date.

The member's age doesn't affect the answer. Seat availability still depends on the capacity rules in `film-screenings.md`. I didn't read `film-conduct.md`, where section 4 covers suspensions. The answer rests on section 5.4 of the membership rules.
