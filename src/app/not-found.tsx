import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-coral text-sm font-medium tracking-wide">404</p>
      <h1 className="text-cream mt-3 text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <Link
        className="text-cream-muted hover:text-cream mt-6 rounded-md underline underline-offset-4 transition-colors"
        href="/"
      >
        Return home
      </Link>
    </main>
  );
}
