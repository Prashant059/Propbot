"use client";

import { Button } from "./ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { Home, MapPin } from "lucide-react";
import { useState } from "react";

export function PropertySearch({ onSearch, loading }) {
  const [filters, setFilters] = useState({
    type: "all",
    propertyType: "house",
    location: "indonesia",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch("", filters);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row gap-2 items-center w-full"
    >
      {/* For Buying */}
      <Select
        value={filters.type}
        onValueChange={(value) => setFilters({ ...filters, type: value })}
      >
        <SelectTrigger className="rounded-full w-full md:w-[220px] h-14">
          <SelectValue placeholder="For Buying" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="sale">For Sale</SelectItem>
          <SelectItem value="rent">For Rent</SelectItem>
        </SelectContent>
      </Select>

      {/* Property Type */}
      <Select
        value={filters.propertyType}
        onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
      >
        <SelectTrigger className="rounded-full w-full md:w-[220px] h-14">
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

      {/* Location */}
      <Select
        value={filters.location}
        onValueChange={(value) => setFilters({ ...filters, location: value })}
      >
        <SelectTrigger className="rounded-full w-full md:w-[220px] h-14">
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

      {/* Search Button */}
      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 px-20 py-3 rounded-full h-15"
        disabled={loading}
      >
        {loading ? "Searching..." : "Find Property"}
      </Button>
    </form>
  );
}
