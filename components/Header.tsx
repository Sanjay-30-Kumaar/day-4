import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav container">
        <Link href="/" className="logo">
          Blog
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}