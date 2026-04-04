"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("landing.footer");

  return (
    <footer className="bg-sidebar text-sidebar-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)] text-white">
                {t("brand")}
              </span>
            </div>
            <p className="text-sm text-sidebar-foreground/70 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("product")}</h4>
            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("company")}</h4>
            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
              <li><a href="#" className="hover:text-white transition-colors">{t("about")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("blog")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("careers")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t("legal")}</h4>
            <ul className="space-y-2 text-sm text-sidebar-foreground/70">
              <li><a href="#" className="hover:text-white transition-colors">{t("privacy")}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t("terms")}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-sidebar-foreground/50">
          &copy; {new Date().getFullYear()} MarketFlow. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
