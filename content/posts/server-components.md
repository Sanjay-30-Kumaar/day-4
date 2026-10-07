---
title: "Server Components vs Client Components"
date: "2026-10-06"
excerpt: "Understanding when a Next.js component should run on the server or browser."
tags:
  - nextjs
  - react
  - server-components
---

Next.js App Router components are Server Components by default.

Server Components are useful for fetching data and rendering content on the server.

Client Components are required when we need browser APIs, state, effects, or event handlers.

The goal should be to keep as much of the application server-rendered as possible.