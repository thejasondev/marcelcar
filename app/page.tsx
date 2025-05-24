import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import TestimonialsSection from "@/components/testimonials-section"
import GalleryPreview from "@/components/gallery-preview"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <GalleryPreview />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}
