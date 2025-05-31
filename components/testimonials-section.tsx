"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Propietario de BMW Serie 3",
      content:
        "Increíble trabajo con la reparación de mi coche tras un accidente. Quedó como nuevo y en el plazo prometido. Totalmente recomendable.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Laura Martínez",
      role: "Propietaria de Audi A4",
      content:
        "Excelente servicio y atención al cliente. Repararon unos rayones profundos en la puerta y ahora no se nota absolutamente nada.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Miguel Ángel Pérez",
      role: "Propietario de Mercedes Clase C",
      content:
        "Profesionales de primera. Restauraron la pintura de mi coche clásico respetando el color original. El resultado es espectacular.",
      rating: 5,
      avatar: "/placeholder.svg",
    },
  ];

  const goToSlide = (index: number) => {
    if (!sliderRef.current) return;

    setCurrentSlide(index);
    const slideWidth = sliderRef.current.scrollWidth / testimonials.length;
    sliderRef.current.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-16 lg:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 lg:mb-6"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación. Conoce sus experiencias con MarcelCar.
          </p>
        </div>

        {isMobile ? (
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="min-w-[90%] pr-4 snap-start"
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-5 h-full flex flex-col">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-current text-yellow-500"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            sizes="(max-width: 768px) 80px, 96px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-sm truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentSlide === i
                      ? "bg-marcelcar-highlight scale-125"
                      : "bg-marcelcar-highlight/30"
                  }`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full relative"
              >
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="h-10 w-10 text-marcelcar-highlight" />
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 lg:h-5 lg:w-5 fill-current text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground mb-6 flex-1 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="relative h-10 w-10 lg:h-12 lg:w-12 rounded-full overflow-hidden mr-3 lg:mr-4 flex-shrink-0">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        sizes="(max-width: 768px) 80px, 96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm lg:text-base truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
