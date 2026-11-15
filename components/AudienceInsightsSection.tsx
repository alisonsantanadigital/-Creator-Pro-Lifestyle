import { AUDIENCE_INSIGHTS } from '@/lib/creator-data';

export function AudienceInsightsSection() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="border-y border-[#171614]/12 bg-[#F4EFE6]/70 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        {/* Header Row */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#171614]/12 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-[#8A6836]">
              Métricas de mídia
            </p>
            <h2
              id="insights-heading"
              className="mt-1.5 font-serif text-3xl font-normal tracking-tight text-[#171614] text-balance sm:text-4xl"
            >
              {AUDIENCE_INSIGHTS.sectionTitle}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#595249]">
            <span>{AUDIENCE_INSIGHTS.updatedAt}</span>
            <span aria-hidden="true" className="text-[#B08D57]">
              ·
            </span>
            <span>{AUDIENCE_INSIGHTS.disclaimer}</span>
          </div>
        </div>

        {/* 4-Column Tabular Metrics Strip */}
        <div className="grid grid-cols-1 divide-y divide-[#171614]/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {AUDIENCE_INSIGHTS.metrics.map((metric, index) => (
            <div
              key={metric.id}
              className={`py-7 sm:px-6 lg:py-8 ${
                index === 0 ? 'sm:pl-0' : ''
              } ${index === AUDIENCE_INSIGHTS.metrics.length - 1 ? 'lg:pr-0' : ''} ${
                index >= 2 ? 'sm:border-t sm:border-[#171614]/10 lg:border-t-0' : ''
              }`}
            >
              <p className="text-xs font-medium text-[#595249]">{metric.label}</p>
              <p className="mt-3 font-serif text-[clamp(2.35rem,3.6vw,3.35rem)] leading-none font-normal tracking-tight text-[#171614] tabular-nums">
                {metric.value}
              </p>
              <div className="mt-4 h-px w-6 bg-[#B08D57]" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed text-[#4A4640]">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* Subtitle & Transparency Line */}
        <p className="border-t border-[#171614]/10 pt-5 text-xs text-[#6B6359]">
          {AUDIENCE_INSIGHTS.sectionSubtitle} Todos os números exibidos são fictícios para fins de demonstração comercial.
        </p>
      </div>
    </section>
  );
}
