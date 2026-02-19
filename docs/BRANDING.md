# Branding - Smarter OS

## 🎨 Identidad de Marca

### Información Básica

| Elemento | Valor |
|----------|-------|
| **Nombre** | Smarter OS |
| **Tagline** | Sistema Operativo Comercial para Chile |
| **Descripción** | Preparado para Sercotec y SII. Infraestructura, seguridad y automatización |
| **Mercado Objetivo** | Chile |
| **Idioma Principal** | Español (es) |

---

## 🎨 Identidad Visual

### Colores

#### Color Principal

```
Tema: #1a2332
└── Azul oscuro profesional
    └── Transmite confianza y tecnología
```

#### Sistema de Colores shadcn/ui

```
Base: neutral
├── Background: dinámico (light/dark)
├── Foreground: contraste automático
├── Primary: énfasis principal
├── Secondary: elementos secundarios
├── Muted: texto secundario
├── Accent: elementos destacados
└── Destructive: errores/alertas
```

#### Variables CSS Disponibles

```css
/* Colores */
--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--ring

/* Bordes */
--radius

/* Fuentes */
--font-inter
--font-jetbrains
```

---

## 📝 Tipografía

### Fuentes Principales

```
┌──────────────────────────────────────────────┐
│  Inter                                       │
│  ─────────────────────────────────────────── │
│  Uso: Texto principal, UI, navegación        │
│  Peso: 400, 500, 600, 700                    │
│  Proveedor: Google Fonts                     │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│  JetBrains Mono                              │
│  ─────────────────────────────────────────── │
│  Uso: Código, elementos técnicos, logs       │
│  Peso: 400, 500, 700                         │
│  Proveedor: Google Fonts                     │
└──────────────────────────────────────────────┘
```

### Escala Tipográfica (Tailwind)

| Clase | Tamaño | Uso |
|-------|--------|-----|
| `text-xs` | 0.75rem | Labels, metadata |
| `text-sm` | 0.875rem | Texto secundario |
| `text-base` | 1rem | Cuerpo de texto |
| `text-lg` | 1.125rem | Subtítulos |
| `text-xl` | 1.25rem | Títulos sección |
| `text-2xl` | 1.5rem | Títulos principales |
| `text-3xl` | 1.875rem | Hero headings |
| `text-4xl+` | 2.25rem+ | Display headings |

---

## 🖼️ Assets

### Íconos

#### Favicon (Público)

| Archivo | Dimensiones | Uso |
|---------|-------------|-----|
| `/icon.svg` | Vectorial | Navegadores modernos |
| `/icon-light-32x32.png` | 32x32 | Modo claro |
| `/icon-dark-32x32.png` | 32x32 | Modo oscuro |
| `/apple-icon.png` | 180x180 | Dispositivos Apple |

#### Librería de Íconos

**Lucide React** - 1000+ íconos disponibles

```typescript
import { IconName } from "lucide-react"

// Ejemplos comunes:
// Home, Settings, User, Menu, X, ChevronDown, etc.
```

### Logo

*Actualmente no definido - Pendiente de diseño*

**Recomendaciones:**
- Formato SVG para escalabilidad
- Versiones light/dark
- Mínimo 2 variantes: horizontal y vertical
- Incluir isotipo (ícono independiente)

---

## 🎭 Estilo de Componentes

### Tema shadcn/ui

```
Style: new-york
├── Bordes más redondeados
├── Sombras suaves
├── Animaciones fluidas
└── Aspecto moderno y limpio
```

### Características de Diseño

| Característica | Valor |
|----------------|-------|
| **Border Radius** | `0.5rem` (default) |
| **Sombras** | Sutiles, estratificadas |
| **Espaciado** | Basado en escala Tailwind (4, 8, 12, 16px) |
| **Animaciones** | `tw-animate-css` |
| **Transiciones** | 150-300ms ease-in-out |

---

## 🌓 Dark Mode

### Implementación

- **Librería:** `next-themes`
- **Detección automática:** Basada en preferencia del sistema
- **Toggle:** Manual disponible para el usuario
- **Persistencia:** localStorage

### Colores por Tema

| Elemento | Light Mode | Dark Mode |
|----------|------------|-----------|
| Background | Blanco | #1a2332 |
| Foreground | Negro | Blanco |
| Primary | Azul | Azul claro |
| Card | Blanco | Gris oscuro |

---

## 📐 Principios de Diseño

### 1. Claridad

- Texto legible con alto contraste
- Jerarquía visual clara
- Espacio en blanco adecuado

### 2. Consistencia

- Mismos componentes para mismas acciones
- Patrones de diseño repetibles
- Alineación con shadcn/ui

### 3. Accesibilidad

- Componentes Radix con ARIA integrado
- Soporte para navegación por teclado
- Contraste WCAG AA mínimo

### 4. Profesionalismo

- Paleta de colores sobria
- Tipografía limpia y moderna
- Animaciones sutiles, no distractores

---

## 📱 Responsive Design

### Breakpoints (Tailwind CSS)

| Breakpoint | Mínimo | Dispositivos |
|------------|--------|--------------|
| `sm` | 640px | Móviles grandes |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Monitores grandes |

### Enfoque

**Mobile-first:** Diseñar para móvil primero, escalar hacia arriba

---

## 🎯 Voz y Tono

### Personalidad de Marca

| Atributo | Descripción |
|----------|-------------|
| **Profesional** | Lenguaje formal pero accesible |
| **Técnico** | Preciso en terminología |
| **Confiable** | Transmite seguridad y confianza |
| **Chileno** | Adaptado al mercado local |

### Guía de Estilo

- ✅ Usar "usted" para comunicación formal
- ✅ Términos técnicos en inglés (estándar de industria)
- ✅ Explicaciones claras y concisas
- ❌ Evitar jerga innecesaria
- ❌ Evitar tono demasiado casual

---

## 📄 Elementos de Marca

### Meta Tags

```typescript
title: 'Smarter OS | Sistema Operativo Comercial para Chile'
description: 'Sistema Operativo Comercial para Chile. Preparado para Sercotec y SII. Infraestructura, seguridad y automatización.'
themeColor: '#1a2332'
```

### Emails

| Tipo | Email |
|------|-------|
| Soporte | `soporte@tudominio.cl` |
| Contacto | `contacto@tudominio.cl` |

---

## 🔮 Futuras Mejoras de Branding

- [ ] Diseño de logo profesional
- [ ] Guía de estilo completa (brand book)
- [ ] Ilustraciones personalizadas
- [ ] Sistema de íconos custom
- [ ] Paleta de colores expandida
- [ ] Tipografía propia (opcional)
- [ ] Assets para redes sociales
- [ ] Plantillas de email corporativas

---

*Última actualización: Febrero 2026*
