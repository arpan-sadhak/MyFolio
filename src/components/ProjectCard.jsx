import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 flex flex-col group">
      <div className="aspect-[4/3] bg-gradient-to-br from-brand-500/20 to-ink-800 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : null}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-ink-950 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-ink-900/50 dark:text-paper-100/45 flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-paper-100 dark:bg-white/5 text-ink-900/60 dark:text-paper-100/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
