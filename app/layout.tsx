import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Creator Pro — Lívia Martins | Prumo Creators',
  description:
    'Apresentação comercial editorial e Media Kit demonstrativo de Lívia Martins para o produto Creator Pro da Prumo Creators.',
  openGraph: {
    title: 'Creator Pro — Lívia Martins | Prumo Creators',
    description:
      'Conectando marcas a experiências autênticas. Vitrine editorial demonstrativa de Lifestyle, Beleza e Experiências.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creator Pro — Lívia Martins | Prumo Creators',
    description:
      'Conectando marcas a experiências autênticas. Vitrine editorial demonstrativa de Lifestyle, Beleza e Experiências.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#FAF7F2] font-sans text-[#171614] antialiased selection:bg-[#B08D57]/20 selection:text-[#171614]"
      >
        {children}
      </body>
    </html>
  );
}
