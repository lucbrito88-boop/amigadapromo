import React from 'react';
import { 
  BadgePercent, 
  TrendingUp, 
  Star, 
  BellRing, 
  Info, 
  CheckCircle2,
  ArrowUpRight 
} from 'lucide-react';
import { BenefitItem } from '../types';

const benefitsData: BenefitItem[] = [
  {
    id: 'benefit-1',
    title: 'Ofertas selecionadas',
    description: 'Encontramos oportunidades em marketplaces e reunimos o que realmente vale a pena conferir.',
    iconName: 'BadgePercent',
  },
  {
    id: 'benefit-2',
    title: 'Produtos mais vendidos',
    description: 'Descubra itens que já têm grande procura e podem facilitar sua decisão de compra.',
    iconName: 'TrendingUp',
  },
  {
    id: 'benefit-3',
    title: 'Melhores avaliações',
    description: 'Priorizamos produtos bem avaliados, com informações claras para você comprar com mais segurança.',
    iconName: 'Star',
  },
  {
    id: 'benefit-4',
    title: 'Alertas de oportunidade',
    description: 'Receba avisos sobre descontos, cupons e ofertas que podem mudar ou se encerrar rapidamente.',
    iconName: 'BellRing',
  },
];

const renderIcon = (name: BenefitItem['iconName']) => {
  const iconProps = { className: "w-6 h-6 text-[#F4512A]" };
  switch (name) {
    case 'BadgePercent':
      return <BadgePercent {...iconProps} />;
    case 'TrendingUp':
      return <TrendingUp {...iconProps} />;
    case 'Star':
      return <Star {...iconProps} />;
    case 'BellRing':
      return <BellRing {...iconProps} />;
    default:
      return <BadgePercent {...iconProps} />;
  }
};

interface BenefitsProps {
  disclaimerText?: string;
}

export const Benefits: React.FC<BenefitsProps> = ({
  disclaimerText = "Preços, estoque, cupons e condições podem mudar conforme a loja e o momento da consulta.",
}) => {
  return (
    <section 
      id="beneficios" 
      className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-14 sm:py-20"
      aria-labelledby="beneficios-heading"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 text-[#D83B14] text-xs font-black uppercase tracking-wider mb-4 border border-orange-200 shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#F4512A]" />
          Por que acompanhar
        </span>
        <h2 
          id="beneficios-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight"
        >
          Economize tempo com uma <span className="text-[#F4512A]">curadoria de verdade</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Sem promessas falsas ou mensagens desnecessárias. Apenas achados selecionados na Shopee, Amazon e principais lojas que realmente valem a pena.
        </p>
      </div>

      {/* 4 Benefit Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefitsData.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-orange-100/80 border border-orange-100 flex items-center justify-center mb-5 transition-colors">
                {renderIcon(item.iconName)}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-black text-slate-900 mb-2.5 leading-snug group-hover:text-[#F4512A] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#F4512A]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4512A]" />
                100% Gratuito
              </span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

      {/* Discrete Store Disclaimer Note */}
      <div className="mt-8 sm:mt-10 p-4 rounded-2xl bg-slate-100 border border-slate-200 flex items-start gap-3 max-w-3xl mx-auto">
        <Info className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-800 font-bold">Nota de transparência:</strong> {disclaimerText}
        </p>
      </div>
    </section>
  );
};

