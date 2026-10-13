# own, run 1

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A hirer has an accepted Main Hall booking for Saturday 18 July 2026 and has paid everything due. The booking officer receives their written cancellation on 1 July 2026. What percentage of the room hire charge is refunded, and is the £30 booking deposit returned?

## Steps (4)

1. Grep Quillbrook|cancel
2. Glob **/*
3. Read reference/hall/hall-refunds.md
4. Read reference/hall/hall-bookings.md

## Answer

**50% of the room hire charge is refunded, and the £30 booking deposit is not returned.**

- **Notice period:** 1 July to 18 July 2026 is 17 calendar days. Rule 1.4 of `hall-refunds.md` makes the date the booking officer receives the written request the cancellation date, so 1 July is the date that counts.
- **Refund band:** 17 days falls in the 14 to 27 day band, which gives a 50% refund (rule 2.2). That percentage applies to the room, kitchen and equipment hire charges (rule 2.4).
- **Deposit:** The £30 booking deposit is non-refundable in every hirer cancellation (rule 2.5), and the refunds under 2.1 and 2.2 exclude it (rule 2.6).
- **Nothing left to pay:** The hirer has paid everything due, so rule 2.7 on unpaid balances doesn't come into it.

If the hirer also paid a damage deposit, it is returned in full after a hirer cancellation (rule 4.5). I read only `hall-refunds.md` and `hall-bookings.md`, not the fees file.
