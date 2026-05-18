import { pgTable, text, timestamp, integer, uuid, boolean, date, numeric, unique } from "drizzle-orm/pg-core";

export const contacts = pgTable("contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  website: text("website"),
  platform: text("platform"),
  service: text("service"),
  status: text("status").default("pending"),
  budget: integer("budget").default(0),
  rating: integer("rating").default(0),
  contactPerson: text("contact_person"),
  seller: text("seller"),
  phone: text("phone"),
  emails: text("emails").array(),
  googleAdsCustomerId: text("google_ads_customer_id"),
  startDate: date("start_date"),
  endDate: date("end_date"),
  comment: text("comment"),
  hasReport: boolean("has_report").default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const googleAdsDailyBudgets = pgTable(
  "google_ads_daily_budgets",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    contactId: uuid("contact_id")
      .notNull()
      .references(() => contacts.id, { onDelete: "cascade" }),
    date: date("date").notNull(),
    campaignName: text("campaign_name").default("default"),
    dailyBudget: numeric("daily_budget", { precision: 10, scale: 2 }).default("0"),
    dailySpend: numeric("daily_spend", { precision: 10, scale: 2 }).default("0"),
    impressions: integer("impressions").default(0),
    clicks: integer("clicks").default(0),
    conversions: integer("conversions").default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    unq: unique().on(table.contactId, table.date, table.campaignName),
  })
);
