import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="container page">
      <section className="hero">
        <p className="eyebrow">NEXT.JS 15</p>

        <h1>My Markdown Blog</h1>

        <p>
          Notes about web development, React, Next.js,
          and software engineering.
        </p>
      </section>

      <section>
        <h2>Latest Posts</h2>

        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              <p className="post-date">{post.date}</p>

              <h3>
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              <p>{post.excerpt}</p>

              <div className="tags">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="tag"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}