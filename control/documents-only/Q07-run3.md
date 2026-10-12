# Q7, run 3

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A band is hired for a Saturday evening event on 4 April 2026. Their contract says amplified music will continue until 21:45. The hirer points out that the general hall rules allow Friday and Saturday amplified music until 22:00. May the band play until 21:45?

## Steps (4)

1. Grep Quillbrook
2. Glob **/*{rules,hall,Quillbrook}*
3. Grep reference/hall
4. Read reference/hall/hall-changes.md

## Answer

**No. The band must stop by 21:30, so 21:45 is 15 minutes too late.**

- The hirer is quoting the original rule. `hall-conduct.md` section 4.1 says Friday and Saturday amplified music must stop by 22:00.
- The committee replaced that rule on 20 March 2026. The change is in `hall-changes.md` section 5. It took effect on 1 April 2026 and sets the Friday and Saturday cutoff at 21:30.
- The controlling date is the date the music is played. That date is Saturday 4 April 2026, which is after 1 April, so the new cutoff applies.
- The band's contract does not override the hall rules. Nothing in the rules lets a hire agreement extend the cutoff.

The band should finish by 21:30. The contract or the set times will need changing.
