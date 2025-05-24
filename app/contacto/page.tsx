"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import GoogleMap from "@/components/google-map"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h1>
            <div className="w-20 h-1 bg-marcelcar-highlight mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros para solicitar un presupuesto o resolver
              cualquier duda que tengas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-marcelcar-highlight" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <p className="text-muted-foreground mb-4">Llámanos para una atención inmediata</p>
                <a href="tel:+34600123456" className="text-marcelcar-highlight hover:underline font-medium">
                  +34 600 123 456
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-marcelcar-highlight" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Escríbenos para cualquier consulta</p>
                <a href="mailto:info@marcelcar.es" className="text-marcelcar-highlight hover:underline font-medium">
                  info@marcelcar.es
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-marcelcar-highlight" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Horario</h3>
                <p className="text-muted-foreground mb-4">Nuestro horario de atención</p>
                <p className="font-medium">Lunes a Viernes: 9:00 - 19:00</p>
                <p className="font-medium">Sábados: 9:00 - 14:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2" id="form">
              <h2 className="text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
              <p className="text-muted-foreground mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu teléfono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Asunto del mensaje"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white w-full"
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
                      <Send className="mr-2 h-5 w-5" /> Enviar Mensaje
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Map and Address */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Nuestra Ubicación</h2>
              <p className="text-muted-foreground mb-8">
                Visítanos en nuestro taller. Estamos ubicados en una zona de fácil acceso con amplio aparcamiento.
              </p>

              <GoogleMap />

              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-marcelcar-highlight mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-muted-foreground">Av. Siempreviva 742, Springfield, ES</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-marcelcar-highlight mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 600 123 456</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-marcelcar-highlight mr-3 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@marcelcar.es</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-marcelcar-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Prefieres que te llamemos?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Déjanos tu número y te contactaremos a la mayor brevedad posible para resolver tus dudas o concertar una
              cita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white">
                <a href="tel:+34600123456">
                  <Phone className="mr-2 h-5 w-5" /> Llamar Ahora
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="https://wa.me/34600123456">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
