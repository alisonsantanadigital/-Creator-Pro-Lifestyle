'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CREATOR_PROFILE } from '@/lib/creator-data';

const NAV_ITEMS = [
  { label: 'Insights', href: '#insights' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Campanhas', href: '#campanhas' },
  { label: 'Formatos', href: '#formatos' },
] as const;

export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#171614]/10 bg-[#FAF7F2]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6 sm:px-10">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#topo"
          onClick={(e) => handleNavigate(e, '#topo')}
          className="font-serif text-xl font-medium tracking-tight text-[#171614] whitespace-nowrap shrink-0 transition-opacity duration-150 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6836] sm:text-2xl"
        >
          {CREATOR_PROFILE.name}
        </a>

        {/* Zone 2: 4 concise single-line text nav links */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavigate(e, item.href)}
              className="relative py-1 text-sm font-medium text-[#4A4640] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#171614] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#B08D57] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6836]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contato"
            onClick={(e) => handleNavigate(e, '#contato')}
            className="hidden min-h-[40px] items-center justify-center border border-[#171614] bg-[#171614] px-5 py-2 text-xs font-medium tracking-wide text-[#FAF7F2] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#8A6836] hover:bg-[#2A2723] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6836] sm:inline-flex"
          >
            Proposta Comercial
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[#171614] transition-colors duration-150 hover:text-[#8A6836] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A6836] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#171614]/10 bg-[#FAF7F2] px-6 py-5 md:hidden"
        >
          <nav aria-label="Menu móvel" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavigate(e, item.href)}
                className="flex min-h-[44px] items-center border-b border-[#171614]/8 text-sm font-medium text-[#171614] transition-colors duration-150 hover:text-[#8A6836]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e) => handleNavigate(e, '#contato')}
              className="mt-3 flex min-h-[44px] items-center justify-center bg-[#171614] px-5 py-2.5 text-sm font-medium text-[#FAF7F2] transition-colors duration-150 hover:bg-[#2A2723]"
            >
              Proposta Comercial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
