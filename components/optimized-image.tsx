"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
  webpSrc?: string;
  avifSrc?: string;
  mobileSrc?: string;
  mobileWebpSrc?: string;
}

export default function OptimizedImage({
  src,
  fallbackSrc,
  webpSrc,
  avifSrc,
  mobileSrc,
  mobileWebpSrc,
  alt,
  priority,
  sizes = "100vw",
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es dispositivo móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Detectar soporte para formatos modernos
    const checkImageSupport = async () => {
      // Verificar si es móvil y hay versión móvil disponible
      if (isMobile && mobileSrc) {
        if (mobileWebpSrc && hasWebPSupport()) {
          setImgSrc(mobileWebpSrc);
        } else {
          setImgSrc(mobileSrc);
        }
      } else {
        // Prioridad: AVIF > WebP > Original
        if (avifSrc && hasAvifSupport()) {
          setImgSrc(avifSrc);
        } else if (webpSrc && hasWebPSupport()) {
          setImgSrc(webpSrc);
        } else {
          setImgSrc(src);
        }
      }
      setIsLoading(false);
    };

    checkMobile();
    checkImageSupport();

    // Listener para cambios de tamaño de pantalla
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [src, webpSrc, avifSrc, mobileSrc, mobileWebpSrc, isMobile]);

  const hasWebPSupport = () => {
    // Simulamos detección de soporte WebP
    return true;
  };

  const hasAvifSupport = () => {
    // Simulamos detección de soporte AVIF
    return false;
  };

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  if (isLoading) {
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-800 animate-pulse ${props.className}`}
        style={{ height: props.height, width: props.width }}
      />
    );
  }

  return (
    <picture>
      {avifSrc && !isMobile && <source srcSet={avifSrc} type="image/avif" />}
      {webpSrc && !isMobile && <source srcSet={webpSrc} type="image/webp" />}
      {mobileWebpSrc && isMobile && (
        <source srcSet={mobileWebpSrc} type="image/webp" />
      )}
      {mobileSrc && isMobile && <source srcSet={mobileSrc} type="image/jpeg" />}
      <Image
        src={imgSrc || src}
        alt={alt}
        {...props}
        onError={handleError}
        loading={priority ? undefined : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7aQAAAABJRU5ErkJggg=="
        priority={priority}
        sizes={sizes}
      />
    </picture>
  );
}
