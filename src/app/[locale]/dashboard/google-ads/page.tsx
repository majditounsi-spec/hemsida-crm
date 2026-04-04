"use client";

import { useContacts } from "@/hooks/useContacts";
import { useGoogleAdsBudgets } from "@/hooks/useGoogleAdsBudgets";
import { motion } from "framer-motion";
import { BarChart3, DollarSign, Users, TrendingUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

export default function GoogleAdsPage() {
  const { contacts, loading: contactsLoading } = useContacts();
  const { budgets, loading: budgetsLoading, fetchBudgets } = useGoogleAdsBudgets();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const year = new Date().getFullYear();

  const adsContacts = useMemo(
    () => contacts.filter((c) => c.service?.includes("Google ADS")),
    [contacts]
  );

  useEffect(() => {
    if (adsContacts.length > 0) {
      const dateFrom = `${year}-${String(selectedMonth + 1).padStart(2, "0")}-01`;
      const lastDay = new Date(year, selectedMonth + 1, 0).getDate();
      const dateTo = `${year}-${String(selectedMonth + 1).padStart(2, "0")}-${lastDay}`;
      fetchBudgets(
        adsContacts.map((c) => c.id),
        dateFrom,
        dateTo
      );
    }
  }, [adsContacts, selectedMonth, year, fetchBudgets]);

  const totalMonthlyBudget = adsContacts.reduce((sum, c) => sum + (c.budget || 0), 0);
  const totalMonthlySpend = budgets.reduce((sum, b) => sum + (b.daily_spend || 0), 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Google ADS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "ADS-kunder", value: adsContacts.length, icon: Users, color: "text-blue-500 bg-blue-50" },
          { label: "Månadsbudget", value: `${(totalMonthlyBudget / 1000).toFixed(0)}k`, icon: DollarSign, color: "text-purple-500 bg-purple-50" },
          { label: "Månadsutgift", value: `${(totalMonthlySpend / 1000).toFixed(0)}k`, icon: TrendingUp, color: "text-emerald-500 bg-emerald-50" },
          { label: "Årsbudget", value: `${((totalMonthlyBudget * 12) / 1000).toFixed(0)}k`, icon: BarChart3, color: "text-orange-500 bg-orange-50" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xl font-bold font-[family-name:var(--font-heading)]">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap">
        {months.map((m, i) => (
          <button
            key={m}
            onClick={() => setSelectedMonth(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              selectedMonth === i
                ? "bg-primary text-white"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {contactsLoading || budgetsLoading ? (
          <div className="p-8 text-center text-muted-foreground">Laddar...</div>
        ) : adsContacts.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            Inga kunder med Google ADS-tjänst hittades
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground sticky left-0 bg-muted/50">Kund</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-muted-foreground">Budget</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-muted-foreground">Spenderat</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-muted-foreground">Klick</th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-muted-foreground">Konverteringar</th>
                </tr>
              </thead>
              <tbody>
                {adsContacts.map((contact) => {
                  const contactBudgets = budgets.filter((b) => b.contact_id === contact.id);
                  const spend = contactBudgets.reduce((s, b) => s + (b.daily_spend || 0), 0);
                  const clicks = contactBudgets.reduce((s, b) => s + (b.clicks || 0), 0);
                  const conversions = contactBudgets.reduce((s, b) => s + (b.conversions || 0), 0);
                  return (
                    <tr key={contact.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium sticky left-0 bg-card">{contact.name}</td>
                      <td className="px-4 py-3 text-sm text-right">{contact.budget?.toLocaleString("sv-SE")} kr</td>
                      <td className="px-4 py-3 text-sm text-right">{spend.toLocaleString("sv-SE")} kr</td>
                      <td className="px-4 py-3 text-sm text-right">{clicks.toLocaleString("sv-SE")}</td>
                      <td className="px-4 py-3 text-sm text-right">{conversions}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
