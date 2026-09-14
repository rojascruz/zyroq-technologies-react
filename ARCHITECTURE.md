# ZYROQ Technologies — Architecture

## 1. Overview

ZYROQ Technologies is implemented as a client-side React single-page application built with Vite and TypeScript.

The architecture intentionally stays lightweight. It separates:

- application bootstrapping;
- route-level pages;
- reusable layout components;
- reusable page sections;
- global configuration;
- language state;
- theme state;
- translation content;
- component-specific styling.

The main design goal is to keep UI code easy to maintain while avoiding unnecessary architectural complexity for a marketing website.

---

## 2. High-Level Flow

```text
main.tsx
   │
   ├── ThemeProvider
   │
   └── LanguageProvider
         │
         └── App.tsx
               │
               ├── Header
               ├── React Router
               │     ├── Home
               │     ├── ServicesPage
               │     ├── SolutionsPage
               │     ├── ContactPage
               │     └── NotFoundPage
               │
               ├── Footer
               └── WhatsAppButton
```

`main.tsx` is the application entry point. It mounts the application and provides global theme and language state before `App.tsx` is rendered.

`App.tsx` owns the global shell and routing.

---

## 3. Entry Point

### `src/main.tsx`

Responsibilities:

- mounts React into `#root`;
- enables `StrictMode`;
- loads Bootstrap Icons;
- initializes `ThemeProvider`;
- initializes `LanguageProvider`;
- renders `App`.

Current provider order:

```text
StrictMode
└── ThemeProvider
    └── LanguageProvider
        └── App
```

This makes theme and translation state available to every route and component in the application.

---

## 4. Application Shell and Routing

### `src/App.tsx`

`App.tsx` contains the global application shell:

```text
BrowserRouter
├── Header
├── Routes
├── Footer
└── WhatsAppButton
```

Current routes:

```text
/           → Home
/services   → ServicesPage
/solutions  → SolutionsPage
/contact    → ContactPage
*           → NotFoundPage
```

The `*` route ensures all unknown URLs are handled by the custom 404 page.

### Routing rule

Route-level components belong in `src/pages`.

Pages should primarily compose sections rather than contain large amounts of reusable UI logic.

Example:

```tsx
function ServicesPage() {
  return (
    <main>
      <Services />
      <Process />
      <CompactCTA variant="services" />
    </main>
  )
}
```

---

## 5. Page Layer

Directory:

```text
src/pages/
```

Current pages:

```text
Home/
Contact/
Services/
Solutions/
NotFound/
```

### Responsibilities

A page component should:

- represent one route;
- compose reusable sections;
- provide page-level spacing when needed;
- avoid duplicating business configuration or translations;
- avoid holding reusable visual components that belong in `components`.

### Current composition

#### Home

```text
Home
├── Hero
├── HomeShowcase
└── HomeCTA
```

#### Services

```text
ServicesPage
├── Services
├── Process
└── CompactCTA
```

#### Solutions

```text
SolutionsPage
├── Solutions
└── CompactCTA
```

#### Contact

```text
ContactPage
└── Contact
```

#### Not Found

```text
NotFoundPage
```

---

## 6. Components

Directory:

```text
src/components/
```

Components are divided into two groups.

### 6.1 Layout Components

Directory:

```text
src/components/layout/
```

Current layout components:

```text
Header/
Footer/
WhatsAppButton/
```

These components are global and can appear across multiple routes.

#### Header

Responsibilities:

- navigation;
- current route state;
- language switching;
- Light/Dark theme switching;
- mobile navigation;
- primary quote/contact action.

#### Footer

Responsibilities:

- company summary;
- site navigation;
- contact information;
- WhatsApp entry point;
- language-aware labels.

#### WhatsAppButton

Responsibilities:

- provide a persistent WhatsApp shortcut;
- generate language-aware WhatsApp messaging;
- use the centralized WhatsApp number.

### 6.2 Section Components

Directory:

```text
src/components/sections/
```

Current sections:

```text
Hero/
HomeShowcase/
HomeCTA/
Services/
Process/
Solutions/
Contact/
CompactCTA/
```

Section components represent larger reusable blocks inside pages.

Each section owns its own CSS file.

Example:

```text
Services/
├── Services.tsx
└── Services.css
```

