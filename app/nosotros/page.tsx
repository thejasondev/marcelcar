"use client";
import Image from "next/image";
import { CheckCircle, Award, Users, Clock, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const valuesSliderRef = useRef<HTMLDivElement>(null);
  const teamSliderRef = useRef<HTMLDivElement>(null);
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

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

  // Track active slide for values carousel
  useEffect(() => {
    if (!valuesSliderRef.current || !isMobile) return;

    const handleScroll = () => {
      if (!valuesSliderRef.current) return;
      const scrollPosition = valuesSliderRef.current.scrollLeft;
      const slideWidth = valuesSliderRef.current.clientWidth * 0.8; // 80% of container width
      const newIndex = Math.round(scrollPosition / slideWidth);
      setActiveValueIndex(newIndex);
    };

    valuesSliderRef.current.addEventListener("scroll", handleScroll);
    return () => {
      valuesSliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Track active slide for team carousel
  useEffect(() => {
    if (!teamSliderRef.current || !isMobile) return;

    const handleScroll = () => {
      if (!teamSliderRef.current) return;
      const scrollPosition = teamSliderRef.current.scrollLeft;
      const slideWidth = teamSliderRef.current.clientWidth * 0.85; // 85% of container width
      const newIndex = Math.round(scrollPosition / slideWidth);
      setActiveTeamIndex(newIndex);
    };

    teamSliderRef.current.addEventListener("scroll", handleScroll);
    return () => {
      teamSliderRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const values = [
    {
      icon: <Award className="h-10 w-10 text-marcelcar-highlight" />,
      title: "Excelencia",
      description:
        "Nos esforzamos por superar las expectativas en cada trabajo que realizamos.",
    },
    {
      icon: <Users className="h-10 w-10 text-marcelcar-highlight" />,
      title: "Confianza",
      description:
        "Construimos relaciones duraderas basadas en la honestidad y transparencia.",
    },
    {
      icon: <Clock className="h-10 w-10 text-marcelcar-highlight" />,
      title: "Puntualidad",
      description:
        "Respetamos los plazos acordados y valoramos el tiempo de nuestros clientes.",
    },
  ];

  const team = [
    {
      name: "Marcel Rodríguez",
      position: "Fundador y Director",
      bio: "Con más de 20 años de experiencia en el sector, Marcel fundó el taller con la visión de ofrecer servicios de la más alta calidad.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Ana Martínez",
      position: "Jefa de Taller",
      bio: "Especialista en pintura automotriz con formación internacional y más de 15 años de experiencia en el sector.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Carlos Sánchez",
      position: "Técnico Especialista",
      bio: "Experto en reparación de chapa y restauración de vehículos clásicos con certificaciones internacionales.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  // Touch event handlers for values slider
  const handleValuesMouseDown = (e: React.MouseEvent) => {
    if (!valuesSliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - valuesSliderRef.current.offsetLeft);
    setScrollLeft(valuesSliderRef.current.scrollLeft);
  };

  const handleValuesTouchStart = (e: React.TouchEvent) => {
    if (!valuesSliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - valuesSliderRef.current.offsetLeft);
    setScrollLeft(valuesSliderRef.current.scrollLeft);
  };

  const handleValuesMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !valuesSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - valuesSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    valuesSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleValuesTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !valuesSliderRef.current) return;
    const x = e.touches[0].pageX - valuesSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    valuesSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers for team slider
  const handleTeamMouseDown = (e: React.MouseEvent) => {
    if (!teamSliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - teamSliderRef.current.offsetLeft);
    setScrollLeft(teamSliderRef.current.scrollLeft);
  };

  const handleTeamTouchStart = (e: React.TouchEvent) => {
    if (!teamSliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - teamSliderRef.current.offsetLeft);
    setScrollLeft(teamSliderRef.current.scrollLeft);
  };

  const handleTeamMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !teamSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - teamSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    teamSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTeamTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !teamSliderRef.current) return;
    const x = e.touches[0].pageX - teamSliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    teamSliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Navigation functions for values carousel
  const scrollToValueSlide = (index: number) => {
    if (!valuesSliderRef.current) return;
    const slideWidth = valuesSliderRef.current.clientWidth * 0.8;
    valuesSliderRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  // Navigation functions for team carousel
  const scrollToTeamSlide = (index: number) => {
    if (!teamSliderRef.current) return;
    const slideWidth = teamSliderRef.current.clientWidth * 0.85;
    teamSliderRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Sobre Nosotros
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                En MarcelCar nos dedicamos a la reparación y embellecimiento de
                vehículos con la máxima calidad y atención al detalle. Desde
                nuestra fundación en 2005, hemos trabajado con pasión para
                convertirnos en referentes del sector.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Nuestro equipo está formado por profesionales altamente
                cualificados y en constante formación para ofrecer las técnicas
                más avanzadas y los mejores resultados.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">
                    Más de 15 años de experiencia en el sector
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">
                    Equipo de profesionales certificados
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">
                    Materiales y productos de primera calidad
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">
                    Garantía por escrito en todos nuestros trabajos
                  </p>
                </div>
              </div>
            </div>
            {/* Hide image on mobile */}
            <div className="hidden sm:block lg:w-1/2">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/hero-section.jpg"
                  alt="Equipo de MarcelCar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Nuestros Valores
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Estos son los principios que guían nuestro trabajo diario y nos
              permiten ofrecer un servicio excepcional.
            </p>
          </div>

          {isMobile ? (
            <div className="relative -mx-4 px-4">
              <div
                ref={valuesSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
                onMouseDown={handleValuesMouseDown}
                onMouseMove={handleValuesMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleValuesTouchStart}
                onTouchMove={handleValuesTouchMove}
                onTouchEnd={handleMouseUp}
              >
                {values.map((value, index) => (
                  <div key={index} className="min-w-[80%] pr-4 snap-start">
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 group h-full">
                      <CardHeader className="pb-2 pt-5 px-5 text-center">
                        <div className="mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          {value.icon}
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {value.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0 px-5 pb-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {values.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeValueIndex === index
                        ? "bg-marcelcar-highlight scale-125"
                        : "bg-marcelcar-highlight/30"
                    }`}
                    onClick={() => scrollToValueSlide(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ir al valor ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-marcelcar-dark/30 rounded-lg shadow-lg"
                >
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Nuestro Equipo
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce a los profesionales que hacen posible que tu vehículo luzca
              como nuevo.
            </p>
          </div>

          {isMobile ? (
            <div className="relative -mx-4 px-4">
              <div
                ref={teamSliderRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
                onMouseDown={handleTeamMouseDown}
                onMouseMove={handleTeamMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTeamTouchStart}
                onTouchMove={handleTeamTouchMove}
                onTouchEnd={handleMouseUp}
              >
                {team.map((member, index) => (
                  <div key={index} className="min-w-[85%] pr-4 snap-start">
                    <div className="bg-white dark:bg-marcelcar-dark/30 rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="relative h-48 w-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg font-semibold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-marcelcar-highlight font-medium mb-2 text-sm">
                          {member.position}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-4 gap-2">
                {team.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTeamIndex === index
                        ? "bg-marcelcar-highlight scale-125"
                        : "bg-marcelcar-highlight/30"
                    }`}
                    onClick={() => scrollToTeamSlide(index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ir al miembro del equipo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-marcelcar-dark/30 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-marcelcar-highlight font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Hide image on mobile, show on desktop first */}
            <div className="hidden sm:block lg:order-1 lg:w-1/2">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/hero-section.jpg"
                  alt="Historia de MarcelCar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Nuestra Historia
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-marcelcar-highlight mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                MarcelCar nació en 2005 de la pasión de Marcel Rodríguez por los
                automóviles y su deseo de ofrecer servicios de reparación de la
                más alta calidad.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Lo que comenzó como un pequeño taller con dos empleados, ha
                crecido hasta convertirse en un referente en el sector de la
                chapa y pintura, manteniendo siempre los valores de calidad,
                honestidad y excelencia que nos caracterizan.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Hoy, con más de 15 años de experiencia, seguimos innovando y
                mejorando nuestros servicios para ofrecer las soluciones más
                avanzadas y eficientes a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
