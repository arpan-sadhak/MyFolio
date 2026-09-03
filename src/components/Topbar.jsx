import { Menu, ArrowUpRight } from 'lucide-react';

export default function Topbar({ onOpenMenu }) {
  return (
    <div className="lg:hidden sticky top-0 z-20 flex items-center justify-between px-5 py-4 bg-white/90 dark:bg-ink-950/90 backdrop-blur border-b border-paper-200 dark:border-white/5">
      <button
        onClick={onOpenMenu}
        className="text-ink-900 dark:text-white"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>
      <span className="font-display font-bold text-ink-950 dark:text-white">
        Arpan<span className="text-brand-600">.</span>
      </span>
      <a
        href="#contact"
        className="flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-full bg-brand-600 text-white"
      >
        Hire Me <ArrowUpRight size={14} />
      </a>
    </div>
  );
}