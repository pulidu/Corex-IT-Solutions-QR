import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import type { ComponentType } from "react";
import { companyConfig } from "@/config/company";

interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

const contactItems: ContactItem[] = [
  {
    id: "phone",
    label: "Phone",
    value: companyConfig.contact.phone,
    href: companyConfig.contact.phoneHref,
    icon: Phone,
  },
  {
    id: "email",
    label: "Email",
    value: companyConfig.contact.email,
    href: companyConfig.contact.emailHref,
    icon: Mail,
  },
  {
    id: "website",
    label: "Website",
    value: companyConfig.url.replace(/^https?:\/\//, ""),
    href: companyConfig.url,
    icon: Globe,
  },
  {
    id: "location",
    label: "Location",
    value: companyConfig.contact.address,
    href: companyConfig.contact.mapsHref,
    icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="animate-fade-in-up w-full"
      style={{ animationDelay: "420ms" }}
    >
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:p-7">
        <h2
          id="contact-title"
          className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl"
        >
          Get In Touch
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-silver/70 sm:text-[15px]">
          We&apos;d love to hear from you. Reach out any time.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const isExternal = item.href.startsWith("http");
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={`${item.label}: ${item.value}`}
                  className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-electric/60 hover:bg-electric/10 hover:shadow-[0_0_24px_rgba(22,119,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-[0.98]"
                >
                  <span
                    aria-hidden
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-electric/12 text-electric transition-all duration-300 group-hover:bg-electric group-hover:text-white"
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-silver/60">
                      {item.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-white sm:text-[15px]">
                      {item.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={`${companyConfig.contact.emailHref}?subject=Enquiry%20from%20your%20landing%20page`}
          className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-electric to-electric-dark px-6 py-4 text-base font-semibold text-white shadow-[0_0_36px_rgba(22,119,255,0.35)] transition-all duration-300 hover:shadow-[0_0_52px_rgba(22,119,255,0.55)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-navy active:scale-[0.98] sm:text-lg"
        >
          Contact Us
          <ArrowRight
            aria-hidden
            className="size-5 transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </a>
      </div>
    </section>
  );
}