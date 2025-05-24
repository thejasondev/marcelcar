"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 dark:bg-marcelcar-dark/95 shadow-md py-2 lg:py-3" : "bg-transparent py-3 lg:py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl lg:text-2xl font-bold text-marcelcar-highlight">
            Marcel<span className="text-marcelcar-accent">Car</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link href="/" className="text-foreground hover:text-marcelcar-highlight transition-colors font-medium">
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className="text-foreground hover:text-marcelcar-highlight transition-colors font-medium"
          >
            Nosotros
          </Link>
          <Link
            href="/servicios"
            className="text-foreground hover:text-marcelcar-highlight transition-colors font-medium"
          >
            Servicios
          </Link>
          <Link
            href="/galeria"
            className="text-foreground hover:text-marcelcar-highlight transition-colors font-medium"
          >
            Galería
          </Link>
          <Link
            href="/contacto"
            className="text-foreground hover:text-marcelcar-highlight transition-colors font-medium"
          >
            Contacto
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white px-4 xl:px-6">
            <Phone className="mr-2 h-4 w-4" /> Sacar Cita
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-foreground hover:text-marcelcar-highlight transition-colors py-3 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="block text-foreground hover:text-marcelcar-highlight transition-colors py-3 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/servicios"
              className="block text-foreground hover:text-marcelcar-highlight transition-colors py-3 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/galeria"
              className="block text-foreground hover:text-marcelcar-highlight transition-colors py-3 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Galería
            </Link>
            <Link
              href="/contacto"
              className="block text-foreground hover:text-marcelcar-highlight transition-colors py-3 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <div className="pt-3 border-t border-border">
              <Button
                className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white w-full mb-3"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" /> Sacar Cita
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
