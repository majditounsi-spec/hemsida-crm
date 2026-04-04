"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Contact } from "@/types/crm";

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setContacts(data);
    }
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  async function addContact(contact: Omit<Contact, "id" | "created_at">) {
    const { data, error } = await supabase
      .from("contacts")
      .insert(contact)
      .select()
      .single();

    if (!error && data) {
      setContacts((prev) => [data, ...prev]);
    }
    return { data, error };
  }

  async function updateContact(contact: Partial<Contact> & { id: string }) {
    const { id, ...updates } = contact;
    const { data, error } = await supabase
      .from("contacts")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (!error && data) {
      setContacts((prev) => prev.map((c) => (c.id === id ? data : c)));
    }
    return { data, error };
  }

  async function deleteContact(id: string) {
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (!error) {
      setContacts((prev) => prev.filter((c) => c.id !== id));
    }
    return { error };
  }

  return { contacts, loading, fetchContacts, addContact, updateContact, deleteContact };
}
