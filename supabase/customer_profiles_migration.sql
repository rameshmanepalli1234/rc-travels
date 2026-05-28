-- Run in Supabase SQL Editor if you already created customer_profiles earlier

alter table public.customer_profiles
  add column if not exists first_name text not null default '',
  add column if not exists last_name text not null default '',
  add column if not exists date_of_birth date;

-- Backfill first/last from full_name where empty
update public.customer_profiles
set
  first_name = split_part(trim(full_name), ' ', 1),
  last_name = case
    when position(' ' in trim(full_name)) > 0 then
      substring(trim(full_name) from position(' ' in trim(full_name)) + 1)
    else ''
  end
where (first_name = '' or first_name is null)
  and full_name <> '';
