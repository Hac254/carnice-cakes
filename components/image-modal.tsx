"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <div className="relative w-full aspect-[3/4]">
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" quality={100} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

