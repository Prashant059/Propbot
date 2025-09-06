function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About PropBot</h1>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              PropBot is revolutionizing the real estate industry by providing an intelligent, user-friendly platform
              that connects buyers, sellers, and renters with their perfect properties. We leverage cutting-edge
              technology to make property transactions seamless and transparent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Smart Property Search</h3>
                <p className="text-gray-600">
                  AI-powered search that understands your preferences and finds the perfect match.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Secure Transactions</h3>
                <p className="text-gray-600">End-to-end security ensuring safe and reliable property transactions.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Professional real estate experts available to guide you through every step.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Market Insights</h3>
                <p className="text-gray-600">Real-time market data and analytics to make informed decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
