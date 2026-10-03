-- ==============================================================================
-- SCALEFORGE SUPABASE DATABASE SCHEMA MIGRATION
-- Project: scaleforgeofficial1-glitch's Project (yqzjtmsxuveckjmatwuu)
-- ==============================================================================

-- 1. Create Consultation Bookings Table
CREATE TABLE IF NOT EXISTS public.consultation_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT DEFAULT 'Enterprise Lead',
    priority TEXT NOT NULL,
    selected_date TEXT NOT NULL,
    selected_time TEXT NOT NULL,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Pipeline Simulations Table
CREATE TABLE IF NOT EXISTS public.pipeline_simulations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    icp_name TEXT NOT NULL,
    monthly_leads NUMERIC NOT NULL,
    deal_value_acv NUMERIC NOT NULL,
    projected_pipeline NUMERIC NOT NULL,
    projected_closed_revenue NUMERIC NOT NULL,
    roi_multiple NUMERIC NOT NULL,
    contact_email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Diagnostic Assessments Table
CREATE TABLE IF NOT EXISTS public.diagnostic_assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name TEXT NOT NULL,
    email TEXT NOT NULL,
    stage TEXT NOT NULL,
    score NUMERIC NOT NULL,
    readiness_grade TEXT NOT NULL,
    answers JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Enable Row Level Security (RLS) on all tables
ALTER TABLE public.consultation_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pipeline_simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diagnostic_assessments ENABLE ROW LEVEL SECURITY;

-- 5. Create Public Insert Policies (Allows public website visitors to book & submit forms)
CREATE POLICY "Allow public inserts on consultation_bookings" 
ON public.consultation_bookings 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Allow public inserts on pipeline_simulations" 
ON public.pipeline_simulations 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Allow public inserts on diagnostic_assessments" 
ON public.diagnostic_assessments 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- 6. Create Indexes for High Performance Queries
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.consultation_bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_simulations_created_at ON public.pipeline_simulations (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_diagnostic_created_at ON public.diagnostic_assessments (created_at DESC);
