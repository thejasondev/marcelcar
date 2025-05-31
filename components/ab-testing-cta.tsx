"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

interface ABTestingCtaProps {
  variant?: "primary" | "secondary";
  className?: string;
}

export default function ABTestingCta({
  variant = "primary",
  className = "",
}: ABTestingCtaProps) {
  const [testVariant, setTestVariant] = useState<"A" | "B" | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Asignar aleatoriamente una variante A/B
    const variant = Math.random() > 0.5 ? "A" : "B";
    setTestVariant(variant);

    // Registrar la variante mostrada
    if (typeof window !== "undefined") {
      console.log(`CTA Test: Showing variant ${variant}`);
      // Aquí se podría enviar esta información a un servicio de analytics
    }
  }, []);

  const trackInteraction = (action: string) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      // Registrar la interacción
      console.log(`CTA Test: User clicked ${action} on variant ${testVariant}`);
      // Aquí se podría enviar esta información a un servicio de analytics
    }
  };

  if (!testVariant) return null;

  if (testVariant === "A") {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 w-full ${className}`}>
        <Button
          asChild
          size="lg"
          className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white py-6 sm:py-4 text-base w-full sm:w-auto"
          onClick={() => trackInteraction("call")}
        >
          <Link href="https://wa.me/5491133333333?text=Hola,%20quiero%20contactar%20a%20Marcel%20Car%20para%20obtener%20un%20presupuesto">
            <Phone className="mr-2 h-5 w-5" /> Contactar ahora
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-marcelcar-highlight text-marcelcar-highlight hover:bg-marcelcar-highlight/10 py-6 sm:py-4 text-base w-full sm:w-auto"
          onClick={() => trackInteraction("email")}
        >
          <Link href="/contacto#form">
            <Mail className="mr-2 h-5 w-5" /> Enviar Mensaje
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-3 w-full ${className}`}>
      <Button
        asChild
        size="lg"
        className="bg-marcelcar-highlight hover:bg-marcelcar-accent text-white py-6 sm:py-4 text-base w-full sm:w-auto"
        onClick={() => trackInteraction("free_quote")}
      >
        <Link href="/contacto">Presupuesto Gratuito</Link>
      </Button>
      <Button
        asChild
        variant={variant === "primary" ? "outline" : "default"}
        size="lg"
        className={
          variant === "primary"
            ? "border-marcelcar-highlight text-marcelcar-highlight hover:bg-marcelcar-highlight/10 py-6 sm:py-4 text-base w-full sm:w-auto"
            : "bg-marcelcar-accent hover:bg-marcelcar-dark text-white py-6 sm:py-4 text-base w-full sm:w-auto"
        }
        onClick={() => trackInteraction("gallery")}
      >
        <Link href="/galeria">
          Ver Trabajos <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
