import {
  Home,
  PenSquare,
  User,
  SlidersHorizontal,
  FolderKanban,
  Activity,
  Mail,
  Sun,
  Moon,
  Download,
  X,
} from "lucide-react";

import { useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: SlidersHorizontal },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Experience", icon: Activity },
  { id: 'blog', label: 'Blog', icon: PenSquare },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar({
  resumeUrl,
  onResumeChange,
  mobileOpen,
  onCloseMobile,
}) {
  const active = useActiveSection(
    NAV_ITEMS.map((n) => n.id)
  );

  const { theme, toggleTheme } = useTheme();

  /* =========================================================
     RESUME POPUP
  ========================================================= */

  const [showResumePopup, setShowResumePopup] =
    useState(false);

  const [resumeInput, setResumeInput] = useState(
    resumeUrl || ""
  );

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const handleNavClick = (id) => (e) => {
    e.preventDefault();

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    onCloseMobile?.();
  };

  /* =========================================================
     OPEN RESUME POPUP
  ========================================================= */

  const handleResumeClick = (e) => {
    e.preventDefault();

    /*
     * Pre-fill existing CV link.
     */
    setResumeInput(resumeUrl || "");

    setShowResumePopup(true);
  };

  /* =========================================================
     SAVE RESUME LINK
  ========================================================= */

  const handleSaveResume = () => {
    const url = resumeInput.trim();

    if (!url) return;

    /*
     * Send the new URL to the parent.
     */
    onResumeChange?.(url);

    setShowResumePopup(false);
  };

  return (
    <>
      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className={`fixed top-0 left-0 h-screen w-[260px] z-40 flex flex-col
          bg-white dark:bg-ink-950 border-r border-paper-200 dark:border-brand-500/10
          transition-transform duration-300 ease-out
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="flex items-center justify-between px-6 pt-7 pb-8">
          <a
            href="#home"
            onClick={handleNavClick("home")}
            className="flex items-center gap-2"
          >
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

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(
            ({ id, label, icon: Icon }) => {
              const isActive = active === id;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={handleNavClick(id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-brand-600 text-white shadow-glow"
                        : "text-ink-900/60 dark:text-paper-100/60 hover:text-ink-950 dark:hover:text-white hover:bg-paper-100 dark:hover:bg-white/5"
                    }`}
                >
                  <Icon size={18} strokeWidth={2} />
                  {label}
                </a>
              );
            }
          )}
        </nav>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div className="px-4 pb-7 pt-4 space-y-3 border-t border-paper-200 dark:border-white/5">

          {/* =================================================
              THEME
          ================================================= */}

          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-paper-100 dark:bg-white/5 text-sm text-ink-900/80 dark:text-paper-100/80"
          >
            <span className="flex items-center gap-2">
              {theme === "dark" ? (
                <Moon size={16} />
              ) : (
                <Sun size={16} />
              )}

              {theme === "dark"
                ? "Dark Mode"
                : "Light Mode"}
            </span>

            <span
              className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                theme === "dark"
                  ? "bg-brand-600 justify-end"
                  : "bg-ink-950/20 justify-start"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white block" />
            </span>
          </button>

          {/* =================================================
              DOWNLOAD CV
          ================================================= */}

          <button
            type="button"
            onClick={handleResumeClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-paper-200 dark:border-white/10 text-sm font-medium text-ink-900/80 dark:text-paper-100/80 hover:border-brand-500/40 hover:text-brand-600 dark:hover:text-white transition-colors"
          >
            <Download size={16} />
            Download CV
          </button>
        </div>
      </aside>

      {/* =====================================================
          CV LINK POPUP
      ===================================================== */}

      {showResumePopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowResumePopup(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/10 shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}

            <button
              type="button"
              onClick={() =>
                setShowResumePopup(false)
              }
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg text-ink-900/40 dark:text-paper-100/40 hover:bg-paper-100 dark:hover:bg-white/10 hover:text-ink-950 dark:hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            {/* Icon */}

            <div className="w-11 h-11 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
              <Download size={20} />
            </div>

            {/* Heading */}

            <h3 className="font-display font-bold text-lg text-ink-950 dark:text-white">
              CV Download Link
            </h3>

            <p className="mt-1.5 text-sm text-ink-900/50 dark:text-paper-100/50">
              Paste the link to your CV below.
            </p>

            {/* Input */}

            <div className="mt-5">
              <label className="block text-xs font-medium text-ink-900/60 dark:text-paper-100/60 mb-2">
                CV URL
              </label>

              <input
                type="url"
                value={resumeInput}
                onChange={(e) =>
                  setResumeInput(e.target.value)
                }
                placeholder="https://example.com/cv.pdf"
                autoFocus
                className="w-full px-3 py-2.5 rounded-xl border border-paper-200 dark:border-white/10 bg-paper-50 dark:bg-ink-950 text-sm text-ink-950 dark:text-white placeholder:text-ink-900/30 dark:placeholder:text-paper-100/30 outline-none focus:border-brand-500"
              />
            </div>

            {/* Buttons */}

            <div className="flex gap-2 mt-6">
              <button
                type="button"
                onClick={() =>
                  setShowResumePopup(false)
                }
                className="flex-1 px-4 py-2.5 rounded-xl border border-paper-200 dark:border-white/10 text-sm font-medium text-ink-900/70 dark:text-paper-100/70 hover:bg-paper-100 dark:hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSaveResume}
                disabled={!resumeInput.trim()}
                className="flex-1 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
              >
                Save Link
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

