/**
 * Centralized Configuration for "Promoções do Dia"
 * 
 * You can edit the group invite links, brand name, social URLs,
 * and social proof text below.
 */

export interface AppConfig {
  brand: {
    name: string;
    tagline: string;
    heroTitle: string;
    heroSubtitle: string;
    trustBadge: string;
    highlightPhrase: string;
    finalCtaText: string;
  };
  links: {
    // WhatsApp Group Invite URL (Replace with real invite link e.g. "https://chat.whatsapp.com/...")
    WHATSAPP_GROUP_URL: string;
    // Telegram Group Invite URL (Replace with real invite link e.g. "https://t.me/...")
    TELEGRAM_GROUP_URL: string;
    // Instagram Profile URL
    INSTAGRAM_URL: string;
    // Privacy Policy & Terms URLs (if empty, modal will open with default compliant text)
    PRIVACY_POLICY_URL: string;
    TERMS_URL: string;
  };
  socialProof: {
    // Mode: 'option_a' (generic honest) or 'option_b' (with verified count)
    mode: 'option_a' | 'option_b';
    // Option A: Generic honest text
    textOptionA: string;
    // Option B: Real verified count (only shown if provided)
    verifiedMemberCount?: number;
    textOptionBTemplate: string;
  };
  disclaimers: {
    storeNotice: string;
    footerTransparency: string;
  };
}

export const DEFAULT_CONFIG: AppConfig = {
  brand: {
    name: "Promoções do Dia",
    tagline: "Ofertas selecionadas com carinho no seu celular",
    heroTitle: "As melhores ofertas chegam primeiro para você",
    heroSubtitle:
      "Entre no grupo gratuito da Promoções do Dia e receba ofertas selecionadas, produtos mais vendidos e oportunidades com excelentes avaliações diretamente no seu celular.",
    trustBadge: "Grupo gratuito • Ofertas selecionadas • Saia quando quiser",
    highlightPhrase: "Economize tempo encontrando oportunidades que valem a pena conferir.",
    finalCtaText: "Entre agora e receba as próximas ofertas selecionadas.",
  },
  links: {
    WHATSAPP_GROUP_URL: "https://chat.whatsapp.com/exemplopromocoes", // Substitua pelo link real do seu grupo
    TELEGRAM_GROUP_URL: "https://t.me/exemplopromocoes",             // Substitua pelo link real do Telegram
    INSTAGRAM_URL: "https://instagram.com/promocoesdodia",
    PRIVACY_POLICY_URL: "",
    TERMS_URL: "",
  },
  socialProof: {
    mode: "option_a",
    textOptionA: "Junte-se a outras pessoas que acompanham nossas ofertas todos os dias.",
    verifiedMemberCount: 14850,
    textOptionBTemplate: "Mais de {count} pessoas já acompanham a Promoções do Dia.",
  },
  disclaimers: {
    storeNotice:
      "Preços, estoque, cupons e condições podem mudar conforme a loja e o momento da consulta.",
    footerTransparency:
      "Os preços, estoques, cupons, avaliações e condições são definidos pelas lojas e marketplaces e podem mudar sem aviso. Antes de comprar, confira as informações diretamente na página do produto.",
  },
};
