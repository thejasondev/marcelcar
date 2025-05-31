# Optimización de Imágenes para MarcelCar

Este directorio contiene las imágenes optimizadas para el sitio web de MarcelCar.

## Estructura de Directorios

- `/hero/`: Imágenes principales y fondos (1920px ancho máximo)
- `/gallery/`: Imágenes para la galería de trabajos (800px ancho para desktop)
- `/testimonials/`: Avatares e imágenes de testimonios (150px ancho recomendado)
- `/optimized/`: Otras imágenes optimizadas

## Buenas Prácticas

1. **Formato de Imagen**:

   - Usa WebP como formato principal (mejor compresión y calidad)
   - Proporciona JPG como fallback para navegadores antiguos si es necesario

2. **Tamaños Recomendados**:

   - Hero: 1920×1080px (desktop), 750×1200px (móvil)
   - Galería: 800×600px (desktop), 400×300px (móvil)
   - Testimonios/avatares: 150×150px

3. **Optimización**:

   - Comprime imágenes a 75-85% de calidad
   - Elimina metadatos innecesarios
   - Redimensiona a tamaños apropiados para diferentes dispositivos

4. **En el Código**:
   - Usa el componente `OptimizedImage` para imágenes importantes
   - Incluye siempre el atributo `sizes` con la propiedad `fill`
   - Usa `priority` solo para imágenes above-the-fold
   - Proporciona un `blurDataURL` o `placeholder` para mejorar la carga

## Herramientas Recomendadas

- [Squoosh](https://squoosh.app/) - Herramienta online gratuita
- [TinyPNG](https://tinypng.com/) - Para optimizar PNG y JPG
- [Convertio](https://convertio.co/jpg-webp/) - Para convertir a WebP

## Ejemplo de Uso en Componentes

```jsx
import OptimizedImage from "@/components/optimized-image";

// En un componente:
<OptimizedImage
  src="/images/hero/hero-section.webp"
  alt="Descripción de la imagen"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={80}
  priority={true}
/>;
```

## Proceso de Optimización Recomendado

1. Copia la imagen original a una carpeta temporal
2. Optimiza usando Squoosh.app o herramienta similar
3. Guarda la versión optimizada en la carpeta correspondiente
4. Actualiza las rutas en el código

Para más detalles, consulta el script en `scripts/optimize-images.js`
