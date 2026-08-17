import React, { useState, useEffect } from 'react';
import { DEFAULT_CONFIG, AppConfig } from './config';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Faq } from './components/Faq';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { StickyBottomCta } from './components/StickyBottomCta';
import { TermsModal } from './components/TermsModal';
import { AdminConfigDrawer } from './components/AdminConfigDrawer';

export default function App() {
  const [config, setConfig] = useState<AppConfig>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('promocoes_do_dia_config');
        if (saved) {
          return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
        }
      } catch (e) {
        console.warn('Could not load saved config:', e);
      }
    }
    return DEFAULT_CONFIG;
  });

  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleUpdateConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('promocoes_do_dia_config', JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Could not persist config:', e);
    }
  };

  const handleOpenDoc = (type: 'privacy' | 'terms') => {
    // If custom external URL is provided, open in new tab; otherwise open accessible modal
    const customUrl =
      type === 'privacy'
        ? config.links.PRIVACY_POLICY_URL
        : config.links.TERMS_URL;

    if (customUrl && customUrl.trim().length > 0) {
      window.open(customUrl, '_blank', 'noopener,noreferrer');
    } else {
      setModalType(type);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white flex flex-col justify-between">
      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section with Central Conversion Card & Live Phone Mockup */}
        <Hero config={config} />

        {/* 2. Social Proof & Micro-trust Indicators */}
        <SocialProof config={config.socialProof} />

        {/* 3. Core Benefits Grid */}
        <Benefits disclaimerText={config.disclaimers.storeNotice} />

        {/* 4. How it Works (3 Step Guide) */}
        <HowItWorks />

        {/* 5. Accessible Accordion FAQ */}
        <Faq />

        {/* 6. Final High-Impact CTA Banner */}
        <CtaBanner
          whatsAppUrl={config.links.WHATSAPP_GROUP_URL}
          telegramUrl={config.links.TELEGRAM_GROUP_URL}
          highlightPhrase={config.brand.highlightPhrase}
          finalCtaText={config.brand.finalCtaText}
        />
      </main>

      {/* 7. Footer with Transparency Notice & Social Links */}
      <Footer
        whatsAppUrl={config.links.WHATSAPP_GROUP_URL}
        telegramUrl={config.links.TELEGRAM_GROUP_URL}
        instagramUrl={config.links.INSTAGRAM_URL}
        transparencyText={config.disclaimers.footerTransparency}
        onOpenDoc={handleOpenDoc}
      />

      {/* 8. Mobile Sticky Conversion Bar */}
      <StickyBottomCta whatsAppUrl={config.links.WHATSAPP_GROUP_URL} />

      {/* 9. Privacy Policy & Terms Modal */}
      <TermsModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />

      {/* 10. Floating Settings Drawer for quick URL customization */}
      <AdminConfigDrawer config={config} onUpdateConfig={handleUpdateConfig} />
    </div>
  );
}
