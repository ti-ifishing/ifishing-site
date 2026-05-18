export const SITE = {
  url: 'https://ifishing.com.br',
  name: 'iFishing',
  tagline: 'Sua próxima fisgada começa aqui.',
  description:
    'O iFishing conecta pescadores a guias de pesca profissionais em todo o Brasil. Encontre, converse e reserve sua pescaria pelo app.',
  locale: 'pt-BR',
  supportEmail: 'ti@ifishing.com.br',
  whatsapp: {
    display: '(44) 99955-0585',
    e164: '5544999550585',
  },
  legal: {
    razaoSocial: 'FISHING SOLUTIONS LTDA',
    cnpj: '59.279.818/0001-38',
  },
  app: {
    appStoreUrl: 'https://apps.apple.com/br/app/ifishing/id000000000',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ifishing.app',
    iosBundleId: 'com.ifishing.app',
    androidPackage: 'com.ifishing.app',
    /** Apple Team ID — usado em apple-app-site-association pra Universal Links */
    iosTeamId: 'XANMNBTR62',
  },
  social: {
    instagram: 'https://instagram.com/ifishing.app',
    youtube: '',
    tiktok: '',
  },
} as const;

export type Site = typeof SITE;
