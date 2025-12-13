# Vercel Environment Variables Setup

## Required Environment Variables

You only need to set **ONE** environment variable in your Vercel project:

### 1. ACCESS_KEY

- **Value**: `u34kkfe993943kkjerufj3343334h`
- **Purpose**: Required by the AccessControl component to allow the app to render
- **Environment**: Production, Preview, Development

## How to Set Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project (`aditya-car-zone`)
3. Go to **Settings** tab
4. Click on **Environment Variables**
5. Add the variable:
   - **Name**: `ACCESS_KEY`
   - **Value**: `u34kkfe993943kkjerufj3343334h`
   - **Environment**: Select all (Production, Preview, Development)
6. Click **Save**

## What NOT to Set

Do NOT set these variables in Vercel (they're handled automatically):

- `DEV_SERVER_PORT` - Only needed for local development
- `PUBLICURL` - Automatically set to `/` for production

## Verification

After setting the environment variable:

1. Redeploy your application
2. Check that the app loads properly (not a blank page)
3. You should see the Aditya Car Zone application

## Troubleshooting

If you still see a blank page:

1. Check that `ACCESS_KEY` is set correctly
2. Check the build logs in Vercel dashboard
3. Open browser dev tools to check for console errors
4. Ensure the environment variable is set for all environments (Production, Preview, Development)
