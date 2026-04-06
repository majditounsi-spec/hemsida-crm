"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("landing.footer");

  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary rounded-[9px] flex items-center justify-center shadow-[0_0_16px_rgba(124,95,255,0.25)]">
                <span className="text-white font-bold text-[13px] font-[family-name:var(--font-heading)]">M</span>
              </div>
              <span className="text-[16px] font-semibold font-[family-name:var(--font-heading)] text-foreground/90 tracking-tight">
                {t("brand")}
              </span>
            </div>
            <p className="text-[13px] text-white/25 leading-[1.6] max-w-[220px]">
              {t("tagline")}
            </p>
          </div>

          {[
            {
              title: t("product"),
              links: [
                { label: "Features", href: "#features" },
                { label: "Integrations", href: "#integrations" },
                { label: "Pricing", href: "#pricing" },
                { label: "CRM App", href: "https://majditounsi-spec.github.io/crm-ads/" },
              ],
            },
            {
              title: t("company"),
              links: [
                { label: t("about"), href: "#" },
                { label: t("blog"), href: "#" },
                { label: t("careers"), href: "#" },
              ],
            },
            {
              title: t("legal"),
              links: [
                { label: t("privacy"), href: "#" },
                { label: t("terms"), href: "#" },
              ],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-[12px] font-semibold text-white/30 uppercase tracking-[0.1em] mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-white/20 hover:text-white/50 transition-colors duration-200"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/15">
            &copy; {new Date().getFullYear()} MarketFlow. {t("rights")}
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a key={social} href="#" className="text-[12px] text-white/15 hover:text-white/30 transition-colors duration-200">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
