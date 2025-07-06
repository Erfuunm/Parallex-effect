"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

// Sample architecture project images - now with detailed project information
const architectureProjects = [
  {
    id: 1,
    src: "/project1.jpg",
    title: "Modern Glass Tower",
    description: "Contemporary skyscraper with innovative glass facade and sustainable design",
    location: "Manhattan, New York",
    year: "2023",
    area: "45,000 sq ft",
    client: "Metropolitan Development Corp",
    detailedDescription:
      "This 40-story glass tower represents the pinnacle of sustainable urban architecture. The building features a revolutionary double-skin facade system that reduces energy consumption by 35% while maximizing natural light penetration. The design incorporates advanced smart building technologies and green roof systems.",
    challenge:
      "The primary challenge was creating a high-density office building that would meet LEED Platinum standards while maintaining cost efficiency and aesthetic appeal in a constrained urban site.",
    solution:
      "Our solution involved implementing a parametric design approach that optimized the building's orientation and facade configuration. We integrated renewable energy systems and advanced HVAC technologies to achieve exceptional energy performance.",
    teamMembers: [
      { name: "Alexander Petrov", role: "Lead Architect" },
      { name: "Maria Volkov", role: "Structural Engineer" },
      { name: "David Chen", role: "Sustainability Consultant" },
      { name: "Elena Kozlov", role: "Interior Designer" },
    ],
    materials: [
      "High-performance glazing system",
      "Recycled steel structure",
      "Sustainable concrete mix",
      "Green roof vegetation",
      "Solar panel integration",
      "Smart glass technology",
    ],
    gallery: ["/Armaghan/01.jpg", "/Armaghan/02.jpg", "/Armaghan/03.jpg", "/Armaghan/04.jpg"],
  },
  {
    id: 2,
    src: "/project2.jpg",
    title: "Luxury Residential Complex",
    description: "High-end residential development with premium amenities and modern architecture",
    location: "Brooklyn Heights, New York",
    year: "2022",
    area: "120,000 sq ft",
    client: "Prestige Living Group",
    detailedDescription:
      "A sophisticated residential complex featuring 85 luxury units across three interconnected buildings. The design emphasizes community living while maintaining privacy, with shared amenities including a rooftop garden, fitness center, and co-working spaces.",
    challenge:
      "Balancing density requirements with quality of life, while respecting the historic character of the Brooklyn Heights neighborhood and maximizing views of the Manhattan skyline.",
    solution:
      "We created a stepped building profile that respects the neighborhood scale while maximizing unit count. Strategic placement of amenities and careful attention to unit layouts ensure optimal living conditions for all residents.",
    teamMembers: [
      { name: "Sofia Romanov", role: "Project Architect" },
      { name: "James Mitchell", role: "Urban Planner" },
      { name: "Anna Petrov", role: "Landscape Architect" },
      { name: "Michael Torres", role: "MEP Engineer" },
    ],
    materials: [
      "Natural stone cladding",
      "Hardwood flooring",
      "Premium glass curtain wall",
      "Copper roofing elements",
      "Sustainable insulation",
      "Smart home systems",
    ],
    gallery: ["/Ershad/01.jpg", "/Ershad/02.jpg", "/Ershad/06.jpg", "/Ershad/08.jpg"],
  },
  {
    id: 3,
    src: "/project3.jpg",
    title: "Corporate Headquarters",
    description: "Iconic office building featuring cutting-edge design and smart building technology",
    location: "Midtown Manhattan, New York",
    year: "2023",
    area: "200,000 sq ft",
    client: "TechCorp Industries",
    detailedDescription:
      "A 25-story corporate headquarters that redefines the modern workplace. The building features flexible floor plates, advanced collaboration spaces, and integrated wellness facilities. The design promotes employee well-being through biophilic design principles and abundant natural light.",
    challenge:
      "Creating a workspace that attracts top talent while maximizing operational efficiency and incorporating the latest in workplace technology and wellness standards.",
    solution:
      "Our design features modular workspace systems, advanced air filtration, circadian lighting, and integrated technology infrastructure. The building includes meditation spaces, fitness facilities, and outdoor terraces on multiple floors.",
    teamMembers: [
      { name: "Viktor Petrov", role: "Design Principal" },
      { name: "Lisa Wang", role: "Workplace Strategist" },
      { name: "Robert Kim", role: "Technology Integration" },
      { name: "Catherine Moore", role: "Wellness Consultant" },
    ],
    materials: [
      "Aluminum composite panels",
      "Low-E glass systems",
      "Bamboo flooring",
      "Living wall systems",
      "Smart lighting controls",
      "Advanced HVAC systems",
    ],
    gallery: ["/Grownida/01.jpg", "/Grownida/02.jpg", "/Grownida/03.jpg", "/Grownida/06.jpg"],
  },
  {
    id: 4,
    src: "/project4.jpg",
    title: "Mixed-Use Development",
    description: "Integrated commercial and residential complex with urban planning excellence",
    location: "Long Island City, Queens",
    year: "2022",
    area: "300,000 sq ft",
    client: "Urban Development Partners",
    detailedDescription:
      "A transformative mixed-use development that combines residential, retail, and office spaces in a cohesive urban environment. The project includes 150 residential units, 50,000 sq ft of retail space, and 100,000 sq ft of office space, all connected by a central public plaza.",
    challenge:
      "Integrating multiple program types while creating a sense of community and ensuring each component functions independently. Managing complex zoning requirements and infrastructure coordination.",
    solution:
      "We designed a podium-and-tower configuration that clearly separates different uses while maintaining visual and functional connections. The central plaza serves as a community focal point and provides natural gathering spaces.",
    teamMembers: [
      { name: "Dmitri Volkov", role: "Master Planner" },
      { name: "Sarah Johnson", role: "Retail Specialist" },
      { name: "Carlos Rodriguez", role: "Residential Designer" },
      { name: "Jennifer Liu", role: "Public Space Designer" },
    ],
    materials: [
      "Precast concrete panels",
      "Brick facade elements",
      "Steel frame construction",
      "Permeable paving",
      "Green infrastructure",
      "LED lighting systems",
    ],
    gallery: ["/Javaher/03.jpg", "/Javaher/05.jpg", "/Javaher/07.jpg", "/Javaher/08.jpg"],
  },
  {
    id: 5,
    src: "/project5.jpg",
    title: "Architectural Landmark",
    description: "Award-winning building design that redefines the city skyline",
    location: "Financial District, New York",
    year: "2023",
    area: "180,000 sq ft",
    client: "Landmark Properties",
    detailedDescription:
      "An iconic 35-story tower that has become a defining element of the New York skyline. The building's distinctive twisted form optimizes views while reducing wind loads. It houses premium office spaces, a public observation deck, and cultural exhibition areas.",
    challenge:
      "Creating an architecturally significant building that would become a landmark while meeting strict structural and safety requirements for a high-rise in a seismic zone.",
    solution:
      "We employed advanced computational design and wind tunnel testing to optimize the building's form. The twisted geometry reduces wind resistance by 40% while creating unique floor plates that maximize corner offices and views.",
    teamMembers: [
      { name: "Alexei Petrov", role: "Chief Design Architect" },
      { name: "Dr. Emily Chen", role: "Structural Engineer" },
      { name: "Marco Rossi", role: "Facade Specialist" },
      { name: "Yuki Tanaka", role: "Computational Designer" },
    ],
    materials: [
      "Titanium cladding system",
      "High-strength steel frame",
      "Triple-glazed curtain wall",
      "Carbon fiber reinforcement",
      "Smart building sensors",
      "Integrated LED facade",
    ],
    gallery: ["/Zeyton/01.jpg", "/Zeyton/02.jpg", "/Zeyton/03.jpg", "/Zeyton/06.jpg"],
  },
  {
    id: 6,
    src: "/Grownida/06.jpg",
    title: "Sustainable Community Center",
    description: "Eco-friendly community hub with modular design and renewable energy systems",
    location: "Harlem, New York",
    year: "2024",
    area: "80,000 sq ft",
    client: "Harlem Community Alliance",
    detailedDescription:
      "A state-of-the-art community center designed to serve as a hub for education, recreation, and cultural activities. The building features modular spaces that adapt to various community needs, with a focus on sustainability through solar energy, rainwater harvesting, and passive cooling systems.",
    challenge:
      "Designing a flexible, multi-use space that serves diverse community needs while maintaining net-zero energy goals and staying within a limited budget.",
    solution:
      "We utilized a modular design with prefabricated components to reduce construction costs and time. The integration of solar panels, geothermal heating, and a green roof ensures the building operates at net-zero energy consumption.",
    teamMembers: [
      { name: "Isabella Martinez", role: "Lead Architect" },
      { name: "Thomas Lee", role: "Sustainability Engineer" },
      { name: "Amara Okoye", role: "Community Liaison" },
      { name: "Sophie Nguyen", role: "Interior Designer" },
    ],
    materials: [
      "Recycled timber framing",
      "Low-carbon concrete",
      "Solar photovoltaic panels",
      "Rainwater harvesting system",
      "Natural ventilation louvers",
      "Recycled insulation materials",
    ],
    gallery: ["/Grownida/01.jpg", "/Grownida/02.jpg", "/Grownida/03.jpg", "/Grownida/06.jpg"],
  },
  {
    id: 7,
    src: "/project10.jpg",
    title: "Urban Innovation Campus",
    description: "Cutting-edge tech campus fostering collaboration and innovation",
    location: "Silicon Alley, New York",
    year: "2024",
    area: "150,000 sq ft",
    client: "TechTrend Innovations",
    detailedDescription:
      "A dynamic tech campus designed to foster innovation and collaboration among startups and established tech firms. The campus features open-plan workspaces, advanced research labs, and communal areas that encourage interaction, all integrated with smart building technologies.",
    challenge:
      "Creating a campus that supports both collaborative and focused work environments while integrating advanced technological infrastructure and maintaining a human-centric design.",
    solution:
      "We designed a series of interconnected pavilions with flexible workspaces, incorporating IoT-enabled systems for energy and space management. Outdoor courtyards and green spaces promote well-being and informal collaboration.",
    teamMembers: [
      { name: "Liam O’Connor", role: "Design Director" },
      { name: "Priya Sharma", role: "Technology Consultant" },
      { name: "Eduardo Gomez", role: "Landscape Architect" },
      { name: "Rachel Kim", role: "Interior Systems Designer" },
    ],
    materials: [
      "Glass fiber reinforced concrete",
      "Smart glass windows",
      "Bamboo structural elements",
      "Recycled metal cladding",
      "IoT-enabled lighting",
      "Permeable courtyard paving",
    ],
    gallery: ["/Ershad/01.jpg", "/Ershad/02.jpg", "/Ershad/06.jpg", "/Ershad/08.jpg"],
  },
]

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

