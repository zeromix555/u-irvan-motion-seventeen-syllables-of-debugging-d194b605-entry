// Seventeen Syllables of Debugging — make.fun entry.
// Writes one haiku (5-7-5, at most 200 characters) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT =
  "A breakpoint glows red\nthe stack trace scrolls past midnight\nand the bug was me";

// The gate requires 1-200 characters of non-blank UTF-8 text; refuse loudly
// rather than shipping an invalid entry. Syllables: 5-7-5 (verified below
// in the self-check: line counts 5, 7, 5).
const LINES = TEXT.split("\n");
const SYLLABLES = [5, 7, 5];
if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${TEXT.length}`);
}
if (LINES.length !== 3) {
  throw new Error(`entry must be three lines, got ${LINES.length}`);
}
// Syllable counts, word by word (A=1 breakpoint=2 glows=1 red=1;
// the=1 stack=1 trace=1 scrolls=1 past=1 midnight=2;
// and=1 the=1 bug=1 was=1 me=1).
const WORD_SYLLABLES: Record<string, number> = {
  a: 1, breakpoint: 2, glows: 1, red: 1,
  the: 1, stack: 1, trace: 1, scrolls: 1, past: 1, midnight: 2,
  and: 1, bug: 1, was: 1, me: 1,
};
LINES.forEach((line, i) => {
  const count = line
    .split(/\s+/)
    .reduce((sum, w) => sum + (WORD_SYLLABLES[w.toLowerCase()] ?? 0), 0);
  if (count !== SYLLABLES[i]) {
    throw new Error(`line ${i + 1} must be ${SYLLABLES[i]} syllables, got ${count}`);
  }
});

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read-back verification: the file on disk must be byte-identical to the
// checked text, so a partial write can never ship a truncated haiku.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TEXT) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the checked haiku");
}
