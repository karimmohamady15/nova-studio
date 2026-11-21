import { useState } from 'react';
import { ArrowUpLeft, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language, LocaleContent } from '../data/content';

interface ServicesProps {
  content: LocaleContent;
  lang: Language;
  onSelectService: (serviceTitle: string) => void;
}

export function Services({ content, lang, onSelectService }: ServicesProps) {
  const [activeId, setActiveId] = useState<string>(content.services.items[0].id);
  const DirectionalArrow = lang === 'ar' ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="services"
      className="bg-[#141414] text-white py-20 sm:py-24 lg:py-32 border-b border-white/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Sticky Editorial Intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-5">
            <p className="text-xs sm:text-sm text-[#C8F169] font-medium">
              {content.services.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-balance leading-[1.16]">
              {content.services.heading}
            </h2>
            <p className="text-sm sm:text-base text-[#A5A5A0] leading-relaxed max-w-sm">
              {content.services.intro}
            </p>
          </div>

          {/* Minimalist Service Ledger */}
          <div className="lg:col-span-8 border-t border-white/15">
            {content.services.items.map((service) => {
              const isOpen = activeId === service.id;
              const panelId = `service-panel-${service.id}`;

              return (
                <div key={service.id} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => setActiveId(isOpen ? '' : service.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full py-6 sm:py-8 text-start flex items-start sm:items-center justify-between gap-6 group cursor-pointer min-h-[48px] focus-visible:outline-2 focus-visible:outline-[#C8F169] focus-visible:outline-offset-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                      <span
                        className={`font-mono-tabular text-xs sm:text-sm transition-colors ${
                          isOpen ? 'text-[#C8F169]' : 'text-[#A5A5A0] group-hover:text-[#C8F169]'
                        }`}
                      >
                        {service.index}
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight transition-colors ${
                            isOpen ? 'text-[#C8F169]' : 'text-white group-hover:text-[#F3F0E8]'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-xs sm:text-sm text-[#A5A5A0]">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`w-11 h-11 shrink-0 flex items-center justify-center border transition-colors ${
                        isOpen
                          ? 'border-[#C8F169] bg-[#C8F169] text-[#101010]'
                          : 'border-white/20 text-white group-hover:border-[#C8F169] group-hover:text-[#C8F169]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="pb-8 sm:pb-10 ps-0 sm:ps-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
                      >
                        <div className="md:col-span-7 space-y-4">
                          <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed">
                            {service.description}
                          </p>
                          <div>
                            <button
                              type="button"
                              onClick={() => onSelectService(service.title)}
                              className="inline-flex items-center gap-2 py-2 text-xs sm:text-sm font-medium text-[#C8F169] hover:underline underline-offset-4 cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-[#C8F169]"
                            >
                              <span>{content.services.ctaLabel}</span>
                              <DirectionalArrow className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="md:col-span-5 space-y-2.5 border-t md:border-t-0 md:border-s border-white/10 pt-4 md:pt-0 md:ps-6">
                          <p className="text-xs text-[#A5A5A0]">
                            {content.services.deliverablesLabel}
                          </p>
                          <ul className="space-y-2 text-sm text-[#F3F0E8]">
                            {service.deliverables.map((item) => (
                              <li key={item} className="flex items-center gap-2.5">
                                <span className="w-1 h-1 bg-[#C8F169] shrink-0" aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
