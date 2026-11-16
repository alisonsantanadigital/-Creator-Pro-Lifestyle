'use client';

import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState, useSyncExternalStore } from 'react';
import { PARTNERSHIP_FORMATS, type PartnershipFormat } from '@/lib/creator-data';

function subscribeFinePointer(callback: () => void) {
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getFinePointerSnapshot() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

interface PartnershipFormatsSectionProps {
  selectedFormat: string | null;
  onSelectFormat: (formatTitle: string) => void;
}

function TiltFormatRow({
  format,
  isSelected,
  canTilt,
  onSelect,
}: {
  format: PartnershipFormat;
  isSelected: boolean;
  canTilt: boolean;
  onSelect: (formatTitle: string) => void;
}) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateX: Number((-yPct * 3.2).toFixed(2)),
      rotateY: Number((xPct * 3.2).toFixed(2)),
    });
  };

  const handlePointerLeave = () => {
    if (tilt.rotateX !== 0 || tilt.rotateY !== 0) {
      setTilt({ rotateX: 0, rotateY: 0 });
    }
  };

  return (
    <div style={{ perspective: canTilt ? '950px' : undefined }}>
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        animate={canTilt ? tilt : undefined}
        transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.6 }}
        className={`relative grid grid-cols-1 gap-4 py-7 transition-all duration-200 sm:grid-cols-12 sm:items-start sm:gap-6 ${
          isSelected
            ? 'bg-white/55 px-4 backdrop-blur-[2px] sm:px-5'
            : 'px-2 hover:bg-white/40 sm:px-3'
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-[#DCD1C0]/75 via-[#DCD1C0]/40 to-transparent"
        />

        <div className="sm:col-span-1">
          <span className="font-serif text-2xl font-normal text-[#BD765B] tabular-nums">
            {format.number}.
          </span>
        </div>

        <div className="sm:col-span-7">
          <h3 className="font-serif text-2xl font-normal tracking-tight text-[#282824] sm:text-[28px]">
            {format.title}
          </h3>
          <p className="mt-1 text-xs font-medium text-[#39483C]">
            {format.subtitle}
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-[#4E4E47]">
            {format.description}
          </p>
          <p className="mt-2.5 text-xs text-[#616158]">{format.deliverables}</p>
        </div>

        <div className="sm:col-span-4 sm:flex sm:justify-end">
          <button
            type="button"
            onClick={() => onSelect(format.title)}
            className={`group inline-flex min-h-[44px] w-full items-center justify-center gap-2 border px-4 py-2.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39483C] sm:w-auto ${
              isSelected
                ? 'border-[#39483C] bg-[#39483C] text-[#F5F1E9]'
                : 'border-[#DCD1C0]/80 bg-white/60 text-[#282824] backdrop-blur-sm hover:border-[#39483C] hover:bg-[#39483C] hover:text-[#F5F1E9]'
            }`}
          >
            <span>
              {isSelected ? 'Selecionado no orçamento' : 'Solicitar orçamento'}
            </span>
            <ArrowRight
              className={`h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 ${
                isSelected
                  ? 'text-[#DCD1C0]'
                  : 'text-[#BD765B] group-hover:text-[#DCD1C0]'
              }`}
            />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function PartnershipFormatsSection({
  selectedFormat,
  onSelectFormat,
}: PartnershipFormatsSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const hasFinePointer = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );
  const canTilt = hasFinePointer && !prefersReducedMotion;

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
      className="scroll-mt-20 bg-transparent py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Lead */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-xs font-medium tracking-[0.14em] text-[#9E593F]">
              Parcerias Comerciais
            </p>
            <h2
              id="formatos-heading"
              className="mt-3 font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#282824] text-balance sm:text-4xl"
            >
              Formatos para contratação.
            </h2>
            <div className="mt-5 h-px w-12 bg-[#BD765B]" aria-hidden="true" />
            <p className="mt-5 max-w-[34ch] text-[15px] leading-[1.7] text-[#4E4E47]">
              Entregas avulsas ou pacotes mensais sob briefing.
            </p>
          </motion.div>

          {/* Right Numbered Editorial List */}
          <div className="lg:col-span-8">
            <div className="relative">
              {PARTNERSHIP_FORMATS.map((format) => (
                <TiltFormatRow
                  key={format.number}
                  format={format}
                  isSelected={selectedFormat === format.title}
                  canTilt={canTilt}
                  onSelect={handleConsultFormat}
                />
              ))}
              <div
                aria-hidden="true"
                className="h-px bg-gradient-to-r from-[#DCD1C0]/75 via-[#DCD1C0]/40 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
