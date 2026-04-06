"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
  Globe,
  Layers,
  Search,
  Share2,
  Shield,
  Zap,
  Clock,
} from "lucide-react";

const integrations = [
  {
    name: "Google Ads",
    description: "Spåra kampanjer, dagliga budgetar, klick, visningar och konverteringar i realtid.",
    icon: BarChart3,
    features: ["Daglig budget & spend", "Klick & konverteringar", "Kampanjöversikt", "Månads- & årsrapporter"],
    status: "live" as const,
  },
  {
    name: "Meta Ads",
    description: "Hantera Facebook- och Instagram-annonser. Övervaka räckvidd, engagemang och ROAS.",
    icon: Share2,
    features: ["Facebook & Instagram", "Räckvidd & engagemang", "ROAS-spårning", "Målgruppsinsikter"],
    status: "live" as const,
  },
  {
    name: "Supabase",
    description: "PostgreSQL i molnet med realtidssynk, autentisering och automatiska backups.",
    icon: Database,
    features: ["PostgreSQL-databas", "Realtidssynk", "Row Level Security", "Automatiska backups"],
    status: "live" as const,
  },
  {
    name: "SEO-verktyg",
    description: "Keyword-tracking, rankingöversikt och tekniska audits per kund.",
    icon: Search,
    features: ["Keyword-spårning", "Ranking-rapporter", "Teknisk SEO-audit", "Konkurrentanalys"],
    status: "live" as const,
  },
  {
    name: "Webbanalys",
    description: "Trafik, sidvisningar, bounce rate och användarresor direkt i dashboarden.",
    icon: Globe,
    features: ["Google Analytics", "Trafik & sidvisningar", "Konverteringstracking", "Realtidsdata"],
    status: "coming" as const,
  },
  {
    name: "REST API",
    description: "Öppet API för att integrera med era befintliga system. Webhooks och full dokumentation.",
    icon: Code2,
    features: ["RESTful endpoints", "Webhook-stöd", "API-nycklar", "Fullständig dokumentation"],
    status: "coming" as const,
  },
];

const techStack = [
  { name: "React", icon: Layers },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Layers },
  { name: "Supabase", icon: Database },
  { name: "Zod", icon: Shield },
  { name: "Framer Motion", icon: Zap },
  { name: "Recharts", icon: BarChart3 },
];

export default function Integrations() {
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
            Alla verktyg du behöver.
            <br />
            <span className="text-muted-foreground">Ett ställe.</span>
          </h2>
        </motion.div>

        {/* Integration cards — clean monochrome */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border/50 rounded-[24px] overflow-hidden mb-24">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-card p-8 hover:bg-secondary/40 transition-colors duration-500 group"
            >
              {/* Icon + status */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-[11px] bg-foreground/[0.05] border border-border/60 flex items-center justify-center group-hover:bg-foreground/[0.08] transition-colors duration-500">
                  <integration.icon className="w-[18px] h-[18px] text-foreground/60" />
                </div>
                <span
                  className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    integration.status === "live"
                      ? "bg-foreground/[0.05] text-foreground/50"
                      : "bg-foreground/[0.03] text-foreground/30"
                  }`}
                >
                  {integration.status === "live" ? "Aktiv" : "Snart"}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-[16px] font-semibold font-[family-name:var(--font-heading)] text-foreground mb-2">
                {integration.name}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-muted-foreground leading-[1.65] mb-5">
                {integration.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {integration.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <div className="w-[3px] h-[3px] rounded-full bg-foreground/20" />
                    <span className="text-[12px] text-muted-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack — Apple-style pill row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[13px] text-muted-foreground mb-6">Byggt med</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-foreground/[0.03] border border-border/50 hover:bg-foreground/[0.06] transition-colors duration-300"
              >
                <tech.icon className="w-3.5 h-3.5 text-foreground/40" />
                <span className="text-[12px] font-medium text-foreground/70">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="https://majditounsi-spec.github.io/crm-ads/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full text-[14px] font-medium hover:bg-foreground/90 transition-colors duration-200"
          >
            Testa alla integrationer
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
