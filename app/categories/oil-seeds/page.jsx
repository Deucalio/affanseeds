"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ShoppingCart,
  Heart,
  Star,
  Leaf,
  Droplets,
  Sun,
  ArrowRight,
  Check,
  Info,
  Award,
  Truck,
  Clock,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Breadcrumb from "@/components/breadcrumb"

export default function OilSeedsCategoryPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [activeProduct, setActiveProduct] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Refs for scroll sections
  const heroRef = useRef(null)
  const productsRef = useRef(null)

  // State for scroll position
  const [scrollY, setScrollY] = useState(0)

  // State for product interactions
  const [hoveredProduct, setHoveredProduct] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 300)
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to products section
  const scrollToContent = () => {
    const productsElement = document.getElementById("products")
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Modal functions
  const openProductModal = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeProductModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
            entry.target.classList.add("opacity-100")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const elements = document.querySelectorAll(".reveal")
    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [])

  // Oil Seeds products data
  const oilSeedsProducts = [
    {
      id: 1,
      name: "Titan Mustard Seeds",
      scientificName: "Brassica juncea",
      description:
        "High-yielding mustard variety with excellent oil content and disease resistance. Ideal for commercial oil production.",
      longDescription:
        "Titan Mustard Seeds are a premium variety known for their exceptional oil content and robust disease resistance. These seeds produce plants with strong vigor and adaptability to various growing conditions. The resulting oil is prized for its rich flavor and nutritional benefits, making it a preferred choice for both culinary and industrial applications.",
      price: 12.99,
      unit: "per kg",
      minOrder: "5kg",
      availability: "In Stock",
      image: "/placeholder.svg?height=600&width=600&text=Titan+Mustard",
      features: [
        "High oil content (38-42%)",
        "Excellent disease resistance",
        "Early maturing variety",
        "Drought tolerant",
        "High yield potential",
        "Adaptable to various soils",
      ],
      specifications: {
        seedingRate: "5-6 kg/hectare",
        germinationRate: "90-95%",
        daysToGermination: "4-7 days",
        harvestTime: "110-120 days after sowing",
        yieldPotential: "1.8-2.2 tons/hectare",
      },
      growingConditions: {
        soilType: "Well-drained loamy soil",
        soilPH: "6.0-7.5",
        climate: "Cool to moderate",
        waterRequirements: "Low to medium",
        sunlight: "Full sun",
        growingSeason: "Winter (Rabi season)",
      },
      badge: "Premium",
      badgeColor: "amber",
      rating: 4.8,
      reviews: 112,
    },
    {
      id: 2,
      name: "Sesame Seeds",
      scientificName: "Sesamum indicum",
      description:
        "High-quality sesame seeds with superior oil content and distinctive flavor. Drought-resistant and suitable for various soil types.",
      longDescription:
        "Our premium Sesame Seeds are carefully selected for their superior oil content and distinctive nutty flavor. These seeds produce plants that are naturally drought-resistant and adaptable to a wide range of soil conditions. The resulting seeds are rich in antioxidants, vitamins, and minerals, making them valuable for both culinary uses and oil extraction.",
      price: 15.99,
      unit: "per kg",
      minOrder: "5kg",
      availability: "In Stock",
      image: "/placeholder.svg?height=600&width=600&text=Sesame+Seeds",
      features: [
        "High oil content (50-55%)",
        "Drought resistant",
        "Heat tolerant",
        "Minimal pest issues",
        "Rich in antioxidants",
        "Adaptable to poor soils",
      ],
      specifications: {
        seedingRate: "3-4 kg/hectare",
        germinationRate: "85-90%",
        daysToGermination: "3-5 days",
        harvestTime: "90-120 days after sowing",
        yieldPotential: "0.8-1.2 tons/hectare",
      },
      growingConditions: {
        soilType: "Well-drained sandy loam",
        soilPH: "5.5-8.0",
        climate: "Warm to hot",
        waterRequirements: "Low",
        sunlight: "Full sun",
        growingSeason: "Summer (Kharif season)",
      },
      badge: "Drought Resistant",
      badgeColor: "teal",
      rating: 4.7,
      reviews: 98,
    },
    {
      id: 3,
      name: "Sunflower Seeds",
      scientificName: "Helianthus annuus",
      description:
        "High-oil hybrid sunflower seeds ideal for commercial production. Disease-resistant with excellent standability.",
      longDescription:
        "Our hybrid Sunflower Seeds are specifically developed for commercial oil production, featuring high oil content and excellent disease resistance. These seeds produce plants with strong stems and outstanding standability, reducing harvest losses. The resulting oil is prized for its light taste, high smoke point, and heart-healthy nutritional profile.",
      price: 18.99,
      unit: "per kg",
      minOrder: "5kg",
      availability: "In Stock",
      image: "/placeholder.svg?height=600&width=600&text=Sunflower+Seeds",
      features: [
        "High oil content (40-45%)",
        "Disease resistant",
        "Excellent standability",
        "Drought tolerant",
        "Early maturity",
        "Uniform head size",
      ],
      specifications: {
        seedingRate: "4-5 kg/hectare",
        germinationRate: "90-95%",
        daysToGermination: "7-10 days",
        harvestTime: "90-100 days after sowing",
        yieldPotential: "2.0-2.5 tons/hectare",
      },
      growingConditions: {
        soilType: "Deep, well-drained soil",
        soilPH: "6.0-7.5",
        climate: "Warm temperate",
        waterRequirements: "Medium",
        sunlight: "Full sun",
        growingSeason: "Spring to Summer",
      },
      badge: "High Yield",
      badgeColor: "amber",
      rating: 4.9,
      reviews: 145,
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
      case "teal":
        return "bg-teal-900/80 text-teal-100 border-teal-700"
      case "emerald":
        return "bg-emerald-900/80 text-emerald-100 border-emerald-700"
      case "rose":
        return "bg-rose-900/80 text-rose-100 border-rose-700"
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

  // Get color classes for products
  const getColorClasses = (color) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-600",
          hover: "hover:bg-green-700",
          text: "text-green-600",
          light: "bg-green-50",
          border: "border-green-200",
          badgeBg: "bg-green-100",
          badgeText: "text-green-800",
        }
      case "emerald":
        return {
          bg: "bg-emerald-600",
          hover: "hover:bg-emerald-700",
          text: "text-emerald-600",
          light: "bg-emerald-50",
          border: "border-emerald-200",
          badgeBg: "bg-emerald-100",
          badgeText: "text-emerald-800",
        }
      case "amber":
        return {
          bg: "bg-amber-600",
          hover: "hover:bg-amber-700",
          text: "text-amber-600",
          light: "bg-amber-50",
          border: "border-amber-200",
          badgeBg: "bg-amber-100",
          badgeText: "text-amber-800",
        }
      case "teal":
        return {
          bg: "bg-teal-600",
          hover: "hover:bg-teal-700",
          text: "text-teal-600",
          light: "bg-teal-50",
          border: "border-teal-200",
          badgeBg: "bg-teal-100",
          badgeText: "text-teal-800",
        }
      case "blue":
        return {
          bg: "bg-blue-600",
          hover: "hover:bg-blue-700",
          text: "text-blue-600",
          light: "bg-blue-50",
          border: "border-blue-200",
          badgeBg: "bg-blue-100",
          badgeText: "text-blue-800",
        }
      case "rose":
        return {
          bg: "bg-rose-600",
          hover: "hover:bg-rose-700",
          text: "text-rose-600",
          light: "bg-rose-50",
          border: "border-rose-200",
          badgeBg: "bg-rose-100",
          badgeText: "text-rose-800",
        }
      default:
        return {
          bg: "bg-green-600",
          hover: "hover:bg-green-700",
          text: "text-green-600",
          light: "bg-green-50",
          border: "border-green-200",
          badgeBg: "bg-green-100",
          badgeText: "text-green-800",
        }
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 pt-20">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 md:py-24 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Oil+Seeds+Field"
            alt="Oil seeds field"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-900/50 to-gray-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="max-w-4xl mx-auto" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-amber-900/30 border border-amber-700/50 text-amber-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sun className="h-4 w-4 mr-2" />
              <span>Oil Seeds</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300"
            >
              Premium Oil Seeds for Maximum Yield
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-10">
              High-quality seeds for oil production, carefully selected for optimal oil content and disease resistance.
              Our oil seeds are sourced from the best producers worldwide.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: <Check className="h-5 w-5 text-amber-400" />, text: "High Oil Content" },
                { icon: <Check className="h-5 w-5 text-amber-400" />, text: "Disease Resistant" },
                { icon: <Check className="h-5 w-5 text-amber-400" />, text: "Drought Tolerant" },
                { icon: <Check className="h-5 w-5 text-amber-400" />, text: "Expert Growing Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700"
                >
                  {item.icon}
                  <span className="ml-2 text-sm text-gray-200">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white border-0 rounded-full px-8 py-6 text-lg shadow-lg shadow-amber-900/50 group"
                onClick={() => productsRef.current.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Explore Products</span>
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-amber-700 text-amber-400 hover:bg-amber-900/30 rounded-full px-8 py-6 text-lg"
              >
                <span>Download Catalog</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-gray-900/5 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Our <span className="text-amber-400">Oil Seeds</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover our premium selection of oil seeds, perfect for farmers looking to maximize yield and oil content
              for commercial production.
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {oilSeedsProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`relative ${index % 2 === 0 ? "" : "bg-gray-900/30 rounded-3xl py-12 px-4 md:px-8"}`}
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Product Image - Always on left for mobile, alternating for desktop */}
                  <motion.div variants={scaleIn} className={`order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    <div className="relative mx-auto">
                      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-8 border-gray-800 group-hover:border-amber-900 transition-all duration-300">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
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
                    </div>
                  </motion.div>

                  {/* Product Content */}
                  <motion.div
                    variants={fadeInUp}
                    className={`order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                  >
                    <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-amber-400 italic mb-4">{product.scientificName}</p>
                    <p className="text-gray-300 mb-6">{product.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specifications Preview */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800/50 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-amber-400 mb-2">Seeding Rate</h4>
                        <p className="text-white">{product.specifications.seedingRate}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-amber-400 mb-2">Germination</h4>
                        <p className="text-white">{product.specifications.germinationRate}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">({product.reviews} reviews)</span>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
                        <span className="text-gray-400 ml-2">{product.unit}</span>
                        <p className="text-sm text-gray-500">Min. Order: {product.minOrder}</p>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600"
                          onClick={(e) => addToWishlist(e, product.id)}
                        >
                          <Heart className="h-5 w-5" />
                        </Button>
                        <Button
                          className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
                          onClick={(e) => addToCart(e, product.id)}
                        >
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          <span>Add to Cart</span>
                        </Button>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="mt-6">
                      <Button
                        variant="ghost"
                        className="text-amber-400 hover:text-amber-300 hover:bg-transparent p-0 flex items-center"
                        onClick={() => setActiveProduct(activeProduct === product.id ? null : product.id)}
                      >
                        <span>{activeProduct === product.id ? "Hide Details" : "View Full Details"}</span>
                        {activeProduct === product.id ? (
                          <ChevronUp className="ml-2 h-5 w-5" />
                        ) : (
                          <ChevronDown className="ml-2 h-5 w-5" />
                        )}
                      </Button>
                    </div>
                  </motion.div>
                </div>

                {/* Expanded Details Section */}
                {activeProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8 pt-8 border-t border-gray-800"
                  >
                    <Tabs defaultValue="details" className="w-full">
                      <TabsList className="bg-gray-800 border border-gray-700">
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="specifications">Specifications</TabsTrigger>
                        <TabsTrigger value="growing">Growing Guide</TabsTrigger>
                      </TabsList>
                      <TabsContent value="details" className="mt-6">
                        <div className="prose prose-invert max-w-none">
                          <h4 className="text-xl font-bold text-white mb-4">Product Description</h4>
                          <p className="text-gray-300">{product.longDescription}</p>

                          <h4 className="text-xl font-bold text-white mt-6 mb-4">Key Benefits</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-5 w-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="specifications" className="mt-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Technical Specifications</h4>
                            <div className="space-y-4">
                              {Object.entries(product.specifications).map(([key, value]) => (
                                <div key={key} className="flex justify-between border-b border-gray-800 pb-2">
                                  <span className="text-gray-400">
                                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                                  </span>
                                  <span className="text-white font-medium">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white mb-4">Shipping Information</h4>
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <Truck className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                  <p className="text-white font-medium">Free Shipping</p>
                                  <p className="text-gray-400 text-sm">On orders over $100</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <Clock className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                  <p className="text-white font-medium">Processing Time</p>
                                  <p className="text-gray-400 text-sm">1-2 business days</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <Info className="h-5 w-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
                                <div>
                                  <p className="text-white font-medium">Availability</p>
                                  <p className="text-amber-400 text-sm">{product.availability}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="growing" className="mt-6">
                        <div className="prose prose-invert max-w-none">
                          <h4 className="text-xl font-bold text-white mb-4">Growing Conditions</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(product.growingConditions).map(([key, value]) => (
                              <div key={key} className="bg-gray-800/50 rounded-xl p-4">
                                <h5 className="text-amber-400 font-medium mb-2">
                                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                                </h5>
                                <p className="text-gray-300">{value}</p>
                              </div>
                            ))}
                          </div>

                          <h4 className="text-xl font-bold text-white mt-8 mb-4">Planting Guide</h4>
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-gray-800">
                              <AccordionTrigger className="text-white hover:text-amber-400">
                                Soil Preparation
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-300">
                                Prepare a well-tilled seedbed free of weeds and large clods. For best results, conduct a
                                soil test and adjust pH and nutrients according to recommendations for this specific oil
                                seed crop.
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-gray-800">
                              <AccordionTrigger className="text-white hover:text-amber-400">
                                Seeding Methods
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-300">
                                Broadcast or drill seeds at the recommended seeding rate. When broadcasting, ensure good
                                seed-to-soil contact by rolling or cultipacking after seeding. For drilling, place seeds
                                at the appropriate depth (usually 1-2 cm).
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-gray-800">
                              <AccordionTrigger className="text-white hover:text-amber-400">
                                Irrigation & Maintenance
                              </AccordionTrigger>
                              <AccordionContent className="text-gray-300">
                                Keep soil moist but not waterlogged during germination. Once established, follow
                                recommended irrigation schedules based on your climate and soil conditions. Regular
                                maintenance includes weed control, proper fertilization, and monitoring for pests and
                                diseases.
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 md:py-24 bg-gray-900 relative">
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-amber-900/30 border border-amber-700/50 text-amber-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Award className="h-4 w-4 mr-2" />
              <span>Our Commitment</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Sustainable <span className="text-amber-400">Farming Practices</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-amber-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're dedicated to promoting sustainable agriculture through our ethical seed sourcing and growing
              practices.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Leaf className="h-10 w-10 text-amber-400" />,
                title: "Organic Growing Methods",
                description:
                  "All our seeds are grown using sustainable, organic practices without synthetic pesticides or fertilizers.",
              },
              {
                icon: <Droplets className="h-10 w-10 text-amber-400" />,
                title: "Water Conservation",
                description:
                  "We select and develop varieties that require less water, helping farmers conserve this precious resource.",
              },
              {
                icon: <Sun className="h-10 w-10 text-amber-400" />,
                title: "Climate Resilience",
                description:
                  "Our seeds are tested for resilience to changing climate conditions, ensuring long-term farming success.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="p-3 bg-amber-900/30 rounded-full w-fit mb-6 border border-amber-700/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-gray-900/20 to-gray-950 opacity-70"></div>

        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-amber-900/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-900/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-amber-400">Grow Better Oil Seeds?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8">
              Contact our team of agricultural experts for personalized recommendations and bulk order inquiries.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white border-0 rounded-full px-8 py-6 text-lg shadow-lg shadow-amber-900/50 group"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-amber-700 text-amber-400 hover:bg-amber-900/30 rounded-full px-8 py-6 text-lg"
              >
                <span>Download Growing Guide</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <div
        className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-50 pointer-events-none"}`}
      >
        <Button
          onClick={scrollToTop}
          className="bg-amber-600 hover:bg-amber-700 text-white rounded-full h-12 w-12 p-0 shadow-lg shadow-amber-900/50"
          aria-label="Back to top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </div>
    </main>
  )
}
