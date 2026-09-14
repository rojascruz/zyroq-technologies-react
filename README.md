# ZYROQ Technologies

Official website for **ZYROQ Technologies**, a digital solutions company focused on helping small businesses build a professional, connected digital presence.

The site is designed as a modern, bilingual, responsive React application with Light/Dark themes and direct contact flows through WhatsApp, email, and phone.

## Features

- Responsive layout for desktop, tablet, and mobile
- Spanish / English language switching
- Light / Dark theme switching
- Modern service and solution pages
- Real work showcase on the Home page
- WhatsApp-first contact workflow
- Direct email and phone contact options
- Custom 404 page
- Centralized site configuration
- Centralized translations
- Reusable section and layout components

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- React Router DOM
- React Compiler
- Bootstrap Icons
- Oxlint

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/solutions` | Solutions |
| `/contact` | Contact |
| `*` | Custom 404 / Not Found |

## Project Structure

```text
src/
├── assets/
│   ├── images/
│   │   └── projects/
│   ├── logos/
│   ├── services/
│   └── zyroq-logo-32x32.png
│
├── components/
│   ├── layout/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── WhatsAppButton/
│   │
│   └── sections/
│       ├── CompactCTA/
│       ├── Contact/
│       ├── Hero/
│       ├── HomeCTA/
│       ├── HomeShowcase/
│       ├── Process/
│       ├── Services/
│       └── Solutions/
│
├── config/
│   └── siteConfig.ts
│
├── context/
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
│
├── hooks/
│   ├── useLanguage.ts
│   └── useTheme.ts
│
├── i18n/
│   ├── en/
│   │   ├── common.ts
│   │   └── home.ts
│   ├── es/
│   │   ├── common.ts
│   │   └── home.ts
│   └── translations.ts
│
├── pages/
│   ├── Contact/
│   ├── Home/
│   ├── NotFound/
│   ├── Services/
│   └── Solutions/
│
├── styles/
│   ├── global.css
│   └── variables.css
│
├── App.tsx
├── index.css
└── main.tsx
```

For a deeper technical explanation, see [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Getting Started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

On Windows PowerShell, if script execution blocks `npm`, use:

```powershell
npm.cmd install
```

### Start development server

```bash
npm run dev
```

PowerShell alternative:

```powershell
npm.cmd run dev
```

### Production build

```bash
npm run build
```

PowerShell alternative:

```powershell
npm.cmd run build
```

### Lint

```bash
npm run lint
```

### Preview production build

```bash
npm run preview
```

## Configuration

Business information is centralized in:

```text
src/config/siteConfig.ts
```

Examples include:

- Company name
- Phone number
- WhatsApp number
- Email address
- Showcase website URLs

Avoid hardcoding business contact information directly inside components when it belongs in `siteConfig.ts`.

> **Before production:** replace the temporary email currently stored in `siteConfig.ts` with the final business email address.

## Internationalization

The website currently supports:

- Spanish (`es`)
- English (`en`)

Translations are stored in:

```text
src/i18n/es/
src/i18n/en/
```

The active language is managed by `LanguageContext` and persisted in `localStorage` using:

```text
zyroq-language
```

Spanish is the default language.

## Theme System

The application supports:

- Dark mode
- Light mode

Theme state is managed by `ThemeContext` and persisted in `localStorage` using:

```text
zyroq-theme
```

The selected theme is applied to the root HTML element through:

```html
<html data-theme="dark">
```

or:

```html
<html data-theme="light">
```

Most visual colors are controlled through CSS custom properties in:

```text
src/styles/variables.css
```

Dark mode is the default.

## Contact Flow

The Contact page allows visitors to:

- Complete a short form and continue through WhatsApp
- Contact ZYROQ directly through WhatsApp
- Open their email application with a prepared message
- Call the configured phone number

The WhatsApp message is automatically generated in the visitor's selected language.

## Development Guidelines

- Keep page components focused on page composition.
- Keep reusable visual sections in `components/sections`.
- Keep global layout components in `components/layout`.
- Keep business configuration in `siteConfig.ts`.
- Keep user-facing copy in the i18n files.
- Keep each component's styles in its own CSS file.
- Use CSS variables for theme-sensitive styling.
- Avoid duplicating phone numbers, email addresses, or external URLs inside components.
- Preserve responsive behavior across desktop, tablet, and mobile.

## Build Output

Production output is generated in:

```text
dist/
```

The `dist` directory and `node_modules` should not be committed to source control.

## License

Private project for ZYROQ Technologies. All rights reserved.
