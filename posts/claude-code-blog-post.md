---
title: 'Using Claude Code on my website'
date: '2026-04-13'
backgroundImage: 'claude.jpg'
shortDescription: 'Installing Claude Code and pointing it at my website'
---

### What is Claude Code ###

Claude Code is Anthropic's CLI tool for their Claude AI model. Rather than chatting through a web interface, you install it as a command line tool and it runs in your terminal with direct access to your filesystem, so it can read your code, make edits, run commands and generally operate like a developer working in the same repo as you.

I wanted to see what it was actually like to use day to day, so I pointed it at this website.

### Installing it ###

Anthropic provide a shell script for Linux which downloads the binary directly:

`curl -fsSL https://claude.ai/install.sh | sh`

The binary isn't placed anywhere on your PATH by default, so I added it manually to `.bashrc`:

`export PATH="$HOME/.claude/local:$PATH"`

Then reload your shell:

`source ~/.bashrc`

Authenticate with your Anthropic account:

`claude`

It opens a browser window for login on the first run. After that you're in.

### Starting a session ###

Navigate to your project directory and run:

`claude`

You're dropped into an interactive session. Claude can see your files, read them, edit them, run your tests and generally poke around the codebase. You can give it tasks in plain English and it will get on with them, asking for confirmation before doing anything destructive.

The first thing I did was run `/init`, which tells it to analyse the project and write a `CLAUDE.md` file — a document that future Claude sessions will use to orient themselves in the repo without having to re-read everything from scratch.

### What it found ###

Straight away it spotted a broken import in `projectList.tsx` that was pointing at a `src/` directory that doesn't exist. I'd never noticed it because TypeScript build errors were silenced in `next.config.js`. It also flagged an API key sitting base64-encoded in the contact form component, which wasn't great.

Beyond the bugs, it had opinions. It pointed out I was loading six different Google Fonts across the site and that the projects section was hardcoded rather than driven by the markdown files I already use for project detail pages. Fair enough on all counts.

### What I got it to do ###

I had it fix the broken import, wire up the `@tailwindcss/typography` plugin that was installed but never actually registered (meaning the prose styles on blog posts were silently doing nothing), improve the home page layout and hide the projects section until I have something worth showing.

It also told me that two `ContactFormModal` components are mounted on every page — one from the desktop nav, one from inside the hamburger nav component. It's working, but it's untidy.

### The reveal ###

This blog post was written by Claude.

I asked it to write a post about the experience of installing and using Claude Code on this project, in the style of my other posts, with a reveal at the end. This is that post.

This isn't a novel concept — AI-assisted development is everywhere right now. But there's a difference between reading about it and actually putting it in your workflow to see where it helps and where it falls flat. Consider this testing the waters. The way we write code is changing, and I'd rather get a feel for that firsthand than have an opinion based on nothing.

It took about thirty seconds to produce a first draft after reading a couple of existing posts to match the tone. I'd say the experience is roughly what you'd get from a competent junior developer who reads the existing codebase before touching anything and asks sensible questions rather than just guessing.

Whether that's impressive or slightly unsettling probably depends on how you feel about the whole thing.
