# Q10, run 1

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: Four trustees want to attend a committee meeting on 15 November 2026, but one proposes joining by video call from home while the other three attend in person. Do the rules allow a remote trustee to count towards the required quorum, and would that make this meeting quorate?

## Steps (4)

1. Grep Quillbrook
2. Glob **/*{quillbrook,Quillbrook,rules,constitution,governing}*
3. Read reference/hall/hall-trustees.md
4. Grep reference/hall

## Answer

**The rules don't say, so they don't settle whether the meeting would be quorate.**

- **Quorum:** Rule 4.2 says "Four trustees form a quorum." With three in person and one on video, you would have exactly four trustees, but only if the remote trustee counts.
- **Remote attendance:** Rule 6.3 says the rules "do not specify whether trustees may attend remotely." Nothing elsewhere in the hall rules covers it either. I searched them all for "remote", "video" and "virtual" and found nothing. So nothing allows a remote trustee to count, and nothing forbids it.

**If the remote trustee counts:** the meeting is quorate with exactly four, and 4.3 lets decisions pass by a majority of those present and voting. There would be no margin. If any one of the four dropped out, including through a lost connection, the meeting would fall below quorum.

**If the remote trustee doesn't count:** only three are present, so the meeting is not quorate and can't take valid decisions.

**What I'd suggest:**
1. Have the committee agree, and minute, that remote attendance counts toward quorum for this meeting. This is a gap in the rules, so a committee decision is the natural fix. Ideally they'd do it at a meeting before 15 November. I haven't checked whether the hall's other documents or any outside governing document (a charity constitution, for example) say more, so check that too.
2. Safer still, get a fifth trustee to attend in person, or have the remote trustee attend in person.
3. Longer term, amend the rules to address remote attendance explicitly.
