import ProjectCard from "./ProjectCard";
import { ArrowUpRight, TrendingUp, Plus, Trash2 } from "lucide-react";
import useFeatureProject from "../hooks/useFeaturedProject";

export default function FeaturedProjects({ projects, signature, editMode }) {
  const {
    projectItems,
    signatureValue,
    setSignatureValue,
    handleProjectChange,
    handleDeleteProject,
    handleAddProject,
    handleSave,
  } = useFeatureProject({projects:projects, signature:signature,});

  return editMode ? (
    <section id="projects" className="mt-10 scroll-mt-24">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase">
            Featured Projects
          </p>
        </div>

        <a
          href="#projects"
          className="text-sm font-medium text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:gap-1.5 transition-all"
        >
          View All Projects
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* =====================================================
          PROJECT GRID
      ====================================================== */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* ===================================================
            PROJECTS
        ==================================================== */}

        {projectItems.map((project) => (
          <div key={project.id} className="relative">
            {/* PROJECT CARD */}

            <ProjectCard
              project={project}
              editMode
              onChange={(field, value) =>
                handleProjectChange(project.id, field, value)
              }
            />

            {/* DELETE */}

            <button
              type="button"
              onClick={() => handleDeleteProject(project.id)}
              title="Delete project"
              className="absolute right-3 top-3 z-20 w-8 h-8 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-red-500/80 flex items-center justify-center transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}

        {/* ===================================================
            SIGNATURE CARD
        ==================================================== */}

        <div className="rounded-2xl bg-brand-600 text-white p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
          <TrendingUp className="absolute right-4 top-4 opacity-20" size={80} />

          {/* TITLE */}

          <div>
            <p className="font-display font-bold text-lg leading-tight">
              Turning ideas into
              <br />
              <span className="text-ink-950/90">Digital Reality</span>
            </p>
          </div>

          {/* SIGNATURE */}

          <div>
            <p className="text-sm text-white/80 mb-2">
              Let's build something amazing together!
            </p>

            <input
              type="text"
              value={signatureValue}
              onChange={(e) => setSignatureValue(e.target.value)}
              placeholder="Your signature"
              className="signature-font text-2xl text-white bg-transparent border-none outline-none w-full placeholder:text-white/40"
            />
          </div>
        </div>

        {/* ===================================================
            ADD PROJECT
        ==================================================== */}

        <button
          type="button"
          onClick={handleAddProject}
          className="rounded-2xl border-2 border-dashed border-paper-200 dark:border-white/10 min-h-[220px] flex flex-col items-center justify-center gap-2 text-ink-900/40 dark:text-paper-100/30 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/40 transition-colors"
        >
          <span className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
            <Plus size={18} />
          </span>

          <span className="text-sm font-semibold">Add Project</span>
        </button>
      </div>

      {/* =====================================================
          SAVE
      ====================================================== */}

      <div className="mt-6">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
        >
          Save Projects
          <span>✓</span>
        </button>
      </div>
    </section>
  ) : (
    <section id="projects" className="mt-10 scroll-mt-24">
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase">
            Featured Projects
          </p>
        </div>
        <a
          href="#projects"
          className="text-sm font-medium text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:gap-1.5 transition-all"
        >
          View All Projects <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        <div className="rounded-2xl bg-brand-600 text-white p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden">
          <TrendingUp className="absolute right-4 top-4 opacity-20" size={80} />
          <div>
            <p className="font-display font-bold text-lg leading-tight">
              Turning ideas into
              <br />
              <span className="text-ink-950/90">Digital Reality</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-white/80 mb-2">
              Let's build something amazing together!
            </p>
            <p className="signature-font text-2xl text-white">{signatureValue}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
