import { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  X,
  Search,
  Upload,
  Image as ImageIcon,
  Check,
} from "lucide-react";
import { TechBadge, TechIcon } from "./icons/TechIcons";
import useTechStackForm from "../hooks/useTechStackForm";
import { useSelector } from 'react-redux';


const TECH_OPTIONS = [
  // Frontend
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "vue", label: "Vue" },
  { value: "nuxt", label: "Nuxt" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "bootstrap", label: "Bootstrap" },

  // Backend
  { value: "nodejs", label: "Node.js" },
  { value: "express", label: "Express" },
  { value: "nestjs", label: "NestJS" },
  { value: "django", label: "Django" },
  { value: "flask", label: "Flask" },
  { value: "laravel", label: "Laravel" },
  { value: "spring", label: "Spring" },
  { value: "dotnet", label: ".NET" },

  // Languages
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },

  // Database
  { value: "mongodb", label: "MongoDB" },
  { value: "mysql", label: "MySQL" },
  { value: "postgresql", label: "PostgreSQL" },
  { value: "sqlite", label: "SQLite" },
  { value: "redis", label: "Redis" },
  { value: "firebase", label: "Firebase" },
  { value: "supabase", label: "Supabase" },

  // Cloud
  { value: "aws", label: "AWS" },
  { value: "azure", label: "Azure" },
  { value: "googlecloud", label: "Google Cloud" },

  // DevOps
  { value: "docker", label: "Docker" },
  { value: "kubernetes", label: "Kubernetes" },
  { value: "nginx", label: "Nginx" },

  // Version Control
  { value: "git", label: "Git" },
  { value: "github", label: "GitHub" },
  { value: "gitlab", label: "GitLab" },
  { value: "bitbucket", label: "Bitbucket" },

  // Tools
  { value: "figma", label: "Figma" },
  { value: "vscode", label: "VS Code" },
  { value: "postman", label: "Postman" },
  { value: "vite", label: "Vite" },
];

function TechPicker({ selectedIcon, onSelectDevicon, onCustom, onClose }) {
  const [search, setSearch] = useState("");

  const filteredOptions = TECH_OPTIONS.filter((tech) =>
    tech.label.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="absolute left-0 top-full mt-2 z-[100] w-80 rounded-2xl border border-paper-200 dark:border-white/10 bg-white dark:bg-ink-950 shadow-2xl p-3"
      onClick={(e) => e.stopPropagation()}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-ink-950 dark:text-white">
          Choose Technology
        </p>

        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-md text-ink-900/40 dark:text-white/40 hover:text-ink-950 dark:hover:text-white hover:bg-paper-100 dark:hover:bg-white/10"
        >
          <X size={16} />
        </button>
      </div>

      {/* =====================================================
          SEARCH
      ====================================================== */}

      <div className="relative mb-3">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-900/40 dark:text-white/40"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search technology..."
          className="w-full rounded-lg bg-paper-100 dark:bg-white/5 border border-paper-200 dark:border-white/10 py-2 pl-9 pr-3 text-xs text-ink-950 dark:text-white placeholder:text-ink-900/30 outline-none focus:border-brand-500"
          autoFocus
        />
      </div>

      {/* =====================================================
          DEVICON OPTIONS
      ====================================================== */}

      <div className="grid grid-cols-4 gap-2 max-h-60 overflow-y-auto">
        {filteredOptions.map((tech) => (
          <button
            key={tech.value}
            type="button"
            onClick={() => onSelectDevicon(tech.value, tech.label)}
            title={tech.label}
            className={`group flex flex-col items-center justify-center gap-2 rounded-xl p-3 transition-colors ${
              selectedIcon === tech.value
                ? "bg-brand-500/10 ring-1 ring-brand-500"
                : "hover:bg-paper-100 dark:hover:bg-white/10"
            }`}
          >
            <span className="w-9 h-9 flex items-center justify-center">
              <TechIcon
                icon={tech.value}
                type="devicon"
                size={30}
                name={tech.label}
              />
            </span>

            <span className="text-[9px] leading-tight text-center text-ink-900/60 dark:text-paper-100/60">
              {tech.label}
            </span>
          </button>
        ))}
      </div>

      {/* =====================================================
          CUSTOM TECHNOLOGY
      ====================================================== */}

      <div className="border-t border-paper-200 dark:border-white/10 mt-3 pt-3">
        <p className="text-[11px] font-medium text-ink-900/40 dark:text-white/40 mb-2">
          Custom Technology
        </p>

        <button
          type="button"
          onClick={onCustom}
          className="w-full flex items-center justify-center gap-2 rounded-lg border border-dashed border-paper-200 dark:border-white/10 py-3 text-xs text-ink-900/50 dark:text-white/50 hover:border-brand-500 hover:text-brand-500 transition-colors"
        >
          <Plus size={15} />
          Create Custom Technology
        </button>
      </div>
    </div>
  );
}

