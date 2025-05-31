"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PaintBucket,
  Car,
  Wrench,
  Sparkles,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeService, setActiveService] = useState("chapa");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeAdditionalIndex, setActiveAdditionalIndex] = useState(0);
  const additionalSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track active slide for additional services carousel
  useEffect(() => {
    if (!additionalSliderRef.current || !isMobile) return;

    const handleScroll = () => {
      if (!additionalSliderRef.current) return;
      const scrollPosition = additionalSliderRef.current.scrollLeft;
      const slideWidth = additionalSliderRef.current.clientWidth * 0.8; // 80% of container width
      const newIndex = Math.round(scrollPosition / slideWidth);
      setActiveAdditionalIndex(newIndex);
    };

    additionalSliderRef.current.addEventListener("scroll", handleScroll);
    return () => {
      additionalSliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Navigation function for additional services carousel
  const scrollToAdditionalSlide = (index: number) => {
    if (!additionalSliderRef.current) return;
    const slideWidth = additionalSliderRef.current.clientWidth * 0.8;
    additionalSliderRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  // Touch event handlers for additional services slider
  const handleAdditionalMouseDown = (e: React.MouseEvent) => {
    if (!additionalSliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - additionalSliderRef.current.offsetLeft);
    setScrollLeft(additionalSliderRef.current.scrollLeft);
  };

  const handleAdditionalTouchStart = (e: React.TouchEvent) => {
    if (!additionalSliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - additionalSliderRef.current.offsetLeft);
    setScrollLeft(additionalSliderRef.current.scrollLeft);
  };

  const handleAdditionalMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !additionalSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - additionalSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    additionalSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleAdditionalTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !additionalSliderRef.current) return;
    const x = e.touches[0].pageX - additionalSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    additionalSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const mainServices = [
    {
      id: "chapa",
      title: "Reparación de Chapa",
      description:
        "Eliminamos abolladuras y daños estructurales devolviendo la forma original a tu vehículo.",
      icon: (
        <Wrench className="h-10 w-10 sm:h-12 sm:w-12 text-marcelcar-highlight" />
      ),
      features: [
        "Reparación de abolladuras de cualquier tamaño",
        "Corrección de daños por granizo",
        "Reparación de daños estructurales",
        "Sustitución de piezas dañadas",
        "Restauración de marcos y bastidores",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "pintura",
      title: "Pintura Automotriz",
      description:
        "Utilizamos pinturas de alta calidad con acabados perfectos y garantía de color.",
      icon: (
        <PaintBucket className="h-10 w-10 sm:h-12 sm:w-12 text-marcelcar-highlight" />
      ),
      features: [
        "Pintado completo de vehículos",
        "Igualación exacta de color",
        "Pintado de piezas específicas",
        "Aplicación de barniz protector",
        "Tratamientos anticorrosión",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "restauracion",
      title: "Restauración",
      description:
        "Devolvemos la vida a vehículos clásicos o dañados con técnicas especializadas.",
      icon: (
        <Car className="h-10 w-10 sm:h-12 sm:w-12 text-marcelcar-highlight" />
      ),
      features: [
        "Restauración completa de vehículos clásicos",
        "Recuperación de carrocerías antiguas",
        "Restauración de pintura original",
        "Tratamientos anticorrosión especiales",
        "Documentación del proceso de restauración",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "pulido",
      title: "Pulido y Detallado",
      description:
        "Recuperamos el brillo original de la pintura eliminando rayones superficiales.",
      icon: (
        <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-marcelcar-highlight" />
      ),
      features: [
        "Pulido de carrocería completa",
        "Eliminación de rayones superficiales",
        "Tratamientos cerámicos protectores",
        "Restauración de faros",
        "Limpieza y protección de interiores",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  const additionalServices = [
    {
      title: "Servicio Rápido",
      description:
        "Reparaciones menores en el día para que no te quedes sin tu vehículo.",
      icon: (
        <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-marcelcar-highlight" />
      ),
    },
    {
      title: "Garantía de Trabajo",
      description:
        "Todos nuestros servicios cuentan con garantía por escrito para tu tranquilidad.",
      icon: (
        <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-marcelcar-highlight" />
      ),
    },
    {
      title: "Presupuestos Sin Cargo",
      description:
        "Evaluamos tu vehículo y te ofrecemos un presupuesto detallado sin compromiso.",
      icon: (
        <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-marcelcar-highlight" />
      ),
    },
  ];

  // Get current service data
  const currentService =
    mainServices.find((service) => service.id === activeService) ||
    mainServices[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Nuestros Servicios
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              En MarcelCar ofrecemos soluciones completas para la reparación y
              embellecimiento de tu vehículo con los más altos estándares de
              calidad y atención al detalle.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex sm:grid sm:grid-cols-4 gap-2 min-w-max sm:min-w-0">
                {mainServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`px-4 py-3 rounded-md whitespace-nowrap text-sm sm:text-base transition-all duration-300 ${
                      activeService === service.id
                        ? "bg-marcelcar-highlight text-white font-medium shadow-md"
                        : "bg-gray-100 dark:bg-marcelcar-dark/30 hover:bg-gray-200 dark:hover:bg-marcelcar-dark/50"
                    }`}
                  >
                    <div className="flex items-center justify-center sm:justify-start">
                      <span className="sm:hidden mr-2">{service.icon}</span>
                      <span>{service.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="mr-4">{currentService.icon}</div>
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {currentService.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                  {currentService.description}
                </p>
                <ul className="space-y-3 mb-6 sm:mb-8">
                  {currentService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white"
                >
                  <Link href="/contacto">
                    Solicitar Presupuesto{" "}
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </div>
              <div className="hidden sm:block lg:w-1/2">
                <div className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={currentService.image || "/placeholder.svg"}
                    alt={currentService.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Servicios Adicionales
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Complementamos nuestros servicios principales con estas ventajas
              adicionales para tu comodidad.
            </p>
          </div>

          {isMobile ? (
            <div className="relative -mx-4 px-4">
              <div
                ref={additionalSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
                onMouseDown={handleAdditionalMouseDown}
                onMouseMove={handleAdditionalMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleAdditionalTouchStart}
                onTouchMove={handleAdditionalTouchMove}
                onTouchEnd={handleMouseUp}
              >
                {additionalServices.map((service, index) => (
                  <div key={index} className="min-w-[80%] pr-4 snap-start">
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 group h-full">
                      <CardHeader className="pb-2 pt-5 px-5 text-center">
                        <div className="mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 px-5 pb-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {additionalServices.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeAdditionalIndex === index
                        ? "bg-marcelcar-highlight scale-125"
                        : "bg-marcelcar-highlight/30"
                    }`}
                    onClick={() => scrollToAdditionalSlide(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ir al servicio adicional ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="pb-2">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20" id="presupuesto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Proceso de Trabajo
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Nuestro proceso está diseñado para garantizar resultados
                excepcionales y la máxima satisfacción de nuestros clientes.
              </p>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold text-sm sm:text-base">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Diagnóstico
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Evaluamos el estado de tu vehículo y te ofrecemos un
                      presupuesto detallado sin compromiso.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold text-sm sm:text-base">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Planificación
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Definimos el proceso de trabajo, materiales necesarios y
                      tiempo estimado de entrega.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold text-sm sm:text-base">
                    03
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Reparación
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Nuestros técnicos realizan las reparaciones necesarias con
                      precisión y cuidado.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold text-sm sm:text-base">
                    04
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                      Entrega
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Te entregamos tu vehículo completamente restaurado y con
                      garantía por escrito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block lg:w-1/2">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Proceso de trabajo en MarcelCar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-marcelcar-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              ¿Necesitas Alguno de Nuestros Servicios?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Contáctanos hoy mismo para obtener un presupuesto sin compromiso y
              descubre por qué somos la mejor opción para el cuidado de tu
              automóvil.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white"
            >
              <Link href="/contacto">
                Solicitar Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
