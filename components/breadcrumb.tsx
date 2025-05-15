"use client"

import type React from "react"

import { useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbProps {
  className?: string
  homeLabel?: string
  separator?: React.ReactNode
}

export default function Breadcrumb({
  className,
  homeLabel = "Home",
  separator = <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />,
}: BreadcrumbProps) {
  const pathname = usePathname()

  const breadcrumbs = useMemo(() => {
    // Skip if we're on the homepage
    if (pathname === "/") return []

    // Split the pathname into segments and remove empty segments
    const segments = pathname.split("/").filter(Boolean)

    // Create breadcrumb items with paths
    return segments.map((segment, index) => {
      // Build the path for this breadcrumb
      const path = `/${segments.slice(0, index + 1).join("/")}`

      // Format the label (capitalize first letter of each word)
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      return {
        label,
        path,
        isLast: index === segments.length - 1,
      }
    })
  }, [pathname])

  // If no breadcrumbs (homepage), don't render anything
  if (breadcrumbs.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("py-3 px-4 bg-white/80 backdrop-blur-sm border-b border-gray-100", className)}
    >
      <ol className="flex flex-wrap items-center text-sm max-w-5xl mx-auto">
        <li className="flex items-center">
          <Link href="/" className="text-gray-500 hover:text-green-600 flex items-center transition-colors">
            <Home className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">{homeLabel}</span>
          </Link>
          {separator}
        </li>

        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            {breadcrumb.isLast ? (
              <span className="font-medium text-green-700" aria-current="page">
                {breadcrumb.label}
              </span>
            ) : (
              <>
                <Link href={breadcrumb.path} className="text-gray-500 hover:text-green-600 transition-colors">
                  {breadcrumb.label}
                </Link>
                {separator}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
