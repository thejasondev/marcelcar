import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Evaluamos el estado de tu vehículo y te ofrecemos un presupuesto detallado sin compromiso.",
    },
    {
      number: "02",
      title: "Planificación",
      description: "Definimos el proceso de trabajo, materiales necesarios y tiempo estimado de entrega.",
    },
    {
      number: "03",
      title: "Reparación",
      description: "Nuestros técnicos realizan las reparaciones necesarias con precisión y cuidado.",
    },
    {
      number: "04",
      title: "Pintura",
      description: "Aplicamos capas de pintura de alta calidad en cabina especializada para un acabado perfecto.",
    },
    {
      number: "05",
      title: "Control de Calidad",
      description: "Verificamos que todos los trabajos cumplan con nuestros estándares de excelencia.",
    },
    {
      number: "06",
      title: "Entrega",
      description: "Te entregamos tu vehículo completamente restaurado y con garantía por escrito.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Cómo Trabajamos</h2>
            <div className="w-16 lg:w-20 h-1 bg-marcelcar-highlight mb-4 lg:mb-6"></div>
            <p className="text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
              Nuestro proceso está diseñado para garantizar resultados excepcionales y la máxima satisfacción de
              nuestros clientes.
            </p>

            <div className="space-y-6 lg:space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 lg:gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-marcelcar-highlight/10 flex items-center justify-center text-marcelcar-highlight font-bold text-sm lg:text-base group-hover:bg-marcelcar-highlight group-hover:text-white transition-all duration-300">
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-semibold mb-2 group-hover:text-marcelcar-highlight transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/trabajo.jpg?height=1200&width=800"
                  alt="Proceso de trabajo en MarcelCar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-marcelcar-dark text-white p-4 sm:p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-base lg:text-lg font-semibold mb-3">¿Por qué elegirnos?</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm lg:text-base">
                    <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-marcelcar-highlight mr-2 flex-shrink-0" />
                    <span>Técnicos certificados</span>
                  </li>
                  <li className="flex items-center text-sm lg:text-base">
                    <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-marcelcar-highlight mr-2 flex-shrink-0" />
                    <span>Materiales premium</span>
                  </li>
                  <li className="flex items-center text-sm lg:text-base">
                    <CheckCircle className="h-4 w-4 lg:h-5 lg:w-5 text-marcelcar-highlight mr-2 flex-shrink-0" />
                    <span>Garantía por escrito</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
