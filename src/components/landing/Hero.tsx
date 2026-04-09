"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const t = useTranslations("landing.hero");

  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient orbs — silver/graphite */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-[120px]" />
      <div className="absolute top-60 -left-40 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px]" />
      <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
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

          {/* Value props */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "Kundhantering",
              "Projektledning",
              "Säljpipeline",
              "Google & Meta Ads",
              "Tidloggning",
              "Fakturering",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://majditounsi-spec.github.io/crm-ads/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-primary text-white px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center gap-2.5 shadow-[0_0_30px_rgba(124,95,255,0.35)]"
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-medium text-white/50 border border-white/[0.08] hover:text-white/70 hover:border-white/15 transition-all duration-200"
            >
              <Play className="w-4 h-4 fill-current" />
              {t("ctaSecondary")}
            </motion.a>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-24 relative float"
        >
          <div className="glow-lg rounded-[20px] overflow-hidden bg-[hsl(240,6%,6%)] border border-white/[0.08]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-[6px]">
                <div className="w-[10px] h-[10px] rounded-full bg-white/10" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/10" />
                <div className="w-[10px] h-[10px] rounded-full bg-white/10" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/[0.05] border border-white/[0.06] rounded-lg px-4 py-1 text-[11px] text-white/30 font-medium">
                  app.marketflow.se/dashboard
                </div>
              </div>
              <div className="w-[52px]" />
            </div>

            {/* App layout */}
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden sm:flex w-[200px] bg-[hsl(240,10%,4%)] flex-col p-4 gap-1 shrink-0 border-r border-white/[0.04]">
                <div className="flex items-center gap-2 px-3 py-2 mb-4">
                  <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_12px_rgba(124,95,255,0.3)]">
                    <span className="text-white font-bold text-[10px]">M</span>
                  </div>
                  <span className="text-[13px] font-semibold text-white/90">MarketFlow</span>
                </div>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Kontakter", active: false },
                  { label: "Projekt", active: false },
                  { label: "Google ADS", active: false },
                  { label: "Tidloggning", active: false },
                  { label: "Automationer", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`px-3 py-2 rounded-lg text-[12px] font-medium transition-colors ${
                      item.active
                        ? "bg-primary/20 text-primary shadow-[inset_0_0_12px_rgba(124,95,255,0.1)]"
                        : "text-white/25"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 sm:p-6 bg-[hsl(240,6%,5%)] min-w-0">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-[15px] font-semibold text-white/90 font-[family-name:var(--font-heading)]">Dashboard</h3>
                    <p className="text-[11px] text-white/25">April 2026</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5 text-[10px] text-white/20">
                      Sök kunder...
                    </div>
                    <div className="w-7 h-7 bg-white/[0.08] border border-white/[0.06] rounded-full flex items-center justify-center text-[10px] font-bold text-white/50">MT</div>
                  </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Aktiva kunder", value: "47", delta: "+3 denna mån" },
                    { label: "Pågående projekt", value: "12", delta: "4 i review" },
                    { label: "Mån. intäkt", value: "284k", delta: "+18% vs förra mån" },
                    { label: "Ads spend", value: "127k", delta: "89% av budget" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-3.5 shimmer">
                      <p className="text-[10px] text-white/30 font-medium">{stat.label}</p>
                      <p className="text-[20px] font-bold font-[family-name:var(--font-heading)] text-white/90 mt-0.5 leading-tight">{stat.value}</p>
                      <p className="text-[10px] mt-1 font-medium text-emerald-400/60">{stat.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Two column */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  {/* Pipeline */}
                  <div className="lg:col-span-3 bg-white/[0.02] rounded-xl border border-white/[0.06] p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[12px] font-semibold text-white/80">Säljpipeline</span>
                      <span className="text-[10px] text-white/20">Q2 2026</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { stage: "Lead", count: 23, value: "460k", width: "100%" },
                        { stage: "Kontaktad", count: 18, value: "380k", width: "78%" },
                        { stage: "Offert", count: 11, value: "290k", width: "58%" },
                        { stage: "Förhandling", count: 6, value: "185k", width: "35%" },
                        { stage: "Vunnen", count: 4, value: "142k", width: "22%" },
                      ].map((stage) => (
                        <div key={stage.stage} className="flex items-center gap-3">
                          <span className="text-[10px] text-white/30 w-[70px] shrink-0 text-right">{stage.stage}</span>
                          <div className="flex-1 h-6 bg-white/[0.02] rounded-md overflow-hidden relative">
                            <div className="h-full bg-white/[0.06] rounded-md" style={{ width: stage.width }} />
                            <div className="absolute inset-0 flex items-center justify-between px-2">
                              <span className="text-[9px] font-medium text-white/30">{stage.count} deals</span>
                              <span className="text-[9px] font-semibold text-white/50">{stage.value}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] text-white/20">Win rate</span>
                      <span className="text-[11px] font-semibold text-white/70">17.4%</span>
                    </div>
                  </div>

                  {/* Top clients */}
                  <div className="lg:col-span-2 bg-white/[0.02] rounded-xl border border-white/[0.06] p-4">
                    <span className="text-[12px] font-semibold text-white/80">Topp kunder</span>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { name: "TechStart AB", service: "SEO + ADS", revenue: "45k", trend: "+12%" },
                        { name: "Nordic Food", service: "WEBB", revenue: "38k", trend: "+8%" },
                        { name: "HealthPlus", service: "SEO + WEBB", revenue: "32k", trend: "+22%" },
                        { name: "GreenEnergy", service: "META", revenue: "28k", trend: "+5%" },
                        { name: "FashionBrand", service: "Google ADS", revenue: "24k", trend: "-3%" },
                      ].map((client) => (
                        <div key={client.name} className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] font-bold text-white/30 shrink-0">
                            {client.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-medium text-white/70 truncate">{client.name}</p>
                            <p className="text-[9px] text-white/20">{client.service}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[11px] font-semibold text-white/70">{client.revenue}</p>
                            <p className={`text-[9px] font-medium ${client.trend.startsWith("+") ? "text-emerald-400/60" : "text-red-400/60"}`}>{client.trend}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-4">
                    <span className="text-[12px] font-semibold text-white/80">Google Ads</span>
                    <div className="mt-3 space-y-2">
                      {[
                        { label: "Impressions", value: "342k" },
                        { label: "Klick", value: "8.4k" },
                        { label: "CTR", value: "2.46%" },
                        { label: "Konverteringar", value: "312" },
                        { label: "CPA", value: "407 kr" },
                      ].map((m) => (
                        <div key={m.label} className="flex items-center justify-between">
                          <span className="text-[10px] text-white/25">{m.label}</span>
                          <span className="text-[11px] font-semibold text-white/60">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-4">
                    <span className="text-[12px] font-semibold text-white/80">Team</span>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { name: "Anna S.", hours: "142h", pct: 100 },
                        { name: "Erik L.", hours: "128h", pct: 90 },
                        { name: "Sara K.", hours: "115h", pct: 81 },
                      ].map((m) => (
                        <div key={m.name} className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[9px] font-bold text-white/40">
                            {m.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex-1">
                            <p className="text-[11px] font-medium text-white/60">{m.name}</p>
                            <div className="w-full h-1 bg-white/[0.04] rounded-full mt-1">
                              <div className="h-full bg-white/[0.12] rounded-full" style={{ width: `${m.pct}%` }} />
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold text-white/40">{m.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/[0.02] rounded-xl border border-white/[0.06] p-4">
                    <span className="text-[12px] font-semibold text-white/80">Aktivitet</span>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { text: "Ny kund: StartupXYZ", time: "2 min" },
                        { text: "Offert → HealthPlus", time: "1h" },
                        { text: "ADS-budget uppdaterad", time: "3h" },
                        { text: "SEO TechStart → review", time: "5h" },
                        { text: "Faktura #047 betald", time: "1d" },
                      ].map((a) => (
                        <div key={a.text} className="flex items-start gap-2.5">
                          <div className="w-1 h-1 rounded-full bg-white/20 mt-[6px] shrink-0" />
                          <p className="text-[10px] text-white/35 leading-[1.4] flex-1 truncate">{a.text}</p>
                          <span className="text-[9px] text-white/15 shrink-0">{a.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow under card */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-white/[0.03] blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
