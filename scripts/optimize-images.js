// Archivo: optimize-images.js
// Este script proporciona instrucciones para optimizar imágenes manualmente
// y comandos para automatizar el proceso con Sharp si está disponible

console.log("======================================================");
console.log("GUÍA DE OPTIMIZACIÓN DE IMÁGENES PARA MARCELCAR");
console.log("======================================================");

console.log("\n1. RECOMENDACIONES GENERALES:");
console.log("----------------------------------------------------");
console.log(
  "- Usa formato WebP para todas las imágenes (mejor compresión, soportado por navegadores modernos)"
);
console.log("- Elimina parámetros de consulta en las URLs de imágenes");
console.log(
  "- Siempre incluye el atributo 'sizes' en imágenes con la propiedad 'fill'"
);
console.log(
  "- Usa imágenes responsive con múltiples tamaños para diferentes dispositivos"
);
console.log(
  "- Comprime las imágenes a 75-85% de calidad (balance entre calidad y tamaño)"
);

console.log("\n2. ESTRUCTURA DE DIRECTORIOS RECOMENDADA:");
console.log("----------------------------------------------------");
console.log("public/");
console.log("  ├── images/");
console.log("  │   ├── hero/         # Imágenes de cabecera optimizadas");
console.log("  │   ├── gallery/      # Imágenes de galería optimizadas");
console.log("  │   ├── testimonials/ # Avatares e imágenes de testimonios");
console.log("  │   └── icons/        # Iconos e imágenes pequeñas");

console.log("\n3. TAMAÑOS RECOMENDADOS:");
console.log("----------------------------------------------------");
console.log("- Hero section: 1920x1080px (desktop), 750x1200px (móvil)");
console.log("- Galerías: 800x600px (desktop), 400x300px (móvil)");
console.log("- Fotos de servicios: 600x400px");
console.log("- Avatares/Testimonios: 150x150px");

console.log("\n4. HERRAMIENTAS DE OPTIMIZACIÓN ONLINE:");
console.log("----------------------------------------------------");
console.log("- https://squoosh.app/ (recomendado, no requiere registro)");
console.log("- https://tinypng.com/ (para PNG y JPG)");
console.log("- https://compressor.io/ (múltiples formatos)");
console.log("- https://convertio.co/jpg-webp/ (conversión a WebP)");

console.log("\n5. CÓMO OPTIMIZAR TUS IMÁGENES ACTUALES:");
console.log("----------------------------------------------------");
console.log("a) Convierte hero-section.jpg, capilla.jpg y trabajo.jpg a WebP:");
console.log("   1. Sube las imágenes a https://squoosh.app/");
console.log("   2. Selecciona WebP como formato de salida");
console.log("   3. Ajusta la calidad a 80%");
console.log("   4. Redimensiona hero-section a 1920px de ancho máximo");
console.log("   5. Guarda las imágenes en public/images/hero/");

console.log("\nb) Crea versiones responsive de las imágenes principales:");
console.log("   - versión grande: 1920px de ancho (desktop)");
console.log("   - versión mediana: 1200px de ancho (tablet)");
console.log("   - versión pequeña: 750px de ancho (móvil)");

console.log("\n6. ACTUALIZA TUS COMPONENTES:");
console.log("----------------------------------------------------");
console.log("Ejemplo para hero-section.tsx:");
console.log(`
import OptimizedImage from "@/components/optimized-image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 h-full w-full">
        <OptimizedImage
          src="/images/hero/hero-section.webp"
          alt="Coche restaurado por MarcelCar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
        {/* ... */}
      </div>
    </section>
  );
}
`);

console.log("\n7. AUTOMATIZACIÓN CON SHARP (OPCIONAL):");
console.log("----------------------------------------------------");
console.log("Si quieres automatizar este proceso, puedes instalar Sharp:");
console.log("npm install sharp");
console.log(
  "\nLuego crea un script de Node.js para procesar tus imágenes automáticamente."
);

console.log("\n======================================================");
console.log("COMANDOS ÚTILES PARA OPTIMIZAR IMÁGENES CON SHARP");
console.log("======================================================");
console.log(`
// Instalar Sharp
npm install sharp

// Crear un script de optimización (optimize.js)
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ejemplo: optimizar hero-section.jpg
sharp('public/hero-section.jpg')
  .webp({ quality: 80 })
  .resize(1920, null, { withoutEnlargement: true })
  .toFile('public/images/hero/hero-section.webp')
  .then(info => console.log('Imagen optimizada:', info))
  .catch(err => console.error('Error:', err));
`);

console.log("\n======================================================");
