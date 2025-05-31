"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/galeria", label: "Galería" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-marcelcar-dark/95 shadow-md py-2 lg:py-3 backdrop-blur-sm"
            : "bg-transparent py-3 lg:py-4"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl lg:text-2xl font-bold text-black">
              Marcel<span className="text-marcelcar-highlight">Car</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-foreground hover:text-marcelcar-highlight transition-colors font-medium relative py-2",
                  isActive(item.href) && "text-marcelcar-highlight"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-marcelcar-highlight rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white px-4 xl:px-6"
            >
              <Link href="/contacto">
                <Phone className="mr-2 h-4 w-4" /> Sacar Cita
              </Link>
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block transition-colors py-3 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 relative",
                    isActive(item.href)
                      ? "text-marcelcar-highlight font-medium bg-gray-50 dark:bg-gray-800/50 border-l-4 border-marcelcar-highlight pl-3"
                      : "text-foreground hover:text-marcelcar-highlight"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border">
                <Button
                  asChild
                  className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white w-full mb-3"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contacto">
                    <Phone className="mr-2 h-4 w-4" /> Sacar Cita
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-marcelcar-highlight hover:bg-marcelcar-accent text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
