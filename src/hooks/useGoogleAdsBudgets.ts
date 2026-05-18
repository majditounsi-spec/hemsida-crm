"use client";

import { useState, useCallback } from "react";
import { fetchBudgetsAction, addBudgetEntryAction, deleteBudgetEntryAction } from "@/app/actions";
import type { GoogleAdsDailyBudget } from "@/types/crm";

export function useGoogleAdsBudgets() {
  const [budgets, setBudgets] = useState<GoogleAdsDailyBudget[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchBudgets = useCallback(
    async (contactIds: string[], dateFrom: string, dateTo: string) => {
      setLoading(true);
      try {
        const data = await fetchBudgetsAction(contactIds, dateFrom, dateTo);
        setBudgets(data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    },
    []
  );

  async function addBudgetEntry(entry: Omit<GoogleAdsDailyBudget, "id" | "created_at">) {
    try {
      const { data, error } = await addBudgetEntryAction(entry);
      if (!error && data) {
        setBudgets((prev) => [...prev.filter((b) => b.id !== data.id), data]);
      }
      return { data, error };
    } catch (e) {
      return { error: e };
    }
  }

  async function deleteBudgetEntry(id: string) {
    try {
      const { error } = await deleteBudgetEntryAction(id);
      if (!error) {
        setBudgets((prev) => prev.filter((b) => b.id !== id));
      }
      return { error };
    } catch (e) {
      return { error: e };
    }
  }

  return { budgets, loading, fetchBudgets, addBudgetEntry, deleteBudgetEntry };
}
