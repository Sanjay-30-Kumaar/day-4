---
title: "Understanding the Next.js App Router"
date: "2026-10-07"
excerpt: "A practical introduction to file-based routing and layouts in Next.js."
tags:
  - nextjs
  - react
---

The Next.js App Router uses the filesystem to define application routes.

A `page.tsx` file represents a route, while a `layout.tsx` file provides shared UI around child routes.

This makes it easy to build applications with nested layouts and reusable navigation.

## File-based routing

For example:

- `app/page.tsx` creates `/`
- `app/about/page.tsx` creates `/about`
- `app/posts/[slug]/page.tsx` creates dynamic post routes.

## Server Components

Next.js App Router components are Server Components by default.

This allows us to read Markdown files and render their content on the server without sending unnecessary JavaScript to the browser.