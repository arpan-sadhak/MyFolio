import {
  Home,
  User,
  SlidersHorizontal,
  FolderKanban,
  Activity,
  PenSquare,
  Mail,
  Sun,
  Moon,
  Download,
  X,
} from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: SlidersHorizontal },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'experience', label: 'Experience', icon: Activity },
  { id: 'blog', label: 'Blog', icon: PenSquare },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ resumeUrl, mobileOpen, onCloseMobile }) {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onCloseMobile?.();
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-[260px] z-40 flex flex-col
          bg-white dark:bg-ink-950 border-r border-paper-200 dark:border-brand-500/10
          transition-transform duration-300 ease-out
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex items-center justify-between px-6 pt-7 pb-8">
          <a href="#home" onClick={handleNavClick('home')} className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center font-display font-bold text-white text-lg">
              A
            </span>
          </a>
          <button
            onClick={onCloseMobile}
            className="lg:hidden text-ink-900/60 dark:text-paper-100/70 hover:text-brand-600 dark:hover:text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={handleNavClick(id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-glow'
                      : 'text-ink-900/60 dark:text-paper-100/60 hover:text-ink-950 dark:hover:text-white hover:bg-paper-100 dark:hover:bg-white/5'
                  }`}
              >
                <Icon size={18} strokeWidth={2} />
                {label}
              </a>
            );
          })}
        </nav>

        <div className="px-4 pb-7 pt-4 space-y-3 border-t border-paper-200 dark:border-white/5">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 text-sm text-ink-900/80 dark:text-paper-100/80"
          >
            <span className="flex items-center gap-2">
              {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </span>
            <span
              className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                theme === 'dark' ? 'bg-brand-600 justify-end' : 'bg-ink-950/20 justify-start'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white block" />
            </span>
          </button>

          <a
            href={resumeUrl}
            download
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-paper-200 dark:border-white/10 text-sm font-medium text-ink-900/80 dark:text-paper-100/80 hover:border-brand-500/40 hover:text-brand-600 dark:hover:text-white transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </aside>
    </>
  );
}
