"use client";

import { useContacts } from "@/hooks/useContacts";
import { motion } from "framer-motion";
import { Plus, Search, Users, Star, DollarSign, UserCheck } from "lucide-react";
import { useState } from "react";
import type { ContactStatus } from "@/types/crm";

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  paused: "bg-yellow-100 text-yellow-700",
  completed: "bg-blue-100 text-blue-700",
  pending: "bg-gray-100 text-gray-700",
};

export default function ContactsPage() {
  const { contacts, loading } = useContacts();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ContactStatus | "all">("all");

  const filtered = contacts.filter((c) => {
    const matchesSearch =
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.seller?.toLowerCase().includes(search.toLowerCase()) ||
      c.service?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const activeCount = contacts.filter((c) => c.status === "active").length;
  const totalBudget = contacts.reduce((sum, c) => sum + (c.budget || 0), 0);
  const avgBudget = contacts.length > 0 ? totalBudget / contacts.length : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Kontakter</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          Lägg till kund
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Totalt kunder", value: contacts.length, icon: Users, color: "text-blue-500 bg-blue-50" },
          { label: "Aktiva", value: activeCount, icon: UserCheck, color: "text-green-500 bg-green-50" },
          { label: "Total budget", value: `${(totalBudget / 1000).toFixed(0)}k`, icon: DollarSign, color: "text-purple-500 bg-purple-50" },
          { label: "Snitt budget", value: `${(avgBudget / 1000).toFixed(0)}k`, icon: Star, color: "text-orange-500 bg-orange-50" },
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

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Sök kunder..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "active", "paused", "pending", "completed"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === s
                  ? "bg-primary text-white"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {s === "all" ? "Alla" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground">Laddar...</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">Inga kunder hittades</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase">Namn</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase">Tjänst</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase">Budget</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase">Säljare</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase">Betyg</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((contact, i) => (
                  <motion.tr
                    key={contact.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="border-b border-border hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium">{contact.name}</p>
                      {contact.website && (
                        <p className="text-xs text-muted-foreground">{contact.website}</p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm">{contact.service || "—"}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          statusColors[contact.status || "pending"]
                        }`}
                      >
                        {contact.status || "pending"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {contact.budget ? `${contact.budget.toLocaleString("sv-SE")} kr` : "—"}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {contact.seller || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-0.5">
                        {[1, 2, 3].map((star) => (
                          <Star
                            key={star}
                            className={`w-3.5 h-3.5 ${
                              star <= (contact.rating || 0)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
