export default function Skills({ skills }) {
  return (
    <section id="skills" className="mt-10 scroll-mt-24">
      <p className="font-mono text-xs tracking-[0.2em] text-ink-900/50 dark:text-paper-100/40 uppercase mb-5">
        Skills
      </p>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-ink-950 dark:text-white">
                {skill.name}
              </span>
              <span className="text-xs font-mono text-ink-900/40 dark:text-paper-100/40">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-paper-100 dark:bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
