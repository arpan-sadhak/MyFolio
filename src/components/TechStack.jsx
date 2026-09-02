import { TechBadge } from './icons/TechIcons';
import { useSelector } from 'react-redux';

export default function TechStack() {
  const stack = useSelector(state => state.techStack.techStack)
  return (
    <section className="mt-10">
      <div className="rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6">
        <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-4">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <div key={tech.name} title={tech.name}>
              <TechBadge icon={tech.icon} name={tech.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
