import { useState, useEffect, FormEvent } from 'react';
import { MessageCircle, Check, Copy, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { Language, LocaleContent } from '../data/content';

interface ContactSectionProps {
  content: LocaleContent;
  lang: Language;
  preselectedSubject?: string;
}

interface FormState {
  name: string;
  email: string;
  service: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  description?: string;
}

export function ContactSection({ content, lang, preselectedSubject }: ContactSectionProps) {
  const DirectionalArrow = lang === 'ar' ? ArrowUpLeft : ArrowUpRight;

  const configuredWhatsapp = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').replace(/\D/g, '');
  const configuredEmail = (import.meta.env.VITE_CONTACT_EMAIL ?? '').trim();
  const displayEmail = configuredEmail || content.contact.emailValue;

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    service: '',
    description: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showWhatsappNotice, setShowWhatsappNotice] = useState(false);

  useEffect(() => {
    if (!preselectedSubject) return;
    const matchedOption = content.contact.serviceOptions.find(
      (opt) => opt === preselectedSubject
    );
    if (matchedOption) {
      setForm((prev) => ({ ...prev, service: matchedOption }));
      setErrors((prev) => ({ ...prev, service: undefined }));
    } else {
      setForm((prev) => ({
        ...prev,
        description:
          lang === 'ar'
            ? `مهتم بمناقشة مشروع مستوحى من مفهوم ${preselectedSubject}.`
            : `Interested in discussing a project inspired by the ${preselectedSubject} concept.`,
      }));
      setErrors((prev) => ({ ...prev, description: undefined }));
    }
    setSubmitted(false);
  }, [preselectedSubject, content.contact.serviceOptions, lang]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = content.contact.validation.nameRequired;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = content.contact.validation.emailInvalid;
    }
    if (!form.service) {
      nextErrors.service = content.contact.validation.serviceRequired;
    }
    if (form.description.trim().length < 10) {
      nextErrors.description = content.contact.validation.descriptionRequired;
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (submitted) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', service: '', description: '' });
    setErrors({});
    setSubmitted(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(displayEmail);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const whatsappUrl = configuredWhatsapp
    ? `https://wa.me/${configuredWhatsapp}?text=${encodeURIComponent(
        content.contact.whatsappMessage
      )}`
    : null;

  return (
    <section
      id="contact"
      className="bg-[#101010] text-white py-20 sm:py-24 lg:py-32 border-b border-white/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Final CTA Lead Column */}
          <div className="lg:col-span-6 space-y-7">
            <p className="text-xs sm:text-sm text-[#C8F169] font-medium">
              {content.contact.sectionLabel}
            </p>

            <h2
              className={`font-semibold text-white text-balance ${
                lang === 'ar'
                  ? 'text-[clamp(2rem,4.1vw,3.9rem)] leading-[1.16]'
                  : 'text-[clamp(2rem,3.8vw,3.65rem)] leading-[1.06] tracking-[-0.03em]'
              }`}
            >
              {content.contact.headline}
            </h2>

            <p className="text-base sm:text-lg text-[#A5A5A0] max-w-lg leading-relaxed">
              {content.contact.subtext}
            </p>

            {/* Action Channels */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C8F169] text-[#101010] text-sm font-semibold hover:bg-[#d8f78d] transition-colors min-h-[48px] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{content.contact.whatsappCta}</span>
                    <DirectionalArrow className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowWhatsappNotice((prev) => !prev)}
                    aria-expanded={showWhatsappNotice}
                    className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C8F169] text-[#101010] text-sm font-semibold hover:bg-[#d8f78d] transition-colors cursor-pointer min-h-[48px] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{content.contact.whatsappCta}</span>
                    <DirectionalArrow className="w-4 h-4" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={content.contact.copyEmail}
                  className="inline-flex items-center gap-2.5 px-5 py-3.5 border border-white/20 text-sm text-[#F3F0E8] hover:border-[#C8F169] hover:text-[#C8F169] transition-colors cursor-pointer min-h-[48px] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#C8F169]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-[#C8F169]" />
                      <span>{content.contact.copiedEmail}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span dir="ltr">{displayEmail}</span>
                    </>
                  )}
                </button>
              </div>

              {showWhatsappNotice && !whatsappUrl && (
                <p
                  role="status"
                  className="text-xs sm:text-sm text-[#C8F169] bg-[#161616] border border-[#C8F169]/35 px-4 py-3 max-w-md leading-relaxed"
                >
                  {content.contact.whatsappUnconfiguredNotice}
                </p>
              )}

              {!configuredWhatsapp && !configuredEmail && (
                <p className="text-xs text-[#A5A5A0] max-w-md leading-relaxed">
                  {content.contact.channelsDisclaimer}
                </p>
              )}
            </div>
          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-6 bg-[#161616] border border-white/12 p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="py-4 space-y-6" role="status" aria-live="polite">
                <div className="w-11 h-11 bg-[#C8F169] text-[#101010] flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {content.contact.success.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed">
                    {content.contact.success.message}
                  </p>
                  <p className="text-xs sm:text-sm text-[#C8F169] pt-3 border-t border-white/10 leading-relaxed">
                    {content.contact.success.demoNotice}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center px-5 py-3 text-sm font-medium border border-white/25 text-white hover:border-[#C8F169] hover:text-[#C8F169] transition-colors cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-[#C8F169]"
                >
                  {content.contact.success.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="pb-4 border-b border-white/10">
                  <h3 className="text-lg font-medium text-white">
                    {content.contact.formTitle}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-xs font-medium text-[#A5A5A0]">
                      {content.contact.fields.name}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder={content.contact.fields.namePlaceholder}
                      className="w-full px-4 py-3 bg-[#101010] border border-white/15 text-sm text-white placeholder:text-[#A5A5A0]/50 focus:outline-none focus:border-[#C8F169] transition-colors min-h-[44px]"
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-xs text-[#ff8f8f]" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-xs font-medium text-[#A5A5A0]">
                      {content.contact.fields.email}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      dir={form.email ? 'ltr' : undefined}
                      value={form.email}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder={content.contact.fields.emailPlaceholder}
                      className="w-full px-4 py-3 bg-[#101010] border border-white/15 text-sm text-white placeholder:text-[#A5A5A0]/50 focus:outline-none focus:border-[#C8F169] transition-colors min-h-[44px] text-start"
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-xs text-[#ff8f8f]" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-service" className="block text-xs font-medium text-[#A5A5A0]">
                    {content.contact.fields.service}
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'contact-service-error' : undefined}
                    onChange={(e) => {
                      setForm({ ...form, service: e.target.value });
                      if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                    }}
                    className="w-full px-4 py-3 bg-[#101010] border border-white/15 text-sm text-white focus:outline-none focus:border-[#C8F169] transition-colors min-h-[44px]"
                  >
                    <option value="">{content.contact.fields.servicePlaceholder}</option>
                    {content.contact.serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="contact-service-error" className="text-xs text-[#ff8f8f]" role="alert">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-description" className="block text-xs font-medium text-[#A5A5A0]">
                    {content.contact.fields.description}
                  </label>
                  <textarea
                    id="contact-description"
                    rows={4}
                    value={form.description}
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? 'contact-description-error' : undefined}
                    onChange={(e) => {
                      setForm({ ...form, description: e.target.value });
                      if (errors.description) {
                        setErrors((prev) => ({ ...prev, description: undefined }));
                      }
                    }}
                    placeholder={content.contact.fields.descriptionPlaceholder}
                    className="w-full px-4 py-3 bg-[#101010] border border-white/15 text-sm text-white placeholder:text-[#A5A5A0]/50 focus:outline-none focus:border-[#C8F169] transition-colors resize-y"
                  />
                  {errors.description && (
                    <p id="contact-description-error" className="text-xs text-[#ff8f8f]" role="alert">
                      {errors.description}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#C8F169] text-[#101010] text-sm font-semibold hover:bg-[#d8f78d] transition-colors cursor-pointer min-h-[48px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  <span>{content.contact.submitCta}</span>
                  <DirectionalArrow className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
