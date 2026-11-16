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
      className="scroll-mt-20 bg-[#39483C] py-20 text-[#F5F1E9] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Secondary Editorial Portrait with Mask Reveal + Subtle Parallax */}
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
            className="lg:col-span-5"
          >
            <figure className="border border-[#A8B2A0]/35 bg-[#2F3C32] p-2.5 sm:p-3.5">
              <EditorialImage
                src={ABOUT_SECTION.image}
                alt={ABOUT_SECTION.imageAlt}
                sizes="(max-width: 1024px) 100vw, 42vw"
                aspectClassName="aspect-[4/3]"
                fallbackTitle="Lívia Martins · Estúdio"
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-2 pt-3 pb-1 text-xs text-[#DCD1C0]">
                <span>{ABOUT_SECTION.imageCaptionLeft}</span>
                <span className="text-[#A8B2A0]">{ABOUT_SECTION.imageCaptionRight}</span>
              </figcaption>
            </figure>
          </motion.div>

          {/* Editorial Narrative */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-medium tracking-[0.14em] text-[#A8B2A0]">
              {ABOUT_SECTION.kicker}
            </p>
            <h2
              id="sobre-heading"
              className="mt-3 max-w-2xl font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#F5F1E9] text-balance sm:text-4xl lg:text-[44px]"
            >
              {ABOUT_SECTION.headline}
            </h2>

            <div className="mt-6 h-px w-14 bg-[#BD765B]" aria-hidden="true" />

            <div className="mt-7 max-w-[62ch] space-y-5 text-[15.5px] leading-[1.75] text-[#EFE9DD]">
              {ABOUT_SECTION.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Structured Content Summary */}
            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-[#A8B2A0]/30 pt-7 sm:grid-cols-3">
              {ABOUT_SECTION.pillars.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium text-[#A8B2A0]">{item.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-[#F5F1E9]">
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
