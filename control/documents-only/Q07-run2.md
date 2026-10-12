# Q7, run 2

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A band is hired for a Saturday evening event on 4 April 2026. Their contract says amplified music will continue until 21:45. The hirer points out that the general hall rules allow Friday and Saturday amplified music until 22:00. May the band play until 21:45?

## Steps (3)

1. Grep Quillbrook
2. Glob **/*{rules,hall,Quillbrook}*
3. Grep reference/hall

## Answer

**No. The band must stop by 21:30, so 21:45 is 15 minutes too late.**

- The general rule in `hall-conduct.md` §4.1 does say Friday and Saturday amplified music stops by 22:00. That is the hirer's point.
- A later decision replaced §4.1. `hall-changes.md` §5 (decision made 20 March 2026) says that from 1 April 2026, Friday and Saturday amplified music must stop by 21:30.
- Under §5.3, the controlling date is the date the music is played. That date is 4 April 2026, which falls after the 1 April effective date, so the 21:30 cutoff applies.
- The quick guide (`hall-quick-guide.md` §5) also says 21:30.

The band's contract can't override the hall rule. It would need to be amended so the music stops by 21:30. Opening hours (§3.2, until 23:00) don't change the music cutoff.
