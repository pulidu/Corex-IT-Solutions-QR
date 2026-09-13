export type PlatformIcon =
  | "website"
  | "facebook"
  | "linkedin"
  | "tiktok"
  | "whatsapp"
  | "email";

export interface SocialLinkConfig {
  id: PlatformIcon;
  label: string;
  description: string;
  href: string;
}

export const companyConfig = {
  name: "COREX IT Solutions",
  tagline: "Innovating Today, Empowering Tomorrow",
  description:
    "Innovative software, web and digital solutions designed to help businesses grow.",
  url: "https://www.corexitsolutions.com/",
  logoPath: "/logo.svg",
  location: "Colombo, Sri Lanka",
  contact: {
    phone: "(+94) 78 460 0136",
    phoneHref: "tel:+94784600136",
    whatsapp: "(+94) 78 460 0136",
    whatsappCountryCodeAndNumber: "94784600136",
    email: "info@corexitsolutions.com",
    emailHref: "mailto:info@corexitsolutions.com",
    address: "Colombo, Sri Lanka",
    mapsHref: "https://www.google.com/maps/search/?api=1&query=Colombo%2C+Sri+Lanka",
  },
} as const;

export const whatsappMessage =
  "Hello COREX IT Solutions! I would like to know more about your IT services.";

export const whatsappMessageEncoded =
  "Hello%20COREX%20IT%20Solutions!%20I%20would%20like%20to%20know%20more%20about%20your%20IT%20services.";

export const socialLinks = [
  {
    id: "website",
    label: "Official Website",
    description: "Explore our services",
    href: "https://www.corexitsolutions.com/",
  },
  {
    id: "facebook",
    label: "Facebook",
    description: "Follow our updates",
    href: "https://www.facebook.com/share/1c8hhBXbCh/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Connect with our network",
    href: "https://www.linkedin.com/company/corex-it-solutions-/",
  },
  {
    id: "tiktok",
    label: "TikTok",
    description: "Watch our content",
    href: "https://www.tiktok.com/@corex_it_official?_r=1&_t=ZS-99h1M7Gg2Tq",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Chat with our team",
    href: `https://wa.me/${companyConfig.contact.whatsappCountryCodeAndNumber}?text=${whatsappMessageEncoded}`,
  },
  {
    id: "email",
    label: "Email",
    description: "Send us a message",
    href: "mailto:info@corexitsolutions.com",
  },
] as const;