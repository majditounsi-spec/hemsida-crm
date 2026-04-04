"use client";

import { useTranslations } from "next-intl";
// Link to external CRM app
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, FolderKanban } from "lucide-react";

export default function Hero() {
  const t = useTranslations("landing.hero");

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-foreground">
            {t("title")}
            <br />
            <span className="text-primary">{t("titleHighlight")}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://majditounsi-spec.github.io/crm-ads/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="text-foreground px-8 py-3.5 rounded-xl text-base font-semibold border border-border hover:bg-secondary transition-colors"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 relative"
        >
          <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground">MarketFlow Dashboard</span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Users, label: "Kunder", value: "47", color: "text-blue-500" },
                  { icon: FolderKanban, label: "Projekt", value: "12", color: "text-emerald-500" },
                  { icon: BarChart3, label: "Budget", value: "890k", color: "text-purple-500" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-muted/50 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-background ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold font-[family-name:var(--font-heading)]">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-40 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl flex items-end px-4 pb-4 gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/30 rounded-t-md"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
