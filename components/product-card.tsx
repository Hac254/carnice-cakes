'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
}

export function ProductCard({ product }: { product: Product }) {
  const [showDialog, setShowDialog] = useState(false)

  const openWhatsApp = useCallback(() => {
    const phoneNumber = '+254738824713';
    const message = encodeURIComponent(
      "Hello CarniceCakes! 🎂✨\n\n" +
      `I'm absolutely in love with your ${product.name} and I'd love to order it! ` +
      "Could you please help me with the following details?\n\n" +
      `1. I'm interested in the ${product.name} priced at ${product.price}\n` +
      "2. Is it possible to customize the flavors? My favorites are [list 1-3 flavors]\n" +
      "3. I need this cake for [occasion, e.g., birthday, wedding, anniversary]\n" +
      "4. The cake should serve approximately [number] people\n" +
      "5. I need it ready by [date]\n\n" +
      "I'm excited to work with you to make this cake perfect for my special occasion. " +
      "Thank you for your incredible cake artistry! 🙏🍰"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }, [product.name, product.price]);

  return (
    <>
      <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
        onClick={() => setShowDialog(true)}>
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg text-red-700">{product.name}</h3>
              <Badge variant="secondary" className="bg-red-50 text-red-700">
                {product.price}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
          </DialogHeader>
          <div className="relative h-[400px] w-full">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-red-700">{product.price}</p>
            <Button className="bg-red-600 hover:bg-red-700" onClick={openWhatsApp}>
              Order Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

