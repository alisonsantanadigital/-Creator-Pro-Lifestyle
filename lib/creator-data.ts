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
  positioning:
    'Produção de conteúdo em lifestyle, beleza e experiências para marcas.',
  introSummary:
    'Apresentação comercial com foco em rotinas reais, demonstração de produtos e cobertura de experiências para Instagram, TikTok e ações presenciais.',
  primaryCta: 'Vamos criar algo juntas?',
  headerMetaLeft: 'Media Kit · Demonstração Creator Pro',
  headerMetaRight: 'Lifestyle · Beleza · Experiências',
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
  sectionTitle: 'Números e dados do público',
  sectionSubtitle:
    'Seguidores ilustrativos da demonstração e campos preparados para inclusão de alcance, visualizações e demografia reais.',
  updatedAt: 'Atualizado em novembro de 2026',
  disclaimer: 'Perfil demonstrativo · Campos sem dados reais permanecem abertos',
  metrics: [
    {
      id: 'instagram',
      label: 'Seguidores no Instagram',
      numericTarget: 85000,
      thousandSeparator: true,
      displayFallback: '85.000',
      context: 'Dado demonstrativo de perfil',
    },
    {
      id: 'tiktok',
      label: 'Seguidores no TikTok',
      numericTarget: 42000,
      thousandSeparator: true,
      displayFallback: '42.000',
      context: 'Dado demonstrativo de perfil',
    },
    {
      id: 'reach',
      label: 'Alcance médio',
      numericTarget: null,
      displayFallback: 'A atualizar',
      context: 'Preparado para dados reais de alcance',
    },
    {
      id: 'views',
      label: 'Visualizações médias',
      numericTarget: null,
      displayFallback: 'A atualizar',
      context: 'Preparado para média real de Reels e TikTok',
    },
  ] satisfies AudienceMetric[],
  distributionsTitle: 'Dados demográficos (preparado para informações reais)',
  distributions: [
    {
      id: 'gender',
      title: 'Distribuição de gênero',
      emptyNotice: 'Aguardando dados reais do Instagram e TikTok.',
      items: [],
    },
    {
      id: 'age',
      title: 'Faixas etárias',
      emptyNotice: 'Aguardando recorte etário oficial da audiência.',
      items: [],
    },
    {
      id: 'location',
      title: 'Localização da audiência',
      emptyNotice: 'Aguardando principais cidades e estados.',
      items: [],
    },
  ] as AudienceDistributionGroup[],
};

