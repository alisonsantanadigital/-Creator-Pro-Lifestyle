'use client';

import { ArrowRight, ArrowUpRight, Compass } from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useRef, useState } from 'react';
import { EditorialImage } from '@/components/EditorialImage';
import { MagneticCtaButton } from '@/components/MagneticCtaButton';
import { CREATOR_PROFILE, HERO_MEDIA } from '@/lib/creator-data';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const portraitParallaxY = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const floatingParallaxY = useTransform(scrollYProgress, [0, 1], [0, 22]);

  const nameWords = CREATOR_PROFILE.name.split(' ');

  const handlePartnerCta = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    const target = document.querySelector('#contato');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSocialPreview = (platform: 'Instagram' | 'TikTok', handle: string) => {
    setSocialNotice(
      `Perfil ilustrativo ${platform} (${handle}) · Demonstração Creator Pro.`
    );
  };

  return (
    <section
      id="topo"
      ref={sectionRef}
      className="relative scroll-mt-20 overflow-x-clip pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        {/* Top Editorial Margin Strip */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#DCD1C0]/75 pb-4 text-xs text-[#39483C]">
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -3, 0] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-2 font-medium"
          >
            <Compass className="h-3.5 w-3.5 text-[#BD765B]" aria-hidden="true" />
            <span>{CREATOR_PROFILE.headerMetaLeft}</span>
          </motion.div>

          <div className="flex items-center gap-2.5 text-[#585850]">
            <span>{CREATOR_PROFILE.headerMetaRight}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Staggered Editorial Reveal */}
          <div className="flex flex-col justify-between lg:col-span-6 lg:py-4">
            <div className="my-4 lg:my-auto lg:py-6">
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-medium tracking-[0.14em] text-[#9E593F]"
              >
                {CREATOR_PROFILE.role}
              </motion.p>

              {/* Staggered Word-by-Word Vertical Name Reveal */}
              <h1 className="mt-4 font-serif text-[clamp(3.25rem,6.6vw,5.6rem)] leading-[0.94] font-normal tracking-[-0.025em] text-[#282824] text-balance">
                {nameWords.map((word, index) => (
                  <span
                    key={word}
                    className="mr-[0.22em] inline-block overflow-hidden pb-1 align-bottom"
                  >
                    <motion.span
                      className="inline-block"
                      initial={
                        prefersReducedMotion ? false : { y: '105%', opacity: 0.01 }
                      }
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.08 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* Editorial Divider */}
              <motion.div
                initial={prefersReducedMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 h-px w-16 origin-left bg-[#BD765B]"
                aria-hidden="true"
              />

              {/* Direct Positioning Phrase */}
              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-lg font-serif text-[clamp(1.55rem,2.4vw,2.05rem)] leading-[1.24] text-[#39483C]"
              >
                {CREATOR_PROFILE.positioning}
              </motion.p>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                className="mt-3 max-w-[42ch] text-[15px] leading-[1.7] text-[#4E4E47]"
              >
                {CREATOR_PROFILE.introSummary}
              </motion.p>

              {/* Magnetic Primary CTA */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 flex flex-wrap items-center gap-5"
              >
                <MagneticCtaButton
                  href="#contato"
                  onClick={handlePartnerCta}
                  variant="olive"
                >
                  <span>{CREATOR_PROFILE.primaryCta}</span>
                  <ArrowRight className="h-4 w-4 text-[#DCD1C0] transition-transform duration-200 group-hover:translate-x-1" />
                </MagneticCtaButton>
              </motion.div>
            </div>

            {/* Bottom Discrete Social Links */}
            <div className="border-t border-[#DCD1C0]/75 pt-5">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[#4E4E47]">
                <button
                  type="button"
                  onClick={() =>
                    handleSocialPreview('Instagram', CREATOR_PROFILE.instagramHandle)
                  }
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-[#282824] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#39483C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39483C]"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#BD765B]" />
                </button>

                <span aria-hidden="true" className="text-[#A8B2A0]">
                  /
                </span>

                <button
                  type="button"
                  onClick={() =>
                    handleSocialPreview('TikTok', CREATOR_PROFILE.tiktokHandle)
                  }
                  className="inline-flex min-h-[44px] items-center gap-1.5 font-medium text-[#282824] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#39483C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39483C]"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#BD765B]" />
                </button>

                <span className="text-xs text-[#616158]">
                  {CREATOR_PROFILE.instagramHandle}
                </span>
              </div>

              <div aria-live="polite" className="min-h-[22px] pt-1">
                {socialNotice && (
                  <p className="text-xs text-[#616158]">{socialNotice}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Luminous Gallery Frame with Subtle Depth & Parallax */}
          <div className="relative lg:col-span-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[48%_52%_44%_56%/54%_46%_54%_46%] bg-[radial-gradient(circle,rgba(245,241,233,0.9)_0%,rgba(220,209,192,0.3)_55%,transparent_75%)] blur-2xl"
            />
            <motion.div
              style={prefersReducedMotion ? undefined : { y: portraitParallaxY }}
              initial={prefersReducedMotion ? false : { opacity: 0.85, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full border border-[#DCD1C0]/80 bg-white/88 p-2.5 shadow-[0_28px_68px_-30px_rgba(40,40,36,0.14)] ring-1 ring-inset ring-white sm:p-4"
            >
              {HERO_MEDIA.videoUrl ? (
                <div className="relative aspect-[3/4] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[620px]">
                  <video
                    src={HERO_MEDIA.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#282824]/25 via-transparent to-transparent"
                  />
                </div>
              ) : (
                <EditorialImage
                  src={HERO_MEDIA.image}
                  alt={HERO_MEDIA.imageAlt}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  aspectClassName="aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[620px]"
                  fallbackTitle={CREATOR_PROFILE.name}
                  className="object-top"
                />
              )}

              {/* Subtle Floating Editorial Caption Strip */}
              <motion.div
                style={prefersReducedMotion ? undefined : { y: floatingParallaxY }}
                className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 pb-0.5 text-xs text-[#585850]"
              >
                <span>{CREATOR_PROFILE.name}</span>
                <span className="font-medium text-[#39483C]">
                  {CREATOR_PROFILE.brandHouse} · {CREATOR_PROFILE.productName}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
