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
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Shield,
  Sprout,
  X,
  TreesIcon as Plant,
  SproutIcon as Seedling,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Breadcrumb from "@/components/breadcrumb"

export default function VegetableSeedsCategoryPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [activeProduct, setActiveProduct] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Refs for scroll sections
  const heroRef = useRef(null)
  const productsRef = useRef(null)
  const sustainabilityRef = useRef(null)
  const growingGuideRef = useRef(null)

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

  // Vegetable Seeds products data
  const vegetableSeedsProducts = [
    {
      id: 1,
      name: "Premium Vegetable Seeds Mix",
      scientificName: "Various species",
      description:
        "A carefully curated mix of high-quality vegetable seeds for home gardens and small-scale farming. Includes a variety of popular vegetables.",
      longDescription:
        "Our Premium Vegetable Seeds Mix is a carefully selected blend of high-performing vegetable varieties, perfect for home gardeners and small-scale farmers. This mix includes seeds for leafy greens, root vegetables, and fruiting plants, all chosen for their reliability, flavor, and productivity. Each variety has been tested for germination rate and vigor, ensuring excellent results in your garden.",
      price: 14.99,
      unit: "per pack",
      minOrder: "1 pack",
      availability: "In Stock",
      image: "/placeholder.svg?height=600&width=600&text=Vegetable+Mix",
      features: [
        "Diverse selection of vegetables",
        "High germination rates",
        "Disease-resistant varieties",
        "Non-GMO seeds",
        "Suitable for container gardening",
        "Includes growing instructions",
      ],
      specifications: {
        seedCount: "Approximately 500 seeds",
        germinationRate: "85-95%",
        daysToGermination: "5-14 days (varies by variety)",
        harvestTime: "30-120 days (varies by variety)",
        storageLife: "2-3 years when properly stored",
      },
      growingConditions: {
        soilType: "Well-drained, fertile soil",
        soilPH: "6.0-7.0 (varies by variety)",
        climate: "Temperate to warm",
        waterRequirements: "Medium",
        sunlight: "Full sun to partial shade",
        growingSeason: "Spring through fall",
      },
      badge: "Best Seller",
      badgeColor: "green",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 2,
      name: "Okra Seeds",
      scientificName: "Abelmoschus esculentus",
      description:
        "High-yielding okra variety with tender pods and excellent disease resistance. Thrives in hot weather and produces abundantly.",
      longDescription:
        "Our premium Okra Seeds produce plants with tender, flavorful pods that are perfect for cooking. This high-yielding variety thrives in hot weather and continues producing throughout the growing season. The plants show excellent resistance to common diseases and pests, making them ideal for organic growing methods. The pods are best harvested when young and tender for optimal flavor and texture.",
      price: 8.99,
      unit: "per 50g",
      minOrder: "50g",
      availability: "In Stock",
      image: "/placeholder.svg?height=600&width=600&text=Okra+Seeds",
      features: [
        "High-yielding variety",
        "Heat tolerant",
        "Disease resistant",
        "Tender, flavorful pods",
        "Extended harvest period",
        "Suitable for fresh eating and preserving",
      ],
      specifications: {
        seedingRate: "4-5 kg/hectare",
        germinationRate: "80-85%",
        daysToGermination: "7-14 days",
        harvestTime: "50-65 days after planting",
        plantHeight: "1.2-1.8 meters",
      },
      growingConditions: {
        soilType: "Well-drained, fertile soil",
        soilPH: "6.0-7.0",
        climate: "Warm to hot",
        waterRequirements: "Medium",
        sunlight: "Full sun",
        growingSeason: "Summer",
      },
      badge: "Heat Tolerant",
      badgeColor: "red",
      rating: 4.7,
      reviews: 89,
    },
    {
      id: 3,
      name: "Tomato Seeds",
      scientificName: "Solanum lycopersicum",
      description:
        "Disease-resistant tomato variety with excellent flavor and high yields. Perfect for both fresh consumption and processing.",
      longDescription:
        "Our premium Tomato Seeds produce plants with exceptional flavor and abundant harvests. This variety has been selected for its outstanding disease resistance, particularly to common tomato ailments like early blight and fusarium wilt. The fruits are medium to large in size, with a perfect balance of sweetness and acidity. These tomatoes are versatile, suitable for fresh eating, cooking, canning, and sauce-making.",
      price: 9.99,
      unit: "per 25g",
      minOrder: "25g",
      availability: "In Stock",
      image: "/placeholder.svg?height=600&width=600&text=Tomato+Seeds",
      features: [
        "Disease resistant",
        "High yielding",
        "Excellent flavor",
        "Uniform fruit size",
        "Extended harvest period",
        "Versatile culinary use",
      ],
      specifications: {
        seedingRate: "300-400g/hectare",
        germinationRate: "90-95%",
        daysToGermination: "5-10 days",
        harvestTime: "70-80 days after transplanting",
        fruitWeight: "150-200g per fruit",
      },
      growingConditions: {
        soilType: "Well-drained, fertile soil",
        soilPH: "6.0-6.8",
        climate: "Warm",
        waterRequirements: "Medium to high",
        sunlight: "Full sun",
        growingSeason: "Spring through summer",
      },
      badge: "Popular",
      badgeColor: "rose",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 4,
      name: "Hot Pepper Seeds",
      scientificName: "Capsicum annuum",
      description:
        "Spicy hot pepper variety with high heat level and excellent productivity. Perfect for adding heat to dishes and making hot sauces.",
      longDescription:
        "Our Hot Pepper Seeds produce plants with fiery fruits that pack a serious punch of heat. This productive variety yields abundant harvests of medium-sized peppers with consistent heat levels. The plants show good resistance to common pepper diseases and continue producing throughout the growing season. These peppers are perfect for adding spice to dishes, making hot sauces, or drying for later use.",
      price: 7.99,
      unit: "per 10g",
      minOrder: "10g",
      availability: "In Stock",
      image: "/placeholder.svg?height=600&width=600&text=Hot+Pepper+Seeds",
      features: [
        "High heat level",
        "Productive plants",
        "Disease resistant",
        "Consistent quality",
        "Versatile culinary use",
        "Suitable for drying",
      ],
      specifications: {
        seedingRate: "500-700g/hectare",
        germinationRate: "80-85%",
        daysToGermination: "7-14 days",
        harvestTime: "70-90 days after transplanting",
        scovilleHeatUnits: "30,000-50,000 SHU",
      },
      growingConditions: {
        soilType: "Well-drained soil",
        soilPH: "6.0-6.8",
        climate: "Warm to hot",
        waterRequirements: "Medium",
        sunlight: "Full sun",
        growingSeason: "Spring through summer",
      },
      badge: "Extra Hot",
      badgeColor: "red",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 5,
      name: "Onion Seeds",
      scientificName: "Allium cepa",
      description:
        "High-quality onion variety with excellent storage life and disease resistance. Produces uniform, medium to large bulbs.",
      longDescription:
        "Our premium Onion Seeds produce plants that develop uniform, medium to large bulbs with excellent flavor and storage qualities. This variety has been selected for its disease resistance and adaptability to various growing conditions. The onions have a balanced flavor profile with the perfect combination of sweetness and pungency. Their exceptional storage life makes them ideal for long-term use.",
      price: 10.99,
      unit: "per 25g",
      minOrder: "25g",
      availability: "In Stock",
      image: "/placeholder.svg?height=600&width=600&text=Onion+Seeds",
      features: [
        "Long storage life",
        "Disease resistant",
        "Uniform bulb size",
        "Excellent flavor",
        "High yielding",
        "Adaptable to various climates",
      ],
      specifications: {
        seedingRate: "4-5 kg/hectare",
        germinationRate: "85-90%",
        daysToGermination: "7-10 days",
        harvestTime: "100-120 days after transplanting",
        bulbSize: "7-9 cm diameter",
      },
      growingConditions: {
        soilType: "Well-drained, fertile soil",
        soilPH: "6.0-7.0",
        climate: "Cool to moderate",
        waterRequirements: "Medium",
        sunlight: "Full sun",
        growingSeason: "Fall to spring in warm climates",
      },
      badge: "Long Storage",
      badgeColor: "purple",
      rating: 4.7,
      reviews: 92,
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
      {/* <Breadcrumb /> */}





      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 md:py-24 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Vegetable+Garden"
            alt="Vegetable garden"
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-700/50 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sprout className="h-4 w-4 mr-2" />
              <span>Vegetable Seeds</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-emerald-300"
            >
              Premium Vegetable Seeds for Your Garden
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-10">
              High-quality seeds for growing delicious, nutritious vegetables. Our vegetable seeds are carefully
              selected for optimal flavor, yield, and disease resistance.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: <Check className="h-5 w-5 text-emerald-400" />, text: "Non-GMO Seeds" },
                { icon: <Check className="h-5 w-5 text-emerald-400" />, text: "High Germination Rate" },
                { icon: <Check className="h-5 w-5 text-emerald-400" />, text: "Disease Resistant" },
                { icon: <Check className="h-5 w-5 text-emerald-400" />, text: "Growing Support" },
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
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-0 rounded-full px-8 py-6 text-lg shadow-lg shadow-emerald-900/50 group"
                onClick={() => productsRef.current.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Explore Products</span>
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-emerald-700 text-emerald-400 hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg"
              >
                <span>Download Catalog</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} id="products" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-gray-900/5 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Our <span className="text-emerald-400">Vegetable Seeds</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover our premium selection of vegetable seeds, perfect for home gardeners and commercial growers
              looking for exceptional flavor and yield.
            </motion.p>
          </motion.div>

          <div className="space-y-24">
            {vegetableSeedsProducts.map((product, index) => (
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
                      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-8 border-gray-800 group-hover:border-emerald-900 transition-all duration-300">
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
                    <p className="text-emerald-400 italic mb-4">{product.scientificName}</p>
                    <p className="text-gray-300 mb-6">{product.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specifications Preview */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800/50 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-emerald-400 mb-2">Germination Rate</h4>
                        <p className="text-white">{product.specifications.germinationRate}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-xl p-4">
                        <h4 className="text-sm font-medium text-emerald-400 mb-2">Harvest Time</h4>
                        <p className="text-white">{product.specifications.harvestTime}</p>
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
                          className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2"
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
                        className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/20 p-0 flex items-center"
                        onClick={() => openProductModal(product)}
                      >
                        <span>View Full Details</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Vegetable Growing Section */}
      <section ref={sustainabilityRef} className="py-16 md:py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-gray-900/5 to-gray-900 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Sustainable <span className="text-emerald-400">Vegetable Growing</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our commitment to sustainable agriculture extends to our vegetable seed production, ensuring environmental
              stewardship and food security.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-10 w-10 text-emerald-400" />,
                title: "Organic Cultivation",
                description:
                  "Our vegetable seeds are grown using organic farming methods, free from synthetic pesticides and fertilizers, promoting soil health and biodiversity.",
              },
              {
                icon: <Shield className="h-10 w-10 text-emerald-400" />,
                title: "Non-GMO Promise",
                description:
                  "We are committed to providing non-genetically modified seeds, preserving natural genetic diversity and traditional vegetable varieties.",
              },
              {
                icon: <Seedling className="h-10 w-10 text-emerald-400" />,
                title: "Heirloom Preservation",
                description:
                  "We actively work to preserve heirloom vegetable varieties, maintaining cultural heritage and genetic diversity for future generations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-emerald-700 transition-all duration-300"
              >
                <div className="bg-emerald-900/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-gray-800/30 rounded-3xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Sustainable Practices</h3>
                <p className="text-gray-300 mb-6">
                  At Affan Agro Seeds, we believe that sustainable vegetable seed production is essential for the future
                  of agriculture. Our practices focus on environmental stewardship, biodiversity conservation, and
                  supporting local farming communities.
                </p>
                <div className="space-y-3">
                  {[
                    "Water conservation through efficient irrigation systems",
                    "Renewable energy use in our seed processing facilities",
                    "Biodiversity promotion through habitat preservation",
                    "Support for small-scale seed growers and family farms",
                    "Reduced carbon footprint through local production",
                  ].map((practice, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Sustainable+Farming"
                  alt="Sustainable farming practices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growing Guide Section */}
      <section ref={growingGuideRef} className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-gray-900/5 to-gray-950 opacity-50"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 inline-block">
              Vegetable Growing <span className="text-emerald-400">Guide</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-24 h-1 bg-emerald-500 mx-auto mb-6 rounded-full" />
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Expert tips and advice to help you grow healthy, productive vegetables from our premium seeds.
            </motion.p>
          </motion.div>

          <div className="bg-gray-800/30 rounded-3xl p-8 border border-gray-700">
            <Tabs defaultValue="planting" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger
                  value="planting"
                  className="data-[state=active]:bg-emerald-900/50 data-[state=active]:text-emerald-100"
                >
                  <Plant className="h-5 w-5 mr-2" />
                  Planting
                </TabsTrigger>
                <TabsTrigger
                  value="care"
                  className="data-[state=active]:bg-emerald-900/50 data-[state=active]:text-emerald-100"
                >
                  <Droplets className="h-5 w-5 mr-2" />
                  Care
                </TabsTrigger>
                <TabsTrigger
                  value="harvesting"
                  className="data-[state=active]:bg-emerald-900/50 data-[state=active]:text-emerald-100"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Harvesting
                </TabsTrigger>
              </TabsList>

              <TabsContent value="planting" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Planting Your Vegetable Seeds</h3>
                    <p className="text-gray-300 mb-6">
                      Proper planting techniques are essential for successful vegetable gardening. Follow these
                      guidelines to give your seeds the best start.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="soil-preparation">
                        <AccordionTrigger className="text-white hover:text-emerald-300">
                          Soil Preparation
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            Prepare your soil by removing weeds and rocks, then add compost or well-rotted manure to
                            improve fertility. Most vegetables prefer a soil pH between 6.0 and 7.0. Test your soil and
                            amend as needed with lime to raise pH or sulfur to lower it.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="planting-depth">
                        <AccordionTrigger className="text-white hover:text-emerald-300">
                          Planting Depth and Spacing
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            As a general rule, plant seeds at a depth of 2-3 times their diameter. Follow the specific
                            spacing recommendations for each vegetable type on the seed packet. Proper spacing ensures
                            adequate airflow and reduces competition for nutrients.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="watering">
                        <AccordionTrigger className="text-white hover:text-emerald-300">
                          Initial Watering
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            Water thoroughly after planting, keeping the soil consistently moist but not waterlogged
                            during the germination period. Use a fine spray or mist to avoid washing away seeds.
                            Consider using a row cover to maintain moisture and protect from pests.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Planting+Seeds"
                      alt="Planting vegetable seeds"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="care" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Plant+Care"
                      alt="Vegetable plant care"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Caring for Your Vegetable Plants</h3>
                    <p className="text-gray-300 mb-6">
                      Proper care throughout the growing season ensures healthy plants and abundant harvests. Follow
                      these essential care practices.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="watering-schedule">
                        <AccordionTrigger className="text-white hover:text-emerald-300">
                          Watering Schedule
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            Most vegetables need 1-1.5 inches of water per week. Water deeply and less frequently to
                            encourage deep root growth. Water early in the morning to reduce evaporation and fungal
                            disease risk. Consider drip irrigation for efficient water use.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="fertilizing">
                        <AccordionTrigger className="text-white hover:text-emerald-300">Fertilizing</AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            Apply balanced organic fertilizer according to package directions. Heavy feeders like
                            tomatoes and peppers benefit from additional feeding when flowering begins. Avoid
                            over-fertilizing, which can lead to lush foliage but poor fruit production.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="pest-management">
                        <AccordionTrigger className="text-white hover:text-emerald-300">
                          Pest Management
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            Inspect plants regularly for signs of pests or disease. Encourage beneficial insects by
                            planting flowers nearby. Use organic pest control methods like neem oil or insecticidal soap
                            when necessary. Practice crop rotation to reduce pest and disease buildup in the soil.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="harvesting" className="mt-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Harvesting Your Vegetables</h3>
                    <p className="text-gray-300 mb-6">
                      Proper harvesting techniques maximize yield and flavor while encouraging continued production in
                      many vegetables.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="timing">
                        <AccordionTrigger className="text-white hover:text-emerald-300">
                          Timing Your Harvest
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            Harvest most vegetables when they reach their peak size but are still tender. Morning
                            harvesting is ideal when plants are hydrated and temperatures are cool. Regular harvesting
                            of crops like beans, cucumbers, and okra encourages continued production.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="techniques">
                        <AccordionTrigger className="text-white hover:text-emerald-300">
                          Harvesting Techniques
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            Use sharp, clean tools to avoid damaging plants. For leafy greens, harvest outer leaves
                            first to allow continued growth. For fruiting vegetables, cut rather than pull to minimize
                            plant damage. Handle produce gently to prevent bruising and spoilage.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="storage">
                        <AccordionTrigger className="text-white hover:text-emerald-300">
                          Post-Harvest Storage
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>
                            Cool vegetables quickly after harvest to maintain freshness. Different vegetables have
                            different optimal storage conditions - some prefer refrigeration while others store better
                            at room temperature. Remove soil gently without washing until ready to use for many root
                            vegetables.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Harvesting+Vegetables"
                      alt="Harvesting vegetables"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 py-6 text-lg">
              <span>Download Complete Growing Guide</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* Product Modal */}
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 z-10"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      src={selectedProduct.image || "/placeholder.svg"}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {selectedProduct.badge && (
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(selectedProduct.badgeColor)}`}
                    >
                      {selectedProduct.badge}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProduct.name}</h3>
                  <p className="text-emerald-400 italic mb-4">{selectedProduct.scientificName}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? "text-amber-400 fill-amber-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">({selectedProduct.reviews} reviews)</span>
                  </div>

                  <p className="text-gray-300 mb-6">{selectedProduct.longDescription}</p>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-white">${selectedProduct.price.toFixed(2)}</span>
                      <span className="text-gray-400">{selectedProduct.unit}</span>
                    </div>
                    <p className="text-sm text-gray-500">Min. Order: {selectedProduct.minOrder}</p>
                    <p className="text-sm text-emerald-500 font-medium mt-1">{selectedProduct.availability}</p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600"
                      onClick={(e) => addToWishlist(e, selectedProduct.id)}
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button
                      className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-2 flex-1"
                      onClick={(e) => addToCart(e, selectedProduct.id)}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      <span>Add to Cart</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Tabs defaultValue="specifications" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6">
                    <TabsTrigger
                      value="specifications"
                      className="data-[state=active]:bg-emerald-900/50 data-[state=active]:text-emerald-100"
                    >
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger
                      value="growing"
                      className="data-[state=active]:bg-emerald-900/50 data-[state=active]:text-emerald-100"
                    >
                      Growing Conditions
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-emerald-900/50 data-[state=active]:text-emerald-100"
                    >
                      Features
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="specifications" className="mt-0">
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                      <h4 className="text-lg font-medium text-white mb-4">Technical Specifications</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                            <span className="text-white font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="growing" className="mt-0">
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                      <h4 className="text-lg font-medium text-white mb-4">Optimal Growing Conditions</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(selectedProduct.growingConditions).map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                            <span className="text-white font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="mt-0">
                    <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                      <h4 className="text-lg font-medium text-white mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProduct.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-emerald-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
