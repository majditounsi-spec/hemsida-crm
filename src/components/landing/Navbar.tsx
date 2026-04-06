"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function switchLocale() {
    const next = locale === "sv" ? "en" : "sv";
    router.replace(pathname, { locale: next });
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-b from-white/15 to-white/5 border border-white/10 rounded-[10px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-[15px] font-[family-name:var(--font-heading)]">
                M
              </span>
            </div>
            <span className="text-[17px] font-semibold font-[family-name:var(--font-heading)] text-foreground tracking-tight">
              MarketFlow
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {[
              { href: "#features", label: locale === "sv" ? "Funktioner" : "Features" },
              { href: "#integrations", label: locale === "sv" ? "Integrationer" : "Integrations" },
              { href: "#pricing", label: locale === "sv" ? "Priser" : "Pricing" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={switchLocale}
              className="px-3 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full flex items-center gap-1.5"
            >
              <Globe className="w-[14px] h-[14px]" />
              {locale === "sv" ? "EN" : "SV"}
            </button>

            <div className="w-px h-5 bg-border mx-2" />

            <a
              href="https://majditounsi-spec.github.io/crm-ads/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {t("login")}
            </a>
            <a
              href="https://majditounsi-spec.github.io/crm-ads/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-white/15 to-white/5 text-white/90 border border-white/10 px-5 py-2.5 rounded-full text-[13px] font-medium hover:from-white/20 hover:to-white/10 transition-all duration-200"
            >
              {t("getStarted")}
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/[0.06] px-6 pb-6 pt-2">
          <div className="space-y-1">
            {["features", "integrations", "pricing"].map((section) => (
              <a key={section} href={`#${section}`} className="block px-3 py-2.5 text-[15px] text-foreground/70 rounded-xl hover:bg-white/[0.05] transition-colors capitalize">
                {section}
              </a>
            ))}
            <button onClick={switchLocale} className="flex items-center gap-2 w-full px-3 py-2.5 text-[15px] text-muted-foreground rounded-xl hover:bg-white/[0.05] transition-colors">
              <Globe className="w-4 h-4" />
              {locale === "sv" ? "English" : "Svenska"}
            </button>
          </div>
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <a
              href="https://majditounsi-spec.github.io/crm-ads/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary text-white py-3 rounded-full text-[14px] font-medium shadow-[0_0_20px_rgba(124,95,255,0.25)]"
            >
              {t("getStarted")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
