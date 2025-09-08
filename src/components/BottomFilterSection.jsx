"use client";

import { PropertySearch } from "./PropertySearch";

export function BottomFiltersSection({ onSearch, loading }) {
  return (
    <div className="relative w-full -mt-10 z-20 flex justify-center border-red-500">
      {/* -mt-32 pulls the filters up half inside hero */}
      <div className="w-[90%] max-w-5xl">
        <PropertySearch onSearch={onSearch} loading={loading} />
      </div>
    </div>
  );
}
