"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  GoogleIcon,
  GoogleAdsIcon,
  MetaIcon,
  FortnoxIcon,
  GetAcceptIcon,
  SlackIcon,
  AnalyticsIcon,
  ZapierIcon,
  MicrosoftIcon,
  StripeIcon,
  HubSpotIcon,
  ApiIcon,
} from "./BrandIcons";

const integrations = [
  { name: "Google Workspace", description: "Gmail, Calendar, Drive & Sheets synkat i CRM:et.", category: "Produktivitet", status: "live" as const, icon: GoogleIcon },
  { name: "Google Ads", description: "Kampanjer, budgetar, klick och konverteringar i realtid.", category: "Annonsering", status: "live" as const, icon: GoogleAdsIcon },
  { name: "Meta Ads", description: "Facebook & Instagram — räckvidd, engagemang och ROAS.", category: "Annonsering", status: "live" as const, icon: MetaIcon },
  { name: "Fortnox", description: "Fakturering, bokföring och ekonomirapporter automatiserat.", category: "Ekonomi", status: "coming" as const, icon: FortnoxIcon },
  { name: "GetAccept", description: "Digitala avtal och e-signering direkt från CRM:et.", category: "Försäljning", status: "coming" as const, icon: GetAcceptIcon },
  { name: "Slack", description: "Notifieringar och uppdateringar direkt i era kanaler.", category: "Kommunikation", status: "coming" as const, icon: SlackIcon },
  { name: "Google Analytics", description: "Trafik och konverteringar kopplat till varje kund.", category: "Analys", status: "coming" as const, icon: AnalyticsIcon },
  { name: "Zapier", description: "Koppla till 6 000+ appar utan kod.", category: "Automation", status: "coming" as const, icon: ZapierIcon },
  { name: "Microsoft 365", description: "Outlook, Teams & OneDrive integrerat.", category: "Produktivitet", status: "coming" as const, icon: MicrosoftIcon },
  { name: "Stripe", description: "Betalningar och prenumerationer från kundkortet.", category: "Betalning", status: "coming" as const, icon: StripeIcon },
  { name: "HubSpot", description: "Synka kontakter, deals och marketing-data.", category: "CRM", status: "coming" as const, icon: HubSpotIcon },
  { name: "REST API", description: "Öppet API med webhooks för egna integrationer.", category: "Utvecklare", status: "coming" as const, icon: ApiIcon },
];

export default function Integrations() {
  const live = integrations.filter((i) => i.status === "live");
  const coming = integrations.filter((i) => i.status === "coming");

  return (
    <section id="integrations" className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
            Integrationer
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            Anslut verktygen
            <br />
            <span className="text-muted-foreground">du redan använder.</span>
          </h2>
        </motion.div>

        {/* Live */}
        <div className="mb-16">
          <p className="text-[11px] font-semibold text-white/25 uppercase tracking-[0.2em] mb-5 pl-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
            Tillgängliga nu
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/[0.04] rounded-[20px] overflow-hidden">
            {live.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-card p-7 hover:bg-white/[0.03] transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-[12px] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-foreground/90 font-[family-name:var(--font-heading)]">{item.name}</h3>
                    <span className="text-[10px] text-muted-foreground">{item.category}</span>
                  </div>
                </div>
                <p className="text-[13px] text-muted-foreground leading-[1.65]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming */}
        <div>
          <p className="text-[11px] font-semibold text-white/15 uppercase tracking-[0.2em] mb-5 pl-1">
            Kommer snart
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coming.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-[11px] bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[13px] font-semibold text-foreground/70 font-[family-name:var(--font-heading)]">{item.name}</h3>
                  <p className="text-[11px] text-white/25 truncate">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-[14px] text-white/25 mb-5">Saknar du en integration? Vi bygger den.</p>
          <a
            href="https://majditounsi-spec.github.io/crm-ads/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full text-[14px] font-medium hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(124,95,255,0.25)]"
          >
            Testa MarketFlow
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
