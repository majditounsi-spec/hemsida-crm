"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | string;

interface Row {
  feature: string;
  marketflow: CellValue;
  hubspot: CellValue;
  monday: CellValue;
  excel: CellValue;
}

const rows: Row[] = [
  { feature: "Kundhantering (CRM)", marketflow: "yes", hubspot: "yes", monday: "partial", excel: "partial" },
  { feature: "Projekthantering", marketflow: "yes", hubspot: "partial", monday: "yes", excel: "no" },
  { feature: "Google Ads-spårning", marketflow: "yes", hubspot: "partial", monday: "no", excel: "no" },
  { feature: "Meta Ads-spårning", marketflow: "yes", hubspot: "partial", monday: "no", excel: "no" },
  { feature: "Tidloggning", marketflow: "yes", hubspot: "no", monday: "yes", excel: "partial" },
  { feature: "Säljpipeline", marketflow: "yes", hubspot: "yes", monday: "partial", excel: "no" },
  { feature: "Automationer", marketflow: "yes", hubspot: "yes", monday: "yes", excel: "no" },
  { feature: "Fortnox-integration", marketflow: "yes", hubspot: "no", monday: "no", excel: "no" },
  { feature: "Byggt för byråer", marketflow: "yes", hubspot: "no", monday: "no", excel: "no" },
  { feature: "Svenska gränssnitt", marketflow: "yes", hubspot: "partial", monday: "partial", excel: "yes" },
  { feature: "Pris (per användare/mån)", marketflow: "99 kr", hubspot: "från 900 kr", monday: "från 120 kr", excel: "från 90 kr" },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === "yes") return <Check className="w-4 h-4 text-emerald-400" />;
  if (value === "no") return <X className="w-4 h-4 text-white/15" />;
  if (value === "partial") return <Minus className="w-4 h-4 text-amber-400/60" />;
  return <span className="text-[12px] text-white/50 font-medium">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="py-32 px-6 relative">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-4">
            Jämförelse
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold font-[family-name:var(--font-heading)] text-foreground leading-[1.1]">
            Varför MarketFlow?
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground">
            Se hur vi jämförs med alternativen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/[0.06] rounded-[20px] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left px-6 py-4 text-[12px] font-semibold text-white/40 uppercase tracking-wider w-[200px]">
                    Funktion
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                      <div className="w-5 h-5 bg-primary rounded-md flex items-center justify-center">
                        <span className="text-[8px] font-bold text-white">M</span>
                      </div>
                      <span className="text-[12px] font-semibold text-primary">MarketFlow</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <span className="text-[12px] font-semibold text-white/40">HubSpot</span>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <span className="text-[12px] font-semibold text-white/40">Monday</span>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <span className="text-[12px] font-semibold text-white/40">Excel</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/[0.03] ${i % 2 === 0 ? "" : "bg-white/[0.01]"} hover:bg-white/[0.03] transition-colors`}
                  >
                    <td className="px-6 py-3.5 text-[13px] text-white/60 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <div className="flex justify-center">
                        <CellIcon value={row.marketflow} />
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <div className="flex justify-center">
                        <CellIcon value={row.hubspot} />
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <div className="flex justify-center">
                        <CellIcon value={row.monday} />
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <div className="flex justify-center">
                        <CellIcon value={row.excel} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="text-center text-[11px] text-white/15 mt-4">
          Jämförelsen baserad på standardplaner. Funktioner kan variera beroende på plan och tillägg.
        </p>
      </div>
    </section>
  );
}
