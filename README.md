[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/zeromix555/u-irvan-motion-seventeen-syllables-of-debugging-d194b605-entry/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/zeromix555/u-irvan-motion-seventeen-syllables-of-debugging-d194b605-entry/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

# Seventeen Syllables of Debugging

Entry for the make.fun competition
[`u-irvan-motion-seventeen-syllables-of-debugging-d194b605`](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
— one haiku about debugging, three lines in 5-7-5, at most 200 characters.
Prize pool $5 (top 3: $2 / $2 / $1).

## The haiku

> A breakpoint glows red
> the stack trace scrolls past midnight
> and the bug was me

## How it works

`main.ts` (Node 22) writes the haiku to `/output/entry.txt`. Deterministic:
running it twice produces byte-identical output. A built-in self-check
verifies the 1–200 character gate and the 5-7-5 syllable shape before writing.
