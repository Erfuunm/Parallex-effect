"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Users, Award, Target, Lightbulb } from "lucide-react"
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

export default function AboutPage() {
  const [stars] = useState(() => generateStars(50))

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "50+", label: "Awards Won" },
    { number: "30+", label: "Team Members" },
  ]

  const services = [
    {
      icon: <Target size={20} />,
      title: "Architectural Design",
      description: "Innovative and sustainable architectural solutions for modern living and working spaces.",
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Interior Design",
      description: "Creating beautiful, functional interior spaces that reflect your vision and lifestyle.",
    },
    {
      icon: <Users size={20} />,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality execution.",
    },
    {
      icon: <Award size={20} />,
      title: "Consulting",
      description: "Expert architectural consulting services for complex design and construction challenges.",
    },
  ]

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
              {/* About Content Section */}
              <div className="space-y-6 animate-slide-in-left">
                {/* Company Info */}
                <div className="space-y-4" style={{ animationDelay: "0.1s" }}>
                  <h2 className="text-xl font-light text-white animate-fade-in-up">About ПЭХ+ Office</h2>
                  <p
                    className="text-sm text-gray-300 leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    Founded in 1998, ПЭХ+ Office has been at the forefront of architectural innovation, creating spaces
                    that inspire and endure. Our commitment to sustainable design and cutting-edge technology has earned
                    us recognition as one of the leading architectural firms globally.
                  </p>
                  <p
                    className="text-sm text-gray-300 leading-relaxed animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    We believe architecture is more than just buildings—it's about creating environments that enhance
                    human experience and contribute positively to our communities and planet.
                  </p>
                </div>

                {/* Mission & Vision */}
                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                  <h3 className="text-lg font-medium text-white">Our Mission</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    To design and create architectural solutions that are not only aesthetically stunning but also
                    environmentally responsible, functionally superior, and economically viable.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-lg bg-white/5 text-center animate-fade-in-up border border-white/10"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="text-lg font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Section */}
              <div className="space-y-6 animate-slide-in-right">
                <h2 className="text-xl font-light text-white animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  Our Services
                </h2>

                {/* Services Grid */}
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={service.title}
                      className="p-4 rounded-lg bg-white/5 animate-fade-in-up border border-white/10"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-white/10 text-white flex-shrink-0">{service.icon}</div>
                        <div>
                          <h3 className="text-sm font-medium text-white mb-1">{service.title}</h3>
                          <p className="text-xs text-gray-300 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Team Info */}
                <div
                  className="p-4 rounded-lg bg-white/5 animate-fade-in-up border border-white/10"
                  style={{ animationDelay: "0.8s" }}
                >
                  <h3 className="text-base font-medium mb-3 text-white">Our Team</h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-3">
                    Our diverse team of architects, designers, and engineers brings together decades of experience and a
                    passion for innovation.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Senior Architects</span>
                      <span className="text-gray-300">8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Project Managers</span>
                      <span className="text-gray-300">6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Design Specialists</span>
                      <span className="text-gray-300">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Support Staff</span>
                      <span className="text-gray-300">4</span>
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
