import React from 'react';
import { ShieldCheck, Star, Users, Sparkles } from 'lucide-react';
import { AppConfig } from '../config';

interface SocialProofProps {
  config: AppConfig['socialProof'];
}

export const SocialProof: React.FC<SocialProofProps> = ({ config }) => {
  const getDisplayText = () => {
    if (config.mode === 'option_b' && config.verifiedMemberCount) {
      return config.textOptionBTemplate.replace(
        '{count}',
        config.verifiedMemberCount.toLocaleString('pt-BR')
      );
    }
    return config.textOptionA;
  };

  return (
    <section 
      id="confianca" 
      className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-8"
      aria-label="Prova social e indicadores de confiança"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        {/* Main Trust Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F4512A] flex items-center justify-center flex-shrink-0 border border-orange-200 shadow-xs">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-slate-900">
                {getDisplayText()}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Comunidade focada em economia inteligente e achadinhos verificados na Shopee, Amazon e marketplaces.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200 flex-shrink-0">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-[#F4512A] text-white text-[10px] font-black flex items-center justify-center">
                PD
              </div>
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">
                ✓
              </div>
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-amber-400 text-amber-950 text-[10px] font-bold flex items-center justify-center">
                ★
              </div>
            </div>
            <span className="text-xs font-bold text-slate-700 ml-1">
              Participação 100% Gratuita
            </span>
          </div>
        </div>

        {/* 3 Micro-indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-orange-50/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF5E36] to-[#D83B14] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Curadoria de ofertas
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Filtramos apenas boas oportunidades
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <Star className="w-5 h-5 fill-white text-white" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Produtos bem avaliados
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Mais segurança para sua compra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Links diretos e seguros
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Direto para lojas oficiais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

