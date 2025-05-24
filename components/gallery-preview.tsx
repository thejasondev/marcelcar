"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function GalleryPreview() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "Restauración Completa",
      category: "Pintura",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Reparación de Golpe",
      category: "Chapa",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Eliminación de Rayones",
      category: "Detallado",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
  ];

  const nextSlide = () => {
    if (!sliderRef.current) return;
    const maxSlide = galleryItems.length - 1;
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));

    if (sliderRef.current) {
      const slideWidth = sliderRef.current.scrollWidth / galleryItems.length;
      sliderRef.current.scrollTo({
        left: ((currentSlide + 1) % (maxSlide + 1)) * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (!sliderRef.current) return;
    const maxSlide = galleryItems.length - 1;
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));

    if (sliderRef.current) {
      const slideWidth = sliderRef.current.scrollWidth / galleryItems.length;
      sliderRef.current.scrollTo({
        left: (currentSlide - 1 < 0 ? maxSlide : currentSlide - 1) * slideWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Nuestros Trabajos
          </h2>
          <div className="w-16 lg:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 lg:mb-6"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Descubre la calidad de nuestro trabajo a través de estos ejemplos de
            transformaciones que hemos realizado.
          </p>
        </div>

        {isMobile ? (
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryItems.map((item, index) => (
                <div key={item.id} className="min-w-[85%] pr-4 snap-start">
                  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-52 w-full">
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                          activeImageIndex === index
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <Image
                          src={item.imageBefore || "/placeholder.svg"}
                          alt={`Antes - ${item.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 85vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white text-base font-semibold">
                            Antes
                          </span>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                          activeImageIndex === index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        onClick={() => setActiveImageIndex(null)}
                      >
                        <Image
                          src={item.imageAfter || "/placeholder.svg"}
                          alt={`Después - ${item.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 85vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white text-base font-semibold">
                            Después
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white dark:bg-marcelcar-dark">
                      <span className="text-xs text-marcelcar-highlight font-medium">
                        {item.category}
                      </span>
                      <h3 className="text-base font-semibold mt-1">
                        {item.title}
                      </h3>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Toca para ver el{" "}
                        {activeImageIndex === index ? "antes" : "después"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-1 mt-2">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === i
                      ? "bg-marcelcar-highlight"
                      : "bg-gray-300"
                  }`}
                  onClick={() => {
                    setCurrentSlide(i);
                    if (sliderRef.current) {
                      const slideWidth =
                        sliderRef.current.scrollWidth / galleryItems.length;
                      sliderRef.current.scrollTo({
                        left: i * slideWidth,
                        behavior: "smooth",
                      });
                    }
                  }}
                  aria-label={`Ver trabajo ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/3 -translate-y-1/2 bg-white/80 dark:bg-marcelcar-dark/80 rounded-full p-1 shadow-md z-10"
              aria-label="Trabajo anterior"
            >
              <ChevronLeft className="h-5 w-5 text-marcelcar-highlight" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/3 -translate-y-1/2 bg-white/80 dark:bg-marcelcar-dark/80 rounded-full p-1 shadow-md z-10"
              aria-label="Trabajo siguiente"
            >
              <ChevronRight className="h-5 w-5 text-marcelcar-highlight" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 w-full">
                  <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                    <Image
                      src={item.imageBefore || "/placeholder.svg"}
                      alt={`Antes - ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-base lg:text-lg font-semibold">
                        Antes
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <Image
                      src={item.imageAfter || "/placeholder.svg"}
                      alt={`Después - ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-base lg:text-lg font-semibold">
                        Después
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:p-6 bg-white dark:bg-marcelcar-dark">
                  <span className="text-xs lg:text-sm text-marcelcar-highlight font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-base lg:text-lg font-semibold mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8 lg:mt-12">
          <Button
            asChild
            className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white px-6 lg:px-8 py-2 lg:py-3"
          >
            <Link href="/galeria">
              Ver Galería Completa{" "}
              <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
