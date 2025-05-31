"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Phone,
  ChevronUp,
  Home,
  Users,
  Settings,
  Image,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle scroll effects
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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { href: "/", label: "Inicio", icon: <Home className="w-4 h-4" /> },
    {
      href: "/nosotros",
      label: "Nosotros",
      icon: <Users className="w-4 h-4" />,
    },
    {
      href: "/servicios",
      label: "Servicios",
      icon: <Settings className="w-4 h-4" />,
    },
    { href: "/galeria", label: "Galería", icon: <Image className="w-4 h-4" /> },
    {
      href: "/contacto",
      label: "Contacto",
      icon: <Mail className="w-4 h-4" />,
    },
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
            className={cn(
              "lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all",
              isOpen
                ? "bg-marcelcar-highlight text-white"
                : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={cn(
            "lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out",
            isOpen
              ? "opacity-100 pointer-events-auto top-[56px]"
              : "opacity-0 pointer-events-none top-[-100%]"
          )}
        >
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={cn(
              "relative h-auto max-h-[80vh] overflow-y-auto bg-white dark:bg-marcelcar-dark border-t border-border shadow-xl",
              "transition-transform duration-300",
              isOpen ? "translate-y-0" : "-translate-y-full"
            )}
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 transition-colors py-4 px-3 rounded-lg",
                    isActive(item.href)
                      ? "text-marcelcar-highlight font-medium bg-marcelcar-highlight/10"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-marcelcar-highlight"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span
                    className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-full",
                      isActive(item.href)
                        ? "bg-marcelcar-highlight text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-foreground"
                    )}
                  >
                    {item.icon}
                  </span>
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Button
                  asChild
                  className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white w-full py-6 rounded-lg text-base font-medium"
                >
                  <Link
                    href="/contacto"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" /> Sacar Cita
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-marcelcar-highlight hover:bg-marcelcar-accent text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 animate-bounce"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
