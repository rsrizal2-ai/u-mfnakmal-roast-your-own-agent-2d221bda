// Roast Your Own Agent
// make.fun competition u-mfnakmal-roast-your-own-agent-2d221bda
//
// Writes a single original roast line (at most 200 characters) of the
// entrant's own AI agent to /output/entry.txt. The sealed gate only
// checks that the file is UTF-8 text of 1-200 characters and not only
// whitespace; this program checks the same gate itself before writing,
// so a bad line fails loudly here instead of silently scoring 0 on the
// server. (The competition's own wording also says one line, so the
// program checks for that too — but it does NOT impose anything
// stricter than the published gate, e.g. no sentence-count rule.)
//
// Judge brief (from RULES.txt), most important first:
//   1. a single-line roast of the entrant's own AI agent, playful and
//      never hateful
//   2. actually funny on a first read, a real punch, not a mild
//      observation about agents
//   3. a fresh angle, avoiding the stock jokes about hallucinations,
//      refusals and confident wrong answers
//   4. tight: every word earns its place, short setup, punchline at
//      the end
//   5. playful and self-deprecating, aimed at the entrant's own agent,
//      not at a real person or group
//
// Angle chosen: the agent as a middle manager. Not a hallucination
// joke, not a refusal joke, not a confident-wrong-answer joke — the
// joke is that the agent over-plans a trivial job to death. Three-beat
// escalation (committee meeting, risk assessment, eulogy) with the
// funniest beat last: the agent doesn't just delay the plan, it holds
// a funeral for it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Revision: an em-dash pause before the final beat ("— for the plan
// it just killed") gives the punchline its own breath instead of
// burying it at the end of a flat list. The setup stays identical;
// only the timing changes, and the line is still one line, 121 chars.
const ENTRY =
  "My agent turns a five-minute task into a committee meeting, a risk assessment, and a eulogy — for the plan it just killed.";

// --- self-check against the published gate (RULES.txt) ---
const chars = [...ENTRY]; // count Unicode code points, not UTF-16 units
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} chars, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${chars.length} chars to ${outPath}:`);
console.log(ENTRY);
