# Deployment Guide for Aditya Car Zone

## Vercel Deployment

This application is configured to deploy on Vercel. Follow these steps to deploy successfully:

### 1. Environment Variables Required

You need to set these environment variables in your Vercel project settings:

#### Required Environment Variables:

- `ACCESS_KEY`: `u34kkfe993943kkjerufj3343334h` (Required for access control)
- `DEV_SERVER_PORT`: `3000` (For build process)
- `PUBLICURL`: `/` (For production build)

### 2. Vercel Configuration

The `vercel.json` file is already configured with:

- Build command: `yarn build` or `npm run build`
- Output directory: `dist`
- SPA routing for React Router
- Environment variables

### 3. Deployment Steps

1. **Connect your repository to Vercel**
2. **Set Environment Variables** in Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add the required variables listed above

3. **Deploy**:

   ```bash
   # If using Vercel CLI
   vercel --prod

   # Or push to your connected repository
   git push origin main
   ```

### 4. Common Issues and Solutions

#### Blank Page Issue

If you see a blank page after deployment, check:

1. **Access Key**: Ensure `ACCESS_KEY` is set to `u34kkfe993943kkjerufj3343334h`
2. **Build Logs**: Check Vercel build logs for any errors
3. **Console Errors**: Open browser dev tools to check for JavaScript errors

#### Build Failures

If the build fails:

1. **Node Version**: Ensure Node.js 20+ is used
2. **Dependencies**: Run `yarn install` locally to ensure all dependencies are available
3. **TypeScript Errors**: Run `yarn type-check` locally to catch any TypeScript issues

### 5. Local Development Setup

For local development, create a `.env` file in the root directory:

```env
DEV_SERVER_PORT=4099
PUBLICURL=http://localhost:4099
ACCESS_KEY=u34kkfe993943kkjerufj3343334h
```

### 6. Build Commands

- **Development**: `yarn dev` or `npm run dev`
- **Production Build**: `yarn build` or `npm run build`
- **Type Check**: `yarn type-check`
- **Lint**: `yarn lint`

### 7. Access Control

The application includes an access control system that validates the `ACCESS_KEY` environment variable. Without the correct key, users will see an "Access Denied" message.

### 8. Troubleshooting

#### If the app still shows blank page:

1. Check browser console for errors
2. Verify all environment variables are set in Vercel
3. Check the build logs in Vercel dashboard
4. Ensure the `ACCESS_KEY` matches exactly: `u34kkfe993943kkjerufj3343334h`

#### If build fails:

1. Check Node.js version (should be 20+)
2. Ensure all dependencies are installed
3. Check for TypeScript compilation errors
4. Verify webpack configuration

### 9. File Structure

The application uses:

- **Webpack** for bundling
- **TypeScript** for type safety
- **Styled Components** for styling
- **React Intl** for internationalization
- **Custom path aliases** for imports

### 10. Performance Optimization

The production build includes:

- Code splitting
- Asset optimization
- Source maps for debugging
- Minification and compression

## Support

If you encounter issues:

1. Check the build logs in Vercel dashboard
2. Review browser console for errors
3. Verify environment variables are correctly set
4. Ensure all dependencies are properly installed
