# serversideprops issue

This repo is a minimal testcase of a issue related to serversiderprops in nextjs.

## Context

There are 2 monorepos in this repo - nextjs/ and blog/. Their deployment is configured using `now.json` - which is the old way of confguring vercel project. Internally now.json uses the `routes` key to configure the redirections.

## Issue

This is regarding the point here -> https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props#when-does-getserversideprops-run

> When you request this page on client-side page transitions through next/link or next/router, Next.js sends an API request to the server, which runs getServerSideProps
> getServerSideProps returns JSON which will be used to render the page. All this work will be handled automatically by Next.js, so you don’t need to do anything extra as long as you have getServerSideProps defined.

On this website, when you click on "Goto a level page" link, the JSON request that goes is resulting in 404. And therefore, the whole page is fetched and complete reload happens.

Steps to reproduce:

1. Goto homepage
2. Open devtools
3. Click on "Goto a level page"
4. Instead of client side redirection, complete page reloads
5. Check in devtools, the JSON request for serverside props is 404
