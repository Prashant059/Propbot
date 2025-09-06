export const WhatWeDo = () => {
  const features = [
    {
      icon: "🏠",
      title: "Buy & Sell Properties",
      description: "Find your dream home or sell your property with ease",
    },
    {
      icon: "🔍",
      title: "Find Rental Homes",
      description: "Discover perfect rental properties in your desired location",
    },
    {
      icon: "🤖",
      title: "Smart AI Property Search",
      description: "AI-powered search to find properties matching your preferences",
    },
    {
      icon: "🔒",
      title: "Safe & Secure Transactions",
      description: "Secure and transparent property transactions",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Helping you find, buy, and rent the perfect property with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
