# AGENTS.md — A-D Project

> Guía de referencia para agentes de IA y desarrolladores.  
> Define la arquitectura, stack tecnológico, convenciones y estructura del proyecto.

---

## 🎯 Visión del Proyecto

Aplicación web moderna, performante y visualmente premium construida con **React 19 + TypeScript + Next.js 15 (App Router)**.  
El objetivo es ofrecer una experiencia de usuario fluida, accesible y con estética de alto nivel.

---

## 🏗️ Stack Tecnológico

### Core

| Tecnología       | Versión  | Propósito                                |
|------------------|----------|------------------------------------------|
| **Next.js**      | 15.x     | Framework fullstack (App Router)         |
| **React**        | 19.x     | Librería de UI con Server Components     |
| **TypeScript**   | 5.x      | Tipado estático y seguridad de tipos     |
| **Node.js**      | 22.x LTS | Runtime del servidor                     |

### Estilos y UI

| Tecnología          | Propósito                                      |
|---------------------|-------------------------------------------------|
| **Tailwind CSS 4**  | Utility-first CSS framework                     |
| **Framer Motion**   | Animaciones declarativas y micro-interacciones  |
| **Lucide React**    | Iconos SVG optimizados y consistentes           |
| **clsx / cva**      | Composición condicional de clases               |
| **tailwind-merge**  | Resolución de conflictos en clases de Tailwind  |

### Estado y Datos

| Tecnología          | Propósito                                      |
|---------------------|-------------------------------------------------|
| **Zustand**         | Estado global ligero y sin boilerplate          |
| **TanStack Query**  | Fetching, caching y sincronización de datos     |
| **Zod**             | Validación de esquemas y parsing seguro         |
| **React Hook Form** | Formularios performantes con validación         |

### Calidad y DevOps

| Tecnología          | Propósito                                      |
|---------------------|-------------------------------------------------|
| **ESLint**          | Linting con reglas estrictas de TS y React      |
| **Prettier**        | Formateo de código consistente                  |
| **Vitest**          | Testing unitario ultrarrápido                   |
| **Playwright**      | Testing E2E en navegadores reales               |

---

## 📁 Estructura del Proyecto

```
A-D_project/
├── public/                    # Assets estáticos (favicons, imágenes, fuentes)
│   ├── fonts/
│   ├── images/
│   └── icons/
│
├── src/
│   ├── app/                   # ✅ App Router de Next.js
│   │   ├── layout.tsx         # Layout raíz (providers, metadata global)
│   │   ├── page.tsx           # Página de inicio
│   │   ├── loading.tsx        # UI de carga global
│   │   ├── error.tsx          # Boundary de errores global
│   │   ├── not-found.tsx      # Página 404 personalizada
│   │   ├── globals.css        # Estilos globales + imports de Tailwind
│   │   │
│   │   ├── dashboard/         # Ruta protegida
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   │
│   │   └── api/               # API Routes (si se necesitan)
│   │       └── [...route]/
│   │           └── route.ts
│   │
│   ├── components/            # Componentes reutilizables
│   │   ├── ui/                # Primitivos de UI (Button, Input, Modal, Card...)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── card.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── index.ts       # Barrel export
│   │   │
│   │   ├── layout/            # Componentes de estructura (Header, Footer, Sidebar)
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── nav-links.tsx
│   │   │
│   │   └── shared/            # Componentes de negocio compartidos
│   │       └── theme-toggle.tsx
│   │
│   ├── hooks/                 # Custom hooks
│   │   ├── use-media-query.ts
│   │   ├── use-debounce.ts
│   │   └── use-local-storage.ts
│   │
│   ├── lib/                   # Utilidades, configuraciones y helpers
│   │   ├── utils.ts           # Funciones utilitarias generales (cn, formatDate...)
│   │   └── constants.ts       # Constantes de la aplicación
│   │
│   ├── stores/                # Zustand stores
│   │   └── ui-store.ts
│   │
│   └── types/                 # Definiciones de tipos TypeScript
│       ├── api.ts             # Tipos de request/response
│       └── index.ts           # Tipos globales y re-exports
│
├── tests/                     # Tests organizados por tipo
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.local                 # Variables de entorno locales (NO commitear)
├── .env.example               # Plantilla de variables de entorno
├── .eslintrc.json             # Configuración de ESLint
├── .prettierrc                # Configuración de Prettier
├── .gitignore
├── next.config.ts             # Configuración de Next.js
├── tsconfig.json              # Configuración de TypeScript
├── postcss.config.mjs         # Configuración de PostCSS (Tailwind v4)
├── package.json
├── AGENTS.md                  # ← Este archivo
└── README.md
```

