'use client';

import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { CREATOR_PROFILE } from '@/lib/creator-data';

export function MobileStickyBar() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let pastHero = false;
    let contactInView = false;

    const updateVisibility = () => {
      setVisible(pastHero && !contactInView);
    };

    const handleScroll = () => {
      pastHero = window.scrollY > 420;
      updateVisibility();
    };

    const contactEl = document.querySelector('#contato');
    const observer = contactEl
      ? new IntersectionObserver(
          (entries) => {
            contactInView = entries[0]?.isIntersecting ?? false;
            updateVisibility();
          },
          { threshold: 0.1 }
        )
      : null;

    if (contactEl && observer) {
      observer.observe(contactEl);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer?.disconnect();
    };
  }, []);

  const handleJumpToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#contato');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-0 bottom-0 left-0 z-40 border-t border-[#DCD1C0]/70 bg-white/88 px-4 py-2.5 backdrop-blur-md md:hidden"
        >
          <div className="mx-auto flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate font-serif text-base font-medium text-[#282824]">
                {CREATOR_PROFILE.name}
              </p>
              <p className="truncate text-[11px] text-[#585850]">
                Parcerias & Media Kit
              </p>
            </div>

            <a
              href="#contato"
              onClick={handleJumpToContact}
              className="inline-flex min-h-[40px] items-center gap-2 bg-[#39483C] px-4 py-2 text-xs font-medium text-[#F5F1E9] whitespace-nowrap shrink-0 transition-colors hover:bg-[#2F3C32] active:scale-[0.98]"
            >
              <span>{CREATOR_PROFILE.primaryCta}</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#DCD1C0]" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
