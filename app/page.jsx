"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ShoppingCart,
  Heart,
  ChevronRight,
  Star,
  Leaf,
  Droplets,
  Sun,
  Wind,
  ArrowRight,
  Plus,
  Sparkles,
  Globe,
  BookOpen,
  Calendar,
  Award,
  MapPin,
  Phone,
  Mail,
  Building,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const heroRef = useRef(null)
  const featuredRef = useRef(null)
  const categoriesRef = useRef(null)
  const sustainabilityRef = useRef(null)
  const aboutRef = useRef(null)
  const locationRef = useRef(null)
  const certificatesRef = useRef(null)
  const testimonialsRef = useRef(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mock data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Purple Basil",
      category: "herbs",
      description: "Aromatic purple leaves with a sweet, spicy flavor",
      price: 4.99,
      image: "/placeholder.svg?height=500&width=500&text=Purple+Basil",
      rating: 4.8,
      reviews: 124,
      tags: ["Culinary", "Aromatic", "Ornamental"],
      badge: "Bestseller",
      badgeColor: "amber",
    },
    {
      id: 2,
      name: "Ghost Pepper",
      category: "vegetables",
      description: "One of the world's hottest peppers, extreme heat",
      price: 6.99,
      image: "/placeholder.svg?height=500&width=500&text=Ghost+Pepper",
      rating: 4.9,
      reviews: 89,
      tags: ["Spicy", "Rare", "Extreme Heat"],
      badge: "Hot",
      badgeColor: "red",
    },
    {
      id: 3,
      name: "Black Nebula Carrot",
      category: "vegetables",
      description: "Deep purple-black carrots with cosmic appearance",
      price: 5.49,
      image: "/placeholder.svg?height=500&width=500&text=Black+Nebula+Carrot",
      rating: 4.7,
      reviews: 56,
      tags: ["Rare", "Heirloom", "Colorful"],
      badge: "Unique",
      badgeColor: "purple",
    },
    {
      id: 4,
      name: "Dragon's Breath Chili",
      category: "vegetables",
      description: "Extremely hot pepper, not for the faint of heart",
      price: 8.99,
      image: "/placeholder.svg?height=500&width=500&text=Dragon's+Breath+Chili",
      rating: 4.9,
      reviews: 42,
      tags: ["Super Hot", "Rare", "Collector's Item"],
      badge: "Extreme",
      badgeColor: "red",
    },
  ]

  // Categories
  const categories = [
    {
      id: "forage",
      name: "Forage Field Crop Seeds",
      description: "High-quality seeds for pasture, hay, and silage production",
      icon: <Leaf className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=600&text=Forage+Seeds",
      color: "from-emerald-500 to-green-700",
      count: 6,
    },
    {
      id: "oil-seeds",
      name: "Oil Seeds",
      description: "Premium quality seeds for oil production",
      icon: <Sun className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=600&text=Oil+Seeds",
      color: "from-amber-500 to-orange-700",
      count: 3,
    },
    {
      id: "vegetable-seeds",
      name: "Vegetable Seeds",
      description: "Fresh, high-yield vegetable seeds for commercial and home growers",
      icon: <Droplets className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=600&text=Vegetable+Seeds",
      color: "from-rose-500 to-red-700",
      count: 5,
    },
    {
      id: "microgreens",
      name: "Microgreens",
      description: "Fast-growing, nutrient-dense miniature greens",
      icon: <Wind className="h-6 w-6" />,
      image: "/placeholder.svg?height=600&width=600&text=Microgreens",
      color: "from-teal-500 to-cyan-700",
      count: 29,
    },
  ]

  // Sustainability practices
  const sustainabilityPractices = [
    {
      icon: <Globe className="h-10 w-10 text-emerald-400" />,
      title: "Global Seed Conservation",
      description:
        "We partner with seed banks worldwide to preserve rare and endangered plant varieties for future generations.",
      image: "/placeholder.svg?height=300&width=400&text=Seed+Conservation",
    },
    {
      icon: <Leaf className="h-10 w-10 text-emerald-400" />,
      title: "Organic Growing Methods",
      description:
        "All our seeds are grown using sustainable, organic practices without synthetic pesticides or fertilizers.",
      image: "/placeholder.svg?height=300&width=400&text=Organic+Growing",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-emerald-400" />,
      title: "Educational Initiatives",
      description: "We provide resources and workshops to help gardeners learn sustainable growing practices.",
      image: "/placeholder.svg?height=300&width=400&text=Education",
    },
    {
      icon: <Calendar className="h-10 w-10 text-emerald-400" />,
      title: "Seasonal Seed Selection",
      description: "Our seed offerings follow natural growing cycles to promote biodiversity and ecological balance.",
      image: "/placeholder.svg?height=300&width=400&text=Seasonal+Selection",
    },
  ]

  // Certificates
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "/placeholder.svg?height=200&width=200&text=ISO+9001",
    },
    {
      name: "Organic Certification",
      description: "Certified Organic Producer",
      image: "/placeholder.svg?height=200&width=200&text=Organic+Certified",
    },
    {
      name: "Non-GMO Project",
      description: "Verified Non-GMO Products",
      image: "/placeholder.svg?height=200&width=200&text=Non-GMO",
    },
    {
      name: "Fair Trade Certified",
      description: "Ethical Trading Practices",
      image: "/placeholder.svg?height=200&width=200&text=Fair+Trade",
    },
  ]

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Urban Gardener",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The rare herb seeds I purchased have transformed my urban garden into a fragrant paradise. The germination rate was impressive, and the flavors are unlike anything from the store.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chef & Grower",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "As a chef, I'm always looking for unique ingredients. The exotic vegetable seeds have allowed me to grow specialty produce that impresses my restaurant guests and can't be found elsewhere.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Botanical Enthusiast",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The collection of rare flower seeds exceeded my expectations. Not only was shipping fast, but the detailed growing instructions helped me successfully cultivate varieties I'd never grown before.",
      rating: 4,
    },
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  // Helper function for badge colors
  const getBadgeColor = (color) => {
    switch (color) {
      case "red":
        return "bg-red-900/80 text-red-100 border-red-700"
      case "amber":
        return "bg-amber-900/80 text-amber-100 border-amber-700"
      case "green":
        return "bg-emerald-900/80 text-emerald-100 border-emerald-700"
      case "blue":
        return "bg-blue-900/80 text-blue-100 border-blue-700"
      case "purple":
        return "bg-purple-900/80 text-purple-100 border-purple-700"
      case "violet":
        return "bg-violet-900/80 text-violet-100 border-violet-700"
      case "lime":
        return "bg-lime-900/80 text-lime-100 border-lime-700"
      default:
        return "bg-emerald-900/80 text-emerald-100 border-emerald-700"
    }
  }

  // Add to cart function
  const addToCart = (e, productId) => {
    e.preventDefault()
    setCartCount((prev) => prev + 1)
    // Here you would add actual cart functionality
  }

  // Add to wishlist function
  const addToWishlist = (e, productId) => {
    e.preventDefault()
    setWishlistCount((prev) => prev + 1)
    // Here you would add actual wishlist functionality
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Dark+Garden+Background"
            alt="Dark garden background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/50 to-gray-950"></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-emerald-500/30 blur-sm"
                style={{
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Discover Rare & Exotic Seeds</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-300"
            >
              Grow Something Extraordinary
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 mb-10">
              Rare, exotic, and heirloom seeds for the adventurous gardener
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-full px-8 py-6 text-lg shadow-lg shadow-emerald-900/50 group"
              >
                <span>Shop Collection</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg"
              >
                Explore Categories
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Leaf className="h-6 w-6 text-emerald-400" />, label: "100% Organic", value: "No GMOs" },
                { icon: <Star className="h-6 w-6 text-amber-400" />, label: "Rare Varieties", value: "200+ Species" },
                {
                  icon: <Droplets className="h-6 w-6 text-cyan-400" />,
                  label: "High Germination",
                  value: "95% Success",
                },
                { icon: <Sun className="h-6 w-6 text-orange-400" />, label: "Global Sourcing", value: "6 Continents" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center p-3 rounded-full bg-gray-800/50 border border-gray-700 mb-3 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.5 } }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                },
              }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            />
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              About <span className="text-emerald-400">Us</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dedicated to providing high-quality agricultural seeds and solutions to farmers across Pakistan.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded with a vision to revolutionize agriculture in Pakistan, Affan Agro Seeds has been at the
                  forefront of providing premium quality seeds to farmers for over a decade.
                </p>
                <p>
                  We specialize in sourcing and developing high-yield, disease-resistant seed varieties that thrive in
                  local growing conditions, helping farmers maximize their productivity and profitability.
                </p>
                <p>
                  Our team of agricultural experts works closely with farmers, providing not just seeds but
                  comprehensive growing guidance and support throughout the cultivation process.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <h4 className="text-3xl font-bold text-emerald-400 mb-2">10+</h4>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <h4 className="text-3xl font-bold text-emerald-400 mb-2">1000+</h4>
                  <p className="text-gray-300">Satisfied Farmers</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-emerald-600/10 opacity-20 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Our+Team"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link href="/about">
              <Button
                variant="outline"
                className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-6"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={featuredRef} className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTI4MjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtNnYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Featured <span className="text-emerald-400">Seeds</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover our curated selection of rare and exotic seeds, perfect for adventurous gardeners looking to grow
              something truly special.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={scaleIn}
                className="group relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link href={`/products/${product.id}`} className="block">
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-emerald-700/50 hover:shadow-lg hover:shadow-emerald-900/20">
                    {/* Product Image */}
                    <div className="relative mx-auto p-6">
                      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-800 group-hover:border-emerald-900 transition-all duration-300">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Badge */}
                      {product.badge && (
                        <div
                          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(product.badgeColor)}`}
                        >
                          {product.badge}
                        </div>
                      )}

                      {/* Quick action buttons - visible on hover */}
                      <div
                        className={`absolute right-4 top-16 flex flex-col gap-2 transition-all duration-300 ${hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                      >
                        <button
                          onClick={(e) => addToWishlist(e, product.id)}
                          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white transition-colors"
                          aria-label="Add to wishlist"
                        >
                          <Heart className="h-5 w-5" />
                        </button>
                        <button
                          onClick={(e) => addToCart(e, product.id)}
                          className="p-2 rounded-full bg-emerald-800 hover:bg-emerald-700 text-emerald-200 hover:text-white transition-colors"
                          aria-label="Add to cart"
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-6 pt-0 text-center">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {product.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-xs ml-2">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">${product.price.toFixed(2)}</span>
                        <Button
                          size="sm"
                          className="bg-emerald-800 hover:bg-emerald-700 text-white rounded-full"
                          onClick={(e) => addToCart(e, product.id)}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          <span>Add</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button
              variant="outline"
              className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-6"
            >
              <span>View All Products</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Explore <span className="text-emerald-400">Categories</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Browse our extensive collection of specialty seeds organized by category to find exactly what you're
              looking for.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {categories.map((category, index) => (
              <motion.div key={category.id} variants={scaleIn} className="group">
                <Link href={`/categories/${category.id}`} className="block">
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    {/* Background Image */}
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="p-3 bg-black/30 backdrop-blur-sm rounded-full w-fit">{category.icon}</div>

                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                        <p className="text-white/80 mb-4 line-clamp-2">{category.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-black/30 text-white hover:bg-black/40">{category.count} varieties</Badge>
                          <span className="text-white group-hover:translate-x-1 transition-transform duration-300">
                            <ChevronRight className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Practices Section */}
      <section ref={sustainabilityRef} className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTI4MjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtNnYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Award className="h-4 w-4 mr-2" />
              <span>Our Commitment</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Sustainable <span className="text-emerald-400">Seed Practices</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're dedicated to preserving biodiversity and promoting sustainable agriculture through our ethical seed
              sourcing and growing practices.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {sustainabilityPractices.map((practice, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-emerald-700/50 hover:shadow-lg hover:shadow-emerald-900/20"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                    <Image
                      src={practice.image || "/placeholder.svg"}
                      alt={practice.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 hidden md:block"></div>
                  </div>

                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <div className="p-3 bg-emerald-900/30 rounded-full w-fit mb-4 border border-emerald-700/30">
                      {practice.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{practice.title}</h3>
                    <p className="text-gray-400">{practice.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button
              variant="outline"
              className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-6"
            >
              <span>Learn More About Our Practices</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section ref={certificatesRef} className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Our <span className="text-emerald-400">Certifications</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              We maintain the highest standards in the industry, backed by internationally recognized certifications.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{certificate.name}</h3>
                <p className="text-gray-400 text-sm">{certificate.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section ref={locationRef} className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Our <span className="text-emerald-400">Location</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Visit our office or get in touch with us. We're always ready to assist you with your agricultural needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-emerald-900/30 rounded-full mr-4 border border-emerald-700/30">
                  <Building className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Office Address</h3>
                  <p className="text-gray-300">
                    Affan Agro Seeds LLP
                    <br />
                    Office # 522-B, 10th Floor
                    <br />
                    Dawood Center, Auto Bhan Road
                    <br />
                    Hyderabad
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-emerald-900/30 rounded-full mr-4 border border-emerald-700/30">
                  <Phone className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">0223411135</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-emerald-900/30 rounded-full mr-4 border border-emerald-700/30">
                  <Mail className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300">info@affanagroseeds.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-emerald-900/30 rounded-full mr-4 border border-emerald-700/30">
                  <Clock className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-emerald-600/10 opacity-20 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Find Us on the Map</h3>
                    <p className="text-gray-300 mb-6">
                      Located in the heart of Hyderabad, our office is easily accessible from all major routes.
                    </p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/10 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              What Our <span className="text-emerald-400">Customers Say</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Read what gardeners and plant enthusiasts have to say about their experience with our seeds.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={scaleIn}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-emerald-500">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-emerald-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute -top-4 -left-2 text-emerald-700 opacity-30 text-5xl font-serif">"</div>
                    <p className="text-gray-300 relative z-10">{testimonial.content}</p>
                    <div className="absolute -bottom-4 -right-2 text-emerald-700 opacity-30 text-5xl font-serif">"</div>
                  </div>
                </div>

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-gray-900/20 to-gray-950 opacity-70"></div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-900/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-emerald-900/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Join Our <span className="text-emerald-400">Green Community</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8">
              Subscribe to our newsletter for growing tips, new seed releases, and exclusive offers.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Subscribe</Button>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-sm text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Floating Cart Button */}
      <div
        className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full h-14 w-14 p-0 shadow-lg shadow-emerald-900/50 relative"
          aria-label="View cart"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
    </main>
  )
}
