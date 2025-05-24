import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-marcelcar-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            ¿Listo para Transformar tu Vehículo?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 px-4">
            Contáctanos hoy mismo para obtener un presupuesto sin compromiso y
            descubre por qué somos la mejor opción para el cuidado de tu
            automóvil.
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
              <Link href="/contacto#form">
                <Mail className="mr-2 h-4 w-4 lg:h-5 lg:w-5" /> Enviar Mensaje
              </Link>
            </Button>
          </div>
          <p className="mt-6 lg:mt-8 text-sm lg:text-base text-gray-400">
            Respuesta rápida garantizada. Presupuestos sin cargo.
          </p>
        </div>
      </div>
    </section>
  );
}
