"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

interface Product {
  id: string
  name: string
  description: string
  price?: string
  image: string
  category: string
}

interface ProductsSectionProps {
  products: Product[]
}

export function ProductsSection({ products }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", ...new Set(products.map((product) => product.category))]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <section id="menu" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-serif font-bold text-center text-primary mb-8">Our Signature Creations</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`mb-2 ${
              selectedCategory === category
                ? ""
                : "border-primary/20 text-primary hover:bg-primary/10"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

