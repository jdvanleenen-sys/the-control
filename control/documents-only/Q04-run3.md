# Q4, run 3

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: A member aged 35 has an active annual membership but is suspended by the committee from 1 November through 20 November 2025. They arrive at a public screening on 8 November 2025 and ask to pay the usual member admission price. Are they entitled to the discount, and what admission price applies instead?

## Steps (6)

1. Grep Fenwray
2. Glob **/*{fenwray,Fenwray,rules,membership}*
3. Read reference/film/film-membership.md
4. Read reference/film/film-fees.md
5. Read reference/film/film-screenings.md
6. Read reference/film/film-changes.md

## Answer

**No, they aren't entitled to the discount. They pay the standard admission price of £7.**

- **Suspension:** Their annual membership is still active, but the suspension covers 8 November 2025 (1–20 November). Membership rules s5.4 (`film-membership.md`) say a suspended member "cannot vote, book equipment or claim member prices." The £4 member rate in film-fees s2.2 is therefore unavailable to them that day.
- **Price that applies:** Standard admission is £7 per screening (`film-fees.md` s2.1). The child rates in s2.3 and s2.4 don't apply to someone aged 35. The committee's change register has no amendment to s2.1.
- **Why the member rate isn't £5:** The change register raises the member price to £5 only for screenings from 1 February 2026. It doesn't affect this 8 November 2025 screening, so it wouldn't matter here even if they were entitled to a member price.

The suspension doesn't end their membership, and it doesn't extend the membership period. After 20 November 2025 they can claim member prices again.
