"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function GalleryPreview() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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
      imageBefore: "/placeholder.svg",
      imageAfter: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Reparación de Golpe",
      category: "Chapa",
      imageBefore: "/placeholder.svg",
      imageAfter: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Eliminación de Rayones",
      category: "Detallado",
      imageBefore: "/placeholder.svg",
      imageAfter: "/placeholder.svg",
    },
  ];

  // Crear un array circular para el efecto infinito
  const circularItems = [
    galleryItems[galleryItems.length - 1], // Último elemento al principio
    ...galleryItems,
    galleryItems[0], // Primer elemento al final
  ];

  // Manejadores de eventos táctiles
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Determinar qué imagen está activa basado en la posición de scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollPosition = sliderRef.current.scrollLeft;
    const slideWidth =
      sliderRef.current.querySelector('div[class*="min-w-"]')?.clientWidth || 0;

    // Ajustamos el índice considerando el elemento extra al principio
    let index = Math.round(scrollPosition / slideWidth) - 1;

    // Manejo circular para el primer y último elemento
    if (index < 0) index = galleryItems.length - 1;
    if (index >= galleryItems.length) index = 0;

    setCurrentImageIndex(index);

    // Manejo de scroll infinito
    if (scrollPosition === 0) {
      // Si estamos al principio (viendo el último elemento clonado), saltamos al final real
      sliderRef.current.scrollLeft = slideWidth * galleryItems.length;
    } else if (
      scrollPosition >=
      slideWidth * (circularItems.length - 2) + slideWidth / 2
    ) {
      // Si estamos al final (viendo el primer elemento clonado), saltamos al principio real
      sliderRef.current.scrollLeft = slideWidth;
    }
  };

  // Inicializar el scroll para mostrar el primer elemento real
  useEffect(() => {
    if (sliderRef.current && isMobile) {
      setTimeout(() => {
        if (sliderRef.current) {
          const slideWidth =
            sliderRef.current.querySelector('div[class*="min-w-"]')
              ?.clientWidth || 0;
          sliderRef.current.scrollLeft = slideWidth; // Posicionarse en el primer elemento real

          // Añadir listener para actualizar el indicador durante el scroll
          sliderRef.current.addEventListener("scroll", handleScroll);
        }
      }, 100);

      return () => {
        if (sliderRef.current) {
          sliderRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [isMobile]);

  // Función para navegar a un slide específico
  const goToSlide = (index: number) => {
    if (!sliderRef.current) return;

    const slideWidth =
      sliderRef.current.querySelector('div[class*="min-w-"]')?.clientWidth || 0;
    sliderRef.current.scrollTo({
      left: slideWidth * (index + 1), // +1 porque tenemos un elemento extra al principio
      behavior: "smooth",
    });

    setCurrentImageIndex(index);
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
          <div className="relative -mx-4 px-4">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              onScroll={handleScroll}
            >
              {circularItems.map((item, index) => {
                // Determinar el índice real del elemento (sin contar los duplicados)
                const realIndex =
                  index === 0
                    ? galleryItems.length - 1
                    : index === circularItems.length - 1
                    ? 0
                    : index - 1;

                return (
                  <div
                    key={`${item.id}-${index}`}
                    className="min-w-[85%] pr-4 snap-center shrink-0"
                  >
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative h-60 w-full">
                        <div
                          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                            activeImageIndex === realIndex
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                          onClick={() => setActiveImageIndex(realIndex)}
                        >
                          <Image
                            src={item.imageBefore || "/placeholder.svg"}
                            alt={`Antes - ${item.title}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 85vw, 33vw"
                            quality={75}
                            loading={index <= 2 ? "eager" : "lazy"}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7aQAAAABJRU5ErkJggg=="
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="text-white text-base font-semibold">
                              Antes
                            </span>
                          </div>
                        </div>
                        <div
                          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                            activeImageIndex === realIndex
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
                            quality={75}
                            loading={index <= 2 ? "eager" : "lazy"}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7aQAAAABJRU5ErkJggg=="
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
                          {activeImageIndex === realIndex ? "antes" : "después"}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === i
                      ? "bg-marcelcar-highlight"
                      : "bg-gray-300"
                  } transition-colors duration-300`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Ver trabajo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
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
                      quality={75}
                      loading={index === 0 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7aQAAAABJRU5ErkJggg=="
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
                      quality={75}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7aQAAAABJRU5ErkJggg=="
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
