# Q2, run 3

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: Two adults have accepted membership applications. The treasurer receives the first person's £24 payment on 30 June 2025 and the second person's payment on 2 July 2025. How much should each person pay for annual adult membership?

## Steps (5)

1. Grep Fenwray
2. Glob **/*
3. Read reference/film/film-fees.md
4. Read reference/film/film-membership.md
5. Read reference/film/film-changes.md

## Answer

Under the Fenwray Film Society rules, the first person pays **£24** and the second person pays **£28**.

- The fee depends on the date the treasurer receives payment. The 16 June 2025 committee decision says so (film-changes.md §1.3).
- Payments received before 1 July 2025 keep the old £24 fee (§1.4). The first person's payment on 30 June 2025 falls under this.
- From 1 July 2025, annual adult membership costs £28 instead of £24 (§1.2). The second person's payment on 2 July 2025 falls under this.
- Payment is only due once an application is accepted (film-membership.md §2.5), and a payment counts as received when cash is handed over or a transfer clears (film-fees.md §4.5). So the date that matters is the date of receipt, not the application date.
