import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, LocaleContent, ProjectItem } from '../data/content';
import { EditorialImage } from './EditorialImage';

interface SelectedWorkProps {
  content: LocaleContent;
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export function SelectedWork({ content, lang, onSelectProject }: SelectedWorkProps) {
  const DirectionalArrow = lang === 'ar' ? ArrowUpLeft : ArrowUpRight;
  const [aura, medora, velo] = content.work.projects;

  const renderProjectCard = (project: ProjectItem, containerClass: string, aspectClass: string) => (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col ${containerClass}`}
    >
      <button
        type="button"
        onClick={() => onSelectProject(project)}
        className="text-start w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C8F169] focus-visible:outline-offset-4"
      >
        <div className={`relative w-full overflow-hidden border border-white/10 ${aspectClass}`}>
          <EditorialImage
            src={project.image}
            alt={project.imageAlt}
            titleFallback={project.name}
            className="w-full h-full"
            imgClassName={`${project.imagePosition} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101010]/65 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        </div>

        <div className="mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10 group-hover:border-[#C8F169]/60 transition-colors duration-200">
          <div className="flex items-baseline gap-3">
            <span className="font-mono-tabular text-xs text-[#C8F169]">{project.index}</span>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-[#C8F169] transition-colors duration-150">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A5A5A0]">
            <span>{project.industry}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-tabular">{project.year}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <p className="text-xs text-[#A5A5A0]">{project.category}</p>
            <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 py-1 text-xs sm:text-sm font-medium text-[#C8F169] whitespace-nowrap shrink-0">
            <span>{content.work.viewCaseStudy}</span>
            <DirectionalArrow className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
          </span>
        </div>
      </button>
    </motion.article>
  );

  return (
    <section id="work" className="bg-[#101010] text-white py-20 sm:py-24 lg:py-32 border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 lg:pb-16 border-b border-white/10">
          <div className="space-y-4 max-w-3xl">
            <p className="text-xs sm:text-sm text-[#C8F169] font-medium">
              {content.work.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-balance leading-[1.15]">
              {content.work.heading}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#A5A5A0] max-w-xs leading-relaxed">
            {content.work.demoNote}
          </p>
        </div>

        {/* Editorial Asymmetric Portfolio Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-10 lg:gap-y-20 items-start">
          {/* 01 AURA — Prominent asymmetric span */}
          {renderProjectCard(aura, 'lg:col-span-7', 'aspect-[4/3]')}

          {/* 02 MEDORA — Offset vertical cadence on desktop */}
          {renderProjectCard(medora, 'lg:col-span-5 lg:mt-16', 'aspect-[4/3]')}

          {/* 03 VELO — Full-width cinematic showcase */}
          {renderProjectCard(velo, 'lg:col-span-12', 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9]')}
        </div>
      </div>
    </section>
  );
}
