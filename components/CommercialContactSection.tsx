'use client';

import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';
import { CREATOR_PROFILE, DEMO_CONTACT } from '@/lib/creator-data';

interface CommercialContactSectionProps {
  selectedFormat: string | null;
  onClearFormat: () => void;
}

export function CommercialContactSection({
  selectedFormat,
  onClearFormat,
}: CommercialContactSectionProps) {
  const [contactFeedback, setContactFeedback] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleWhatsappDemo = () => {
    const formatContext = selectedFormat
      ? ` com interesse em "${selectedFormat}"`
      : '';
    setContactFeedback(
      `Canal demonstrativo (WhatsApp ${DEMO_CONTACT.whatsappValue})${formatContext}: na versão publicada do Creator Pro, este botão abre o atendimento comercial real da criadora. Nenhum envio externo foi realizado.`
    );
  };

  const handleCopyEmailDemo = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(DEMO_CONTACT.emailValue);
      }
      setEmailCopied(true);
      setContactFeedback(
        `E-mail demonstrativo copiado (${DEMO_CONTACT.emailValue}): endereço ilustrativo para visualização do Media Kit Creator Pro, sem caixa postal ativa.`
      );
      window.setTimeout(() => setEmailCopied(false), 3500);
    } catch {
      setContactFeedback(
        `E-mail demonstrativo: ${DEMO_CONTACT.emailValue} — endereço ilustrativo da vitrine Creator Pro, sem envio real.`
      );
    }
  };

  const handleInstagramDemo = () => {
    setContactFeedback(
      `Instagram demonstrativo (${DEMO_CONTACT.instagramValue}): identificador fictício reservado para o perfil oficial da criadora na entrega comercial.`
    );
  };

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#topo');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer
      id="contato"
      aria-labelledby="contato-heading"
      className="border-t border-[#171614]/12 bg-[#F2ECE1] pt-20 pb-12 sm:pt-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Proposal Callout */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-[0.14em] text-[#8A6836]">
              {DEMO_CONTACT.kicker}
            </p>
            <h2
              id="contato-heading"
              className="mt-3 max-w-lg font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#171614] text-balance sm:text-4xl lg:text-[44px]"
            >
              {DEMO_CONTACT.headline}
            </h2>
            <p className="mt-5 max-w-[48ch] text-[15.5px] leading-[1.7] text-[#3F3B36]">
              {DEMO_CONTACT.description}
            </p>

            {selectedFormat && (
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#171614]/12 pt-4 text-xs text-[#3F3B36]">
                <span>
                  Formato de interesse:{' '}
                  <strong className="font-medium text-[#171614]">
                    {selectedFormat}
                  </strong>
                </span>
                <span aria-hidden="true" className="text-[#B08D57]">
                  ·
                </span>
                <button
                  type="button"
                  onClick={onClearFormat}
                  className="font-medium text-[#8A6836] underline underline-offset-4 transition-colors hover:text-[#171614]"
                >
                  Limpar seleção
                </button>
              </div>
            )}
          </div>

          {/* Right Demonstrative Contact Channels */}
          <div className="lg:col-span-6">
            <div className="flex flex-col gap-4">
              {/* WhatsApp Primary Demo CTA */}
              <button
                type="button"
                onClick={handleWhatsappDemo}
                className="group flex min-h-[56px] w-full items-center justify-between gap-4 border border-[#171614] bg-[#171614] px-6 py-4 text-left text-[#FAF7F2] transition-colors duration-150 hover:border-[#8A6836] hover:bg-[#26231F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6836]"
              >
                <div className="flex items-center gap-3.5">
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#D4B98C]" />
                  <div>
                    <p className="text-sm font-medium">
                      {DEMO_CONTACT.whatsappLabel}
                    </p>
                    <p className="text-xs text-[#D8D0C4]">
                      {DEMO_CONTACT.whatsappValue} · Canal demonstrativo
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#D4B98C] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Demonstrative Email */}
              <button
                type="button"
                onClick={handleCopyEmailDemo}
                className="group flex min-h-[56px] w-full items-center justify-between gap-4 border border-[#171614]/20 bg-[#FAF7F2] px-6 py-4 text-left transition-colors duration-150 hover:border-[#8A6836] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6836]"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <Mail className="h-4 w-4 shrink-0 text-[#8A6836]" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#6B6359]">
                      {DEMO_CONTACT.emailLabel}
                    </p>
                    <p className="truncate text-sm font-medium text-[#171614]">
                      {DEMO_CONTACT.emailValue}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#595249] whitespace-nowrap shrink-0 group-hover:text-[#171614]">
                  {emailCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#8A6836]" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#8A6836]" />
                      <span>Copiar</span>
                    </>
                  )}
                </span>
              </button>

              {/* Demonstrative Instagram */}
              <button
                type="button"
                onClick={handleInstagramDemo}
                className="group flex min-h-[56px] w-full items-center justify-between gap-4 border border-[#171614]/20 bg-[#FAF7F2] px-6 py-4 text-left transition-colors duration-150 hover:border-[#8A6836] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6836]"
              >
                <div className="flex items-center gap-3.5">
                  <Instagram className="h-4 w-4 shrink-0 text-[#8A6836]" />
                  <div>
                    <p className="text-xs text-[#6B6359]">
                      {DEMO_CONTACT.instagramLabel}
                    </p>
                    <p className="text-sm font-medium text-[#171614]">
                      {DEMO_CONTACT.instagramValue}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8A6836] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Inline Demonstrative Feedback Region */}
            <div aria-live="polite" className="mt-4 min-h-[44px]">
              {contactFeedback ? (
                <div className="border border-[#B08D57]/45 bg-[#FAF7F2] px-4 py-3 text-xs leading-relaxed text-[#3F3B36]">
                  {contactFeedback}
                </div>
              ) : (
                <p className="text-xs leading-relaxed text-[#6B6359]">
                  {DEMO_CONTACT.footerNote}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Editorial Footer Base */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#171614]/12 pt-7 text-xs text-[#595249] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="font-medium text-[#171614]">
              {CREATOR_PROFILE.productName}
            </span>
            <span aria-hidden="true" className="text-[#B08D57]">
              ·
            </span>
            <span>{CREATOR_PROFILE.brandHouse}</span>
            <span aria-hidden="true" className="text-[#B08D57]">
              ·
            </span>
            <span>Demonstração comercial — {CREATOR_PROFILE.name}</span>
          </div>

          <a
            href="#topo"
            onClick={handleBackToTop}
            className="inline-flex min-h-[36px] items-center gap-1.5 font-medium text-[#171614] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#8A6836] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6836]"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#8A6836]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
