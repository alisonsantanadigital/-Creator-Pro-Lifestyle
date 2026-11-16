'use client';

import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { AUDIENCE_INSIGHTS, type AudienceMetric } from '@/lib/creator-data';

function formatMetricValue(value: number, metric: AudienceMetric): string {
  const decimals = metric.decimals ?? 0;
  let formatted: string;

  if (decimals > 0) {
    formatted = value.toFixed(decimals).replace('.', ',');
  } else if (metric.thousandSeparator) {
    formatted = Math.round(value).toLocaleString('pt-BR');
  } else {
    formatted = Math.round(value).toString();
  }

  return `${formatted}${metric.suffix ?? ''}`;
}

function AnimatedMetricNumber({ metric }: { metric: AudienceMetric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReducedMotion = useReducedMotion();
  const target = metric.numericTarget;

  const [displayValue, setDisplayValue] = useState<string>(() =>
    target === null ? metric.displayFallback : formatMetricValue(0, metric)
  );

  useEffect(() => {
    if (target === null || prefersReducedMotion || !isInView) return;

    const controls = animate(0, target, {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplayValue(formatMetricValue(latest, metric));
      },
      onComplete() {
        setDisplayValue(metric.displayFallback);
      },
    });

    return () => controls.stop();
  }, [isInView, metric, prefersReducedMotion, target]);

  if (target === null) {
    return (
      <span className="font-serif text-[clamp(1.75rem,2.6vw,2.4rem)] text-[#585850]">
        {metric.displayFallback}
      </span>
    );
  }

  return (
    <span ref={ref} className="tabular-nums">
      {prefersReducedMotion ? metric.displayFallback : displayValue}
    </span>
  );
}

export function AudienceInsightsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="scroll-mt-20 border-y border-[#DCD1C0] bg-[#EFE9DD] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        {/* Header Row */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-4 border-b border-[#DCD1C0] pb-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#9E593F]">
              {AUDIENCE_INSIGHTS.sectionKicker}
            </p>
            <h2
              id="insights-heading"
              className="mt-1.5 font-serif text-3xl font-normal tracking-tight text-[#282824] text-balance sm:text-4xl lg:text-[42px]"
            >
              {AUDIENCE_INSIGHTS.sectionTitle}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#4E4E47]">
            <span>{AUDIENCE_INSIGHTS.updatedAt}</span>
            <span aria-hidden="true" className="text-[#BD765B]">
              ·
            </span>
            <span className="font-medium text-[#39483C]">
              {AUDIENCE_INSIGHTS.disclaimer}
            </span>
          </div>
        </motion.div>

        {/* 4-Column Animated Number Counters / Prepared Fields */}
        <div className="grid grid-cols-1 divide-y divide-[#DCD1C0] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {AUDIENCE_INSIGHTS.metrics.map((metric, index) => (
            <div
              key={metric.id}
              className={`py-8 sm:px-6 lg:py-10 ${
                index === 0 ? 'sm:pl-0' : ''
              } ${index === AUDIENCE_INSIGHTS.metrics.length - 1 ? 'lg:pr-0' : ''} ${
                index >= 2 ? 'sm:border-t sm:border-[#DCD1C0] lg:border-t-0' : ''
              }`}
            >
              <p className="text-xs font-medium text-[#4E4E47]">{metric.label}</p>
              <p className="mt-3 font-serif text-[clamp(2.5rem,3.8vw,3.6rem)] leading-none font-normal tracking-tight text-[#282824]">
                <AnimatedMetricNumber metric={metric} />
              </p>
              <div className="mt-4 h-px w-8 bg-[#BD765B]" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed text-[#4E4E47]">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* Demographic Distributions (Prepared for real data; animates when items exist) */}
        <div className="border-t border-[#DCD1C0] pt-8 pb-6">
          <p className="text-xs font-medium tracking-[0.12em] text-[#39483C]">
            {AUDIENCE_INSIGHTS.distributionsTitle}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {AUDIENCE_INSIGHTS.distributions.map((group) => (
              <div key={group.id}>
                <h3 className="font-serif text-xl font-normal text-[#282824]">
                  {group.title}
                </h3>

                {group.items.length > 0 ? (
                  <div className="mt-4 space-y-3.5">
                    {group.items.map((item, idx) => (
                      <div key={item.label}>
                        <div className="flex items-baseline justify-between gap-2 text-xs">
                          <span className="font-medium text-[#282824]">
                            {item.label}
                          </span>
                          <span className="font-medium text-[#39483C] tabular-nums">
                            {item.percentage}%
                          </span>
                        </div>

                        <div className="mt-1.5 h-1.5 w-full overflow-hidden bg-[#DCD1C0]">
                          <motion.div
                            initial={
                              prefersReducedMotion
                                ? { scaleX: item.percentage / 100 }
                                : { scaleX: 0 }
                            }
                            whileInView={{ scaleX: item.percentage / 100 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                              duration: 0.85,
                              delay: idx * 0.08,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className={`h-full w-full origin-left ${
                              idx === 0
                                ? 'bg-[#39483C]'
                                : idx === 1
                                  ? 'bg-[#BD765B]'
                                  : 'bg-[#A8B2A0]'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 space-y-2.5">
                    <div className="h-1.5 w-full bg-[#DCD1C0]" aria-hidden="true" />
                    <p className="text-xs leading-relaxed text-[#585850]">
                      {group.emptyNotice}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Line */}
        <p className="border-t border-[#DCD1C0] pt-5 text-xs text-[#585850]">
          {AUDIENCE_INSIGHTS.sectionSubtitle}
        </p>
      </div>
    </section>
  );
}
