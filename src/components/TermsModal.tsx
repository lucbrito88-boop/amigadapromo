import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TermsModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div 
        id="terms-modal-overlay" 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          id="terms-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/80">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-base sm:text-lg">
              {isPrivacy ? (
                <>
                  <ShieldCheck className="w-5 h-5 text-[#F4512A]" />
                  <span>Política de Privacidade</span>
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5 text-[#F4512A]" />
                  <span>Termos de Uso</span>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  A <strong>Promoções do Dia</strong> valoriza e respeita a sua privacidade. Esta página e nossos grupos de ofertas foram desenvolvidos com transparência e responsabilidade.
                </p>
                <h4 className="font-bold text-neutral-900 text-sm">1. Coleta de Informações</h4>
                <p>
                  Não solicitamos, armazenamos ou comercializamos dados pessoais bancários, documentos de identificação ou senhas de usuários.
                </p>
                <h4 className="font-bold text-neutral-900 text-sm">2. Comunicação via WhatsApp e Telegram</h4>
                <p>
                  O ingresso no canal do WhatsApp ou Telegram é voluntário. O usuário pode desativar notificações, silenciar ou sair dos grupos a qualquer momento diretamente pelas configurações do aplicativo mensageiro.
                </p>
                <h4 className="font-bold text-neutral-900 text-sm">3. Links Externos</h4>
                <p>
                  Nossas divulgações direcionam para lojas e marketplaces confiáveis. Ao navegar para o site da loja participante, aplicam-se as políticas de privacidade da respectiva loja.
                </p>
              </>
            ) : (
              <>
                <p>
                  Bem-vindo à <strong>Promoções do Dia</strong>. Ao acessar nossa página e participar de nossos canais, você concorda com as seguintes diretrizes:
                </p>
                <h4 className="font-bold text-neutral-900 text-sm">1. Natureza do Serviço</h4>
                <p>
                  A Promoções do Dia atua estritamente como um serviço informativo e gratuito de curadoria de ofertas, cupons e achadinhos em lojas de varejo e marketplaces da internet.
                </p>
                <h4 className="font-bold text-neutral-900 text-sm">2. Isenção de Responsabilidade sobre Vendas</h4>
                <p>
                  Não realizamos venda direta de produtos, não emitimos notas fiscais e não efetuamos entregas. Todas as transações financeiras, envio, garantia e prazos de entrega são de total responsabilidade das lojas parceiras e marketplaces oficiais onde a compra for realizada.
                </p>
                <h4 className="font-bold text-neutral-900 text-sm">3. Variação de Preços e Estoque</h4>
                <p>
                  Preços, estoques, regras de cupons e condições de parcelamento ou frete são estabelecidos pelas lojas e podem sofrer alterações ou expirar sem aviso prévio. Recomendamos sempre checar o valor e as regras na página final da loja antes do pagamento.
                </p>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/50 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-neutral-900 text-white font-bold text-xs sm:text-sm hover:bg-neutral-800 transition-colors"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
