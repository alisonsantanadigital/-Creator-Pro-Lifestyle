'use client';

import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { EditorialImage } from '@/components/EditorialImage';
import { CREATOR_PROFILE, HERO_MEDIA } from '@/lib/creator-data';

export function HeroSection() {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handlePartnerCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#contato');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSocialPreview = (platform: 'Instagram' | 'TikTok', handle: string) => {
    setSocialNotice(
      `Perfil demonstrativo ${platform} (${handle}) · Vitrine ilustrativa Creator Pro.`
    );
  };

  return (
    <section id="topo" className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="flex flex-col justify-between lg:col-span-6 lg:py-4">
            <div className="flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-[#8A6836]">
              <span>{CREATOR_PROFILE.productName}</span>
              <span aria-hidden="true" className="text-[#B08D57]">
                ·
              </span>
              <span>{CREATOR_PROFILE.brandHouse}</span>
            </div>

            <div className="my-10 lg:my-auto lg:py-10">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-[#4A4640]">
                <span>{CREATOR_PROFILE.role}</span>
                <span aria-hidden="true" className="text-[#B08D57]">
                  ·
                </span>
                <span>{CREATOR_PROFILE.segments}</span>
              </div>

              <h1 className="mt-4 font-serif text-[clamp(2.85rem,5.4vw,4.75rem)] leading-[0.98] font-normal tracking-[-0.02em] text-[#171614] text-balance">
                {CREATOR_PROFILE.name}
              </h1>

              <div className="mt-6 h-px w-14 bg-[#B08D57]" aria-hidden="true" />

              <p className="mt-6 max-w-md font-serif text-2xl leading-[1.32] italic text-[#2D2A26] sm:text-[28px]">
                “{CREATOR_PROFILE.tagline}”
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#contato"
                  onClick={handlePartnerCta}
                  className="group inline-flex min-h-[48px] items-center justify-center gap-3 border border-[#171614] bg-[#171614] px-7 py-3.5 text-sm font-medium text-[#FAF7F2] whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[#8A6836] hover:bg-[#26231F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6836]"
                >
                  <span>{CREATOR_PROFILE.heroCta}</span>
                  <ArrowRight className="h-4 w-4 text-[#D4B98C] transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Bottom Discrete Social Links */}
            <div className="border-t border-[#171614]/12 pt-5">
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#4A4640]">
                <button
                  type="button"
                  onClick={() =>
                    handleSocialPreview('Instagram', CREATOR_PROFILE.instagramHandle)
                  }
                  className="inline-flex min-h-[40px] items-center gap-1.5 font-medium text-[#171614] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#8A6836] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6836]"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#8A6836]" />
                </button>

                <span aria-hidden="true" className="text-[#171614]/25">
                  /
                </span>

                <button
                  type="button"
                  onClick={() =>
                    handleSocialPreview('TikTok', CREATOR_PROFILE.tiktokHandle)
                  }
                  className="inline-flex min-h-[40px] items-center gap-1.5 font-medium text-[#171614] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#8A6836] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6836]"
                >
                  <span>TikTok</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#8A6836]" />
                </button>

                <span className="text-xs text-[#6B6359]">
                  {CREATOR_PROFILE.instagramHandle}
                </span>
              </div>

              <div aria-live="polite" className="min-h-[22px] pt-1.5">
                {socialNotice && (
                  <p className="text-xs text-[#6B6359]">{socialNotice}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Large Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0.92, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full border border-[#171614]/12 p-2.5 sm:p-3">
              <EditorialImage
                src={HERO_MEDIA.image}
                alt={HERO_MEDIA.imageAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                aspectClassName="aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[580px]"
                fallbackTitle={CREATOR_PROFILE.name}
                className="object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
