import { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Testimonials() {
  const items = useSelector((state) => state.testimonial.testimonials);

  const [index, setIndex] = useState(0);
  const current = items[index];

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <section className="mt-10 mb-6">
      <div className="rounded-3xl border border-paper-200 dark:border-white/5 bg-ink-950 dark:bg-ink-950 text-white p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <Quote className="text-brand-500 shrink-0" size={28} />
          <div className="flex-1 min-w-0">
            <p className="text-paper-100/90 leading-relaxed">{current.quote}</p>

            <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-brand-600 flex items-center justify-center font-display font-bold shrink-0">
                  {current.avatar ? (
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    current.name[0]
                  )}
                </div>
                <div>
                  <p className="font-semibold text-sm">{current.name}</p>
                  <p className="text-xs text-paper-100/50">{current.title}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-brand-500 text-brand-500" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={15} />
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 rounded-full bg-brand-600 flex items-center justify-center hover:bg-brand-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
