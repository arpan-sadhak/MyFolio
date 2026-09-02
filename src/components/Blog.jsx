import { ArrowUpRight } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Blog() {
  const posts = useSelector(state => state.blog.blog)
  return (
    <section id="blog" className="mt-10 scroll-mt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Blog
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl border border-paper-200 dark:border-white/5 bg-white dark:bg-ink-900 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-ink-950 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-ink-900/50 dark:text-paper-100/40 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs font-mono text-ink-900/40 dark:text-paper-100/30">
                {post.date}
              </span>
              <ArrowUpRight size={16} className="text-brand-600 dark:text-brand-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
