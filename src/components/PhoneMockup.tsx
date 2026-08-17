import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Copy, 
  ExternalLink, 
  Flame, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { PriceTagHeartSymbol } from './Logo';
import { trackEvent } from '../utils/analytics';

interface PhoneMockupProps {
  onJoinClick?: () => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ onJoinClick }) => {
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  const handleCopyCoupon = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2500);
  };

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[380px] lg:max-w-[400px] select-none">
      {/* Subtle glowing ambient ring behind mockup */}
      <div 
        className="absolute -inset-2 bg-gradient-to-tr from-[#F4512A]/30 via-orange-400/20 to-amber-300/30 rounded-[44px] blur-xl opacity-75 pointer-events-none transform -rotate-1" 
        aria-hidden="true" 
      />

      {/* Floating Trust Pill Above Mockup */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full shadow-lg border border-orange-100/80 flex items-center gap-1.5 whitespace-nowrap">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] font-bold text-neutral-800 tracking-tight">
          Prévia em Tempo Real
        </span>
      </div>

      {/* Smartphone Chassis */}
      <div className="relative bg-neutral-900 p-3.5 rounded-[40px] shadow-2xl border-4 border-neutral-800 ring-1 ring-neutral-700/50 overflow-hidden">
        {/* Notch / Speaker bar */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-800 rounded-full z-30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-neutral-900 mr-2" />
          <div className="w-8 h-1 rounded-full bg-neutral-700" />
        </div>

        {/* Screen Container with WhatsApp Theme */}
        <div className="relative bg-[#ECE5DD] rounded-[28px] overflow-hidden pt-8 pb-3 border border-neutral-700/20">
          {/* Subtle WhatsApp chat background wallpaper texture */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#222222 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
          />

          {/* WhatsApp Group Top Header */}
          <div className="relative bg-[#075E54] text-white px-3.5 py-2.5 flex items-center gap-2.5 shadow-sm z-10">
            {/* Group Avatar */}
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#FF5E36] to-[#E03A12] flex items-center justify-center shadow-inner flex-shrink-0">
              <PriceTagHeartSymbol className="w-5 h-5 text-white" tagColor="#FFFFFF" heartColor="#F4512A" holeColor="#F4512A" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#075E54]" />
            </div>

            {/* Group Title & Status */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <h4 className="font-bold text-[13px] text-white truncate leading-tight">
                  Promoções do Dia 🏷️❤️
                </h4>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
              </div>
              <p className="text-[10px] text-emerald-100/90 truncate font-medium">
                Canal Oficial de Ofertas • Silencioso
              </p>
            </div>

            {/* Notification tag */}
            <div className="bg-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-semibold text-emerald-100 border border-emerald-400/30">
              Ativo
            </div>
          </div>

          {/* Date separator */}
          <div className="flex justify-center my-2.5">
            <span className="bg-white/80 backdrop-blur-sm text-neutral-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-md shadow-xs uppercase tracking-wide">
              Hoje
            </span>
          </div>

          {/* Chat Messages Feed */}
          <div className="px-2.5 space-y-3">
            
            {/* Deal Card 1: Air Fryer */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg rounded-tl-xs p-3 shadow-xs border border-neutral-200/80 text-[#222222] relative group"
            >
              {/* Highlight Tag */}
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded border border-red-200/60">
                  <Flame className="w-3 h-3 text-red-500 fill-red-500" />
                  ACHADO EM DESTAQUE
                </span>
                <span className="text-[9px] text-neutral-600 font-medium flex items-center gap-0.5">
                  <Clock className="w-2.5 h-2.5" /> 14:18
                </span>
              </div>

              <h5 className="font-bold text-[12px] text-neutral-900 leading-snug">
                Fritadeira Elétrica Air Fryer 4L Digital Touch
              </h5>

              <div className="flex items-center gap-1.5 text-[10px] text-neutral-600 my-1">
                <span className="flex items-center text-amber-500 font-semibold">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline mr-0.5" /> 4.8
                </span>
                <span>• +14 mil avaliações</span>
                <span className="text-emerald-800 font-semibold">• Loja Oficial</span>
              </div>

              {/* Price Box */}
              <div className="bg-orange-50/70 border border-orange-200/60 rounded-md p-2 my-1.5 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-neutral-600 line-through mr-1.5">R$ 389,90</span>
                  <span className="text-base font-extrabold text-[#F4512A] tracking-tight">
                    R$ 189,90
                  </span>
                </div>
                <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                  -51%
                </span>
              </div>

              {/* Cupom Action */}
              <div className="flex items-center justify-between bg-neutral-50 rounded border border-dashed border-neutral-300 px-2 py-1 my-1.5">
                <div className="text-[10px] text-neutral-600">
                  Cupom: <strong className="text-neutral-900 font-mono font-bold">PROMO10</strong>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleCopyCoupon('PROMO10', e)}
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-600 hover:text-orange-700 active:scale-95 transition-transform"
                >
                  {copiedCoupon === 'PROMO10' ? (
                    <span className="text-emerald-600 flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> Copiado!
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Copy className="w-3 h-3" /> Copiar
                    </span>
                  )}
                </button>
              </div>

              {/* Verified link preview */}
              <div 
                onClick={() => {
                  trackEvent({ name: 'whatsapp_click', source: 'mockup' });
                  if (onJoinClick) onJoinClick();
                }}
                className="cursor-pointer mt-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-bold text-[11px] py-1.5 px-2.5 rounded-md flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/30"
              >
                <span>Ver oportunidade completa</span>
                <ExternalLink className="w-3 h-3" />
              </div>

              <div className="flex justify-end items-center gap-1 mt-1 text-[9px] text-neutral-600">
                <span>14:18</span>
                <span className="text-sky-500 font-bold">✓✓</span>
              </div>
            </motion.div>

            {/* Deal Card 2: Fone Bluetooth TWS */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-white rounded-lg rounded-tl-xs p-2.5 shadow-xs border border-neutral-200/80 text-[#222222] relative"
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200/60">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  CUPOM RELÂMPAGO
                </span>
                <span className="text-[9px] text-neutral-600">14:52</span>
              </div>

              <p className="text-[11px] font-bold text-neutral-900 leading-tight">
                Fone Sem Fio Bluetooth TWS com Cancelamento de Ruído
              </p>

              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[10px] text-neutral-600 line-through">R$ 199,00</span>
                <span className="text-sm font-extrabold text-emerald-600">
                  R$ 69,90 à vista
                </span>
                <span className="text-[9px] font-semibold bg-red-100 text-red-700 px-1 rounded">
                  Menor preço
                </span>
              </div>

              <div className="flex justify-end items-center gap-1 mt-1 text-[9px] text-neutral-600">
                <span>14:52</span>
                <span className="text-sky-500 font-bold">✓✓</span>
              </div>
            </motion.div>

          </div>

          {/* Quick interactive call to action inside phone */}
          <div className="p-2.5 mt-2 bg-gradient-to-t from-[#ECE5DD] to-transparent">
            <button
              type="button"
              onClick={() => {
                trackEvent({ name: 'whatsapp_click', source: 'mockup' });
                if (onJoinClick) onJoinClick();
              }}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-[12px] py-2 px-3 rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Receber alertas como estes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
