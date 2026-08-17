import React from 'react';
import { Logo, PriceTagHeartSymbol } from './Logo';
import { WhatsAppIcon, TelegramIcon } from './Icons';
import { ShieldCheck, Sparkles, Check, ArrowRight, Star, Clock, Lock, Flame } from 'lucide-react';
import { AppConfig } from '../config';
import { trackEvent } from '../utils/analytics';
import { PhoneMockup } from './PhoneMockup';

interface HeroProps {
  config: AppConfig;
  onJoinWhatsApp?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onJoinWhatsApp }) => {
  const { brand, links } = config;

  const handleWhatsAppClick = () => {
    trackEvent({ name: 'whatsapp_click', source: 'hero' });
    if (onJoinWhatsApp) onJoinWhatsApp();
  };

  const handleTelegramClick = () => {
    trackEvent({ name: 'telegram_click', source: 'hero' });
  };

  return (
    <div className="w-full bg-slate-50">
      {/* Professional Polish Navigation Bar */}
      <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 focus:outline-none">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FF5E36] via-[#F4512A] to-[#D83B14] rounded-xl flex items-center justify-center shadow-md">
                <PriceTagHeartSymbol className="w-6 h-6 text-white" tagColor="#FFFFFF" heartColor="#F4512A" holeColor="#F4512A" />
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
                PROMOÇÕES <span className="text-[#F4512A]">DO DIA</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#hero-section" className="text-[#F4512A] border-b-2 border-[#F4512A] pb-1 font-bold">
              Início
            </a>
            <a href="#beneficios" className="hover:text-slate-900 transition-colors">
              Benefícios
            </a>
            <a href="#como-funciona" className="hover:text-slate-900 transition-colors">
              Como Funciona
            </a>
            <a href="#duvidas" className="hover:text-slate-900 transition-colors">
              Dúvidas
            </a>
          </div>

          {/* Quick Staff/VIP CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href={links.WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold shadow-md shadow-emerald-500/20 transition-all active:scale-95 flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Acessar Grupo</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <section 
        id="hero-section"
        className="relative w-full overflow-hidden pt-8 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-8 border-b border-slate-200"
      >
        {/* Subtle background mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): High-Impact Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Active Pulse Pill */}
              <div className="inline-flex items-center gap-2 bg-orange-50 text-[#D83B14] px-3.5 py-1.5 rounded-full text-xs font-black mb-6 w-fit border border-orange-200 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4512A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4512A]"></span>
                </span>
                <span>CURADORIA DE OFERTAS: SHOPEE & AMAZON</span>
              </div>

              {/* High Contrast Headline */}
              <h1 
                id="hero-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-slate-900 leading-[1.12] tracking-tight mb-6"
              >
                As melhores ofertas <span className="text-[#F4512A]">chegam primeiro</span> para você.
              </h1>

              {/* Subtitle */}
              <p 
                id="hero-subtitle"
                className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
              >
                {brand.heroSubtitle}
              </p>

              {/* 3 Checkmark Feature Pills */}
              <div className="flex flex-wrap gap-y-3 gap-x-6 sm:gap-x-8 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#F4512A] flex items-center justify-center shadow-xs flex-shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Curadoria Verificada</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#F4512A] flex items-center justify-center shadow-xs flex-shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">100% Gratuito</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#F4512A] flex items-center justify-center shadow-xs flex-shrink-0">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">Links Diretos Oficiais</span>
                </div>
              </div>

              {/* Social Proof Member Counter Row */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-500 text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                    PD
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                    ✓
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-400 flex items-center justify-center text-[10px] font-bold text-amber-950 shadow-xs">
                    ★
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                    +14k
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  <strong className="text-slate-900 font-bold">+14.000 pessoas</strong> já economizam com nossas seleções diárias.
                </p>
              </div>
            </div>

            {/* Right Column (5 cols): The Standout Polish Conversion Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div 
                id="hero-conversion-card"
                className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl shadow-orange-500/10 border border-slate-200 relative"
              >
                {/* Limited Spots / Official Amber Badge */}
                <div className="absolute -top-3.5 right-6 sm:right-8 bg-amber-400 text-amber-950 text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-950 fill-amber-950" />
                  Vagas Abertas
                </div>

                {/* Group Header */}
                <div className="flex items-center gap-4 mb-6 pt-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF5E36] via-[#F4512A] to-[#D83B14] rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                    <PriceTagHeartSymbol className="w-8 h-8 text-white" tagColor="#FFFFFF" heartColor="#F4512A" holeColor="#F4512A" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg sm:text-xl text-slate-900 leading-tight">
                      Promoções do Dia VIP
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Alertas em Tempo Real • WhatsApp & Telegram
                    </p>
                  </div>
                </div>

                {/* Live Deal Preview Snippets inside Card */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-100 transition-colors">
                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex-shrink-0 shadow-xs flex items-center justify-center text-[10px] font-black text-[#F4512A] border border-orange-200">
                      -51%
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-[#F4512A] uppercase tracking-wider">
                        OFERTA ENCONTRADA • SHOPEE
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                        Fritadeira Air Fryer 4L Digital Touch
                      </p>
                      <p className="text-[11px] text-slate-500">
                        De R$ 389 por <strong className="text-[#F4512A] font-bold">R$ 189,90</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100">
                    <div className="w-9 h-9 bg-emerald-100 rounded-xl flex-shrink-0 shadow-xs flex items-center justify-center text-[10px] font-black text-emerald-700 border border-emerald-200">
                      CUPOM
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                        PREÇO EM DESTAQUE • AMAZON
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                        Fone Bluetooth Sem Fio TWS
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Com cupom exclusivo por <strong className="text-emerald-700 font-bold">R$ 69,90</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* STANDOUT WHATSAPP GREEN CTA BUTTON */}
                <a
                  id="hero-whatsapp-cta-btn"
                  href={links.WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-4 sm:py-5 px-6 rounded-2xl shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-3 group transition-all duration-150 active:scale-[0.99] text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-emerald-300"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  <span>ENTRAR NO GRUPO DO WHATSAPP</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Subordinated Option: Telegram */}
                <div className="mt-3 text-center">
                  <a
                    id="hero-telegram-link"
                    href={links.TELEGRAM_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleTelegramClick}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors py-1"
                  >
                    <TelegramIcon className="w-3.5 h-3.5 text-sky-500" />
                    <span>Prefere Telegram? Entrar no canal do Telegram</span>
                  </a>
                </div>

                {/* Security Guarantee Text */}
                <p className="text-center mt-4 text-[11px] text-slate-500 uppercase font-bold tracking-widest flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3 text-slate-500" />
                  Acesso 100% Gratuito e Sem Compromisso
                </p>
              </div>

              {/* 3 Metric Summary Blocks Under Card */}
              <div className="flex justify-between items-center px-4 mt-6 bg-white/70 py-3 rounded-2xl border border-slate-200">
                <div className="text-center flex-1">
                  <p className="text-base sm:text-lg font-bold text-slate-900">4.9/5</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Satisfação</p>
                </div>
                <div className="text-center flex-1 border-x border-slate-200 px-3">
                  <p className="text-base sm:text-lg font-bold text-slate-900">24h</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Monitoramento</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-base sm:text-lg font-bold text-slate-900">100%</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Verificado</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

