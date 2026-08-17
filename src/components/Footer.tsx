import React from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon, TelegramIcon, InstagramIcon } from './Icons';
import { trackEvent } from '../utils/analytics';

interface FooterProps {
  whatsAppUrl: string;
  telegramUrl: string;
  instagramUrl: string;
  transparencyText?: string;
  onOpenDoc: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  whatsAppUrl,
  telegramUrl,
  instagramUrl,
  transparencyText = "Os preços, estoques, cupons, avaliações e condições são definidos pelas lojas e marketplaces e podem mudar sem aviso. Antes de comprar, confira as informações diretamente na página do produto.",
  onOpenDoc,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="rodape" className="w-full bg-white border-t border-slate-200 pt-14 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Main Footer Layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-100">
          {/* Brand Presentation */}
          <div className="max-w-md">
            <Logo size="md" />
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Curadoria de ofertas, produtos mais vendidos e achadinhos verificados nos principais marketplaces do Brasil.
            </p>
          </div>

          {/* Social Links & Channels */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Canais Oficiais:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent({ name: 'whatsapp_click', source: 'footer' })}
                aria-label="Grupo oficial no WhatsApp"
                className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center border border-emerald-200/80 transition-all duration-150 shadow-xs"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent({ name: 'telegram_click', source: 'footer' })}
                aria-label="Canal oficial no Telegram"
                className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white flex items-center justify-center border border-sky-200/80 transition-all duration-150 shadow-xs"
              >
                <TelegramIcon className="w-5 h-5" />
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil no Instagram"
                className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center border border-pink-200/80 transition-all duration-150 shadow-xs"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Required Transparency Disclaimer */}
        <div className="py-6">
          <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <strong className="text-slate-800 font-bold">Aviso Legal e Transparência:</strong> {transparencyText}
          </p>
        </div>

        {/* Bottom copyright & Legal links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Promoções do Dia. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => {
                trackEvent({ name: 'terms_modal_open', doc: 'privacy' });
                onOpenDoc('privacy');
              }}
              className="hover:text-slate-900 transition-colors underline-offset-2 hover:underline focus:outline-none"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => {
                trackEvent({ name: 'terms_modal_open', doc: 'terms' });
                onOpenDoc('terms');
              }}
              className="hover:text-slate-900 transition-colors underline-offset-2 hover:underline focus:outline-none"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
