'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';

export function AmbientBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const layerOneY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const layerTwoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const layerThreeY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FCFAF7] to-[#FFFFFF]"
    >
      {/* Top-right soft warm sand & off-white light wash */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: layerOneY }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 26, -14, 0],
                scale: [1, 1.04, 0.98, 1],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-36 -right-28 h-[540px] w-[540px] rounded-[44%_56%_62%_38%/48%_42%_58%_52%] bg-[#F5F1E9] opacity-90 blur-[90px] sm:h-[680px] sm:w-[680px]"
      />

      {/* Mid-left delicate sage botanical glow */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: layerTwoY }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -24, 18, 0],
                scale: [1, 0.97, 1.03, 1],
              }
        }
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[28%] -left-36 h-[460px] w-[520px] rounded-[58%_42%_39%_61%/44%_56%_44%_56%] bg-[#A8B2A0]/18 blur-[110px] sm:h-[620px] sm:w-[660px]"
      />

      {/* Center-right subtle terracotta warmth & sand relief */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: layerThreeY }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 18, -22, 0],
                scale: [1, 1.05, 0.97, 1],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[58%] right-[-10%] h-[440px] w-[480px] rounded-[40%_60%_52%_48%/54%_38%_62%_46%] bg-[#DCD1C0]/42 blur-[115px] sm:h-[580px] sm:w-[620px]"
      />

      {/* Lower soft terracotta blush accent */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: layerOneY }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -16, 14, 0],
              }
        }
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 left-[18%] h-[380px] w-[480px] rounded-[60%_40%_45%_55%/40%_55%_45%_60%] bg-[#BD765B]/10 blur-[120px] sm:h-[460px] sm:w-[580px]"
      />

      {/* Ultra-subtle radial paper vignette for architectural depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.45)_0%,rgba(245,241,233,0.22)_100%)]" />
    </div>
  );
}
