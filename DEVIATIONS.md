No change has been made to the analysis after a run.

## Monday 2026-10-12, the Claude project run was not done by hand

`EXPERIMENT.md` says the ten questions are asked "by hand" in a Claude project and in a plain chat. They were asked through the browser by the build session, which is a Claude model driving the page: it typed each prompt, sent it, and copied the page text of the answer. No follow-up was sent and no chat was redone. A person gave the go-ahead and changed the account's settings; a person did not type the prompts.

What that changes: nothing in what was asked. The prompts are the ones in `questions.md`, typed character for character, and each saved chat shows the prompt as the page displayed it. The build session has read every expected answer, so it does not mark these answers.

One batch of four plain chats timed out on the way back. The chats had been sent and answered; their answers were read from the chat history afterwards and not asked again.
