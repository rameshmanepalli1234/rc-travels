-- Run this in Supabase Dashboard → SQL Editor (free tier)
-- https://supabase.com/dashboard

create table if not exists public.customer_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text not null default '',
  last_name text not null default '',
  full_name text not null default '',
  phone text not null default '',
  date_of_birth date,
  city text,
  updated_at timestamptz not null default now()
);

alter table public.customer_profiles enable row level security;

create policy "Users can view own profile"
  on public.customer_profiles for select
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.customer_profiles for insert
  with check (auth.uid() = id);

create policy "Users can update own profile"
  on public.customer_profiles for update
  using (auth.uid() = id);

-- Auto-create profile row when a customer signs up (Google creates user on first login)
create or replace function public.handle_new_customer()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  display_name text;
  name_parts text[];
begin
  display_name := coalesce(
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'name',
    ''
  );

  name_parts := string_to_array(trim(display_name), ' ');

  insert into public.customer_profiles (
    id,
    first_name,
    last_name,
    full_name,
    phone,
    city
  )
  values (
    new.id,
    coalesce(name_parts[1], ''),
    coalesce(
      case when array_length(name_parts, 1) > 1 then
        array_to_string(name_parts[2:array_length(name_parts, 1)], ' ')
      else '' end,
      ''
    ),
    display_name,
    coalesce(new.raw_user_meta_data->>'phone', ''),
    null
  );

  return new;
end;
$$;

drop trigger if exists on_auth_customer_created on auth.users;
create trigger on_auth_customer_created
  after insert on auth.users
  for each row execute procedure public.handle_new_customer();
