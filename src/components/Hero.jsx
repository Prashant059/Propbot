// "use client";

// import { useState } from "react";
// import { PropertySearch } from "./PropertySearch";
// import { useNavigate } from "react-router-dom";
// import HeroImg from "../assets/hero.jpg";

// export function Hero() {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSearch = async (query, filters) => {
//     setLoading(true);

//     // Simulate search delay
//     setTimeout(() => {
//       // Navigate to properties page with search params
//       const searchParams = new URLSearchParams();
//       if (query) searchParams.set("q", query);
//       if (filters.type !== "all") searchParams.set("type", filters.type);

//       navigate(`/properties?${searchParams.toString()}`);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <section className="relative min-h-[700px] flex items-center justify-center">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//        <img
//           src={HeroImg}
//           alt="Modern house"
//           className="w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight animate-fade-in">
//           Find Your Dream Home in One Click!
//         </h1>
//         <p className="text-xl md:text-2xl mb-12 text-balance opacity-95 max-w-3xl mx-auto leading-relaxed">
//           Discover, Buy, or Rent Verified Properties with Ease.
//         </p>

//         <div className="animate-slide-up">
//           <PropertySearch onSearch={handleSearch} loading={loading} />
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import HeroImg from "../assets/hero.jpg";
// import { PropertySearch } from "./PropertySearch";

// export function Hero() {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSearch = async (query, filters) => {
//     setLoading(true);

//     setTimeout(() => {
//       const searchParams = new URLSearchParams();
//       if (query) searchParams.set("q", query);
//       if (filters.type !== "all") searchParams.set("type", filters.type);
//       if (filters.propertyType) searchParams.set("propertyType", filters.propertyType);
//       if (filters.location) searchParams.set("location", filters.location);

//       navigate(`/properties?${searchParams.toString()}`);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <section className="relative max-w-7xl mx-auto px-4 py-10">
//       {/* Hero Container */}
//       <div className="relative rounded-3xl overflow-hidden shadow-lg">
//         {/* Background Image */}
//         <img
//           src={HeroImg}
//           alt="Modern house"
//           className="w-full h-[600px] object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

//         {/* Content Overlay */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Find Your Dream Home in One Click!
//           </h1>
//           <p className="text-lg md:text-xl opacity-90 mb-12">
//             Discover, Buy, or Rent Verified Properties with Ease.
//           </p>

//           {/* PropertySearch */}
//           <PropertySearch onSearch={handleSearch} loading={loading} />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import HeroImg from "../assets/hero.jpg";

export function Hero({ query, setQuery }) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden">
      {/* Hero Image */}
      <img
        src={HeroImg}
        alt="Modern house"
        className="w-full h-[600px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

      {/* Hero Text + Centered Search + Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-12">
          Find Your Dream Home in One Click!
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-12">
          Discover, Buy, or Rent Verified Properties with Ease.
        </p>

        {/* Search + Button */}
        <div className="flex flex-col md:flex-row items-center gap-6 z-10">
          <div className="relative w-full md:w-96">
            <Search className="bg-white absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search Location..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-white pl-20 py-4 rounded-full shadow-md w-full text-gray-700"
            />
          </div>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-full shadow-md font-medium">
            List Your Property
          </Button>
        </div>
      </div>
    </div>
  );
}
