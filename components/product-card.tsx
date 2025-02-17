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
      `1. I'm interested in the ${product.name}\n` +
      "2. Is it possible to customize the flavors? My favorites are [list 1-3 flavors]\n" +
      "3. I need this cake for [occasion, e.g., birthday, wedding, anniversary]\n" +
      "4. The cake should serve approximately [number] people\n" +
      "5. I need it ready by [date]\n\n" +
      "I'm excited to work with you to make this cake perfect for my special occasion. " +
      "Thank you for your incredible cake artistry! 🙏🍰"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }, [product.name]);

  return (
    <>
      <Card className="group cursor-pointer" onClick={() => setShowDialog(true)}>
        <CardContent className="p-4">
          <div className="relative w-full aspect-square mb-3">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <Badge variant="secondary">{product.category}</Badge>
            </div>
            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
          </DialogHeader>
          <div className="relative w-full aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex justify-end">
            <Button className="bg-red-600 hover:bg-red-700" onClick={openWhatsApp}>
              Order Now
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

