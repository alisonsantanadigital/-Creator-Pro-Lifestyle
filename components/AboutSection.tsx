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
      className="relative scroll-mt-20 overflow-hidden bg-transparent py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Borderless Secondary Portrait Dissolving Softly Into Global Backdrop */}
          <motion.div
            style={{
              ...(prefersReducedMotion ? {} : { y: imageParallaxY }),
              maskImage:
                'radial-gradient(ellipse 78% 80% at 50% 48%, #000000 52%, rgba(0,0,0,0.82) 70%, rgba(0,0,0,0) 99%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 78% 80% at 50% 48%, #000000 52%, rgba(0,0,0,0.82) 70%, rgba(0,0,0,0) 99%)',
            }}
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0.55, scale: 0.985 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[290px] sm:max-w-[420px] lg:col-span-6 lg:mx-0 lg:max-w-[540px]"
          >
            <EditorialImage
              src={ABOUT_SECTION.image}
              alt={ABOUT_SECTION.imageAlt}
              softFade
              sizes="(max-width: 640px) 290px, (max-width: 1024px) 420px, 540px"
              aspectClassName="aspect-[16/9]"
              fallbackTitle="Lívia Martins · Estúdio"
              className="object-[50%_22%]"
            />
          </motion.div>

          {/* Concise Narrative Integrated Directly on Global Canvas */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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

            <div className="mt-6 max-w-[48ch] space-y-4 text-[15.5px] leading-[1.75] text-[#4E4E47]">
              {ABOUT_SECTION.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Structured Content Summary */}
            <dl className="relative mt-10 grid grid-cols-1 gap-6 pt-7 sm:grid-cols-3">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-[#DCD1C0]/80 via-[#DCD1C0]/45 to-transparent"
              />
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
