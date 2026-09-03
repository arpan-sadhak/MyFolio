
import { Save } from "lucide-react";
import useFooterForm from "../hooks/useFooterForm";

export default function Footer({name, editMode = false}) {
  
  
  const {
    handleSave,
    handleChange,
    footerData,
  } = useFooterForm({name:name})

  return editMode ? (
    <footer className="pb-8 pt-2 text-center text-xs text-ink-900/40 dark:text-paper-100/30">
      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="flex items-center justify-center flex-wrap gap-1">
        <span>© {new Date().getFullYear()}</span>

        {/* NAME */}

        <input
          type="text"
          value={footerData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your name"
          className="w-auto min-w-[80px] max-w-[180px] bg-transparent border-none outline-none text-center text-xs text-ink-900/40 dark:text-paper-100/30 placeholder:text-ink-900/20 dark:placeholder:text-white/20"
        />

        <span>.</span>
      </div>

      {/* =====================================================
          BUILT WITH TEXT
      ====================================================== */}

      <input
        type="text"
        value={footerData.copyright}
        onChange={(e) => handleChange("copyright", e.target.value)}
        placeholder="Built with React & Tailwind CSS."
        className="mt-1 w-full bg-transparent border-none outline-none text-center text-xs text-ink-900/40 dark:text-paper-100/30 placeholder:text-ink-900/20 dark:placeholder:text-white/20"
      />

      {/* =====================================================
          SAVE BUTTON
      ====================================================== */}

      <div className="mt-4">
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold transition-colors"
        >
          <Save size={13} />
          Save Footer
        </button>
      </div>
    </footer>
  ) : (
    <footer className="pb-8 pt-2 text-center text-xs text-ink-900/40 dark:text-paper-100/30">
      © {new Date().getFullYear()} {name}. Built with React & Tailwind CSS.
    </footer>
  );
}
