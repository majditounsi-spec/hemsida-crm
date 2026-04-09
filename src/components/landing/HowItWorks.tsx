"use client";

import { motion } from "framer-motion";
import { UserPlus, Upload, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Skapa konto",
    description: "Registrera dig gratis på 30 sekunder. Ingen kreditkort. Bjud in ditt team direkt.",
    details: ["Google SSO-inloggning", "Gratis i 7 dagar", "Ingen setup krävs"],
  },
  {
    number: "02",
    icon: Upload,
    title: "Importera & koppla",
    description: "Importera befintliga kunder via CSV eller koppla direkt till Google Ads, Meta och Fortnox.",
    details: ["CSV-import", "API-kopplingar", "Automatisk synk"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Väx smartare",
    description: "Se all data samlad. Spåra pipeline, budgetar och produktion — fatta beslut baserat på data.",
    details: ["Realtids-dashboard", "Säljpipeline", "Automatiska rapporter"],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
            Så fungerar det
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            Från zero till full koll
            <br />
            <span className="text-muted-foreground">på 5 minuter.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 border-t border-dashed border-white/[0.08]" />
              )}

              <div className="bg-white/[0.02] border border-white/[0.06] rounded-[20px] p-8 h-full hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 group">
                {/* Number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[48px] font-bold font-[family-name:var(--font-heading)] text-white/[0.06] leading-none">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-[14px] bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_rgba(124,95,255,0.15)] transition-all duration-500">
                    <step.icon className="w-5 h-5 text-primary/70" />
                  </div>
                </div>

                <h3 className="text-[18px] font-semibold font-[family-name:var(--font-heading)] text-foreground/90 mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-[1.7] mb-6">
                  {step.description}
                </p>

                <div className="space-y-2 pt-5 border-t border-white/[0.04]">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
                      <span className="text-[12px] text-white/30">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://majditounsi-spec.github.io/crm-ads/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full text-[14px] font-medium hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(124,95,255,0.25)]"
          >
            Kom igång på 30 sekunder
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
