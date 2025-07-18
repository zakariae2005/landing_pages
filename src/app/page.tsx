"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Sparkles, Zap, Globe, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const landingPages = [
  {
    id: 1,
    title: "SaaS Dashboard",
    description: "Modern dashboard design for SaaS applications with clean metrics and user management.",
    image: "/placeholder.svg?height=300&width=400",
    category: "SaaS",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Beautiful product showcase with shopping cart and seamless checkout experience.",
    image: "/placeholder.svg?height=300&width=400",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "Creative Agency",
    description: "Portfolio-focused design showcasing creative work with stunning visual presentations.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Agency",
  },
  {
    id: 4,
    title: "Tech Startup",
    description: "High-converting landing page for tech startups with feature highlights and testimonials.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Startup",
  },
  {
    id: 5,
    title: "Restaurant Menu",
    description: "Elegant menu display with online ordering and reservation booking system.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Restaurant",
  },
  {
    id: 6,
    title: "Fitness App",
    description: "Health-focused design with workout tracking and nutrition planning features.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Health",
  },
]

export default function LandingPageShowcase() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Landing Page Collection
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ready-Made
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Landing Pages
              </span>
              <br />
              for Your Business
            </h1>

            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of professionally designed, conversion-optimized landing pages. Each template is
              crafted with modern design principles and built for performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 border-0">
                Browse Templates
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                <p className="text-white/70">Premium Templates</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">10k+</h3>
                <p className="text-white/70">Happy Customers</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">99%</h3>
                <p className="text-white/70">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Landing Pages Grid */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Perfect
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Template
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Each template is carefully crafted with modern design trends and optimized for conversions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPages.map((page, index) => (
              <div
                key={page.id}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <Card className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full border-0">
                      {page.category}
                    </Badge>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={page.image || "/placeholder.svg"}
                      alt={page.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">{page.description}</p>

                    {/* View Demo Button */}
                    <Button className="w-full py-3 px-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      <span className="flex items-center justify-center">
                        View Demo
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need a Custom
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}
                  Landing Page?
                </span>
              </h2>

              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let&apos;s create something unique for your brand. Our team specializes in custom designs that convert
                visitors into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 border-0">
                  Contact Me
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/50">© 2024 Landing Page Showcase. Crafted with ❤️ for modern businesses.</p>
        </div>
      </footer>
    </div>
  )
}
