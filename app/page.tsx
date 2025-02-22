"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronRight, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { ProductsSection } from "@/components/products-section"
import { Slideshow } from "@/components/slideshow"
import { ContactForm } from "@/components/contact-form"
import { ImageModal } from "@/components/image-modal"
import { NewsletterForm } from "@/components/newsletter-form"
import { CookpadIcon } from "@/components/cookpad-icon"

const products = [
  {
    id: "1",
    name: "Paw Patrol Birthday Cake",
    description: "Two-tier celebration cake featuring Paw Patrol characters, perfect for children's birthdays.",
    price: "KSH 3,000",
    image: "https://i.ibb.co/pPLq9G6/Whats-App-Image-2025-01-19-at-3-06-34-PM-1.jpg",
    category: "Character Cakes",
  },
  {
    id: "2",
    name: "Frozen Theme Cake",
    description: "Beautiful Frozen-themed cake with Elsa, Anna, and Olaf decorations. Perfect for winter celebrations.",
    price: "KSH 8,500",
    image: "https://i.ibb.co/xDvmg1W/Whats-App-Image-2025-01-20-at-12-11-10-PM-2.jpg",
    category: "Character Cakes",
  },
  {
    id: "3",
    name: "Ballerina Birthday Cake",
    description: "Elegant ballet-themed cake with pink drip and ballerina decorations.",
    price: "KSH 6,500",
    image: "https://i.ibb.co/1vJ8KHG/Whats-App-Image-2025-01-20-at-12-11-10-PM-3.jpg",
    category: "Theme Cakes",
  },
  {
    id: "4",
    name: "Simple Cream Cake",
    description: "Exquisite three-tier Cream cake adorned with delicate sugar flowers.",
    price: "KSH 10,000",
    image: "https://i.ibb.co/k9CV0gw/Whats-App-Image-2025-01-19-at-3-06-32-PM.jpg",
    category: "Wedding Cakes",
  },
  {
    id: "5",
    name: "Baby shark themed cake",
    description: "Baby shark themed cake for kids, perfect for colorful celebrations.",
    price: "KSH 2,500 per dozen",
    image: "https://i.ibb.co/KxvGgrC7/Whats-App-Image-2025-02-16-at-11-54-22-PM-1.jpg",
    category: "Cupcakes",
  },
  {
    id: "6",
    name: "Dozen Cupcakes",
    description: "Dozen Fluffy Cupcakes topped with delicious buttercream icing.",
    price: "KSH 3,500",
    image: "https://i.ibb.co/pPxD3n4/Whats-App-Image-2025-01-19-at-3-11-15-PM.jpg",
    category: "Pastries",
  },
  {
    id: "7",
    name: "Chocolate Drip Cake",
    description: "Decadent chocolate cake with a stunning chocolate drip and assorted toppings.",
    price: "KSH 5,500",
    image: "https://i.ibb.co/GQJ2vjd/Whats-App-Image-2025-01-19-at-3-06-39-PM.jpg",
    category: "Celebration Cakes",
  },
  {
    id: "8",
    name: "Sofia the Tirst Themed Cake",
    description: "Sofia the Tirst Themed Cake for kids, perfect for colorful celebrations.",
    price: "KSH 3,000",
    image: "https://i.ibb.co/YQs6PvV/Whats-App-Image-2025-01-19-at-3-06-35-PM-1.jpg",
    category: "Celebration Cakes",
  },
  {
    id: "9",
    name: "Traditional Wedding Cake",
    description: "Traditional wedding cake with intricate piping and sugar flowers.",
    price: "KSH 10,300",
    image: "https://i.ibb.co/cg37B5R/Whats-App-Image-2025-01-19-at-3-06-31-PM-2.jpg",
    category: "Theme Cakes",
  },
  {
    id: "10",
    name: "Simple Wedding Cake",
    description: "Simple Elegant Wedding cake with fresh flowers and gold accents.",
    price: "KSH 36,000",
    image: "https://i.ibb.co/TLkMpvB/Whats-App-Image-2025-01-19-at-3-06-33-PM-2.jpg",
    category: "Wedding Cakes",
  },
  {
    id: "11",
    name: "Themed Graduation Cake",
    description: "Themed graduation cake with edible toppers , great for special events like graduations.",
    price: "KSH 15,000",
    image: "https://i.ibb.co/WkpD4XK/Whats-App-Image-2025-01-19-at-3-06-32-PM-1.jpg",
    category: "Theme Cakes",
  },
  {
    id: "12",
    name: "Butterfly Themed cake",
    description: "Beautiful butterfly-themed cake, perfect for welcoming new arrivals.",
    price: "KSH 4,000",
    image: "https://i.ibb.co/SJBpx20/image.png",
    category: "Celebration Cakes",
  },
  {
    id: "13",
    name: "Graduation Cake",
    description: "Celebratory graduation-themed cake with cap and diploma decorations.",
    price: "KSH 6,500",
    image: "https://i.ibb.co/NrFCN9y/image.png",
    category: "Celebration Cakes",
  },
  {
    id: "14",
    name: "Half Dozen Cupcakes",
    description: "Beautiful cupcakes decorated with buttercream .",
    price: "KSH 700 ",
    image: "https://i.ibb.co/f1kJKfD/Whats-App-Image-2025-01-19-at-3-11-15-PM-1.jpg",
    category: "Cupcakes",
  },
  {
    id: "15",
    name: "Chocolate Strawberry Cake",
    description: "Rich chocolate cake topped with fresh strawberries and chocolate-covered strawberries.",
    price: "KSH 5,000",
    image: "https://i.ibb.co/HgKrwKR/Whats-App-Image-2025-01-19-at-3-06-31-PM-1.jpg",
    category: "Celebration Cakes",
  },
  {
    id: "16",
    name: "Simple CupCakes",
    description: "Simple cupcakes ",
    price: "KSH 6,500",
    image: "https://i.ibb.co/WcFhc7w/Whats-App-Image-2025-01-19-at-3-11-15-PM-2.jpg",
    category: "Character Cakes",
  },
  {
    id: "17",
    name: "Elegant White Wedding Cake",
    description: "Classic white wedding cake with intricate piping and sugar flowers.",
    price: "KSH 18,000",
    image: "https://i.ibb.co/LRHRDJ7/Whats-App-Image-2025-01-19-at-3-06-33-PM.jpg",
    category: "Wedding Cakes",
  },
  {
    id: "18",
    name: "Kids themed Cake",
    description: "Fun-Packed Kids-themed cake for the little heroes.",
    price: "KSH 7,000",
    image: "https://i.ibb.co/SRpdYGx/Whats-App-Image-2025-01-20-at-12-11-10-PM-1.jpg",
    category: "Character Cakes",
  },
  {
    id: "19",
    name: "Rosette Cake",
    description: "Elegant cake covered in beautiful buttercream rosettes.",
    price: "KSH 5,500",
    image: "https://i.ibb.co/1vJ8KHG/Whats-App-Image-2025-01-20-at-12-11-10-PM-3.jpg",
    category: "Celebration Cakes",
  },
  {
    id: "20",
    name: "Gilbeys Themed Cake",
    description: "Gilbeys Themed Cake for adults, perfect for colorful celebrations.",
    price: "KSH 3,300",
    image: "https://i.ibb.co/54pwTf5/Whats-App-Image-2025-01-19-at-3-06-38-PM.jpg",
    category: "Theme Cakes",
  },
  {
    id: "21",
    name: " Gentleman Themed Cake",
    description: "Stylish gentleman drip cake with stylish accents.",
    price: "KSH 8,000",
    image: "https://i.ibb.co/T1w204g/Whats-App-Image-2025-01-19-at-3-06-36-PM-1.jpg",
    category: "Celebration Cakes",
  },
  {
    id: "22",
    name: "Masha themed cake",
    description: "Masha themed cake for kids, perfect for colorful celebrations.",
    price: "KSH 41,000",
    image: "https://i.ibb.co/39Sww0tP/Whats-App-Image-2025-02-16-at-11-54-21-PM.jpg",
    category: "Wedding Cakes",
  },
  {
    id: "23",
    name: "Elegant Wedding Cake",
    description: "Luxurious multi-tier wedding cake with intricate details.",
    price: "KSH 20,000",
    image: "https://i.ibb.co/Db0gL4b/Whats-App-Image-2025-01-19-at-3-06-32-PM-2.jpg",
    category: "Wedding Cakes",
  },
  {
    id: "24",
    name: "Medic's Themed Cake",
    description: "Medic's Themed Cake for adults, perfect for colorful celebrations.",
    price: "KSH 50,000",
    image: "https://i.ibb.co/TRQ6Js1/Whats-App-Image-2025-01-19-at-3-06-37-PM.jpg",
    category: "Wedding Cakes",
  },
  {
    id: "25",
    name: "Simple Birthday Cake",
    description: "Simple birthday cake with elegant decorations.",
    price: "KSH 5,000",
    image: "https://i.ibb.co/ykxXqSv/Whats-App-Image-2025-01-19-at-3-06-31-PM.jpg",
    category: "Celebration Cakes",
  },
  {
    id: "26",
    name: "Custom Design Cake",
    description: "Beautifully crafted custom design cake.",
    price: "KSH 8,500",
    image: "https://i.ibb.co/HgKrwKR/Whats-App-Image-2025-01-19-at-3-06-31-PM-1.jpg",
    category: "Custom Cakes",
  },
  {
    id: "27",
    name: "Orange coconut cake",
    description: "Orange coconut cake with coconut cream cheese frosting and toasted coconut flakes.",
    price: "KSH 4,500",
    image: "https://i.ibb.co/7r0Tw8s/Whats-App-Image-2025-01-19-at-3-06-38-PM-1.jpg",
    category: "Custom Cakes",
  },
  {
    id: "28",
    name: "Sonic themed cake",
    description: "Sonic themed cake for kids, perfect for colorful celebrations.",
    price: "KSH 4,500",
    image: "https://i.ibb.co/D36HV7q/Whats-App-Image-2025-02-16-at-11-54-22-PM.jpg",
    category: "Custom Cakes",
  },
  {
    id: "g1",
    name: "Classic Money Bouquet",
    description: "Elegant money bouquet arrangement perfect for special occasions and celebrations.",
    image: "https://i.ibb.co/8LGP30sh/Whats-App-Image-2025-02-16-at-8-35-28-PM.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g2",
    name: "Premium Money Arrangement",
    description: "Luxurious money bouquet with artistic presentation and elegant design.",
    image: "https://i.ibb.co/YB1K0BPG/Whats-App-Image-2025-02-16-at-8-35-27-PM-1.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g3",
    name: "Deluxe Money Bouquet",
    description: "Sophisticated money bouquet arrangement with premium presentation.",
    image: "https://i.ibb.co/qYw7vPH1/Whats-App-Image-2025-02-16-at-8-35-27-PM.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g4",
    name: "Royal Special Ocassion Gift",
    description: "Exquisite money arrangement perfect for special celebrations.",
    image: "https://i.ibb.co/Rk0YrCfy/Whats-App-Image-2025-02-16-at-8-35-26-PM-1.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g5",
    name: "Luxury Gift Arrangement",
    description: "Beautiful money arrangement with artistic presentation.",
    image: "https://i.ibb.co/6RjS5F5F/Whats-App-Image-2025-02-16-at-8-35-26-PM.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g6",
    name: "Elegant Money Boquet",
    description: "Premium money bouquet with sophisticated design.",
    image: "https://i.ibb.co/84SJLNQS/Whats-App-Image-2025-02-16-at-8-35-25-PM-2.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g7",
    name: "Special Occasion Money Gift",
    description: "Unique money arrangement for memorable celebrations.",
    image: "https://i.ibb.co/f3S36NB/Whats-App-Image-2025-02-16-at-8-35-25-PM-1.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g8",
    name: "Premium Gift Display",
    description: "Elegant money bouquet with creative presentation.",
    image: "https://i.ibb.co/JWDwX9mx/Whats-App-Image-2025-02-16-at-8-35-25-PM.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g9",
    name: "Celebration Money Gift",
    description: "Beautifully arranged money bouquet for special moments.",
    image: "https://i.ibb.co/FQcSJqp/Whats-App-Image-2025-02-16-at-8-35-24-PM-1.jpg",
    category: "Gifts & Money Bouquets"
  },
  {
    id: "g10",
    name: "Exclusive Money Bouquet",
    description: "Premium money arrangement with luxurious presentation.",
    image: "https://i.ibb.co/v45JrMHp/Whats-App-Image-2025-02-16-at-8-35-24-PM.jpg",
    category: "Gifts & Money Bouquets"
  }
]

