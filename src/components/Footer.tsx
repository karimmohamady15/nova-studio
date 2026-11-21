import { LocaleContent } from '../data/content';

interface FooterProps {
  content: LocaleContent;
}

export function Footer({ content }: FooterProps) {
  const configuredEmail = (import.meta.env.VITE_CONTACT_EMAIL ?? '').trim();

  return (
    <footer className="bg-[#101010] text-[#A5A5A0] py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-3">
            <a
              href="#top"
              className="inline-block text-xl font-semibold tracking-tight text-white hover:text-[#C8F169] transition-colors focus-visible:outline-2 focus-visible:outline-[#C8F169] focus-visible:outline-offset-4"
            >
              {content.brandName}
            </a>
            <p className="text-sm text-[#A5A5A0] max-w-xs leading-relaxed">
              {content.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-medium text-white">{content.footer.navigationTitle}</p>
            <nav
              aria-label={content.footer.navigationTitle}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
            >
              <a href="#work" className="py-1 hover:text-[#C8F169] transition-colors">
                {content.nav.work}
              </a>
              <a href="#services" className="py-1 hover:text-[#C8F169] transition-colors">
                {content.nav.services}
              </a>
              <a href="#about" className="py-1 hover:text-[#C8F169] transition-colors">
                {content.nav.about}
              </a>
              <a href="#contact" className="py-1 hover:text-[#C8F169] transition-colors">
                {content.nav.contact}
              </a>
            </nav>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-medium text-white">{content.footer.connectTitle}</p>
            <div className="space-y-2 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#A5A5A0]">{content.footer.emailLabel}</span>
                {configuredEmail ? (
                  <a
                    href={`mailto:${configuredEmail}`}
                    dir="ltr"
                    className="text-[#F3F0E8] hover:text-[#C8F169] transition-colors"
                  >
                    {configuredEmail}
                  </a>
                ) : (
                  <span dir="ltr" className="text-[#F3F0E8]/80">
                    {content.footer.emailPlaceholderValue}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 pt-1">
                {content.footer.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    className="py-1 hover:text-[#C8F169] transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#A5A5A0]">
          <p>{content.footer.copyright}</p>
          <p className="max-w-xl leading-relaxed">{content.footer.demoDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
