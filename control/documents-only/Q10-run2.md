# Q10, run 2

## Prompt, exactly as sent

> Under the Quillbrook Village Hall rules: Four trustees want to attend a committee meeting on 15 November 2026, but one proposes joining by video call from home while the other three attend in person. Do the rules allow a remote trustee to count towards the required quorum, and would that make this meeting quorate?

## Steps (4)

1. Grep Quillbrook
2. Glob **/*{quillbrook,Quillbrook,rules,constitution,governing}*
3. Read reference/hall/hall-trustees.md
4. Grep "quorum|quorate|video|remote" in reference/hall

## Answer

**The rules don't say whether a remote trustee counts towards quorum, so I can't give a definite yes or no. Whether the meeting is quorate depends on a question the rules leave open.**

- **Quorum:** Rule 4.2 says "Four trustees form a quorum." The rules don't say those four must be physically present.
- **Remote attendance:** Rule 6.3 says the rules "do not specify whether trustees may attend remotely." Nothing else in the hall documents mentions remote or video attendance either.
- **Your meeting:** Three trustees in the room plus one on video makes four attending. The meeting is quorate only if the video attendee counts as one of the four.

**If the remote trustee counts:** the meeting is quorate with exactly four. Any one of the four dropping out, for example through a connection failure, would make it inquorate. Decisions need a majority of those present and voting (4.3), and the chair has a casting vote on a tie (4.4).

**If the remote trustee doesn't count:** only three are present, so the meeting is inquorate and can't make valid decisions.

Because the rules are silent, the safer course is one of these:
1. Have the committee agree, ideally minuted at an earlier meeting, that remote attendees count towards quorum.
2. Get a fourth trustee to attend in person on 15 November 2026. The rules give the committee five to nine trustees (2.1), so at least one more should be available.
3. Check whether the hall has any other governing document, such as a constitution, that covers remote attendance. I found nothing in the files here.

If the meeting goes ahead on the video-call basis alone, any decisions could be challenged as made without a quorum.
