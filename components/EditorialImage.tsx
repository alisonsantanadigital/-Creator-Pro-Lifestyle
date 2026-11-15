'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';

interface EditorialImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackTitle?: string;
  aspectClassName?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  fallbackTitle = 'Fotografia editorial',
  aspectClassName = 'aspect-[4/3]',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex w-full items-center justify-center overflow-hidden bg-[#EFE8DC] text-center ${aspectClassName} ${className}`}
      >
        <div className="px-6 py-8">
          <p className="font-serif text-lg text-[#4A4640]">{fallbackTitle}</p>
          <p className="mt-1 text-xs text-[#6E675E]">
            Acervo visual Creator Pro · Prumo Creators
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#EFE8DC] ${aspectClassName}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`object-cover ${className}`}
      />
    </div>
  );
}
