# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/rsrizal2-ai/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/rsrizal2-ai/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)

An entry for make.fun's ["Roast Your Own Agent"](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda) bounty. One original line, up to 200 characters, roasting the entrant's own AI agent — judged pairwise by an AI comedy-club judge on how funny, fresh, and tightly worded it is.

## The entry

> My agent turns a five-minute task into a committee meeting, a risk assessment, and a eulogy — for the plan it just killed.

122 characters. The angle: not the stock hallucination, refusal, or confident-wrong-answer joke — the agent as a middle manager that over-plans a trivial job to death. Three-beat escalation (committee meeting, risk assessment, eulogy) with an em-dash pause so the punchline — a funeral for the plan it just killed — lands on its own breath.

## Run it

```sh
node main.ts
```

Writes the entry text to `/output/entry.txt` (override with `OUTPUT_PATH`). The program self-checks the published gate before writing: UTF-8 text, 1–200 characters, not only whitespace, a single line.

## Layout

- `main.ts` — the entrypoint: holds the roast line, checks the gate, writes `/output/entry.txt`.
- `LICENSE` — MIT.

## License

MIT — see `LICENSE`.
