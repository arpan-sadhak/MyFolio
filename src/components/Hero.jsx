import { ArrowUpRight } from 'lucide-react';

export default function Hero({ profile }) {
  return (
    <section
      id="home"
      className="relative pt-10 lg:pt-4 pb-4 scroll-mt-20 overflow-hidden"
    >
      {/* ambient grid + glow backdrop, dark mode only */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block bg-grid bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="hidden lg:flex justify-end mb-4">
        <a
          href="#contact"
          className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full bg-ink-950 dark:bg-white text-white dark:text-ink-950 hover:bg-brand-600 dark:hover:bg-brand-500 dark:hover:text-white transition-colors"
        >
          Hire Me <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid lg:grid-cols-[0.8fr_auto] gap-10 items-center">
        <div className="lg:pl-20">
          <p className="font-mono text-xs tracking-[0.25em] text-brand-600 dark:text-brand-400 uppercase mb-3">
            {profile.greeting}
          </p>
          <h1 className="font-display font-extrabold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-ink-950 dark:text-white">
            {profile.firstName}
            <br />
            <span className="text-brand-600 dark:text-brand-400">{profile.lastName}</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-ink-900/80 dark:text-paper-100/90 max-w-lg">
            {profile.role}
          </p>
          <p className="mt-2 text-ink-900/50 dark:text-paper-100/50 max-w-md">
            {profile.tagline}
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-7 px-6 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-glow"
          >
            Let's Connect <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/20 blur-3xl scale-110 animate-pulse-slow" />
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full border-4 border-brand-500/30 p-2 animate-float">
            <div className="w-full h-full rounded-full overflow-hidden bg-ink-800 flex items-center justify-center">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : null}
              <span className="font-display text-6xl font-bold text-brand-500/40 absolute">
                {profile.firstName?.[0]}
              </span>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 sm:right-48 bg-brand-600 text-white rounded-2xl px-4 py-3 text-center shadow-glow">
            <p className="font-display font-extrabold text-lg leading-none">{profile.yearsLabel}</p>
            <p className="text-[10px] leading-tight mt-1 opacity-90 max-w-[70px]">
              {profile.yearsSub}
            </p>
          </div>

          <div className="absolute -bottom-0 left-[26%] -translate-x-1/2 flex items-center gap-1.5 bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-ink-900 dark:text-paper-100 whitespace-nowrap shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-slow" />
            {profile.availability}
          </div>
        </div>
      </div>
    </section>
  );
}
