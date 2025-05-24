import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaintBucket, Car, Wrench, Sparkles, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      id: "chapa",
      title: "Reparación de Chapa",
      description: "Eliminamos abolladuras y daños estructurales devolviendo la forma original a tu vehículo.",
      icon: <Wrench className="h-12 w-12 text-marcelcar-highlight" />,
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
      description: "Utilizamos pinturas de alta calidad con acabados perfectos y garantía de color.",
      icon: <PaintBucket className="h-12 w-12 text-marcelcar-highlight" />,
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
      description: "Devolvemos la vida a vehículos clásicos o dañados con técnicas especializadas.",
      icon: <Car className="h-12 w-12 text-marcelcar-highlight" />,
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
      description: "Recuperamos el brillo original de la pintura eliminando rayones superficiales.",
      icon: <Sparkles className="h-12 w-12 text-marcelcar-highlight" />,
      features: [
        "Pulido de carrocería completa",
        "Eliminación de rayones superficiales",
        "Tratamientos cerámicos protectores",
        "Restauración de faros",
        "Limpieza y protección de interiores",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const additionalServices = [
    {
      title: "Servicio Rápido",
      description: "Reparaciones menores en el día para que no te quedes sin tu vehículo.",
      icon: <Clock className="h-10 w-10 text-marcelcar-highlight" />,
    },
    {
      title: "Garantía de Trabajo",
      description: "Todos nuestros servicios cuentan con garantía por escrito para tu tranquilidad.",
      icon: <Shield className="h-10 w-10 text-marcelcar-highlight" />,
    },
    {
      title: "Presupuestos Sin Cargo",
      description: "Evaluamos tu vehículo y te ofrecemos un presupuesto detallado sin compromiso.",
      icon: <CheckCircle className="h-10 w-10 text-marcelcar-highlight" />,
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Servicios</h1>
            <div className="w-20 h-1 bg-marcelcar-highlight mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground mb-8">
              En MarcelCar ofrecemos soluciones completas para la reparación y embellecimiento de tu vehículo con los
              más altos estándares de calidad y atención al detalle.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="chapa" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {mainServices.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="text-sm md:text-base">
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {mainServices.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-6">
                      {service.icon}
                      <h2 className="text-3xl font-bold ml-4">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white">
                      <Link href="/contacto">
                        Solicitar Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Adicionales</h2>
            <div className="w-20 h-1 bg-marcelcar-highlight mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complementamos nuestros servicios principales con estas ventajas adicionales para tu comodidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" id="presupuesto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proceso de Trabajo</h2>
              <div className="w-20 h-1 bg-marcelcar-highlight mb-6"></div>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro proceso está diseñado para garantizar resultados excepcionales y la máxima satisfacción de
                nuestros clientes.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Diagnóstico</h3>
                    <p className="text-muted-foreground">
                      Evaluamos el estado de tu vehículo y te ofrecemos un presupuesto detallado sin compromiso.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Planificación</h3>
                    <p className="text-muted-foreground">
                      Definimos el proceso de trabajo, materiales necesarios y tiempo estimado de entrega.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reparación</h3>
                    <p className="text-muted-foreground">
                      Nuestros técnicos realizan las reparaciones necesarias con precisión y cuidado.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold">
                    04
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Entrega</h3>
                    <p className="text-muted-foreground">
                      Te entregamos tu vehículo completamente restaurado y con garantía por escrito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
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
      <section className="py-20 bg-marcelcar-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas Alguno de Nuestros Servicios?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contáctanos hoy mismo para obtener un presupuesto sin compromiso y descubre por qué somos la mejor opción
              para el cuidado de tu automóvil.
            </p>
            <Button asChild size="lg" className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white">
              <Link href="/contacto">
                Solicitar Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
