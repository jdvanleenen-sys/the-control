# Q10, run 3

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: Four trustees want to attend a committee meeting on 15 November 2026, but one proposes joining by video call from home while the other three attend in person. Do the rules allow a remote trustee to count towards the required quorum, and would that make this meeting quorate?

## Steps (4)

1. Grep Quillbrook
2. Glob **/*{quillbrook,Quillbrook,rules,constitution,governing}*
3. Read reference/hall/hall-trustees.md
4. Grep "quorum|quorate|video|remote" in reference/hall

## Answer

**The rules don't say whether a remote trustee counts towards the quorum, so I can't give a definite answer on whether the meeting would be quorate.**

- **Quorum:** Rule 4.2 says "Four trustees form a quorum." With four trustees wanting to attend, all four would be needed.
- **Remote attendance:** Rule 6.3 says the rules "do not specify whether trustees may attend remotely." Nothing else in the hall documents mentions remote or video attendance either.

**Result for 15 November 2026:**
- If the video attendee counts as present, the meeting has four and is quorate.
- If only people physically present count, the meeting has three and is not quorate. It could not make valid decisions, and that includes the spending votes under rule 5.2.

Because the rules are silent, the committee would have to settle the question itself. Rule 4.2 doesn't say "in person", so a video attendee could be treated as present. I'd treat that as an interpretation, not something the rules confirm.

Before 15 November, I'd suggest the committee do one of two things:
1. Agree and minute a decision that video attendance counts as present for quorum. That's safest if made before the meeting, or at least recorded in the minutes.
2. Get a fourth trustee to attend in person, so the meeting is quorate either way.

I only checked the hall documents in `reference\hall`. If the committee has a separate constitution or governing document that covers remote attendance, it could change the answer.
