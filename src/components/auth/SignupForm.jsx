"use client"

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Eye, EyeOff, Mail } from "lucide-react"

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    try {
      setError("")
      setLoading(true)
      await signup(formData.email, formData.password, formData.name)
      navigate("/")
    } catch (error) {
      setError("Failed to create account: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Homepage
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Create new account</h1>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-3 block">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 h-14 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-3 block">
            Email Address
          </Label>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email Id"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-4 pr-12 py-4 h-14 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
            />
            <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        <div>
          <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-3 block">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-4 pr-12 py-4 h-14 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div>
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 mb-3 block">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Your Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full pl-4 pr-12 py-4 h-14 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-base"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 h-14 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <div className="text-center mt-8">
        <span className="text-gray-600">Already have an account? </span>
        <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
          Log In
        </Link>
      </div>
    </div>
  )
}
