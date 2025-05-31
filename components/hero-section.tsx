import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import ABTestingCta from "@/components/ab-testing-cta";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src="/images/hero/hero-section.jpg"
          alt="Coche restaurado por MarcelCar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7aQAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-marcelcar-dark/95 via-marcelcar-dark/80 to-marcelcar-dark/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-8 xl:col-span-7">
            <AnimatedSection animation="fadeUp" duration={0.7}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight">
                Expertos en Chapa y Pintura para tu Vehículo
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.2} duration={0.7}>
              <p className="text-base sm:text-lg lg:text-2xl text-marcelcar-light mb-5 lg:mb-8 max-w-2xl">
                Devolvemos la vida a tu automóvil con los más altos estándares
                de calidad y atención al detalle.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.4} duration={0.7}>
              <ABTestingCta className="mb-6 lg:mb-12" />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.6} duration={0.7}>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-3 lg:p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-white font-semibold mb-1 lg:mb-2 text-sm lg:text-base">
                    Calidad Garantizada
                  </h3>
                  <p className="text-marcelcar-light text-xs lg:text-sm">
                    Materiales premium y acabados perfectos
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 lg:p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-white font-semibold mb-1 lg:mb-2 text-sm lg:text-base">
                    +15 Años de Experiencia
                  </h3>
                  <p className="text-marcelcar-light text-xs lg:text-sm">
                    Profesionales cualificados
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 lg:p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300 col-span-2 lg:col-span-1">
                  <h3 className="text-white font-semibold mb-1 lg:mb-2 text-sm lg:text-base">
                    Presupuesto Sin Compromiso
                  </h3>
                  <p className="text-marcelcar-light text-xs lg:text-sm">
                    Transparencia y honestidad
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scroll indicator - visible on all devices */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-1.5 lg:mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
