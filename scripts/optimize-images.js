// Archivo: optimize-images.js
// Este script ayuda a generar instrucciones para optimizar manualmente las imágenes
// Se usa como referencia ya que no estamos usando sharp

console.log("======================================================");
console.log("INSTRUCCIONES PARA OPTIMIZACIÓN MANUAL DE IMÁGENES");
console.log("======================================================");
console.log(
  "\nPara mejorar el rendimiento de tu sitio web, es recomendable optimizar las imágenes siguiendo estos pasos:"
);
console.log(
  "\n1. Optimiza tus imágenes usando alguna herramienta online como:"
);
console.log("   - https://squoosh.app/ (recomendado, no requiere registro)");
console.log("   - https://tinypng.com/ (para PNG y JPG)");
console.log("   - https://compressor.io/");
console.log("\n2. Considera estos ajustes para cada tipo de imagen:");
console.log(
  "   - Imágenes de fondo/hero: 1920px de ancho máximo, formato WebP"
);
console.log("   - Imágenes de contenido: 1200px de ancho máximo, formato WebP");
console.log(
  "   - Imágenes de galería: versiones de 800px y 400px (móvil), formato WebP"
);
console.log(
  "\n3. Guarda las versiones optimizadas en la carpeta 'public/images/optimized/'"
);
console.log(
  "\n4. Actualiza las rutas en el código para usar las imágenes optimizadas"
);
console.log(
  "\nEjemplo: cambiar '/hero-section.jpg' a '/images/optimized/hero-section.webp'"
);
console.log("\n======================================================");
console.log("\nTamaños de imagen recomendados:");
console.log("------------------------------------------------------");
console.log("- Hero section: 1920x1080px (desktop), 750x1200px (móvil)");
console.log("- Galerías: 800x600px (desktop), 400x300px (móvil)");
console.log("- Fotos de servicios: 600x400px");
console.log("- Avatares/Testimonios: 150x150px");
console.log("\n======================================================");
console.log("\nRecomendaciones para optimización:");
console.log("------------------------------------------------------");
console.log("1. Reducir la calidad a 75-85% (generalmente imperceptible)");
console.log(
  "2. Usar WebP siempre que sea posible (soportado por todos los navegadores modernos)"
);
console.log("3. Eliminar metadatos innecesarios de las imágenes");
console.log(
  "4. Considerar una versión borrosa/de baja resolución para precargar"
);
console.log("\n======================================================");
