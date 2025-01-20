'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

interface MobileMenuProps {
  onNavigate: (section: string) => void
}

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden text-white hover:text-red-200">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-br from-red-600 via-red-500 to-orange-400 text-white border-red-700 p-4">
        <nav className="flex flex-col gap-4 mt-8">
          {['Home', 'About', 'Menu', 'Contact', 'Gallery'].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-white hover:text-red-200 hover:bg-white/10 justify-start text-base font-medium"
              onClick={() => onNavigate(item.toLowerCase())}
            >
              {item}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

