"use client"

import { useState, useEffect, useCallback } from "react"

export interface Product {
  id: string
  name: string
  description: string
  recommended_source: "CL" | "AR"
  final_price: number
  currency: "CLP" | "ARS" | "USD"
  stock_available: boolean
  lead_time?: string
  metadata?: Record<string, unknown>
}

export interface CatalogResponse {
  products: Product[]
  last_updated: string
  source: string
}

export interface UseCatalogOptions {
  endpoint?: string
  autoFetch?: boolean
  onError?: (error: Error) => void
}

export function useCatalog({
  endpoint = "/v1/hub/catalog",
  autoFetch = true,
  onError,
}: UseCatalogOptions = {}) {
  const [data, setData] = useState<CatalogResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(autoFetch)
  const [error, setError] = useState<Error | null>(null)

  const fetchCatalog = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(
          `Failed to fetch catalog: ${response.status} ${response.statusText}`
        )
      }

      const result: CatalogResponse = await response.json()
      setData(result)
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unknown error")
      setError(error)
      onError?.(error)
    } finally {
      setLoading(false)
    }
  }, [endpoint, onError])

  useEffect(() => {
    if (autoFetch) {
      fetchCatalog()
    }
  }, [autoFetch, fetchCatalog])

  return {
    data,
    loading,
    error,
    refetch: fetchCatalog,
  }
}
