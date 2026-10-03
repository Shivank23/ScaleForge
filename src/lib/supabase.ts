import { createClient } from "@supabase/supabase-js";

// Supabase Project Configuration
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || "https://yqzjtmsxuveckjmatwuu.supabase.co";

export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Initialize client if anon key is available
export const supabase = SUPABASE_ANON_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export const isSupabaseConfigured = Boolean(supabase && SUPABASE_ANON_KEY);

/**
 * Interface Definitions for ScaleForge Database Tables
 */
export interface ConsultationBooking {
  id?: string;
  name: string;
  email: string;
  company?: string;
  priority: string;
  selected_date: string;
  selected_time: string;
  notes?: string;
  created_at?: string;
}

export interface PipelineSimulationRecord {
  id?: string;
  icp_name: string;
  monthly_leads: number;
  deal_value_acv: number;
  projected_pipeline: number;
  projected_closed_revenue: number;
  roi_multiple: number;
  contact_email?: string;
  created_at?: string;
}

export interface DiagnosticRecord {
  id?: string;
  company_name: string;
  email: string;
  stage: string;
  score: number;
  readiness_grade: string;
  answers: Record<string, unknown>;
  created_at?: string;
}

/**
 * Database Operation Helpers
 */

// 1. Save Consultation Booking
export async function saveConsultationBooking(booking: ConsultationBooking) {
  // Method A: Direct Backend Serverless API (Connects to PostgreSQL database)
  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    if (res.ok) {
      const json = await res.json();
      return { success: true, data: json.data };
    }
  } catch {
    // API endpoint might not be active in pure static dev without backend, continue to fallback
  }

  // Method B: Client-side Supabase SDK
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("consultation_bookings")
        .insert([
          {
            name: booking.name,
            email: booking.email,
            company: booking.company || "Enterprise Lead",
            priority: booking.priority,
            selected_date: booking.selected_date,
            selected_time: booking.selected_time,
            notes: booking.notes || null,
          },
        ])
        .select();

      if (!error && data) return { success: true, data };
    } catch (err) {
      console.warn("Supabase direct insert warning:", err);
    }
  }

  // Method C: Resilient local fallback
  const existing = JSON.parse(localStorage.getItem("scaleforge_bookings") || "[]");
  existing.push({ ...booking, timestamp: new Date().toISOString() });
  localStorage.setItem("scaleforge_bookings", JSON.stringify(existing));
  return { success: true, localFallback: true };
}

// 2. Save Pipeline Simulator Run
export async function savePipelineSimulation(sim: PipelineSimulationRecord) {
  // Method A: Direct Backend Serverless API
  try {
    const res = await fetch("/api/simulation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sim),
    });
    if (res.ok) {
      const json = await res.json();
      return { success: true, data: json.data };
    }
  } catch {
    // Fallback
  }

  // Method B: Supabase client SDK
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("pipeline_simulations")
        .insert([
          {
            icp_name: sim.icp_name,
            monthly_leads: sim.monthly_leads,
            deal_value_acv: sim.deal_value_acv,
            projected_pipeline: sim.projected_pipeline,
            projected_closed_revenue: sim.projected_closed_revenue,
            roi_multiple: sim.roi_multiple,
            contact_email: sim.contact_email || null,
          },
        ])
        .select();

      if (!error && data) return { success: true, data };
    } catch (err) {
      console.warn("Supabase simulation insert warning:", err);
    }
  }

  return { success: true, localFallback: true };
}

// 3. Save Diagnostic Results
export async function saveDiagnosticAssessment(diagnostic: DiagnosticRecord) {
  // Method A: Direct Backend Serverless API
  try {
    const res = await fetch("/api/diagnostic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(diagnostic),
    });
    if (res.ok) {
      const json = await res.json();
      return { success: true, data: json.data };
    }
  } catch {
    // Fallback
  }

  // Method B: Supabase client SDK
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("diagnostic_assessments")
        .insert([
          {
            company_name: diagnostic.company_name,
            email: diagnostic.email,
            stage: diagnostic.stage,
            score: diagnostic.score,
            readiness_grade: diagnostic.readiness_grade,
            answers: diagnostic.answers,
          },
        ])
        .select();

      if (!error && data) return { success: true, data };
    } catch (err) {
      console.warn("Supabase diagnostic insert warning:", err);
    }
  }

  return { success: true, localFallback: true };
}
