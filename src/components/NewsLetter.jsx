"use client"

import { useState } from "react"

export const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
    alert("Thank you for subscribing to our newsletter!")
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get in Touch with Us</h2>
        <p className="text-blue-100 mb-8 text-lg">Subscribe now for exclusive property insights and deals!</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
