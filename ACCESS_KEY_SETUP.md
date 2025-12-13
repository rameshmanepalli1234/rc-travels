# ACCESS_KEY Configuration with .npmrc Mediator

This project uses an `.npmrc` file as a mediator to manage the `ACCESS_KEY` configuration, providing better security and configuration management.

## How It Works

### 1. **Environment Variable Source**

The `ACCESS_KEY` is stored in your shell environment (`.zshrc` file):

```bash
export ACCESS_KEY=u34kkfe993943kkjerufj3343334h
```

### 2. **NPMRC Mediator**

The `.npmrc` file serves as a mediator using environment variable substitution:

```ini
# NPM Configuration
# Access Key Configuration - uses environment variable substitution
# Note: This uses a custom format to avoid Yarn's env substitution conflicts
access-key-env=ACCESS_KEY

# Other npm configurations can be added here
registry=https://registry.npmjs.org/
```

### 3. **Webpack Integration**

The webpack configuration reads from `.npmrc` and resolves the environment variable:

```javascript
// Function to read ACCESS_KEY from .npmrc file
function getAccessKeyFromNpmrc() {
  try {
    const npmrcPath = path.join(__dirname, '.npmrc');
    if (fs.existsSync(npmrcPath)) {
      const npmrcContent = fs.readFileSync(npmrcPath, 'utf8');
      const npmrcConfig = ini.parse(npmrcContent);

      // Get access-key-env from .npmrc and resolve environment variable
      const accessKeyEnvVar = npmrcConfig['access-key-env'];
      if (accessKeyEnvVar) {
        return process.env[accessKeyEnvVar] || '';
      }
      return '';
    }
  } catch (error) {
    console.warn('Warning: Could not read .npmrc file:', error.message);
  }
  return '';
}
```

## Benefits

1. **Security**: The actual access key is not stored in project files
2. **Flexibility**: Easy to change the key without modifying project files
3. **Environment Management**: Uses standard environment variable patterns
4. **Version Control Safe**: `.npmrc` can be committed without exposing sensitive data

## File Structure

```
aditya-car-zone/
├── .env                    # Contains DEV_SERVER_PORT and PUBLICURL only
├── .npmrc                  # Mediator file with ${ACCESS_KEY} reference
├── webpack.config.js       # Reads from .npmrc and resolves environment variable
└── ~/.zshrc               # Contains actual ACCESS_KEY value
```

## How to Change the Access Key

### Option 1: Change in Shell Environment

1. Edit your `.zshrc` file:
   ```bash
   nano ~/.zshrc
   ```
2. Find the line: `export ACCESS_KEY=u34kkfe993943kkjerufj3343334h`
3. Change it to your new key: `export ACCESS_KEY=your_new_key_here`
4. Reload the environment:
   ```bash
   source ~/.zshrc
   ```
5. Restart the development server:
   ```bash
   pkill -f webpack && yarn dev
   ```

### Option 2: Change in .npmrc (Alternative)

You can also change the environment variable name in `.npmrc`:

```ini
access-key=${MY_CUSTOM_ACCESS_KEY}
```

Then set the corresponding environment variable:

```bash
export MY_CUSTOM_ACCESS_KEY=your_new_key_here
```

## Verification

The system works as follows:

1. **Shell Environment**: `ACCESS_KEY=u34kkfe993943kkjerufj3343334h`
2. **NPMRC Mediator**: `access-key=${ACCESS_KEY}`
3. **Webpack Resolution**: Reads `.npmrc` → finds `${ACCESS_KEY}` → resolves to environment variable
4. **Application**: Receives the resolved access key value

## Troubleshooting

- **Key not found**: Ensure `ACCESS_KEY` is exported in your shell environment
- **NPMRC not read**: Check that `.npmrc` file exists and has correct syntax
- **Environment not loaded**: Run `source ~/.zshrc` to reload environment variables
