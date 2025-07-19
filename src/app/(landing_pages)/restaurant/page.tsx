
"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Phone, MessageCircle, Instagram, Star, Clock, ChefHat, Heart, ArrowRight, MapPin, Award, Utensils, Wine, Check } from "lucide-react"

export default function RestaurantLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.95, 1])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  const menuItems = [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy arborio rice with black truffle, aged parmesan",
      price: "$28",
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop&q=80",
      category: "Signature"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
      price: "$32",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&q=80",
      category: "Seafood"
    },
    {
      id: 3,
      name: "Wagyu Steak",
      description: "Premium wagyu beef with roasted garlic and red wine reduction",
      price: "$48",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&q=80",
      category: "Prime Cuts"
    },
    {
      id: 4,
      name: "Lobster Thermidor",
      description: "Fresh lobster with cognac cream sauce and gruyere cheese",
      price: "$42",
      image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop&q=80",
      category: "Seafood"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      review: "An absolutely divine experience. The attention to detail in every dish is remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&q=80",
      role: "Food Critic"
    },
    {
      id: 2,
      name: "Michael Chen",
      review: "Savoria has redefined fine dining. The ambiance and service are unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&q=80",
      role: "Local Business Owner"
    },
    {
      id: 3,
      name: "Emma Davis",
      review: "Every visit is a culinary journey. Chef Maria's creativity knows no bounds.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&q=80",
      role: "Food Enthusiast"
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Enhanced Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-neutral-200/50"
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
              <ChefHat className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-neutral-800">Savoria</span>
              <p className="text-xs text-neutral-500 -mt-1">Fine Dining Experience</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {["Home", "Menu", "About", "Reservations", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-neutral-700 hover:text-amber-600 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              className="hidden md:flex bg-amber-600 hover:bg-amber-700 text-white px-6"
            >
              Reserve Table
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden backdrop-blur-xl bg-white/95 border-t border-neutral-200/50"
            >
              <div className="container mx-auto px-6 py-6 space-y-4">
                {["Home", "Menu", "About", "Reservations", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-lg font-medium text-neutral-700 hover:text-amber-600 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-4">
                  Reserve Table
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=1080&fit=crop&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
        </div>

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Award className="h-4 w-4 text-amber-400 mr-2" />
            <span className="text-white text-sm font-medium">Michelin Guide Recommended</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Where Every Meal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Becomes Memory
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Experience the perfect harmony of innovative cuisine, elegant ambiance, and impeccable service in the heart of the city.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
            >
              Reserve Your Table
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-neutral-800 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <Utensils className="mr-2 h-5 w-5" />
              View Menu
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div>
                  <motion.div className="inline-flex items-center bg-amber-50 rounded-full px-4 py-2 mb-4">
                    <Heart className="h-4 w-4 text-amber-600 mr-2" />
                    <span className="text-amber-700 text-sm font-medium">Our Story</span>
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                    Crafting Culinary Excellence Since 2018
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    Founded by renowned Chef Maria Rodriguez, Savoria represents the pinnacle of fine dining. With over 15 years of culinary mastery across Europe and America, Maria envisioned a restaurant where every dish tells a story of passion, precision, and artistry.
                  </p>
                  <p>
                    Our commitment to excellence extends beyond the kitchen. We source only the finest ingredients from local farms and trusted suppliers, ensuring each plate that leaves our kitchen is a masterpiece of flavor and presentation.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                    <div className="text-neutral-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-3xl font-bold text-amber-600 mb-2">50K+</div>
                    <div className="text-neutral-600">Happy Guests</div>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div 
                    className="aspect-[4/5] bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&h=750&fit=crop&q=80')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <div 
                        className="w-12 h-12 bg-cover bg-center rounded-full"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1583394293214-28a5b1b86fb0?w=100&h=100&fit=crop&q=80')`
                        }}
                      />
                      <div>
                        <div className="font-semibold">Chef Maria Rodriguez</div>
                        <div className="text-sm opacity-90">Head Chef & Founder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 px-6 bg-gradient-to-br from-neutral-50 to-amber-50/20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center bg-amber-50 rounded-full px-4 py-2 mb-6">
              <Utensils className="h-4 w-4 text-amber-600 mr-2" />
              <span className="text-amber-700 text-sm font-medium">Our Menu</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
              Signature Creations
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Each dish is meticulously crafted with the finest ingredients and presented with artistic flair
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {menuItems.map((item, index) => (
              <motion.div key={item.id} variants={fadeInUp}>
                <Card className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-0">
                  <div className="relative overflow-hidden">
                    <div 
                      className="aspect-[4/3] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${item.image}')`
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-neutral-800">{item.name}</h3>
                      <span className="text-xl font-bold text-amber-600">{item.price}</span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full"
            >
              View Full Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center bg-amber-50 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-amber-600 mr-2" />
              <span className="text-amber-700 text-sm font-medium">Reviews</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
              What Our Guests Say
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-neutral-600">
              Exceptional experiences, one review at a time
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 h-full">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-neutral-700 leading-relaxed mb-6 italic">
                      &quot;{testimonial.review}&quot;
                    </p>
                    <div className="flex items-center">
                      <div 
                        className="w-12 h-12 bg-cover bg-center rounded-full mr-4"
                        style={{
                          backgroundImage: `url('${testimonial.image}')`
                        }}
                      />
                      <div>
                        <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                        <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-24 px-6">
  <div className="container mx-auto max-w-7xl">
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="text-center mb-16"
    >
      <motion.div variants={fadeInUp} className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6 border">
        <MapPin className="h-4 w-4 text-amber-600 mr-2" />
        <span className="text-amber-700 text-sm font-medium">Visit Us</span>
      </motion.div>
      <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Find Us in the Heart of the City
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-xl text-gray-600">
        Experience exceptional dining in our elegant atmosphere
      </motion.p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Map */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden border border-gray-200">
          <div 
            className="aspect-[4/3] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516401266446-6432a8a07d41?w=600&h=450&fit=crop&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center text-gray-800">
                <MapPin className="h-5 w-5 mr-3 text-amber-600" />
                <div>
                  <div className="font-semibold">123 Culinary Street</div>
                  <div className="text-sm text-gray-600">Downtown District, New York</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="bg-gray-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reservations</h3>
                <p className="text-gray-700 text-lg font-medium">(555) 123-4567</p>
                <p className="text-gray-500 text-sm mt-1">Available 10AM - 10PM daily</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="bg-gray-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hours</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>Monday - Thursday</span>
                    <span className="font-medium">5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Friday - Saturday</span>
                    <span className="font-medium">5:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-medium">4:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeInUp}>
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="bg-gray-100 p-3 rounded-full">
                <svg className="h-6 w-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://instagram.com/savoria"
                    className="bg-amber-500 text-white p-3 rounded-full hover:bg-white  transition-colors duration-300"
                  >
                    <Instagram className="h-5 w-5 hover:text-amber-500" />
                  </a>
                  <a
                    href="https://facebook.com/savoria"
                    className="bg-amber-500 text-white p-3 rounded-full hover:bg-white  transition-colors duration-300"
                  >
                    <svg className="h-5 w-5 hover:text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/savoria"
                    className="bg-amber-500 text-white p-3 rounded-full hover:bg-white  transition-colors duration-300"
                  >
                    <svg className="h-5 w-5 hover:text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Sticky Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-t border-white/10">
  <div className="container mx-auto px-6 py-12">
    {/* Main promotional section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center bg-amber-600/20 rounded-full px-4 py-2 mb-4">
          <Utensils className="h-4 w-4 text-amber-400 mr-2" />
          <span className="text-amber-300 text-sm font-medium">Order Now</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          A healthier way now has
          <br />
          <span className="text-amber-400">a seat at the table.</span>
        </h2>
        
        <p className="text-neutral-300 text-lg leading-relaxed max-w-md">
          Take advantage of exclusive deals and packages designed to elevate your 
          stay. Whether it&apos;s a romantic getaway or family vacation.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center text-neutral-300">
            <div className="bg-amber-600/20 p-2 rounded-full mr-4">
              <Check className="h-4 w-4 text-amber-400" />
            </div>
            <span>Whatever your taste, we have something for everyone.</span>
          </div>
          
          <div className="flex items-center text-neutral-300">
            <div className="bg-amber-600/20 p-2 rounded-full mr-4">
              <Check className="h-4 w-4 text-amber-400" />
            </div>
            <span>Ordering is easy. Browse, select, and pay securely – all from the comfort.</span>
          </div>
          
          <div className="flex items-center text-neutral-300">
            <div className="bg-amber-600/20 p-2 rounded-full mr-4">
              <Check className="h-4 w-4 text-amber-400" />
            </div>
            <span>Save more with special promotions and discounts.</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <span>View Menu</span>
          <ChefHat className="h-5 w-5" />
        </motion.button>
      </motion.div>
      
      {/* Right images */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="relative">
          {/* Main large image */}
          <div className="relative z-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1745341291467-8ee6065db258?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Healthy meal preparation"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs px-3 py-1 rounded-full font-medium">
              Vegan party
            </div>
          </div>
          
          {/* Floating food cards */}
          <div className="absolute -top-6 -left-6 z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1546793665-c74683f339c1?w=120&h=120&fit=crop&q=80"
              alt="Delicious pasta"
              className="w-20 h-20 object-cover rounded-xl"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 z-30 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=120&h=120&fit=crop&q=80"
              alt="Fresh salad"
              className="w-20 h-20 object-cover rounded-xl"
            />
          </div>
          
          <div className="absolute top-1/2 -right-4 z-25 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=120&h=120&fit=crop&q=80"
              alt="Grilled meat"
              className="w-20 h-20 object-cover rounded-xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
    
    {/* Bottom section with contact and social */}
    <div className="border-t border-white/10 pt-8">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Contact info */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-lg mb-2">Savoria Restaurant</h3>
          <p className="text-neutral-400 text-sm">123 Culinary Street, Downtown District</p>
          <p className="text-neutral-400 text-sm">New York, NY 10001</p>
        </div>
        
        {/* Contact buttons */}
        <div className="flex justify-center space-x-4">
          <motion.a
            href="tel:+1234567890"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(245, 158, 11, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://wa.me/1234567890"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://instagram.com/savoria"
            className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(219, 39, 119, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-5 w-5" />
          </motion.a>
        </div>
        
        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-neutral-400 text-sm">
            © 2025 Savoria Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}
