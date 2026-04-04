"use client";

import { mockAutomations } from "@/data/mockData";
import { motion } from "framer-motion";
import { Zap, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import type { Automation } from "@/types/crm";

export default function AutomationsPage() {
  const [automations, setAutomations] = useState<Automation[]>(mockAutomations);

  function toggleActive(id: string) {
    setAutomations((prev) =>
      prev.map((a) => (a.id === id ? { ...a, active: !a.active } : a))
    );
  }

  function deleteAutomation(id: string) {
    setAutomations((prev) => prev.filter((a) => a.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">Automationer</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90">
          <Plus className="w-4 h-4" />
          Ny automation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {automations.map((auto, i) => (
          <motion.div
            key={auto.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-xl p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${auto.active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{auto.name}</h3>
                  {auto.lastRun && (
                    <p className="text-xs text-muted-foreground">Senast: {auto.lastRun}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleActive(auto.id)}
                  className={`relative w-10 h-5 rounded-full transition-colors ${
                    auto.active ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                      auto.active ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
                <button
                  onClick={() => deleteAutomation(auto.id)}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground w-14">Trigger:</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded">{auto.trigger}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground w-14">Action:</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded">{auto.action}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
