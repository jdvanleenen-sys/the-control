# Q8, run 2

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A registered village group has exactly nine local members and supplies that count when booking the Main Hall for two paid hours on 15 October 2025. The organiser requests the village group discount because the group is registered locally. Does it qualify, and what is the room-hire charge without the discount?

## Steps (5)

1. Grep .
2. Glob .
3. Read reference/hall/hall-fees.md
4. Read reference/hall/hall-changes.md
5. Read reference/hall/hall-bookings.md

## Answer

**The group doesn't qualify, and the room-hire charge is £48.**

- **Discount:** A registered village group must have at least ten local members (`hall-fees.md` §3.2). This group has nine, so it falls short. Being registered locally isn't enough on its own.
- **Rate:** The committee raised the Main Hall rate from £24 to £28 an hour, but only for events starting on or after 1 November 2025 (`hall-changes.md` §2). An event on 15 October 2025 is before that date, so the original £24 an hour applies (`hall-fees.md` §2.1).
- **Charge:** Two paid hours at £24 an hour is £48. Two hours is also the minimum paid booking (§2.4).

The £48 covers room hire only. Any kitchen use (£8), equipment or deposits (£30 booking deposit, which counts towards the hire charge) would be extra.
