import type { Metadata } from 'next';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/600.css';
import './globals.css';

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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="bg-[#FFFFFF] font-sans text-[#282824] antialiased selection:bg-[#BD765B]/20 selection:text-[#282824]"
      >
        {children}
      </body>
    </html>
  );
}
