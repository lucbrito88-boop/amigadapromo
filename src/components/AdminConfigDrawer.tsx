import React, { useState } from 'react';
import { Settings, X, Save, Check, RefreshCw, Link as LinkIcon, Users } from 'lucide-react';
import { AppConfig } from '../config';
import { motion, AnimatePresence } from 'motion/react';

interface AdminConfigDrawerProps {
  config: AppConfig;
  onUpdateConfig: (newConfig: AppConfig) => void;
}

export const AdminConfigDrawer: React.FC<AdminConfigDrawerProps> = ({
  config,
  onUpdateConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<AppConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsOpen(false);
    }, 1200);
  };

  return (
    <>
      {/* Small subtle Floating Gear trigger for easy configuration */}
      <button
        id="admin-config-trigger"
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Configurar links do grupo"
        title="Personalizar links e configurações da página"
        className="fixed bottom-4 right-4 z-40 bg-neutral-900/90 hover:bg-neutral-900 text-white p-3 rounded-full shadow-lg border border-neutral-700 backdrop-blur-md transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <Settings className="w-5 h-5 text-orange-400" />
      </button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-neutral-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-neutral-100 bg-neutral-50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-neutral-900 font-bold text-base">
                  <Settings className="w-5 h-5 text-[#F4512A]" />
                  <span>Configurações dos Links</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-5">
                <div className="bg-orange-50/70 p-3 rounded-xl border border-orange-200/60 text-xs text-neutral-700">
                  💡 <strong>Dica:</strong> Altere os links de convite do WhatsApp e Telegram abaixo para direcionar os visitantes diretamente para o seu grupo real.
                </div>

                {/* WhatsApp URL */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Link do Grupo WhatsApp (WHATSAPP_GROUP_URL)
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={formData.links.WHATSAPP_GROUP_URL}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          links: { ...formData.links, WHATSAPP_GROUP_URL: e.target.value },
                        })
                      }
                      placeholder="https://chat.whatsapp.com/SEU_CODIGO"
                      className="w-full text-xs font-mono px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Telegram URL */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Link do Canal Telegram (TELEGRAM_GROUP_URL)
                  </label>
                  <input
                    type="url"
                    value={formData.links.TELEGRAM_GROUP_URL}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        links: { ...formData.links, TELEGRAM_GROUP_URL: e.target.value },
                      })
                    }
                    placeholder="https://t.me/SEU_CANAL"
                    className="w-full text-xs font-mono px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  />
                </div>

                {/* Instagram URL */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                    Link do Instagram
                  </label>
                  <input
                    type="url"
                    value={formData.links.INSTAGRAM_URL}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        links: { ...formData.links, INSTAGRAM_URL: e.target.value },
                      })
                    }
                    placeholder="https://instagram.com/seu_perfil"
                    className="w-full text-xs font-mono px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                {/* Social Proof Mode Selector */}
                <div className="pt-3 border-t border-neutral-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Formato da Prova Social
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-start gap-2.5 p-3 rounded-xl border border-neutral-200 cursor-pointer hover:bg-neutral-50 text-xs">
                      <input
                        type="radio"
                        name="socialProofMode"
                        checked={formData.socialProof.mode === 'option_a'}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            socialProof: { ...formData.socialProof, mode: 'option_a' },
                          })
                        }
                        className="mt-0.5 text-orange-600 focus:ring-orange-500"
                      />
                      <div>
                        <strong className="text-neutral-900 block">Opção A (Sem número específico)</strong>
                        <span className="text-neutral-500">"{formData.socialProof.textOptionA}"</span>
                      </div>
                    </label>

                    <label className="flex items-start gap-2.5 p-3 rounded-xl border border-neutral-200 cursor-pointer hover:bg-neutral-50 text-xs">
                      <input
                        type="radio"
                        name="socialProofMode"
                        checked={formData.socialProof.mode === 'option_b'}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            socialProof: { ...formData.socialProof, mode: 'option_b' },
                          })
                        }
                        className="mt-0.5 text-orange-600 focus:ring-orange-500"
                      />
                      <div className="flex-1">
                        <strong className="text-neutral-900 block">Opção B (Com número verificado)</strong>
                        <div className="mt-1.5 flex items-center gap-2">
                          <span className="text-neutral-600 text-xs">Membros:</span>
                          <input
                            type="number"
                            value={formData.socialProof.verifiedMemberCount || 0}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                socialProof: {
                                  ...formData.socialProof,
                                  verifiedMemberCount: parseInt(e.target.value, 10) || 0,
                                },
                              })
                            }
                            className="w-28 text-xs px-2 py-1 rounded border border-neutral-300"
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F4512A] hover:bg-[#D83B14] text-white font-bold text-sm shadow-md transition-colors"
                  >
                    {savedSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Configurações Salvas!</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>Aplicar Configurações</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
