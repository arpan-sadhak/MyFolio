import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus, Trash2, X, Camera } from "lucide-react";
import { uploadImage } from "../service/api";

export default function ProjectCard({
  project,
  onChange,
  onDelete,
  editMode = false,
}) {
  const [safeProject, setSafeproject] = useState({
    id: project?._id ?? "",
    title: project?.title ?? "",
    description: project?.description ?? "",
    image: project?.image ?? "",
    githubUrl: project?.githubUrl ?? "",
    liveUrl: project?.liveUrl ?? "",
    tags: Array.isArray(project?.tags) ? project.tags : [],
  });
  useEffect(() => {
    setSafeproject({
      id: project?.id ?? "",
      title: project?.title ?? "",
      description: project?.description ?? "",
      image: project?.image ?? "",
      githubUrl: project?.githubUrl ?? "",
      liveUrl: project?.liveUrl ?? "",
      tags: Array.isArray(project?.tags) ? project.tags : [],
    });

  }, [project]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      setUploading(true);
      const image = await uploadImage(file);
      console.log(safeProject);
      
      setSafeproject((prev) => ({
        ...prev,
        image,
      }));
      onChange("image", image);
      image && setUploading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const [tagInput, setTagInput] = useState("");

  const handleChange = (field, value) => {
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

    handleChange("tags", [...safeProject.tags, tag]);

    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove) => {
    handleChange(
      "tags",
      safeProject.tags.filter((tag) => tag !== tagToRemove),
    );
  };
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return editMode ? (
    <div className="rounded-2xl overflow-hidden border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 flex flex-col group">
      {/* =====================================================
          IMAGE
      ====================================================== */}
      {uploading ? (
        <div className="aspect-[4/3] bg-gradient-to-br from-brand-500/20 to-ink-800 relative overflow-hidden">
          <div className="flex flex-row gap-2 absolute inset-0 items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-green-200 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:.7s]"></div>
          </div>
        </div>
      ) : (
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
              <p className="text-xs text-white/30">{safeProject.title}</p>
            </div>
          )}

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Change profile image"
            className="absolute z-50 bottom-2 right-2 sm:bottom-3 sm:right-3 w-10 h-10 rounded-full bg-transparent hover:text-white text-black flex items-center justify-center shadow-lg border-2 hover:border-white border-ink-900 transition-all hover:scale-105"
          >
            <Camera size={18} />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      )}

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
          value={safeProject.liveUrl}
          onChange={(e) => handleChange("liveUrl", e.target.value)}
          placeholder="Live URL"
          className="mt-3 w-full px-3 py-2 rounded-lg bg-paper-100 dark:bg-white/5 border border-transparent focus:border-brand-500 outline-none text-xs text-ink-950 dark:text-white placeholder:text-ink-900/30 dark:placeholder:text-white/30"
        />

        {/* ===================================================
            PROJECT LINK
        ==================================================== */}

        <input
          type="url"
          value={safeProject.githubUrl}
          onChange={(e) => handleChange("githubUrl", e.target.value)}
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
          {/* {safeProject.githunUrl ? (
            <a
              href={safeProject.githunUrl}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-600 text-white hover:bg-brand-700 transition-colors"
              aria-label={`Preview ${safeProject.title}`}
            >
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span />
          )} */}

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
        <a href={project.githubUrl}>
        <h3 className="font-display font-bold text-ink-950 dark:text-white hover:text-green-600 dark:hover:text-green-600 ">
          {project.title}
          <span className="ml-2"><ArrowUpRight size={15} className="inline-block " /></span>
        </h3>
        </a>
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
            href={project.liveUrl}
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
