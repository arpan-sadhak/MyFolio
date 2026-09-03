import { useState } from "react";
import {
  ArrowUpRight,
  Plus,
  Trash2,
  X,
} from "lucide-react";

export default function ProjectCard({
  project,
  onChange,
  onDelete,
  editMode = false }) {

    const safeProject = {
    id: project?.id ?? "",
    title: project?.title ?? "",
    description: project?.description ?? "",
    image: project?.image ?? "",
    link: project?.link ?? "",
    tags: Array.isArray(project?.tags)
      ? project.tags
      : [],
  };


  const [tagInput, setTagInput] =
    useState("");

  const handleChange = (
    field,
    value
  ) => {
    if (!onChange) return;

    onChange(field, value);
  };

  const handleAddTag = () => {
    const tag = tagInput.trim();

    if (!tag) return;

    /*
      Prevent duplicate tags.
    */

    if (safeProject.tags.includes(tag)) {
      setTagInput("");
      return;
    }

    handleChange("tags", [
      ...safeProject.tags,
      tag,
    ]);

    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    handleChange(
      "tags",
      safeProject.tags.filter(
        (tag) => tag !== tagToRemove
      )
    );
  };
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  // if (!editable) {
  //   return (
  //     <div className="rounded-2xl overflow-hidden border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 flex flex-col group">

  //       {/* IMAGE */}

  //       <div className="aspect-[4/3] bg-gradient-to-br from-brand-500/20 to-ink-800 relative overflow-hidden">

  //         {safeProject.image ? (
  //           <img
  //             src={safeProject.image}
  //             alt={safeProject.title}
  //             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  //             onError={(e) => {
  //               e.currentTarget.style.display =
  //                 "none";
  //             }}
  //           />
  //         ) : null}

  //       </div>

  //       {/* CONTENT */}

  //       <div className="p-5 flex flex-col flex-1">

  //         <h3 className="font-display font-bold text-ink-950 dark:text-white">
  //           {safeProject.title}
  //         </h3>

  //         <p className="mt-2 text-sm text-ink-900/50 dark:text-paper-100/45 flex-1">
  //           {safeProject.description}
  //         </p>

  //         {/* BOTTOM */}

  //         <div className="mt-4 flex items-center justify-between gap-3">

  //           {/* TAGS */}

  //           <div className="flex flex-wrap gap-1.5">

  //             {safeProject.tags.map(
  //               (tag) => (
  //                 <span
  //                   key={tag}
  //                   className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-paper-100 dark:bg-white/5 text-ink-900/60 dark:text-paper-100/60"
  //                 >
  //                   {tag}
  //                 </span>
  //               )
  //             )}

  //           </div>

  //           {/* LINK */}

  //           {safeProject.link && (
  //             <a
  //               href={safeProject.link}
  //               target="_blank"
  //               rel="noreferrer"
  //               className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-brand-600 text-white hover:bg-brand-700 transition-colors"
  //               aria-label={`View ${safeProject.title}`}
  //             >
  //               <ArrowUpRight size={15} />
  //             </a>
  //           )}

  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return editMode ? (
    <div className="rounded-2xl overflow-hidden border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 flex flex-col group">
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="aspect-[4/3] bg-gradient-to-br from-brand-500/20 to-ink-800 relative overflow-hidden">
        {safeProject.image ? (
          <img
            src={safeProject.image}
            alt={safeProject.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xs text-white/30">Project image preview</p>
          </div>
        )}
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="p-5 flex flex-col flex-1">
        {/* ===================================================
            TITLE
        ==================================================== */}

        <input
          type="text"
          value={safeProject.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Project title"
          className="w-full bg-transparent border-none outline-none font-display font-bold text-ink-950 dark:text-white placeholder:text-ink-900/30 dark:placeholder:text-white/30"
        />

        {/* ===================================================
            DESCRIPTION
        ==================================================== */}

        <textarea
          value={safeProject.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Project description"
          rows={4}
          className="mt-2 w-full bg-transparent border-none outline-none resize-none text-sm text-ink-900/50 dark:text-paper-100/45 placeholder:text-ink-900/30 dark:placeholder:text-white/30 flex-1"
        />

        {/* ===================================================
            IMAGE URL
        ==================================================== */}

        <input
          type="url"
          value={safeProject.image}
          onChange={(e) => handleChange("image", e.target.value)}
          placeholder="Project image URL"
          className="mt-3 w-full px-3 py-2 rounded-lg bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-xs text-ink-950 dark:text-white placeholder:text-ink-900/30 dark:placeholder:text-white/30"
        />

        {/* ===================================================
            PROJECT LINK
        ==================================================== */}

        <input
          type="url"
          value={safeProject.link}
          onChange={(e) => handleChange("link", e.target.value)}
          placeholder="Project URL"
          className="mt-2 w-full px-3 py-2 rounded-lg bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-xs text-ink-950 dark:text-white placeholder:text-ink-900/30 dark:placeholder:text-white/30"
        />

        {/* ===================================================
            TAGS
        ==================================================== */}

        <div className="mt-4">
          <p className="text-[11px] font-medium text-ink-900/40 dark:text-paper-100/30 mb-2">
            Technologies / Tags
          </p>

          {/* CURRENT TAGS */}

          <div className="flex flex-wrap gap-1.5">
            {safeProject.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-paper-100 dark:bg-white/5 text-ink-900/60 dark:text-paper-100/60"
              >
                {tag}

                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="hover:text-red-500 transition-colors"
                  title={`Remove ${tag}`}
                >
                  <X size={11} />
                </button>
              </span>
            ))}
          </div>

          {/* ADD TAG */}

          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              placeholder="Add tag..."
              className="flex-1 min-w-0 px-3 py-1.5 rounded-lg bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-xs text-ink-950 dark:text-white placeholder:text-ink-900/30 dark:placeholder:text-white/30"
            />

            <button
              type="button"
              onClick={handleAddTag}
              className="w-8 h-8 shrink-0 rounded-lg bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center transition-colors"
              title="Add tag"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        {/* ===================================================
            ACTIONS
        ==================================================== */}

        <div className="mt-4 flex items-center justify-between">
          {/* PREVIEW */}

          {safeProject.link ? (
            <a
              href={safeProject.link}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-600 text-white hover:bg-brand-700 transition-colors"
              aria-label={`Preview ${safeProject.title}`}
            >
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span />
          )}

          {/* DELETE */}

          {onDelete && (
            <button
              type="button"
              onClick={() => onDelete(safeProject.id)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-ink-900/40 dark:text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-colors"
            >
              <Trash2 size={14} />
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="rounded-2xl overflow-hidden border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 flex flex-col group">
      <div className="aspect-[4/3] bg-gradient-to-br from-brand-500/20 to-ink-800 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-ink-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-ink-900/50 dark:text-paper-100/45 flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-paper-100 dark:bg-white/5 text-ink-900/60 dark:text-paper-100/60"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
