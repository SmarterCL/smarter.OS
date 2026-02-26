# 🧠 SmarterOS — Arquitectura Frontend (Antigravity Mode)

## 🎯 objetivo

la web (`tienda.smarterbot.cl`) **no decide**  
la web **solo muestra y convierte**

toda la inteligencia vive en:
- backend (hub)
- automatización (n8n)
- storage (Supabase)

---

## ⚙️ principio base

```txt
evento → decisión → ejecución → registro
```

---

## 📐 principios de diseño

### 1. frontend = capa de conversión

- **NO calcula** precios
- **NO decide** origen (CL/AR)
- **NO aplica** márgenes
- **SOLO renderiza** lo que viene del backend

### 2. fuente única de verdad

```txt
backend hub (/v1/hub/catalog)
    ↓
n8n (orquestación)
    ↓
Supabase (persistencia)
```

### 3. arbitraje transaccional

el backend decide en tiempo real:

- origen recomendado (CL/AR)
- precio óptimo
- stock disponible
- lead time

---

## 🔄 flujo de compra

```txt
usuario → web → /onboarding?plan={slug} → backend → n8n → Supabase
```

### planes

| plan      | slug      | flujo                          |
|-----------|-----------|--------------------------------|
| Startup   | startup   | demo directo → sandbox         |
| Comercio  | comercio  | demo o setup guiado            |
| Empresa   | empresa   | agenda + validación            |

---

## ⚠️ anti-patrones (NO hacer)

```tsx
// ❌ eliminar esto si existe
if (price_ar < price_cl) { ... }
calculateMargin(price)
applyLocalDiscount(price)
```

```tsx
// ✅ correcto
product.recommended_source
product.final_price
```

---

## 🎯 lectura estratégica

esto no es un "store"

es un: **motor de arbitraje transaccional en tiempo real**

el frontend:
- solo convierte tráfico
- no piensa
- no decide

---

## 🚀 implementación mínima

1. guardar este archivo (raíz del proyecto)
2. eliminar lógica local de pricing
3. conectar endpoint real (`/v1/hub/catalog`)
4. renderizar catálogo dinámico
5. probar 1 compra real

---

## 📌 próximo paso

→ hook real conectado al endpoint + loading + fallback