---

## 📐 Convenciones de Código

### Nomenclatura

| Elemento              | Convención          | Ejemplo                          |
|-----------------------|---------------------|----------------------------------|
| Archivos de componente| `kebab-case.tsx`    | `user-avatar.tsx`                |
| Componentes React     | `PascalCase`        | `UserAvatar`                     |
| Hooks                 | `camelCase` con `use` | `useMediaQuery`                |
| Utilidades/funciones  | `camelCase`         | `formatDate()`                  |
| Tipos/Interfaces      | `PascalCase`        | `ApiResponse`, `NavItem`        |
| Constantes            | `UPPER_SNAKE_CASE`  | `ROUTES`, `DURATION`            |
| Variables CSS         | `--kebab-case`      | `--accent-primary`              |
| Rutas de API          | `kebab-case`        | `/api/user-profile`             |

### TypeScript

```typescript
// ✅ Preferir `type` para objetos y uniones
type UserRole = 'admin' | 'editor' | 'viewer';

type User = {
  id: string;
  name: string;
  role: UserRole;
  createdAt: Date;
};

// ✅ Usar `interface` solo para extensión/herencia
interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// ✅ Props tipadas explícitamente
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
```

### Componentes React

```tsx
// ✅ Patrón recomendado para componentes
'use client'; // Solo si necesita interactividad del cliente

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all',
          'focus-visible:outline-none focus-visible:ring-2',
          isLoading && 'pointer-events-none opacity-50',
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
```

### Server vs Client Components

```
Regla general:
- Por defecto → Server Component (sin 'use client')
- Solo añadir 'use client' cuando se necesite:
  → useState, useEffect, useRef
  → Event handlers (onClick, onChange...)
  → Browser APIs (localStorage, window...)
  → Hooks de terceros (useQuery, useForm...)

Estrategia de composición:
- Server Component como contenedor → fetch de datos
- Client Component como hijo → interactividad
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores (Tema Oscuro Premium)

```css
:root {
  /* Fondo */
  --bg-primary:    hsl(220, 20%, 6%);     /* #0d0f14 — fondo principal */
  --bg-secondary:  hsl(220, 18%, 10%);    /* #151820 — fondo elevado */
  --bg-tertiary:   hsl(220, 16%, 14%);    /* #1e2230 — superficies/cards */

  /* Texto */
  --text-primary:   hsl(220, 20%, 95%);   /* #eef0f4 — texto principal */
  --text-secondary: hsl(220, 15%, 65%);   /* #9ca3b4 — texto secundario */
  --text-muted:     hsl(220, 10%, 45%);   /* #6b7080 — texto apagado */

  /* Acento */
  --accent-primary:  hsl(250, 90%, 65%);  /* violeta vibrante */
  --accent-hover:    hsl(250, 90%, 72%);  /* hover state */
  --accent-subtle:   hsl(250, 90%, 65%, 0.12);

  /* Semánticos */
  --success:  hsl(150, 80%, 50%);
  --warning:  hsl(40, 95%, 55%);
  --error:    hsl(0, 85%, 60%);
  --info:     hsl(210, 90%, 60%);

  /* Bordes */
  --border:       hsl(220, 15%, 18%);
  --border-hover: hsl(220, 15%, 28%);

  /* Sombras */
  --shadow-sm:   0 1px 2px hsl(0 0% 0% / 0.3);
  --shadow-md:   0 4px 12px hsl(0 0% 0% / 0.4);
  --shadow-lg:   0 8px 32px hsl(0 0% 0% / 0.5);
  --shadow-glow: 0 0 20px hsl(250, 90%, 65%, 0.15);
}
```

### Tipografía

```
Font Stack:
  - Headings/Body: "Inter", system-ui, -apple-system, sans-serif
  - Code:          "JetBrains Mono", "Fira Code", monospace

Escala Tipográfica (fluid con clamp):
  - h1: clamp(2.2rem, 1.6rem + 2.5vw, 3.5rem)
  - h2: clamp(1.8rem, 1.4rem + 1.5vw, 2.4rem)
  - h3: clamp(1.3rem, 1.1rem + 0.8vw, 1.6rem)
  - h4: clamp(1.1rem, 1rem + 0.5vw, 1.25rem)
  - base: clamp(0.9rem, 0.85rem + 0.3vw, 1rem)
