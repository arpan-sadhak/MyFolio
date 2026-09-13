

import { Plus, Trash2 } from "lucide-react";
import useExperienceForm from "../hooks/useExperienceForm";
import { useSelector } from 'react-redux';


const ExperienceSkeleton = ({ count = 3 }) => {
  return (
    <section id="experience" className="mt-10 scroll-mt-24">
      {/* Section title */}
      <div className="skeleton-shimmer h-3 w-24 rounded mb-5" />

      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="relative pl-8 pb-4 border-l-2 border-paper-200 dark:border-white/10 last:border-transparent"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[7px] top-14 w-3 h-3 rounded-full skeleton-shimmer" />

            <div className="rounded-2xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-5">
              {/* Role + Period */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="skeleton-shimmer h-5 w-40 rounded" />

                <div className="skeleton-shimmer h-3 w-24 rounded" />
              </div>

              {/* Organization */}
              <div className="skeleton-shimmer h-3 w-32 rounded mb-4" />

              {/* Description */}
              <div className="space-y-2">
                <div className="skeleton-shimmer h-3 w-full rounded" />
                <div className="skeleton-shimmer h-3 w-[90%] rounded" />
                <div className="skeleton-shimmer h-3 w-[75%] rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default function Experience({ editMode = false}) {
  const experience = useSelector((state) => state.data?.data?.experience);
const loading = useSelector((state) => state.data.loading);


   const {
    experienceItems,
    handleChange,
    handleDelete,
    handleAdd,
    handleSave,
  } = useExperienceForm({items:experience});

  if (loading) {
    return (<ExperienceSkeleton/>)
  }

  return editMode ? (
    <section id="experience" className="mt-10 scroll-mt-24">
      {/* =====================================================
          SECTION TITLE
      ====================================================== */}

      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Experience
      </p>

      {/* =====================================================
          EXPERIENCE LIST
      ====================================================== */}

      <div className="space-y-4">
        {experienceItems.map((item, i) => (
          <div
            key={item.id}
            className="relative pl-8 pb-4 border-l-2 border-paper-200 dark:border-white/10 last:border-transparent"
          >
            {/* =================================================
                TIMELINE DOT
            ================================================== */}

            <span className="absolute -left-[7px] top-14 w-3 h-3 rounded-full bg-brand-500" />

            {/* =================================================
                EXPERIENCE CARD
            ================================================== */}

            <div className="rounded-2xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-5">
              {/* =================================================
                  TOP ROW
              ================================================== */}

              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                {/* ROLE */}

                <input
                  type="text"
                  value={item.role}
                  onChange={(e) =>
                    handleChange(item.id, "role", e.target.value)
                  }
                  placeholder="Job title / Role"
                  className="flex-1 min-w-[180px] bg-transparent border-none outline-none font-display font-bold text-ink-950 dark:text-white placeholder:text-ink-900/30 dark:placeholder:text-white/30"
                />

                {/* PERIOD */}

                <input
                  type="text"
                  value={item.period}
                  onChange={(e) =>
                    handleChange(item.id, "period", e.target.value)
                  }
                  placeholder="2024 — Present"
                  className="w-auto min-w-[130px] bg-transparent border-none outline-none text-right text-xs font-mono text-brand-600 dark:text-brand-400 placeholder:text-brand-600/40 dark:placeholder:text-brand-400/40"
                />
              </div>

              {/* =================================================
                  ORGANIZATION
              ================================================== */}

              <input
                type="text"
                value={item.org}
                onChange={(e) => handleChange(item.id, "org", e.target.value)}
                placeholder="Company / Organization"
                className="w-full bg-transparent border-none outline-none text-sm font-medium text-ink-900/60 dark:text-paper-100/50 mb-2 placeholder:text-ink-900/30 dark:placeholder:text-white/30"
              />

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <textarea
                value={item.description}
                onChange={(e) =>
                  handleChange(item.id, "description", e.target.value)
                }
                placeholder="Describe your responsibilities, achievements, projects, etc."
                rows={3}
                className="w-full bg-transparent border-none outline-none resize-none text-sm text-ink-900/50 dark:text-paper-100/40 leading-relaxed placeholder:text-ink-900/30 dark:placeholder:text-white/30"
              />

              {/* =================================================
                  DELETE BUTTON
              ================================================== */}

              <div className="flex justify-end mt-3">
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  title="Delete experience"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-ink-900/40 dark:text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* =====================================================
            EMPTY STATE
        ====================================================== */}

        {experienceItems.length === 0 && (
          <div className="rounded-2xl border border-dashed border-paper-200 dark:border-white/10 p-8 text-center">
            <p className="text-sm text-ink-900/40 dark:text-paper-100/40">
              No experience added yet.
            </p>
          </div>
        )}

        {/* =====================================================
            ADD EXPERIENCE
        ====================================================== */}

        <div className="pl-8">
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900/60 dark:text-paper-100/50 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <span className="w-9 h-9 rounded-full border border-paper-200 dark:border-white/10 flex items-center justify-center hover:border-brand-500/50">
              <Plus size={16} />
            </span>
            Add Experience
          </button>
        </div>
      </div>

      {/* =====================================================
          SAVE BUTTON
      ====================================================== */}

      <div className="mt-6">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
        >
          Save Experience
          <span>✓</span>
        </button>
      </div>
    </section>
  ) : (
    <section id="experience" className="mt-10 scroll-mt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Experience
      </p>
      <div className="space-y-4">
        {experience?.map((item, i) => (
          <div
            key={item._id}
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
