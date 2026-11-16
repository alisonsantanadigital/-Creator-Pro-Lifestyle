'use client';

import { motion, useReducedMotion } from 'motion/react';

interface SceneDividerProps {
  tone?: 'sand' | 'sage' | 'terracotta';
}

export function SceneDivider({ tone = 'sand' }: SceneDividerProps) {
  const prefersReducedMotion = useReducedMotion();

  const lineClass =
    tone === 'sage'
      ? 'from-transparent via-[#A8B2A0]/55 to-transparent'
      : tone === 'terracotta'
        ? 'from-transparent via-[#BD765B]/38 to-transparent'
        : 'from-transparent via-[#DCD1C0]/80 to-transparent';

  return (
    <div aria-hidden="true" className="relative mx-auto max-w-[1240px] px-6 sm:px-10">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0.35, scaleX: 0.78 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`h-px w-full origin-center bg-gradient-to-r ${lineClass}`}
      />
    </div>
  );
}
