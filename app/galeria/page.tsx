"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    id: number
    title: string
    category: string
    description: string
    imageBefore: string
    imageAfter: string
  } | null>(null)

  const galleryItems = [
    {
      id: 1,
      title: "Restauración Completa",
      category: "pintura",
      description: "Restauración completa de la pintura de un BMW Serie 3 con daños por exposición solar y oxidación.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Reparación de Golpe",
      category: "chapa",
      description: "Reparación de un golpe lateral en un Audi A4 con sustitución parcial de la puerta y pintado.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Eliminación de Rayones",
      category: "detallado",
      description:
        "Eliminación de rayones profundos en la carrocería de un Mercedes Clase C mediante pulido y repintado parcial.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Restauración de Clásico",
      category: "restauracion",
      description:
        "Restauración completa de un Seat 600 de 1970, incluyendo tratamiento anticorrosión y pintura original.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Reparación de Granizo",
      category: "chapa",
      description: "Reparación de múltiples abolladuras por granizo en el techo y capó de un Volkswagen Golf.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Cambio de Color",
      category: "pintura",
      description: "Cambio completo de color de un Ford Focus de gris a azul metalizado con acabado premium.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 7,
      title: "Pulido de Carrocería",
      category: "detallado",
      description: "Pulido completo y tratamiento cerámico en un Porsche 911 para protección y brillo duradero.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 8,
      title: "Restauración de Moto",
      category: "restauracion",
      description: "Restauración completa del depósito y carenado de una Harley Davidson con pintura personalizada.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 9,
      title: "Reparación de Parachoques",
      category: "chapa",
      description: "Reparación y pintado de parachoques delantero de un Toyota Corolla tras colisión leve.",
      imageBefore: "/placeholder.svg?height=600&width=800",
      imageAfter: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-marcelcar-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Galería de Trabajos</h1>
            <div className="w-20 h-1 bg-marcelcar-highlight mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground mb-8">
              Descubre la calidad de nuestro trabajo a través de estos ejemplos de transformaciones que hemos realizado.
              Pasa el cursor sobre las imágenes para ver el antes y después.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="todos" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="chapa">Chapa</TabsTrigger>
                <TabsTrigger value="pintura">Pintura</TabsTrigger>
                <TabsTrigger value="restauracion">Restauración</TabsTrigger>
                <TabsTrigger value="detallado">Detallado</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="todos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item) => (
                  <GalleryItem key={item.id} item={item} onClick={() => setSelectedImage(item)} />
                ))}
              </div>
            </TabsContent>

            {["chapa", "pintura", "restauracion", "detallado"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {galleryItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <GalleryItem key={item.id} item={item} onClick={() => setSelectedImage(item)} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Detail Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <DialogDescription>{selectedImage?.description}</DialogDescription>
          </DialogHeader>

          {selectedImage && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-2">
                <p className="font-semibold text-center">Antes</p>
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.imageBefore || "/placeholder.svg"}
                    alt={`Antes - ${selectedImage.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-center">Después</p>
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.imageAfter || "/placeholder.svg"}
                    alt={`Después - ${selectedImage.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center mt-4">
            <Button
              className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white"
              onClick={() => setSelectedImage(null)}
            >
              Cerrar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface GalleryItemProps {
  item: {
    id: number
    title: string
    category: string
    description: string
    imageBefore: string
    imageAfter: string
  }
  onClick: () => void
}

function GalleryItem({ item, onClick }: GalleryItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          <Image
            src={item.imageBefore || "/placeholder.svg"}
            alt={`Antes - ${item.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Antes</span>
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          <Image
            src={item.imageAfter || "/placeholder.svg"}
            alt={`Después - ${item.title}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Después</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-marcelcar-dark">
        <span className="text-sm text-marcelcar-highlight font-medium capitalize">{item.category}</span>
        <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
      </div>
    </div>
  )
}
