import Link from "next/link";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="posts-layout">
      <div className="container posts-layout-header">
        <Link href="/" className="posts-back-link">
          ← Back to Home
        </Link>

        <span className="posts-section-label">BLOG POSTS</span>
      </div>

      {children}
    </section>
  );
}