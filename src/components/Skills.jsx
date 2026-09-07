import { Plus, Trash2 } from "lucide-react";
import useSkillsForm from "../hooks/useSkillsForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from "../service/api";
import { useEffect } from "react";

const SkillsSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
      {" "}
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {" "}
          <div className="flex items-center justify-between mb-1.5">
            {" "}
            <div className="skeleton-shimmer h-4 w-24 rounded" />{" "}
            <div className="skeleton-shimmer h-3 w-8 rounded" />{" "}
          </div>{" "}
          <div className="h-2 rounded-full bg-paper-100 dark:bg-white/5 overflow-hidden">
            {" "}
            <div className="skeleton-shimmer h-full w-full rounded-full" />{" "}
          </div>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default function Skills({ editMode = false }) {
  const skills = useSelector((state) => state?.skills);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const { skillItems, handleChange, handleAdd, handleDelete, handleSave } =
    useSkillsForm({ skills: skills?.data });

  if (skills?.loading) {
    return <SkillsSkeleton />;
  }

  return editMode ? (
    <section id="skills" className="mt-10 scroll-mt-24">
      {/* =====================================================
          TITLE
      ====================================================== */}

      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Skills
      </p>

      {/* =====================================================
          SKILLS
      ====================================================== */}

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
        {skillItems.map((skill) => (
          <div key={skill.id} className="relative pr-9">
            {/* =================================================
                NAME + LEVEL
            ================================================== */}

            <div className="flex items-center justify-between mb-1.5">
              {/* NAME */}

              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleChange(skill.id, "name", e.target.value)}
                placeholder="Skill name"
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-sm font-medium text-ink-950 dark:text-white placeholder:text-ink-900/30 dark:placeholder:text-white/30"
              />

              {/* LEVEL */}

              <div className="flex items-center shrink-0">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={skill.level}
                  onChange={(e) =>
                    handleChange(skill.id, "level", e.target.value)
                  }
                  className="w-12 bg-transparent border-none outline-none text-right text-xs font-mono text-ink-900/40 dark:text-paper-100/40"
                />

                <span className="text-xs font-mono text-ink-900/40 dark:text-paper-100/40">
                  %
                </span>
              </div>
            </div>

            {/* =================================================
                PROGRESS BAR
            ================================================== */}

            <div className="h-2 rounded-full bg-paper-100 dark:bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all duration-300"
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>

            {/* =================================================
                DELETE BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => handleDelete(skill.id)}
              title={`Delete ${skill.name || "skill"}`}
              aria-label={`Delete ${skill.name || "skill"}`}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center text-ink-900/40 dark:text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {skillItems.length === 0 && (
        <div className="rounded-2xl border border-dashed border-paper-200 dark:border-white/10 p-8 text-center">
          <p className="text-sm text-ink-900/40 dark:text-paper-100/40">
            No skills added yet.
          </p>
        </div>
      )}

      {/* =====================================================
          ACTIONS
      ====================================================== */}

      <div className="flex items-center gap-4 mt-6">
        {/* ADD */}

        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900/50 dark:text-paper-100/40 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
        >
          <span className="w-9 h-9 rounded-full border border-paper-200 dark:border-white/10 flex items-center justify-center hover:border-brand-500/50">
            <Plus size={16} />
          </span>
          Add Skill
        </button>

        {/* SAVE */}

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
        >
          Save Skills
          <span>✓</span>
        </button>
      </div>
    </section>
  ) : (
    <section id="skills" className="mt-10 scroll-mt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Skills
      </p>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
        {skills?.data?.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-ink-950 dark:text-white">
                {skill.name}
              </span>
              <span className="text-xs font-mono text-ink-900/40 dark:text-paper-100/40">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-paper-100 dark:bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
