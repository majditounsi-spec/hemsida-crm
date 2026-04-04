"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FolderKanban,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";

const stats = [
  { key: "activeProjects", value: "12", icon: FolderKanban, trend: "+2", color: "text-blue-500 bg-blue-50" },
  { key: "hoursToday", value: "6.5h", icon: Clock, trend: "+1.5", color: "text-emerald-500 bg-emerald-50" },
  { key: "totalBudget", value: "890k", icon: DollarSign, trend: "+15%", color: "text-purple-500 bg-purple-50" },
  { key: "totalCustomers", value: "47", icon: Users, trend: "+3", color: "text-orange-500 bg-orange-50" },
];

const recentProjects = [
  { name: "SEO Kampanj - TechStart AB", status: "working", priority: "high", budget: 45000, spent: 28000 },
  { name: "Webb - Nordic Food", status: "review", priority: "medium", budget: 75000, spent: 60000 },
  { name: "Google ADS - FashionBrand", status: "done", priority: "low", budget: 30000, spent: 29500 },
  { name: "META - GreenEnergy", status: "pending", priority: "high", budget: 55000, spent: 12000 },
];

const statusColors: Record<string, string> = {
  done: "bg-green-100 text-green-700",
  working: "bg-orange-100 text-orange-700",
  stuck: "bg-red-100 text-red-700",
  pending: "bg-blue-100 text-blue-700",
  review: "bg-purple-100 text-purple-700",
};

export default function DashboardPage() {
  const t = useTranslations("dashboard");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-[family-name:var(--font-heading)]">
          {t("title")}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">{t("welcome")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-lg ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs text-emerald-600 flex items-center gap-0.5">
                <TrendingUp className="w-3 h-3" />
                {stat.trend}
              </span>
            </div>
            <p className="mt-3 text-2xl font-bold font-[family-name:var(--font-heading)]">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">{t(stat.key)}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-4">
            {t("recentProjects")}
          </h2>
          <div className="space-y-3">
            {recentProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{project.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        statusColors[project.status]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-sm font-medium">
                    {Math.round((project.spent / project.budget) * 100)}%
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(project.spent / 1000).toFixed(0)}k / {(project.budget / 1000).toFixed(0)}k
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-4">
            {t("budgetOverview")}
          </h2>
          <div className="space-y-4">
            {recentProjects.map((project) => {
              const pct = Math.round((project.spent / project.budget) * 100);
              return (
                <div key={project.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm truncate max-w-[200px]">{project.name.split(" - ")[1]}</span>
                    <span className="text-sm font-medium">{pct}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
