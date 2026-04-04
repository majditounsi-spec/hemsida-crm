"use client";

import { mockTimeEntries } from "@/data/mockData";
import { motion } from "framer-motion";
import { Clock, Plus } from "lucide-react";

export default function TimePage() {
  const totalHours = mockTimeEntries.reduce((sum, e) => sum + e.hours, 0);
  const todayEntries = mockTimeEntries.filter((e) => e.date === "2026-04-04");
  const todayHours = todayEntries.reduce((sum, e) => sum + e.hours, 0);

  const grouped = mockTimeEntries.reduce(
    (acc, entry) => {
      if (!acc[entry.date]) acc[entry.date] = [];
      acc[entry.date].push(entry);
      return acc;
    },
    {} as Record<string, typeof mockTimeEntries>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Tidloggning</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" />
          Logga tid
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-500">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold font-[family-name:var(--font-heading)]">{totalHours}h</p>
              <p className="text-sm text-muted-foreground">Totalt loggat</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-500">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold font-[family-name:var(--font-heading)]">{todayHours}h</p>
              <p className="text-sm text-muted-foreground">Idag</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(grouped)
          .sort(([a], [b]) => b.localeCompare(a))
          .map(([date, entries]) => (
            <div key={date}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">{date}</h3>
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                {entries.map((entry, i) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center justify-between px-4 py-3 border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium">{entry.projectName}</p>
                      <p className="text-xs text-muted-foreground">{entry.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-sm font-semibold">{entry.hours}h</p>
                      <p className="text-xs text-muted-foreground">{entry.assignee}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
