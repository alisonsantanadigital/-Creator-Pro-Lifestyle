import { EditorialImage } from '@/components/EditorialImage';
import { ABOUT_SECTION } from '@/lib/creator-data';

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="scroll-mt-20 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Secondary Editorial Photograph */}
          <div className="lg:col-span-5">
            <figure className="border border-[#171614]/12 p-2.5 sm:p-3">
              <EditorialImage
                src={ABOUT_SECTION.image}
                alt={ABOUT_SECTION.imageAlt}
                sizes="(max-width: 1024px) 100vw, 42vw"
                aspectClassName="aspect-[4/3]"
                fallbackTitle="Lívia Martins · Estúdio"
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-2 pt-3 pb-1 text-xs text-[#6B6359]">
                <span>{ABOUT_SECTION.imageCaptionLeft}</span>
                <span className="text-[#8A6836]">{ABOUT_SECTION.imageCaptionRight}</span>
              </figcaption>
            </figure>
          </div>

          {/* Editorial Biography */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.14em] text-[#8A6836]">
              {ABOUT_SECTION.kicker}
            </p>
            <h2
              id="sobre-heading"
              className="mt-3 max-w-2xl font-serif text-3xl leading-[1.14] font-normal tracking-tight text-[#171614] text-balance sm:text-4xl lg:text-[42px]"
            >
              {ABOUT_SECTION.headline}
            </h2>

            <div className="mt-7 max-w-[64ch] space-y-5 text-[15.5px] leading-[1.75] text-[#3F3B36]">
              {ABOUT_SECTION.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Unboxed Editorial Credentials */}
            <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-[#171614]/12 pt-7 sm:grid-cols-3">
              {ABOUT_SECTION.credentials.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium text-[#6B6359]">{item.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-[#171614]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
