export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">🏠</span>
              </div>
              <span className="text-xl font-bold">PropBot</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Find your dream home with ease. We provide the best properties for sale and rent with verified listings
              and trusted agents.
            </p>
            <p className="text-gray-400 text-sm">©2025 PropBot. All rights reserved</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  For Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Rentals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  New Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@propbot.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Real Estate St, City, State 12345</li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  )
}
