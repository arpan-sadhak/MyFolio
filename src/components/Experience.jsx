import { useSelector } from 'react-redux';

export default function Experience() {
  const items = useSelector((state) => state.experience.experience);
  return (
    <section id="experience" className="mt-10 scroll-mt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Experience
      </p>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="relative pl-8 pb-4 border-l-2 border-paper-200 dark:border-white/10 last:border-transparent"
          >
            <span className="absolute -left-[7px] top-14 w-3 h-3 rounded-full bg-brand-500" />
            <div className="rounded-2xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-ink-950 dark:text-white">
                  {item.role}
                </h3>
                <span className="text-xs font-mono text-brand-600 dark:text-brand-400">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-medium text-ink-900/60 dark:text-paper-100/50 mb-2">
                {item.org}
              </p>
              <p className="text-sm text-ink-900/50 dark:text-paper-100/40 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
