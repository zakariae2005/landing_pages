
"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, Phone, MessageCircle, Instagram, Star, Clock, ChefHat, Heart, ArrowRight, MapPin, Award, Utensils, Wine } from "lucide-react"

export default function RestaurantLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0.95, 1])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  const menuItems = [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy arborio rice with black truffle, aged parmesan, and wild mushrooms",
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
                      "{testimonial.review}"
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
      <section className="py-24 px-6 bg-gradient-to-br from-neutral-900 to-neutral-800">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center bg-amber-600/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-amber-400 mr-2" />
              <span className="text-amber-300 text-sm font-medium">Visit Us</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find Us in the Heart of the City
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-neutral-300">
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div 
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1516401266446-6432a8a07d41?w=600&h=450&fit=crop&q=80')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center text-white">
                      <MapPin className="h-6 w-6 mr-3 text-amber-400" />
                      <div>
                        <div className="font-semibold">123 Culinary Street</div>
                        <div className="text-sm opacity-90">Downtown District, New York</div>
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
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-amber-600/20 p-4 rounded-full">
                        <Phone className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Reservations</h3>
                        <p className="text-neutral-300 text-lg">(555) 123-4567</p>
                        <p className="text-neutral-400 text-sm mt-1">Available 10AM - 10PM daily</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-amber-600/20 p-4 rounded-full">
                        <Clock className="h-6 w-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Hours</h3>
                        <div className="space-y-2 text-neutral-300">
                          <div className="flex justify-between">
                            <span>Monday - Thursday</span>
                            <span>5:00 PM - 10:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Friday - Saturday</span>
                            <span>5:00 PM - 11:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday</span>
                            <span>4:00 PM - 9:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={fadeInUp}>
                <Card className="backdrop-blur-sm bg-white/70 border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com/savoria"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://facebook.com/savoria"
                        className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com/savoria"
                        className="bg-sky-500 text-white p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for an Unforgettable Experience?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 leading-relaxed">
              Book your table now or order online for pickup and delivery
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Clock className="mr-2 h-5 w-5" />
                Make Reservation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Order Online
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Footer */}
      <footer className="sticky bottom-0 backdrop-blur-md bg-white/90 border-t border-orange-100/50 py-4 px-4 z-40">
        <div className="container mx-auto flex justify-center space-x-8">
          <motion.a
            href="tel:+1234567890"
            className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://wa.me/1234567890"
            className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://instagram.com/savoria"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="h-5 w-5" />
          </motion.a>
        </div>
      </footer>
    </div>
  )
}
