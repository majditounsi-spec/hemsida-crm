"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, Sparkles, Clock, Building2 } from "lucide-react";

const plans = ["free", "pro", "enterprise"] as const;
const planIcons = { free: Clock, pro: Sparkles, enterprise: Building2 };

export default function Pricing() {
  const t = useTranslations("landing.pricing");

  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-semibold text-primary uppercase tracking-[0.15em] mb-4">
            Pricing
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            {t("title")}
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => {
            const isPro = plan === "pro";
            const isFree = plan === "free";
            const isEnterprise = plan === "enterprise";
            const features = t.raw(`${plan}.features`) as string[];
            const Icon = planIcons[plan];

            return (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={`relative rounded-[24px] p-8 flex flex-col ${
                  isPro
                    ? "bg-foreground text-background md:-my-4 md:py-12 glow-lg"
                    : "bg-card border border-border/60"
                }`}
              >
                {/* Badges */}
                {isPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-purple-500 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-primary/20">
                      <Sparkles className="w-3 h-3" />
                      Mest populär
                    </span>
                  </div>
                )}
                {isFree && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-white text-[11px] font-semibold px-4 py-1.5 rounded-full">
                      7 dagar gratis
                    </span>
                  </div>
                )}

                {/* Plan icon & name */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className={`w-9 h-9 rounded-[10px] flex items-center justify-center ${
                      isPro
                        ? "bg-background/15"
                        : "bg-primary/8"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        isPro ? "text-background" : "text-primary"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-[15px] font-semibold ${
                      isPro ? "text-background/80" : "text-muted-foreground"
                    }`}
                  >
                    {t(`${plan}.name`)}
                  </h3>
                </div>

                {/* Price */}
                <div className="mt-1">
                  {isPro ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[14px] line-through text-background/40 font-medium">
                          {t(`${plan}.originalPrice`)} kr
                        </span>
                        <span className="text-[11px] font-semibold bg-red-500 text-white px-2 py-0.5 rounded-full">
                          REA
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-[48px] font-bold font-[family-name:var(--font-heading)] leading-none text-background">
                          {t(`${plan}.price`)}
                        </span>
                        <span className="text-[14px] text-background/50 ml-0.5">
                          {t(`${plan}.period`)}
                        </span>
                      </div>
                      <p className="mt-2 text-[12px] text-background/50 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        {t(`${plan}.saleNote`)}
                      </p>
                    </>
                  ) : isEnterprise ? (
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-[42px] font-bold font-[family-name:var(--font-heading)] leading-none text-foreground"
                      >
                        {t(`${plan}.price`)}
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[42px] font-bold font-[family-name:var(--font-heading)] leading-none text-foreground">
                          {t(`${plan}.price`)}
                        </span>
                        <span className="text-[14px] text-muted-foreground">
                          {t(`${plan}.period`)}
                        </span>
                      </div>
                      <p className="mt-2 text-[12px] text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-500" />
                        {t(`${plan}.trialNote`)}
                      </p>
                    </>
                  )}
                </div>

                {/* Features */}
                <ul className="mt-8 space-y-3 flex-1">
                  {features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${
                          isPro ? "bg-background/15" : "bg-primary/8"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            isPro ? "text-background" : "text-primary"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-[14px] leading-[1.5] ${
                          isPro ? "text-background/80" : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://majditounsi-spec.github.io/crm-ads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block text-center py-3.5 rounded-full font-medium text-[14px] transition-all duration-300 ${
                    isPro
                      ? "bg-background text-foreground hover:bg-background/90 shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  {t(`${plan}.cta`)}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
