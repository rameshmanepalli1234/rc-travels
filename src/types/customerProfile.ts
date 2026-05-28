export type CustomerProfile = {
  id: string;
  first_name: string;
  last_name: string;
  full_name: string;
  phone: string;
  date_of_birth: string | null;
  city: string | null;
  updated_at: string;
};

export type CustomerProfileUpdate = {
  first_name: string;
  last_name: string;
  full_name: string;
  phone: string;
  date_of_birth: string | null;
  city: string | null;
};
