import type { StaticImageData } from 'next/image';

import heroLiviaImg from '@/src/assets/images/hero_livia_editorial_1794751047152.jpg';
import aboutLiviaImg from '@/src/assets/images/about_livia_studio_1794751048731.jpg';
import campaignBelezaBotanicaImg from '@/src/assets/images/campaign_beleza_botanica_1794751048911.jpg';
import campaignLifestyleCasaImg from '@/src/assets/images/campaign_lifestyle_casa_1794751049328.jpg';
import campaignExperienciasResortImg from '@/src/assets/images/campaign_experiencias_resort_1794751050101.jpg';
import campaignBelezaFragranciaImg from '@/src/assets/images/campaign_beleza_fragrancia_1794751049527.jpg';

export type CampaignCategory = 'Todas' | 'Beleza' | 'Lifestyle' | 'Experiências';

export interface AudienceMetric {
  id: string;
  label: string;
  value: string;
  context: string;
}

export interface CampaignItem {
  id: string;
  title: string;
  conceptBrand: string;
  category: Exclude<CampaignCategory, 'Todas'>;
  deliverable: string;
  summary: string;
  demoTag: string;
  image: StaticImageData;
  imageAlt: string;
  featured?: boolean;
}

export interface PartnershipFormat {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string;
}

export const CREATOR_PROFILE = {
  productName: 'Creator Pro',
  brandHouse: 'Prumo Creators',
  name: 'Lívia Martins',
  role: 'Criadora de conteúdo digital',
  segments: 'Lifestyle, beleza e experiências',
  tagline: 'Conectando marcas a experiências autênticas.',
  heroCta: 'Vamos construir uma parceria?',
  instagramHandle: '@liviamartins.demo',
  tiktokHandle: '@liviamartins.demo',
} as const;

export const AUDIENCE_INSIGHTS = {
  sectionTitle: 'Audience Insights',
  sectionSubtitle:
    'Indicadores consolidados para planejamento de mídia e avaliação de aderência.',
  updatedAt: 'Atualizado em novembro de 2026',
  disclaimer: 'Dados demonstrativos · Perfil ilustrativo Creator Pro',
  metrics: [
    {
      id: 'instagram',
      label: 'Seguidores no Instagram',
      value: '85.000',
      context: 'Comunidade ativa em beleza e estilo de vida',
    },
    {
      id: 'tiktok',
      label: 'Seguidores no TikTok',
      value: '42.000',
      context: 'Narrativas visuais e rotinas em vídeo curto',
    },
    {
      id: 'reach',
      label: 'Alcance médio mensal',
      value: '185 mil',
      context: 'Contas únicas alcançadas entre formatos orgânicos',
    },
    {
      id: 'engagement',
      label: 'Taxa de engajamento',
      value: '4,8%',
      context: 'Média ponderada por interações e salvamentos',
    },
  ] satisfies AudienceMetric[],
};

export const ABOUT_SECTION = {
  kicker: 'Sobre a criadora',
  headline: 'Estética editorial aplicada a histórias reais de consumo e estilo de vida.',
  paragraphs: [
    'Lívia Martins traduz o cotidiano contemporâneo com olhar curatorial para beleza consciente, design de rotina e hospitalidade autoral. Sua produção combina direção de arte serena, luz natural e uma relação de confiança construída ao longo de anos com uma audiência atenta a qualidade e procedência.',
    'Em projetos comerciais, atua lado a lado com equipes de marca e agências desde o desdobramento criativo até a entrega final, garantindo coerência visual entre o universo da anunciante e a linguagem orgânica que sustenta sua comunidade.',
  ],
  image: aboutLiviaImg,
  imageAlt:
    'Lívia Martins em ambiente de estúdio iluminado por luz natural, sentada à mesa de travertino com caderno editorial e xícara de cerâmica.',
  credentials: [
    { label: 'Base editorial', value: 'São Paulo · Atuação nacional' },
    { label: 'Territórios de conteúdo', value: 'Lifestyle, Beleza e Experiências' },
    { label: 'Perfil predominante', value: 'Público adulto · 24 a 38 anos' },
  ],
} as const;

export const HERO_MEDIA = {
  image: heroLiviaImg,
  imageAlt:
    'Retrato editorial de Lívia Martins em blazer de linho marfim sob luz natural dourada de janela.',
} as const;

export const CAMPAIGN_CATEGORIES: CampaignCategory[] = [
  'Todas',
  'Beleza',
  'Lifestyle',
  'Experiências',
];

