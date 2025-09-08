"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "./Hero";
import { BottomFiltersSection } from "./BottomFilterSection";

export default function MainHero() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (query, filters) => {
    setLoading(true);
    setTimeout(() => {
      const searchParams = new URLSearchParams();
      if (query) searchParams.set("q", query);
      if (filters.type !== "all") searchParams.set("type", filters.type);
      if (filters.propertyType) searchParams.set("propertyType", filters.propertyType);
      if (filters.location) searchParams.set("location", filters.location);

      navigate(`/properties?${searchParams.toString()}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto">
      <Hero query={query} setQuery={setQuery} />
      <BottomFiltersSection onSearch={handleSearch} loading={loading} />
    </section>
  );
}
