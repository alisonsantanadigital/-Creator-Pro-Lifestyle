'use client';

import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { EditorialImage } from '@/components/EditorialImage';
import {
  CAMPAIGN_CATEGORIES,
  type CampaignCategory,
  type CampaignItem,
  DEMO_CAMPAIGNS,
} from '@/lib/creator-data';

function getSlideContainerClass(aspect: CampaignItem['aspect']): {
  widthClass: string;
  aspectClass: string;
} {
  switch (aspect) {
    case 'portrait':
      return {
        widthClass: 'w-[78vw] sm:w-[330px] lg:w-[360px]',
        aspectClass: 'aspect-[3/4]',
      };
    case 'wide':
      return {
        widthClass: 'w-[86vw] sm:w-[520px] lg:w-[580px]',
        aspectClass: 'aspect-[16/9]',
      };
    case 'landscape':
    default:
      return {
        widthClass: 'w-[82vw] sm:w-[410px] lg:w-[440px]',
        aspectClass: 'aspect-[4/3]',
      };
  }
}

export function CampaignsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<CampaignCategory>('Todas');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    hasDragged: false,
  });

  const filteredCampaigns =
    activeCategory === 'Todas'
      ? DEMO_CAMPAIGNS
      : DEMO_CAMPAIGNS.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (category: CampaignCategory) => {
    setActiveCategory(category);
    setActiveSlideIndex(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollToSlide = useCallback(
    (index: number) => {
      if (!trackRef.current) return;
      const clamped = Math.max(0, Math.min(filteredCampaigns.length - 1, index));
      const slideElements = trackRef.current.querySelectorAll<HTMLElement>(
        '[data-editorial-slide]'
      );
      const target = slideElements[clamped];
      if (target) {
        const containerLeft = trackRef.current.getBoundingClientRect().left;
        const targetLeft = target.getBoundingClientRect().left;
        const delta = targetLeft - containerLeft + trackRef.current.scrollLeft;
        trackRef.current.scrollTo({
          left: delta,
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
        setActiveSlideIndex(clamped);
      }
    },
    [filteredCampaigns.length, prefersReducedMotion]
  );

  const handleTrackScroll = () => {
    if (!trackRef.current) return;
    const containerCenter =
      trackRef.current.getBoundingClientRect().left +
      trackRef.current.clientWidth * 0.35;
    const slides = trackRef.current.querySelectorAll<HTMLElement>(
      '[data-editorial-slide]'
    );

    let closestIdx = 0;
    let minDistance = Infinity;
    slides.forEach((slide, idx) => {
      const rect = slide.getBoundingClientRect();
      const dist = Math.abs(rect.left - containerCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });
    setActiveSlideIndex(closestIdx);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !trackRef.current) return;
    dragStateRef.current = {
      isDown: true,
      startX: e.pageX - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
      hasDragged: false,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStateRef.current.isDown || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - dragStateRef.current.startX;
    if (Math.abs(walk) > 6) {
      dragStateRef.current.hasDragged = true;
    }
    trackRef.current.scrollLeft = dragStateRef.current.scrollLeft - walk;
  };

  const handlePointerUpOrLeave = () => {
    dragStateRef.current.isDown = false;
  };

  const handleOpenLightbox = (index: number) => {
    if (dragStateRef.current.hasDragged) {
      dragStateRef.current.hasDragged = false;
      return;
    }
    setLightboxIndex(index);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredCampaigns.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredCampaigns.length) % filteredCampaigns.length
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, filteredCampaigns.length]);

  const activeLightboxItem =
    lightboxIndex !== null ? filteredCampaigns[lightboxIndex] ?? null : null;

  return (
    <section
      id="vitrine"
      aria-labelledby="vitrine-heading"
      className="scroll-mt-20 overflow-x-clip border-t border-[#DCD1C0]/60 bg-transparent py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        {/* Header + Filter Controls */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-6 border-b border-[#DCD1C0]/75 pb-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-[0.14em] text-[#9E593F]">
              <span>Portfólio</span>
              <span aria-hidden="true" className="text-[#BD765B]">
                ·
              </span>
              <span className="tracking-normal text-[#585850]">
                Exemplos ilustrativos
              </span>
            </div>
            <h2
              id="vitrine-heading"
              className="mt-2.5 max-w-xl font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#282824] text-balance sm:text-4xl lg:text-[44px]"
            >
              Produção e enquadramento.
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div
              role="tablist"
              aria-label="Filtrar publicações por segmento"
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
                    onClick={() => handleCategoryChange(category)}
                    className={`relative min-h-[44px] py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39483C] ${
                      isActive
                        ? 'text-[#282824]'
                        : 'text-[#616158] hover:text-[#282824]'
                    }`}
                  >
                    {category}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute right-0 bottom-0 left-0 h-[1.5px] bg-[#BD765B]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Slider Navigation + Story-style Position Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            <span className="text-xs font-medium text-[#39483C] tabular-nums whitespace-nowrap shrink-0">
              {String(activeSlideIndex + 1).padStart(2, '0')} /{' '}
              {String(filteredCampaigns.length).padStart(2, '0')}
            </span>

            {/* Story-inspired Segmented Progress Track */}
            <div
              className="flex max-w-xs flex-1 items-center gap-1.5"
              aria-label="Posição na galeria editorial"
            >
              {filteredCampaigns.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Ir para ${item.title}`}
                  className="group flex h-6 flex-1 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39483C]"
                >
                  <span
                    className={`block h-[2px] w-full transition-colors duration-200 ${
                      idx === activeSlideIndex
                        ? 'bg-[#BD765B]'
                        : idx < activeSlideIndex
                          ? 'bg-[#39483C]/65'
                          : 'bg-[#DCD1C0] group-hover:bg-[#A8B2A0]'
                    }`}
                  />
                </button>
              ))}
            </div>

            <span className="hidden text-xs text-[#616158] md:inline">
              Arraste ou clique para ampliar
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollToSlide(activeSlideIndex - 1)}
              disabled={activeSlideIndex === 0}
              aria-label="Conteúdo anterior"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#DCD1C0]/80 bg-white/90 text-[#282824] shadow-[0_8px_20px_-14px_rgba(40,40,36,0.2)] transition-colors duration-150 hover:border-[#39483C] hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39483C]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSlide(activeSlideIndex + 1)}
              disabled={activeSlideIndex >= filteredCampaigns.length - 1}
              aria-label="Próximo conteúdo"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#DCD1C0]/80 bg-white/90 text-[#282824] shadow-[0_8px_20px_-14px_rgba(40,40,36,0.2)] transition-colors duration-150 hover:border-[#39483C] hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39483C]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Drag & Swipe Magazine Track */}
      <div className="mx-auto mt-8 max-w-[1240px] pl-6 sm:pl-10">
        <div
          ref={trackRef}
          onScroll={handleTrackScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUpOrLeave}
          onPointerLeave={handlePointerUpOrLeave}
          className="no-scrollbar flex cursor-grab items-end gap-6 overflow-x-auto pr-6 pb-4 select-none active:cursor-grabbing sm:gap-8 sm:pr-10"
        >
          {filteredCampaigns.map((campaign, idx) => {
            const { widthClass, aspectClass } = getSlideContainerClass(
              campaign.aspect
            );
            const hasVideo = Boolean(campaign.videoUrl);
            const isVideoActive = hasVideo && hoveredVideoId === campaign.id;

            return (
              <article
                key={campaign.id}
                data-editorial-slide
                className={`group shrink-0 snap-start ${widthClass}`}
                onMouseEnter={() => {
                  if (hasVideo) setHoveredVideoId(campaign.id);
                }}
                onMouseLeave={() => {
                  if (hasVideo) setHoveredVideoId(null);
                }}
              >
                <button
                  type="button"
                  onClick={() => handleOpenLightbox(idx)}
                  aria-label={`Ampliar publicação: ${campaign.title}`}
                  className="relative block w-full border border-[#DCD1C0]/80 bg-white/90 p-2 text-left shadow-[0_20px_50px_-26px_rgba(40,40,36,0.14)] ring-1 ring-inset ring-white transition-all duration-200 group-hover:border-[#39483C]/55 group-hover:shadow-[0_26px_60px_-24px_rgba(40,40,36,0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39483C]"
                >
                  <div className="relative overflow-hidden">
                    {isVideoActive && campaign.videoUrl ? (
                      <div className={`relative ${aspectClass}`}>
                        <video
                          src={campaign.videoUrl}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <EditorialImage
                        src={campaign.image}
                        alt={campaign.imageAlt}
                        sizes="(max-width: 768px) 85vw, 520px"
                        aspectClassName={aspectClass}
                        fallbackTitle={campaign.title}
                        className="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                      />
                    )}

                    <span
                      aria-hidden="true"
                      className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center bg-white/92 text-[#282824] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </button>

                {/* Concise Unboxed Metadata */}
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#585850]">
                  <span className="font-medium text-[#9E593F]">
                    {campaign.category}
                  </span>
                  <span aria-hidden="true" className="text-[#BD765B]">
                    ·
                  </span>
                  <span>{campaign.formatLabel}</span>
                </div>

                <h3 className="mt-1 font-serif text-2xl leading-[1.18] font-normal tracking-tight text-[#282824]">
                  {campaign.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal Zoom */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeLightboxItem.title}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#282824]/92 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.div
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0.85, scale: 0.96, y: 8 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.97, y: 6 }
              }
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden border border-[#A8B2A0]/30 bg-white/95 text-[#282824] shadow-2xl"
            >
              {/* Top Lightbox Bar */}
              <div className="flex items-center justify-between gap-4 border-b border-[#DCD1C0] px-5 py-3.5 sm:px-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#585850]">
                  <span className="font-medium text-[#39483C] tabular-nums">
                    {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                    {String(filteredCampaigns.length).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="text-[#BD765B]">
                    ·
                  </span>
                  <span className="font-medium text-[#9E593F]">
                    {activeLightboxItem.category}
                  </span>
                  <span aria-hidden="true" className="text-[#BD765B]">
                    ·
                  </span>
                  <span>{activeLightboxItem.demoTag}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Fechar visualização"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[#282824] transition-colors hover:text-[#BD765B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39483C]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Media Frame */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#282824] p-3 sm:p-5">
                {activeLightboxItem.videoUrl ? (
                  <video
                    src={activeLightboxItem.videoUrl}
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="max-h-[56vh] w-auto object-contain"
                  />
                ) : (
                  <div className="relative h-[46vh] w-full sm:h-[56vh]">
                    <Image
                      src={activeLightboxItem.image}
                      alt={activeLightboxItem.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 95vw, 860px"
                      referrerPolicy="no-referrer"
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Caption & Prev/Next Footer */}
              <div className="flex flex-col justify-between gap-4 border-t border-[#DCD1C0] px-5 py-4 sm:flex-row sm:items-center sm:px-6">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#282824]">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#585850]">
                    {activeLightboxItem.formatLabel} · {activeLightboxItem.demoTag}
                  </p>
                  <p className="mt-2 max-w-xl text-sm text-[#4E4E47]">
                    {activeLightboxItem.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredCampaigns.length) %
                          filteredCampaigns.length
                      )
                    }
                    aria-label="Publicação anterior"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#DCD1C0] bg-[#FAF8F3] text-[#282824] transition-colors hover:border-[#39483C]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex + 1) % filteredCampaigns.length
                      )
                    }
                    aria-label="Próxima publicação"
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#DCD1C0] bg-[#FAF8F3] text-[#282824] transition-colors hover:border-[#39483C]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
