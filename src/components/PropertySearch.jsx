// "use client"

// import { useState } from "react"
// import { Button } from "./ui/button"
// import { Input } from "./ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select"
// import { Search, MapPin, Home } from "lucide-react"

// export function PropertySearch({ onSearch, loading }) {
//   const [query, setQuery] = useState("")
//   const [filters, setFilters] = useState({
//     type: "all",
//     propertyType: "house",
//     location: "indonesia",
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onSearch(query, filters)
//   }

//   return (
//     <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col md:flex-row gap-4 items-end"
//       >
//         {/* Search Input */}
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Search Location
//           </label>
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <Input
//               type="text"
//               placeholder="Search location..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="pl-10"
//             />
//           </div>
//         </div>

//         {/* Property Type Filter */}
//         <div className="w-full md:w-48">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             For Buying
//           </label>
//           <Select
//             value={filters.type}
//             onValueChange={(value) =>
//               setFilters({ ...filters, type: value })
//             }
//           >
//             <SelectTrigger className="text-gray-900">
//               <SelectValue placeholder="For Buying" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="sale">For Sale</SelectItem>
//               <SelectItem value="rent">For Rent</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* House Type Filter */}
//         <div className="w-full md:w-48">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             House
//           </label>
//           <Select
//             value={filters.propertyType}
//             onValueChange={(value) =>
//               setFilters({ ...filters, propertyType: value })
//             }
//           >
//             <SelectTrigger className="text-gray-900">
//               <Home className="h-4 w-4 mr-2 text-gray-500" />
//               <SelectValue placeholder="House" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="house">House</SelectItem>
//               <SelectItem value="apartment">Apartment</SelectItem>
//               <SelectItem value="condo">Condo</SelectItem>
//               <SelectItem value="villa">Villa</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Location Filter */}
//         <div className="w-full md:w-48">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Location
//           </label>
//           <Select
//             value={filters.location}
//             onValueChange={(value) =>
//               setFilters({ ...filters, location: value })
//             }
//           >
//             <SelectTrigger className="text-gray-900">
//               <MapPin className="h-4 w-4 mr-2 text-gray-500" />
//               <SelectValue placeholder="Select Location" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="indonesia">Indonesia</SelectItem>
//               <SelectItem value="jakarta">Jakarta</SelectItem>
//               <SelectItem value="surabaya">Surabaya</SelectItem>
//               <SelectItem value="bandung">Bandung</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Search Button */}
//         <Button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 px-8 py-3 h-auto"
//           disabled={loading}
//         >
//           {loading ? "Searching..." : "Find Property"}
//         </Button>
//       </form>
//     </div>
//   )
// }




// "use client";

// import { useState } from "react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { Search, MapPin, Home } from "lucide-react";

// export function PropertySearch({ onSearch, loading }) {
//   const [query, setQuery] = useState("");
//   const [filters, setFilters] = useState({
//     type: "all",
//     propertyType: "house",
//     location: "indonesia",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query, filters);
//   };

//   return (
//     <div className="w-full relative">
//       {/* 🔹 Top Search Bar + Button */}
//       <div className="flex w-full max-w-3xl items-center gap-4 mx-auto mb-32">
//         <div className="relative flex-1">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
//           <Input
//             type="text"
//             placeholder="Search Location..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="pl-12 py-4 rounded-full text-gray-700 shadow-md"
//           />
//         </div>
//         <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-full shadow-md font-medium">
//           List Your Property
//         </Button>
//       </div>

