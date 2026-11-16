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
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { MagneticCtaButton } from '@/components/MagneticCtaButton';
import {
  buildWhatsappProposalMessage,
  CREATOR_PROFILE,
  DEMO_CONTACT,
} from '@/lib/creator-data';

interface CommercialContactSectionProps {
  selectedFormat: string | null;
  onClearFormat: () => void;
}

export function CommercialContactSection({
  selectedFormat,
  onClearFormat,
}: CommercialContactSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [contactFeedback, setContactFeedback] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);

  const preformattedMessage = buildWhatsappProposalMessage(selectedFormat);

  const handleWhatsappDemo = () => {
    setContactFeedback(
      `Canal ilustrativo (WhatsApp ${DEMO_CONTACT.whatsappValue}): mensagem pré-formatada pronta — "${preformattedMessage}". Quando um WhatsApp real for configurado, este botão abre diretamente a conversa comercial.`
    );
  };

  const handleCopyMessageDemo = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(preformattedMessage);
      }
      setMessageCopied(true);
      setContactFeedback(
        'Mensagem pré-formatada copiada para a área de transferência.'
      );
      window.setTimeout(() => setMessageCopied(false), 3500);
    } catch {
      setContactFeedback(`Mensagem sugerida: "${preformattedMessage}"`);
    }
  };

  const handleCopyEmailDemo = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(DEMO_CONTACT.emailValue);
      }
      setEmailCopied(true);
      setContactFeedback(
        `E-mail ilustrativo copiado (${DEMO_CONTACT.emailValue}): endereço demonstrativo do Creator Pro, sem caixa postal ativa.`
      );
      window.setTimeout(() => setEmailCopied(false), 3500);
    } catch {
      setContactFeedback(
        `E-mail ilustrativo: ${DEMO_CONTACT.emailValue} — endereço demonstrativo sem envio real.`
      );
    }
  };

  const handleInstagramDemo = () => {
    setContactFeedback(
      `Instagram ilustrativo (${DEMO_CONTACT.instagramValue}): espaço reservado para o perfil oficial da criadora.`
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
      className="scroll-mt-20 border-t border-[#DCD1C0] bg-[#DCD1C0]/45 pt-20 pb-24 sm:pt-24 sm:pb-12"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Proposal Callout */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-[0.14em] text-[#9E593F]">
              {DEMO_CONTACT.kicker}
            </p>
            <h2
              id="contato-heading"
              className="mt-3 max-w-lg font-serif text-3xl leading-[1.12] font-normal tracking-tight text-[#282824] text-balance sm:text-4xl lg:text-[44px]"
            >
              {DEMO_CONTACT.headline}
            </h2>
            <p className="mt-5 max-w-[48ch] text-[15.5px] leading-[1.7] text-[#4E4E47]">
              {DEMO_CONTACT.description}
            </p>

            {/* Primary Magnetic CTA */}
            <div className="mt-8">
              <MagneticCtaButton onClick={handleWhatsappDemo} variant="olive">
                <MessageCircle className="h-4 w-4 text-[#DCD1C0]" />
                <span>{DEMO_CONTACT.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4 text-[#DCD1C0] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticCtaButton>
            </div>

            {/* Pre-formatted WhatsApp Message Preview */}
            <div className="mt-8 border-t border-[#DCD1C0] pt-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-medium text-[#585850]">
                  Mensagem pré-formatada para WhatsApp
                </p>
                {selectedFormat && (
                  <button
                    type="button"
                    onClick={onClearFormat}
                    className="text-xs font-medium text-[#9E593F] underline underline-offset-4 transition-colors hover:text-[#282824]"
                  >
                    Limpar formato ({selectedFormat})
                  </button>
                )}
              </div>

              <p className="mt-2.5 font-serif text-lg leading-snug italic text-[#39483C]">
                “{preformattedMessage}”
              </p>

              <button
                type="button"
                onClick={handleCopyMessageDemo}
                className="mt-3 inline-flex min-h-[36px] items-center gap-1.5 text-xs font-medium text-[#282824] underline decoration-[#BD765B] underline-offset-4 transition-colors hover:text-[#39483C]"
              >
                {messageCopied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#39483C]" />
                    <span>Mensagem copiada</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#BD765B]" />
                    <span>Copiar mensagem pré-formatada</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Direct Channels */}
          <div className="lg:col-span-6 lg:pt-8">
            <div className="flex flex-col gap-4">
              {/* WhatsApp Channel Card */}
              <button
                type="button"
                onClick={handleWhatsappDemo}
                className="group flex min-h-[60px] w-full items-center justify-between gap-4 border border-[#39483C] bg-[#39483C] px-6 py-4 text-left text-[#F5F1E9] transition-colors duration-150 hover:border-[#BD765B] hover:bg-[#2F3C32] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39483C] active:scale-[0.99]"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#DCD1C0]" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium">
                      WhatsApp comercial · {DEMO_CONTACT.primaryCta}
                    </p>
                    <p className="truncate text-xs text-[#DCD1C0]">
                      {DEMO_CONTACT.whatsappValue} · Atendimento ilustrativo
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#DCD1C0] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Demonstrative Email */}
              <button
                type="button"
                onClick={handleCopyEmailDemo}
                className="group flex min-h-[60px] w-full items-center justify-between gap-4 border border-[#DCD1C0] bg-[#F5F1E9] px-6 py-4 text-left transition-colors duration-150 hover:border-[#39483C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39483C] active:scale-[0.99]"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#BD765B]" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#585850]">
                      {DEMO_CONTACT.emailLabel}
                    </p>
                    <p className="truncate text-sm font-medium text-[#282824]">
                      {DEMO_CONTACT.emailValue}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#39483C] whitespace-nowrap shrink-0">
                  {emailCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#39483C]" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#BD765B]" />
                      <span>Copiar</span>
                    </>
                  )}
                </span>
              </button>

              {/* Demonstrative Instagram */}
              <button
                type="button"
                onClick={handleInstagramDemo}
                className="group flex min-h-[60px] w-full items-center justify-between gap-4 border border-[#DCD1C0] bg-[#F5F1E9] px-6 py-4 text-left transition-colors duration-150 hover:border-[#39483C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39483C] active:scale-[0.99]"
              >
                <div className="flex min-w-0 items-center gap-3.5">
                  <Instagram className="h-4 w-4 shrink-0 text-[#BD765B]" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#585850]">
                      {DEMO_CONTACT.instagramLabel}
                    </p>
                    <p className="truncate text-sm font-medium text-[#282824]">
                      {DEMO_CONTACT.instagramValue}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#BD765B] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Inline Demonstrative Feedback */}
            <div aria-live="polite" className="mt-4 min-h-[44px]">
              {contactFeedback ? (
                <div className="border border-[#BD765B]/55 bg-[#F5F1E9] px-4 py-3 text-xs leading-relaxed text-[#282824]">
                  {contactFeedback}
                </div>
              ) : (
                <p className="text-xs leading-relaxed text-[#585850]">
                  {DEMO_CONTACT.footerNote}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Quiet Editorial Footer Base */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#DCD1C0] pt-7 text-xs text-[#4E4E47] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="font-medium text-[#282824]">
              {CREATOR_PROFILE.name}
            </span>
            <span aria-hidden="true" className="text-[#BD765B]">
              ·
            </span>
            <span>
              {CREATOR_PROFILE.productName} por {CREATOR_PROFILE.brandHouse}
            </span>
          </div>

          <a
            href="#topo"
            onClick={handleBackToTop}
            className="inline-flex min-h-[36px] items-center gap-1.5 font-medium text-[#282824] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#39483C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#39483C]"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#BD765B]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