function CustomTechnologyEditor({
  item,
  onNameChange,
  onImageChange,
  onCancel,
  onDone,
}) {
  return (
    <div className="absolute left-0 top-full mt-2 z-[110] w-80 rounded-2xl border border-paper-200 dark:border-white/10 bg-white dark:bg-ink-950 shadow-2xl p-4">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-ink-950 dark:text-white">
          Custom Technology
        </p>

        <button
          type="button"
          onClick={onCancel}
          className="p-1 rounded-md text-ink-900/40 dark:text-white/40 hover:text-ink-950 dark:hover:text-white hover:bg-paper-100 dark:hover:bg-white/10"
        >
          <X size={16} />
        </button>
      </div>

      {/* =====================================================
          NAME
      ====================================================== */}

      <div className="mb-4">
        <label className="block text-xs font-medium text-ink-900/60 dark:text-white/60 mb-1.5">
          Technology Name
        </label>

        <input
          type="text"
          value={item.name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="e.g. OpenAI"
          className="w-full px-3 py-2.5 rounded-xl bg-paper-100 dark:bg-white/5 border border-paper-200 dark:border-white/10 text-sm text-ink-950 dark:text-white placeholder:text-ink-900/30 outline-none focus:border-brand-500"
        />
      </div>

      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="mb-4">
        <label className="block text-xs font-medium text-ink-900/60 dark:text-white/60 mb-1.5">
          Technology Image
        </label>

        <div className="flex items-center gap-3">
          {/* PREVIEW */}

          <div className="w-14 h-14 shrink-0 rounded-xl bg-paper-100 dark:bg-white/5 border border-paper-200 dark:border-white/10 flex items-center justify-center overflow-hidden">
            {item.icon ? (
              <img
                src={item.icon}
                alt={item.name || "Technology"}
                className="w-9 h-9 object-contain"
              />
            ) : (
              <ImageIcon
                size={22}
                className="text-ink-900/30 dark:text-white/30"
              />
            )}
          </div>

          {/* UPLOAD */}

          <label className="flex-1">
            <div className="w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-paper-200 dark:border-white/10 py-3 px-2 text-xs text-ink-900/50 dark:text-white/50 hover:border-brand-500 hover:text-brand-500 transition-colors cursor-pointer">
              <Upload size={15} />

              {item.icon ? "Change Image" : "Choose Image"}
            </div>

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  onImageChange(file);
                }
              }}
            />
          </label>
        </div>

        <p className="text-[10px] text-ink-900/30 dark:text-white/25 mt-2">
          PNG, JPG, WEBP or SVG
        </p>
      </div>

      {/* =====================================================
          ACTIONS
      ====================================================== */}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-3 py-2.5 rounded-xl border border-paper-200 dark:border-white/10 text-xs font-semibold text-ink-900/60 dark:text-white/60 hover:bg-paper-100 dark:hover:bg-white/5 transition-colors"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onDone}
          disabled={!item.name.trim() || !item.icon}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold transition-colors"
        >
          <Check size={14} />
          Done
        </button>
      </div>
    </div>
  );
}