---

## 7. Configuration

### `src/config/siteConfig.ts`

Business-specific data that may change independently from visual components belongs in `siteConfig.ts`.

Current configuration includes:

```text
companyName
phoneDisplay
phoneHref
whatsappNumber
email
projects/showcase URLs
```

Components should import these values rather than duplicate them.

Example:

```ts
import { siteConfig } from '../../../config/siteConfig'
```

Then:

```tsx
<a href={`tel:${siteConfig.phoneHref}`}>
  {siteConfig.phoneDisplay}
</a>
```

### Important production note

The current project snapshot still contains a temporary email value. It must be replaced before production deployment.

---

## 8. Internationalization

The project uses a lightweight custom internationalization implementation rather than a third-party i18n library.

Directory:

```text
src/i18n/
├── en/
│   ├── common.ts
│   └── home.ts
├── es/
│   ├── common.ts
│   └── home.ts
└── translations.ts
```

### Translation structure

`translations.ts` combines each language:

```ts
export const translations = {
  es: {
    common: commonEs,
    home: homeEs,
  },
  en: {
    common: commonEn,
    home: homeEn,
  },
}
```

### `LanguageContext`

Directory:

```text
src/context/LanguageContext.tsx
```

Responsibilities:

- store the active language;
- expose `setLanguage`;
- expose `toggleLanguage`;
- expose the active translation object as `t`;
- persist the selected language;
- update the HTML `lang` attribute.

Storage key:

```text
zyroq-language
```

Default:

```text
es
```

### `useLanguage`

Components access language state through:

```ts
const { t, language } = useLanguage()
```

User-facing text should normally come from the translation files instead of being hardcoded inside components.

---

## 9. Theme Architecture

Theme state is provided by:

```text
src/context/ThemeContext.tsx
```

Supported themes:

```ts
'dark' | 'light'
```

Storage key:

```text
zyroq-theme
```

Default:

```text
dark
```

The selected theme is applied to the HTML element:

```html
<html data-theme="dark">
```

or:

```html
<html data-theme="light">
```

Components access theme state through:

```ts
const { theme, toggleTheme } = useTheme()
```

### Theme-sensitive assets

Where a logo must change between themes, the component imports both assets and selects the appropriate image at runtime.

Example:

```ts
const activeLogo =
  theme === 'light'
    ? lightLogo
    : darkLogo
```

### CSS variables

Global design tokens live in:

```text
src/styles/variables.css
```

Theme-specific values are expressed through CSS custom properties, allowing components to use semantic variables instead of hardcoded theme logic.

---

## 10. Styling Strategy

The project uses plain CSS rather than CSS-in-JS or a UI framework.

### Global styling

```text
src/styles/variables.css
src/styles/global.css
src/index.css
```

### Component styling

Each component or page has its own stylesheet.

Example:

```text
Contact.tsx
Contact.css
```

### Styling conventions

- use CSS variables for theme-sensitive colors;
- keep selectors scoped using component-specific prefixes;
- keep responsive styles close to the component they affect;
- avoid global selectors unless they belong in global styles;
- use subtle cyan accent colors consistently across the brand;
- preserve the same spacing and typography language across pages.

---

## 11. Assets

Assets are organized by purpose:

```text
src/assets/
├── images/
│   └── projects/
├── logos/
├── services/
└── zyroq-logo-32x32.png
```

### Logos

Theme-specific logo variants live in:

```text
src/assets/logos/
```

### Service visuals

Service-specific illustrations live in:

```text
src/assets/services/
```

### Showcase images

Real work screenshots used on the Home page live in:

```text
src/assets/images/projects/
```

Although the site no longer has a dedicated `/projects` route, these assets are intentionally retained because the Home showcase still displays real client work.

---

## 12. Contact Architecture

The Contact section is designed around low-friction customer interaction.

The visitor can:

```text
Contact form
    │
    └── Generates WhatsApp message

Direct WhatsApp
    │
    └── Opens WhatsApp with prepared bilingual message

Direct Email
    │
    └── Opens mail client using mailto:

Phone
    │
    └── Uses tel:
```

The form itself does not currently send data to a backend or external API.

Instead, it prepares the message and transfers the visitor to WhatsApp.

This avoids requiring a server-side form handler for the current version of the website.

