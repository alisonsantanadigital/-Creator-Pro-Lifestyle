import type { StaticImageData } from 'next/image';

import heroLiviaModernImg from '@/src/assets/images/hero_livia_modern_1794806509722.jpg';
import aboutLiviaModernImg from '@/src/assets/images/about_livia_modern_1794806510803.jpg';
import modernSkincareMirrorImg from '@/src/assets/images/modern_skincare_mirror_1794806510468.jpg';
import modernMorningCoffeeImg from '@/src/assets/images/modern_morning_coffee_1794806511705.jpg';
import modernCafeTerraceImg from '@/src/assets/images/modern_cafe_terrace_1794806512286.jpg';
import modernStreetStrollImg from '@/src/assets/images/modern_street_stroll_1794806513482.jpg';
import homePerfumeBedroomImg from '@/src/assets/images/home_perfume_bedroom_1794805560566.jpg';
import campaignExperienciasResortImg from '@/src/assets/images/campaign_experiencias_resort_1794751050101.jpg';

export type CampaignCategory = 'Todas' | 'Beleza' | 'Lifestyle' | 'Experiências';

export type EditorialAspect = 'portrait' | 'landscape' | 'wide';

export interface AudienceMetric {
  id: string;
  label: string;
  /** Leave null when no real metric is available yet; renders prepared state instead of fake numbers. */
  numericTarget: number | null;
  suffix?: string;
  decimals?: number;
  thousandSeparator?: boolean;
  displayFallback: string;
  context: string;
}

export interface AudienceDistributionGroup {
  id: string;
  title: string;
  emptyNotice: string;
  /** Populate with real platform demographic splits when available. Leave empty if unconfirmed. */
  items: {
    label: string;
    percentage: number;
  }[];
}

export interface CampaignItem {
  id: string;
  title: string;
  formatLabel: string;
  category: Exclude<CampaignCategory, 'Todas'>;
  summary: string;
  demoTag: string;
  aspect: EditorialAspect;
  image: StaticImageData;
  imageAlt: string;
  imagePositionClass?: string;
  /** Optional real video URL when available. Leave undefined when only photography exists. */
  videoUrl?: string;
}

export interface PartnershipFormat {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  segment: string;
  logoSrc?: string;
}

export const CREATOR_PROFILE = {
  productName: 'Creator Pro',
  brandHouse: 'Prumo Creators',
  name: 'Lívia Martins',
  role: 'Criadora de conteúdo digital',
  segments: 'Lifestyle, beleza e experiências',
  positioning: 'Lifestyle, beleza e experiências.',
  introSummary: 'Conteúdo espontâneo em foto e vídeo para marcas e rotina real.',
  primaryCta: 'Vamos criar algo juntas?',
  headerMetaLeft: 'Media Kit · Creator Pro',
  headerMetaRight: 'Demonstração comercial',
  instagramHandle: '@liviamartins.demo',
  tiktokHandle: '@liviamartins.demo',
  isDemo: true,
} as const;

export const HERO_MEDIA: {
  image: StaticImageData;
  imageAlt: string;
  videoUrl?: string;
} = {
  image: heroLiviaModernImg,
  imageAlt:
    'Retrato natural de Lívia Martins de camisa branca aberta sobre regata canelada em apartamento iluminado com plantas.',
  videoUrl: undefined,
};

export const AUDIENCE_INSIGHTS = {
  sectionKicker: 'Audiência',
  sectionTitle: 'Números do perfil',
  sectionSubtitle: 'Novembro de 2026 · Dados ilustrativos e campos para atualização.',
  updatedAt: 'Novembro de 2026',
  disclaimer: 'Dados ilustrativos',
  metrics: [
    {
      id: 'instagram',
      label: 'Instagram',
      numericTarget: 85000,
      thousandSeparator: true,
      displayFallback: '85.000',
      context: 'Seguidores (demonstrativo)',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      numericTarget: 42000,
      thousandSeparator: true,
      displayFallback: '42.000',
      context: 'Seguidores (demonstrativo)',
    },
    {
      id: 'reach',
      label: 'Alcance médio',
      numericTarget: null,
      displayFallback: 'A atualizar',
      context: 'Métrica preparada',
    },
    {
      id: 'views',
      label: 'Visualizações médias',
      numericTarget: null,
      displayFallback: 'A atualizar',
      context: 'Métrica preparada',
    },
  ] satisfies AudienceMetric[],
  distributionsTitle: 'Perfil demográfico',
  distributions: [
    {
      id: 'gender',
      title: 'Gênero',
      emptyNotice: 'Aguardando dados reais.',
      items: [],
    },
    {
      id: 'age',
      title: 'Faixa etária',
      emptyNotice: 'Aguardando dados reais.',
      items: [],
    },
    {
      id: 'location',
      title: 'Localização',
      emptyNotice: 'Aguardando dados reais.',
      items: [],
    },
  ] as AudienceDistributionGroup[],
};

