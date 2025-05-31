"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    title: string;
    category: string;
    description: string;
    imageBefore: string;
    imageAfter: string;
  } | null>(null);

  const [activeCategory, setActiveCategory] = useState("todos");
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const gallerySliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track active slide for gallery carousel
  useEffect(() => {
    if (!gallerySliderRef.current || !isMobile) return;

    const handleScroll = () => {
      if (!gallerySliderRef.current) return;
      const scrollPosition = gallerySliderRef.current.scrollLeft;
      const slideWidth = gallerySliderRef.current.clientWidth * 0.85; // 85% of container width
      const newIndex = Math.round(scrollPosition / slideWidth);
      setActiveGalleryIndex(newIndex);
    };

    gallerySliderRef.current.addEventListener("scroll", handleScroll);
    return () => {
      gallerySliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Navigation function for gallery carousel
  const scrollToGallerySlide = (index: number) => {
    if (!gallerySliderRef.current) return;
    const slideWidth = gallerySliderRef.current.clientWidth * 0.85;
    gallerySliderRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  // Touch event handlers for gallery slider
  const handleGalleryMouseDown = (e: React.MouseEvent) => {
    if (!gallerySliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - gallerySliderRef.current.offsetLeft);
    setScrollLeft(gallerySliderRef.current.scrollLeft);
  };

  const handleGalleryTouchStart = (e: React.TouchEvent) => {
    if (!gallerySliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - gallerySliderRef.current.offsetLeft);
    setScrollLeft(gallerySliderRef.current.scrollLeft);
  };

  const handleGalleryMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !gallerySliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - gallerySliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    gallerySliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleGalleryTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !gallerySliderRef.current) return;
    const x = e.touches[0].pageX - gallerySliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    gallerySliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "chapa", label: "Chapa" },
    { id: "pintura", label: "Pintura" },
    { id: "restauracion", label: "Restauración" },
    { id: "detallado", label: "Detallado" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Restauración Completa",
      category: "pintura",
      description:
        "Restauración completa de la pintura de un BMW Serie 3 con daños por exposición solar y oxidación.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Reparación de Golpe",
      category: "chapa",
      description:
        "Reparación de un golpe lateral en un Audi A4 con sustitución parcial de la puerta y pintado.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Eliminación de Rayones",
      category: "detallado",
      description:
        "Eliminación de rayones profundos en la carrocería de un Mercedes Clase C mediante pulido y repintado parcial.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Restauración de Clásico",
      category: "restauracion",
      description:
        "Restauración completa de un Seat 600 de 1970, incluyendo tratamiento anticorrosión y pintura original.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Reparación de Granizo",
      category: "chapa",
      description:
        "Reparación de múltiples abolladuras por granizo en el techo y capó de un Volkswagen Golf.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Cambio de Color",
      category: "pintura",
      description:
        "Cambio completo de color de un Ford Focus de gris a azul metalizado con acabado premium.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      title: "Pulido de Carrocería",
      category: "detallado",
      description:
        "Pulido completo y tratamiento cerámico en un Porsche 911 para protección y brillo duradero.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      title: "Restauración de Moto",
      category: "restauracion",
      description:
        "Restauración completa del depósito y carenado de una Harley Davidson con pintura personalizada.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      title: "Reparación de Parachoques",
      category: "chapa",
      description:
        "Reparación y pintado de parachoques delantero de un Toyota Corolla tras colisión leve.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
  ];

  // Filter gallery items based on active category
  const filteredItems =
    activeCategory === "todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Galería de Trabajos
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Descubre la calidad de nuestro trabajo a través de estos ejemplos
              de transformaciones que hemos realizado.
              {!isMobile &&
                " Pasa el cursor sobre las imágenes para ver el antes y después."}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          {/* Category Selection */}
          <div className="mb-8 sm:mb-12">
            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex min-w-max sm:justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setActiveGalleryIndex(0);
                    }}
                    className={`px-4 py-3 rounded-md whitespace-nowrap text-sm sm:text-base transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-marcelcar-highlight text-white font-medium shadow-md"
                        : "bg-gray-100 dark:bg-marcelcar-dark/30 hover:bg-gray-200 dark:hover:bg-marcelcar-dark/50"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Display */}
          {isMobile ? (
            <div className="relative">
              {filteredItems.length > 0 ? (
                <>
                  <div
                    ref={gallerySliderRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    }}
                    onMouseDown={handleGalleryMouseDown}
                    onMouseMove={handleGalleryMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleGalleryTouchStart}
                    onTouchMove={handleGalleryTouchMove}
                    onTouchEnd={handleMouseUp}
                  >
                    {filteredItems.map((item, index) => (
                      <div
                        key={item.id}
                        className="min-w-[85%] pr-4 snap-start"
                      >
                        <MobileGalleryItem
                          item={item}
                          onClick={() => setSelectedImage(item)}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-4 gap-2">
                    {filteredItems.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                          activeGalleryIndex === index
                            ? "bg-marcelcar-highlight scale-125"
                            : "bg-marcelcar-highlight/30"
                        }`}
                        onClick={() => scrollToGallerySlide(index)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Ir al trabajo ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-center text-muted-foreground py-10">
                  No hay trabajos en esta categoría.
                </p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <GalleryItem
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedImage(item)}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-muted-foreground py-10">
                  No hay trabajos en esta categoría.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Image Detail Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>{selectedImage?.description}</DialogDescription>
          </DialogHeader>

          {selectedImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-2">
                <p className="font-semibold text-center">Antes</p>
                <div className="relative h-[250px] sm:h-[300px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.imageBefore || "/placeholder.svg"}
                    alt={`Antes - ${selectedImage.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-center">Después</p>
                <div className="relative h-[250px] sm:h-[300px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.imageAfter || "/placeholder.svg"}
                    alt={`Después - ${selectedImage.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center mt-4">
            <Button
              className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white"
              onClick={() => setSelectedImage(null)}
            >
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface GalleryItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    description: string;
    imageBefore: string;
    imageAfter: string;
  };
  onClick: () => void;
}

function GalleryItem({ item, onClick }: GalleryItemProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          <Image
            src={item.imageBefore || "/placeholder.svg"}
            alt={`Antes - ${item.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Antes</span>
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <Image
            src={item.imageAfter || "/placeholder.svg"}
            alt={`Después - ${item.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Después</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-marcelcar-dark">
        <span className="text-sm text-marcelcar-highlight font-medium capitalize">
          {item.category}
        </span>
        <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
      </div>
    </div>
  );
}

// Mobile-optimized gallery item with swipe between before/after
function MobileGalleryItem({ item, onClick }: GalleryItemProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg"
      onClick={onClick}
    >
      <div className="relative h-56 w-full">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            showAfter ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={item.imageBefore || "/placeholder.svg"}
            alt={`Antes - ${item.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Antes</span>
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.imageAfter || "/placeholder.svg"}
            alt={`Después - ${item.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Después</span>
          </div>
        </div>

        {/* Toggle button */}
        <button
          className="absolute bottom-3 right-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-md z-10"
          onClick={(e) => {
            e.stopPropagation();
            setShowAfter(!showAfter);
          }}
        >
          {showAfter ? "Ver antes" : "Ver después"}
        </button>
      </div>
      <div className="p-4 bg-white dark:bg-marcelcar-dark">
        <span className="text-xs text-marcelcar-highlight font-medium capitalize">
          {item.category}
        </span>
        <h3 className="text-base font-semibold mt-1">{item.title}</h3>
      </div>
    </div>
  );
}
