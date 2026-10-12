# Q1, run 3

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: A screening is advertised to begin at 19:30 on 18 November 2025. Someone has paid for a reserved seat but has not arrived when the film starts. Until what exact time must the society hold that seat, and when do the doors normally open?

## Steps (5)

1. Grep "Fenwray" in .
2. Glob "**/*{rule,Rule,film,Film,society,Society}*" in .
3. Read reference/film/film-screenings.md
4. Read reference/film/film-changes.md
5. Read reference/film/film-quick-guide.md

## Answer

Under the Fenwray Film Society's screening rules (`reference\film\film-screenings.md`):

- **Seat hold:** The society must hold the reserved seat until **19:40** on 18 November 2025. That is 10 minutes after the advertised 19:30 start (rule 3.4).
- **Doors:** Doors normally open at **19:00**, 30 minutes before the advertised start (rule 3.3).

The changes register (`film-changes.md`) doesn't amend rules 3.3 or 3.4. Its only change to the screening rules is the audience limit in 3.1, which doesn't affect this question.

If the person arrives after the film has started, rule 3.5 lets them enter only during a suitable break.
