'use client';

import { motion, useReducedMotion } from 'motion/react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

interface MagneticCtaButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  className?: string;
  variant?: 'olive' | 'graphite';
}

export function MagneticCtaButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'olive',
}: MagneticCtaButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [canHoverFine, setCanHoverFine] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHoverFine(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !canHoverFine || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setOffset({
      x: Math.max(-6, Math.min(6, relX * 6)),
      y: Math.max(-5, Math.min(5, relY * 5)),
    });
  };

  const handlePointerLeave = () => {
    if (offset.x !== 0 || offset.y !== 0) {
      setOffset({ x: 0, y: 0 });
    }
  };

  const baseSurface =
    variant === 'olive'
      ? 'border-[#39483C] bg-[#39483C] text-[#F5F1E9] hover:border-[#BD765B] hover:bg-[#2F3C32]'
      : 'border-[#282824] bg-[#282824] text-[#F5F1E9] hover:border-[#BD765B] hover:bg-[#39483C]';

  const sharedClasses = `group relative inline-flex min-h-[48px] items-center justify-center gap-3 overflow-hidden border px-7 py-3.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BD765B] active:scale-[0.98] ${baseSurface} ${className}`;

  const sheenLayer = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#F5F1E9]/16 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full"
    />
  );

  return (
    <motion.div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      animate={prefersReducedMotion ? undefined : { x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 320, damping: 24, mass: 0.5 }}
      className="inline-block w-full sm:w-auto"
    >
      {href ? (
        <a href={href} onClick={onClick} className={sharedClasses}>
          {sheenLayer}
          <span className="relative z-10 inline-flex items-center gap-3">
            {children}
          </span>
        </a>
      ) : (
        <button type="button" onClick={onClick} className={sharedClasses}>
          {sheenLayer}
          <span className="relative z-10 inline-flex items-center gap-3">
            {children}
          </span>
        </button>
      )}
    </motion.div>
  );
}
