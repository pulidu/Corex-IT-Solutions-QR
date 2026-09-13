import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-electric/15 blur-[120px]"
      />
      <div className="animate-fade-in-up relative flex flex-col items-center text-center">
        <p className="font-display text-8xl font-bold tracking-tight text-transparent sm:text-9xl bg-gradient-to-b from-electric to-electric-dark bg-clip-text">
          404
        </p>
        <h1 className="font-display mt-4 text-2xl font-semibold text-white sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-silver sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-electric/40 bg-electric/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-electric hover:bg-electric/20 hover:shadow-[0_0_28px_rgba(22,119,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-[0.97]"
        >
          <Compass aria-hidden className="size-4" />
          Back to Home
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </main>
  );
}