"use client"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Home, LogOut, User, Menu, X } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"

export function Navbar() {
  const { user, logout, loading } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <div className="p-2 bg-blue-100 rounded-lg">
            <Home className="h-6 w-6" />
          </div>
          PropBot
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/properties"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
          >
            Buy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/properties"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
          >
            Rent
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/properties"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
          >
            Sell
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {loading ? (
            <div className="text-gray-500 animate-pulse">Loading...</div>
          ) : user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg">
                <div className="p-1 bg-blue-100 rounded-full">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">{user.displayName || user.email}</span>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 bg-transparent"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                <Link to="/login">Login</Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                <Link to="/signup">Register</Link>
              </Button>
            </div>
          )}

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
          <div className="flex flex-col gap-4 pt-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/properties"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buy
            </Link>
            <Link
              to="/properties"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rent
            </Link>
            <Link
              to="/properties"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sell
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {!user && (
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    Register
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
