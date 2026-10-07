import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container page center">
      <p className="eyebrow">404</p>

      <h1>Page Not Found</h1>

      <p>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link href="/">Return to Home</Link>
    </section>
  );
}