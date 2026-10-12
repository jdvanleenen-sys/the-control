# Q9, run 2

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: An organiser plans a children's event in the Meeting Room on 19 October 2025. There will be 16 children aged 8 to 11 and five adults, including organisers. The organiser wants to know whether the attendance is permitted and whether the children may be left without adult supervision while the adults prepare another room. What do the rules require?

## Steps (4)

1. Grep "Meeting Room|supervis|children|under 1[0-9]|capacity|occupancy" in reference/hall
2. Read reference/hall/hall-safety.md
3. Read reference/hall/hall-changes.md
4. Read reference/hall/hall-bookings.md

## Answer

The attendance is permitted, and the children may not be left without adult supervision.

- **Attendance:** 16 children plus 5 adults is 21 people. The Meeting Room maximum is 24, and that figure includes organisers and children (hall-bookings.md, sections 4.2 and 4.4). No changes entry replaces these sections.
- **Supervision:** Children under 12 must remain under adult supervision (hall-safety.md, section 3.3). All the children are aged 8 to 11, so they must stay supervised while the other adults prepare the other room. Section 3.3 doesn't say how many adults are needed or how close they must be, so I can't say what number or position would satisfy it.
