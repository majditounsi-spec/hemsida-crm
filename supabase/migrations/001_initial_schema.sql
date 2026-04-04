-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  website TEXT,
  platform TEXT,
  service TEXT,
  status TEXT DEFAULT 'pending',
  budget INTEGER DEFAULT 0,
  rating INTEGER DEFAULT 0,
  contact_person TEXT,
  seller TEXT,
  phone TEXT,
  emails TEXT[],
  google_ads_customer_id TEXT,
  start_date DATE,
  end_date DATE,
  comment TEXT,
  has_report BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Google Ads daily budgets
CREATE TABLE IF NOT EXISTS google_ads_daily_budgets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  campaign_name TEXT DEFAULT 'default',
  daily_budget NUMERIC(10,2) DEFAULT 0,
  daily_spend NUMERIC(10,2) DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(contact_id, date, campaign_name)
);

CREATE INDEX IF NOT EXISTS idx_google_ads_budgets_contact_date
  ON google_ads_daily_budgets(contact_id, date);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE google_ads_daily_budgets ENABLE ROW LEVEL SECURITY;

-- RLS policies: authenticated users only
CREATE POLICY "Authenticated users can read contacts"
  ON contacts FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert contacts"
  ON contacts FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update contacts"
  ON contacts FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contacts"
  ON contacts FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can read budgets"
  ON google_ads_daily_budgets FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert budgets"
  ON google_ads_daily_budgets FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update budgets"
  ON google_ads_daily_budgets FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete budgets"
  ON google_ads_daily_budgets FOR DELETE TO authenticated USING (true);
