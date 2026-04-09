"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Menu, X, Globe, Users, FolderKanban, BarChart3, Clock, Zap, PieChart, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";

const featureItems = [
  { key: "contacts", icon: Users, href: "#features" },
  { key: "projects", icon: FolderKanban, href: "#features" },
  { key: "googleAds", icon: BarChart3, href: "#features" },
  { key: "timeTracking", icon: Clock, href: "#features" },
  { key: "automations", icon: Zap, href: "#automations" },
  { key: "analytics", icon: PieChart, href: "#features" },
];

export default function Navbar() {
  const t = useTranslations("common");
  const ft = useTranslations("landing.features");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
            <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(124,95,255,0.3)]">
              <span className="text-white font-bold text-[15px] font-[family-name:var(--font-heading)]">
                M
              </span>
            </div>
            <span className="text-[17px] font-semibold font-[family-name:var(--font-heading)] text-foreground tracking-tight">
              MarketFlow
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {/* Features mega dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setFeaturesOpen(!featuresOpen)}
                className="px-4 py-2 text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full flex items-center gap-1"
              >
                {locale === "sv" ? "Funktioner" : "Features"}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${featuresOpen ? "rotate-180" : ""}`} />
              </button>

              {featuresOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] glass border border-white/[0.08] rounded-[16px] p-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                  <div className="grid grid-cols-2 gap-1">
                    {featureItems.map((item) => (
                      <a
                        key={item.key}
                        href={item.href}
                        onClick={() => setFeaturesOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-[12px] hover:bg-white/[0.06] transition-colors duration-200 group/item"
                      >
                        <div className="w-9 h-9 rounded-[10px] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover/item:bg-primary/15 group-hover/item:border-primary/25 transition-all duration-200">
                          <item.icon className="w-4 h-4 text-white/30 group-hover/item:text-primary transition-colors duration-200" />
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-foreground/90">{ft(`${item.key}.title`)}</p>
                          <p className="text-[11px] text-white/30 leading-[1.5] mt-0.5 line-clamp-2">{ft(`${item.key}.description`)}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <a href="#integrations" onClick={() => setFeaturesOpen(false)} className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
                      {locale === "sv" ? "Alla integrationer →" : "All integrations →"}
                    </a>
                    <a href="#automations" onClick={() => setFeaturesOpen(false)} className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
                      {locale === "sv" ? "Automationer →" : "Automations →"}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#integrations" className="px-4 py-2 text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full">
              {locale === "sv" ? "Integrationer" : "Integrations"}
            </a>
            <a href="#pricing" className="px-4 py-2 text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full">
              {locale === "sv" ? "Priser" : "Pricing"}
            </a>

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
              className="bg-primary text-white px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-primary/90 transition-all duration-200 shadow-[0_0_20px_rgba(124,95,255,0.25)]"
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
            <p className="px-3 pt-3 pb-1 text-[10px] text-white/20 uppercase tracking-wider font-semibold">
              {locale === "sv" ? "Funktioner" : "Features"}
            </p>
            {featureItems.map((item) => (
              <a key={item.key} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors">
                <item.icon className="w-4 h-4 text-white/25" />
                <span className="text-[14px] text-foreground/70">{ft(`${item.key}.title`)}</span>
              </a>
            ))}
            <div className="h-px bg-white/[0.06] my-2" />
            <a href="#integrations" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-[14px] text-foreground/70 rounded-xl hover:bg-white/[0.05]">
              {locale === "sv" ? "Integrationer" : "Integrations"}
            </a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-[14px] text-foreground/70 rounded-xl hover:bg-white/[0.05]">
              {locale === "sv" ? "Priser" : "Pricing"}
            </a>
            <button onClick={switchLocale} className="flex items-center gap-2 w-full px-3 py-2.5 text-[14px] text-muted-foreground rounded-xl hover:bg-white/[0.05] transition-colors">
              <Globe className="w-4 h-4" />
              {locale === "sv" ? "English" : "Svenska"}
            </button>
          </div>
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <a
              href="https://majditounsi-spec.github.io/crm-ads/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary text-white py-3 rounded-full text-[14px] font-medium shadow-[0_0_24px_rgba(124,95,255,0.3)]"
            >
              {t("getStarted")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
