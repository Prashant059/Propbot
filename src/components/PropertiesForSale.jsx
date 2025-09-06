import { PropertyCard } from "./PropertyCard"

export const PropertiesForSale = () => {
  const properties = [
    {
      id: 3,
      title: "Spacious Family Home",
      location: "New York, NY",
      price: "$650,000",
      image: "/modern-family-house.png",
      bedrooms: 5,
      bathrooms: 3,
      area: "3,200 sq ft",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Contemporary Condo",
      location: "New York, NY",
      price: "$420,000",
      image: "/modern-condo.png",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,400 sq ft",
      rating: 4.5,
    },
    {
      id: 5,
      title: "Cozy Townhouse",
      location: "New York, NY",
      price: "$380,000",
      image: "/modern-townhouse.png",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,600 sq ft",
      rating: 4.7,
    },
    {
      id: 6,
      title: "Executive Mansion",
      location: "New York, NY",
      price: "$850,000",
      image: "/executive-mansion.jpg",
      bedrooms: 6,
      bathrooms: 4,
      area: "4,500 sq ft",
      rating: 5.0,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Best Properties Available For Sale</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">View More Properties →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
