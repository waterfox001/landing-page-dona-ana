/**
 * CONFIGURAÇÃO CENTRALIZADA DA LOJA — ATRIVIDINHOS
 */

export const STORE_CONFIG = {
  brandName: 'Atrividinhos',
  brandSlogan: 'Jeitinho esperto de se vestir',
  logoUrl: '/assets/aistudio/logo_atrividinhos_b0c755e5.jpg',
  tagline: 'Enxoval para Bebês e Moda Infantil em Fortaleza',
  foundedDate: '10 de novembro de 2009',
  foundedYear: 2009,

  address: {
    street: 'Rua General Sampaio, 766',
    neighborhood: 'Centro',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60020-030',
    full: 'Rua General Sampaio, 766, Centro, Fortaleza – CE, CEP 60020-030',
    parkingNote: 'A loja não possui estacionamento próprio.',
  },

  contacts: {
    whatsappNumberE164: '5585984047248',
    whatsappDisplay: '+55 85 98404-7248',
    phoneHref: 'tel:+558532122055',
    phoneDisplay: '(85) 3212-2055',
    instagramUrl: 'https://www.instagram.com/atrividinhos/',
    instagramHandle: '@atrividinhos',
  },

  openingHours: [
    { day: 'Segunda a sexta', hours: '08h30 às 17h45' },
    { day: 'Sábado', hours: '08h às 16h' },
    { day: 'Domingo', hours: 'Fechado' },
  ],

  paymentMethods: [
    'Pix',
    'Dinheiro',
    'Cartão de crédito',
    'Cartão de débito',
  ],

  maps: {
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Rua+General+Sampaio,+766,+Centro,+Fortaleza+-+CE,+60020-030',
    searchUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+General+Sampaio,+766,+Centro,+Fortaleza+-+CE,+60020-030',
    embedUrl:
      'https://maps.google.com/maps?q=Rua%20General%20Sampaio%2C%20766%2C%20Centro%2C%20Fortaleza%20-%20CE%2C%2060020-030&t=&z=17&ie=UTF8&iwloc=&output=embed',
  },

  hero: {
    kicker: 'Centro de Fortaleza',
    title: 'Enxoval para bebês e moda infantil com conforto e carinho.',
    subtitle:
      'Desde 2009 na Rua General Sampaio, vestindo recém-nascidos e crianças de até 6 anos com variedade, qualidade e atendimento rápido pelo WhatsApp.',
    primaryCta: 'Falar no WhatsApp',
    secondaryCta: 'Ver o que vendemos',
    whatsappMessage:
      'Olá! Vim pelo site da Atrividinhos e gostaria de atendimento.',
    imageUrl: '/src/assets/images/banner_enxoval_bebe_1795093118308.jpg',
    imageAlt:
      'Bebê sorrindo confortavelmente com conjunto de enxoval macio da loja Atrividinhos em Fortaleza',
  },

  about: {
    title: 'Uma história de carinho que acompanha a infância desde 2009.',
    text: 'A Atrividinhos nasceu em 10 de novembro de 2009 com o propósito de tornar a escolha do enxoval e das roupinhas infantis simples e acolhedora. No Centro de Fortaleza, atendemos famílias com foco em conforto, variedade, preços justos e agilidade no WhatsApp.',
    imageUrl: '/src/assets/images/loja_interior_sem_texto_1794948067653.jpg',
    imageAlt:
      'Ambiente acolhedor da loja Atrividinhos na Rua General Sampaio, 766, Centro de Fortaleza',
  },
};

/**
 * Gera link oficial do WhatsApp sempre iniciando com "Vim pelo site...".
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Olá! Vim pelo site da Atrividinhos e gostaria de atendimento.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${STORE_CONFIG.contacts.whatsappNumberE164}?text=${text}`;
}
