"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Award, Users, Leaf, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Breadcrumb from "@/components/breadcrumb"

export default function AboutPage() {
  // Scroll animation observer
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
    elements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  // Core values
  const coreValues = [
    {
      icon: <Leaf className="h-6 w-6 text-green-400" />,
      title: "Sustainability",
      description: "We're committed to sustainable farming practices that protect our environment.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-green-400" />,
      title: "Quality",
      description: "We never compromise on the quality of our seeds and agricultural products.",
    },
    {
      icon: <Users className="h-6 w-6 text-green-400" />,
      title: "Community",
      description: "Supporting local farmers and agricultural communities is at the heart of what we do.",
    },
    {
      icon: <Globe className="h-6 w-6 text-green-400" />,
      title: "Innovation",
      description: "We continuously research and develop better agricultural solutions.",
    },
  ]

  return (
    <main className="pt-16 bg-gray-950 text-gray-200">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative bg-green-900 py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 opacity-0 reveal">About Us</h1>
            <div className="w-16 h-1 bg-green-400 mx-auto mb-8 opacity-0 reveal rounded-full"></div>
            <p className="text-lg md:text-xl text-green-100 mb-8 opacity-0 reveal">
              Dedicated to providing high-quality agricultural seeds and solutions to farmers across Pakistan.
            </p>
          </div>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-gray-950">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-white mb-6 opacity-0 reveal">Our Story</h2>
                <div className="w-16 h-1 bg-green-500 mb-8 opacity-0 reveal rounded-full"></div>
                <div className="prose prose-lg text-gray-300">
                  <p className="opacity-0 reveal" style={{ animationDelay: "100ms" }}>
                    Founded in 2005, Affan Agro Seeds began with a simple mission: to provide Pakistani farmers with the
                    highest quality seeds for better yields and sustainable farming.
                  </p>
                  <p className="opacity-0 reveal" style={{ animationDelay: "200ms" }}>
                    What started as a small family business has grown into a trusted name in agricultural solutions,
                    serving thousands of farmers across the country. Our commitment to quality and innovation has never
                    wavered.
                  </p>
                  <p className="opacity-0 reveal" style={{ animationDelay: "300ms" }}>
                    Today, we continue to research, develop, and distribute premium seeds that are adapted to local
                    growing conditions and resistant to common diseases and pests.
                  </p>
                </div>
              </div>
              <div className="relative opacity-0 reveal" style={{ animationDelay: "200ms" }}>
                <div className="absolute -inset-4 rounded-2xl bg-green-500/10 opacity-20 blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Our+Story"
                    alt="Our Story"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-white mb-6 opacity-0 reveal">Our Core Values</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto mb-8 opacity-0 reveal rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto opacity-0 reveal">
                These principles guide everything we do, from seed development to customer service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:border-green-500 transition-colors duration-300 opacity-0 reveal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-gray-700 rounded-full mr-4">{value.icon}</div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-white mb-6 opacity-0 reveal">Our Certifications</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto mb-8 opacity-0 reveal rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto opacity-0 reveal">
                We maintain the highest standards in the industry, backed by internationally recognized certifications.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3].map((cert, index) => (
                <div key={cert} className="text-center opacity-0 reveal" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="p-4 bg-gray-800 rounded-full shadow-md mb-4 mx-auto w-20 h-20 flex items-center justify-center animate-float">
                    <Award className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">Certification {cert}</h3>
                  <p className="text-sm text-gray-400">Quality Assured</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 reveal">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-green-100 mb-8 opacity-0 reveal">
              Explore our range of premium agricultural seeds or contact us to learn more about our products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 reveal">
              <Link href="/products">
                <Button className="bg-white hover:bg-gray-100 text-green-800 rounded-full px-8 py-6 text-lg shadow-lg shadow-green-900/30 border-0">
                  Browse Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg backdrop-blur-sm"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
