"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Search, MapPin, Home } from "lucide-react"

export function PropertySearch({ onSearch, loading }) {
  const [query, setQuery] = useState("")
  const [filters, setFilters] = useState({
    type: "all",
    propertyType: "house",
    location: "indonesia",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query, filters)
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 items-end"
      >
        {/* Search Input */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Location
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search location..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Property Type Filter */}
        <div className="w-full md:w-48">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            For Buying
          </label>
          <Select
            value={filters.type}
            onValueChange={(value) =>
              setFilters({ ...filters, type: value })
            }
          >
            <SelectTrigger className="text-gray-900">
              <SelectValue placeholder="For Buying" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="sale">For Sale</SelectItem>
              <SelectItem value="rent">For Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* House Type Filter */}
        <div className="w-full md:w-48">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            House
          </label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) =>
              setFilters({ ...filters, propertyType: value })
            }
          >
            <SelectTrigger className="text-gray-900">
              <Home className="h-4 w-4 mr-2 text-gray-500" />
              <SelectValue placeholder="House" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location Filter */}
        <div className="w-full md:w-48">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <Select
            value={filters.location}
            onValueChange={(value) =>
              setFilters({ ...filters, location: value })
            }
          >
            <SelectTrigger className="text-gray-900">
              <MapPin className="h-4 w-4 mr-2 text-gray-500" />
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indonesia">Indonesia</SelectItem>
              <SelectItem value="jakarta">Jakarta</SelectItem>
              <SelectItem value="surabaya">Surabaya</SelectItem>
              <SelectItem value="bandung">Bandung</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 h-auto"
          disabled={loading}
        >
          {loading ? "Searching..." : "Find Property"}
        </Button>
      </form>
    </div>
  )
}
