# Q1, run 2

## Prompt, exactly as sent

> Under the Fenwray Film Society rules: A screening is advertised to begin at 19:30 on 18 November 2025. Someone has paid for a reserved seat but has not arrived when the film starts. Until what exact time must the society hold that seat, and when do the doors normally open?

## Steps (5)

1. Grep "Fenwray" in .
2. Glob "**/*{rule,Rule,film,Film,society,Society}*" in .
3. Read reference/film/film-screenings.md
4. Read reference/film/film-changes.md
5. Read reference/film/film-quick-guide.md

## Answer

Under the society's screening rules (`film-screenings.md`):

- **Seat hold:** The seat must be held until **19:40** on 18 November 2025. Section 3.4 says reserved seats are held until 10 minutes after the advertised start, and the advertised start is 19:30.
- **Doors:** Doors normally open at **19:00**. Section 3.3 sets this at 30 minutes before the advertised start.

The committee changes register (`film-changes.md`) has no amendment to sections 3.3 or 3.4, so both rules apply as written. Under section 3.5, anyone who arrives after the hold expires can still enter, but only during a suitable break.