---

## 13. State Management

No external state management library is used.

Global state is limited to:

- theme;
- language.

These are handled with React Context.

Local component state is used for UI-specific behavior such as:

- form values;
- custom dropdown state;
- mobile menu state.

This is appropriate for the current project size and avoids unnecessary dependencies.

---

## 14. Data Flow

A typical component follows this pattern:

```text
Translation Context ───┐
                      │
Theme Context ─────────┼──→ Component ───→ UI
                      │
siteConfig ────────────┘
```

Example Contact flow:

```text
LanguageContext
      │
      ├── translated labels
      └── selected language

siteConfig
      │
      ├── phone
      ├── WhatsApp number
      └── email

Contact.tsx
      │
      ├── local form state
      ├── message generation
      └── external contact action
```

---

## 15. Naming and Organization Rules

### Pages

Use:

```text
<Name>Page.tsx
<Name>Page.css
```

for route-specific pages where appropriate.

### Sections

Use:

```text
<Name>.tsx
<Name>.css
```

inside:

```text
components/sections/<Name>/
```

### Layout

Global layout pieces belong in:

```text
components/layout/
```

### Hooks

Context access should go through custom hooks:

```text
useLanguage
useTheme
```

rather than importing context objects directly throughout the component tree.

---

## 16. Responsive Strategy

Each component owns its responsive behavior.

Common breakpoints currently include approximately:

```text
1600px  large desktop
1200px  laptop
1024px  tablet
900px   compact tablet
700px   mobile
480px   small mobile
360px   very small mobile
```

Breakpoints may vary slightly by component when the layout requires it.

The goal is not to force one universal breakpoint system but to preserve visual integrity at each size.

---

## 17. Accessibility Considerations

Current patterns include:

- semantic `main`, `section`, `article`, `header`, and navigation structures;
- `aria-hidden` on decorative icons;
- meaningful `alt` values on relevant images;
- buttons for interactive UI actions;
- anchor tags for external websites, email, and phone actions;
- language synchronization through the HTML `lang` attribute;
- reduced-motion media queries in animated sections.

Future enhancements may include a formal accessibility audit and keyboard testing for all custom interactive controls.

---

## 18. Build and Deployment

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Output:

```text
dist/
```

Preview:

```bash
npm run preview
```

The project is a client-side SPA using `BrowserRouter`. The production hosting environment must therefore redirect unknown application routes to `index.html` so routes such as `/services` and `/contact` work when opened directly.

This rewrite/fallback behavior should be verified when deploying to the hosting provider.

---

## 19. Source Control Rules

The following should not be committed:

```text
node_modules/
dist/
logs/
local environment files
editor-specific temporary files
```

The following should be committed:

```text
src/
public/
package.json
package-lock.json
vite.config.ts
tsconfig files
README.md
ARCHITECTURE.md
.gitignore
Oxlint configuration
```

`package-lock.json` should remain under source control to keep dependency installation reproducible.

---

## 20. Current Architectural Decisions

The project intentionally does **not** use:

- Redux or another external state store;
- a backend API;
- a form service;
- a component framework;
- a third-party translation library;
- a dedicated projects route.

These decisions keep the current website simple and focused.

They can be revisited if the application later grows into a client portal, CMS-backed site, quote management system, or authenticated business platform.

---

## 21. Future Extension Points

The current architecture can grow cleanly in several directions.

### Backend contact form

A future service layer could replace the current WhatsApp-only form submission with:

```text
Contact UI
   ↓
API service
   ↓
Email / CRM / database
```

### CMS

Project work, services, or marketing copy could eventually be sourced from a CMS instead of static TypeScript translation objects.

### Analytics

Analytics and conversion tracking can be added at the application shell or route level without restructuring the existing sections.

### Expanded portfolio

If ZYROQ accumulates enough case studies, a dedicated portfolio route can be reintroduced as a page without changing the core architecture.

---

## 22. Summary

The current ZYROQ architecture follows a simple rule:

```text
Pages compose sections.
Sections own presentation.
Contexts own global UI state.
Translations own copy.
Configuration owns business data.
CSS variables own theme behavior.
```

This structure keeps the application easy to understand, easy to modify, and appropriate for the current size of the ZYROQ Technologies website.
