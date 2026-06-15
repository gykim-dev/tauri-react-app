# Tauri React App

A starter project for building desktop and mobile applications with Tauri 2,
React, TypeScript, and Tailwind CSS. It provides a small application shell with
responsive navigation, theme controls, routing, and English/Korean localization
that can be adapted for a new project.

## Included

- Tauri 2 application configuration for desktop, Android, and iOS targets
- React 19 and TypeScript frontend built with Vite
- Responsive layout with a collapsible desktop sidebar and mobile bottom bar
- Client-side routing with React Router
- Light, dark, and system theme options
- English and Korean translations with `react-i18next`
- Reusable UI components based on shadcn/ui, Radix UI, and Tailwind CSS 4
- ESLint and Prettier configuration

## Prerequisites

Install the tools required by Tauri for your operating system and target
platform:

- Node.js
- [pnpm](https://pnpm.io/)
- Rust, installed with [rustup](https://rustup.rs/)
- The [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/) for your
  operating system

Mobile development also requires:

- Android Studio, the Android SDK, and a supported JDK for Android
- macOS and Xcode for iOS

## Getting Started

```bash
git clone https://github.com/gykim-dev/tauri-react-app.git
cd tauri-react-app
pnpm install
pnpm tauri dev
```

To run only the web frontend:

```bash
pnpm dev
```

## Mobile Setup

Initialize each mobile target once before running it:

```bash
pnpm tauri android init
pnpm tauri ios init
```

Run the app on an emulator, simulator, or connected device:

```bash
pnpm tauri android dev
pnpm tauri ios dev
```

## Build

```bash
# Desktop
pnpm tauri build

# Android
pnpm tauri android build

# iOS
pnpm tauri ios build
```

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Type-check and build the frontend |
| `pnpm preview` | Preview the frontend production build |
| `pnpm tauri dev` | Run the desktop app in development mode |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format the project with Prettier |

## Project Structure

```text
.
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── layout/         # Sidebar, top bar, bottom bar, and page layout
│   │   └── ui/             # Reusable UI components
│   ├── configs/            # Application and navigation configuration
│   ├── lib/                # Shared utility functions
│   ├── locales/            # English and Korean translation files
│   ├── pages/              # Route-level page components
│   ├── theme/              # Theme provider and theme state
│   ├── types/              # Shared TypeScript types
│   ├── App.css             # Global styles and theme variables
│   ├── App.tsx             # Application routes
│   ├── i18n.ts             # Internationalization setup
│   └── main.tsx            # React entry point
├── src-tauri/              # Rust source and Tauri configuration
└── package.json
```

## Customization

### Application Metadata

Update the application name, logo, and description in
`src/configs/appConfig.ts`. Native window and bundle settings are stored in
`src-tauri/tauri.conf.json`.

### Navigation and Routes

Navigation items and route paths are defined in `src/configs/menuConfig.ts`.
After adding a page in `src/pages/`, register its route in `src/App.tsx`.

### Theme

Theme selection is implemented in `src/theme/`. Edit the CSS variables in
`src/App.css` to change the light and dark color palettes.

### Translations

Translation resources are stored in:

- `src/locales/en/translation.json`
- `src/locales/ko/translation.json`

Use the `useTranslation` hook from `react-i18next` in components:

```tsx
import { useTranslation } from 'react-i18next';

export function Example() {
  const { t } = useTranslation();

  return <h1>{t('menu.home')}</h1>;
}
```
