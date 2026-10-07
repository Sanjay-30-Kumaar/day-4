"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container page center">
      <p className="eyebrow">ERROR</p>

      <h1>Something went wrong</h1>

      <p>We could not load this page.</p>

      <button
        type="button"
        onClick={() => reset()}
        className="theme-toggle"
      >
        Try again
      </button>
    </section>
  );
}