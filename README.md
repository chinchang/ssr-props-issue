# serversideprops issue

This repo is a minimal testcase of a issue related to serversiderprops in nextjs.

## Context

There are 2 monorepos in this repo - nextjs/ and blog/. Their deployment is configured using `now.json` - which is the old way of confguring vercel project. Internally now.json uses the `routes` key to configure the redirections.
