# 🚗 RC Tours & Travels

A modern React TypeScript car marketplace application built with Webpack, featuring a beautiful UI and comprehensive car listings.

- 🌐 Live Demo: https://rc-travels.netlify.app/
- 🚀 Deployment Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/05bec6b6-4cf1-4d09-a4d0-f3525ef96e8c/deploy-status)](https://app.netlify.com/projects/rc-travels/deploys)

## ✨ Features

- **Modern React 19** with TypeScript for type safety
- **Responsive Design** with mobile-first approach
- **Beautiful UI** with gradient backgrounds and smooth animations
- **Car Listings** with detailed information and images
- **Interactive Components** with hover effects and transitions
- **Code Quality** with ESLint, Prettier, and Husky pre-commit hooks
- **Development Tools** with hot reloading and source maps

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Webpack 5
- **Package Manager**: Yarn
- **Code Quality**: ESLint, Prettier
- **Git Hooks**: Husky, lint-staged
- **Styling**: CSS3 with modern features
- **Development Server**: Webpack Dev Server

## 📋 Prerequisites

- Node.js >= 20.0.0
- Yarn >= 1.22.0 (3.1.1)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/aditya-car-zone.git
cd aditya-car-zone
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Start development server

```bash
yarn start
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### 4. Build for production

```bash
yarn build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
aditya-car-zone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── CarList.tsx
│   │   ├── CarCard.tsx
│   │   ├── CarDetails.tsx
│   │   └── *.css
│   ├── hooks/
│   │   └── useCars.ts
│   ├── types/
│   │   └── car.ts
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   └── *.css
├── .husky/
│   └── pre-commit
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── webpack.config.js
├── package.json
└── README.md
```

## 🎨 Available Scripts

- `yarn start` - Start development server
- `yarn dev` - Start development server (alias)
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors automatically
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting
- `yarn type-check` - Run TypeScript type checking

## 🔧 Configuration Files

### TypeScript (`tsconfig.json`)

- Strict type checking enabled
- Modern ES2020 target
- React JSX support
- Source maps for debugging

### Webpack (`webpack.config.js`)

- Development and production builds
- Hot module replacement
- Asset optimization
- Source maps

### ESLint (`.eslintrc.js`)

- TypeScript and React rules
- Prettier integration
- Modern JavaScript features

### Prettier (`.prettierrc`)

- Consistent code formatting
- Single quotes
- 80 character line width
- Trailing commas

## 🎯 Features Overview

### Car Listings

- Grid layout with responsive design
- Car cards with images and key information
- Price badges and location indicators
- Hover effects and smooth transitions

### Car Details

- Comprehensive car information
- Specifications grid
- Feature lists
- Contact and test drive buttons
- Back navigation

### Navigation

- Sticky header with gradient background
- Responsive navigation menu
- Smooth hover effects

## 🧪 Testing

The project includes comprehensive data-testid attributes following the naming convention:

- `[element-type]-[context]-[target][-index]`
- Maximum 4 hyphens for readability
- Consistent across all components

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: < 480px

## 🚀 Deployment

### Build for Production

```bash
yarn build
```

### Deploy to Static Hosting

The built files in the `dist` directory can be deployed to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ramesh**

## 🙏 Acknowledgments

- React team for the amazing framework
- TypeScript team for type safety
- Webpack team for the build tool
- Unsplash for car images
- The open-source community

---

Made with ❤️ using React, TypeScript, and Webpack.
