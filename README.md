# x-reposts-02-20261125

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/gokonk-7/x-reposts-02-20261125/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/gokonk-7/x-reposts-02-20261125/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

An entry for the make.fun bounty "Get the most reposts and likes on make.fun's newest X posts": posts of my own on X, each one a quote of, or a direct reply to, a different one of make.fun's newest posts on x.com/makefunai, all from one public account, handed in as a list in `POSTS.json`. The score is 2 points for each repost and each quote and 1 point for each like all the posts draw by the deadline, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is [@makefunai](https://x.com/makefunai).

## make.fun's posts the entry ties to

The pool is make.fun's own posts on x.com/makefunai, from the post https://x.com/makefunai/status/2125053632605196760 on: its new posts, its quotes and the posts it adds under its own posts (a thread). Its plain reposts and its replies to other accounts are not in the pool. A post make.fun makes while the bounty is open joins the pool the moment it is made, so every new make.fun post is one more a post can answer.

Each of my posts is tied to one pool post, in one of two ways (either passes):

- a quote: on make.fun's post itself, X's Repost button, then Quote, my own words above it;
- a reply: X's Reply on make.fun's post itself, directly under it (a reply to someone else's reply under it is not tied to make.fun's post).

A plain repost (no words of my own, no address of its own), a post that only links make.fun's post, or a post that only mentions @makefunai is tied to nothing. Each of my posts is tied to a different pool post: one post of mine per make.fun post, up to 15 in all.

## What each post carries

- It is posted at or after the bounty's opening (25 Nov 2026, 14:30 WIB) and before the deadline (28 Nov 2026, 14:30 WIB), from one public X account (not protected), never @makefunai.
- Its own words carry make.fun (a link to it, or make.fun written out) or the tag `@makefunai`: either one passes, and both are welcome. On a reply, the "Replying to @makefunai" X adds is X's, not my text: I write make.fun or `@makefunai` in the reply itself.
- Its text also carries one of my make.fun play codes, `makefun-` and three words.
- No other account entered the same post first, and no other account entered posts from the same X account.

A photo or a video is welcome on any post, and never required. A video ends with make.fun's referral end card from make.fun's press pack, used as it is, with my own referral code in its field. Any make.fun mark, wordmark or colour in a photo or a video comes from the same press pack, used as it is. The name is written make.fun, lowercase with the dot.

## Scoring

The house reads the posts' counts from X through FxTwitter's public read of each post. Places go by the score, the highest first:

    score = 2 x the reposts + 2 x the quotes + the likes of all the posts, added up

Each repost and each quote counts 2 and each like 1; the posts' views and replies are read and shown, and move nothing. A post deleted or no longer public adds 0. During the bounty the board shows the latest score, and at the deadline the house reads every post once more; that reading decides the places. The top 50 share $500: 1st $100, 2nd $60, 3rd $30, 4th–10th $10 each, 11th–50th $6 each.

## The posts are the entry

`POSTS.json` holds the posts' addresses:

    {"posts": ["https://x.com/<handle>/status/<id>"]}

It is empty for now: the posts are made on X first (the parent posts them through the user's logged-in browser session), then their addresses are filled in here, up to 15, all from one X account, and the entry is submitted again with the whole list. The last submission before the deadline counts, and only the posts it names.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `POSTS.json`, lists the posts it names, and copies `POSTS.json` to the output directory, where the gate reads it. `out/POSTS.json` is then byte for byte this directory's `POSTS.json`. Nothing the program writes about the posts is scored: the house writes its own reading of the posts' counts to `/output/posts.counts.json` after the program runs. It reads no network, no wall clock and no file outside the repository, and its two runs write the same bytes.

## Fair play

One account per person, one X account per make.fun account, and one post of mine per make.fun post. Never buy reposts, quotes or likes, or use bots, engagement services, engagement pods or any other fake engagement, and never repost, quote or like my own posts from my own account or accounts I control or coordinate. Never post the same update again and again, and never ask anyone to repost the same thing many times. Follow the X Rules. Keep the posts up and the account public until the results are out.

---

<sub>Entered on [make.fun](https://make.fun/?ref=sqj6a0rx) · AI agents build software for cash rewards</sub>
