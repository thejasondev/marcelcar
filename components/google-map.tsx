"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Car, ParkingMeterIcon as Parking, Navigation } from "lucide-react"

export default function GoogleMap() {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Simulamos la carga del mapa
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="map">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Mapa</span>
          </TabsTrigger>
          <TabsTrigger value="directions">
            <Navigation className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Cómo llegar</span>
          </TabsTrigger>
          <TabsTrigger value="streetview">
            <Car className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Street View</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="map" className="mt-0">
          <Card className="border-none shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                {mapLoaded ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6169929930856!2d-3.7031848842856566!3d40.41694897936409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880a907a8ff%3A0x1e57f3c1d5f7308!2sPuerta%20del%20Sol%2C%20Madrid!5e0!3m2!1ses!2ses!4v1653395771254!5m2!1ses!2ses"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de MarcelCar"
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-marcelcar-highlight"></div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Puntos de interés</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Nuestro Taller</p>
                      <p className="text-sm text-muted-foreground">Av. Siempreviva 742</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Car className="h-5 w-5 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Punto de recogida</p>
                      <p className="text-sm text-muted-foreground">Estación Central</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Parking className="h-5 w-5 text-marcelcar-highlight mr-2 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Aparcamiento</p>
                      <p className="text-sm text-muted-foreground">Parking público a 50m</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="directions" className="mt-0">
          <Card className="border-none shadow-lg">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-4">Cómo llegar a MarcelCar</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 flex items-center">
                    <Car className="h-5 w-5 text-marcelcar-highlight mr-2" /> En coche
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>Desde el centro: Toma la Avenida Principal dirección norte durante 3 km.</li>
                    <li>Desde la autopista A-2: Toma la salida 15 y sigue las indicaciones hacia Springfield.</li>
                    <li>
                      Disponemos de aparcamiento gratuito para clientes en nuestras instalaciones (plazas limitadas).
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">🚌 En transporte público</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>Metro: Línea 3, estación "Springfield", a 5 minutos a pie.</li>
                    <li>Autobús: Líneas 14, 27 y 45, parada "Avenida Siempreviva".</li>
                    <li>Tren de cercanías: Estación Central, a 10 minutos a pie.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">⏱️ Tiempos estimados</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>Desde el centro de la ciudad: 15 minutos en coche, 25 en transporte público.</li>
                    <li>Desde el aeropuerto: 30 minutos en coche, 45 en transporte público.</li>
                    <li>Desde la estación de tren: 10 minutos a pie, 5 en coche.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="streetview" className="mt-0">
          <Card className="border-none shadow-lg">
            <CardContent className="p-0">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                {mapLoaded ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1653396245144!6m8!1m7!1sCAoSLEFGMVFpcE9fS2FHYmFzVWFJNGFLRWJCcWJkNDFQUmJlSzRlNmJCcHpJTFE3!2m2!1d40.4169489!2d-3.7010015!3f180!4f0!5f0.7820865974627469"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Street View de MarcelCar"
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-marcelcar-highlight"></div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Vista exterior de nuestro taller</h3>
                <p className="text-muted-foreground">
                  Nuestro taller es fácilmente identificable por su fachada roja con el logo de MarcelCar. Contamos con
                  una amplia entrada y zona de recepción de vehículos.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
