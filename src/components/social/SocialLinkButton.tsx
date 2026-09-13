import { Globe, Mail } from "lucide-react";
import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa";
import type { PlatformIcon, SocialLinkConfig } from "@/config/company";

type AppIcon = IconType | ComponentType<{ className?: string }>;

const iconMap: Record<PlatformIcon, AppIcon> = {
  website: Globe,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
  email: Mail,
};

export function SocialLinkButton({ link }: { link: SocialLinkConfig }) {
  const Icon = iconMap[link.id];
  const isExternal = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`${link.label} — ${link.description}`}
      className="group relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-6 text-center backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-electric/60 hover:bg-electric/[0.08] hover:shadow-[0_12px_44px_rgba(22,119,255,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:translate-y-0 active:scale-[0.96] sm:py-7"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-3/4 top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-all duration-700 ease-out group-hover:left-full"
      />
      <span className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-white/[0.11] to-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:border-electric/60 group-hover:from-electric/25 group-hover:to-electric/5 group-hover:shadow-[0_0_22px_rgba(22,119,255,0.4)] sm:size-12">
        <Icon
          aria-hidden
          className="size-4.5 text-silver transition-all duration-300 group-hover:scale-110 group-hover:text-electric sm:size-5"
        />
      </span>
      <span className="text-sm font-semibold leading-tight text-white sm:text-[15px]">
        {link.label}
      </span>
      <span className="line-clamp-1 px-1 text-[11px] font-normal leading-tight text-silver/55 sm:text-xs">
        {link.description}
      </span>
    </a>
  );
}