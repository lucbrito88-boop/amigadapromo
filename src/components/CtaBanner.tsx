import React from 'react';
import { WhatsAppIcon, TelegramIcon } from './Icons';
import { PriceTagHeartSymbol } from './Logo';
import { ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface CtaBannerProps {
  whatsAppUrl: string;
  telegramUrl: string;
  highlightPhrase?: string;
  finalCtaText?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  whatsAppUrl,
  telegramUrl,
  highlightPhrase = "Economize tempo encontrando oportunidades que valem a pena conferir.",
  finalCtaText = "Entre agora e receba as próximas ofertas selecionadas.",
}) => {
  return (
    <section 
      id="cta-final" 
      className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16"
      aria-label="Chamada de ação final"
    >
      <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#FF5E36] via-[#F4512A] to-[#D83B14] p-8 sm:p-14 text-white shadow-2xl border border-orange-400/30">
        {/* Subtle background decorative shapes */}
        <div 
          className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-black/10 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-4 right-8 opacity-10 pointer-events-none" 
          aria-hidden="true"
        >
          <PriceTagHeartSymbol className="w-56 h-56 text-white" tagColor="#FFFFFF" heartColor="#F4512A" holeColor="#F4512A" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider mb-5 border border-white/30">
            <Sparkles className="w-3.5 h-3.5" />
            Não perca as próximas oportunidades
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {highlightPhrase}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-orange-100 font-medium leading-relaxed">
            {finalCtaText}
          </p>

          {/* Primary Action Button (WhatsApp) */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <a
              id="cta-final-whatsapp-btn"
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent({ name: 'whatsapp_click', source: 'bottom_banner' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-black text-base sm:text-lg shadow-2xl hover:shadow-emerald-950/40 transition-all duration-150 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              <WhatsAppIcon className="w-6 h-6" />
              <span>ENTRAR NO GRUPO DO WHATSAPP</span>
              <ArrowRight className="w-5 h-5 ml-1 hidden sm:inline" />
            </a>

            {/* Telegram Secondary Alternative */}
            <a
              id="cta-final-telegram-btn"
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent({ name: 'telegram_click', source: 'bottom_banner' })}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-100 hover:text-white underline-offset-4 hover:underline py-1 transition-colors"
            >
              <TelegramIcon className="w-4 h-4" />
              <span>Prefere Telegram? Entrar no canal do Telegram</span>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-orange-100 font-medium">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Acesso 100% gratuito e sem compromisso</span>
          </div>
        </div>
      </div>
    </section>
  );
};

