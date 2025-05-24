import Image from "next/image"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="h-10 w-10 text-marcelcar-highlight" />,
      title: "Excelencia",
      description: "Nos esforzamos por superar las expectativas en cada trabajo que realizamos.",
    },
    {
      icon: <Users className="h-10 w-10 text-marcelcar-highlight" />,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la honestidad y transparencia.",
    },
    {
      icon: <Clock className="h-10 w-10 text-marcelcar-highlight" />,
      title: "Puntualidad",
      description: "Respetamos los plazos acordados y valoramos el tiempo de nuestros clientes.",
    },
  ]

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
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h1>
              <div className="w-20 h-1 bg-marcelcar-highlight mb-6"></div>
              <p className="text-lg text-muted-foreground mb-6">
                En MarcelCar nos dedicamos a la reparación y embellecimiento de vehículos con la máxima calidad y
                atención al detalle. Desde nuestra fundación en 2005, hemos trabajado con pasión para convertirnos en
                referentes del sector.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nuestro equipo está formado por profesionales altamente cualificados y en constante formación para
                ofrecer las técnicas más avanzadas y los mejores resultados.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                  <p>Más de 15 años de experiencia en el sector</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                  <p>Equipo de profesionales certificados</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                  <p>Materiales y productos de primera calidad</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                  <p>Garantía por escrito en todos nuestros trabajos</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Equipo de MarcelCar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
            <div className="w-20 h-1 bg-marcelcar-highlight mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estos son los principios que guían nuestro trabajo diario y nos permiten ofrecer un servicio excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-marcelcar-dark/30 rounded-lg shadow-lg">
                <div className="mx-auto mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <div className="w-20 h-1 bg-marcelcar-highlight mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce a los profesionales que hacen posible que tu vehículo luzca como nuevo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-marcelcar-dark/30 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-marcelcar-highlight font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Historia de MarcelCar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Historia</h2>
              <div className="w-20 h-1 bg-marcelcar-highlight mb-6"></div>
              <p className="text-lg text-muted-foreground mb-6">
                MarcelCar nació en 2005 de la pasión de Marcel Rodríguez por los automóviles y su deseo de ofrecer
                servicios de reparación de la más alta calidad.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Lo que comenzó como un pequeño taller con dos empleados, ha crecido hasta convertirse en un referente en
                el sector de la chapa y pintura, manteniendo siempre los valores de calidad, honestidad y excelencia que
                nos caracterizan.
              </p>
              <p className="text-lg text-muted-foreground">
                Hoy, con más de 15 años de experiencia, seguimos innovando y mejorando nuestros servicios para ofrecer
                las soluciones más avanzadas y eficientes a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