const openWhatsApp = () => {
  const phoneNumber = "+254738824713"
  const message = encodeURIComponent(
    "Hello CarniceCakes! 🎂✨\n\n" +
      "I am excited to order a delightful creation from your magical bakery. " +
      "Could you please help me with the following?\n\n" +
      "1. I am looking for a cake for [occasion, e.g., birthday, wedding, anniversary]\n" +
      "2. My preferred flavors are [list 1-3 flavors]\n" +
      "3. I would love a design featuring [theme or colors]\n" +
      "4. The cake should serve approximately [number] people\n" +
      "5. I need it ready by [date]\n\n" +
      "I cannot wait to discuss the sweet details with you and create something truly special! " +
      "Thank you for your artistry and passion in cake-making. 🙏🍰",
  )
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
}

const navItems = ["Home", "About", "Menu", "Contact", "Gallery"]

export default function Home() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    menu: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const scrollToSection = (section: string) => {
    sectionRefs[section as keyof typeof sectionRefs]?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-gradient-to-r from-red-600 to-orange-500 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-white">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-red-200 transition-colors"
              >
                {item}
              </button>
            ))}
            <Button className="bg-white text-red-600 hover:bg-red-100" onClick={openWhatsApp}>
              Order Now
            </Button>
          </div>
          <MobileMenu onNavigate={scrollToSection} />
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={sectionRefs.home}
        className="bg-gradient-to-br from-red-600 via-red-500 to-orange-400 text-white pt-20 md:pt-24 w-full"
      >
        <div className="container mx-auto px-4 py-8 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-full">
              Creating Sweet Moments Of Life
            </h1>
            <p className="mt-6 text-lg text-red-100 max-w-md">
              Specializing in custom celebration cakes that bring your dreams to life. From character cakes to elegant
              wedding designs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-red-100 w-full sm:w-auto"
                onClick={openWhatsApp}
              >
                Order Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 w-full sm:w-auto"
                onClick={() => scrollToSection("gallery")}
              >
                View Gallery
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-red-100 mb-4">Follow us on social media for latest updates and designs!</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/p/Carnice-cakes-pastry-100064069503802/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/carnicedianne/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://cookpad.com/ke/users/13261034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                >
                  <CookpadIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] order-first md:order-last w-full">
            <Image
              src="https://i.ibb.co/WyKGmHd/Whats-App-Image-2025-01-20-at-12-11-10-PM.jpg"
              alt="CarniceCakes signature cakes"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-12 md:py-16 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 mb-8">
            About CarniceCakes
          </h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <div
                className="relative aspect-[3/4] max-w-sm mx-auto cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              >
                <Image
                  src="https://i.ibb.co/t2pCByT/Whats-App-Image-2025-01-22-at-12-01-52-PM.jpg"
                  alt="CarniceCakes Creator"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <ImageModal
                isOpen={isImageModalOpen}
                onClose={() => setIsImageModalOpen(false)}
                src="https://i.ibb.co/t2pCByT/Whats-App-Image-2025-01-22-at-12-01-52-PM.jpg"
                alt="CarniceCakes Creator"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-600 mb-6">
                Welcome to CarniceCakes! I&apos;m Dianne, the passionate baker behind every delicious creation you see here.
                At CarniceCakes, we believe every celebration deserves a perfect centerpiece. Our passion for creating
                beautiful, delicious cakes has made us a trusted name in custom celebration cakes.
              </p>
              <p className="text-gray-600">
                Each cake is handcrafted with attention to detail and made with the finest ingredients. Whether you&apos;re
                celebrating a birthday, wedding, or any special occasion, we&apos;re here to make your sweet dreams come true
                with our creative designs and exceptional taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Menu Section */}
      <ProductsSection products={products} />

      {/* Gallery Section */}
      <section ref={sectionRefs.gallery} className="py-16 bg-gradient-to-br from-red-100 to-orange-100 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-8">Our Gallery</h2>
          <Slideshow products={products} />
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-16 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-gray-900 mb-8">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-red-100 to-orange-100 py-16 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-red-700 mb-4">Subscribe for Sweet Updates</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto px-4 sm:px-0">
            Join our newsletter and get 10% off your first order plus updates about new designs and special offers.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-red-800 to-red-900 text-white py-8 md:py-12 w-full">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <Logo />
            <p className="mt-4 text-sm opacity-80">Creating memorable celebrations since 2020.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Migori Town, Calabash Hotel</li>
              <li>Tel: +254 725 275934</li>
              <li>Email: carnicecakes@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Mon-Fri: 7am - 7pm</li>
              <li>Saturday: 8am - 8pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <p>© {new Date().getFullYear()} CarniceCakes. All rights reserved.</p>
            <a 
              href="https://wafula-josh.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 md:mt-0 hover:text-white transition-colors flex items-center gap-1"
            >
              Designed & Developed by
              <span className="font-semibold text-red-300 hover:text-red-200">Joshua Wafula</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

