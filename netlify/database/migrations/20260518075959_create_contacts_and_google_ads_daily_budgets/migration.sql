CREATE TABLE "contacts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"website" text,
	"platform" text,
	"service" text,
	"status" text DEFAULT 'pending',
	"budget" integer DEFAULT 0,
	"rating" integer DEFAULT 0,
	"contact_person" text,
	"seller" text,
	"phone" text,
	"emails" text[],
	"google_ads_customer_id" text,
	"start_date" date,
	"end_date" date,
	"comment" text,
	"has_report" boolean DEFAULT false,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "google_ads_daily_budgets" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"contact_id" uuid NOT NULL,
	"date" date NOT NULL,
	"campaign_name" text DEFAULT 'default',
	"daily_budget" numeric(10,2) DEFAULT '0',
	"daily_spend" numeric(10,2) DEFAULT '0',
	"impressions" integer DEFAULT 0,
	"clicks" integer DEFAULT 0,
	"conversions" integer DEFAULT 0,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "google_ads_daily_budgets_contact_id_date_campaign_name_unique" UNIQUE("contact_id","date","campaign_name")
);
--> statement-breakpoint
ALTER TABLE "google_ads_daily_budgets" ADD CONSTRAINT "google_ads_daily_budgets_contact_id_contacts_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE CASCADE;