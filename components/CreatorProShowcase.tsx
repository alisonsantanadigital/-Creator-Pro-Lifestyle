'use client';

import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { AboutSection } from '@/components/AboutSection';
import { AmbientBackground } from '@/components/AmbientBackground';
import { AudienceInsightsSection } from '@/components/AudienceInsightsSection';
import { BrandsMarqueeSection } from '@/components/BrandsMarqueeSection';
import { CampaignsSection } from '@/components/CampaignsSection';
import { CommercialContactSection } from '@/components/CommercialContactSection';
import { HeroSection } from '@/components/HeroSection';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { PartnershipFormatsSection } from '@/components/PartnershipFormatsSection';
import { TopBar } from '@/components/TopBar';

export function CreatorProShowcase() {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-[#282824]">
        <AmbientBackground />
        <div className="relative z-10">
          <TopBar />
          <main>
            <HeroSection />
            <AudienceInsightsSection />
            <AboutSection />
            <CampaignsSection />
            <PartnershipFormatsSection
              selectedFormat={selectedFormat}
              onSelectFormat={(formatTitle) => setSelectedFormat(formatTitle)}
            />
            <BrandsMarqueeSection />
          </main>
          <CommercialContactSection
            selectedFormat={selectedFormat}
            onClearFormat={() => setSelectedFormat(null)}
          />
          <MobileStickyBar />
        </div>
      </div>
    </MotionConfig>
  );
}
