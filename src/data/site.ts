/**
 * Dados institucionais e de contato da Sonner.
 * Tudo que aparece no site sobre contato vem daqui: edite só este arquivo.
 *
 * Campos marcados com [PREENCHER] ainda não foram fornecidos.
 * Enquanto estiverem vazios, eles não aparecem no site.
 */

export const site = {
  name: 'Sonner',
  fullName: 'Sonner — Agência Criativa',
  url: 'https://agenciasonner.com.br',
  description:
    'A Sonner une estratégia, criatividade e tecnologia para transformar a presença digital de negócios que querem crescer.',
  locale: 'pt_BR',
  tagline: 'Do pensamento à entrega.',
};

export const contact = {
  /** Número no formato internacional, só dígitos (55 + DDD + número). */
  whatsappNumber: '5511940285799',
  /** Como o número aparece escrito no site. */
  whatsappDisplay: '(11) 94028-5799',
  /** Mensagem padrão do botão de WhatsApp. */
  whatsappMessage: 'Olá, Sonner! Vim pelo site e quero fazer minha marca crescer.',
  email: 'agenciasonner@gmail.com',
  /** [PREENCHER] Cidade ou região de atuação. Ex.: "São Paulo, SP · Atendimento em todo o Brasil" */
  location: '',
};

/**
 * [PREENCHER] Redes sociais. Deixe a URL vazia para esconder a rede.
 */
export const social: { label: string; url: string }[] = [
  { label: 'Instagram', url: '' },
  { label: 'LinkedIn', url: '' },
  { label: 'Behance', url: '' },
].filter((item) => item.url !== '');

/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];
