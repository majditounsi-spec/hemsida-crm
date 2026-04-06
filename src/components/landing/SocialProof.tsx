"use client";

import { motion } from "framer-motion";
import { Star, Quote, Award, Shield, Zap, TrendingUp } from "lucide-react";

const reviews = [
  {
    name: "Marcus Lindqvist",
    role: "VD, Digimark Stockholm",
    text: "Vi testade flera CRM-system innan MarketFlow. Inget annat hade Google Ads-spårningen inbyggd så smidigt. Sparat oss minst 10 timmar i veckan.",
    stars: 5,
    avatar: "ML",
  },
  {
    name: "Sofia Andersson",
    role: "Projektledare, Webb & Co",
    text: "Äntligen ett CRM byggt för byråer. Tidloggning, kundhantering och budgetöversikt — allt på ett ställe. Otroligt intuitivt.",
    stars: 5,
    avatar: "SA",
  },
  {
    name: "Johan Bergström",
    role: "Digital strateg, NordicAds",
    text: "Säljpipelinen gav oss total koll på vår hitrate. Vi ökade vår close rate med 34% första kvartalet. Rekommenderar starkt.",
    stars: 5,
    avatar: "JB",
  },
  {
    name: "Emma Karlsson",
    role: "COO, GrowthHack Agency",
    text: "Bästa investeringen vi gjort. Automationerna och integrationen med Fortnox sparar oss enormt med admin-tid varje månad.",
    stars: 5,
    avatar: "EK",
  },
  {
    name: "David Nyström",
    role: "Grundare, SEO Nordic",
    text: "Från Excel-kaos till full kontroll. MarketFlow är det enda CRM som verkligen förstår hur en digital byrå fungerar.",
    stars: 5,
    avatar: "DN",
  },
  {
    name: "Lisa Holm",
    role: "Marknadschef, MediaPulse",
    text: "Meta Ads + Google Ads i samma vy per kund — genialiskt. Rapporteringen till kunder tar nu 5 minuter istället för en timme.",
    stars: 4,
    avatar: "LH",
  },
];

const awards = [
  {
    icon: Award,
    title: "Best CRM for Agencies 2026",
    org: "SaaS Awards Nordic",
    detail: "Vinnare i kategorin 'Best Vertical CRM'",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II Certified",
    org: "Compliance Standard",
    detail: "Fullständig datasäkerhet och integritet",
  },
  {
    icon: Zap,
    title: "Top 10 Fastest Growing SaaS",
    org: "TechCrunch Nordic 2026",
    detail: "420% ARR-tillväxt på 12 månader",
  },
  {
    icon: TrendingUp,
    title: "Product of the Month",
    org: "Product Hunt",
    detail: "#2 Product of the Day, 1 200+ upvotes",
  },
];

const stats = [
  { value: "4.9", label: "Google Reviews", sub: "230+ recensioner" },
  { value: "500+", label: "Aktiva byråer", sub: "i Norden" },
  { value: "98%", label: "Nöjdhet", sub: "kundnöjdhet Q1 2026" },
  { value: "2.4M", label: "Leads hanterade", sub: "genom plattformen" },
];

export default function SocialProof() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-primary/70 uppercase tracking-[0.15em] mb-4">
            Social Proof
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            Älskad av byråer
            <br />
            <span className="text-muted-foreground">i hela Norden.</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.04] rounded-[20px] overflow-hidden mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card p-6 text-center"
            >
              <p className="text-[32px] font-bold font-[family-name:var(--font-heading)] text-foreground leading-none">
                {stat.value}
              </p>
              <p className="text-[13px] font-medium text-white/50 mt-2">{stat.label}</p>
              <p className="text-[11px] text-white/20 mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-[14px] font-semibold text-foreground/80">4.9 / 5</span>
            <span className="text-[13px] text-white/25">baserat på 230+ Google Reviews</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-[18px] p-6 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 group"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-3.5 h-3.5 ${
                        s <= review.stars
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-white/10"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-5">
                  <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/15" />
                  <p className="text-[13px] text-white/50 leading-[1.7] pl-5">
                    {review.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[11px] font-bold text-primary/60">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-foreground/80">{review.name}</p>
                    <p className="text-[11px] text-white/25">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards / Tech recognitions */}
        <div>
          <p className="text-[11px] font-semibold text-primary/40 uppercase tracking-[0.2em] mb-6 pl-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_6px_rgba(124,95,255,0.4)]" />
            Utmärkelser & certifieringar
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-[18px] p-5 hover:bg-white/[0.04] hover:border-primary/15 transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-[11px] bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(124,95,255,0.15)] transition-all duration-500">
                  <award.icon className="w-[18px] h-[18px] text-primary/60" />
                </div>
                <h3 className="text-[14px] font-semibold text-foreground/80 font-[family-name:var(--font-heading)] mb-1">
                  {award.title}
                </h3>
                <p className="text-[11px] text-primary/40 font-medium mb-2">{award.org}</p>
                <p className="text-[12px] text-white/25 leading-[1.5]">{award.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
