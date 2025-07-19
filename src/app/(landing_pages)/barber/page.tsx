"use client"

import { Calendar } from "@/components/ui/calendar"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scissors,
  Palette,
  Sparkles,
  Heart,
  Star,
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  Award,
  Users,
  Clock,
  Shield,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function PremiumHairSalon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Absolutely amazing experience! The stylists are so talented and the atmosphere is so relaxing. I always leave feeling like a new person.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Chen",
      text: "Best hair salon in the city! They really listen to what you want and deliver beyond expectations. The color work is phenomenal.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Maria Rodriguez",
      text: "I've been coming here for 2 years and never disappointed. Professional, friendly, and the results are always perfect!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Precision Cuts",
      description: "Expert styling tailored to your face shape and lifestyle",
      price: "From $85",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Color Artistry",
      description: "Balayage, highlights, and custom color transformations",
      price: "From $150",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Hair Treatments",
      description: "Deep conditioning, keratin, and restorative therapies",
      price: "From $120",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Special Occasions",
      description: "Bridal styling, updos, and event-ready looks",
      price: "From $200",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Stylists",
      description: "Our team has won multiple industry awards",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Products",
      description: "We use only the finest professional-grade products",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Care",
      description: "Every service is customized to your unique needs",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a 100% guarantee",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Floating Header */}
      <motion.header
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
          >
            Luxe Hair Studio
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {["About", "Services", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-100"
            >
              <nav className="container mx-auto px-4 py-4 space-y-4">
                {["About", "Services", "Gallery", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img.avif"
            alt="Luxury Hair Salon"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unleash Your
              <span className="block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Beauty
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience luxury hair care where artistry meets expertise. Transform your look with our award-winning
              stylists.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Book Your Appointment
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-60 blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-40 blur-sm"
        />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Story of
                <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Passion & Beauty
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Luxe Hair Studio has been transforming lives through the art of hair styling. Our
                passionate team of award-winning stylists combines years of experience with the latest techniques to
                create looks that are uniquely you.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that great hair is not just about looking good—it&apos;s about feeling confident, empowered, and
                authentically beautiful. Every client who walks through our doors becomes part of our family.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600">15+</div>
                  <div className="text-gray-600">Awards Won</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Our Team"
                  width={500}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full opacity-80 blur-xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full opacity-60 blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Premium
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of luxury hair services, each designed to bring out your natural beauty
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                      {service.price}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              Special
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"> Offers</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="relative bg-gradient-to-br from-rose-500 to-pink-500 text-white border-0 shadow-2xl rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <Badge className="absolute top-4 right-4 bg-white text-rose-600 font-bold">Limited Time</Badge>
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl font-bold mb-4">20%</div>
                    <div className="text-2xl font-bold mb-4">OFF</div>
                    <div className="text-xl mb-6">First Visit</div>
                    <p className="text-rose-100 mb-6">
                      New clients enjoy 20% off any service. Book your first appointment today!
                    </p>
                    <Button
                      variant="secondary"
                      className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-8 py-3 rounded-full"
                    >
                      Claim Offer
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="relative bg-gradient-to-br from-pink-500 to-rose-500 text-white border-0 shadow-2xl rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <Badge className="absolute top-4 right-4 bg-white text-pink-600 font-bold">Free Service</Badge>
                  <CardContent className="p-8 text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-4" />
                    <div className="text-2xl font-bold mb-4">Free Hair Analysis</div>
                    <p className="text-pink-100 mb-6">
                      Get a complimentary hair and scalp analysis with any color service
                    </p>
                    <Button
                      variant="secondary"
                      className="bg-white text-pink-600 hover:bg-pink-50 font-semibold px-8 py-3 rounded-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Luxe Hair Studio
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Clients
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Say About Us
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </p>

                    <div className="flex items-center justify-center space-x-4">
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                        <div className="text-gray-600">Verified Client</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "bg-rose-500 w-8" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Work
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Gallery
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the transformations and artistry that make our clients shine
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[
              "/images/p1.jpeg",
              "/images/p2.jpeg",
              "/images/p3.jpeg",
              "/images/p4.jpeg",
              "/images/p5.jpeg",
              "/images/p6.jpeg",
              "/images/p2.jpeg",
              "/images/p4.jpeg",
            ].map((src, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Book Your
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Appointment
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready for your transformation? Schedule your appointment with our expert stylists
            </motion.p>
          </motion.div>

          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <Input
                        placeholder="Enter your full name"
                        className="border-gray-200 focus:border-rose-500 focus:ring-rose-500 rounded-xl py-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <Input
                        placeholder="Enter your phone number"
                        className="border-gray-200 focus:border-rose-500 focus:ring-rose-500 rounded-xl py-3"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                      <Input
                        type="date"
                        className="border-gray-200 focus:border-rose-500 focus:ring-rose-500 rounded-xl py-3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                      <select className="w-full border border-gray-200 focus:border-rose-500 focus:ring-rose-500 rounded-xl py-3 px-4 bg-white">
                        <option>Select a service</option>
                        <option>Precision Cut</option>
                        <option>Color Artistry</option>
                        <option>Hair Treatment</option>
                        <option>Special Occasion</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Notes</label>
                    <Textarea
                      placeholder="Tell us about your hair goals or any special requests..."
                      className="border-gray-200 focus:border-rose-500 focus:ring-rose-500 rounded-xl"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-rose-500/25 transition-all duration-300"
                  >
                    Book My Appointment
                    
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visit Our
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Studio
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-rose-600">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Address</div>
                        <div className="text-gray-600">123 Beauty Boulevard, Fashion District, NY 10001</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-rose-600">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Phone</div>
                        <div className="text-gray-600">(555) 123-HAIR</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center text-rose-600">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Hours</div>
                        <div className="text-gray-600">
                          Mon-Fri: 9AM-8PM
                          <br />
                          Sat-Sun: 9AM-6PM
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Button
                        size="icon"
                        className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-full"
                      >
                        <Instagram className="w-5 h-5" />
                      </Button>
                      <Button
                        size="icon"
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full"
                      >
                        <MessageCircle className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden h-full">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-rose-500" />
                      <div className="text-lg font-semibold">Interactive Map</div>
                      <div className="text-sm">Click to view directions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Luxe Hair Studio
              </div>
              <p className="text-gray-400 leading-relaxed">
                Where beauty meets artistry. Transform your look with our award-winning stylists.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-rose-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-rose-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-rose-400 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-rose-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Precision Cuts</li>
                <li>Color Artistry</li>
                <li>Hair Treatments</li>
                <li>Special Occasions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-rose-400 hover:bg-rose-400/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-green-400 hover:bg-green-400/10"
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-gray-400 text-sm">Follow us for daily inspiration and hair tips</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Luxe Hair Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
