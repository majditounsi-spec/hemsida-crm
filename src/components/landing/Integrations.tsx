"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const integrations = [
  {
    name: "Google Workspace",
    description: "Gmail, Calendar, Drive & Sheets. Synka e-post, möten och dokument direkt i CRM:et.",
    category: "Produktivitet",
    status: "live" as const,
  },
  {
    name: "Google Ads",
    description: "Spåra kampanjer, budgetar, klick och konverteringar per kund i realtid.",
    category: "Annonsering",
    status: "live" as const,
  },
  {
    name: "Meta Ads",
    description: "Facebook & Instagram-annonser. Räckvidd, engagemang och ROAS-spårning.",
    category: "Annonsering",
    status: "live" as const,
  },
  {
    name: "Fortnox",
    description: "Automatisera fakturering, bokföring och ekonomirapporter. Synka kunder och fakturor.",
    category: "Ekonomi",
    status: "coming" as const,
  },
  {
    name: "GetAccept",
    description: "Digitala avtal och e-signering. Skicka offerter och spåra signeringsstatus i CRM:et.",
    category: "Försäljning",
    status: "coming" as const,
  },
  {
    name: "Slack",
    description: "Notifieringar och uppdateringar direkt i Slack. Håll teamet synkat utan att byta verktyg.",
    category: "Kommunikation",
    status: "coming" as const,
  },
  {
    name: "Google Analytics",
    description: "Trafik, sidvisningar och konverteringar. Se webbdata kopplat till varje kund.",
    category: "Analys",
    status: "coming" as const,
  },
  {
    name: "Zapier",
    description: "Koppla MarketFlow till 6 000+ appar. Automatisera arbetsflöden utan kod.",
    category: "Automation",
    status: "coming" as const,
  },
  {
    name: "Microsoft 365",
    description: "Outlook, Teams & OneDrive. E-post, möten och filhantering integrerat.",
    category: "Produktivitet",
    status: "coming" as const,
  },
  {
    name: "Stripe",
    description: "Betalningar och prenumerationer. Hantera fakturering direkt från kundkortet.",
    category: "Betalning",
    status: "coming" as const,
  },
  {
    name: "HubSpot",
    description: "Importera och synka kontakter, deals och marketing-data mellan systemen.",
    category: "CRM",
    status: "coming" as const,
  },
  {
    name: "REST API",
    description: "Öppet API med webhooks för att bygga egna integrationer och kopplingar.",
    category: "Utvecklare",
    status: "coming" as const,
  },
];

export default function Integrations() {
  const live = integrations.filter((i) => i.status === "live");
  const coming = integrations.filter((i) => i.status === "coming");

  return (
    <section id="integrations" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[13px] font-semibold text-muted-foreground uppercase tracking-[0.15em] mb-4">
            Integrationer
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            Anslut verktygen
            <br />
            <span className="text-muted-foreground">du redan använder.</span>
          </h2>
          <p className="mt-5 text-[17px] text-muted-foreground max-w-[540px] mx-auto leading-relaxed">
            MarketFlow kopplar ihop dina affärssystem, annonsplattformar och produktivitetsverktyg i ett CRM.
          </p>
        </motion.div>

        {/* Live integrations */}
        <div className="mb-16">
          <p className="text-[12px] font-semibold text-foreground/40 uppercase tracking-[0.15em] mb-5 pl-1">
            Tillgängliga nu
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border/50 rounded-[20px] overflow-hidden">
            {live.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-card p-7 hover:bg-secondary/40 transition-colors duration-500 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[11px] bg-foreground text-background flex items-center justify-center text-[13px] font-bold font-[family-name:var(--font-heading)]">
                      {integration.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-foreground font-[family-name:var(--font-heading)]">
                        {integration.name}
                      </h3>
                      <span className="text-[11px] text-muted-foreground">{integration.category}</span>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <p className="text-[13px] text-muted-foreground leading-[1.65]">
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coming soon integrations */}
        <div>
          <p className="text-[12px] font-semibold text-foreground/40 uppercase tracking-[0.15em] mb-5 pl-1">
            Kommer snart
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coming.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border/40 bg-card hover:bg-secondary/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-[11px] bg-foreground/[0.04] border border-border/60 flex items-center justify-center shrink-0 text-[13px] font-bold font-[family-name:var(--font-heading)] text-foreground/40 group-hover:text-foreground/60 transition-colors">
                  {integration.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[14px] font-semibold text-foreground font-[family-name:var(--font-heading)]">
                      {integration.name}
                    </h3>
                    <span className="text-[10px] text-foreground/30 font-medium uppercase tracking-wider">
                      {integration.category}
                    </span>
                  </div>
                  <p className="text-[12px] text-muted-foreground leading-[1.6]">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-20"
        >
          <p className="text-[14px] text-muted-foreground mb-5">
            Saknar du en integration? Vi bygger den.
          </p>
          <a
            href="https://majditounsi-spec.github.io/crm-ads/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full text-[14px] font-medium hover:bg-foreground/90 transition-colors duration-200"
          >
            Testa MarketFlow
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
