"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, Heart, Search, User, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const pathname = usePathname()
  const dropdownRef = useRef(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Navigation items
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    {
      name: "Categories",
      href: "#",
      dropdown: true,
      items: [
        {
          name: "Forage",
          href: "/categories/forage",
          description: "High-quality seeds for pasture, hay, and silage production",
          image: "/placeholder.svg?height=100&width=100&text=Forage",
        },
        {
          name: "Oil Seeds",
          href: "/categories/oil-seeds",
          description: "Premium quality seeds for oil production",
          image: "/placeholder.svg?height=100&width=100&text=Oil+Seeds",
        },
        {
          name: "Vegetable Seeds",
          href: "/categories/vegetable-seeds",
          description: "Fresh, high-yield vegetable seeds for commercial and home growers",
          image: "/placeholder.svg?height=100&width=100&text=Vegetable+Seeds",
        },
      ],
    },
    { name: "Growing Guides", href: "/guides" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-gray-900/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-10">
          <div className="relative h-10 w-40">
            <Image
              src="/placeholder.svg?height=40&width=160&text=SeedVault"
              alt="SeedVault Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative" ref={item.dropdown ? dropdownRef : null}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-emerald-400",
                      activeDropdown === item.name ? "text-emerald-400" : "text-gray-300",
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeDropdown === item.name ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-xl bg-gray-800 border border-gray-700 shadow-lg overflow-hidden transition-all duration-200 z-50",
                      activeDropdown === item.name
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none",
                    )}
                  >
                    <div className="p-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors group relative"
                          onClick={() => setActiveDropdown(null)}
                          onMouseEnter={(e) => {
                            const tooltip = document.createElement("div")
                            tooltip.className =
                              "absolute -right-64 top-0 w-60 p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50"
                            tooltip.innerHTML = `
                              <h4 class="font-medium text-emerald-400 mb-2">${subItem.name}</h4>
                              <p class="text-sm text-gray-300">${subItem.description}</p>
                            `
                            tooltip.id = `tooltip-${subItem.name.toLowerCase().replace(/\s+/g, "-")}`
                            e.currentTarget.appendChild(tooltip)
                          }}
                          onMouseLeave={(e) => {
                            const tooltip = document.getElementById(
                              `tooltip-${subItem.name.toLowerCase().replace(/\s+/g, "-")}`,
                            )
                            if (tooltip) tooltip.remove()
                          }}
                        >
                          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-600">
                            <Image
                              src={subItem.image || "/placeholder.svg"}
                              alt={subItem.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                              {subItem.name}
                            </div>
                            <p className="text-xs text-gray-400 line-clamp-1">{subItem.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-emerald-400",
                    pathname === item.href ? "text-emerald-400" : "text-gray-300",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/wishlist"
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-colors relative"
          >
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-colors relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link href="/account">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600"
            >
              <User className="h-4 w-4 mr-2" />
              <span>Account</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link
            href="/cart"
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-colors relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <div
        className={cn(
          "absolute inset-x-0 top-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 overflow-hidden",
          searchOpen ? "h-20 border-b border-gray-800" : "h-0",
        )}
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="relative w-full max-w-2xl mx-auto">
            <Input
              type="search"
              placeholder="Search for seeds, plants, or categories..."
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 pr-10"
              autoFocus={searchOpen}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 bg-gray-900/95 backdrop-blur-md transition-all duration-500 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="container mx-auto px-4 py-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="relative h-10 w-40">
                <Image
                  src="/placeholder.svg?height=40&width=160&text=SeedVault"
                  alt="SeedVault Logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </Link>

            <button
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative mb-8">
            <Input
              type="search"
              placeholder="Search for seeds, plants, or categories..."
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <nav className="flex flex-col space-y-6 mb-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-xl font-medium transition-colors hover:text-emerald-400 text-gray-300"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          activeDropdown === item.name ? "rotate-180" : "",
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "pl-4 space-y-3 overflow-hidden transition-all duration-300",
                        activeDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                            <Image
                              src={subItem.image || "/placeholder.svg"}
                              alt={subItem.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-xl font-medium transition-colors hover:text-emerald-400",
                      pathname === item.href ? "text-emerald-400" : "text-gray-300",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex flex-col space-y-4 pt-8 border-t border-gray-800">
            <Link
              href="/wishlist"
              className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Heart className="h-5 w-5 mr-3" />
              <span>Wishlist</span>
              {wishlistCount > 0 && (
                <span className="ml-auto bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/account"
              className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="h-5 w-5 mr-3" />
              <span>Account</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
