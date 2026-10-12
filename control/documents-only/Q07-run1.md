# Q7, run 1

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: A band is hired for a Saturday evening event on 4 April 2026. Their contract says amplified music will continue until 21:45. The hirer points out that the general hall rules allow Friday and Saturday amplified music until 22:00. May the band play until 21:45?

## Steps (4)

1. Grep Quillbrook
2. Glob **/*{hall,Hall,rules,Rules}*
3. Grep "amplif|music|22:00|21:45|curfew|noise" in reference/hall
4. Read reference/hall/hall-changes.md

## Answer

**No. The band must stop by 21:30, so 21:45 is 15 minutes too late.**

- The general rule, `hall-conduct.md` §4.1, does say Friday and Saturday amplified music stops by 22:00. That is the rule the hirer is relying on.
- The committee changes register (`hall-changes.md` §5) replaced §4.1 with effect from 1 April 2026. Since then, Friday and Saturday amplified music must stop by 21:30.
- The controlling date is the date the music is played (§5.3). That is 4 April 2026, a Saturday, which is after the 1 April effective date. The new 21:30 cutoff therefore applies.
- The original hall-conduct.md still shows 22:00, because the register leaves the original wording unchanged (§1.3). The register's replacement is what governs.

The hirer is working from the superseded wording. The band's contract can't override the hall rule, so the set needs to end by 21:30. The contract's 21:45 end time would need amending.
