# Smarter OS API Reference

## Base URLs

| Environment | URL |
|-------------|-----|
| Sandbox | `https://sandbox.smarterbot.cl` |
| Production | `https://api.smarterbot.cl` |

---

## Hub API

### GET `/v1/hub/catalog`

Fetches the complete product catalog with real-time arbitrage data.

**Response:**
```json
[
  {
    "product_id": "plan-startup",
    "name": "Plan Startup",
    "slug": "startup",
    "recommended_source": "CL",
    "final_price": 29990,
    "currency": "CLP",
    "stock_available": true,
    "lead_time": "immediate",
    "description": "Demo directo con acceso sandbox",
    "features": ["CRM básico", "ERP esencial", "Soporte email"]
  }
]
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | string | Filter by source: `CL`, `AR`, or `all` |
| `category` | string | Filter by category: `plan`, `addon`, `service` |
| `active` | boolean | Filter by active status (default: `true`) |

---

### GET `/v1/hub/catalog/:slug`

Fetches a single product by slug.

**Response:**
```json
{
  "product_id": "plan-comercio",
  "name": "Plan Comercio",
  "slug": "comercio",
  "recommended_source": "CL",
  "final_price": 79990,
  "currency": "CLP",
  "stock_available": true,
  "lead_time": "24-48 hours",
  "description": "Setup guiado con integración completa",
  "features": [
    "CRM avanzado",
    "ERP completo",
    "Chatwoot omnicanal",
    "n8n automation",
    "Soporte prioritario"
  ],
  "arbitrage": {
    "cl_price": 79990,
    "ar_price": 85000,
    "savings": 5010,
    "recommendation": "CL"
  }
}
```

---

### POST `/v1/hub/order`

Creates a new order.

**Request:**
```json
{
  "tenant_id": "tenant-123",
  "plan_slug": "startup",
  "customer": {
    "name": "Juan Pérez",
    "email": "juan@empresa.cl",
    "rut": "12.345.678-9"
  },
  "metadata": {
    "source": "web",
    "campaign": "sercotec-2026"
  }
}
```

**Response:**
```json
{
  "order_id": "ord-abc123",
  "status": "pending",
  "next_step": "payment",
  "payment_url": "https://pay.smarterbot.cl/ord-abc123",
  "estimated_activation": "2026-03-02T15:00:00Z"
}
```

**Status Codes:**

| Code | Status | Description |
|------|--------|-------------|
| 201 | Created | Order created successfully |
| 400 | Bad Request | Invalid plan slug or customer data |
| 409 | Conflict | Tenant already has active subscription |
| 503 | Service Unavailable | Backend temporarily unavailable |

---

## Onboarding API

### GET `/v1/onboarding/:plan_slug`

Fetches onboarding configuration for a plan.

**Response:**
```json
{
  "plan_slug": "empresa",
  "flow_type": "agenda_validation",
  "steps": [
    {
      "id": 1,
      "name": "Validación de datos",
      "endpoint": "/v1/onboarding/empresa/validate",
      "method": "POST"
    },
    {
      "id": 2,
      "name": "Agendar demo",
      "endpoint": "/v1/onboarding/empresa/schedule",
      "method": "POST"
    },
    {
      "id": 3,
      "name": "Firma contrato",
      "endpoint": "/v1/onboarding/empresa/contract",
      "method": "POST"
    }
  ],
  "estimated_completion": "5-7 business days"
}
```

---

### POST `/v1/onboarding/:plan_slug/validate`

Validates customer data for onboarding.

**Request:**
```json
{
  "tenant_id": "tenant-123",
  "business_data": {
    "razon_social": "Empresa SpA",
    "rut": "76.123.456-8",
    "giro": "Comercio electrónico",
    "direccion": "Av. Providencia 1234",
    "comuna": "Providencia",
    "region": "Metropolitana"
  }
}
```

**Response:**
```json
{
  "valid": true,
  "sii_status": "verified",
  "sercotec_eligible": true,
  "warnings": [],
  "next_step": "schedule"
}
```

---

## Analytics API

### GET `/v1/analytics/kpi`

Fetches KPI data for Grafana/Metabase dashboards.

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tenant_id` | string | Tenant identifier (required) |
| `metric` | string | Metric type: `revenue`, `orders`, `activation` |
| `from` | string | Start date (ISO 8601) |
| `to` | string | End date (ISO 8601) |
| `granularity` | string | `day`, `week`, `month` |

