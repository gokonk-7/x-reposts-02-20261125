// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry is a set of posts on X: posts of your own, all from one public
// account, each quoting or replying directly to a different one of make.fun's
// newest posts on x.com/makefunai, with make.fun or @makefunai and your
// make.fun play code in each post's own words. POSTS.json at this
// repository's root names those posts' addresses (up to 15); the house reads
// each post's reposts, quotes and likes from X and scores them, 2 points per
// repost or quote and 1 per like, summed over all the posts.
//
// This program is all the repository has to do: it reads POSTS.json from the
// repository, lists the posts it names, and copies POSTS.json to the output
// directory, where the gate reads it. Nothing this program writes about the
// posts is scored; the house writes its own reading of the posts' counts to
// /output/posts.counts.json after this program runs.
//
// It reads no network, no wall clock and no file outside the repository, and
// its two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POSTS_FILE = 'POSTS.json';

// Read the list of posts named by this entry.
const raw = readFileSync(join(BOT_DIR, POSTS_FILE), 'utf8');
const parsed: unknown = JSON.parse(raw);

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  !Array.isArray((parsed as { posts?: unknown }).posts)
) {
  console.error(`${POSTS_FILE} must be a JSON object of the form {"posts": [...]}`);
  process.exit(1);
}

const posts = (parsed as { posts: unknown[] }).posts;
if (posts.length > 15) {
  console.error(`${POSTS_FILE} names ${posts.length} posts; the gate takes at most 15`);
  process.exit(1);
}
for (const post of posts) {
  if (typeof post !== 'string' || !/^https?:\/\//.test(post)) {
    console.error(`${POSTS_FILE} holds an entry that is not a post address: ${String(post)}`);
    process.exit(1);
  }
}

// List the posts this entry hands in, in the order POSTS.json names them.
console.log(`makefun-x-reposts-02: ${posts.length} post${posts.length === 1 ? '' : 's'} listed`);
posts.forEach((post, index) => {
  console.log(`${index + 1}. ${post}`);
});

// Hand POSTS.json to the gate, byte for byte.
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, POSTS_FILE), join(OUTPUT_DIR, POSTS_FILE));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
