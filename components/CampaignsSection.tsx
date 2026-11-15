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

  return (
    <section
      id="campanhas"
      aria-labelledby="campanhas-heading"
      className="border-t border-[#171614]/12 py-20 sm:py-24 lg:py-28"
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
            className="flex flex-wrap items-center gap-6"
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
                  className={`relative min-h-[40px] py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6836] ${
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
          className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2"
        >
          {filteredCampaigns.map((campaign) => (
            <article key={campaign.id} className="group flex flex-col">
              <div className="border border-[#171614]/12 p-2.5 transition-colors duration-200 group-hover:border-[#B08D57]/60">
                <EditorialImage
                  src={campaign.image}
                  alt={campaign.imageAlt}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  aspectClassName="aspect-[4/3]"
                  fallbackTitle={campaign.title}
                  className="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#6B6359]">
                <span className="font-medium text-[#8A6836]">{campaign.category}</span>
                <span aria-hidden="true" className="text-[#B08D57]">
                  ·
                </span>
                <span>{campaign.demoTag}</span>
                <span aria-hidden="true" className="text-[#B08D57]">
                  ·
                </span>
                <span>{campaign.deliverable}</span>
              </div>

              <div className="mt-2.5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-[#171614] sm:text-[28px]">
                  {campaign.title}
                </h3>
                <span className="text-xs text-[#595249] whitespace-nowrap shrink-0">
                  {campaign.conceptBrand}
                </span>
              </div>

              <p className="mt-2.5 max-w-[54ch] text-sm leading-relaxed text-[#4A4640]">
                {campaign.summary}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
