"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Users,
  FolderKanban,
  BarChart3,
  Clock,
  Zap,
  PieChart,
  ArrowUpRight,
  Star,
  TrendingUp,
  Shield,
  Layers,
  Bell,
} from "lucide-react";

const features = [
  {
    key: "contacts",
    icon: Users,
    gradient: "from-blue-500/8 to-cyan-500/4",
    iconBg: "bg-blue-500/10 text-blue-600",
    details: [
      { icon: Star, text: "Betyg & rating-system" },
      { icon: Layers, text: "Multi-service per kund" },
      { icon: TrendingUp, text: "Budgetspårning i realtid" },
    ],
  },
  {
    key: "projects",
    icon: FolderKanban,
    gradient: "from-emerald-500/8 to-green-500/4",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    details: [
      { icon: Users, text: "Teamtilldelning" },
      { icon: Clock, text: "Deadline-påminnelser" },
      { icon: Layers, text: "Uppgiftshantering" },
    ],
  },
  {
    key: "googleAds",
    icon: BarChart3,
    gradient: "from-violet-500/8 to-purple-500/4",
    iconBg: "bg-violet-500/10 text-violet-600",
    details: [
      { icon: TrendingUp, text: "Daglig budget & spend" },
      { icon: PieChart, text: "Klick & konverteringar" },
      { icon: Layers, text: "Kampanjöversikt" },
    ],
  },
  {
    key: "timeTracking",
    icon: Clock,
    gradient: "from-amber-500/8 to-orange-500/4",
    iconBg: "bg-amber-500/10 text-amber-600",
    details: [
      { icon: Users, text: "Per person & projekt" },
      { icon: PieChart, text: "Daglig sammanställning" },
      { icon: TrendingUp, text: "Produktivitetsinsikt" },
    ],
  },
  {
    key: "automations",
    icon: Zap,
    gradient: "from-rose-500/8 to-pink-500/4",
    iconBg: "bg-rose-500/10 text-rose-600",
    details: [
      { icon: Bell, text: "Smarta påminnelser" },
      { icon: Shield, text: "Budgetvarningar" },
      { icon: Zap, text: "Statusnotifieringar" },
    ],
  },
  {
    key: "analytics",
    icon: PieChart,
    gradient: "from-sky-500/8 to-blue-500/4",
    iconBg: "bg-sky-500/10 text-sky-600",
    details: [
      { icon: BarChart3, text: "Interaktiva dashboards" },
      { icon: TrendingUp, text: "Trendanalys" },
      { icon: Layers, text: "Exportera rapporter" },
    ],
  },
];

export default function Features() {
  const t = useTranslations("landing.features");

  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
            {t("subtitle")}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="group relative"
            >
              <div className={`bg-gradient-to-b ${feature.gradient} border border-border/60 rounded-[20px] p-7 h-full transition-all duration-500 hover:shadow-lg hover:shadow-primary/[0.04] hover:border-primary/20 hover:-translate-y-1`}>
                {/* Icon */}
                <div className={`w-11 h-11 rounded-[12px] ${feature.iconBg} flex items-center justify-center mb-5`}>
                  <feature.icon className="w-5 h-5" />
                </div>

                {/* Title & description */}
                <h3 className="text-[17px] font-semibold font-[family-name:var(--font-heading)] text-foreground mb-2 flex items-center gap-2">
                  {t(`${feature.key}.title`)}
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-[14px] text-muted-foreground leading-[1.65] mb-5">
                  {t(`${feature.key}.description`)}
                </p>

                {/* Detail bullets */}
                <div className="space-y-2.5 pt-5 border-t border-border/40">
                  {feature.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-background/80 border border-border/40 flex items-center justify-center">
                        <detail.icon className="w-3 h-3 text-muted-foreground" />
                      </div>
                      <span className="text-[13px] text-muted-foreground">{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