// Generate floating geometric shapes
const generateGeometricShapes = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 20 + 10,
    rotation: Math.random() * 360,
    animationDelay: Math.random() * 5,
    animationDuration: Math.random() * 10 + 15,
    shape: ["triangle", "square", "diamond", "hexagon"][Math.floor(Math.random() * 4)],
  }))
}

export default function ArchitecturePortfolio() {
  const [stars] = useState(() => generateStars(50))
  const [geometricShapes] = useState(() => generateGeometricShapes(8))
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen overflow-hidden relative transition-all duration-1000 text-white">
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

        {/* Animated Geometric Pattern Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="geometric-grid"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {geometricShapes.map((shape) => (
            <div
              key={shape.id}
              className={`absolute geometric-shape geometric-${shape.shape}`}
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                animationDelay: `${shape.animationDelay}s`,
                animationDuration: `${shape.animationDuration}s`,
                transform: `rotate(${shape.rotation}deg)`,
              }}
            />
          ))}
        </div>

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
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header with Glass Morphism */}
        {/* <header className="flex justify-center pt-16 pb-8">
          <div className="glass-morphism px-8 py-4 rounded-2xl">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider transition-colors duration-500 text-white">
              <span className="font-medium text-white">Architect</span>
              <span className="text-sm ml-2 text-gray-300">office</span>
            </h1>
          </div>
        </header> */}

        {/* Main Content Area with Enhanced Geometric Frames and Gallery */}
        {/* Parallax Background Layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Layer 1 - Slowest moving background elements */}
          <div className="parallax-layer parallax-slow">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`slow-${i}`}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Layer 2 - Medium speed elements */}
          <div className="parallax-layer parallax-medium">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`medium-${i}`}
                className="absolute w-1 h-8 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>

          {/* Layer 3 - Fast moving foreground elements */}
          <div className="parallax-layer parallax-fast">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`fast-${i}`}
                className="absolute w-3 h-3 border border-white/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Parallax Grid Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="parallax-grid-vertical parallax-slow"></div>
          <div className="parallax-grid-horizontal parallax-medium"></div>
        </div>

        {/* Main Content Area with Parallax Gallery */}
        <main className="flex-1 flex justify-center items-center px-4 md:px-8 relative mt-[5%]">
          <div className="relative w-full max-w-7xl h-96 md:h-[500px]">
            {/* Parallax Architecture Projects Gallery */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[100%] mx-auto h-full flex flex-col justify-center parallax-content">
                {/* Top row - 2 images with parallax */}
                <div className="flex justify-between mx-auto w-[70%] mb-12 px-0">
                  <div
                    className="group cursor-pointer transform transition-all duration-700 hover:scale-105 parallax-item parallax-left"
                    style={{ animationDelay: "0s" }}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === architectureProjects[0].id ? null : architectureProjects[0].id,
                      )
                    }
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up glass-card transition-all duration-500 hover:glass-card-hover parallax-float">
                      <Image
                        src={architectureProjects[0].src || "/placeholder.svg"}
                        alt={architectureProjects[0].title}
                        width={200}
                        height={120}
                        className="w-40 md:w-72 h-24 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 glass-overlay transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xs font-medium text-white drop-shadow-lg">
                          {architectureProjects[0].title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="group cursor-pointer transform transition-all duration-700 hover:scale-105 parallax-item parallax-right"
                    style={{ animationDelay: "0.2s" }}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === architectureProjects[1].id ? null : architectureProjects[1].id,
                      )
                    }
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up glass-card transition-all duration-500 hover:glass-card-hover parallax-float">
                      <Image
                        src={architectureProjects[1].src || "/placeholder.svg"}
                        alt={architectureProjects[1].title}
                        width={200}
                        height={120}
                        className="w-40 md:w-72 h-24 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 glass-overlay transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xs font-medium text-white drop-shadow-lg">
                          {architectureProjects[1].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle row - 3 projects with parallax */}
                <div className="flex justify-between mb-8 -px-12">
                  <div
                    className="group cursor-pointer transform transition-all duration-700 hover:scale-105 parallax-item parallax-left"
                    style={{ animationDelay: "0.4s" }}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === architectureProjects[2].id ? null : architectureProjects[2].id,
                      )
                    }
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up glass-card transition-all duration-500 hover:glass-card-hover parallax-float">
                      <Image
                        src={architectureProjects[2].src || "/placeholder.svg"}
                        alt={architectureProjects[2].title}
                        width={200}
                        height={120}
                        className="w-40 md:w-72 h-24 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 glass-overlay transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xs font-medium text-white drop-shadow-lg">
                          {architectureProjects[2].title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="group cursor-pointer transform transition-all duration-700 hover:scale-105 parallax-item parallax-center"
                    style={{ animationDelay: "0.6s" }}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === architectureProjects[5].id ? null : architectureProjects[5].id,
                      )
                    }
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up glass-card transition-all duration-500 hover:glass-card-hover parallax-float">
                      <Image
                        src={architectureProjects[5].src || "/placeholder.svg"}
                        alt={architectureProjects[5].title}
                        width={200}
                        height={120}
                        className="w-40 md:w-72 h-24 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 glass-overlay transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xs font-medium text-white drop-shadow-lg">
                          {architectureProjects[5].title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="group cursor-pointer transform transition-all duration-700 hover:scale-105 parallax-item parallax-right"
                    style={{ animationDelay: "0.8s" }}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === architectureProjects[6].id ? null : architectureProjects[6].id,
                      )
                    }
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up glass-card transition-all duration-500 hover:glass-card-hover parallax-float">
                      <Image
                        src={architectureProjects[6].src || "/placeholder.svg"}
                        alt={architectureProjects[6].title}
                        width={200}
                        height={120}
                        className="w-40 md:w-72 h-24 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 glass-overlay transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xs font-medium text-white drop-shadow-lg">
                          {architectureProjects[6].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom row - 2 images with parallax */}
                <div className="flex justify-between mx-auto w-[70%] mt-12 px-0">
                  <div
                    className="group cursor-pointer transform transition-all duration-700 hover:scale-105 parallax-item parallax-left"
                    style={{ animationDelay: "1.0s" }}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === architectureProjects[3].id ? null : architectureProjects[3].id,
                      )
                    }
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up glass-card transition-all duration-500 hover:glass-card-hover parallax-float">
                      <Image
                        src={architectureProjects[3].src || "/placeholder.svg"}
                        alt={architectureProjects[3].title}
                        width={200}
                        height={120}
                        className="w-40 md:w-72 h-24 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 glass-overlay transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xs font-medium text-white drop-shadow-lg">
                          {architectureProjects[3].title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="group cursor-pointer transform transition-all duration-700 hover:scale-105 parallax-item parallax-right"
                    style={{ animationDelay: "1.2s" }}
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === architectureProjects[4].id ? null : architectureProjects[4].id,
                      )
                    }
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl animate-fade-in-up glass-card transition-all duration-500 hover:glass-card-hover parallax-float">
                      <Image
                        src={architectureProjects[4].src || "/placeholder.svg"}
                        alt={architectureProjects[4].title}
                        width={200}
                        height={120}
                        className="w-40 md:w-72 h-24 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 glass-overlay transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xs font-medium text-white drop-shadow-lg">
                          {architectureProjects[4].title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Navigation with Glass Morphism */}
        <nav className="pb-8 pt-16">
          <div className="flex justify-center">
            <div className="glass-morphism px-8 py-4 rounded-2xl">
              <ul className="flex justify-center space-x-8 md:space-x-12 text-sm md:text-base transition-colors duration-500 text-gray-300">
                {["Home", "Projects"].map((item, index) => (
                  <li key={item}>
                    <button
                      className="transition-colors duration-300 relative group font-medium hover:text-white"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white" />
                    </button>
                  </li>
                ))}
                <li key="About">
                  <Link
                    href="/about"
                    className="transition-colors duration-300 relative group font-medium hover:text-white"
                    style={{ animationDelay: `${2 * 0.1}s` }}
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white" />
                  </Link>
                </li>
                <li key="News">
                  <button
                    className="transition-colors duration-300 relative group font-medium hover:text-white"
                    style={{ animationDelay: `${3 * 0.1}s` }}
                  >
                    News
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white" />
                  </button>
                </li>
                <li key="Contact">
                  <Link
                    href="/contact"
                    className="transition-colors duration-300 relative group font-medium hover:text-white"
                    style={{ animationDelay: `${4 * 0.1}s` }}
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Enhanced Project Detail Modal with Glass Morphism */}
      {selectedProject && (
        <div className="fixed inset-0 glass-modal-backdrop z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />
          <div className="relative max-w-6xl w-full h-[90vh] animate-fade-in-up">
            {architectureProjects
              .filter((p) => p.id === selectedProject)
              .map((project) => (
                <div
                  key={project.id}
                  className="rounded-3xl overflow-hidden shadow-2xl glass-modal h-full flex flex-col"
                >
                  {/* Header Image */}
                  <div className="relative h-64 flex-shrink-0">
                    <Image src={project.src || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="glass-overlay p-4 rounded-2xl">
                        <h2 className="text-3xl font-light mb-2 text-white">{project.title}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                          <span>•</span>
                          <span>{project.area}</span>
                        </div>
                      </div>
                    </div>
                    {/* Close button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full glass-button text-white hover:bg-white/20 transition-all duration-200 flex items-center justify-center text-lg font-light"
                    >
                      ×
                    </button>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto scrollbar-hide">
                    <div className="p-6 space-y-8">
                      {/* Project Overview */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="glass-section p-6 rounded-2xl">
                            <h3 className="text-xl font-medium text-white mb-4">Project Overview</h3>
                            <p className="text-gray-200 leading-relaxed mb-4">{project.detailedDescription}</p>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Client</span>
                                <span className="text-gray-200">{project.client}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Completion</span>
                                <span className="text-gray-200">{project.year}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">Total Area</span>
                                <span className="text-gray-200">{project.area}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          {/* Challenge */}
                          <div className="glass-section p-6 rounded-2xl">
                            <h4 className="text-lg font-medium text-white mb-2">Challenge</h4>
                            <p className="text-gray-200 text-sm leading-relaxed">{project.challenge}</p>
                          </div>

                          {/* Solution */}
                          <div className="glass-section p-6 rounded-2xl">
                            <h4 className="text-lg font-medium text-white mb-2">Solution</h4>
                            <p className="text-gray-200 text-sm leading-relaxed">{project.solution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Team Members */}
                      <div className="glass-section p-6 rounded-2xl">
                        <h3 className="text-xl font-medium text-white mb-4">Project Team</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.teamMembers.map((member, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 rounded-xl glass-card-small">
                              <div className="w-10 h-10 rounded-full glass-avatar flex items-center justify-center">
                                <span className="text-white font-medium text-sm">
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </span>
                              </div>
                              <div>
                                <p className="text-white font-medium text-sm">{member.name}</p>
                                <p className="text-gray-300 text-xs">{member.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Materials */}
                      <div className="glass-section p-6 rounded-2xl">
                        <h3 className="text-xl font-medium text-white mb-4">Materials & Technologies</h3>
                        <div className="grid md:grid-cols-3 gap-3">
                          {project.materials.map((material, index) => (
                            <div key={index} className="p-3 rounded-xl glass-card-small text-center">
                              <p className="text-gray-200 text-sm">{material}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Gallery */}
                      <div className="glass-section p-6 rounded-2xl">
                        <h3 className="text-xl font-medium text-white mb-4">Project Gallery</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.gallery.map((image, index) => (
                            <div key={index} className="relative h-48 rounded-2xl overflow-hidden glass-image">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${project.title} - Image ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}