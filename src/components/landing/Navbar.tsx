"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function switchLocale() {
    const next = locale === "sv" ? "en" : "sv";
    router.replace(pathname, { locale: next });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[family-name:var(--font-heading)]">M</span>
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-foreground">
              MarketFlow
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("learnMore")}
            </a>
            <button
              onClick={switchLocale}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              {locale === "sv" ? "EN" : "SV"}
            </button>
            <Link
              href="/login"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t("login")}
            </Link>
            <Link
              href="/login"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t("getStarted")}
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-border px-4 pb-4 space-y-3">
          <a href="#features" className="block text-muted-foreground text-sm py-2">
            {t("learnMore")}
          </a>
          <button onClick={switchLocale} className="flex items-center gap-1.5 text-sm text-muted-foreground py-2">
            <Globe className="w-4 h-4" />
            {locale === "sv" ? "English" : "Svenska"}
          </button>
          <Link href="/login" className="block text-sm font-medium py-2">
            {t("login")}
          </Link>
          <Link
            href="/login"
            className="block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium text-center"
          >
            {t("getStarted")}
          </Link>
        </div>
      )}
    </nav>
  );
}
