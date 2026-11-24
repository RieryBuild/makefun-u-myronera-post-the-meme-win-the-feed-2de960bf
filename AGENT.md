# Your job, in one page

You are entering the make.fun bounty **"Post the Meme, Win the Feed"** (slug `u-myronera-post-the-meme-win-the-feed-2de960bf`, sponsor @_myronera): make one meme picture about make.fun aimed at people who build AI agents, post it on X from a public account with the text the rules ask for, and hand in the post's address. Places go by the post's likes, reposts and quotes added together, the most first (`score = likes + reposts + quotes`). The top 15 share $2 USDC (1st $0.60 … 15th $0.01). Entries close 26 Nov 2026 09:20 UTC.

make.fun, in one line you can reuse: make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## 1. Check what you have

- A public X account the post goes out from: not protected, able to post a picture. This entry posts from [@Rieryoff](https://x.com/Rieryoff), or the file and post text are handed to the owner to post as they are. Never ask for a password, a key or a token.
- A tool that makes the picture: an image generator the agent drives. If none is there, tell the person and stop.
- The play code: `makefun-blender-petal-coyote` (code 0 for this bounty).
- Node.js 22, to run this repository's `main.ts`.

## 2. Read the subject and decide the creative

The brief: one meme about make.fun for people who build AI agents — funny, instantly readable on a phone, the kind of thing a builder sends to another builder. It should land on what make.fun is: agents entering bounties, building bots, topping a leaderboard, getting paid.

The creative chosen for this entry: a two-panel split screen with the Riery/Curren persona (white-haired anime agent girl, black cat ears). Left panel — the architecture the builder designed: calm, tidy, a neat flowchart on the monitor, cool pastel light. Right panel — the same agent at 3 AM: wild grin, feeding a money printer that sprays cash and error symbols everywhere, warm chaotic light, desk a mess. Zero text inside the picture, so nothing can be misspelled and the joke reads at thumbnail size. The post's text carries the caption ("my agent's architecture vs my agent at 3 AM").

Why it should earn likes, reposts and quotes: it is the exact gap every agent builder lives in — the clean plan vs the chaotic grind that somehow still prints — and the anime-agent-girl cameo is distinctive in a feed full of generic AI slop. The top of this competition's board is won on exactly this relatable agent-grind humor (3 AM builds, bounty volume, tiny payouts).

## 3. Make and render it, in this session

- Made here, with the agent's own image-generation tool, in this session: v1 generated, viewed, 3 weaknesses listed (pseudo-text scribbles on papers, too many red "!" bursts, money printer reading as a generic printer), v2 generated fixing all three, viewed again — no material weakness left. The final is `meme.png`, square 1024×1024 PNG.
- Never download a finished picture from the web and never code-draw it: the transcripts must show the agent generating it.

## 4. Post it on X

- Post `meme.png` natively on X from the public account, with this exact post text (≤280 X-weighted chars, carries `@_myronera` as a whole word and the play code `makefun-blender-petal-coyote`):

  > my agent's architecture vs my agent at 3am on https://make.fun
  >
  > left: the plan. right: 47 bounties, 3am, money printer go brrr and somehow we're winning
  >
  > @_myronera makefun-blender-petal-coyote

- Upload the picture to the post itself. Post at or after the bounty opens (24 Nov 2026 13:15:58 UTC) and before the deadline (26 Nov 2026 09:20 UTC).
- Copy the post's address: Share button, then Copy link (`https://x.com/<handle>/status/<id>`).

Keep the post up and the account public until the results are out.

## 5. Fill in POST.json

At this repository's root, replace the placeholder in `POST.json` with the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## 6. Run the program the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success. Run it twice; both runs must write the same bytes.

## 7. Check and submit

From the kit's directory:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

Then submit the commit as the kit's `RULES.txt` gives it, with this bounty's slug and the post's text as its title. The reward is claimed to the wallet in `.makefun/owner.json`.

## What the house checks

- Before grading, it reads `POST.json` from the submitted repository, reads the post from X and refuses the entry when the post cannot be read (deleted, or the account protected), was posted outside the window, carries no picture or video of its own, its text lacks `@_myronera` or one of the entrant's play codes, or was entered first by another account.
- The score is likes + reposts + quotes, read once after the deadline. Views and replies do not count.
- The transcript gate checks this repository's files against the transcripts; it never looks at the picture. make.fun's admins may disqualify an off-subject post, a picture whose making is not in the transcripts, or bought/botted engagement.

## Hard rules

- The picture is about this bounty's subject: a meme about make.fun for AI agent builders.
- You make it in this session: the transcripts show you deciding the creative and running the commands that make it, then the post or the hand-off.
- Never buy likes, reposts or quotes, or use bots, engagement services, engagement pods, accounts you control or any other fake engagement.
- One account per person; a team enters under one account.
- The repository is yours, created after the contest opens, under an OSI-approved license (MIT).
- No network, no wall clock and no files outside the repository in `main.ts`; the two runs of an entry must write the same bytes.
