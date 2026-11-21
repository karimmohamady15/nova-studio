import { useState } from 'react';
import { motion } from 'motion/react';
import { LocaleContent } from '../data/content';
import { EditorialImage } from './EditorialImage';

interface AboutAndApproachProps {
  content: LocaleContent;
}

export function AboutAndApproach({ content }: AboutAndApproachProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = content.approach.steps[activeStepIndex] ?? content.approach.steps[0];

  return (
    <section
      id="about"
      className="bg-[#F3F0E8] text-[#101010] py-20 sm:py-24 lg:py-32 border-b border-[#101010]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20 lg:space-y-28">
        {/* Part 1: About NOVA Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between gap-8"
          >
            <div className="space-y-6">
              <p className="text-xs sm:text-sm font-medium text-[#101010]/65">
                {content.about.sectionLabel}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#101010] text-balance leading-[1.15]">
                {content.about.headline}
              </h2>
            </div>

            <div className="space-y-5 max-w-2xl pt-6 border-t border-[#101010]/15">
              {content.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-[#101010]/85 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/4] w-full lg:max-h-[560px] border border-[#101010]/15 overflow-hidden">
              <EditorialImage
                src="/src/assets/images/about_nova_editorial_1795263620463.jpg"
                alt={content.about.imageAlt}
                titleFallback={content.brandName}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Part 2: Why NOVA — Asymmetric 2-over-3 Swiss Grid (Zero Orphan Space) */}
        <div className="pt-14 border-t border-[#101010]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#101010]">
                {content.about.whyHeading}
              </h3>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-6 gap-x-8 gap-y-10">
              {content.about.whyItems.map((item, idx) => (
                <div
                  key={item.index}
                  className={`pt-4 border-t border-[#101010]/20 space-y-2.5 ${
                    idx < 2 ? 'sm:col-span-3' : 'sm:col-span-2'
                  }`}
                >
                  <span className="font-mono-tabular text-xs text-[#101010]/55">
                    {item.index}
                  </span>
                  <h4 className="text-base sm:text-lg font-semibold text-[#101010]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#101010]/75 leading-relaxed">
                    {item.statement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 3: Our Approach — Hairline Grid 4-Step Editorial Timeline */}
        <div className="pt-14 border-t border-[#101010]/15 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs sm:text-sm font-medium text-[#101010]/65">
                {content.approach.sectionLabel}
              </p>
              <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#101010] text-balance leading-[1.18]">
                {content.approach.heading}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#101010]/75 max-w-sm">
              {content.approach.subtitle}
            </p>
          </div>

          {/* Hairline-gap grid eliminates tablet/mobile border mismatches */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#101010]/15 border border-[#101010]/15">
            {content.approach.steps.map((step, index) => {
              const isActive = index === activeStepIndex;

              return (
                <button
                  key={step.index}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveStepIndex(index)}
                  className={`p-6 sm:p-7 text-start flex flex-col justify-between gap-8 transition-colors duration-150 cursor-pointer min-h-[180px] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#C8F169] ${
                    isActive
                      ? 'bg-[#101010] text-white'
                      : 'bg-[#EAE5D9] text-[#101010] hover:bg-[#e1dbcd]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 w-full">
                    <span
                      className={`font-mono-tabular text-xs font-medium ${
                        isActive ? 'text-[#C8F169]' : 'text-[#101010]/60'
                      }`}
                    >
                      {step.index}
                    </span>
                    <span
                      className={`text-xs ${
                        isActive ? 'text-[#A5A5A0]' : 'text-[#101010]/60'
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {step.title}
                    </h4>
                    <p
                      className={`text-sm leading-relaxed ${
                        isActive ? 'text-[#F3F0E8]/85' : 'text-[#101010]/75'
                      }`}
                    >
                      {step.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Focused Step Output Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-sm text-[#101010]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="font-mono-tabular text-xs px-2 py-0.5 bg-[#101010] text-[#C8F169] shrink-0">
                {activeStep.index}
              </span>
              <span className="font-medium">{activeStep.title}</span>
              <span aria-hidden="true" className="text-[#101010]/40">
                ·
              </span>
              <span className="text-[#101010]/80">
                {content.approach.focusLabel}: {activeStep.focus}
              </span>
            </div>
            <span className="font-mono-tabular text-xs text-[#101010]/65 shrink-0">
              {activeStep.duration}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
