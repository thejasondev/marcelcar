"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "src" | "blurDataURL"> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
}

export default function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(true);
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  // Generate blur placeholder (very small base64 image)
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEDQIHq4C7aQAAAABJRU5ErkJggg==";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Image loading placeholder */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          aria-hidden="true"
        />
      )}

      <Image
        src={imgSrc}
        alt={alt}
        {...props}
        onError={handleError}
        onLoad={() => setIsLoading(false)}
        loading={priority ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL={blurDataURL}
        quality={quality}
        sizes={sizes}
        className={isLoading ? "opacity-0" : "opacity-100"}
      />
    </div>
  );
}
