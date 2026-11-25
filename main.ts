// SPDX-License-Identifier: MIT
// Monday Morning Punchlines — make.fun bounty entry.
// Writes one joke about Monday mornings (<= 200 characters) to /output/entry.txt.
// Deterministic: no network, no randomness, no wall clock, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My weekend was a free trial. Monday morning is the auto-renewal: full price, no refund, and no unsubscribe button.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outputDir, "entry.txt")}`);
