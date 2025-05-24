import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-marcelcar-dark text-marcelcar-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-marcelcar-highlight">
                Marcel<span className="text-white">Car</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs">
              Especialistas en reparación, chapa y pintura de automóviles con más de 15 años de experiencia brindando
              servicios de calidad.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-marcelcar-highlight transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-marcelcar-highlight transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-gray-300 hover:text-marcelcar-highlight transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-300 hover:text-marcelcar-highlight transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-marcelcar-highlight transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios#chapa"
                  className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
                >
                  Reparación de Chapa
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#pintura"
                  className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
                >
                  Pintura Automotriz
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#restauracion"
                  className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
                >
                  Restauración
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#pulido"
                  className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
                >
                  Pulido y Detallado
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios#presupuesto"
                  className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
                >
                  Presupuestos Sin Cargo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-marcelcar-highlight shrink-0" />
                <span className="text-gray-300">Av. Siempreviva 742, Springfield, ES</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-marcelcar-highlight shrink-0" />
                <a href="tel:+34600123456" className="text-gray-300 hover:text-marcelcar-highlight transition-colors">
                  +34 600 123 456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-marcelcar-highlight shrink-0" />
                <a
                  href="mailto:info@marcelcar.es"
                  className="text-gray-300 hover:text-marcelcar-highlight transition-colors"
                >
                  info@marcelcar.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {currentYear} MarcelCar. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacidad" className="text-sm text-gray-400 hover:text-marcelcar-highlight transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-sm text-gray-400 hover:text-marcelcar-highlight transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
