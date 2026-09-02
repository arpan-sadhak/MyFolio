import { useState } from 'react';
import Sidebar from '../form/Sidebar';
import Topbar from '../form/Topbar';
import Hero from '../form/Hero';
import TechStack from '../form/TechStack';
import FeaturedProjects from '../form/FeaturedProjects';
import AboutMe from '../form/AboutMe';
import Skills from '../form/Skills';
import Experience from '../form/Experience';
import Blog from '../form/Blog';
import Testimonials from '../form/Testimonials';
import Contact from '../form/Contact';
import Footer from '../form/Footer';
import { useSelector } from 'react-redux';

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

export default function Edit() {
  // const { loading, error } = usePortfolioData();
  const [mobileOpen, setMobileOpen] = useState(false);

  const data = useSelector(state => state.hero)

  // if (loading || !data) return <PageSkeleton />;

  // if (error) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-white dark:bg-ink-950 text-ink-900 dark:text-paper-100 px-6 text-center">
  //       <p>Couldn't load portfolio content. Please refresh the page.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white dark:bg-ink-950 min-h-screen transition-colors duration-300">
      <Sidebar
        resumeUrl={data.resumeUrl}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <Topbar onOpenMenu={() => setMobileOpen(true)} />

      <main className="lg:pl-[250px]">
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-10">
          <Hero />
          <AboutMe />
          <TechStack />
          <Skills />
          <FeaturedProjects/>
          <Experience />
          <Blog />
          <Testimonials />
          <Contact />
          <Footer/>
        </div>
      </main>
    </div>
  );
}
