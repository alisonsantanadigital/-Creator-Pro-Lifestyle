import type { StaticImageData } from 'next/image';

import heroLiviaImg from '@/src/assets/images/hero_livia_editorial_1794751047152.jpg';
import aboutLiviaImg from '@/src/assets/images/about_livia_studio_1794751048731.jpg';
import campaignBelezaBotanicaImg from '@/src/assets/images/campaign_beleza_botanica_1794751048911.jpg';
import campaignLifestyleCasaImg from '@/src/assets/images/campaign_lifestyle_casa_1794751049328.jpg';
import campaignExperienciasResortImg from '@/src/assets/images/campaign_experiencias_resort_1794751050101.jpg';
import campaignBelezaFragranciaImg from '@/src/assets/images/campaign_beleza_fragrancia_1794751049527.jpg';
import editorialTerracottaRitualImg from '@/src/assets/images/editorial_terracotta_ritual_1794803047335.jpg';
import editorialOlivePatioImg from '@/src/assets/images/editorial_olive_patio_1794803047706.jpg';

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
  introSummary: 'Conteúdo em foto e vídeo para marcas, produtos e ativações.',
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
  image: heroLiviaImg,
  imageAlt:
    'Retrato de Lívia Martins em blazer de linho claro sob iluminação natural.',
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
    'Publicações em foto e vídeo integrando produtos, beleza, rotina e experiências ao cotidiano de forma natural.',
  ],
  image: aboutLiviaImg,
  imageAlt:
    'Lívia Martins sentada à mesa com caderno de anotações e xícara de cerâmica em ambiente com luz natural.',
  imageCaptionLeft: 'Rotina e produção visual',
  imageCaptionRight: 'Ilustrativo',
  pillars: [
    { label: 'Categorias', value: 'Lifestyle · Beleza · Experiências' },
    { label: 'Temas', value: 'Rotina, produtos e viagens' },
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
    id: 'terracotta-ritual',
    title: 'Objetos e rotina matinal',
    formatLabel: 'Fotografia · Feed',
    category: 'Lifestyle',
    summary: 'Composição de rotina e papelaria em iluminação natural.',
    demoTag: 'Ilustrativo',
    aspect: 'portrait',
    image: editorialTerracottaRitualImg,
    imageAlt:
      'Vaso de terracota com ramos de oliveira, caderno aberto e óculos sobre pedra travertino.',
  },
  {
    id: 'atelier-botanique',
    title: 'Skincare e textura',
    formatLabel: 'Still de produto · Stories',
    category: 'Beleza',
    summary: 'Enquadramento limpo para embalagens e cuidados com a pele.',
    demoTag: 'Ilustrativo',
    aspect: 'landscape',
    image: campaignBelezaBotanicaImg,
    imageAlt:
      'Frasco de sérum facial em vidro fosco e pote cerâmico sobre pedra travertino.',
  },
  {
    id: 'patio-oliveiras',
    title: 'Arquitetura e hospedagem',
    formatLabel: 'Panorâmica · Diário de viagem',
    category: 'Experiências',
    summary: 'Cobertura de espaços externos, hotéis e roteiros.',
    demoTag: 'Ilustrativo',
    aspect: 'wide',
    image: editorialOlivePatioImg,
    imageAlt:
      'Pátio ensolarado com paredes claras, oliveiras em vasos de terracota e espreguiçadeira de linho.',
  },
  {
    id: 'casa-nomade',
    title: 'Mesa posta e casa',
    formatLabel: 'Fotografia · Feed',
    category: 'Lifestyle',
    summary: 'Ambientação residencial para café, livros e decoração.',
    demoTag: 'Ilustrativo',
    aspect: 'portrait',
    image: campaignLifestyleCasaImg,
    imageAlt:
      'Livro aberto sobre mesa de madeira clara ao lado de xícara de café e vaso cerâmico.',
  },
  {
    id: 'villa-serena',
    title: 'Destino e vista costeira',
    formatLabel: 'Viagem · Stories e Reels',
    category: 'Experiências',
    summary: 'Registro de estada e ambiente para turismo e lazer.',
    demoTag: 'Ilustrativo',
    aspect: 'landscape',
    image: campaignExperienciasResortImg,
    imageAlt:
      'Terraço de pedra clara com cortinas de linho e vista para o mar ao entardecer.',
  },
  {
    id: 'maison-aurea',
    title: 'Fragrância e cosméticos',
    formatLabel: 'Still de lançamento · Feed',
    category: 'Beleza',
    summary: 'Produto em luz direcional para lançamentos de beleza.',
    demoTag: 'Ilustrativo',
    aspect: 'landscape',
    image: campaignBelezaFragranciaImg,
    imageAlt:
      'Frasco minimalista de perfume em vidro transparente sobre tecido de seda claro.',
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
