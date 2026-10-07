import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostsByTag,
} from "@/lib/posts";

type Props = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  const tags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  );

  return tags.map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { tag } = await params;

  return {
    title: `Posts tagged ${tag}`,
    description: `Blog posts tagged with ${tag}.`,
  };
}

export default async function TagPage({
  params,
}: Props) {
  const { tag } = await params;

  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="container page">
      <p className="eyebrow">TAG</p>

      <h1>Posts tagged #{tag}</h1>

      <p>
        {posts.length}{" "}
        {posts.length === 1 ? "post" : "posts"} found.
      </p>

      <div className="posts-grid">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="post-card"
          >
            <p className="post-date">
              {post.date}
            </p>

            <h2>
              <Link
                href={`/posts/${post.slug}`}
              >
                {post.title}
              </Link>
            </h2>

            <p>{post.excerpt}</p>

            <div className="tags">
              {post.tags.map((postTag) => (
                <Link
                  key={postTag}
                  href={`/tags/${postTag}`}
                  className="tag"
                >
                  #{postTag}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}