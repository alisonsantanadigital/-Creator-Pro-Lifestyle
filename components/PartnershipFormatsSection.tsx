'use client';

import { ArrowRight } from 'lucide-react';
import { PARTNERSHIP_FORMATS } from '@/lib/creator-data';

interface PartnershipFormatsSectionProps {
  selectedFormat: string | null;
  onSelectFormat: (formatTitle: string) => void;
}

export function PartnershipFormatsSection({
  selectedFormat,
  onSelectFormat,
}: PartnershipFormatsSectionProps) {
  const handleConsultFormat = (formatTitle: string) => {
    onSelectFormat(formatTitle);
    const target = document.querySelector('#contato');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="formatos"
      aria-labelledby="formatos-heading"
      className="border-t border-[#171614]/12 bg-[#FAF7F2] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Sticky-Free Editorial Lead */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium tracking-[0.14em] text-[#8A6836]">
              Formatos de Parceria
            </p>
            <h2
              id="formatos-heading"
              className="mt-3 font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#171614] text-balance sm:text-4xl"
            >
              Entregas desenhadas para objetivos reais de marca.
            </h2>
            <p className="mt-5 max-w-[38ch] text-[15px] leading-[1.7] text-[#4A4640]">
              Cada formato pode ser contratado de maneira avulsa ou combinado em
              projetos sazonais, respeitando o momento do produto e a voz editorial
              da criadora.
            </p>
          </div>

          {/* Right Numbered Editorial List */}
          <div className="lg:col-span-8">
            <div className="border-b border-[#171614]/12">
              {PARTNERSHIP_FORMATS.map((format) => {
                const isSelected = selectedFormat === format.title;
                return (
                  <div
                    key={format.number}
                    className="grid grid-cols-1 gap-4 border-t border-[#171614]/12 py-7 sm:grid-cols-12 sm:items-start sm:gap-6"
                  >
                    <div className="sm:col-span-2">
                      <span className="font-serif text-2xl font-normal text-[#8A6836] tabular-nums">
                        {format.number}.
                      </span>
                    </div>

                    <div className="sm:col-span-7">
                      <h3 className="font-serif text-2xl font-normal tracking-tight text-[#171614] sm:text-[28px]">
                        {format.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-[#6B6359]">
                        {format.subtitle}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#3F3B36]">
                        {format.description}
                      </p>
                      <p className="mt-3 text-xs text-[#6B6359]">
                        {format.deliverables}
                      </p>
                    </div>

                    <div className="sm:col-span-3 sm:flex sm:justify-end">
                      <button
                        type="button"
                        onClick={() => handleConsultFormat(format.title)}
                        className={`group inline-flex min-h-[40px] items-center gap-1.5 border px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6836] ${
                          isSelected
                            ? 'border-[#8A6836] bg-[#F2ECE1] text-[#171614]'
                            : 'border-[#171614]/20 bg-transparent text-[#171614] hover:border-[#8A6836] hover:bg-[#F4EFE6]'
                        }`}
                      >
                        <span>{isSelected ? 'Selecionado' : 'Consultar'}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#8A6836] transition-transform duration-150 group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
