"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "@/i18n/routing";

const plans = ["free", "pro", "enterprise"] as const;

export default function Pricing() {
  const t = useTranslations("landing.pricing");

  return (
    <section id="pricing" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-foreground">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const isPro = plan === "pro";
            const features = t.raw(`${plan}.features`) as string[];
            return (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative bg-card rounded-2xl p-8 border ${
                  isPro
                    ? "border-primary shadow-xl shadow-primary/10 scale-105"
                    : "border-border"
                } flex flex-col`}
              >
                {isPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
                  {t(`${plan}.name`)}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-[family-name:var(--font-heading)]">
                    {t(`${plan}.price`)}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {t(`${plan}.period`)}
                  </span>
                </div>
                <ul className="mt-8 space-y-3 flex-1">
                  {features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/login"
                  className={`mt-8 block text-center py-3 rounded-xl font-medium text-sm transition-all ${
                    isPro
                      ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/25"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {t(`${plan}.cta`)}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
