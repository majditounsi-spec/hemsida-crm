"use server";

import { db } from "../../db/index";
import { contacts, googleAdsDailyBudgets } from "../../db/schema";
import { eq, desc, inArray, gte, lte, and } from "drizzle-orm";
import type { Contact, GoogleAdsDailyBudget } from "@/types/crm";

export async function fetchContactsAction(): Promise<Contact[]> {
  const result = await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  // Convert dates and nulls
  return result.map(c => ({
    id: c.id,
    name: c.name,
    website: c.website || undefined,
    platform: c.platform || undefined,
    service: c.service || undefined,
    status: (c.status as any) || undefined,
    budget: c.budget || undefined,
    rating: c.rating || undefined,
    contact_person: c.contactPerson || undefined,
    seller: c.seller || undefined,
    phone: c.phone || undefined,
    emails: c.emails || undefined,
    google_ads_customer_id: c.googleAdsCustomerId || undefined,
    start_date: c.startDate || undefined,
    end_date: c.endDate || undefined,
    comment: c.comment || undefined,
    has_report: c.hasReport || undefined,
    created_at: c.createdAt?.toISOString() || undefined,
  }));
}

export async function addContactAction(contact: Omit<Contact, "id" | "created_at">) {
  const [inserted] = await db.insert(contacts).values({
    name: contact.name,
    website: contact.website,
    platform: contact.platform,
    service: contact.service,
    status: contact.status,
    budget: contact.budget,
    rating: contact.rating,
    contactPerson: contact.contact_person,
    seller: contact.seller,
    phone: contact.phone,
    emails: contact.emails,
    googleAdsCustomerId: contact.google_ads_customer_id,
    startDate: contact.start_date,
    endDate: contact.end_date,
    comment: contact.comment,
    hasReport: contact.has_report,
  }).returning();
  
  return { data: { ...contact, id: inserted.id, created_at: inserted.createdAt?.toISOString() } as Contact, error: null };
}

export async function updateContactAction(contact: Partial<Contact> & { id: string }) {
  const { id, ...updates } = contact;
  const [updated] = await db.update(contacts).set({
    name: updates.name,
    website: updates.website,
    platform: updates.platform,
    service: updates.service,
    status: updates.status,
    budget: updates.budget,
    rating: updates.rating,
    contactPerson: updates.contact_person,
    seller: updates.seller,
    phone: updates.phone,
    emails: updates.emails,
    googleAdsCustomerId: updates.google_ads_customer_id,
    startDate: updates.start_date,
    endDate: updates.end_date,
    comment: updates.comment,
    hasReport: updates.has_report,
  }).where(eq(contacts.id, id)).returning();

  return { data: { ...updated, id: updated.id } as unknown as Contact, error: null };
}

export async function deleteContactAction(id: string) {
  await db.delete(contacts).where(eq(contacts.id, id));
  return { error: null };
}

export async function fetchBudgetsAction(contactIds: string[], dateFrom: string, dateTo: string): Promise<GoogleAdsDailyBudget[]> {
  if (contactIds.length === 0) return [];
  const result = await db.select().from(googleAdsDailyBudgets).where(
    and(
      inArray(googleAdsDailyBudgets.contactId, contactIds),
      gte(googleAdsDailyBudgets.date, dateFrom),
      lte(googleAdsDailyBudgets.date, dateTo)
    )
  ).orderBy(googleAdsDailyBudgets.date);
  
  return result.map(b => ({
    id: b.id,
    contact_id: b.contactId,
    date: b.date,
    campaign_name: b.campaignName || undefined,
    daily_budget: b.dailyBudget ? parseFloat(b.dailyBudget) : undefined,
    daily_spend: b.dailySpend ? parseFloat(b.dailySpend) : undefined,
    impressions: b.impressions || undefined,
    clicks: b.clicks || undefined,
    conversions: b.conversions || undefined,
    created_at: b.createdAt?.toISOString() || undefined,
  }));
}

export async function addBudgetEntryAction(entry: Omit<GoogleAdsDailyBudget, "id" | "created_at">) {
  const [inserted] = await db.insert(googleAdsDailyBudgets).values({
    contactId: entry.contact_id,
    date: entry.date,
    campaignName: entry.campaign_name,
    dailyBudget: entry.daily_budget ? entry.daily_budget.toString() : "0",
    dailySpend: entry.daily_spend ? entry.daily_spend.toString() : "0",
    impressions: entry.impressions,
    clicks: entry.clicks,
    conversions: entry.conversions,
  }).onConflictDoUpdate({
    target: [googleAdsDailyBudgets.contactId, googleAdsDailyBudgets.date, googleAdsDailyBudgets.campaignName],
    set: {
      dailyBudget: entry.daily_budget ? entry.daily_budget.toString() : "0",
      dailySpend: entry.daily_spend ? entry.daily_spend.toString() : "0",
      impressions: entry.impressions,
      clicks: entry.clicks,
      conversions: entry.conversions,
    }
  }).returning();

  return { data: { ...entry, id: inserted.id, created_at: inserted.createdAt?.toISOString() } as GoogleAdsDailyBudget, error: null };
}

export async function deleteBudgetEntryAction(id: string) {
  await db.delete(googleAdsDailyBudgets).where(eq(googleAdsDailyBudgets.id, id));
  return { error: null };
}
