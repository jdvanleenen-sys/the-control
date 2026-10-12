# Q4, run 1

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: A member aged 35 has an active annual membership but is suspended by the committee from 1 November through 20 November 2025. They arrive at a public screening on 8 November 2025 and ask to pay the usual member admission price. Are they entitled to the discount, and what admission price applies instead?

## Steps (6)

1. Grep .
2. Glob .
3. Read reference/film/film-membership.md
4. Read reference/film/film-fees.md
5. Read reference/film/film-changes.md
6. Read reference/film/film-screenings.md

## Answer

**No, they aren't entitled to the member price. They pay the standard admission of £7.**

- **Suspension removes member prices.** Membership rules 5.4 (`film-membership.md`) say a suspended member "cannot vote, book equipment or claim member prices." Their annual membership is still active, but 8 November 2025 falls inside the suspension (1–20 November 2025). Fees rule 2.2 gives the member price only to "members with active membership", so they don't qualify that day.
- **Standard admission is £7.** Fees rule 2.1 (`film-fees.md`) sets it at £7 per screening. At 35 they don't fall under the child rates in 2.3 and 2.4. No committee decision in `film-changes.md` alters the £7 standard price.
- **The £5 member price doesn't apply either.** The committee raised the member price from £4 to £5, but only for screenings from 1 February 2026. A screening on 8 November 2025 would have been £4 for a member in good standing, and that's moot here.

Once the suspension ends after 20 November 2025, they can claim the member price again.
