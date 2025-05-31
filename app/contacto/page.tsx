"use client";

import type React from "react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import GoogleMap from "@/components/google-map";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const cardsSliderRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Track active slide for cards carousel
  useEffect(() => {
    if (!cardsSliderRef.current || !isMobile) return;

    const handleScroll = () => {
      if (!cardsSliderRef.current) return;
      const scrollPosition = cardsSliderRef.current.scrollLeft;
      const slideWidth = cardsSliderRef.current.clientWidth * 0.8; // 80% of container width
      const newIndex = Math.round(scrollPosition / slideWidth);
      setActiveCardIndex(newIndex);
    };

    cardsSliderRef.current.addEventListener("scroll", handleScroll);
    return () => {
      cardsSliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Navigation function for cards carousel
  const scrollToCardSlide = (index: number) => {
    if (!cardsSliderRef.current) return;
    const slideWidth = cardsSliderRef.current.clientWidth * 0.8;
    cardsSliderRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  // Touch event handlers for cards slider
  const handleCardsMouseDown = (e: React.MouseEvent) => {
    if (!cardsSliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - cardsSliderRef.current.offsetLeft);
    setScrollLeft(cardsSliderRef.current.scrollLeft);
  };

  const handleCardsTouchStart = (e: React.TouchEvent) => {
    if (!cardsSliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - cardsSliderRef.current.offsetLeft);
    setScrollLeft(cardsSliderRef.current.scrollLeft);
  };

  const handleCardsMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !cardsSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - cardsSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    cardsSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCardsTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !cardsSliderRef.current) return;
    const x = e.touches[0].pageX - cardsSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    cardsSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s+()-]{9,15}$/;

    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error en el formulario",
        description: "Por favor, introduce un email válido.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      toast({
        title: "Error en el formulario",
        description: "Por favor, introduce un número de teléfono válido.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactCards = [
    {
      icon: (
        <Phone className="h-7 w-7 sm:h-8 sm:w-8 text-marcelcar-highlight" />
      ),
      title: "Teléfono",
      description: "Llámanos para una atención inmediata",
      content: "+34 600 123 456",
      link: "tel:+34600123456",
    },
    {
      icon: <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-marcelcar-highlight" />,
      title: "Email",
      description: "Escríbenos para cualquier consulta",
      content: "info@marcelcar.es",
      link: "mailto:info@marcelcar.es",
    },
    {
      icon: (
        <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-marcelcar-highlight" />
      ),
      title: "Horario",
      description: "Nuestro horario de atención",
      content: (
        <>
          <p className="font-medium">Lunes a Viernes: 9:00 - 19:00</p>
          <p className="font-medium">Sábados: 9:00 - 14:00</p>
        </>
      ),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Contacto
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para
              solicitar un presupuesto o resolver cualquier duda que tengas.
            </p>
            <Button
              onClick={scrollToForm}
              className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white"
            >
              Contactar ahora
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          {isMobile ? (
            <div className="relative mb-16">
              <div
                ref={cardsSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
                onMouseDown={handleCardsMouseDown}
                onMouseMove={handleCardsMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleCardsTouchStart}
                onTouchMove={handleCardsTouchMove}
                onTouchEnd={handleMouseUp}
              >
                {contactCards.map((card, index) => (
                  <div key={index} className="min-w-[80%] pr-4 snap-start">
                    <Card className="border-none shadow-md h-full">
                      <CardContent className="flex flex-col items-center text-center p-5 sm:p-6 h-full">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center mb-4">
                          {card.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {card.description}
                        </p>
                        {typeof card.content === "string" ? (
                          card.link ? (
                            <a
                              href={card.link}
                              className="text-marcelcar-highlight hover:underline font-medium mt-auto"
                            >
                              {card.content}
                            </a>
                          ) : (
                            <p className="font-medium mt-auto">
                              {card.content}
                            </p>
                          )
                        ) : (
                          <div className="mt-auto">{card.content}</div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {contactCards.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeCardIndex === index
                        ? "bg-marcelcar-highlight scale-125"
                        : "bg-marcelcar-highlight/30"
                    }`}
                    onClick={() => scrollToCardSlide(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ir a la tarjeta ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactCards.map((card, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {card.description}
                    </p>
                    {typeof card.content === "string" ? (
                      card.link ? (
                        <a
                          href={card.link}
                          className="text-marcelcar-highlight hover:underline font-medium"
                        >
                          {card.content}
                        </a>
                      ) : (
                        <p className="font-medium">{card.content}</p>
                      )
                    ) : (
                      card.content
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2" id="form" ref={formRef}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo
                antes posible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="h-10 sm:h-11"
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="h-10 sm:h-11"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu teléfono"
                      className="h-10 sm:h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm sm:text-base">
                      Asunto *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Asunto del mensaje"
                      required
                      className="h-10 sm:h-11"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                    className="min-h-[120px] resize-y"
                    aria-required="true"
                  />
                </div>

                <div className="flex items-center">
                  <p className="text-xs text-muted-foreground">
                    * Campos obligatorios
                  </p>
                </div>

                <Button
                  type="submit"
                  className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white w-full md:w-auto md:px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Enviar
                      Mensaje
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Map and Address */}
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Nuestra Ubicación
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                Visítanos en nuestro taller. Estamos ubicados en una zona de
                fácil acceso con amplio aparcamiento.
              </p>

              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                <GoogleMap />
              </div>

              <div className="space-y-4 mt-6 sm:mt-8">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-marcelcar-highlight mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">
                      Dirección
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Av. Siempreviva 742, Springfield, ES
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-marcelcar-highlight mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">
                      Teléfono
                    </h3>
                    <a
                      href="tel:+34600123456"
                      className="text-sm sm:text-base text-muted-foreground hover:text-marcelcar-highlight"
                    >
                      +34 600 123 456
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-marcelcar-highlight mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">
                      Email
                    </h3>
                    <a
                      href="mailto:info@marcelcar.es"
                      className="text-sm sm:text-base text-muted-foreground hover:text-marcelcar-highlight"
                    >
                      info@marcelcar.es
                    </a>
                  </div>
                </div>
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
              ¿Prefieres que te llamemos?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Déjanos tu número y te contactaremos a la mayor brevedad posible
              para resolver tus dudas o concertar una cita.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white w-full sm:w-auto px-6 lg:px-8 py-3"
              >
                <Link href="/contacto">
                  <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" /> Llamar Ahora
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-marcelcar-highlight hover:bg-gray-100 hover:text-marcelcar-highlight border-marcelcar-accent w-full sm:w-auto px-6 lg:px-8 py-3"
              >
                <Link href="https://wa.me/34600123456?text=Hola,%20estoy%20interesado%20en%20tu%20servicio%20de%20pintura">
                  <Mail className="mr-2 h-4 w-4 lg:h-5 lg:w-5" /> Enviar Mensaje
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
