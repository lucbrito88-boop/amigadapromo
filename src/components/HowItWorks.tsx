import React, { useEffect, useRef } from 'react';
import { Smartphone, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const steps = [
  {
    step: 1,
    title: 'Você entra no grupo',
    description: 'O acesso é feito pelo link oficial do WhatsApp ou Telegram.',
    icon: Smartphone,
    badge: 'Passo 1',
  },
  {
    step: 2,
    title: 'Nós selecionamos as oportunidades',
    description: 'A curadoria considera relevância, preço, procura, avaliações e condições disponíveis no momento.',
    icon: Sparkles,
    badge: 'Passo 2',
  },
  {
    step: 3,
    title: 'Você aproveita quando fizer sentido',
    description: 'Compare as informações e decida se a oferta é adequada para você.',
    icon: ShoppingBag,
    badge: 'Passo 3',
  },
];

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !trackedRef.current) {
          trackedRef.current = true;
          trackEvent({ name: 'how_it_works_view' });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="como-funciona"
      className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-14 sm:py-20"
      aria-labelledby="como-funciona-heading"
    >
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 text-[#D83B14] text-xs font-black uppercase tracking-wider mb-3 border border-orange-200 shadow-xs">
            Passo a Passo Simples
          </span>
          <h2
            id="como-funciona-heading"
            className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
          >
            Como funciona na prática?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Você não paga nada para participar e pode sair quando quiser com apenas 1 clique.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                id={`passo-${item.step}`}
                className="relative bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-200 flex flex-col items-start"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between w-full mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF5E36] to-[#D83B14] text-white font-black text-lg flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-orange-100 text-[#D83B14] border border-orange-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative connection arrow for desktop */}
                {idx < steps.length - 1 && (
                  <div 
                    className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 bg-white p-1.5 rounded-full border border-slate-200 text-slate-400 shadow-xs items-center justify-center"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
