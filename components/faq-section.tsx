"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Cuánto tiempo tarda una reparación de chapa y pintura?",
      answer:
        "El tiempo de reparación varía según la complejidad del trabajo. Para reparaciones menores (rayones o pequeñas abolladuras), el plazo es de 1-2 días. Para trabajos medianos como reparación de un golpe en una puerta, entre 3-5 días. Para reparaciones mayores o restauraciones completas, el plazo puede ser de 1-3 semanas. Siempre proporcionamos un tiempo estimado preciso tras la evaluación inicial.",
    },
    {
      question: "¿Qué tipos de pintura utilizan?",
      answer:
        "En MarcelCar utilizamos exclusivamente pinturas de alta calidad de marcas premium como PPG, Standox y Sikkens. Trabajamos con pinturas al agua respetuosas con el medio ambiente y ofrecemos acabados bicapa, tricapa, metalizados, perlados y mate. Todas nuestras pinturas cuentan con protección UV y garantía de color. Para vehículos clásicos, disponemos de opciones específicas que respetan la originalidad del acabado.",
    },
    {
      question: "¿La reparación afecta a la garantía de fábrica de mi vehículo?",
      answer:
        "No, las reparaciones realizadas en MarcelCar no afectan a la garantía de fábrica de tu vehículo. Trabajamos siguiendo los procedimientos y utilizando materiales aprobados por los fabricantes. Además, todas nuestras reparaciones están documentadas y certificadas, lo que garantiza que se mantienen los estándares del fabricante. Para vehículos en garantía, también gestionamos directamente con las aseguradoras si es necesario.",
    },
    {
      question: "¿Ofrecen servicio de recogida y entrega de vehículos?",
      answer:
        "Sí, disponemos de servicio de recogida y entrega de vehículos sin coste adicional dentro de un radio de 15 km de nuestro taller. Para distancias mayores, aplicamos una pequeña tarifa según la ubicación. También ofrecemos vehículo de sustitución para reparaciones que superen los 3 días, sujeto a disponibilidad y previa reserva.",
    },
    {
      question: "¿Cuánto cuesta reparar un arañazo o una abolladura?",
      answer:
        "El coste depende del tamaño, profundidad y ubicación del daño. Los arañazos superficiales que no han penetrado la capa de pintura pueden costar desde 80€. Las abolladuras pequeñas sin daño en la pintura, desde 100€ mediante técnicas PDR (reparación sin pintura). Para daños más significativos que requieren reparación de chapa y pintura, el precio parte de 200€. Ofrecemos presupuestos detallados y sin compromiso tras evaluar el vehículo.",
    },
    {
      question: "¿Qué garantía ofrecen en sus trabajos?",
      answer:
        "Todos nuestros trabajos cuentan con una garantía por escrito de 2 años en mano de obra y materiales. Esta garantía cubre posibles defectos en la pintura como descascarillado, pérdida de brillo prematura o diferencias de color. La garantía no cubre daños causados por accidentes posteriores, uso indebido o falta de mantenimiento adecuado del vehículo.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <div className="w-16 lg:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 lg:mb-6"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Resolvemos tus dudas sobre nuestros servicios de chapa y pintura. Si no encuentras la respuesta que buscas,
            no dudes en contactarnos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* FAQ Content */}
          <div className="lg:col-span-7 lg:mt-24">
            <Accordion type="single" collapsible className="w-full space-y-3 lg:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left">
                    <span className="text-sm sm:text-base font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 py-4 bg-white dark:bg-marcelcar-dark/30">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Image Section - Only visible on large screens */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-8">
              <div className="relative h-[500px] xl:h-[600px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/capilla.jpg?height=1200&width=800"
                  alt="Técnico trabajando en MarcelCar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marcelcar-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl xl:text-2xl font-bold mb-2">¿Tienes más preguntas?</h3>
                  <p className="text-sm xl:text-base text-gray-200 mb-4">
                    Nuestro equipo está aquí para ayudarte con cualquier duda sobre nuestros servicios.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md border border-white/20">
                      <span className="text-sm font-medium">📞 +34 600 123 456</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md border border-white/20">
                      <span className="text-sm font-medium">✉️ info@marcelcar.es</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
