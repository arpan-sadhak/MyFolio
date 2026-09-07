import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import { AboutMe } from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-ink-950">
      <div className="flex items-center gap-3 text-ink-900/50 dark:text-paper-100/40">
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export default function Home({editMode = false}) {
    
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-ink-950 min-h-screen transition-colors duration-300">
      <Sidebar
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        editMode={editMode}
      />
      <Topbar onOpenMenu={() => setMobileOpen(true)} />

      <main className="lg:pl-[250px]">
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-10">
          <Hero editMode={editMode} />
          <AboutMe editMode={editMode} />
          <TechStack editMode={editMode} />
          <Skills  editMode={editMode} />
          <FeaturedProjects editMode={editMode} />
          <Experience editMode={editMode} />
          <Blog  editMode={editMode} />
          <Contact editMode={editMode} />
          <Footer editMode={editMode} />
        </div>
      </main>
    </div>
  );
}
