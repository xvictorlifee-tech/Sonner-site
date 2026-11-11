/**
 * Serviços da Sonner. Usado na Home (lista resumida) e na página Soluções (detalhe).
 * A ordem aqui é a ordem em que aparecem no site.
 */

export interface Service {
  slug: string;
  title: string;
  /** Nome curto, usado na faixa do topo da Home. */
  short: string;
  /** Frase curta, usada na Home. */
  summary: string;
  /** Parágrafo da página Soluções. */
  description: string;
  /** O que o cliente ganha. Benefícios, nunca promessas de resultado. */
  benefits: string[];
  /** O que pode estar incluído. */
  includes: string[];
}

export const services: Service[] = [
  {
    slug: 'social-media',
    short: 'Social media',
    title: 'Social media e conteúdo',
    summary: 'Planejamento, criação e gestão de conteúdo para manter sua marca presente e relevante nas redes.',
    description:
      'Cuidamos das redes sociais da sua marca de ponta a ponta: do planejamento editorial à publicação. Cada post nasce de uma estratégia, com linguagem e visual consistentes com quem você é.',
    benefits: [
      'Presença constante, sem depender de inspiração do dia',
      'Conteúdo alinhado ao seu público e ao seu momento',
      'Mais tempo para você cuidar do seu negócio',
    ],
    includes: ['Planejamento e calendário editorial', 'Criação de posts, carrosséis e stories', 'Legendas e roteiros', 'Gestão e publicação'],
  },
  {
    slug: 'design',
    short: 'Design',
    title: 'Design e criação de peças',
    summary: 'Peças gráficas para o digital e o impresso, sempre fiéis à identidade da sua marca.',
    description:
      'Criamos as peças que a sua marca precisa no dia a dia, com acabamento profissional e coerência visual em todos os pontos de contato, do feed ao material impresso.',
    benefits: [
      'Uma marca que parece a mesma em qualquer lugar',
      'Comunicação mais clara e profissional',
      'Agilidade para campanhas e datas importantes',
    ],
    includes: ['Peças para redes sociais', 'Materiais impressos', 'Apresentações e propostas', 'Peças para campanhas'],
  },
  {
    slug: 'identidade-visual',
    short: 'Identidade visual',
    title: 'Identidade visual e branding',
    summary: 'Logotipo, cores, tipografia e um sistema visual que dá personalidade e coerência à sua marca.',
    description:
      'Construímos ou renovamos a identidade da sua marca a partir de quem ela é e de quem ela quer alcançar. O resultado é um sistema visual completo, pronto para ser aplicado com consistência.',
    benefits: [
      'Uma marca com personalidade própria',
      'Reconhecimento e lembrança mais fáceis',
      'Base sólida para toda a comunicação futura',
    ],
    includes: ['Logotipo e versões', 'Paleta de cores e tipografia', 'Elementos gráficos de apoio', 'Manual de identidade visual'],
  },
  {
    slug: 'sites',
    short: 'Sites',
    title: 'Sites e landing pages',
    summary: 'Páginas rápidas, responsivas e pensadas para transformar visitas em contatos.',
    description:
      'Desenvolvemos sites institucionais e landing pages com design sob medida, boa performance e foco em conversão. Tudo pensado para funcionar bem no celular, onde está a maior parte do seu público.',
    benefits: [
      'Uma vitrine profissional aberta 24 horas',
      'Navegação simples, que leva o visitante até o contato',
      'Base técnica preparada para ser encontrada no Google',
    ],
    includes: ['Sites institucionais', 'Landing pages para campanhas', 'Design responsivo', 'SEO básico e boas práticas de performance'],
  },
  {
    slug: 'trafego-pago',
    short: 'Tráfego pago',
    title: 'Tráfego pago',
    summary: 'Campanhas em mídia paga para levar sua mensagem às pessoas certas, com acompanhamento constante.',
    description:
      'Planejamos, criamos e gerenciamos campanhas de anúncios para ampliar o alcance da sua marca. Cada campanha é acompanhada de perto e ajustada com base no que os dados mostram.',
    benefits: [
      'Sua marca vista por quem tem mais chance de se interessar',
      'Investimento acompanhado com transparência',
      'Decisões baseadas em dados, não em achismo',
    ],
    includes: ['Planejamento de campanhas', 'Criação dos anúncios', 'Segmentação de público', 'Acompanhamento e relatórios'],
  },
  {
    slug: 'audiovisual',
    short: 'Audiovisual',
    title: 'Audiovisual e motion design',
    summary: 'Vídeos e animações que contam a história da sua marca com movimento.',
    description:
      'Produzimos vídeos e animações para redes sociais, campanhas e site. Do roteiro à edição, o movimento entra para prender a atenção e explicar melhor o que você faz.',
    benefits: [
      'Conteúdo que prende a atenção',
      'Mensagens complexas explicadas de forma simples',
      'Uma marca mais viva e próxima do público',
    ],
    includes: ['Roteiro', 'Captação e edição de vídeo', 'Motion design e animações', 'Vídeos para redes e anúncios'],
  },
  {
    slug: 'estrategia-de-marketing',
    short: 'Estratégia de marketing',
    title: 'Estratégia de marketing',
    summary: 'Diagnóstico, posicionamento e um plano claro para orientar cada ação da sua marca.',
    description:
      'Antes de criar, entendemos. Analisamos o seu negócio, o seu público e o seu mercado para definir posicionamento, prioridades e um plano de ação que dá direção a toda a comunicação.',
    benefits: [
      'Clareza sobre onde investir tempo e dinheiro',
      'Todas as ações caminhando na mesma direção',
      'Um plano possível para o tamanho do seu negócio',
    ],
    includes: ['Diagnóstico da marca e da presença digital', 'Definição de público e posicionamento', 'Plano de comunicação', 'Acompanhamento das ações'],
  },
];
