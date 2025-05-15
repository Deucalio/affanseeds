import Image from "next/image"
import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Breadcrumb from "@/components/breadcrumb"

export default function Products() {
  const categories = [
    {
      id: "forage",
      name: "Forage Field Crop Seeds",
      description: "High-quality seeds for pasture, hay, and silage production",
      color: "earth",
      products: [
        {
          id: 1,
          name: "Premium Alfalfa Seeds",
          description: "High-yield, drought-resistant alfalfa variety",
          price: "$24.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          name: "Hybrid Corn Seeds",
          description: "Fast-growing corn variety for silage",
          price: "$19.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          name: "Perennial Ryegrass",
          description: "Durable, high-quality pasture grass",
          price: "$14.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "oil",
      name: "Oil Seeds",
      description: "Premium quality seeds for oil production",
      color: "sunset",
      products: [
        {
          id: 4,
          name: "Sunflower Seeds",
          description: "High oil content sunflower variety",
          price: "$16.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 5,
          name: "Canola Seeds",
          description: "Disease-resistant canola variety",
          price: "$18.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 6,
          name: "Soybean Seeds",
          description: "High-yield, early maturing soybean variety",
          price: "$21.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      id: "vegetables",
      name: "Vegetable Seeds",
      description: "Fresh, high-yield vegetable seeds for commercial and home growers",
      color: "sky",
      products: [
        {
          id: 7,
          name: "Tomato Seed Collection",
          description: "Assorted tomato varieties for different uses",
          price: "$12.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 8,
          name: "Sweet Corn Seeds",
          description: "Extra sweet, tender corn variety",
          price: "$9.99",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 9,
          name: "Leafy Greens Mix",
          description: "Assorted lettuce and greens varieties",
          price: "$8.99",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "earth":
        return {
          bg: "bg-earth-700",
          hover: "hover:bg-earth-800",
          text: "text-earth-700",
          light: "bg-earth-50",
          border: "border-earth-200",
        }
      case "sunset":
        return {
          bg: "bg-sunset-500",
          hover: "hover:bg-sunset-600",
          text: "text-sunset-700",
          light: "bg-sunset-50",
          border: "border-sunset-200",
        }
      case "sky":
        return {
          bg: "bg-sky-600",
          hover: "hover:bg-sky-700",
          text: "text-sky-700",
          light: "bg-sky-50",
          border: "border-sky-200",
        }
      default:
        return {
          bg: "bg-green-700",
          hover: "hover:bg-green-800",
          text: "text-green-700",
          light: "bg-green-50",
          border: "border-green-200",
        }
    }
  }

  return (
    <main className="pt-16">
      {/* Breadcrumb */}
      <Breadcrumb />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-earth-100 text-earth-800 text-sm font-medium mb-3">
            Catalog
          </span>
          <h1 className="mb-4 text-4xl font-bold text-green-800">Our Products</h1>
          <div className="h-1 w-20 bg-earth-400 mx-auto mb-4 rounded-full"></div>
          <p className="mx-auto max-w-2xl text-gray-700">
            Explore our wide range of high-quality agricultural seeds, carefully selected for Pakistani farmers.
          </p>
        </div>

        <div className="mb-12 space-y-16">
          {categories.map((category) => {
            const colors = getColorClasses(category.color)

            return (
              <section key={category.id} id={category.id} className="scroll-mt-20">
                <div className="mb-8">
                  <h2 className={`text-3xl font-bold ${colors.text}`}>{category.name}</h2>
                  <div className={`h-1 w-16 ${colors.bg} mt-2 mb-4 rounded-full`}></div>
                  <p className="mt-2 text-gray-600">{category.description}</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.products.map((product) => (
                    <Card
                      key={product.id}
                      className={`overflow-hidden transition-all hover:shadow-lg border ${colors.border}`}
                    >
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader className={`${colors.light}`}>
                        <CardTitle>{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex items-center justify-between">
                        <span className="text-lg font-bold">{product.price}</span>
                        <Link
                          href="#"
                          className={`rounded-md ${colors.bg} px-4 py-2 text-sm font-medium text-white transition-colors ${colors.hover}`}
                        >
                          View Details
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </main>
  )
}
