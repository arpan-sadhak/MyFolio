import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Compass } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-ink-950 flex items-center justify-center px-6 transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-grid bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-500/20 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl animate-pulse-slow" />

      <div className="relative text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center font-display font-bold text-white text-2xl shadow-glow">
            A
          </span>
        </div>

        <p className="font-display font-extrabold text-[6rem] sm:text-[8rem] leading-none text-brand-600 dark:text-brand-400 select-none">
          404
        </p>

        <h1 className="font-display font-bold text-2xl sm:text-3xl text-ink-950 dark:text-white mt-2">
          This page hasn't shipped yet.
        </h1>
        <p className="mt-3 text-ink-900/50 dark:text-paper-100/45 leading-relaxed">
          The route you followed doesn't exist, or the page moved. Let's get
          you back to somewhere that actually renders.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-colors shadow-glow"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-paper-200 dark:border-white/10 text-ink-900 dark:text-paper-100 font-semibold text-sm hover:border-brand-500/40 transition-colors"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-ink-900/35 dark:text-paper-100/25 font-mono">
          <Compass size={14} />
          error code: page-not-found · theme: {theme}
        </div>
      </div>
    </div>
  );
}
