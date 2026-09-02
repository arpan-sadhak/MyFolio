import { ArrowUpRight, TrendingUp } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { useSelector } from 'react-redux';

export default function FeaturedProjects({ signature }) {
  const projects = useSelector(state => state.projects.project)
  return (
    <section id="projects" className="mt-10 scroll-mt-24">
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase">
            Featured Projects
          </p>
        </div>
        <a
          href="#projects"
          className="text-sm font-medium text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:gap-1.5 transition-all"
        >
          View All Projects <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <div className="rounded-2xl bg-brand-600 text-white p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
          <TrendingUp className="absolute right-4 top-4 opacity-20" size={80} />
          <div>
            <p className="font-display font-bold text-lg leading-tight">
              Turning ideas into
              <br />
              <span className="text-ink-950/90">Digital Reality</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-white/80 mb-2">Let's build something amazing together!</p>
            <p className="signature-font text-2xl text-white">{signature}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
