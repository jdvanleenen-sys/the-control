# Re-run against the committed run

Model: claude-sonnet-5-5, effort medium. Mean steps per session, by question.

| Question | Committed: full | Committed: documents | Re-run: full | Re-run: documents |
|---|---|---|---|---|
| Q1 | 2.00 | 5.00 | 2.00 | 5.00 |
| Q2 | 2.00 | 5.33 | 2.00 | 5.00 |
| Q3 | 2.00 | 4.00 | 2.00 | 4.00 |
| Q4 | 4.00 | 6.00 | 4.00 | 8.00 |
| Q5 | 2.33 | 6.00 | 2.00 | 6.00 |
| Q6 | 2.00 | 4.33 | 2.00 | 7.00 |
| Q7 | 2.00 | 3.67 | 2.00 | 4.00 |
| Q8 | 2.00 | 5.00 | 2.00 | 5.00 |
| Q9 | 3.33 | 7.00 | 4.00 | 7.00 |
| Q10 | 2.00 | 4.00 | 2.00 | 5.00 |

Empty arm, mean steps: committed 2.00, re-run 2.00.

Committed outcome: fewer steps with the folder. With the folder loaded first, the model took fewer steps on 10 of 10 questions (2.37 per session against 5.03).
Re-run outcome: fewer steps with the folder. With the folder loaded first, the model took fewer steps on 10 of 10 questions (2.40 per session against 5.60).

Reproduces: YES. Reproduces means the same rule lands on the same one of three outcomes. Single questions can differ by a step or two between runs. This compares steps only. Right answers are not re-marked: to check them, read your answers in the folder named below, and ours under control/ and treatment/, against questions.md.

Steps show how the model got to an answer, not whether the answer is right. Read the answers.
Notice: Full package: 0 of 10 sessions left out for a fault in the set-up, 0 kept and flagged
Notice: Documents only: 0 of 10 sessions left out for a fault in the set-up, 0 kept and flagged
Notice: Empty: 0 of 10 sessions left out for a fault in the set-up, 0 kept and flagged
