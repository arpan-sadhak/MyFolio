import { Clock, Layers, Briefcase, ShieldCheck, ArrowUpRight } from 'lucide-react';

const ICONS = { clock: Clock, layers: Layers, briefcase: Briefcase, shield: ShieldCheck };

export default function AboutMe({ about, stats }) {
  return (
    <section
      id="about"
      className="mt-10 scroll-mt-24 rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6 sm:p-8"
    >
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-brand-600 dark:text-brand-400 uppercase mb-3">
            {about.heading}
          </p>
          <p className="text-ink-900/70 dark:text-paper-100/60 leading-relaxed">{about.body}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-ink-950 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            More About Me <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat) => {
            const Icon = ICONS[stat.icon] || Layers;
            return (
              <div
                key={stat.label}
                className="rounded-2xl bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/5 p-4 flex flex-col gap-2"
              >
                <Icon className="text-brand-600 dark:text-brand-400" size={20} />
                <p className="font-display font-extrabold text-xl text-ink-950 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-ink-900/50 dark:text-paper-100/40 leading-tight">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
