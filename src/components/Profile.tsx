import Image from "next/image";
import { companyConfig } from "@/config/company";

export function Profile() {
  return (
    <section aria-labelledby="profile-title" className="flex flex-col items-center pt-3 text-center">
      <div className="relative mb-9 flex size-32 items-center justify-center sm:size-40">
        <div
          aria-hidden
          className="animate-glow-breathe absolute -inset-5 rounded-full bg-electric/30 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-spin-slow absolute -inset-2.5 rounded-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(22,119,255,0.75)_28%,rgba(56,189,248,0.45)_50%,rgba(22,119,255,0.75)_72%,transparent_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 rounded-full border border-white/15 bg-gradient-to-b from-[#152c55] via-[#0e2140] to-[#081530] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_45px_rgba(22,119,255,0.3),0_18px_50px_rgba(0,0,0,0.5)]"
        />
        <div
          aria-hidden
          className="absolute inset-1 rounded-full border border-white/[0.07]"
        />
        <Image
          src={companyConfig.logoPath}
          alt={`${companyConfig.name} logo`}
          width={180}
          height={180}
          priority
          unoptimized
          title={companyConfig.name}
          className="relative size-[62%] object-contain drop-shadow-[0_8px_28px_rgba(22,119,255,0.5)]"
        />
      </div>

      <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-silver/80 backdrop-blur-sm sm:text-[11px]">
        <span aria-hidden className="relative flex size-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-electric" />
        </span>
        {companyConfig.location}
      </p>

      <h1
        id="profile-title"
        className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl"
      >
        {companyConfig.name}
      </h1>
      <p className="font-display mt-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-electric sm:text-sm">
        {companyConfig.tagline}
      </p>
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-silver sm:text-lg">
        {companyConfig.description}
      </p>

      <div aria-hidden className="mt-9 flex items-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-electric/70" />
        <span className="size-1.5 rounded-full bg-electric shadow-[0_0_12px_rgba(22,119,255,0.9)]" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-electric/70" />
      </div>
    </section>
  );
}