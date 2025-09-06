"use client"

import { useState, useEffect } from "react"
import { fetchProperties, searchProperties, fetchPropertiesWithFilters } from "../lib/api"


export function useProperties(filters = {}) {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true)
        setError(null)

        let data = await fetchProperties()  

        setProperties(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [])  

  return { properties, loading, error }
}