//       {/* 🔹 Bottom Filters (Overlap Image Bottom, Full Visible) */}
//       <div
//         className="absolute -bottom-12 left-1/2 -translate-x-1/2 
//                    w-[90%] max-w-5xl"
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-full p-6 shadow-xl flex flex-col md:flex-row gap-4 items-center"
//         >
//           {/* For Rent / Sale */}
//           <Select
//             value={filters.type}
//             onValueChange={(value) => setFilters({ ...filters, type: value })}
//           >
//             <SelectTrigger className="rounded-full text-gray-900">
//               <SelectValue placeholder="For Buying" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="sale">For Sale</SelectItem>
//               <SelectItem value="rent">For Rent</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* House Type */}
//           <Select
//             value={filters.propertyType}
//             onValueChange={(value) =>
//               setFilters({ ...filters, propertyType: value })
//             }
//           >
//             <SelectTrigger className="rounded-full text-gray-900">
//               <Home className="h-4 w-4 mr-2 text-gray-500" />
//               <SelectValue placeholder="House" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="house">House</SelectItem>
//               <SelectItem value="apartment">Apartment</SelectItem>
//               <SelectItem value="condo">Condo</SelectItem>
//               <SelectItem value="villa">Villa</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Location */}
//           <Select
//             value={filters.location}
//             onValueChange={(value) =>
//               setFilters({ ...filters, location: value })
//             }
//           >
//             <SelectTrigger className="rounded-full text-gray-900">
//               <MapPin className="h-4 w-4 mr-2 text-gray-500" />
//               <SelectValue placeholder="Select Location" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="indonesia">Indonesia</SelectItem>
//               <SelectItem value="jakarta">Jakarta</SelectItem>
//               <SelectItem value="surabaya">Surabaya</SelectItem>
//               <SelectItem value="bandung">Bandung</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Search Button */}
//           <Button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 px-8 py-3 h-auto rounded-full"
//             disabled={loading}
//           >
//             {loading ? "Searching..." : "Find Property"}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { Search, MapPin, Home } from "lucide-react";

// export function PropertySearch({ onSearch, loading }) {
//   const [query, setQuery] = useState("");
//   const [filters, setFilters] = useState({
//     type: "all",
//     propertyType: "house",
//     location: "indonesia",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query, filters);
//   };

//   return (
//     <div className="w-full">
//       {/* 🔹 Top Search + List Button */}
//       <div className="flex w-full max-w-3xl items-center gap-4 mx-auto mb-32">
//         <div className="relative flex-1">
//           <Search className="bg-white absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//           <Input
//             type="text"
//             placeholder="Search Location..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="pl-12 py-4 rounded-full text-gray-700 shadow-md bg-white"
//           />
//         </div>
//         <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 rounded-full shadow-md font-medium">
//           List Your Property
//         </Button>
//       </div>

//       {/* 🔹 Bottom Filters (Overlap Image Bottom) */}
//       <div
//         className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
//                    w-[90%] max-w-5xl"
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-full p-6 shadow-xl flex flex-col md:flex-row gap-4 items-center"
//         >
//           {/* For Rent / Sale */}
//           <Select
//             value={filters.type}
//             onValueChange={(value) => setFilters({ ...filters, type: value })}
//           >
//             <SelectTrigger className="rounded-full text-gray-900">
//               <SelectValue placeholder="For Buying" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="sale">For Sale</SelectItem>
//               <SelectItem value="rent">For Rent</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* House Type */}
//           <Select
//             value={filters.propertyType}
//             onValueChange={(value) =>
//               setFilters({ ...filters, propertyType: value })
//             }
//           >
//             <SelectTrigger className="rounded-full text-gray-900">
//               <Home className="h-4 w-4 mr-2 text-gray-500" />
//               <SelectValue placeholder="House" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="house">House</SelectItem>
//               <SelectItem value="apartment">Apartment</SelectItem>
//               <SelectItem value="condo">Condo</SelectItem>
//               <SelectItem value="villa">Villa</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Location */}
//           <Select
//             value={filters.location}
//             onValueChange={(value) =>
//               setFilters({ ...filters, location: value })
//             }
//           >
//             <SelectTrigger className="rounded-full text-gray-900">
//               <MapPin className="h-4 w-4 mr-2 text-gray-500" />
//               <SelectValue placeholder="Select Location" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="indonesia">Indonesia</SelectItem>
//               <SelectItem value="jakarta">Jakarta</SelectItem>
//               <SelectItem value="surabaya">Surabaya</SelectItem>
//               <SelectItem value="bandung">Bandung</SelectItem>
//             </SelectContent>
//           </Select>

//           {/* Search Button */}
//           <Button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 px-8 py-3 h-auto rounded-full"
//             disabled={loading}
//           >
//             {loading ? "Searching..." : "Find Property"}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

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
