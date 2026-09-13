import { socialLinks } from "@/config/company";
import { SocialLinkButton } from "./SocialLinkButton";

export function SocialLinks() {
  const visibleLinks = socialLinks.filter((link) => link.href.trim() !== "");

  if (visibleLinks.length === 0) {
    return null;
  }

  return (
    <section aria-label="Social media and contact buttons" className="w-full">
      <h2 className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-silver/75 sm:mb-7">
        <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
        Connect With Us
        <span aria-hidden className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {visibleLinks.map((link, index) => (
          <div
            key={link.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${180 + index * 70}ms` }}
          >
            <SocialLinkButton link={link} />
          </div>
        ))}
      </div>
    </section>
  );
}