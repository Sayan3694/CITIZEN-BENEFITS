-- SchemeSaathi West Bengal Welfare Discovery Platform
-- Run this SQL once inside your Supabase SQL Editor (Project ID: mfkqjukpwcxsncqvlqxh)
-- Privacy-first schema: stores only optional, non-sensitive household welfare inputs
-- (never collects Aadhaar, bank accounts, OTPs, or identity uploads).

create extension if not exists pgcrypto;

-- 1. Citizen Household Profiles
create table if not exists public.citizen_profiles (
  id uuid primary key default gen_random_uuid(),
  client_session_id text not null unique,
  age_range text default '',
  state text not null default 'West Bengal',
  district text default '',
  residence_type text default '',
  income_range text default '',
  family_size integer not null default 4 check (family_size >= 1 and family_size <= 20),
  employment_status text default '',
  is_student boolean not null default false,
  student_level text default '',
  student_merit_60_plus boolean not null default false,
  wants_skill_or_apprenticeship boolean not null default false,
  wants_business_loan boolean not null default false,
  has_farmer_in_family boolean not null default false,
  farmer_land_type text default '',
  has_senior_citizen boolean not null default false,
  has_senior_70_plus boolean not null default false,
  has_widow_in_family boolean not null default false,
  has_disability_in_family boolean not null default false,
  has_women_in_household boolean not null default false,
  women_age_bracket text default '',
  needs_housing_support boolean not null default false,
  needs_ration_or_food_support boolean not null default false,
  matched_scheme_ids text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Custom Household Members (Benefits for Your Family)
create table if not exists public.family_members (
  id uuid primary key default gen_random_uuid(),
  client_session_id text not null,
  local_member_id text not null,
  member_name text not null,
  relation text default 'Household Member',
  age_description text default '',
  roles text[] not null default '{}',
  created_at timestamptz not null default now(),
  unique (client_session_id, local_member_id)
);

-- 3. Saved Schemes & Application Stage Tracker
create table if not exists public.scheme_bookmarks (
  id uuid primary key default gen_random_uuid(),
  client_session_id text not null,
  scheme_id text not null,
  is_saved boolean not null default true,
  application_stage text,
  note text default '',
  updated_at timestamptz not null default now(),
  unique (client_session_id, scheme_id)
);

-- 4. Document Preparation Checklist
create table if not exists public.document_checklist_items (
  id uuid primary key default gen_random_uuid(),
  client_session_id text not null,
  document_name text not null,
  is_prepared boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (client_session_id, document_name)
);

-- Enable Row Level Security (RLS) on all tables
alter table public.citizen_profiles enable row level security;
alter table public.family_members enable row level security;
alter table public.scheme_bookmarks enable row level security;
alter table public.document_checklist_items enable row level security;

-- Scoped anonymous policies for publishable key access
-- Requires a non-empty client_session_id of at least 16 characters
create policy "Allow insert citizen_profiles with session id"
  on public.citizen_profiles for insert to anon, authenticated
  with check (char_length(client_session_id) >= 16);

create policy "Allow select citizen_profiles by session id"
  on public.citizen_profiles for select to anon, authenticated
  using (char_length(client_session_id) >= 16);

create policy "Allow update citizen_profiles by session id"
  on public.citizen_profiles for update to anon, authenticated
  using (char_length(client_session_id) >= 16)
  with check (char_length(client_session_id) >= 16);

create policy "Allow delete citizen_profiles by session id"
  on public.citizen_profiles for delete to anon, authenticated
  using (char_length(client_session_id) >= 16);

create policy "Allow manage family_members with session id"
  on public.family_members for all to anon, authenticated
  using (char_length(client_session_id) >= 16)
  with check (char_length(client_session_id) >= 16);

create policy "Allow manage scheme_bookmarks with session id"
  on public.scheme_bookmarks for all to anon, authenticated
  using (char_length(client_session_id) >= 16)
  with check (char_length(client_session_id) >= 16);

create policy "Allow manage document_checklist_items with session id"
  on public.document_checklist_items for all to anon, authenticated
  using (char_length(client_session_id) >= 16)
  with check (char_length(client_session_id) >= 16);
