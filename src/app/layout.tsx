import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { companyConfig, socialLinks } from "@/config/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(companyConfig.url),
  title: {
    default: `${companyConfig.name} | ${companyConfig.tagline}`,
    template: `%s | ${companyConfig.name}`,
  },
  description: companyConfig.description,
  keywords: [
    "COREX IT Solutions",
    "IT company",
    "software development",
    "web development",
    "digital solutions",
    "business technology",
  ],
  authors: [{ name: companyConfig.name, url: companyConfig.url }],
  creator: companyConfig.name,
  applicationName: companyConfig.name,
  category: "Technology",
  icons: {
    icon: [{ url: companyConfig.logoPath, type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: companyConfig.name,
    title: `${companyConfig.name} | ${companyConfig.tagline}`,
    description: companyConfig.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${companyConfig.name} — ${companyConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyConfig.name} | ${companyConfig.tagline}`,
    description: companyConfig.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071426",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyConfig.name,
  url: companyConfig.url,
  description: companyConfig.description,
  email: companyConfig.contact.email,
  telephone: companyConfig.contact.phone,
  sameAs: socialLinks
    .filter((link) => link.href.startsWith("http"))
    .map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}