export const DEMO_CAMPAIGNS: CampaignItem[] = [
  {
    id: 'atelier-botanique',
    title: 'Ritual Botânico de Inverno',
    conceptBrand: 'Atelier Botanique (Conceito)',
    category: 'Beleza',
    deliverable: 'Reels editorial + Sequência de Stories',
    summary:
      'Direção criativa e narrativa sensorial destacando textura, aplicação noturna e rotina minimalista de autocuidado.',
    demoTag: 'Campanha demonstrativa',
    image: campaignBelezaBotanicaImg,
    imageAlt:
      'Frasco de sérum facial em vidro fosco e pote cerâmico sobre pedra travertino sob luz suave matinal.',
    featured: true,
  },
  {
    id: 'casa-nomade',
    title: 'Manhãs de Pausa & Design',
    conceptBrand: 'Casa Nômade (Conceito)',
    category: 'Lifestyle',
    deliverable: 'Combo TikTok + Galeria Instagram',
    summary:
      'Integração orgânica de mesa posta, objetos autorais e rituais de leitura em ambiente residencial de luz natural.',
    demoTag: 'Campanha demonstrativa',
    image: campaignLifestyleCasaImg,
    imageAlt:
      'Livro de arte aberto sobre mesa de carvalho claro ao lado de xícara artesanal e vaso cerâmico.',
  },
  {
    id: 'villa-serena',
    title: 'Temporada de Hospitalidade Silenciosa',
    conceptBrand: 'Villa Serena (Conceito)',
    category: 'Experiências',
    deliverable: 'Cobertura de estada + Reels cinematográfico',
    summary:
      'Diário visual de destino boutique com foco em arquitetura, gastronomia local e atmosfera acolhedora.',
    demoTag: 'Campanha demonstrativa',
    image: campaignExperienciasResortImg,
    imageAlt:
      'Terraço de pedra clara com cortinas de linho off-white e vista serena para o mar ao entardecer.',
  },
  {
    id: 'maison-aurea',
    title: 'Essência em Luz Dourada',
    conceptBrand: 'Maison Auréa (Conceito)',
    category: 'Beleza',
    deliverable: 'Lançamento em Reels + Stills de produto',
    summary:
      'Ensaio editorial em seda crua e luz direcional para posicionamento premium de nova assinatura olfativa.',
    demoTag: 'Campanha demonstrativa',
    image: campaignBelezaFragranciaImg,
    imageAlt:
      'Frasco minimalista de perfume em vidro transparente com tampa dourada fosca sobre tecido de seda marfim.',
  },
];

export const PARTNERSHIP_FORMATS: PartnershipFormat[] = [
  {
    number: '01',
    title: 'Instagram Stories',
    subtitle: 'Narrativa cotidiana e conversão direta',
    description:
      'Sequências planejadas de 4 a 6 telas com demonstração natural de uso, contextualização de benefícios e direcionamento objetivo para o link da campanha.',
    deliverables: 'Roteiro aprovado · Aplicação real · Métricas pós-campanha',
  },
  {
    number: '02',
    title: 'Reels',
    subtitle: 'Produção audiovisual de assinatura editorial',
    description:
      'Vídeos verticais de alta definição com direção de arte alinhada à identidade da marca, ritmo elegante e foco em descoberta e salvamentos.',
    deliverables: 'Captação 4K · Edição autoral · Opção de impulsionamento (Whitelisting)',
  },
  {
    number: '03',
    title: 'TikTok',
    subtitle: 'Storytelling ágil e proximidade de comunidade',
    description:
      'Conteúdo nativo que aproxima produtos de beleza, casa e experiências de uma audiência conectada a tendências e recomendações genuínas.',
    deliverables: 'Linguagem nativa · Review editorial · Engajamento em comentários',
  },
  {
    number: '04',
    title: 'Presença em eventos',
    subtitle: 'Lançamentos, jantares e ativações presenciais',
    description:
      'Participação estratégica em experiências de marca, press trips e inaugurações, com cobertura estética em tempo real e relacionamento qualificado.',
    deliverables: 'Presença dedicada · Cobertura em Stories · Registros autorais',
  },
  {
    number: '05',
    title: 'Campanhas personalizadas',
    subtitle: 'Projetos sob medida e embaixadorias sazonais',
    description:
      'Combinação estratégica de múltiplos formatos, direitos de uso de imagem e entregas contínuas desenhadas a partir dos objetivos comerciais da anunciante.',
    deliverables: 'Plano multi-plataforma · Licenciamento sob consulta · Acompanhamento dedicado',
  },
];

export const DEMO_CONTACT = {
  kicker: 'Contato Comercial',
  headline: 'Vamos desenhar a próxima campanha da sua marca.',
  description:
    'Entre em contato para solicitar o Media Kit completo em PDF, consultar janelas de agenda ou receber uma proposta desenhada sob medida para o seu briefing.',
  whatsappLabel: 'Contato via WhatsApp',
  whatsappValue: '+55 (11) 90000-0000',
  emailLabel: 'E-mail comercial demonstrativo',
  emailValue: 'comercial@liviamartins.demo',
  instagramLabel: 'Instagram demonstrativo',
  instagramValue: '@liviamartins.demo',
  footerNote:
    'Os contatos acima são exclusivamente demonstrativos e pertencem à vitrine conceitual do produto Creator Pro — Prumo Creators. Não realizam atendimento ou envio real.',
} as const;
