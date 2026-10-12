# Q8, run 1

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A registered village group has exactly nine local members and supplies that count when booking the Main Hall for two paid hours on 15 October 2025. The organiser requests the village group discount because the group is registered locally. Does it qualify, and what is the room-hire charge without the discount?

## Steps (5)

1. Grep Quillbrook
2. Glob **/*
3. Read reference/hall/hall-fees.md
4. Read reference/hall/hall-changes.md
5. Read reference/hall/hall-quick-guide.md

## Answer

**Does it qualify?** No. Section 3.2 of `hall-fees.md` says a registered village group needs at least ten local members, and this group has nine. Being registered locally isn't enough on its own. The 25% rate in `hall-changes.md` doesn't help either. It only changes the percentage in section 3.1, and it takes effect on 1 February 2026, after this event.

**Room-hire charge without the discount:** £48.
- The Main Hall rate is £24 per hour (section 2.1). The £28 rate only applies to events from 1 November 2025, so it doesn't apply to 15 October 2025.
- Two paid hours is the minimum booking (section 2.4), so 2 × £24 = £48.

This is room hire only. A kitchen (£8), equipment, and the £30 booking deposit would be separate, and the deposit counts towards the total.
