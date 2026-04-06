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

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold font-[family-name:var(--font-heading)] text-foreground max-w-4xl mx-auto">
            {t("title")}
            <br />
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h1>

          <p className="mt-7 text-[18px] sm:text-[20px] leading-[1.6] text-muted-foreground max-w-[640px] mx-auto">
            {t("description")}
          </p>

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

        {/* Full Dashboard Preview */}
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
                  app.marketflow.se/dashboard
                </div>
              </div>
              <div className="w-[52px]" />
            </div>

            {/* App layout */}
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden sm:flex w-[200px] bg-[hsl(0,0%,5%)] flex-col p-4 gap-1 shrink-0">
                <div className="flex items-center gap-2 px-3 py-2 mb-4">
                  <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-[10px]">M</span>
                  </div>
                  <span className="text-[13px] font-semibold text-white">MarketFlow</span>
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
                    className={`px-3 py-2 rounded-lg text-[12px] font-medium ${
                      item.active
                        ? "bg-primary text-white"
                        : "text-white/40 hover:text-white/60"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 sm:p-6 bg-[hsl(0,0%,98%)] min-w-0">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-[15px] font-semibold text-foreground font-[family-name:var(--font-heading)]">Dashboard</h3>
                    <p className="text-[11px] text-muted-foreground">April 2026</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-background border border-border/60 rounded-lg px-3 py-1.5 text-[10px] text-muted-foreground">
                      Sök kunder...
                    </div>
                    <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-[10px] font-bold text-primary">MT</div>
                  </div>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Aktiva kunder", value: "47", delta: "+3 denna mån", up: true },
                    { label: "Pågående projekt", value: "12", delta: "4 i review", up: true },
                    { label: "Mån. intäkt", value: "284k", delta: "+18% vs förra mån", up: true },
                    { label: "Ads spend", value: "127k", delta: "89% av budget", up: false },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-background rounded-xl border border-border/40 p-3.5">
                      <p className="text-[10px] text-muted-foreground font-medium">{stat.label}</p>
                      <p className="text-[20px] font-bold font-[family-name:var(--font-heading)] text-foreground mt-0.5 leading-tight">{stat.value}</p>
                      <p className={`text-[10px] mt-1 font-medium ${stat.up ? "text-emerald-600" : "text-foreground/40"}`}>{stat.delta}</p>
                    </div>
                  ))}
                </div>

                {/* Two column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  {/* Pipeline / Sales funnel */}
                  <div className="lg:col-span-3 bg-background rounded-xl border border-border/40 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[12px] font-semibold text-foreground">Säljpipeline</span>
                      <span className="text-[10px] text-muted-foreground">Q2 2026</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { stage: "Lead", count: 23, value: "460k", width: "100%" },
                        { stage: "Kontaktad", count: 18, value: "380k", width: "78%" },
                        { stage: "Offert skickad", count: 11, value: "290k", width: "58%" },
                        { stage: "Förhandling", count: 6, value: "185k", width: "35%" },
                        { stage: "Vunnen", count: 4, value: "142k", width: "22%" },
                      ].map((stage) => (
                        <div key={stage.stage} className="flex items-center gap-3">
                          <span className="text-[10px] text-muted-foreground w-[80px] shrink-0 text-right">{stage.stage}</span>
                          <div className="flex-1 h-6 bg-foreground/[0.03] rounded-md overflow-hidden relative">
                            <div
                              className="h-full bg-foreground/[0.07] rounded-md"
                              style={{ width: stage.width }}
                            />
                            <div className="absolute inset-0 flex items-center justify-between px-2">
                              <span className="text-[9px] font-medium text-foreground/60">{stage.count} deals</span>
                              <span className="text-[9px] font-semibold text-foreground/70">{stage.value} kr</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/30 flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground">Win rate</span>
                      <span className="text-[11px] font-semibold text-foreground">17.4%</span>
                    </div>
                  </div>

                  {/* Top clients by revenue */}
                  <div className="lg:col-span-2 bg-background rounded-xl border border-border/40 p-4">
                    <span className="text-[12px] font-semibold text-foreground">Topp kunder — intäkt</span>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { name: "TechStart AB", service: "SEO + ADS", revenue: "45k", trend: "+12%" },
                        { name: "Nordic Food", service: "WEBB", revenue: "38k", trend: "+8%" },
                        { name: "HealthPlus", service: "SEO + WEBB", revenue: "32k", trend: "+22%" },
                        { name: "GreenEnergy", service: "META", revenue: "28k", trend: "+5%" },
                        { name: "FashionBrand", service: "Google ADS", revenue: "24k", trend: "-3%" },
                      ].map((client) => (
                        <div key={client.name} className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-foreground/[0.05] flex items-center justify-center text-[10px] font-bold text-foreground/40 shrink-0">
                            {client.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-medium text-foreground truncate">{client.name}</p>
                            <p className="text-[9px] text-muted-foreground">{client.service}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[11px] font-semibold text-foreground">{client.revenue}</p>
                            <p className={`text-[9px] font-medium ${client.trend.startsWith("+") ? "text-emerald-600" : "text-red-400"}`}>{client.trend}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                  {/* Google Ads performance */}
                  <div className="bg-background rounded-xl border border-border/40 p-4">
                    <span className="text-[12px] font-semibold text-foreground">Google Ads</span>
                    <div className="mt-3 space-y-2">
                      {[
                        { label: "Impressions", value: "342k" },
                        { label: "Klick", value: "8.4k" },
                        { label: "CTR", value: "2.46%" },
                        { label: "Konverteringar", value: "312" },
                        { label: "CPA", value: "407 kr" },
                      ].map((metric) => (
                        <div key={metric.label} className="flex items-center justify-between">
                          <span className="text-[10px] text-muted-foreground">{metric.label}</span>
                          <span className="text-[11px] font-semibold text-foreground">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team productivity */}
                  <div className="bg-background rounded-xl border border-border/40 p-4">
                    <span className="text-[12px] font-semibold text-foreground">Teamproduktivitet</span>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { name: "Anna S.", hours: "142h", projects: 5 },
                        { name: "Erik L.", hours: "128h", projects: 4 },
                        { name: "Sara K.", hours: "115h", projects: 3 },
                      ].map((member) => (
                        <div key={member.name} className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-foreground/[0.07] flex items-center justify-center text-[9px] font-bold text-foreground/50">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex-1">
                            <p className="text-[11px] font-medium text-foreground">{member.name}</p>
                            <div className="w-full h-1 bg-foreground/[0.04] rounded-full mt-1">
                              <div className="h-full bg-foreground/10 rounded-full" style={{ width: `${(member.hours === "142h" ? 100 : member.hours === "128h" ? 90 : 81)}%` }} />
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-semibold text-foreground">{member.hours}</p>
                            <p className="text-[9px] text-muted-foreground">{member.projects} projekt</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="bg-background rounded-xl border border-border/40 p-4">
                    <span className="text-[12px] font-semibold text-foreground">Senaste aktivitet</span>
                    <div className="mt-3 space-y-2.5">
                      {[
                        { text: "Ny kund: StartupXYZ tillagd", time: "2 min" },
                        { text: "Offert skickad till HealthPlus", time: "1h" },
                        { text: "Google Ads-budget uppdaterad", time: "3h" },
                        { text: "Projekt 'SEO TechStart' → review", time: "5h" },
                        { text: "Faktura 2024-047 betald", time: "1d" },
                      ].map((activity) => (
                        <div key={activity.text} className="flex items-start gap-2.5">
                          <div className="w-1 h-1 rounded-full bg-foreground/20 mt-[6px] shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] text-foreground/70 leading-[1.4] truncate">{activity.text}</p>
                          </div>
                          <span className="text-[9px] text-muted-foreground shrink-0">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
