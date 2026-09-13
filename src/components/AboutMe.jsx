import { Layers, ArrowUpRight } from "lucide-react";

import IconPicker from "./icons/IconPicker";
import { Plus, Trash2 } from "lucide-react";
import { ICONS } from "./icons/IconPicker";
import useAboutForm from "../hooks/useAboutForm";
import { useSelector } from "react-redux";

const AboutSkeleton = () => {
  return (
    <section
      id="about"
      className="mt-10 scroll-mt-24 rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6 sm:p-8"
    >
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
        {/* Left side */}
        <div>
          {/* Heading */}
          <div className="skeleton-shimmer h-3 w-32 rounded mb-4" />

          {/* Body */}
          <div className="space-y-2">
            <div className="skeleton-shimmer h-3 w-full rounded" />
            <div className="skeleton-shimmer h-3 w-[95%] rounded" />
            <div className="skeleton-shimmer h-3 w-[85%] rounded" />
            <div className="skeleton-shimmer h-3 w-[70%] rounded" />
          </div>

          {/* Link */}
          <div className="skeleton-shimmer h-4 w-28 rounded mt-6" />
        </div>

        {/* Right side - Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/5 p-4 flex flex-col gap-2"
            >
              {/* Icon */}
              <div className="skeleton-shimmer h-5 w-5 rounded" />

              {/* Value */}
              <div className="skeleton-shimmer h-6 w-16 rounded mt-1" />

              {/* Label */}
              <div className="skeleton-shimmer h-3 w-20 rounded" />
              <div className="skeleton-shimmer h-3 w-14 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export function AboutMe({ editMode = false }) {

  const heading = useSelector((state) => state.data?.data?.heading);
  const body = useSelector((state) => state.data?.data?.body);
  const stats = useSelector((state) => state.data?.data?.stats);
  const loading = useSelector((state) => state.data.loading);
  

  let {
    formData,
    openIconPicker,
    setOpenIconPicker,
    handleAboutChange,
    handleStatChange,
    handleDeleteStat,
    handleAddStat,
    handleSubmit,
  } = useAboutForm({ about: {heading, body, stats}});

  if (loading) {
    
    return <AboutSkeleton />;
  }
  

  return editMode ? (
    <section
      id="about"
      className="mt-10 scroll-mt-24 rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6 sm:p-8"
    >
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <div>

            {/* Heading */}
            <input
              type="text"
              value={formData.heading}
              onChange={(e) => handleAboutChange("heading", e.target.value)}
              placeholder="Heading"
              className="w-full bg-transparent border-none outline-none font-mono text-xs tracking-[0.2em] text-brand-600 dark:text-brand-400 uppercase mb-3"
            />

            {/* Body */}

            <textarea
              value={formData.body}
              onChange={(e) => handleAboutChange("body", e.target.value)}
              placeholder="Write something about yourself..."
              rows={5}
              className="w-full bg-transparent border-none outline-none resize-none text-ink-900/70 dark:text-paper-100/60 leading-relaxed"
            />

            {/* Save */}

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-ink-950 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              Save Changes
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {formData.stats.map((stat, index) => {
              const Icon = ICONS[stat.icon] || Layers;

              return (
                <div
                  key={index}
                  className="relative rounded-2xl bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/5 p-4 flex flex-col gap-2"
                >
                  {/* =================================================
                      DELETE BUTTON
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() => handleDeleteStat(index)}
                    title="Delete stat"
                    className="absolute top-2 right-2 z-20 p-1.5 rounded-lg text-ink-900/30 dark:text-paper-100/30 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>

                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div className="relative w-fit">
                    <button
                      type="button"
                      title="Change icon"
                      onClick={() =>
                        setOpenIconPicker(
                          openIconPicker === index ? null : index,
                        )
                      }
                      className="rounded-lg p-1 -m-1 hover:bg-brand-500/10 transition-colors"
                    >
                      <Icon
                        size={20}
                        className="text-brand-600 dark:text-brand-400"
                      />
                    </button>

                    {openIconPicker === index && (
                      <IconPicker
                        value={stat.icon}
                        onChange={(value) =>
                          handleStatChange(index, "icon", value)
                        }
                        onClose={() => setOpenIconPicker(null)}
                      />
                    )}
                  </div>

                  {/* =================================================
                      VALUE
                  ================================================= */}

                  <input
                    type="text"
                    value={stat.value || ""}
                    onChange={(e) =>
                      handleStatChange(index, "value", e.target.value)
                    }
                    placeholder="Value"
                    className="w-full bg-transparent border-none outline-none font-display font-extrabold text-xl text-ink-950 dark:text-white pr-5"
                  />

                  {/* =================================================
                      LABEL
                  ================================================= */}

                  <input
                    type="text"
                    value={stat.label || ""}
                    onChange={(e) =>
                      handleStatChange(index, "label", e.target.value)
                    }
                    placeholder="Label"
                    className="w-full bg-transparent border-none outline-none text-xs text-ink-900/50 dark:text-paper-100/40 leading-tight"
                  />
                </div>
              );
            })}

            {/* =================================================
                ADD STAT
            ================================================= */}

            <button
              type="button"
              onClick={handleAddStat}
              className="min-h-[150px] rounded-2xl border border-dashed border-paper-300 dark:border-white/10 bg-transparent flex flex-col items-center justify-center gap-2 text-ink-900/40 dark:text-paper-100/40 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-400 dark:hover:border-brand-400 transition-colors"
            >
              <Plus size={24} />

              <span className="text-xs font-medium">Add Stat</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  ) : (
    <section
      id="about"
      className="mt-10 scroll-mt-24 rounded-3xl border border-paper-200 dark:border-white/5 bg-paper-50 dark:bg-ink-900/60 p-6 sm:p-8"
    >
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-brand-600 dark:text-brand-400 uppercase mb-3">
            {heading}
          </p>
          <p className="text-ink-900/70 dark:text-paper-100/60 leading-relaxed">
            {body}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-ink-950 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            More About Me <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats?.map((stat) => {
            const Icon = ICONS[stat?.icon] || Layers;
            return (
              <div
                key={stat?.label}
                className="rounded-2xl bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/5 p-4 flex flex-col gap-2"
              >
                <Icon
                  className="text-brand-600 dark:text-brand-400"
                  size={20}
                />
                <p className="font-display font-extrabold text-xl text-ink-950 dark:text-white">
                  {stat?.value}
                </p>
                <p className="text-xs text-ink-900/50 dark:text-paper-100/40 leading-tight">
                  {stat?.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
