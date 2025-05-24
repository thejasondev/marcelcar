import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      role: "Propietario de BMW Serie 3",
      content:
        "Increíble trabajo con la reparación de mi coche tras un accidente. Quedó como nuevo y en el plazo prometido. Totalmente recomendable.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Laura Martínez",
      role: "Propietaria de Audi A4",
      content:
        "Excelente servicio y atención al cliente. Repararon unos rayones profundos en la puerta y ahora no se nota absolutamente nada.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Miguel Ángel Pérez",
      role: "Propietario de Mercedes Clase C",
      content:
        "Profesionales de primera. Restauraron la pintura de mi coche clásico respetando el color original. El resultado es espectacular.",
      rating: 5,
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <div className="w-16 lg:w-20 h-1 bg-marcelcar-highlight mx-auto mb-4 lg:mb-6"></div>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Conoce sus experiencias con
            MarcelCar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full"
            >
              <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 flex-1 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="relative h-10 w-10 lg:h-12 lg:w-12 rounded-full overflow-hidden mr-3 lg:mr-4 flex-shrink-0">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm lg:text-base truncate">{testimonial.name}</h4>
                    <p className="text-xs lg:text-sm text-muted-foreground truncate">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
