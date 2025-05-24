"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
  webpSrc?: string;
  avifSrc?: string;
}

export default function OptimizedImage({
  src,
  fallbackSrc,
  webpSrc,
  avifSrc,
  alt,
  priority,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detectar soporte para formatos modernos
    const checkImageSupport = async () => {
      // Prioridad: AVIF > WebP > Original
      if (avifSrc && hasAvifSupport()) {
        setImgSrc(avifSrc);
      } else if (webpSrc && hasWebPSupport()) {
        setImgSrc(webpSrc);
      } else {
        setImgSrc(src);
      }
      setIsLoading(false);
    };

    checkImageSupport();
  }, [src, webpSrc, avifSrc]);

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
      {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <Image
        src={imgSrc || src}
        alt={alt}
        {...props}
        onError={handleError}
        loading={priority ? undefined : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7aQAAAABJRU5ErkJggg=="
        priority={priority}
      />
    </picture>
  );
}
