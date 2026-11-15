'use client';

import { MotionConfig } from 'motion/react';
import { useState } from 'react';
import { AboutSection } from '@/components/AboutSection';
import { AudienceInsightsSection } from '@/components/AudienceInsightsSection';
import { CampaignsSection } from '@/components/CampaignsSection';
import { CommercialContactSection } from '@/components/CommercialContactSection';
import { HeroSection } from '@/components/HeroSection';
import { PartnershipFormatsSection } from '@/components/PartnershipFormatsSection';
import { TopBar } from '@/components/TopBar';

export function CreatorProShowcase() {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FAF7F2] text-[#171614]">
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
        </main>
        <CommercialContactSection
          selectedFormat={selectedFormat}
          onClearFormat={() => setSelectedFormat(null)}
        />
      </div>
    </MotionConfig>
  );
}