export const ABOUT_SECTION = {
  kicker: 'Conteúdo',
  headline: 'Categorias, temas e formatos de publicação.',
  paragraphs: [
    'Lívia Martins produz conteúdo digital voltado para lifestyle, beleza e experiências, combinando fotografias e vídeos verticais em linguagem natural e contemporânea.',
    'As publicações integram produtos e vivências de marca à rotina cotidiana, facilitando a apresentação prática de benefícios para quem acompanha seus canais.',
  ],
  image: aboutLiviaImg,
  imageAlt:
    'Lívia Martins sentada à mesa com caderno de anotações e xícara de cerâmica em ambiente com luz natural.',
  imageCaptionLeft: 'Produção de conteúdo e rotina',
  imageCaptionRight: 'Fotografia ilustrativa',
  pillars: [
    { label: 'Categorias principais', value: 'Lifestyle · Beleza · Experiências' },
    { label: 'Temas abordados', value: 'Rotina, cuidados pessoais e vivências' },
    { label: 'Formatos publicados', value: 'Stories, Reels e TikTok' },
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
    title: 'Rotina matinal e objetos de mesa',
    formatLabel: 'Fotografia · Conteúdo para Feed',
    category: 'Lifestyle',
    summary:
      'Registro de itens pessoais em iluminação natural, exemplo de composição para marcas de casa e papelaria.',
    demoTag: 'Exemplo ilustrativo',
    aspect: 'portrait',
    image: editorialTerracottaRitualImg,
    imageAlt:
      'Vaso de terracota com ramos de oliveira, caderno aberto e óculos sobre pedra travertino.',
  },
  {
    id: 'atelier-botanique',
    title: 'Apresentação de produtos de skincare',
    formatLabel: 'Stills de produto · Stories',
    category: 'Beleza',
    summary:
      'Enquadramento limpo para destaque de embalagens, texturas e linha de cuidados com a pele.',
    demoTag: 'Exemplo ilustrativo',
    aspect: 'landscape',
    image: campaignBelezaBotanicaImg,
    imageAlt:
      'Frasco de sérum facial em vidro fosco e pote cerâmico sobre pedra travertino.',
  },
  {
    id: 'patio-oliveiras',
    title: 'Ambiente externo e hospedagem',
    formatLabel: 'Fotografia panorâmica · Diário de viagem',
    category: 'Experiências',
    summary:
      'Exemplo de cobertura visual para hotéis, espaços arquitetônicos e roteiros ao ar livre.',
    demoTag: 'Exemplo ilustrativo',
    aspect: 'wide',
    image: editorialOlivePatioImg,
    imageAlt:
      'Pátio ensolarado com paredes claras, oliveiras em vasos de terracota e espreguiçadeira de linho.',
  },
  {
    id: 'casa-nomade',
    title: 'Mesa posta e momento de pausa',
    formatLabel: 'Fotografia · Publicação para Feed',
    category: 'Lifestyle',
    summary:
      'Ambientação residencial para marcas de café, decoração, livros e objetos de uso diário.',
    demoTag: 'Exemplo ilustrativo',
    aspect: 'portrait',
    image: campaignLifestyleCasaImg,
    imageAlt:
      'Livro aberto sobre mesa de madeira clara ao lado de xícara de café e vaso cerâmico.',
  },
  {
    id: 'villa-serena',
    title: 'Cobertura de destino e vista costeira',
    formatLabel: 'Registro de viagem · Stories e Reels',
    category: 'Experiências',
    summary:
      'Apresentação de espaços de lazer e estada com foco em ambiente e experiência do visitante.',
    demoTag: 'Exemplo ilustrativo',
    aspect: 'landscape',
    image: campaignExperienciasResortImg,
    imageAlt:
      'Terraço de pedra clara com cortinas de linho e vista para o mar ao entardecer.',
  },
  {
    id: 'maison-aurea',
    title: 'Fotografia de fragrância e beleza',
    formatLabel: 'Still de lançamento · Feed',
    category: 'Beleza',
    summary:
      'Composição de produto para lançamentos de perfumaria e cosméticos com iluminação direcional.',
    demoTag: 'Exemplo ilustrativo',
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
    subtitle: 'Publicação sequencial com link direto',
    description:
      'Sequência de telas para apresentar o produto, mostrar o uso na prática e direcionar a audiência para o site ou página da campanha.',
    deliverables: 'Alinhamento de pauta · Demonstração em vídeo ou foto · Link externo',
  },
  {
    number: '02',
    title: 'Reels',
    subtitle: 'Vídeo vertical para apresentação de produto',
    description:
      'Produção de vídeo curto para o Instagram com foco em apresentação visual clara, contexto de uso e alcance orgânico.',
    deliverables: 'Roteiro aprovado · Gravação e edição · Publicação em collab opcional',
  },
  {
    number: '03',
    title: 'TikTok',
    subtitle: 'Vídeo curto em linguagem nativa da plataforma',
    description:
      'Conteúdo adaptado ao ritmo do TikTok para demonstrar produtos, rotinas e novidades de forma direta para a comunidade.',
    deliverables: 'Formato nativo · Demonstração prática · Interação nos comentários',
  },
  {
    number: '04',
    title: 'Presença em eventos',
    subtitle: 'Participação presencial e cobertura em tempo real',
    description:
      'Presença em lançamentos, encontros de marca, inaugurações e experiências, acompanhada de registros publicados durante a ação.',
    deliverables: 'Participação presencial · Cobertura em Stories · Registros do evento',
  },
  {
    number: '05',
    title: 'Campanhas personalizadas',
    subtitle: 'Pacotes sob demanda para objetivos específicos',
    description:
      'Combinação de formatos entre Instagram, TikTok e eventos ajustada ao cronograma, briefing e orçamento da marca anunciante.',
    deliverables: 'Escopo sob medida · Prazo combinado · Direitos de uso sob consulta',
  },
];

/**
 * Populate only with verified, proven brand partnerships.
 * Leave empty to keep the section prepared for future insertion without inventing brands.
 */
export const BRAND_PARTNERS: BrandPartner[] = [];

export const BRANDS_SECTION = {
  kicker: 'Marcas',
  headline: 'Espaço reservado para parcerias confirmadas.',
  emptyNotice:
    'Nenhuma marca parceira real foi cadastrada nesta demonstração. Ao adicionar parcerias confirmadas, os logotipos passam a ser exibidos nesta faixa.',
  placeholderSlots: [
    'Espaço preparado · Marca parceira 01',
    'Espaço preparado · Marca parceira 02',
    'Espaço preparado · Marca parceira 03',
    'Espaço preparado · Marca parceira 04',
    'Espaço preparado · Marca parceira 05',
  ],
} as const;

export const DEMO_CONTACT = {
  kicker: 'Contato',
  headline: 'Solicite uma parceria ou orçamento.',
  description:
    'Entre em contato pelo WhatsApp ou e-mail comercial para verificar disponibilidade de agenda e receber uma proposta para a sua marca.',
  primaryCta: 'Vamos criar algo juntas?',
  whatsappValue: '+55 (11) 90000-0000',
  emailLabel: 'E-mail comercial (ilustrativo)',
  emailValue: 'comercial@liviamartins.demo',
  instagramLabel: 'Instagram (ilustrativo)',
  instagramValue: '@liviamartins.demo',
  footerNote:
    'Demonstração do produto Creator Pro — Prumo Creators. Contatos exibidos são ilustrativos e não realizam envios reais.',
} as const;

export function buildWhatsappProposalMessage(selectedFormat: string | null): string {
  if (selectedFormat) {
    return `Olá! Gostaria de solicitar um orçamento de parceria com ${CREATOR_PROFILE.name} no formato "${selectedFormat}".`;
  }
  return `Olá! Gostaria de solicitar um orçamento e consultar a disponibilidade de parceria com ${CREATOR_PROFILE.name}.`;
}
