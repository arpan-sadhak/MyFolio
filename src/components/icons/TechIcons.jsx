const badgeBase =
  'w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-mono shrink-0';

export function TechBadge({ icon, name }) {
  const map = {
    js: <div className={`${badgeBase} bg-[#f7df1e] text-[#1a1a1a]`}>JS</div>,
    ts: <div className={`${badgeBase} bg-[#3178c6] text-white`}>TS</div>,
    react: (
      <div className={`${badgeBase} bg-ink-800 dark:bg-ink-800 border border-brand-500/30`}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1.3">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          </g>
        </svg>
      </div>
    ),
    node: (
      <div className={`${badgeBase} bg-ink-800 border border-brand-500/30`}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#5fa04e">
          <path d="M12 1.85 2 7.4v9.2l10 5.55 10-5.55V7.4L12 1.85Z" opacity="0.25" />
          <path d="M12 4 4.5 8.2v7.6L12 20l7.5-4.2V8.2L12 4Zm0 2.3 5.2 2.9v5.6L12 17.7l-5.2-2.9V9.2L12 6.3Z" />
        </svg>
      </div>
    ),
    leaf: (
      <div className={`${badgeBase} bg-ink-800 border border-brand-500/30`}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#4ade80">
          <path d="M20 4c-8 0-14 5-14 12 0 2 .4 3.4 1 4.5C9.5 13.5 14 9.5 19 7c-5.3 3-9 7.6-10.6 12.4 1 .4 2.2.6 3.6.6 7 0 12-6 12-14 0-.7 0-1.3-.1-2Z" />
        </svg>
      </div>
    ),
    wind: (
      <div className={`${badgeBase} bg-ink-800 border border-brand-500/30`}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
          <path d="M3 8h11a3 3 0 1 0-3-3" />
          <path d="M3 13h15a3 3 0 1 1-3 3" />
          <path d="M3 18h9a3 3 0 1 0-3-3" />
        </svg>
      </div>
    ),
    bolt: (
      <div className={`${badgeBase} bg-ink-800 border border-brand-500/30`}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#ff6b57">
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      </div>
    ),
  };

  return map[icon] || <div className={`${badgeBase} bg-ink-800`}>{name?.slice(0, 2)}</div>;
}
