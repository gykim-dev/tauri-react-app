# 🚀 Tauri + React Starter

A boilerplate for cross-platform apps using Tauri v2, React (TypeScript), and shadcn/ui.

## 📌 Key Features

- Multi-Platform: Single codebase support for macOS, Windows, iOS, and Android.
- Responsive Layout: Optimized navigation with a collapsible Sidebar for desktop and a BottomBar for mobile.
- Theme: Support for Dark/Light modes.
- i8n: Multi-language support configured with react-i18next.

## 🛠 Prerequisites

Ensure your development environment is configured for Tauri v2 and your target platforms.

### 1. General Requirements

- **Node.js**: v24+
- **Rust**: Latest stable version via [rustup.rs](https://rustup.rs/)
- **Package Manager**: pnpm

### 2. Platform Specifics

- **iOS**: macOS with **Xcode** installed.
- **Android**: **Android Studio** with the latest SDK and JDK.

## ⚙️ Environment Setup

1.  **Clone the Repository**

    ```bash
    git clone [https://github.com/gykim-dev/tauri-react-app.git](https://github.com/gykim-dev/tauri-react-app.git)
    cd tauri-react-app
    ```

2.  **Install Dependencies**

    ```bash
    pnpm i
    ```

3.  **Setup Mobile Targets** (Only required once)

    ```bash
    # For Android
    pnpm tauri android init

    # For iOS
    pnpm tauri ios init
    ```

## 🏃 Running the Project

### 🖥️ Desktop

Run the app in a local window for development:

```bash
pnpm tauri dev
```

### 🤖 Android

Launch the app on an Android Emulator or a connected device:

```bash
pnpm tauri android dev
```

### 🤖 iOS

Launch the app on the iOS Simulator or a connected iPhone:

```bash
pnpm tauri ios dev
```

## 🏗️ Build

To generate production bundles for each platform:

```bash
# Desktop
pnpm tauri build

# Android
pnpm tauri android build

# iOS
pnpm tauri ios build
```

## 📂 Project Structure

```text
.
├── src/
│   ├── components/
│   │   ├── layout/      # Sidebar, TopBar, and BottomBar
│   │   └── ui/          # Base shadcn/ui components
│   ├── configs/         # Global app configuration
│   ├── constants/       # Navigation items and static definitions
│   ├── lib/             # Utility functions (e.g., cn helper)
│   ├── locales/         # Locales (e.g., en/translation.json)
│   ├── pages/           # Page components for each route
│   ├── App.css          # Global CSS and OKLCH theme definitions
│   └── App.tsx          # Main entry point and routing logic
│   └── i18n.ts          # Main entry point and routing logic
├── src-tauri/           # Tauri core and Rust-side configuration
├── public/              # Static assets (Logo, Favicons)
└── package.json
```

## 🛠️ Usage

### 1. Configuration

Manage branding and core settings in `src/configs/appConfig.ts`.
Updating this file reflects changes across the Sidebar, TopBar, and metadata.

```typescript
export const APP_CONFIG = {
  name: 'Starter App',
  shortName: 'Starter',
  logoText: 'S',
  logoImage: '/logo.svg', // Path relative to the public folder
  description: 'A professional Tauri v2 starter template',
} as const;
```

### 2. Adding a New Page

1.  **Create the Component**: Add a new React component in the `src/pages/` directory.
2.  **Define Navigation**: Add the new route to `src/configs/menuConfig.ts` to display it in the Sidebar/BottomBar.

    ```typescript
    export const NAV_MENU: NavMenuItem[] = [
      { type: 'link', to: PATHS.HOME, label: 'Home', icon: Home },
      { type: 'link', to: PATHS.EXAMPLE, label: 'Example', icon: Layers },
      { type: 'link', to: PATHS.SETTINGS, label: 'Settings', icon: Settings },
    ];

    export const TOPBAR_MENU: TopbarMenuItem[] = [
      {
        type: 'action',
        label: 'Notifications',
        icon: Bell,
        onClick: () => alert('Open Notifications Drawer'),
      },
      {
        type: 'link',
        label: 'Profile',
        icon: User,
        to: PATHS.PROFILE,
      },
    ];
    ```

3.  **Register the Route**: Add the corresponding `<Route />` in `src/App.tsx`.

### 3. Theme Customization

This project uses **Tailwind CSS v4** and the **OKLCH** color system. You can modify the color variables for both Light and Dark modes in `src/App.css`.

- **Light Mode**: Adjust variables under the `:root` selector.
- **Dark Mode**: Adjust variables under the `.dark` selector.
- **Scrollbars**: Custom high-contrast scrollbar styles for dark mode are pre-configured in the same file.

### 4. Internationalization (i18n)

This project uses `react-i18next`. Translation data and UI are separated for maintainability.

#### Manage Translations

Modify the JSON files in the `src/locales/` directory.

- **EN**: `src/locales/en/translation.json`
- **KO**: `src/locales/ko/translation.json`

```json
{
  "menu": {
    "home": "Home",
    "settings": "Settings"
  }
}
```

#### Translate at Render Time

Use the `useTranslation` hook to convert keys into text dynamically.

```tsx
// src/components/Sidebar.tsx
import { useTranslation } from 'react-i18next';
import { NAV_MENU } from '@/configs/menuConfig';

export const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      {NAV_MENU.map((item) => (
        <a key={item.to} href={item.to}>
          {t(item.label)}
        </a>
      ))}
    </nav>
  );
};
```
