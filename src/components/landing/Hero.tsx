"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const t = useTranslations("landing.hero");

  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-primary/[0.07] via-primary/[0.03] to-transparent rounded-full blur-3xl" />
        <div className="absolute top-40 -left-20 w-[400px] h-[400px] bg-purple-300/10 rounded-full blur-3xl" />
        <div className="absolute top-60 -right-20 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/[0.06] border border-primary/[0.08] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[13px] font-medium text-primary/80">
              {t("ctaSecondary")}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold font-[family-name:var(--font-heading)] text-foreground max-w-4xl mx-auto">
            {t("title")}
            <br />
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h1>

          {/* Subheading */}
          <p className="mt-7 text-[18px] sm:text-[20px] leading-[1.6] text-muted-foreground max-w-[640px] mx-auto">
            {t("description")}
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://majditounsi-spec.github.io/crm-ads/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-foreground/90 transition-colors duration-200 flex items-center gap-2.5 shadow-[0_2px_16px_rgba(0,0,0,0.15)]"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-medium text-foreground border border-border hover:bg-secondary transition-colors duration-200"
            >
              <Play className="w-4 h-4 fill-current" />
              {t("ctaSecondary")}
            </motion.a>
          </div>
        </motion.div>

        {/* Dashboard Preview — floating Apple-style card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-24 relative"
        >
          <div className="glow-lg rounded-[20px] overflow-hidden bg-card border border-border/60">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-border/60 bg-secondary/40">
              <div className="flex gap-[6px]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/80 border border-border/60 rounded-lg px-4 py-1 text-[11px] text-muted-foreground font-medium">
                  app.marketflow.se
                </div>
              </div>
              <div className="w-[52px]" />
            </div>

            {/* Dashboard content */}
            <div className="p-6 sm:p-8 bg-gradient-to-b from-secondary/30 to-background">
              {/* Stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Kunder", value: "47", delta: "+3", color: "from-blue-500/10 to-blue-500/5" },
                  { label: "Projekt", value: "12", delta: "+2", color: "from-emerald-500/10 to-emerald-500/5" },
                  { label: "Budget", value: "890k", delta: "+15%", color: "from-violet-500/10 to-violet-500/5" },
                  { label: "Timmar", value: "6.5h", delta: "idag", color: "from-amber-500/10 to-amber-500/5" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`bg-gradient-to-b ${stat.color} rounded-2xl p-4 border border-white/60`}
                  >
                    <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-[22px] font-bold font-[family-name:var(--font-heading)] text-foreground">
                        {stat.value}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-600">
                        {stat.delta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-background/60 rounded-2xl border border-border/40 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[13px] font-semibold text-foreground">Revenue Overview</span>
                  <div className="flex gap-1">
                    {["1W", "1M", "3M", "1Y"].map((p, i) => (
                      <span
                        key={p}
                        className={`text-[11px] px-2.5 py-1 rounded-md font-medium ${
                          i === 2
                            ? "bg-foreground text-background"
                            : "text-muted-foreground"
                        }`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-32 flex items-end gap-[3px]">
                  {[35, 50, 42, 65, 55, 78, 62, 85, 70, 92, 80, 95, 75, 88, 82, 96, 78, 90, 85, 93, 88, 97, 91, 99].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-[3px] bg-gradient-to-t from-primary/40 to-primary/20 transition-all duration-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ambient glow under card */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/8 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
