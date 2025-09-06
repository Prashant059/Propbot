import { PropertyCard } from "./PropertyCard"
import Featuredone from '../assets/featuredone.jpg';
import Featuredtwo from '../assets/featuredtwo.jpg';

export const FeaturedProperties = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Villa in Green Valley",
      location: "Green Villa, Uttar Pradesh",
      price: "$450,000",
      image: Featuredone,
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sq ft",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Luxury Apartment Downtown",
      location: "Green Villa, Uttar Pradesh",
      price: "$350,000",
      image: Featuredtwo,
      bedrooms: 3,
      bathrooms: 2,
      area: "1,800 sq ft",
      rating: 4.6,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Property</h2>
          <button className="text-blue-600 hover:text-blue-800 font-medium">See 268 New Projects →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
