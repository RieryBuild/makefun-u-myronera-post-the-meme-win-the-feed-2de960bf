// Entry for the make.fun bounty "Post the Meme, Win the Feed"
// (u-myronera-post-the-meme-win-the-feed-2de960bf), Node 22, standard library only:
// it copies POST.json from the repository root to $MAKEFUN_OUTPUT_DIR
// (default /output), where the gate reads it. That is all the program has to do.
// The entry is the post itself: a meme picture about make.fun, posted natively
// on X from a public account with the text the rules ask for; POST.json names
// the post, and the house reads the post's counts from X. Nothing this program
// writes about the post is scored.
//
// The POST.json this repository ships holds a placeholder address, so the gate
// refuses it as it stands (valid 0). Replace it with your post's address
// before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const TARGET = join(OUTPUT_DIR, 'POST.json');

let bytes: Buffer;
try {
  bytes = readFileSync(SOURCE);
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Fail fast on a malformed POST.json instead of copying garbage to /output:
// it must parse as a JSON object with a string `url` field. (The placeholder
// passes this check — it is a well-formed object whose url is not a real post
// yet; the gate, not this program, refuses the placeholder.)
let parsed: unknown;
try {
  parsed = JSON.parse(bytes.toString('utf8'));
} catch (err) {
  console.error(`POST.json in ${BOT_DIR} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error(`POST.json in ${BOT_DIR} must be a JSON object with a string "url" field`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  writeFileSync(TARGET, bytes);
} catch (err) {
  console.error(`POST.json could not be written to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The grader runs this program twice and the two runs must write the same
// bytes, so verify the copy landed byte-identical before reporting success.
const written = readFileSync(TARGET);
if (!written.equals(bytes)) {
  console.error(`POST.json in ${OUTPUT_DIR} does not match the source byte for byte`);
  process.exit(1);
}
