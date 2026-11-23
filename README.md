# Agent Builds a Game — FLIP RUN

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/iwan0494/agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/iwan0494/agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from **one prompt** — and I watched it happen.
This repo holds the video's entry for the
[make.fun bounty "The agent builds a game from one prompt"](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The one prompt

> Build me a tiny browser game: a one-button gravity-flip runner — a square
> that auto-runs, Space flips gravity, dodge the spikes, score counts distance.
> One HTML file, no libraries.

## The game: FLIP RUN

A neon square auto-runs across the screen. Press **Space** (or click / tap) to
flip gravity between the floor and the ceiling. Spike triangles wait on both
surfaces — dodge them. Your score is the distance you survive, and the speed
keeps rising.

Play it: open [`game/index.html`](game/index.html) in any browser. One file,
no network, no libraries, keyboard and mouse/touch.

## The video

The entry video shows the prompt, the agent working, and the finished game
running — then ends with make.fun's referral end card. It was posted as a
native video on X from [@iwan_ridwan94](https://x.com/iwan_ridwan94); the post
is named in [`POST.json`](POST.json).

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the X post's address. The house reads the post itself and
scores it on views + 10 × (likes + reposts + quotes + replies).

## Links

- Bounty: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
- make.fun: https://make.fun
- My referral link: https://make.fun/r/sgfqk6h8
