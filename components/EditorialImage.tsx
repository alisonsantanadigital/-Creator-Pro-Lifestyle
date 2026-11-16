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
  softFade?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  fallbackTitle = 'Fotografia editorial',
  aspectClassName = 'aspect-[4/3]',
  softFade = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex w-full items-center justify-center overflow-hidden bg-[#F5F1E9] text-center ${aspectClassName} ${className}`}
      >
        <div className="px-6 py-8">
          <p className="font-serif text-lg text-[#282824]">{fallbackTitle}</p>
          <p className="mt-1 text-xs text-[#39483C]">
            Acervo visual · {alt ? 'Lívia Martins' : 'Creator Pro'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${softFade ? 'bg-transparent' : 'bg-[#F5F1E9]'} ${aspectClassName}`}
    >
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
