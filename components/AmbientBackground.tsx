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

  const slowRiseY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const slowDriftY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const midParallaxY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const subtleScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.04, 1]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#FFFFFF]"
    >
      {/* Continuous Luminous White & Soft Sand Global Canvas Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_0%,#FCF9F4_28%,#FAF6EE_55%,#FDFBF7_80%,#FFFFFF_100%)]" />

      {/* Diffuse Ambient Radial Light Field — Upper Hero Atmosphere */}
      <motion.div
        style={
          prefersReducedMotion ? undefined : { y: slowRiseY, scale: subtleScale }
        }
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 28, -18, 0],
                opacity: [0.85, 1, 0.88, 0.85],
              }
        }
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 right-[-8%] h-[680px] w-[720px] rounded-[46%_54%_60%_40%/48%_44%_56%_52%] bg-[radial-gradient(circle,rgba(245,241,233,0.95)_0%,rgba(220,209,192,0.44)_44%,rgba(189,118,91,0.09)_72%,transparent_100%)] blur-[95px]"
      />

      {/* Soft Illuminated Top-Left Mist (Seamless Behind Hero Typography) */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: slowDriftY }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -22, 16, 0],
                opacity: [0.65, 0.85, 0.65],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[6%] -left-40 h-[560px] w-[580px] rounded-[58%_42%_46%_54%/44%_56%_44%_56%] bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(245,241,233,0.75)_45%,rgba(168,178,160,0.16)_75%,transparent_100%)] blur-[105px]"
      />

      {/* Mid-Page Botanical Sage Organic Depth Layer */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: midParallaxY }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 22, -26, 0],
                scale: [1, 1.05, 0.97, 1],
              }
        }
        transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[34%] left-[12%] h-[600px] w-[680px] rounded-[42%_58%_54%_46%/56%_38%_62%_44%] bg-[radial-gradient(circle,rgba(168,178,160,0.18)_0%,rgba(245,241,233,0.58)_50%,transparent_88%)] blur-[120px]"
      />

      {/* Mid-Right Subtle Warm Sand & Terracotta Light Relief */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: slowDriftY }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -26, 18, 0],
                opacity: [0.7, 0.92, 0.72, 0.7],
              }
        }
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[52%] -right-32 h-[580px] w-[620px] rounded-[50%_50%_40%_60%/55%_45%_55%_45%] bg-[radial-gradient(circle,rgba(220,209,192,0.45)_0%,rgba(189,118,91,0.11)_52%,transparent_88%)] blur-[115px]"
      />

      {/* Lower-Page Translucent Light Cloud Bridging Portfolio to Contact */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: slowRiseY }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 18, -20, 0],
                scale: [1, 0.98, 1.04, 1],
              }
        }
        transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-36 left-[18%] h-[520px] w-[680px] rounded-[60%_40%_48%_52%/44%_56%_44%_56%] bg-[radial-gradient(circle,rgba(245,241,233,0.85)_0%,rgba(168,178,160,0.15)_48%,rgba(189,118,91,0.09)_74%,transparent_100%)] blur-[120px]"
      />

      {/* Subtle Imperceptible Directional Shadow & Paper Relief Luminosity */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_22%,rgba(255,255,255,0.52)_0%,rgba(245,241,233,0.2)_65%,rgba(220,209,192,0.12)_100%)]" />
    </div>
  );
}
