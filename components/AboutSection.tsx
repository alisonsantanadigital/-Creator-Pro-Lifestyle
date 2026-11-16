'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useRef } from 'react';
import { EditorialImage } from '@/components/EditorialImage';
import { ABOUT_SECTION } from '@/lib/creator-data';

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [18, -18]);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      aria-labelledby="sobre-heading"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-white/35 via-[#F5F1E9]/45 to-white/45 py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[14%] -z-10 h-[360px] w-[420px] -translate-y-1/2 rounded-[52%_48%_44%_56%/46%_54%_46%_54%] bg-[#A8B2A0]/16 blur-[100px]"
      />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Secondary Editorial Portrait with Mask Reveal + White Gallery Relief */}
          <motion.div
            style={prefersReducedMotion ? undefined : { y: imageParallaxY }}
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0.7, clipPath: 'inset(8% 0% 0% 0%)' }
            }
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <figure className="border border-[#DCD1C0]/80 bg-white/90 p-2.5 shadow-[0_24px_60px_-28px_rgba(40,40,36,0.12)] ring-1 ring-inset ring-white sm:p-3.5">
              <EditorialImage
                src={ABOUT_SECTION.image}
                alt={ABOUT_SECTION.imageAlt}
                sizes="(max-width: 1024px) 100vw, 48vw"
                aspectClassName="aspect-[4/3]"
                fallbackTitle="Lívia Martins · Estúdio"
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-2 pt-3 pb-1 text-xs text-[#585850]">
                <span>{ABOUT_SECTION.imageCaptionLeft}</span>
                <span className="text-[#39483C]">{ABOUT_SECTION.imageCaptionRight}</span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Editorial Narrative */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <p className="text-xs font-medium tracking-[0.14em] text-[#9E593F]">
              {ABOUT_SECTION.kicker}
            </p>
            <h2
              id="sobre-heading"
              className="mt-3 max-w-xl font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#282824] text-balance sm:text-4xl lg:text-[44px]"
            >
              {ABOUT_SECTION.headline}
            </h2>

            <div className="mt-6 h-px w-14 bg-[#BD765B]" aria-hidden="true" />

            <div className="mt-6 max-w-[50ch] space-y-4 text-[15.5px] leading-[1.75] text-[#4E4E47]">
              {ABOUT_SECTION.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Structured Content Summary */}
            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-[#DCD1C0]/80 pt-7 sm:grid-cols-3">
              {ABOUT_SECTION.pillars.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium text-[#39483C]">{item.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-[#282824]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
