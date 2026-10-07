import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the Day 4 Markdown blog built with Next.js.",
};

export default function AboutPage() {
  return (
    <section className="container page">
      <div className="about">
        <Image
          src="/blog-placeholder.svg"
          alt="Blog illustration"
          width={180}
          height={180}
          priority
        />

        <div>
          <p className="eyebrow">ABOUT</p>

          <h1>About This Blog</h1>

          <p>
            This blog is built with Next.js 15 App Router,
            TypeScript, and Markdown.
          </p>

          <p>
            Blog posts are stored as Markdown files with
            frontmatter and parsed on the server.
          </p>

          <p>
            The application demonstrates file-based routing,
            dynamic routes, Server Components, Client
            Components, layouts, metadata, and dark mode.
          </p>
        </div>
      </div>
    </section>
  );
}