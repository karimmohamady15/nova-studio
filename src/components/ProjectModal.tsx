import { useEffect, useRef } from 'react';
import { X, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Language, LocaleContent, ProjectItem } from '../data/content';
import { EditorialImage } from './EditorialImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  content: LocaleContent;
  lang: Language;
  onClose: () => void;
  onDiscussProject: (projectName: string) => void;
}

export function ProjectModal({
  project,
  content,
  lang,
  onClose,
  onDiscussProject,
}: ProjectModalProps) {
  const DirectionalArrow = lang === 'ar' ? ArrowUpLeft : ArrowUpRight;
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 30);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#101010]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#141414] border border-white/15 text-white"
          >
            {/* Top Bar inside Modal */}
            <div className="sticky top-0 z-10 bg-[#141414]/95 backdrop-blur-sm border-b border-white/10 px-5 sm:px-6 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#A5A5A0] min-w-0">
                <span className="font-mono-tabular text-[#C8F169] shrink-0">{project.index}</span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{project.industry}</span>
                <span aria-hidden="true" className="hidden sm:inline">·</span>
                <span className="hidden sm:inline shrink-0">{content.work.modalDemoBadge}</span>
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                aria-label={content.work.modalClose}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm text-white border border-white/20 hover:border-[#C8F169] hover:text-[#C8F169] transition-colors cursor-pointer min-h-[40px] shrink-0 focus-visible:outline-2 focus-visible:outline-[#C8F169]"
              >
                <span className="hidden sm:inline">{content.work.modalClose}</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Hero Image */}
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full border-b border-white/10">
              <EditorialImage
                src={project.image}
                alt={project.imageAlt}
                titleFallback={project.name}
                className="w-full h-full"
                imgClassName={project.imagePosition}
              />
            </div>

            {/* Editorial Case Study Body */}
            <div className="p-6 sm:p-10 space-y-10">
              {/* Project Introduction */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-[#C8F169]">{project.category}</p>
                  <h2
                    id="project-modal-title"
                    className="text-3xl sm:text-5xl font-semibold tracking-tight"
                  >
                    {project.name}
                  </h2>
                </div>
                <div className="space-y-2 max-w-md">
                  <p className="text-xs font-medium text-[#A5A5A0]">{content.work.modalIntro}</p>
                  <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Challenge, Creative Direction & Design Approach */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                <div className="space-y-3">
                  <h3 className="text-xs font-medium text-[#C8F169]">
                    {content.work.modalChallenge}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-medium text-[#C8F169]">
                    {content.work.modalCreativeDirection}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed">
                    {project.creativeDirection}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-medium text-[#C8F169]">
                    {content.work.modalDesignApproach}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F3F0E8]/90 leading-relaxed">
                    {project.designApproach}
                  </p>
                </div>
              </div>

              {/* Deliverables & Concept Disclaimer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-white/10">
                <div className="space-y-4">
                  <h3 className="text-xs font-medium text-[#A5A5A0]">
                    {content.work.modalDeliverables}
                  </h3>
                  <ul className="space-y-2.5 text-sm sm:text-base text-white">
                    {project.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-[#C8F169] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="p-4 bg-[#101010] border border-white/10 space-y-1.5">
                    <p className="text-xs font-medium text-[#C8F169]">
                      {content.work.modalDemoBadge}
                    </p>
                    <p className="text-xs sm:text-sm text-[#A5A5A0] leading-relaxed">
                      {project.conceptNote}
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => onDiscussProject(project.name)}
                      className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C8F169] text-[#101010] text-sm font-semibold hover:bg-[#d8f78d] transition-colors cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    >
                      <span>{content.work.modalCta}</span>
                      <DirectionalArrow className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
