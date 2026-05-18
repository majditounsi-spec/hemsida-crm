"use client";

import { useState, useEffect, useCallback } from "react";
import { fetchContactsAction, addContactAction, updateContactAction, deleteContactAction } from "@/app/actions";
import type { Contact } from "@/types/crm";

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchContactsAction();
      setContacts(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  async function addContact(contact: Omit<Contact, "id" | "created_at">) {
    try {
      const { data, error } = await addContactAction(contact);
      if (!error && data) {
        setContacts((prev) => [data, ...prev]);
      }
      return { data, error };
    } catch (e) {
      return { error: e };
    }
  }

  async function updateContact(contact: Partial<Contact> & { id: string }) {
    try {
      const { data, error } = await updateContactAction(contact);
      if (!error && data) {
        setContacts((prev) => prev.map((c) => (c.id === contact.id ? data : c)));
      }
      return { data, error };
    } catch (e) {
      return { error: e };
    }
  }

  async function deleteContact(id: string) {
    try {
      const { error } = await deleteContactAction(id);
      if (!error) {
        setContacts((prev) => prev.filter((c) => c.id !== id));
      }
      return { error };
    } catch (e) {
      return { error: e };
    }
  }

  return { contacts, loading, fetchContacts, addContact, updateContact, deleteContact };
}
