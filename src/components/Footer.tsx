import Image from "next/image";
import { companyConfig } from "@/config/company";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 px-5 pb-8 pt-6">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <Image
          src={companyConfig.logoPath}
          alt=""
          aria-hidden
          width={28}
          height={28}
          unoptimized
          className="opacity-70"
        />
        <p className="text-xs leading-relaxed text-silver/60 sm:text-sm">
          &copy; 2026 {companyConfig.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}