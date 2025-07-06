"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"

// Generate random stars for background
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    animationDelay: Math.random() * 4,
    animationDuration: Math.random() * 3 + 2,
  }))
}

export default function ContactPage() {
  const [stars] = useState(() => generateStars(50))
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="h-screen overflow-hidden relative transition-all duration-1000 text-white">
      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-20 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white"
      >
        <ArrowLeft size={20} />
      </Link>

      {/* Dark Building Background */}
      <div className="absolute inset-0">
        <Image
          src="/luxury-building.jpg"
          alt="Luxury building background"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Dark overlay to create dark mode effect */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Subtle animated stars for dark building mode */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.slice(0, 40).map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full opacity-50 animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.animationDelay}s`,
                animationDuration: `${star.animationDuration}s`,
              }}
            />
          ))}
        </div>

        {/* Moving particles effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-bounce opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-6 pt-20">
        <div className="max-w-7xl w-full">
          {/* Single Glass Container for All Content */}
          <div className="glass-morphism rounded-3xl p-8 animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form Section */}
              <div className="space-y-6 animate-slide-in-left">
                {/* Contact Info */}
                <div className="space-y-4" style={{ animationDelay: "0.1s" }}>
                  <h2 className="text-xl font-light text-white animate-fade-in-up">Get in Touch</h2>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                      <div className="p-2 rounded-lg bg-white/10">
                        <Mail size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="text-sm text-white">contact@pex-office.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                      <div className="p-2 rounded-lg bg-white/10">
                        <Phone size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Phone</p>
                        <p className="text-sm text-white">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                      <div className="p-2 rounded-lg bg-white/10">
                        <MapPin size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Address</p>
                        <p className="text-sm text-white">123 Architecture Ave, Design District</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                      <label htmlFor="name" className="block text-xs font-medium mb-1 text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-white/30 focus:border-white/40"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                      <label htmlFor="email" className="block text-xs font-medium mb-1 text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-white/30 focus:border-white/40"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                    <label htmlFor="subject" className="block text-xs font-medium mb-1 text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-sm rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-white/30 focus:border-white/40"
                      placeholder="Project inquiry"
                      required
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                    <label htmlFor="message" className="block text-xs font-medium mb-1 text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 text-sm rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-white/30 focus:border-white/40"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-sm rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group animate-fade-in-up bg-white text-gray-900 hover:bg-gray-100"
                    style={{ animationDelay: "0.9s" }}
                  >
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>

              {/* Map Section */}
              <div className="space-y-6 animate-slide-in-right">
                <h2 className="text-xl font-light text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Our Location
                </h2>

                {/* Map Container */}
                <div
                  className="relative h-64 lg:h-80 rounded-2xl overflow-hidden border animate-fade-in-up border-white/20"
                  style={{ animationDelay: "0.3s" }}
                >
                  {/* Placeholder Map */}
                  <div className="w-full h-full flex items-center justify-center bg-white/10">
                    <div className="text-center space-y-3">
                      <MapPin size={32} className="mx-auto text-white/60" />
                      <div>
                        <p className="text-base font-medium text-white">ПЭХ+ Office</p>
                        <p className="text-xs text-gray-400">123 Architecture Ave, Design District</p>
                        <p className="text-xs text-gray-400">New York, NY 10001</p>
                      </div>
                    </div>
                  </div>

                  {/* Geometric Frame Overlay */}
                  <div className="absolute top-3 left-3">
                    <div className="w-6 h-6 border-t-2 border-l-2 border-white/60" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-white/60" />
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <div className="w-6 h-6 border-b-2 border-l-2 border-white/60" />
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-white/60" />
                  </div>
                </div>

                {/* Office Hours */}
                <div className="p-4 rounded-2xl animate-fade-in-up bg-white/10" style={{ animationDelay: "0.4s" }}>
                  <h3 className="text-base font-medium mb-3 text-white">Office Hours</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-gray-300">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-gray-300">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-gray-300">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