```

### Principios de Animación

```
Duraciones:
  - Rápida (hover, focus):  150ms
  - Normal (transiciones):  250ms
  - Suave (modales, menús): 350ms
  - Dramática (hero, page): 500-700ms

Easings:
  - Default: cubic-bezier(0.4, 0, 0.2, 1)
  - Enter:   cubic-bezier(0, 0, 0.2, 1)
  - Exit:    cubic-bezier(0.4, 0, 1, 1)
  - Bounce:  cubic-bezier(0.34, 1.56, 0.64, 1)

Reglas:
  - Respetar prefers-reduced-motion
  - Nunca animar layout properties → usar transform
  - Micro-interacciones en TODOS los elementos interactivos
```

---

## ⚡ Rendimiento

```
Objetivos (Core Web Vitals):
  - LCP  < 2.5s
  - INP  < 200ms
  - CLS  < 0.1
  - FCP  < 1.8s

Estrategias:
  - Server Components por defecto (cero JS al cliente)
  - next/image para TODAS las imágenes (lazy load + formatos modernos)
  - next/font para fuentes optimizadas (sin layout shift)
  - Dynamic imports para componentes pesados
  - Suspense boundaries con loading states elegantes
  - ISR/SSG para contenido estático o semi-estático
```

---

## 🚀 Scripts Disponibles

```json
{
  "dev":      "next dev --turbopack",
  "build":    "next build",
  "start":    "next start",
  "lint":     "next lint && tsc --noEmit",
  "format":   "prettier --write .",
  "test":     "vitest",
  "test:e2e": "playwright test",
  "test:ci":  "vitest run && playwright test"
}
```

---

## 📦 Dependencias Instaladas

```bash
# Core
next@15  react@19  react-dom@19  typescript

# UI & Animaciones
framer-motion  lucide-react  clsx  class-variance-authority  tailwind-merge

# Estado & Datos
zustand  @tanstack/react-query  zod  react-hook-form  @hookform/resolvers

# Estilos
tailwindcss@^4  @tailwindcss/postcss

# Dev
eslint  eslint-config-next  prettier  eslint-config-prettier
```

---

## 🤖 Instrucciones para Agentes de IA

### Al generar código para este proyecto:

1. **Siempre usar TypeScript estricto** — Sin `any`, sin `as` innecesarios.
2. **App Router** — Nunca usar Pages Router ni `getServerSideProps`.
3. **Server Components primero** — Solo marcar `'use client'` cuando sea imprescindible.
4. **Imports con alias** — Usar `@/` en lugar de rutas relativas profundas.
5. **Componentes atómicos** — Un componente por archivo, exportación nombrada.
6. **Estilos con Tailwind** — No usar CSS modules ni styled-components.
7. **Error handling** — Usar `error.tsx` boundaries y try/catch en Server Actions.
8. **Accesibilidad** — Roles ARIA, labels, contraste WCAG AA mínimo.
9. **Animaciones** — Usar Framer Motion; respetar `prefers-reduced-motion`.
10. **Documentar decisiones** — Comentar el "por qué", no el "qué".

### Al modificar la estructura:

- **Nuevas features** → crear carpeta en `src/app/` con su `page.tsx` y `layout.tsx`.
- **Nuevos componentes UI** → añadir en `src/components/ui/` y re-exportar en `index.ts`.
- **Nuevos hooks** → añadir en `src/hooks/` con prefijo `use-`.
- **Nuevos tipos** → añadir en `src/types/index.ts`.
- **Nuevo estado global** → crear store en `src/stores/` con Zustand.

---

## 📋 Checklist Pre-Deploy

- [ ] `npm run build` sin errores ni warnings
- [ ] `npm run lint` limpio
- [ ] Tests unitarios pasan (`vitest run`)
- [ ] Tests E2E pasan (`playwright test`)
- [ ] Variables de entorno configuradas en producción
- [ ] `robots.txt` y `sitemap.xml` generados
- [ ] Meta tags y Open Graph configurados
- [ ] Lighthouse score > 90 en todas las categorías
- [ ] `prefers-reduced-motion` respetado
- [ ] Responsive en mobile, tablet y desktop

---

*Última actualización: 2026-05-08*
