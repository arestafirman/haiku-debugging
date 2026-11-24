import { mkdirSync, writeFileSync } from "node:fs";

// Seventeen Syllables of Debugging — one haiku about debugging, 5-7-5.
// The program writes exactly 17 syllables in three lines to /output/entry.txt:
// line 1 (5): Stack trace at dawn breaks
// line 2 (7): a null hides where I looked twice
// line 3 (5): I wrote it myself
// The turn is self-blame: the null chased all night was written by me.
// No trailing newline: the file ends with the third line. Deterministic:
// no network, no randomness, no clock — the same 78 bytes on every run.
const haiku = [
  "Stack trace at dawn breaks",
  "a null hides where I looked twice",
  "I wrote it myself",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
