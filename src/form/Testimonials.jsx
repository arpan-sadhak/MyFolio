import { Quote, ArrowLeft, ArrowRight, Star, Plus, Trash2 } from "lucide-react";
import useTestimonialsForm from "../hooks/useTestimonialsForm";

export default function Testimonials() {
  const {
    index,
    testimonialItems,
    current,
    handleChange,
    next,
    prev,
    handleAdd,
    handleDelete,
    handleSave,
  } = useTestimonialsForm();

  if (testimonialItems.length === 0) {
    return (
      <section className="mt-10 mb-6">
        <div className="rounded-3xl border border-dashed border-paper-200 dark:border-white/10 bg-ink-950 text-white p-8 text-center">
          <Quote className="text-brand-500 mx-auto mb-3" size={28} />

          <p className="text-sm text-paper-100/50">
            No testimonials added yet.
          </p>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
          >
            <Plus size={16} />
            Add Testimonial
          </button>
        </div>
      </section>
    );
  }


  return (
    <section className="mt-10 mb-6">
      <div className="rounded-3xl border border-paper-200 dark:border-white/5 bg-ink-950 dark:bg-ink-950 text-white p-6 sm:p-8">
        <div className="flex items-start gap-4">
          {/* =================================================
              QUOTE ICON
          ================================================== */}

          <Quote className="text-brand-500 shrink-0" size={28} />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="flex-1 min-w-0">
            {/* =================================================
                QUOTE
            ================================================== */}

            <textarea
              value={current.quote}
              onChange={(e) =>
                handleChange(current.id, "quote", e.target.value)
              }
              placeholder="Write testimonial..."
              rows={4}
              className="w-full bg-transparent border-none outline-none resize-none text-paper-100/90 leading-relaxed placeholder:text-white/30"
            />

            {/* =================================================
                BOTTOM
            ================================================== */}

            <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
              {/* =================================================
                  PERSON
              ================================================== */}

              <div className="flex items-center gap-3">
                {/* AVATAR */}

                <div className="w-11 h-11 rounded-full overflow-hidden bg-brand-600 flex items-center justify-center font-display font-bold shrink-0">
                  {current.avatar ? (
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    current.name?.[0]?.toUpperCase() || "?"
                  )}
                </div>

                {/* PERSON INFO */}

                <div>
                  {/* NAME */}

                  <input
                    type="text"
                    value={current.name}
                    onChange={(e) =>
                      handleChange(current.id, "name", e.target.value)
                    }
                    placeholder="Person name"
                    className="block w-full bg-transparent border-none outline-none font-semibold text-sm text-white placeholder:text-white/30"
                  />

                  {/* TITLE */}

                  <input
                    type="text"
                    value={current.title}
                    onChange={(e) =>
                      handleChange(current.id, "title", e.target.value)
                    }
                    placeholder="Title / Company"
                    className="block w-full bg-transparent border-none outline-none text-xs text-paper-100/50 placeholder:text-white/30"
                  />

                  {/* =================================================
                      RATING
                  ================================================== */}

                  <div className="flex gap-0.5 mt-1">
                    {Array.from({
                      length: 5,
                    }).map((_, starIndex) => {
                      const active = starIndex < current.rating;

                      return (
                        <button
                          key={starIndex}
                          type="button"
                          onClick={() =>
                            handleChange(current.id, "rating", starIndex + 1)
                          }
                          title={`Rate ${starIndex + 1}`}
                          className="hover:scale-110 transition-transform"
                        >
                          <Star
                            size={12}
                            className={
                              active
                                ? "fill-brand-500 text-brand-500"
                                : "text-white/20"
                            }
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* =================================================
                  NAVIGATION + DELETE
              ================================================== */}

              <div className="flex items-center gap-2">
                {/* DELETE */}

                <button
                  type="button"
                  onClick={() => handleDelete(current.id)}
                  title="Delete testimonial"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 size={14} />
                </button>

                {/* PREVIOUS */}

                <button
                  type="button"
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={15} />
                </button>

                {/* NEXT */}

                <button
                  type="button"
                  onClick={next}
                  className="w-9 h-9 rounded-full bg-brand-600 flex items-center justify-center hover:bg-brand-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* =================================================
                AVATAR URL
            ================================================== */}

            <input
              type="url"
              value={current.avatar}
              onChange={(e) =>
                handleChange(current.id, "avatar", e.target.value)
              }
              placeholder="Avatar image URL"
              className="mt-4 w-full bg-white/5 rounded-xl px-3 py-2 border border-transparent focus:border-white/20 outline-none text-xs text-white placeholder:text-white/30"
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTROLS
      ====================================================== */}

      <div className="flex items-center justify-between mt-4">
        {/* POSITION */}

        <p className="text-xs text-ink-900/40 dark:text-paper-100/30 font-mono">
          {index + 1} / {testimonialItems.length}
        </p>

        <div className="flex items-center gap-3">
          {/* ADD */}

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900/50 dark:text-paper-100/40 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <span className="w-8 h-8 rounded-full border border-paper-200 dark:border-white/10 flex items-center justify-center">
              <Plus size={15} />
            </span>
            Add Testimonial
          </button>

          {/* SAVE */}

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold transition-colors"
          >
            Save
            <span>✓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
