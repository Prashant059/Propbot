"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import HeroImg from "../assets/hero.jpg";

export function Hero({ query, setQuery }) {
  return (
    // <div className="relative w-full rounded-3xl overflow-hidden">
    //   {/* Hero Image */}
    //   <img
    //     src={HeroImg}
    //     alt="Modern house"
    //     className="w-full h-[600px] object-cover"
    //   />
    //   <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

    //   {/* Hero Text + Centered Search + Button */}
    //   <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
    //     <h1 className="text-4xl md:text-6xl font-bold mb-12">
    //       Find Your Dream Home in One Click!
    //     </h1>
    //     <p className="text-lg md:text-xl opacity-90 mb-12">
    //       Discover, Buy, or Rent Verified Properties with Ease.
    //     </p>

    //     <div className="flex flex-col md:flex-row items-center justify-around gap-6 z-10 w-full">
    //       <div className="relative w-full md:w-[550px]">
    //         <Search className="bg-white absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
    //         <Input
    //           type="text"
    //           placeholder="Search Location..."
    //           value={query}
    //           onChange={(e) => setQuery(e.target.value)}
    //           className="bg-white pl-20 py-4 h-15 rounded-full shadow-md w-full text-gray-700"
    //         />
    //       </div>

    //       <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-full shadow-md font-medium">
    //         List Your Property
    //       </Button>
    //     </div>
    //   </div>
    // </div>



    <div className="relative w-full rounded-3xl overflow-hidden">
  {/* Hero Image */}
  <img
    src={HeroImg}
    alt="Modern house"
    className="w-full h-[600px] object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

  {/* Text Top */}
  <div className="absolute top-12 w-full text-center text-white px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Find Your Dream Home in One Click!
    </h1>
    <p className="text-lg md:text-xl opacity-90">
      Discover, Buy, or Rent Verified Properties with Ease.
    </p>
  </div>

  {/* Search Center */}
  <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
    <div className="flex flex-col md:flex-row items-center justify-around gap-6 z-10 w-full">
      <div className="relative w-full md:w-[550px]">
        <Search className="bg-white absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search Location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white pl-20 h-14 rounded-full shadow-md w-full text-gray-700"
        />
      </div>

      <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 h-14 rounded-full shadow-md font-medium">
        List Your Property
      </Button>
    </div>
  </div>
</div>

  );
}
