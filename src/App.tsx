/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useState, useEffect, useCallback } from 'react';
import { CONTENT, Language, ProjectItem } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { AboutAndApproach } from './components/AboutAndApproach';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const ProjectModal = lazy(() =>
  import('./components/ProjectModal').then((module) => ({
    default: module.ProjectModal,
  }))
);

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [preselectedSubject, setPreselectedSubject] = useState<string | undefined>(undefined);

  const content = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'NOVA Studio — تجارب رقمية تتجاوز التوقعات'
        : 'NOVA Studio — Digital Experiences. Beyond Expectations.';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', content.metaDescription);
    }
  }, [lang, content.metaDescription]);

  const handleToggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'ar' ? 'en' : 'ar';
      if (selectedProject) {
        const matched = CONTENT[next].work.projects.find((p) => p.id === selectedProject.id) ?? null;
        setSelectedProject(matched);
      }
      return next;
    });
  }, [selectedProject]);

  const scrollToContactWithSubject = useCallback((subject: string) => {
    setSelectedProject(null);
    setPreselectedSubject(subject);
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 40);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#101010] text-white">
      <Navbar content={content} lang={lang} onToggleLang={handleToggleLang} />

      <main>
        <Hero content={content} lang={lang} />
        <SelectedWork
          content={content}
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <Services
          content={content}
          lang={lang}
          onSelectService={scrollToContactWithSubject}
        />
        <AboutAndApproach content={content} />
        <Testimonials content={content} />
        <ContactSection
          content={content}
          lang={lang}
          preselectedSubject={preselectedSubject}
        />
      </main>

      <Footer content={content} />

      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            content={content}
            lang={lang}
            onClose={() => setSelectedProject(null)}
            onDiscussProject={scrollToContactWithSubject}
          />
        </Suspense>
      )}
    </div>
  );
}
