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
} from "lucide-react";

const features = [
  { key: "contacts", icon: Users },
  { key: "projects", icon: FolderKanban },
  { key: "googleAds", icon: BarChart3 },
  { key: "timeTracking", icon: Clock },
  { key: "automations", icon: Zap },
  { key: "analytics", icon: PieChart },
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
          <p className="text-[13px] font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-4">
            {t("subtitle")}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border/50 rounded-[24px] overflow-hidden">
          {features.map((feature, i) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-card p-8 hover:bg-secondary/40 transition-colors duration-500 group"
            >
              <div className="w-10 h-10 rounded-[11px] bg-foreground/[0.05] border border-border/60 flex items-center justify-center mb-5 group-hover:bg-foreground/[0.08] transition-colors duration-500">
                <feature.icon className="w-[18px] h-[18px] text-foreground/60" />
              </div>

              <h3 className="text-[16px] font-semibold font-[family-name:var(--font-heading)] text-foreground mb-2 flex items-center gap-1.5">
                {t(`${feature.key}.title`)}
                <ArrowUpRight className="w-3.5 h-3.5 text-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>

              <p className="text-[13px] text-muted-foreground leading-[1.7]">
                {t(`${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
