# Q2, run 2

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: Two adults have accepted membership applications. The treasurer receives the first person's £24 payment on 30 June 2025 and the second person's payment on 2 July 2025. How much should each person pay for annual adult membership?

## Steps (6)

1. Grep "Fenwray" in .
2. Glob "**/*" in .
3. Read reference/film/film-fees.md
4. Read reference/film/film-membership.md
5. Read reference/film/film-changes.md
6. Read reference/film/film-fees-archive.md

## Answer

Under the Fenwray Film Society rules, the first person pays **£24** and the second person pays **£28**.

- **Base fee:** Annual adult membership is £24 (`film-fees.md` §1.1).
- **Fee change:** The committee's decision of 16 June 2025 raised the fee to £28 from 1 July 2025 (`film-changes.md` §1.2). The date the payment is received sets the fee, and payments received before 1 July keep the old fee (§1.3–1.4).
- **First person:** The treasurer received their payment on 30 June 2025, so the old £24 fee applies.
- **Second person:** The treasurer received their payment on 2 July 2025, so the new £28 fee applies.

The date of acceptance doesn't matter. Payment is only due after acceptance (`film-membership.md` §2.5), but the fee depends only on when payment is received.
