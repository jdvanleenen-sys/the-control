# Q2, run 1

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: Two adults have accepted membership applications. The treasurer receives the first person's £24 payment on 30 June 2025 and the second person's payment on 2 July 2025. How much should each person pay for annual adult membership?

## Steps (5)

1. Grep .
2. Glob .
3. Read reference/film/film-fees.md
4. Read reference/film/film-membership.md
5. Read reference/film/film-changes.md

## Answer

The first person pays **£24** and the second pays **£28**.

- The fee is set by the date the treasurer receives payment (film-changes.md §1.3). Under film-membership.md §3.1, that date is also when membership begins.
- Section 1.1 of film-fees.md sets annual adult membership at £24.
- A committee decision of 16 June 2025 raised it to £28 from 1 July 2025. Payments received before 1 July 2025 keep the old fee (film-changes.md §1.2–1.4).
- The first person's payment was received on 30 June 2025, before the change, so the fee is £24.
- The second person's payment was received on 2 July 2025, after the change, so the fee is £28.

Neither fee is reduced for joining partway through the year, and no joining or administration fee applies (film-fees.md §1.3 and §1.5). Both memberships run until 28 February 2026.
