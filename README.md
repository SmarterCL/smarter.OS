# Smarter OS - Documentación del Proyecto

## 📋 Descripción

**Smarter OS** es un Sistema Operativo Comercial para Chile, diseñado para potenciar negocios digitales con estándares reales. Preparado para integración con Sercotec y SII.

Enfocado en **eficiencia operativa, seguridad y resultados medibles**. No es solo un proyecto, es una plataforma que hace funcionar tu negocio.

---

## 🏗️ Propuesta de Valor

- **Arquitectura Backend Orientada a Negocio**
- **Infraestructura para Sistemas Agénticos e IA Aplicada**
- **Modelo SaaS Multi-Tenant Replicable**

---

## 🛠️ Stack Tecnológico (Smarter Stack)

Herramientas seleccionadas por rendimiento, estabilidad y valor demostrado en producción.

### 1. Suite de Negocio (CRM + ERP)
- **Core:** [Odoo V19](https://www.odoo.com/) (ERP Multi-Tenant)
- **Comunicación:** [Chatwoot](https://www.chatwoot.com/) (Omnicanalidad) + WABA
- **Orquestación:** [n8n](https://n8n.io/) (Flujos de venta automatizados)

### 2. Gateway IA (Smarter Runtime MCP)
- **Proxy:** [Caddy](https://caddyserver.com/) (HTTPS automático, certificados)
- **Runtime:** FastAPI + Model Context Protocol (MCP) para conectar agentes con el mundo real.

### 3. Business Intelligence (KPI Smarter)
- **Visualización:** [Grafana](https://grafana.com/)
- **Analytics:** [Metabase](https://www.metabase.com/)
- **Objetivo:** Tableros de control unificados en tiempo real.

### 4. Infraestructura & Despliegue
- **Base:** VPS (Hostinger)
- **Gestión:** [Dokploy](https://dokploy.com/)
- **Contenedores:** Docker (Aislamiento total por servicio)

### 5. Datos
- **Base de Datos:** [Supabase](https://supabase.com/) (Motor único compartido con aislamiento por DB)


### UI & Styling

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [shadcn/ui](https://ui.shadcn.com/) | latest | Componentes UI (new-york style) |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1.9 | Utility-first CSS |
| [Lucide React](https://lucide.dev/) | 0.564.0 | Librería de íconos |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Soporte dark/light mode |

### Componentes Radix UI

El proyecto incluye 25+ componentes de [Radix UI](https://www.radix-ui.com/):

- **Layout:** Accordion, Collapsible, ScrollArea, Separator
- **Navegación:** NavigationMenu, Menubar, Tabs
- **Overlays:** Dialog, AlertDialog, Popover, HoverCard, Tooltip, Drawer
- **Forms:** Checkbox, RadioGroup, Select, Switch, Slider, Input, Label
- **Feedback:** Toast, Progress, Avatar
- **Inputs:** Command Menu (cmdk), Date Picker, Carousel, OTP Input

### Utilidades

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `zod` | 3.24.1 | Validación de esquemas |
| `react-hook-form` | 7.54.1 | Manejo de formularios |
| `@hookform/resolvers` | 3.9.1 | Integración Zod + RHF |
| `date-fns` | 4.1.0 | Manipulación de fechas |
| `recharts` | 2.15.0 | Gráficos y visualizaciones |
| `class-variance-authority` | 0.7.1 | Variantes de clases CSS |
| `clsx` | 2.1.1 | Utilidad conditional classes |
| `tailwind-merge` | 3.3.1 | Merge de clases Tailwind |
| `sonner` | 1.7.1 | Sistema de notificaciones toast |
| `vaul` | 1.1.2 | Drawer component |
| `input-otp` | 1.4.2 | Input OTP |
| `react-day-picker` | 9.13.2 | Calendar/Date picker |
| `react-resizable-panels` | 2.1.7 | Paneles redimensionables |
| `embla-carousel-react` | 8.6.0 | Carousel táctil |
| `cmdk` | 1.1.1 | Command palette |

### Analytics & Monitoreo

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| `@vercel/analytics` | 1.6.1 | Analytics de Vercel |

---

## 🎨 Branding

### Identidad Visual

| Elemento | Valor |
|----------|-------|
| **Nombre** | Smarter OS |
| **Tagline** | Sistema Operativo Comercial para Chile |
| **Descripción** | Preparado para Sercotec y SII. Infraestructura, seguridad y automatización |
| **Color de tema** | `#1a2332` (azul oscuro) |
| **Base de color UI** | neutral |
| **Variables CSS** | Habilitadas |

### Tipografía

| Fuente | Uso | Proveedor |
|--------|-----|-----------|
| **Inter** | Texto principal | Google Fonts |
| **JetBrains Mono** | Código/técnico | Google Fonts |

### Íconos

- **Formato principal:** SVG
- **Íconos de pestaña:** PNG con soporte light/dark mode
  - Light: `/icon-light-32x32.png`
  - Dark: `/icon-dark-32x32.png`
  - SVG: `/icon.svg`
  - Apple Touch: `/apple-icon.png`

### Estilo de Componentes

- **Tema shadcn:** `new-york`
- **Borde redondeado:** Estilo moderno
- **Animaciones:** `tw-animate-css`

---

## 📁 Estructura del Proyecto

```
smarter.OS/
├── app/                    # Next.js App Router
│   ├── globals.css        # Estilos globales + Tailwind
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── datadelete/        # Página eliminación de datos
│   ├── privacidad/        # Política de privacidad
│   └── terminos/          # Términos y condiciones
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── hero.tsx          # Sección hero
│   ├── navbar.tsx        # Barra de navegación
│   ├── footer.tsx        # Pie de página
│   ├── stack-diagram.tsx # Diagrama del stack
│   ├── tech-stack.tsx    # Sección tech stack
│   ├── features.tsx      # Sección características
│   ├── code-preview.tsx  # Preview de código
│   ├── cta-section.tsx   # Call-to-action
│   └── profile.tsx       # Sección perfil
├── hooks/                 # Custom React hooks
├── lib/                   # Utilidades y helpers
│   └── utils.ts          # Funciones utilitarias (cn)
├── public/                # Assets estáticos
│   ├── icon-*.png        # Íconos
│   └── icon.svg          # Ícono SVG
├── styles/                # Estilos adicionales
├── .env.example          # Variables de entorno ejemplo
├── next.config.mjs       # Configuración Next.js
├── tailwind.config.ts    # Configuración Tailwind
├── tsconfig.json         # Configuración TypeScript
└── package.json          # Dependencias y scripts
```

---

## 🚀 Scripts Disponibles

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build de producción
npm run start    # Iniciar servidor de producción
npm run lint     # Ejecutar ESLint
```

---

## 🔐 Configuración de Seguridad

Headers de seguridad implementados en `next.config.mjs`:

- **HSTS:** `max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options:** `SAMEORIGIN`
- **X-Content-Type-Options:** `nosniff`
- **X-XSS-Protection:** `1; mode=block`
- **Referrer-Policy:** `strict-origin-when-cross-origin`
- **CSP:** Política de seguridad de contenidos personalizada
- **Permissions-Policy:** Restricción de cámara, micrófono, geolocalización

---

## 🌐 Variables de Entorno

Ver `.env.example`:

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL del sitio (ej: https://tudominio.cl) |
| `NEXT_PUBLIC_SITE_NAME` | Nombre del sitio |
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` | ID de Vercel Analytics (opcional) |
| `SUPPORT_EMAIL` | Email de soporte |
| `CONTACT_EMAIL` | Email de contacto |

---

## 📦 Configuración de Path Aliases

Configurado en `tsconfig.json`:

```json
{
  "@/*": ["./*"]
}
```

**Uso:**
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

---

## 🎯 Características Principales

1. **Type-Safe:** TypeScript estricto en todo el proyecto
2. **Componentes Reutilizables:** shadcn/ui + Radix UI
3. **Dark Mode:** Soporte nativo con next-themes
4. **Responsive:** Diseño mobile-first con Tailwind
5. **Accesible:** Componentes Radix con ARIA integrado
6. **SEO Optimizado:** Metadata API de Next.js
7. **Analytics:** Vercel Analytics integrado
8. **Seguro:** Headers de seguridad configurados

---

## 📄 Páginas Legales

- `/privacidad` - Política de privacidad
- `/terminos` - Términos y condiciones
- `/datadelete` - Solicitud de eliminación de datos

---

## 🔗 Enlaces

- [Documentación Next.js](https://nextjs.org/docs)
- [Documentación shadcn/ui](https://ui.shadcn.com/docs)
- [Documentación Radix UI](https://www.radix-ui.com/docs)
- [Documentación Tailwind CSS](https://tailwindcss.com/docs)
