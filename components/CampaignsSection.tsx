'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { EditorialImage } from '@/components/EditorialImage';
import {
  CAMPAIGN_CATEGORIES,
  type CampaignCategory,
  DEMO_CAMPAIGNS,
} from '@/lib/creator-data';

export function CampaignsSection() {
  const [activeCategory, setActiveCategory] = useState<CampaignCategory>('Todas');

  const filteredCampaigns =
    activeCategory === 'Todas'
      ? DEMO_CAMPAIGNS
      : DEMO_CAMPAIGNS.filter((item) => item.category === activeCategory);

  const isAllSelected = activeCategory === 'Todas';
  const leadCampaign = isAllSelected ? filteredCampaigns[0] : null;
  const secondaryCampaigns = isAllSelected
    ? filteredCampaigns.slice(1)
    : filteredCampaigns;

  return (
    <section
      id="campanhas"
      aria-labelledby="campanhas-heading"
      className="scroll-mt-20 border-t border-[#171614]/12 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        {/* Section Header + Inline Segment Filter */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#171614]/12 pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-[0.14em] text-[#8A6836]">
              <span>Campanhas e Portfólio</span>
              <span aria-hidden="true" className="text-[#B08D57]">
                ·
              </span>
              <span className="tracking-normal text-[#6B6359]">
                Conceitos demonstrativos
              </span>
            </div>
            <h2
              id="campanhas-heading"
              className="mt-2.5 max-w-xl font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#171614] text-balance sm:text-4xl lg:text-[42px]"
            >
              Curadoria visual pensada para desejo de marca e conversão orgânica.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar campanhas demonstrativas por segmento"
            className="flex flex-wrap items-center gap-5 sm:gap-6"
          >
            {CAMPAIGN_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative min-h-[44px] py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6836] ${
                    isActive
                      ? 'text-[#171614]'
                      : 'text-[#6B6359] hover:text-[#171614]'
                  }`}
                >
                  {category}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute right-0 bottom-0 left-0 h-[1.5px] bg-[#8A6836]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Direct Editorial Gallery */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0.7, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12"
        >
          {/* Editorial Spotlight for Featured Campaign */}
          {leadCampaign && (
            <article className="group mb-12 grid grid-cols-1 items-center gap-8 border-b border-[#171614]/12 pb-12 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="border border-[#171614]/12 p-2.5 transition-colors duration-200 group-hover:border-[#B08D57]/60">
                  <EditorialImage
                    src={leadCampaign.image}
                    alt={leadCampaign.imageAlt}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    aspectClassName="aspect-[4/3]"
                    fallbackTitle={leadCampaign.title}
                    className="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#6B6359]">
                  <span className="font-medium text-[#8A6836]">
                    {leadCampaign.category}
                  </span>
                  <span aria-hidden="true" className="text-[#B08D57]">
                    ·
                  </span>
                  <span>{leadCampaign.demoTag}</span>
                </div>

                <h3 className="mt-3 font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#171614] sm:text-4xl">
                  {leadCampaign.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[#595249]">
                  {leadCampaign.conceptBrand} · {leadCampaign.deliverable}
                </p>

                <div className="mt-5 h-px w-10 bg-[#B08D57]" aria-hidden="true" />

                <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-[#4A4640]">
                  {leadCampaign.summary}
                </p>
              </div>
            </article>
          )}

          {/* Balanced Editorial Grid */}
          <div
            className={`grid grid-cols-1 gap-x-8 gap-y-12 ${
              isAllSelected
                ? 'md:grid-cols-3'
                : secondaryCampaigns.length > 1
                  ? 'md:grid-cols-2'
                  : 'md:grid-cols-2'
            }`}
          >
            {secondaryCampaigns.map((campaign) => (
              <article key={campaign.id} className="group flex flex-col">
                <div className="border border-[#171614]/12 p-2.5 transition-colors duration-200 group-hover:border-[#B08D57]/60">
                  <EditorialImage
                    src={campaign.image}
                    alt={campaign.imageAlt}
                    sizes={
                      isAllSelected
                        ? '(max-width: 768px) 100vw, 33vw'
                        : '(max-width: 768px) 100vw, 50vw'
                    }
                    aspectClassName="aspect-[4/3]"
                    fallbackTitle={campaign.title}
                    className="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6B6359]">
                  <span className="font-medium text-[#8A6836]">
                    {campaign.category}
                  </span>
                  <span aria-hidden="true" className="text-[#B08D57]">
                    ·
                  </span>
                  <span>{campaign.demoTag}</span>
                </div>

                <h3 className="mt-2 font-serif text-2xl leading-[1.18] font-normal tracking-tight text-[#171614] sm:text-[26px]">
                  {campaign.title}
                </h3>

                <p className="mt-1 text-xs text-[#595249]">
                  {campaign.conceptBrand} · {campaign.deliverable}
                </p>

                <p className="mt-3 max-w-[50ch] text-sm leading-relaxed text-[#4A4640]">
                  {campaign.summary}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
