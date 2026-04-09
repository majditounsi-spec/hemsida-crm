"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Vad kostar MarketFlow?",
    a: "Du kan testa gratis i 7 dagar utan kreditkort. Pro-planen kostar 99 kr/mån per användare (ordinarie 149 kr — lanseringserbjudande). Enterprise-planen har custom pricing baserat på era behov.",
  },
  {
    q: "Kan jag importera befintliga kunder?",
    a: "Ja! Du kan importera via CSV-fil eller koppla direkt via våra API-integrationer. Vi hjälper även till med migration från andra CRM-system som HubSpot eller Pipedrive.",
  },
  {
    q: "Hur fungerar Google Ads-spårningen?",
    a: "Du kopplar kundens Google Ads-konto via Customer ID. Sedan synkas dagliga budgetar, utgifter, klick, visningar och konverteringar automatiskt. Allt visas per kund i ditt dashboard.",
  },
  {
    q: "Är min data säker?",
    a: "Absolut. Vi använder Supabase (PostgreSQL) med Row Level Security, krypterad dataöverföring (TLS), och automatiska backups. All data lagras inom EU. Vi är SOC 2 Type II-certifierade.",
  },
  {
    q: "Kan hela teamet använda det?",
    a: "Ja. Free Trial inkluderar 1 användare, Pro-planen upp till 5, och Enterprise har obegränsade användare. Varje person får sin egen inloggning och kan se sina tilldelade projekt och kunder.",
  },
  {
    q: "Fungerar det på mobilen?",
    a: "Ja, MarketFlow är helt responsivt och fungerar i alla moderna webbläsare — desktop, tablet och mobil. Ingen app behövs.",
  },
  {
    q: "Vilka integrationer finns?",
    a: "Just nu: Google Workspace, Google Ads och Meta Ads. Kommande: Fortnox, GetAccept, Slack, Zapier, Microsoft 365, Stripe, Google Analytics och HubSpot. Vi har även ett öppet REST API.",
  },
  {
    q: "Kan jag avbryta när som helst?",
    a: "Ja, inga bindningstider. Du kan uppgradera, nedgradera eller avsluta din plan när du vill. Din data exporteras enkelt via CSV eller API.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
            FAQ
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            Vanliga frågor
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left p-5 rounded-[16px] border transition-all duration-300 ${
                    isOpen
                      ? "bg-white/[0.04] border-white/[0.1]"
                      : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`text-[14px] font-medium transition-colors duration-200 ${isOpen ? "text-foreground" : "text-white/60"}`}>
                      {faq.q}
                    </span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? "bg-primary/20 text-primary" : "bg-white/[0.04] text-white/20"
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[13px] text-muted-foreground leading-[1.75] mt-3 pr-10">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
