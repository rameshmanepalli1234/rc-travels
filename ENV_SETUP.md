# Environment Variables Setup

This project uses environment variables to configure the development server port and public URL.

## Configuration

The `.env` file contains the following variables:

```env
DEV_SERVER_PORT=4099
PUBLICURL=http://localhost:4099
```

## How to Change Port

To change the development server port:

1. **Edit the `.env` file**:

   ```env
   DEV_SERVER_PORT=9000
   PUBLICURL=http://localhost:9000
   ```

2. **Restart the development server**:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

## Available Scripts

- `yarn dev` - Start development server with environment variables
- `yarn start` - Start development server with auto-open browser
- `yarn build` - Build for production

## Environment Variables

- `DEV_SERVER_PORT` - The port number for the development server (read from `.env` file only)
- `PUBLICURL` - The public URL for the application (read from `.env` file only)

## Important Notes

- **Port Configuration**: The server port is **ONLY** controlled by the `DEV_SERVER_PORT` value in your `.env` file
- **No Default Fallback**: There is no hardcoded default port - the server will use exactly what you specify in `.env`
- **Dynamic Changes**: Change the port in `.env` and restart the server to apply changes
- **Security**: The `.env` file is included in `.gitignore` to keep sensitive information out of version control
- **Webpack Integration**: The webpack configuration automatically reads these environment variables using the `dotenv` package

## Example Usage

```bash
# Set port to 5000
echo "DEV_SERVER_PORT=5000" > .env
echo "PUBLICURL=http://localhost:5000" >> .env

# Server will run on http://localhost:5000
yarn dev

# Change to port 8080
echo "DEV_SERVER_PORT=8080" > .env
echo "PUBLICURL=http://localhost:8080" >> .env

# Server will run on http://localhost:8080
yarn dev
```
