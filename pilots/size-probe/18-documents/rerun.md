# Re-run against the committed run

Model: claude-sonnet-5-5, effort medium. Mean steps per session, by question.

| Question | Committed: full | Committed: documents | Re-run: full | Re-run: documents |
|---|---|---|---|---|
| Q1 | 3.00 | 5.00 | 3.00 | 5.00 |
| Q2 | 5.00 | 6.00 | 4.00 | 6.00 |
| Q3 | 2.00 | 4.00 | 2.00 | 4.00 |
| Q4 | 2.00 | 6.00 | 4.00 | 6.00 |
| Q5 | 2.00 | 5.00 | 3.00 | 5.00 |
| Q6 | 3.00 | 6.00 | 3.00 | 6.00 |
| Q7 | 2.00 | 4.00 | 2.00 | 4.00 |
| Q8 | 2.00 | 6.00 | 2.00 | 6.00 |
| Q9 | 3.00 | 5.00 | 2.00 | 6.00 |
| Q10 | 2.00 | 7.00 | 2.00 | 6.00 |

Empty arm, mean steps: committed 2.00, re-run 2.10.

Committed outcome: fewer steps with the folder. With the folder loaded first, the model took fewer steps on 10 of 10 questions (2.60 per session against 5.40).
Re-run outcome: fewer steps with the folder. With the folder loaded first, the model took fewer steps on 10 of 10 questions (2.70 per session against 5.40).

Reproduces: YES. Reproduces means the same rule lands on the same one of three outcomes. Single questions can differ by a step or two between runs.

Steps show how the model got to an answer, not whether the answer is right. Read the answers.
Notice: Full package: 0 of 10 sessions faulty and left out
Notice: Documents only: 0 of 10 sessions faulty and left out
Notice: Empty: 0 of 10 sessions faulty and left out
