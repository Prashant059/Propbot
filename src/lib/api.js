const API_BASE_URL = "https://68b826bcb715405043274639.mockapi.io/api/properties"

export async function fetchProperties() {
  try {
    const response = await fetch(`${API_BASE_URL}/PropertyListing`)
    if (!response.ok) {
      throw new Error("Failed to fetch properties")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching properties:", error)
    return []
  }
}

export async function fetchProperty(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/PropertyListing/${id}`)
    if (!response.ok) {
      throw new Error("Failed to fetch property")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching property:", error)
    return null
  }
}

export async function fetchPropertiesWithFilters(filters = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}/PropertyListing`)
    if (!response.ok) {
      throw new Error("Failed to fetch properties")
    }
    let properties = await response.json()

    // Apply client-side filtering since the API doesn't support server-side filtering
    if (filters.city) {
      properties = properties.filter((property) => property.city.toLowerCase().includes(filters.city.toLowerCase()))
    }

    return properties
  } catch (error) {
    console.error("Error fetching filtered properties:", error)
    return []
  }
}

export async function searchProperties(query) {
  try {
    const response = await fetch(`${API_BASE_URL}/PropertyListing`)
    if (!response.ok) {
      throw new Error("Failed to fetch properties")
    }
    const properties = await response.json()

    // Filter properties based on search query
    const filteredProperties = properties.filter(
      (property) =>
        property.name.toLowerCase().includes(query.toLowerCase()) ||
        property.city.toLowerCase().includes(query.toLowerCase()) ||
        property.state.toLowerCase().includes(query.toLowerCase()) ||
        property.country.toLowerCase().includes(query.toLowerCase()),
    )

    return filteredProperties
  } catch (error) {
    console.error("Error searching properties:", error)
    return []
  }
}

export function enhancePropertyData(property) {
  const bedrooms = Number.parseInt(property.buildingNumber) || Math.floor(Math.random() * 4) + 1

  return {
    ...property,
    price: Math.floor(Math.random() * 500000) + 200000, // Random price between 200k-700k
    type: Math.random() > 0.5 ? "sale" : "rent",
    bedrooms,
    bathrooms: Math.floor(Math.random() * 3) + 1,
    area: Math.floor(Math.random() * 2000) + 800, // Square feet
    description: `Spacious ${bedrooms}BHK apartment in a prime location with modern amenities.`,
    amenities: ["Parking", "Security", "Gym", "Swimming Pool", "Garden"],
    rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // Rating between 3.0-5.0
  }
}


export async function getFeaturedProperties(limit = 6) {
  try {
    const properties = await fetchProperties()
    return properties.slice(0, limit)
  } catch (error) {
    console.error("Error fetching featured properties:", error)
    return []
  }
}

export async function getPropertiesByType(type) {
  try {
    const properties = await fetchProperties()
    // Since the API doesn't have type field, we'll simulate it
    return properties.filter((_, index) => {
      if (type === "sale") return index % 2 === 0
      return index % 2 === 1
    })
  } catch (error) {
    console.error(`Error fetching ${type} properties:`, error)
    return []
  }
}