export const ABOUT_SECTION = {
  kicker: 'Conteúdo',
  headline: 'O que Lívia produz.',
  paragraphs: [
    'Registros naturais do dia a dia integrando beleza, estilo de vida e experiências com linguagem atual de criadora.',
  ],
  image: aboutLiviaModernImg,
  imageAlt:
    'Lívia Martins sentada no sofá ajustando o celular no tripé ao lado da janela iluminada.',
  imageCaptionLeft: 'Bastidores e rotina diária',
  imageCaptionRight: 'Ilustrativo',
  pillars: [
    { label: 'Categorias', value: 'Lifestyle · Beleza · Experiências' },
    { label: 'Temas', value: 'Rotina, skincare e cafés' },
    { label: 'Formatos', value: 'Stories · Reels · TikTok' },
  ],
} as const;

export const CAMPAIGN_CATEGORIES: CampaignCategory[] = [
  'Todas',
  'Beleza',
  'Lifestyle',
  'Experiências',
];

export const DEMO_CAMPAIGNS: CampaignItem[] = [
  {
    id: 'rotina-manha-cafe',
    title: 'Café gelado e manhã em casa',
    formatLabel: 'Foto espontânea · Feed',
    category: 'Lifestyle',
    summary: 'Registro matinal natural com café, anotações e luz direta da janela.',
    demoTag: 'Ilustrativo',
    aspect: 'portrait',
    image: modernMorningCoffeeImg,
    imageAlt:
      'Mesa clara com café gelado em copo canelado, caderno aberto, óculos de sol e tigela de frutas.',
    imagePositionClass: 'object-bottom',
  },
  {
    id: 'skincare-bancada',
    title: 'Rotina de skincare na pia',
    formatLabel: 'Produto no dia a dia · Stories',
    category: 'Beleza',
    summary: 'Sérum facial e lip balm sob luz da manhã com acessórios pessoais.',
    demoTag: 'Ilustrativo',
    aspect: 'landscape',
    image: modernSkincareMirrorImg,
    imageAlt:
      'Frasco de sérum fosco, lip balm, presilha tartaruga e argolas douradas na bancada iluminada.',
    imagePositionClass: 'object-[50%_62%]',
  },
  {
    id: 'cafe-bairro-patio',
    title: 'Tarde em café ao ar livre',
    formatLabel: 'Experiência urbana · Reels',
    category: 'Experiências',
    summary: 'Cobertura leve de gastronomia, cafés locais e rotina fora de casa.',
    demoTag: 'Ilustrativo',
    aspect: 'wide',
    image: modernCafeTerraceImg,
    imageAlt:
      'Lívia Martins sorrindo ao usar o celular em mesa de mármore com café gelado e croissant em pátio ensolarado.',
    imagePositionClass: 'object-top',
  },
  {
    id: 'caminhada-bairro',
    title: 'Passeio de fim de tarde',
    formatLabel: 'Estilo cotidiano · Feed',
    category: 'Lifestyle',
    summary: 'Look casual em linho e bolsa de palha com flores na rua arborizada.',
    demoTag: 'Ilustrativo',
    aspect: 'portrait',
    image: modernStreetStrollImg,
    imageAlt:
      'Lívia Martins caminhando sorrindo em rua arborizada com camiseta branca, calça de linho e bolsa com flores.',
    imagePositionClass: 'object-top',
  },
  {
    id: 'fragrancia-quarto',
    title: 'Fragrância junto à janela',
    formatLabel: 'Detalhe de beleza · Feed',
    category: 'Beleza',
    summary: 'Perfume sobre criado-mudo com luz filtrada por cortina leve.',
    demoTag: 'Ilustrativo',
    aspect: 'landscape',
    image: homePerfumeBedroomImg,
    imageAlt:
      'Frasco de perfume sobre madeira natural ao lado de bandeja cerâmica e folhas secas ao sol.',
    imagePositionClass: 'object-[50%_58%]',
  },
  {
    id: 'fim-de-semana-costa',
    title: 'Viagem leve de fim de semana',
    formatLabel: 'Diário de viagem · Stories e Reels',
    category: 'Experiências',
    summary: 'Registro tranquilo de hospedagem com vista costeira ao entardecer.',
    demoTag: 'Ilustrativo',
    aspect: 'landscape',
    image: campaignExperienciasResortImg,
    imageAlt:
      'Terraço claro com cortinas de linho ao vento e vista para o mar ao fim da tarde.',
    imagePositionClass: 'object-center',
  },
];

