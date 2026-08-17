import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FaqItem } from '../types';
import { trackEvent } from '../utils/analytics';

const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'O grupo é gratuito?',
    answer:
      'Sim. A entrada e permanência no grupo são 100% gratuitas. O usuário deve verificar as condições da loja e do produto antes de comprar.',
  },
  {
    id: 'faq-2',
    question: 'Vou receber muitas mensagens?',
    answer:
      'O grupo é destinado exclusivamente a avisos de ofertas e oportunidades selecionadas. Não há conversas paralelas ou spam. A frequência de mensagens pode variar conforme a disponibilidade de boas ofertas.',
  },
  {
    id: 'faq-3',
    question: 'As ofertas ficam disponíveis por quanto tempo?',
    answer:
      'Isso varia conforme o estoque, preço, cupom e regras de cada loja ou marketplace. Por esse motivo, algumas oportunidades podem mudar ou acabar rapidamente.',
  },
  {
    id: 'faq-4',
    question: 'Vocês vendem os produtos?',
    answer:
      'Não. A Promoções do Dia é um canal de curadoria informativa. Nós apenas divulgamos oportunidades e direcionamos você para a loja ou marketplace oficial responsável pela oferta.',
  },
  {
    id: 'faq-5',
    question: 'Posso sair do grupo?',
    answer:
      'Sim. Você pode sair quando quiser com total liberdade, diretamente pelos recursos padrão do WhatsApp ou Telegram.',
  },
];

export const Faq: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (!isOpen) {
        trackEvent({ name: 'faq_view', questionId: id });
        return [...prev, id];
      } else {
        return prev.filter((item) => item !== id);
      }
    });
  };

  return (
    <section
      id="duvidas"
      className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-14 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 text-[#D83B14] text-xs font-black uppercase tracking-wider mb-3 border border-orange-200 shadow-xs">
          <HelpCircle className="w-3.5 h-3.5 text-[#F4512A]" />
          Tire suas dúvidas
        </span>
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
        >
          Perguntas frequentes
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Tudo o que você precisa saber antes de entrar no nosso grupo oficial.
        </p>
      </div>

      <div className="space-y-3.5">
        {faqList.map((item) => {
          const isOpen = openIds.includes(item.id);
          const buttonId = `faq-btn-${item.id}`;
          const contentId = `faq-content-${item.id}`;

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all duration-150 hover:border-orange-300"
            >
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleFaq(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4512A] focus-visible:ring-offset-2"
              >
                <span className="font-bold text-base text-slate-900 pr-2">
                  {item.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    isOpen
                      ? 'bg-orange-50 text-[#F4512A] rotate-180 border border-orange-200'
                      : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
