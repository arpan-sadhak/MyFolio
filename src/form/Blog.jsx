import {
  ArrowUpRight,
  Plus,
  Trash2,
} from "lucide-react";
import useBlogForm from "../hooks/useBlogForm";

export default function Blog() {
    const {
        blogPosts,
        handleChange,
        handleDelete,
        handleAdd,
        handleSave,
    } = useBlogForm()

  return (
    <section
      id="blog"
      className="mt-10 scroll-mt-24"
    >
      {/* =====================================================
          SECTION TITLE
      ====================================================== */}

      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Blog
      </p>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}

      <div className="grid sm:grid-cols-2 gap-4">

        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-5 flex flex-col justify-between"
          >

            {/* =================================================
                CONTENT
            ================================================== */}

            <div>

              {/* TITLE */}

              <input
                type="text"
                value={post.title}
                onChange={(e) =>
                  handleChange(
                    post.id,
                    "title",
                    e.target.value
                  )
                }
                placeholder="Blog post title"
                className="w-full bg-transparent border-none outline-none font-display font-bold text-ink-950 dark:text-white mb-2 placeholder:text-ink-900/30 dark:placeholder:text-white/30"
              />

              {/* EXCERPT */}

              <textarea
                value={post.excerpt}
                onChange={(e) =>
                  handleChange(
                    post.id,
                    "excerpt",
                    e.target.value
                  )
                }
                placeholder="Write a short description of the post..."
                rows={3}
                className="w-full bg-transparent border-none outline-none resize-none text-sm text-ink-900/50 dark:text-paper-100/40 leading-relaxed placeholder:text-ink-900/30 dark:placeholder:text-white/30"
              />

            </div>

            {/* =================================================
                BOTTOM
            ================================================== */}

            <div className="mt-4">

              <div className="flex items-center gap-3">

                {/* DATE */}

                <input
                  type="text"
                  value={post.date}
                  onChange={(e) =>
                    handleChange(
                      post.id,
                      "date",
                      e.target.value
                    )
                  }
                  placeholder="Aug 31, 2026"
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-xs font-mono text-ink-900/40 dark:text-paper-100/30 placeholder:text-ink-900/30 dark:placeholder:text-white/20"
                />

                {/* URL */}

                <input
                  type="url"
                  value={post.url}
                  onChange={(e) =>
                    handleChange(
                      post.id,
                      "url",
                      e.target.value
                    )
                  }
                  placeholder="Post URL"
                  className="flex-1 min-w-0 bg-transparent border-b border-transparent focus:border-brand-500 outline-none text-xs text-ink-900/50 dark:text-paper-100/40 placeholder:text-ink-900/30 dark:placeholder:text-white/20"
                />

              </div>

              {/* =================================================
                  ACTIONS
              ================================================== */}

              <div className="flex items-center justify-between mt-3">

                {/* OPEN POST */}

                <a
                  href={
                    post.url || "#"
                  }
                  target={
                    post.url
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    post.url
                      ? "noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:opacity-80 transition-opacity"
                >
                  View Post
                  <ArrowUpRight size={14} />
                </a>

                {/* DELETE */}

                <button
                  type="button"
                  onClick={() =>
                    handleDelete(
                      post.id
                    )
                  }
                  title="Delete post"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs text-ink-900/40 dark:text-white/40 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 size={14} />
                  Delete
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* =====================================================
          EMPTY STATE
      ====================================================== */}

      {blogPosts.length === 0 && (
        <div className="rounded-2xl border border-dashed border-paper-200 dark:border-white/10 p-8 text-center">
          <p className="text-sm text-ink-900/40 dark:text-paper-100/40">
            No blog posts added yet.
          </p>
        </div>
      )}

      {/* =====================================================
          ADD BLOG POST
      ====================================================== */}

      <button
        type="button"
        onClick={handleAdd}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-900/60 dark:text-paper-100/50 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
      >
        <span className="w-9 h-9 rounded-full border border-paper-200 dark:border-white/10 flex items-center justify-center hover:border-brand-500/50">
          <Plus size={16} />
        </span>

        Add Blog Post
      </button>

      {/* =====================================================
          SAVE
      ====================================================== */}

      <div className="mt-6">

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
        >
          Save Blog
          <span>✓</span>
        </button>

      </div>
    </section>
  );
}