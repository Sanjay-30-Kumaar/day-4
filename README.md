# Day 4 — Next.js Markdown Blog

A Markdown-based blog built with **Next.js 15 App Router**, **TypeScript**, and **React**.

Blog posts are stored as Markdown files with frontmatter and are parsed on the server using `gray-matter` and `remark`.

## Features

- Next.js 15 App Router
- File-based routing
- Server Components
- Client Component for dark mode
- Persistent dark mode with no flash on page load
- Markdown blog posts
- Frontmatter metadata
- Dynamic post routes
- Dynamic tag routes
- Shared Header and Footer
- Nested posts layout
- Loading UI
- Error UI
- Custom 404 page
- Page-specific metadata
- `next/image`
- `next/font`
- Static generation with `generateStaticParams`
- Responsive design

## Routes

| Route | Description |
|---|---|
| `/` | Home page with latest blog posts |
| `/about` | About the blog |
| `/posts/nextjs-app-router` | Next.js App Router post |
| `/posts/server-components` | Server vs Client Components post |
| `/posts/markdown-blog` | Markdown blog post |
| `/tags/nextjs` | Posts tagged with Next.js |
| `/tags/react` | Posts tagged with React |
| `/tags/server-components` | Posts tagged with Server Components |
| `/tags/markdown` | Posts tagged with Markdown |
| `/posts/does-not-exist` | Custom 404 page |

## Project Structure

```text
day-4/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── posts/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── loading.tsx
│   ├── tags/
│   │   └── [tag]/
│   │       └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ThemeToggle.tsx
│
├── content/
│   └── posts/
│       ├── markdown-blog.md
│       ├── nextjs-app-router.md
│       └── server-components.md
│
├── lib/
│   └── posts.ts
│
├── public/
│   └── blog-placeholder.svg
│
├── global.d.ts
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

## Markdown Post Format

Each post is stored in `content/posts/` as a Markdown file.

Example:

```md
---
title: "Building a Markdown Blog"
date: "2026-10-05"
excerpt: "How Markdown files can become dynamic pages using Next.js."
tags:
  - nextjs
  - markdown
---

# Building a Markdown Blog

Post content goes here.
```

## Getting Started

Install the dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Production Build

Run TypeScript checking:

```bash
pnpm exec tsc --noEmit
```

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Technologies

- Next.js 15
- React
- TypeScript
- pnpm
- Markdown
- gray-matter
- remark
- remark-html
- CSS
- Vercel

## Dark Mode

The blog includes a persistent dark-mode toggle.

The selected theme is stored in `localStorage`, and a small initialization script applies the saved theme before the page is displayed to prevent a light/dark flash during page load.

## Rendering

The blog uses **Server Components by default**.

The only application components using `"use client"` are components that require browser-side behavior:

- `components/ThemeToggle.tsx`
- `app/error.tsx`

Blog posts are read from the filesystem and rendered on the server.

## Validation

The project has been validated with:

```bash
pnpm exec tsc --noEmit
```

and:

```bash
pnpm build
```

The production build generates the blog routes successfully.

## Deployment

The project is intended to be deployed on Vercel.

After deployment, verify:

- Home page
- About page
- All blog posts
- Tag pages
- 404 page
- Dark-mode persistence
- Server-rendered HTML
- Responsive layout