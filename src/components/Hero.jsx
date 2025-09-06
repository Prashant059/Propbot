"use client";

import { useState } from "react";
import { PropertySearch } from "./PropertySearch";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/hero.jpg";

export function Hero() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (query, filters) => {
    setLoading(true);

    // Simulate search delay
    setTimeout(() => {
      // Navigate to properties page with search params
      const searchParams = new URLSearchParams();
      if (query) searchParams.set("q", query);
      if (filters.type !== "all") searchParams.set("type", filters.type);

      navigate(`/properties?${searchParams.toString()}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="relative min-h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
       <img
          src={HeroImg}
          alt="Modern house"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight animate-fade-in">
          Find Your Dream Home in One Click!
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-balance opacity-95 max-w-3xl mx-auto leading-relaxed">
          Discover, Buy, or Rent Verified Properties with Ease.
        </p>

        <div className="animate-slide-up">
          <PropertySearch onSearch={handleSearch} loading={loading} />
        </div>
      </div>
    </section>
  );
}
