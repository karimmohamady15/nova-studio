import { ArrowDown, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, LocaleContent } from '../data/content';
import { EditorialImage } from './EditorialImage';

interface HeroProps {
  content: LocaleContent;
  lang: Language;
}

export function Hero({ content, lang }: HeroProps) {
  const DirectionalArrow = lang === 'ar' ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="top"
      className="relative bg-[#101010] text-white pt-24 sm:pt-28 lg:pt-32 pb-12 lg:pb-16 border-b border-white/10 editorial-grain overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Asymmetric 12-column editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Typographic Lead Column */}
          <div className="lg:col-span-7 flex flex-col justify-between py-1 lg:py-3">
            <div className="space-y-5 sm:space-y-7">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm text-[#A5A5A0] tracking-wide"
              >
                {content.hero.kicker}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`font-semibold text-white text-balance ${
                  lang === 'ar'
                    ? 'text-[clamp(2rem,4.3vw,4.1rem)] leading-[1.18] max-w-3xl'
                    : 'text-[clamp(2rem,3.9vw,3.85rem)] leading-[1.06] tracking-[-0.03em] max-w-3xl'
                }`}
              >
                {content.hero.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-[#A5A5A0] max-w-xl leading-relaxed"
              >
                {content.hero.supporting}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 lg:mt-12 flex flex-wrap items-center gap-5"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#C8F169] text-[#101010] text-sm sm:text-base font-semibold hover:bg-[#d8f78d] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[48px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <span>{content.hero.primaryCta}</span>
                <DirectionalArrow className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm sm:text-base font-medium text-[#F3F0E8] hover:text-[#C8F169] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[44px] border-b border-white/25 hover:border-[#C8F169] focus-visible:outline-2 focus-visible:outline-[#C8F169] focus-visible:outline-offset-4"
              >
                {content.hero.secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* Focal Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col"
          >
            <div className="relative flex-1 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[460px] border border-white/10 overflow-hidden group">
              <EditorialImage
                src="/src/assets/images/hero_nova_studio_1795263620939.jpg"
                alt={content.hero.imageAlt}
                titleFallback={content.brandName}
                loading="eager"
                className="w-full h-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Measured scrim for crisp contrast */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101010]/90 via-[#101010]/25 to-transparent" />

              {/* Subtle kinetic architectural rule */}
              <motion.div
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: lang === 'ar' ? 'right center' : 'left center' }}
                className="absolute top-0 inset-x-0 h-[2px] bg-[#C8F169]"
              />

              {/* Caption integrated inside measured dark scrim */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#F3F0E8]/90 max-w-xs leading-snug">
                  {content.hero.studioCaption}
                </p>
                {/* Geometric kinetic mark */}
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 36 36"
                  className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 text-[#C8F169]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <line x1="18" y1="6" x2="18" y2="30" stroke="currentColor" strokeWidth="1" />
                  <line x1="6" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="1" />
                </motion.svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width bottom strip: studio disciplines + scroll indicator */}
        <div className="mt-10 lg:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#A5A5A0]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {content.hero.disciplines.map((discipline, idx) => (
              <span key={discipline} className="inline-flex items-center gap-3">
                <span className="text-[#F3F0E8]/90">{discipline}</span>
                {idx < content.hero.disciplines.length - 1 && (
                  <span aria-hidden="true" className="text-[#C8F169]">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>

          <a
            href="#work"
            className="inline-flex items-center gap-2 py-1 text-[#F3F0E8] hover:text-[#C8F169] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto focus-visible:outline-2 focus-visible:outline-[#C8F169] focus-visible:outline-offset-4"
          >
            <span>{content.hero.scrollLabel}</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <ArrowDown className="w-4 h-4 text-[#C8F169]" />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
