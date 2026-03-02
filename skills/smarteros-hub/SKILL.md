---
name: smarteros-hub
description: Smarter OS commercial system integration - Connect to Supabase backend, n8n automation, Odoo ERP, and Chatwoot omnichannel. Use for pricing, catalog, orders, and SII/Sercotec integration.
license: MIT
compatibility: Requires Supabase access, n8n workflows, Docker runtime
metadata:
  author: smarter-os
  version: "1.0"
  stack: odoo-v19, chatwoot, n8n, supabase, grafana, metabase
allowed-tools: Bash Read Write Glob GrepSearch
---

# Smarter OS Hub Integration

## When to Use This Skill

Use this skill when working with **Smarter OS** - the Chilean commercial operating system for digital businesses. This skill provides:

- **Backend Hub Integration**: Connect to `/v1/hub/catalog` for real-time pricing and arbitrage (CL/AR)
- **ERP Operations**: Odoo V19 multi-tenant operations
- **Omnichannel**: Chatwoot + WABA integration
- **Automation**: n8n workflow orchestration
- **Analytics**: Grafana and Metabase KPI dashboards
- **Compliance**: SII and Sercotec integration ready

## Architecture Principles

### Frontend = Conversion Layer Only

```
evento → decisión → ejecución → registro
```

**Frontend DOES NOT:**
- Calculate prices
- Decide origin (CL/AR)
- Apply margins
- Make business decisions

**Frontend ONLY:**
- Renders backend data
- Converts traffic
- Sends events to backend

### Single Source of Truth

```
Backend Hub (/v1/hub/catalog)
    ↓
n8n (orchestration)
    ↓
Supabase (persistence)
```

## Core Operations

### 1. Catalog & Pricing

**Endpoint**: `GET /v1/hub/catalog`

The backend performs real-time arbitrage:
- `recommended_source`: CL or AR
- `final_price`: Optimized price
- `stock_available`: Real-time inventory
- `lead_time`: Delivery estimate

**Example Response:**
```json
{
  "product_id": "plan-startup",
  "name": "Plan Startup",
  "recommended_source": "CL",
  "final_price": 29990,
  "currency": "CLP",
  "stock_available": true,
  "lead_time": "immediate"
}
```

### 2. Plan Slugs & Onboarding Flow

| Plan | Slug | Flow |
|------|------|------|
| Startup | `startup` | Demo directo → Sandbox |
| Comercio | `comercio` | Demo o setup guiado |
| Empresa | `empresa` | Agenda + validación |

**Onboarding URL Pattern:**
```
/onboarding?plan={slug}
```

### 3. Supabase Operations

**Connection Pattern:**
- Multi-tenant with isolated databases per client
- Shared infrastructure, isolated data
- Row Level Security (RLS) enabled

**Common Operations:**
```sql
-- Get catalog with arbitrage
SELECT * FROM hub_catalog 
WHERE active = true
ORDER BY final_price ASC;

-- Get order status
SELECT * FROM orders 
WHERE tenant_id = current_tenant_id()
ORDER BY created_at DESC;
```

### 4. n8n Workflow Integration

**Webhook Triggers:**
- `order.created` → ERP sync
- `payment.completed` → Invoice generation
- `customer.onboarded` → Sandbox provisioning

**Workflow Pattern:**
```
Webhook → Transform → Supabase → Odoo → Notification
```

### 5. Odoo V19 Operations

**Multi-Tenant Setup:**
- Database per tenant
- Shared codebase
- Isolated configurations

**Common Models:**
- `sale.order`: Sales orders
- `account.move`: Invoices (SII ready)
- `product.template`: Product catalog
- `res.partner`: Customers

## Anti-Patterns (DO NOT DO)

```typescript
// ❌ NEVER calculate pricing in frontend
if (price_ar < price_cl) { ... }
calculateMargin(price)
applyLocalDiscount(price)

// ✅ ALWAYS use backend values
product.recommended_source
product.final_price
```

## File Structure Reference

```
smarter.OS/
├── app/                    # Next.js App Router (conversion layer)
│   ├── page.tsx           # Home - renders backend data
│   ├── onboarding/        # Plan selection → backend
│   └── api/               # Proxy to backend hub
├── components/            # UI components (shadcn/ui)
├── lib/
│   └── api.ts            # Backend hub client
└── skills/               # Agent Skills (this directory)
```

## Common Tasks

### Task: Fetch Product Catalog

1. Call `GET /v1/hub/catalog` from backend
2. Render `product.final_price` directly
3. Display `product.recommended_source` badge
4. On purchase: send to `/onboarding?plan={slug}`

### Task: Process Order

1. Frontend sends order event to backend
2. Backend triggers n8n webhook
3. n8n orchestrates:
   - Create Supabase record
   - Sync to Odoo
   - Generate invoice (SII)
   - Send Chatwoot notification

### Task: Customer Onboarding

1. User selects plan → `/onboarding?plan={slug}`
2. Backend validates plan availability
3. n8n provisions sandbox environment
4. Chatwoot sends welcome message
5. Grafana dashboard tracks activation

## Compliance & Integration

### SII (Servicio de Impuestos Internos)

- Electronic invoicing ready
- DTE (Documento Tributario Electrónico) generation
- Real-time tax validation

### Sercotec

- SME support programs integration
- Subsidy tracking
- Compliance reporting

## Error Handling

### Backend Errors

```typescript
// Backend returns structured errors
{
  "error": "OUT_OF_STOCK",
  "message": "Product not available in selected region",
  "fallback": {
    "recommended_source": "AR",
    "estimated_restock": "2026-03-15"
  }
}
```

### Frontend Fallback

1. Display error message from backend
2. Show fallback options if provided
3. Log to Supabase analytics
4. Trigger Chatwoot support if critical

## Testing

### Sandbox Environment

```bash
# Access sandbox
curl https://sandbox.smarterbot.cl/v1/hub/catalog

# Test order flow
curl -X POST https://sandbox.smarterbot.cl/v1/orders \
  -H "Content-Type: application/json" \
  -d '{"plan": "startup", "tenant_id": "test"}'
```

### Production Checklist

- [ ] Supabase RLS enabled
- [ ] n8n webhooks configured
- [ ] Odoo multi-tenant setup
- [ ] Chatwoot inbox connected
- [ ] Grafana dashboards active
- [ ] SII certificates valid

## Related Resources

- [ARCHITECTURE.md](../ARCHITECTURE.md) - Frontend architecture details
- [README.md](../README.md) - Project overview
- [references/api.md](./references/api.md) - Complete API reference
- [scripts/deploy.sh](./scripts/deploy.sh) - Deployment automation

## Support

- **Email**: soporte@smarterbot.cl
- **Documentation**: https://smarterbot.cl/docs
- **Status**: https://status.smarterbot.cl
