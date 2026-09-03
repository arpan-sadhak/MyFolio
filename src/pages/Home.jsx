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
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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

export default function Home({editMode = false}) {

  const about = useSelector((state) => state.about);
  const posts = useSelector((state) => state.blog.blog);
  const contact = useSelector((state) => state.contact.contact);
  const social = useSelector((state) => state.contact.contact.social);
  const experience = useSelector((state) => state.experience.experience);
  const projects = useSelector(state => state.projects.project);
  const hero = useSelector(state => state.hero);
  const name = useSelector((state) => state.hero.name);
  const skills = useSelector(state => state.skills.skills);
  const stack = useSelector((state) => state.techStack.techStack);
  const items = useSelector((state) => state.testimonial.testimonials);
  



  // const { data, loading, error } = usePortfolioData();
  const [mobileOpen, setMobileOpen] = useState(false);

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
        resumeUrl={hero.resumeUrl}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        editMode
      />
      <Topbar onOpenMenu={() => setMobileOpen(true)} />

      <main className="lg:pl-[250px]">
        <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-10">
          <Hero profile={hero} editMode={editMode} />
          <AboutMe about={about} editMode={editMode} />
          <TechStack stack={stack} editMode={editMode} />
          <Skills skills={skills} editMode={editMode} />
          <FeaturedProjects projects={projects} signature={hero.signature} editMode={editMode} />
          <Experience items={experience} editMode={editMode} />
          <Blog posts={posts} editMode={editMode} />
          <Testimonials items={items} editMode={editMode} />
          <Contact contact={contact} social={social} editMode={editMode} />
          <Footer name={name} editMode={editMode} />
        </div>
      </main>
    </div>
  );
}
