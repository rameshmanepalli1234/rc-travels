# Path Aliases Setup

This document explains the path alias system implemented in the project to avoid using `./` and `../` relative paths.

## Overview

Path aliases provide a cleaner and more maintainable way to import modules by using absolute paths instead of relative paths. This makes the codebase more readable and easier to refactor.

## Available Aliases

The following path aliases are configured in both Webpack and TypeScript:

| Alias         | Path              | Description                            |
| ------------- | ----------------- | -------------------------------------- |
| `@`           | `src/`            | Root source directory                  |
| `@components` | `src/components/` | React components                       |
| `@hooks`      | `src/hooks/`      | Custom React hooks                     |
| `@app-types`  | `src/types/`      | TypeScript type definitions            |
| `@utils`      | `src/utils/`      | Utility functions                      |
| `@assets`     | `src/assets/`     | Static assets (images, fonts, etc.)    |
| `@styles`     | `src/styles/`     | CSS/SCSS files                         |
| `@pages`      | `src/pages/`      | Page components                        |
| `@services`   | `src/services/`   | API services and external integrations |
| `@constants`  | `src/constants/`  | Application constants                  |
| `@contexts`   | `src/contexts/`   | React contexts                         |
| `@messages`   | `src/messages/`   | Messages                               |
| `@containers` | `src/containers/` | React containers                       |

## Usage Examples

### Before (Relative Paths)

```typescript
import Header from './components/Header';
import { useCars } from '../hooks/useCars';
import { Car } from '../../types/car';
import { formatPrice } from '../../../utils/formatters';
```

### After (Path Aliases)

```typescript
import Header from '@components/Header';
import { useCars } from '@hooks/useCars';
import { Car } from '@app-types/car';
import { formatPrice } from '@utils/formatters';
```

## Configuration Files

### Webpack Configuration (`webpack.config.js`)

The aliases are configured in the `resolve.alias` section:

```javascript
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@types': path.resolve(__dirname, 'src/types'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@contexts': path.resolve(__dirname, 'src/contexts'),
    '@messages': path.resolve(__dirname, 'src/messages'),
    '@containers': path.resolve(__dirname, 'src/containers'),
  },
}
```

### TypeScript Configuration (`tsconfig.json`)

The path mappings are configured in the `compilerOptions.paths` section:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@hooks/*": ["src/hooks/*"],
      "@app-types/*": ["src/types/*"],
      "@utils/*": ["src/utils/*"],
      "@assets/*": ["src/assets/*"],
      "@styles/*": ["src/styles/*"],
      "@pages/*": ["src/pages/*"],
      "@services/*": ["src/services/*"],
      "@constants/*": ["src/constants/*"],
      "@contexts/*": ["src/contexts/*"],
      "@messages": ["src/messages"],
      "@containers": ["src/containers"]
    }
  }
}
```

### ESLint Configuration (`eslint.config.js`)

ESLint is configured to understand the TypeScript path mappings by referencing the `tsconfig.json`:

```javascript
parserOptions: {
  project: './tsconfig.json',
}
```

## Benefits

1. **Cleaner Imports**: No more long relative paths with multiple `../`
2. **Easier Refactoring**: Moving files doesn't break import paths
3. **Better Readability**: Imports clearly indicate what type of module is being imported
4. **IDE Support**: Better autocomplete and navigation in IDEs
5. **Consistency**: Standardized import patterns across the codebase

## Migration Guide

To migrate existing relative imports to path aliases:

1. **Identify the module type**: Determine which alias category the import belongs to
2. **Replace the path**: Replace the relative path with the appropriate alias
3. **Update imports**: Use the new alias-based import syntax

### Example Migration

**Before:**

```typescript
// In src/pages/CarList.tsx
import CarCard from '../components/CarCard';
import { useCars } from '../hooks/useCars';
import { Car } from '../types/car';
```

**After:**

```typescript
// In src/pages/CarList.tsx
import CarCard from '@components/CarCard';
import { useCars } from '@hooks/useCars';
import { Car } from '@app-types/car';
```

## Best Practices

1. **Use the most specific alias**: Prefer `@components/Header` over `@/components/Header`
2. **Be consistent**: Use the same alias pattern throughout the codebase
3. **Group related imports**: Organize imports by alias type
4. **Avoid mixing**: Don't mix relative and alias imports in the same file

## IDE Support

Most modern IDEs (VS Code, WebStorm, etc.) will automatically provide:

- Autocomplete for alias paths
- Go-to-definition functionality
- Import suggestions
- Refactoring support

## Troubleshooting

If you encounter issues with path aliases:

1. **Restart your IDE**: Sometimes IDEs need to be restarted to pick up new configurations
2. **Clear cache**: Clear TypeScript and ESLint caches
3. **Check file extensions**: Ensure you're using the correct file extensions in imports
4. **Verify configuration**: Double-check that all configuration files are properly set up

## Future Considerations

As the project grows, you may want to add additional aliases for:

- `@layouts` - Layout components
- `@features` - Feature-specific modules
- `@shared` - Shared utilities and components
- `@config` - Configuration files
- `@tests` - Test utilities and mocks
