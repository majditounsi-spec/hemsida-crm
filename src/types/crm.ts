export type ProjectStatus = "done" | "working" | "stuck" | "pending" | "review";
export type ProjectPriority = "low" | "medium" | "high" | "critical";
export type ContactStatus = "active" | "paused" | "completed" | "pending";

export interface Contact {
  id: string;
  name: string;
  website?: string;
  platform?: string;
  service?: string;
  status?: ContactStatus;
  budget?: number;
  rating?: number;
  contact_person?: string;
  seller?: string;
  phone?: string;
  emails?: string[];
  google_ads_customer_id?: string;
  start_date?: string;
  end_date?: string;
  comment?: string;
  has_report?: boolean;
  created_at?: string;
}

export interface GoogleAdsDailyBudget {
  id: string;
  contact_id: string;
  date: string;
  campaign_name?: string;
  daily_budget?: number;
  daily_spend?: number;
  impressions?: number;
  clicks?: number;
  conversions?: number;
  created_at?: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  deadline: string;
  budget: number;
  spent: number;
  assignee: string;
  tags: string[];
  createdAt: string;
}

export interface TimeEntry {
  id: string;
  projectId: string;
  projectName: string;
  description: string;
  hours: number;
  date: string;
  assignee: string;
}

export interface Automation {
  id: string;
  name: string;
  trigger: string;
  action: string;
  active: boolean;
  lastRun?: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  completed: boolean;
  assignee: string;
  createdAt: string;
}
