import { enhancePropertyData } from "../lib/api"
import { Heart, MapPin, Bed, Bath, Square } from "lucide-react"

function PropertyCard({ property }) {        
  const enhancedProperty = enhancePropertyData(property)

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative">
        <img
          src={property.image || `/placeholder.svg?height=250&width=400&query=modern house exterior`}
          alt={property.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
              enhancedProperty.type === "sale" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
            }`}
          >
            For {enhancedProperty.type === "sale" ? "Sale" : "Rent"}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 group/heart">
            <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition-colors" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {property.name}
          </h3>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
            <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-yellow-700">{enhancedProperty.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">{enhancedProperty.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">
          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
          <span className="font-medium">
            {property.location}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-6 bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1 text-blue-500" />
            <span className="font-medium">{enhancedProperty.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1 text-blue-500" />
            <span className="font-medium">{enhancedProperty.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1 text-blue-500" />
            <span className="font-medium">{enhancedProperty.area} sqft</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-blue-600">${enhancedProperty.price.toLocaleString()}</span>
            {enhancedProperty.type === "rent" && <span className="text-gray-500 text-lg">/month</span>}
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export { PropertyCard }
export default PropertyCard
