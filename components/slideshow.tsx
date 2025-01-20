"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  image: string
}

export function Slideshow({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [products.length, autoplay])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    setAutoplay(false)
  }

  return (
    <div className="relative w-full h-[400px] md:h-[600px]">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
            quality={100}
            priority={index === currentIndex}
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => {
              setCurrentIndex(index)
              setAutoplay(false)
            }}
          />
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