**Response:**
```json
{
  "tenant_id": "tenant-123",
  "metric": "revenue",
  "period": {
    "from": "2026-02-01",
    "to": "2026-03-01"
  },
  "data": [
    { "date": "2026-02-01", "value": 29990 },
    { "date": "2026-02-02", "value": 35500 },
    { "date": "2026-02-03", "value": 42000 }
  ],
  "summary": {
    "total": 1250000,
    "average": 41666,
    "growth": 12.5
  }
}
```

---

## Webhooks (n8n)

### Available Webhooks

| Webhook | Event | Payload |
|---------|-------|---------|
| `order.created` | New order created | Order object + customer data |
| `payment.completed` | Payment successful | Payment confirmation + order ID |
| `customer.onboarded` | Onboarding complete | Tenant ID + activation date |
| `invoice.generated` | SII invoice created | DTE data + PDF URL |
| `subscription.cancelled` | Subscription cancelled | Cancellation reason + date |

### Webhook Payload Example

```json
{
  "event": "order.created",
  "timestamp": "2026-03-02T10:30:00Z",
  "tenant_id": "tenant-123",
  "data": {
    "order_id": "ord-abc123",
    "plan_slug": "comercio",
    "amount": 79990,
    "currency": "CLP",
    "customer": {
      "name": "Juan Pérez",
      "email": "juan@empresa.cl",
      "rut": "12.345.678-9"
    }
  },
  "metadata": {
    "source": "web",
    "campaign": "sercotec-2026",
    "user_agent": "Mozilla/5.0..."
  }
}
```

---

## Error Handling

### Standard Error Format

```json
{
  "error": "ERROR_CODE",
  "message": "Human-readable message",
  "details": {
    "field": "additional context"
  },
  "fallback": {
    "suggested_action": "what to do next"
  }
}
```

### Common Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `OUT_OF_STOCK` | Product not available | Use fallback source or wait for restock |
| `INVALID_RUT` | RUT format invalid | Validate RUT before submission |
| `TENANT_EXISTS` | Tenant already registered | Use existing tenant ID |
| `PAYMENT_FAILED` | Payment processing failed | Retry with different payment method |
| `SII_UNAVAILABLE` | SII service down | Retry later, queue for async processing |

---

## Authentication

### API Key Authentication

Most endpoints require API key authentication via header:

```
Authorization: Bearer YOUR_API_KEY
```

### Tenant Authentication

Tenant-specific requests include tenant ID:

```
X-Tenant-ID: tenant-123
```

---

## Rate Limiting

| Tier | Requests/minute | Burst |
|------|-----------------|-------|
| Free | 60 | 10 |
| Startup | 300 | 50 |
| Comercio | 1000 | 100 |
| Empresa | 5000 | 500 |

**Headers:**
```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1646218800
```

---

## Integration Examples

### Next.js API Route

```typescript
// app/api/catalog/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(`${process.env.BACKEND_URL}/v1/hub/catalog`, {
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`,
    },
  });
  
  const catalog = await res.json();
  return NextResponse.json(catalog);
}
```

### React Hook

```typescript
// hooks/use-catalog.ts
import { useEffect, useState } from 'react';

export function useCatalog() {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('/api/catalog')
      .then(res => res.json())
      .then(data => {
        setCatalog(data);
        setLoading(false);
      });
  }, []);
  
  return { catalog, loading };
}
```

---

## Testing

### Sandbox Credentials

```
API Key: sk_test_...
Tenant ID: tenant_sandbox_123
```

### cURL Examples

```bash
# Fetch catalog
curl -X GET https://sandbox.smarterbot.cl/v1/hub/catalog \
  -H "Authorization: Bearer sk_test_..."

# Create order
curl -X POST https://sandbox.smarterbot.cl/v1/hub/order \
  -H "Authorization: Bearer sk_test_..." \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_id": "tenant_sandbox_123",
    "plan_slug": "startup",
    "customer": {
      "name": "Test User",
      "email": "test@example.cl",
      "rut": "11.111.111-1"
    }
  }'
```
