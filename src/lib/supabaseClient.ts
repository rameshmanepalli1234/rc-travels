import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { CustomerProfile } from "@/types/customerProfile";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = (): boolean =>
  Boolean(supabaseUrl.trim() && supabaseAnonKey.trim());

let client: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient | null => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  if (!client) {
    client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }

  return client;
};

export type Database = {
  public: {
    Tables: {
      customer_profiles: {
        Row: CustomerProfile;
        Insert: Omit<CustomerProfile, "updated_at"> & {
          updated_at?: string;
        };
        Update: Partial<CustomerProfile>;
      };
    };
  };
};
