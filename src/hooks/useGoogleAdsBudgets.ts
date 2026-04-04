"use client";

import { useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { GoogleAdsDailyBudget } from "@/types/crm";

export function useGoogleAdsBudgets() {
  const [budgets, setBudgets] = useState<GoogleAdsDailyBudget[]>([]);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const fetchBudgets = useCallback(
    async (contactIds: string[], dateFrom: string, dateTo: string) => {
      setLoading(true);
      const { data, error } = await supabase
        .from("google_ads_daily_budgets")
        .select("*")
        .in("contact_id", contactIds)
        .gte("date", dateFrom)
        .lte("date", dateTo)
        .order("date", { ascending: true });

      if (!error && data) {
        setBudgets(data);
      }
      setLoading(false);
    },
    [supabase]
  );

  async function addBudgetEntry(entry: Omit<GoogleAdsDailyBudget, "id" | "created_at">) {
    const { data, error } = await supabase
      .from("google_ads_daily_budgets")
      .upsert(entry, { onConflict: "contact_id,date,campaign_name" })
      .select()
      .single();

    if (!error && data) {
      setBudgets((prev) => [...prev.filter((b) => b.id !== data.id), data]);
    }
    return { data, error };
  }

  async function deleteBudgetEntry(id: string) {
    const { error } = await supabase
      .from("google_ads_daily_budgets")
      .delete()
      .eq("id", id);
    if (!error) {
      setBudgets((prev) => prev.filter((b) => b.id !== id));
    }
    return { error };
  }

  return { budgets, loading, fetchBudgets, addBudgetEntry, deleteBudgetEntry };
}
