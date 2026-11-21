import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language, LocaleContent } from '../data/content';

interface NavbarProps {
  content: LocaleContent;
  lang: Language;
  onToggleLang: () => void;
}

export function Navbar({ content, lang, onToggleLang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: '#work', label: content.nav.work },
    { href: '#services', label: content.nav.services },
    { href: '#about', label: content.nav.about },
    { href: '#contact', label: content.nav.contact },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
          scrolled
            ? 'bg-[#101010]/95 backdrop-blur-sm border-b border-white/10'
            : 'bg-[#101010]/85 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            onClick={handleNavClick}
            className="text-lg sm:text-xl font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8F169] focus-visible:outline-offset-4"
          >
            {content.brandName}
          </a>

          {/* Zone 2: 4 clean single-line text nav links */}
          <nav
            aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary Navigation'}
            className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#A5A5A0]"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:bottom-1 after:inset-x-0 after:h-px after:bg-[#C8F169] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-center focus-visible:outline-2 focus-visible:outline-[#C8F169] focus-visible:outline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Switcher + Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onToggleLang}
              aria-label={content.nav.langSwitchAria}
              className="px-3.5 py-2 text-xs font-medium text-[#F3F0E8] border border-white/20 hover:border-[#C8F169] hover:text-[#C8F169] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] sm:min-h-[38px] focus-visible:outline-2 focus-visible:outline-[#C8F169] focus-visible:outline-offset-2"
            >
              {content.nav.langSwitchLabel}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-xs sm:text-sm font-semibold bg-[#C8F169] text-[#101010] hover:bg-[#d8f78d] transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              {content.nav.cta}
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? content.nav.menuClose : content.nav.menuOpen}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 text-white border border-white/15 hover:border-[#C8F169] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C8F169]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-30 bg-[#101010] border-t border-white/10 px-6 py-8 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <nav
              aria-label={lang === 'ar' ? 'القائمة المتنقلة' : 'Mobile Navigation'}
              className="flex flex-col divide-y divide-white/10"
            >
              {navLinks.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="py-5 flex items-center justify-between text-2xl font-medium text-white hover:text-[#C8F169] transition-colors min-h-[48px]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono-tabular text-xs text-[#A5A5A0]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="pt-8 border-t border-white/10 space-y-5">
              <p className="text-sm text-[#A5A5A0]">{content.tagline}</p>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold bg-[#C8F169] text-[#101010] hover:bg-[#d8f78d] transition-colors min-h-[48px]"
              >
                {content.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
