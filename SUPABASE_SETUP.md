# Customer login (free Supabase + Google)

Customer accounts use [Supabase](https://supabase.com) **free tier**:

- **Google sign-in only** (no email/password in the app)
- Session remembered on the next visit
- Profile stored in PostgreSQL (`customer_profiles`)

## 1. Create a Supabase project

1. Go to [https://supabase.com](https://supabase.com) and sign up (free).
2. **New project** → choose a name and database password.
3. Wait until the project is ready.

## 2. Run the database SQL

1. In Supabase: **SQL Editor** → **New query**.
2. Paste the contents of `supabase/customer_profiles.sql` from this repo.
3. Click **Run**.

If you already ran an older version of the SQL, also run `supabase/customer_profiles_migration.sql` to add `first_name`, `last_name`, and `date_of_birth` columns.

## 3. Enable Google auth

### In Supabase

1. **Authentication** → **Providers** → **Google** → Enable.
2. Copy the **Callback URL** shown (e.g. `https://YOUR_PROJECT.supabase.co/auth/v1/callback`).

### In Google Cloud Console

1. [Google Cloud Console](https://console.cloud.google.com/) → create or select a project.
2. **APIs & Services** → **Credentials** → **Create credentials** → **OAuth client ID**.
3. Application type: **Web application**.
4. **Authorized redirect URIs**: paste the Supabase callback URL from step 2.
5. Copy **Client ID** and **Client secret** into Supabase Google provider settings.

### Redirect URLs (Supabase)

**Authentication** → **URL Configuration** → **Redirect URLs**, add:

- `http://localhost:8080` (or your local dev URL from `yarn start`)
- `https://your-production-site.netlify.app` (your live site)

## 4. Add keys to `.env`

From **Project Settings** → **API**:

```env
REACT_APP_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your_anon_public_key
```

Restart `yarn start` after saving `.env`.

## 5. Netlify production

Add the same variables in **Site configuration** → **Environment variables**, then redeploy.

Add your Netlify URL to Supabase **Redirect URLs**.

## Using the app

- Click the **account icon** at the **far right** of the navbar → **Continue with Google**.
- **Existing customer:** Google signs them in; profile opens only if phone/name are missing.
- **New customer:** Supabase creates the account on first Google login, then the app asks for first name, phone, and optional last name, date of birth, and city.
- After sign-in: **Edit profile** / **Sign out**.

## Security notes

- Only the **anon** key goes in the frontend (safe with Row Level Security).
- Never put the **service_role** key in React or committed `.env`.
- `.env` is in `.gitignore`.
