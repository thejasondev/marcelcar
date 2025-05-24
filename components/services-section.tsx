import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PaintBucket, Car, Wrench, Sparkles, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      title: "Reparación de Chapa",
      description: "Eliminamos abolladuras y daños estructurales devolviendo la forma original a tu vehículo.",
      icon: <Wrench className="h-8 w-8 lg:h-10 lg:w-10 text-marcelcar-highlight" />,
    },
    {
      title: "Pintura Automotriz",
      description: "Utilizamos pinturas de alta calidad con acabados perfectos y garantía de color.",
      icon: <PaintBucket className="h-8 w-8 lg:h-10 lg:w-10 text-marcelcar-highlight" />,
    },
    {
      title: "Restauración",
      description: "Devolvemos la vida a vehículos clásicos o dañados con técnicas especializadas.",
      icon: <Car className="h-8 w-8 lg:h-10 lg:w-10 text-marcelcar-highlight" />,
    },
    {
      title: "Pulido y Detallado",
      description: "Recuperamos el brillo original de la pintura eliminando rayones superficiales.",
      icon: <Sparkles className="h-8 w-8 lg:h-10 lg:w-10 text-marcelcar-highlight" />,
    },
    {
      title: "Servicio Rápido",
      description: "Reparaciones menores en el día para que no te quedes sin tu vehículo.",
      icon: <Clock className="h-8 w-8 lg:h-10 lg:w-10 text-marcelcar-highlight" />,
    },
    {
      title: "Garantía de Trabajo",
      description: "Todos nuestros servicios cuentan con garantía por escrito para tu tranquilidad.",
      icon: <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-marcelcar-highlight" />,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <div className="w-16 lg:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 lg:mb-6"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ofrecemos soluciones completas para la reparación y embellecimiento de tu vehículo con los más altos
            estándares de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group h-full"
            >
              <CardHeader className="pb-3 lg:pb-4">
                <div className="mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg lg:text-xl leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm lg:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <Button
            asChild
            className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white px-6 lg:px-8 py-2 lg:py-3"
          >
            <Link href="/servicios">Ver Todos los Servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
