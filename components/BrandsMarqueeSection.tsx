'use client';

import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { BRAND_PARTNERS, BRANDS_SECTION } from '@/lib/creator-data';

export function BrandsMarqueeSection() {
  const prefersReducedMotion = useReducedMotion();
  const hasVerifiedBrands = BRAND_PARTNERS.length > 0;

  return (
    <section
      id="marcas"
      aria-labelledby="marcas-heading"
      className="scroll-mt-20 overflow-hidden bg-transparent py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#9E593F]">
              {BRANDS_SECTION.kicker}
            </p>
            <h2
              id="marcas-heading"
              className="mt-2 max-w-2xl font-serif text-2xl leading-[1.18] font-normal tracking-tight text-[#282824] text-balance sm:text-3xl"
            >
              {BRANDS_SECTION.headline}
            </h2>
          </div>

          <p className="text-xs font-medium text-[#39483C]">
            {hasVerifiedBrands
              ? 'Parcerias comprovadas'
              : 'Preparado para marcas reais'}
          </p>
        </motion.div>
      </div>

      {/* Infinite Editorial Marquee with CSS Edge-Mask Fade */}
      <div
        className="group/marquee relative mt-10 py-6"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[#DCD1C0]/75 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#DCD1C0]/75 to-transparent"
        />

        {hasVerifiedBrands ? (
          <div className="flex w-max animate-marquee items-center gap-12 px-6">
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="flex min-w-[160px] items-center justify-center px-4 py-2 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                {brand.logoSrc ? (
                  <div className="relative h-9 w-36">
                    <Image
                      src={brand.logoSrc}
                      alt={brand.name}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="font-serif text-xl tracking-wide text-[#282824]">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex w-max animate-marquee items-center gap-6 px-6">
            {[...BRANDS_SECTION.placeholderSlots, ...BRANDS_SECTION.placeholderSlots].map(
              (slotLabel, idx) => (
                <div
                  key={`${slotLabel}-${idx}`}
                  className="flex min-h-[56px] min-w-[260px] items-center justify-center border border-dashed border-[#A8B2A0]/75 bg-white/55 px-6 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-[#BD765B]"
                >
                  <span className="text-xs font-medium tracking-wide text-[#4E4E47] transition-colors duration-300 hover:text-[#39483C]">
                    {slotLabel}
                  </span>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {!hasVerifiedBrands && (
        <div className="mx-auto mt-5 max-w-[1240px] px-6 sm:px-10">
          <p className="max-w-[76ch] text-xs leading-relaxed text-[#585850]">
            {BRANDS_SECTION.emptyNotice}
          </p>
        </div>
      )}
    </section>
  );
}