function Skeleton(){
  return (<section className="mt-10"> <div className="rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6"> <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-4"> Tech Stack </p> <div className="flex flex-wrap gap-3"> {Array.from({ length: 8 }).map((_, index) => ( <div key={index} className="skeleton-shimmer h-10 w-24 rounded-xl" /> ))} </div> </div> </section>)
}

export default function TechStack({  editMode = false }) {
  const stack = useSelector((state) => state?.techStack);
    const loading = useSelector((state)=>state?.loading);
  
  

  const {
    handleSave,
    handleDelete,
    handleAdd,
    finishCustom,
    updateCustomImage,
    updateCustomName,
    createCustom,
    selectDevicon,
    openPicker,
    techItems,
    customEditor,
  } = useTechStackForm({ stack: stack});

  if(loading || !techItems[0]){
    return  (<Skeleton/>)
  }

  return editMode ? (
    <section className="mt-10">
      <div className="rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6">
        {/* =================================================
            TITLE
        ================================================== */}

        <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-4">
          Tech Stack
        </p>

        {/* =================================================
            STACK
        ================================================== */}

        <div className="flex flex-wrap gap-3">
          {techItems.map((tech) => (
            <div key={tech.id} className="relative">
              {/* BADGE */}

              <button
                type="button"
                onClick={() => {
                  setCustomEditor(null);

                  setOpenPicker(openPicker === tech.id ? null : tech.id);
                }}
                className="cursor-pointer"
              >
                <TechBadge icon={tech.icon} name={tech.name} type={tech.type} />
              </button>

              {/* DELETE */}

              <button
                type="button"
                onClick={() => handleDelete(tech.id)}
                title="Delete technology"
                className="absolute -right-2 -top-2 z-30 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-sm"
              >
                <Trash2 size={10} />
              </button>

              {/* DEVICON PICKER */}

              {openPicker === tech.id && (
                <TechPicker
                  selectedIcon={tech.icon}
                  onSelectDevicon={(icon, name) =>
                    selectDevicon(tech.id, icon, name)
                  }
                  onCustom={() => createCustom(tech.id)}
                  onClose={() => setOpenPicker(null)}
                />
              )}

              {/* CUSTOM EDITOR */}

              {customEditor?.id === tech.id && (
                <CustomTechnologyEditor
                  item={customEditor}
                  onNameChange={updateCustomName}
                  onImageChange={updateCustomImage}
                  onCancel={() => setCustomEditor(null)}
                  onDone={finishCustom}
                />
              )}
            </div>
          ))}
        </div>

        {/* =================================================
            EMPTY
        ================================================== */}

        {techItems.length === 0 && (
          <div className="py-8 text-center">
            <ImageIcon
              size={28}
              className="mx-auto mb-3 text-ink-900/20 dark:text-white/20"
            />

            <p className="text-sm text-ink-900/40 dark:text-paper-100/40">
              No technologies added yet.
            </p>
          </div>
        )}

        {/* =================================================
            ACTIONS
        ================================================== */}

        <div className="flex items-center gap-4 mt-6">
          {/* ADD */}

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900/50 dark:text-paper-100/40 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <span className="w-9 h-9 rounded-full border border-paper-200 dark:border-white/10 flex items-center justify-center hover:border-brand-500/50 transition-colors">
              <Plus size={16} />
            </span>
            Add Technology
          </button>

          {/* SAVE */}

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
          >
            Save Tech Stack
            <Check size={15} />
          </button>
        </div>
      </div>
    </section>
  ) : (
    <section className="mt-10">
      <div className="rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6">
        <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-4">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-3">
          {stack?.data?.map((tech) => (
            <div key={tech.name} title={tech.name}>
              <TechBadge icon={tech.icon} name={tech.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