export const PARTNERSHIP_FORMATS: PartnershipFormat[] = [
  {
    number: '01',
    title: 'Instagram Stories',
    subtitle: 'Sequência com link direto',
    description:
      'Apresentação prática do produto em 4 a 6 telas com direcionamento para a campanha.',
    deliverables: 'Uso prático · Link externo',
  },
  {
    number: '02',
    title: 'Reels',
    subtitle: 'Vídeo vertical para alcance',
    description:
      'Vídeo curto para demonstração de produto e contexto de uso no Instagram.',
    deliverables: 'Gravação e edição · Collab opcional',
  },
  {
    number: '03',
    title: 'TikTok',
    subtitle: 'Vídeo curto nativo',
    description:
      'Apresentação direta de produto ou rotina no ritmo da plataforma.',
    deliverables: 'Formato nativo · Demonstração',
  },
  {
    number: '04',
    title: 'Presença em eventos',
    subtitle: 'Ativações e cobertura ao vivo',
    description:
      'Participação presencial em lançamentos e ações de marca com registros em Stories.',
    deliverables: 'Presença física · Cobertura em tempo real',
  },
  {
    number: '05',
    title: 'Campanhas personalizadas',
    subtitle: 'Pacotes sob briefing',
    description:
      'Combinação de entregas entre redes e eventos conforme objetivo e prazo.',
    deliverables: 'Escopo sob medida · Licenciamento sob consulta',
  },
];

/**
 * Populate only with verified, proven brand partnerships.
 * Leave empty to keep the section prepared for future insertion without inventing brands.
 */
export const BRAND_PARTNERS: BrandPartner[] = [];

export const BRANDS_SECTION = {
  kicker: 'Marcas',
  headline: 'Parcerias confirmadas.',
  emptyNotice:
    'Espaço reservado para logotipos de marcas parceiras reais.',
  placeholderSlots: [
    'Marca parceira 01',
    'Marca parceira 02',
    'Marca parceira 03',
    'Marca parceira 04',
    'Marca parceira 05',
  ],
} as const;

export const DEMO_CONTACT = {
  kicker: 'Contato',
  headline: 'Solicite um orçamento.',
  description:
    'Consulte agenda e formatos pelo WhatsApp ou e-mail comercial.',
  primaryCta: 'Vamos criar algo juntas?',
  whatsappValue: '+55 (11) 90000-0000',
  emailLabel: 'E-mail (ilustrativo)',
  emailValue: 'comercial@liviamartins.demo',
  instagramLabel: 'Instagram (ilustrativo)',
  instagramValue: '@liviamartins.demo',
  footerNote:
    'Demonstração Creator Pro — Prumo Creators. Contatos ilustrativos sem envio real.',
} as const;

export function buildWhatsappProposalMessage(selectedFormat: string | null): string {
  if (selectedFormat) {
    return `Olá! Gostaria de solicitar um orçamento de parceria com ${CREATOR_PROFILE.name} no formato "${selectedFormat}".`;
  }
  return `Olá! Gostaria de solicitar um orçamento e consultar a disponibilidade de parceria com ${CREATOR_PROFILE.name}.`;
}
