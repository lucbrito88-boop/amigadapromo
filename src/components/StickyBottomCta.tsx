import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './Icons';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { trackEvent } from '../utils/analytics';

interface StickyBottomCtaProps {
  whatsAppUrl: string;
}

export const StickyBottomCta: React.FC<StickyBottomCtaProps> = ({ whatsAppUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA once scrolled past hero (e.g. 350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="sticky-mobile-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <a
              id="sticky-whatsapp-btn"
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent({ name: 'whatsapp_click', source: 'floating_bar' })}
              className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-black text-sm shadow-lg shadow-emerald-500/25 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>ENTRAR NO GRUPO DO WHATSAPP</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
