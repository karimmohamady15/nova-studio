import { motion } from 'motion/react';
import { LocaleContent } from '../data/content';

interface TestimonialsProps {
  content: LocaleContent;
}

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <section className="bg-[#101010] text-white py-20 sm:py-24 lg:py-28 border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs sm:text-sm text-[#C8F169] font-medium">
              {content.testimonials.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-balance leading-[1.16]">
              {content.testimonials.heading}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A5A5A0] max-w-sm leading-relaxed">
            {content.testimonials.demoNote}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {content.testimonials.items.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between pt-6 border-t border-white/15 space-y-8"
            >
              <blockquote className="text-base sm:text-lg text-[#F3F0E8] leading-relaxed">
                “{item.quote}”
              </blockquote>

              <figcaption className="pt-4 border-t border-white/10 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-[#A5A5A0] mt-0.5">
                    {item.role} · {item.company}
                  </div>
                </div>
                <span className="text-xs text-[#C8F169] shrink-0">{item.projectRef}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
