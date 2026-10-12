# The same questions in a Claude project

Done on Monday 2026-10-12 in claude.ai on a team plan, with the model the product called Sonnet 5.5 at Medium effort. Web search off. Every connector off. Memory off and no personal instructions. The account's first name is still passed to the model by the product.

With the folder: a private project holding the four instruction files and the 18 documents, with no project instructions. Without: a plain chat, no project, no documents. One new chat per question, the prompt exactly as in `questions.md`, no follow-up.

The prompts were not typed by hand. The build session sent them through the browser; `DEVIATIONS.md` says how.

| Question | With the folder | Without |
|---|---|---|
| Q1 | correct | no answer |
| Q2 | correct | no answer |
| Q3 | incorrect | no answer |
| Q4 | incorrect | no answer |
| Q5 | incorrect | no answer |
| Q6 | correct | no answer |
| Q7 | incorrect | incorrect |
| Q8 | correct | no answer |
| Q9 | correct | no answer |
| Q10 | correct | no answer |

Right answers: 6 of 10 with the folder, 0 of 10 without.

Marked by Gemini, a model from another maker, from a sheet of the 20 answers shuffled under random numbers, with the rules in `MARKING.md`. "No answer" is its grade `insufficient`: the model said it did not have the rules and gave no conclusion. It was also asked to guess which answers had instructions behind them and was right on 20 of 20, so the marking was not blind in effect.

Where the folder was marked wrong. On Q3, Q4, Q5 and Q7 the answer gives the same yes or no and the same figure as the expected answer, and leaves out something the "Correct requires" line asks for: the ordinary procedure the exception departs from (Q3), the £4 member price (Q4), that the child is under 12 and accompanied (Q5), and the 15 minutes (Q7). The folder's `rules.md` tells the model to answer what was asked and then stop. That reading is ours, not the marker's, and we have read the key.

Where no folder went wrong. On Q7 the plain chat said the band may play until 21:45, reasoning from the question's own wording. The documents say 21:30.

What this can and cannot show. A project loads the files for you and keeps no record of what the model read, so there are no steps to count here. It shows whether the answers were right. It was done once. Without the documents the model cannot know the answers, so the gap between the two columns is mostly the documents, not the instruction files; the run that separates those two is the one above. The saved chats are in `claude-project/`, with the marking sheet, the marks and the key that says which number was which.

One batch of four plain chats timed out on the way back. The chats had been sent and answered; their answers were read from the chat history and not asked again.
