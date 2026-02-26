/**
 * Hub API utilities for SmarterOS
 * 
 * Principles:
 * - Frontend does NOT decide prices or sources
 * - All intelligence comes from backend hub
 * - Frontend only converts and displays
 */

const HUB_BASE_URL = process.env.NEXT_PUBLIC_HUB_URL || "/api"

export async function fetchFromHub<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${HUB_BASE_URL}${endpoint}`
  
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Hub error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export interface HubProduct {
  id: string
  name: string
  description: string
  recommended_source: "CL" | "AR"
  final_price: number
  currency: string
  stock_available: boolean
  lead_time?: string
}

export interface HubCatalog {
  products: HubProduct[]
  last_updated: string
  source: string
}
