import { BackgroundFX } from "@/components/BackgroundFX";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/Footer";
import { Profile } from "@/components/Profile";
import { SocialLinks } from "@/components/social/SocialLinks";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundFX />
      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-5 py-12 sm:gap-12 sm:px-8 sm:py-16">
          <div className="animate-fade-in-up">
            <Profile />
          </div>
          <SocialLinks />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}