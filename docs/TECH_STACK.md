# Tech Stack - Smarter OS

## Resumen Ejecutivo

Smarter OS está construido con tecnologías modernas y robustas, enfocadas en rendimiento, escalabilidad y experiencia de desarrollador.

---

## Stack Tecnológico

### 🖥️ Frontend

```
┌─────────────────────────────────────────────────────────┐
│                    Smarter OS Stack                      │
├─────────────────────────────────────────────────────────┤
│  Framework        │ Next.js 16.1.6                      │
│  Librería UI      │ React 19.2.4                        │
│  Lenguaje         │ TypeScript 5.7.3                    │
│  Runtime          │ Node.js ≥24.0.0                     │
├─────────────────────────────────────────────────────────┤
│  Estilos          │ Tailwind CSS 4.1.9                  │
│  Componentes      │ shadcn/ui (new-york)                │
│  Primitivas       │ Radix UI (25+ componentes)          │
│  Íconos           │ Lucide React 0.564.0                │
├─────────────────────────────────────────────────────────┤
│  Tema             │ next-themes 0.4.6                   │
│  Tipografía       │ Inter + JetBrains Mono              │
│  Animaciones      │ tw-animate-css                      │
├─────────────────────────────────────────────────────────┤
│  Formularios      │ react-hook-form + zod               │
│  Gráficos         │ recharts 2.15.0                     │
│  Fechas           │ date-fns 4.1.0                      │
│  Notificaciones   │ sonner 1.7.1                        │
├─────────────────────────────────────────────────────────┤
│  Analytics        │ @vercel/analytics 1.6.1             │
└─────────────────────────────────────────────────────────┘
```

---

## Dependencias Detalladas

### Producción

| Paquete | Versión | Categoría |
|---------|---------|-----------|
| `next` | 16.1.6 | Framework |
| `react` | 19.2.4 | UI Library |
| `react-dom` | 19.2.4 | UI Library DOM |
| `typescript` | 5.7.3 | Language |

#### UI & Componentes

| Paquete | Versión |
|---------|---------|
| `@radix-ui/react-accordion` | 1.2.12 |
| `@radix-ui/react-alert-dialog` | 1.1.15 |
| `@radix-ui/react-aspect-ratio` | 1.1.8 |
| `@radix-ui/react-avatar` | 1.1.11 |
| `@radix-ui/react-checkbox` | 1.3.3 |
| `@radix-ui/react-collapsible` | 1.1.12 |
| `@radix-ui/react-context-menu` | 2.2.16 |
| `@radix-ui/react-dialog` | 1.1.15 |
| `@radix-ui/react-dropdown-menu` | 2.1.16 |
| `@radix-ui/react-hover-card` | 1.1.15 |
| `@radix-ui/react-label` | 2.1.8 |
| `@radix-ui/react-menubar` | 1.1.16 |
| `@radix-ui/react-navigation-menu` | 1.2.14 |
| `@radix-ui/react-popover` | 1.1.15 |
| `@radix-ui/react-progress` | 1.1.8 |
| `@radix-ui/react-radio-group` | 1.3.8 |
| `@radix-ui/react-scroll-area` | 1.2.10 |
| `@radix-ui/react-select` | 2.2.6 |
| `@radix-ui/react-separator` | 1.1.8 |
| `@radix-ui/react-slider` | 1.3.6 |
| `@radix-ui/react-slot` | 1.2.4 |
| `@radix-ui/react-switch` | 1.2.6 |
| `@radix-ui/react-tabs` | 1.1.13 |
| `@radix-ui/react-toast` | 1.2.15 |
| `@radix-ui/react-toggle` | 1.1.10 |
| `@radix-ui/react-toggle-group` | 1.1.11 |
| `@radix-ui/react-tooltip` | 1.2.8 |

#### Utilidades

| Paquete | Versión |
|---------|---------|
| `@hookform/resolvers` | 3.9.1 |
| `class-variance-authority` | 0.7.1 |
| `clsx` | 2.1.1 |
| `cmdk` | 1.1.1 |
| `date-fns` | 4.1.0 |
| `embla-carousel-react` | 8.6.0 |
| `input-otp` | 1.4.2 |
| `lucide-react` | 0.564.0 |
| `next-themes` | 0.4.6 |
| `react-day-picker` | 9.13.2 |
| `react-hook-form` | 7.54.1 |
| `react-resizable-panels` | 2.1.7 |
| `recharts` | 2.15.0 |
| `sonner` | 1.7.1 |
| `tailwind-merge` | 3.3.1 |
| `vaul` | 1.1.2 |
| `zod` | 3.24.1 |

#### Analytics

| Paquete | Versión |
|---------|---------|
| `@vercel/analytics` | 1.6.1 |

### Desarrollo

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `@tailwindcss/postcss` | 4.1.13 | PostCSS plugin Tailwind |
| `@types/node` | 24 | Tipos Node.js |
| `@types/react` | 19.2.14 | Tipos React |
| `@types/react-dom` | 19.2.3 | Tipos React DOM |
| `autoprefixer` | 10.4.20 | Autoprefixer CSS |
| `postcss` | 8.5 | PostCSS |
| `tailwindcss` | 4.1.9 | Tailwind CSS |
| `tw-animate-css` | 1.3.3 | Animaciones |

---

## Configuración

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### shadcn/ui (`components.json`)

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide"
}
```

---

## ¿Por qué este Stack?

| Tecnología | Razón de Elección |
|------------|-------------------|
| **Next.js 16** | SSR, ISR, optimización automática, App Router |
| **React 19** | Última versión con mejores features |
| **TypeScript** | Type-safety, mejor DX, menos bugs |
| **Tailwind CSS 4** | Utility-first, rápido, personalizable |
| **shadcn/ui** | Componentes copiables, sin runtime extra |
| **Radix UI** | Accesibilidad integrada, primitivas sin estilo |
| **Lucide** | Íconos modernos, ligeros, consistentes |
| **Zod** | Validación type-safe, schema-first |
| **Vercel Analytics** | Integración nativa, privacy-focused |

---

## Actualizaciones Futuras Consideradas

- [ ] Autenticación (NextAuth.js / Clerk)
- [ ] Base de datos (PostgreSQL + Prisma/Drizzle)
- [ ] API Routes (backend integrado)
- [ ] Testing (Vitest + React Testing Library)
- [ ] E2E Testing (Playwright)
- [ ] Storybook (documentación de componentes)

---

*Última actualización: Febrero 2026*
