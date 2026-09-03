const badgeBase =
  'w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-mono shrink-0';

// export function TechBadge({ icon, name }) {
//   const map = {
//     js: <div className={`${badgeBase} bg-[#f7df1e] text-[#1a1a1a]`}>JS</div>,
//     ts: <div className={`${badgeBase} bg-[#3178c6] text-white`}>TS</div>,
//     react: (
//       <div className={`${badgeBase} bg-ink-800 dark:bg-ink-800 border border-brand-500/30`}>
//         <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
//           <circle cx="12" cy="12" r="2.2" fill="#61dafb" />
//           <g stroke="#61dafb" strokeWidth="1.3">
//             <ellipse cx="12" cy="12" rx="10" ry="4.2" />
//             <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
//             <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
//           </g>
//         </svg>
//       </div>
//     ),
//     node: (
//       <div className={`${badgeBase} bg-ink-800 border border-brand-500/30`}>
//         <svg viewBox="0 0 24 24" width="18" height="18" fill="#5fa04e">
//           <path d="M12 1.85 2 7.4v9.2l10 5.55 10-5.55V7.4L12 1.85Z" opacity="0.25" />
//           <path d="M12 4 4.5 8.2v7.6L12 20l7.5-4.2V8.2L12 4Zm0 2.3 5.2 2.9v5.6L12 17.7l-5.2-2.9V9.2L12 6.3Z" />
//         </svg>
//       </div>
//     ),
//     leaf: (
//       <div className={`${badgeBase} bg-ink-800 border border-brand-500/30`}>
//         <svg viewBox="0 0 24 24" width="18" height="18" fill="#4ade80">
//           <path d="M20 4c-8 0-14 5-14 12 0 2 .4 3.4 1 4.5C9.5 13.5 14 9.5 19 7c-5.3 3-9 7.6-10.6 12.4 1 .4 2.2.6 3.6.6 7 0 12-6 12-14 0-.7 0-1.3-.1-2Z" />
//         </svg>
//       </div>
//     ),
//     wind: (
//       <div className={`${badgeBase} bg-ink-800 border border-brand-500/30`}>
//         <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round">
//           <path d="M3 8h11a3 3 0 1 0-3-3" />
//           <path d="M3 13h15a3 3 0 1 1-3 3" />
//           <path d="M3 18h9a3 3 0 1 0-3-3" />
//         </svg>
//       </div>
//     ),
//     bolt: (
//       <div className={`${badgeBase} bg-ink-800 border border-brand-500/30`}>
//         <svg viewBox="0 0 24 24" width="18" height="18" fill="#ff6b57">
//           <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
//         </svg>
//       </div>
//     ),
//   };

//   return map[icon] || <div className={`${badgeBase} bg-ink-800`}>{name?.slice(0, 2)}</div>;
// }

import "devicon/devicon.min.css";
import { Code2 } from "lucide-react";

/*
|--------------------------------------------------------------------------
| DEVICON MAP
|--------------------------------------------------------------------------
|
| These keys are stored in your database.
|
| Example:
|
| {
|   name: "React",
|   icon: "react",
|   type: "devicon"
| }
|
*/

export const DEVICON_MAP = {
  // Frontend
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  javascript: "devicon-javascript-plain colored",
  typescript: "devicon-typescript-plain colored",

  react: "devicon-react-original colored",
  nextjs: "devicon-nextjs-plain",
  vue: "devicon-vuejs-plain colored",
  nuxt: "devicon-nuxtjs-plain colored",
  angular: "devicon-angular-plain colored",
  svelte: "devicon-svelte-plain colored",

  tailwind: "devicon-tailwindcss-original colored",
  bootstrap: "devicon-bootstrap-plain colored",

  // Backend
  nodejs: "devicon-nodejs-plain colored",
  express: "devicon-express-original",
  nestjs: "devicon-nestjs-plain colored",

  django: "devicon-django-plain",
  flask: "devicon-flask-original",
  laravel: "devicon-laravel-plain colored",
  spring: "devicon-spring-original colored",
  dotnet: "devicon-dotnetcore-plain colored",

  // Programming Languages
  python: "devicon-python-plain colored",
  java: "devicon-java-plain colored",
  cpp: "devicon-cplusplus-plain colored",
  csharp: "devicon-csharp-plain colored",
  go: "devicon-go-original-wordmark colored",
  rust: "devicon-rust-original colored",
  php: "devicon-php-plain colored",
  ruby: "devicon-ruby-plain colored",

  // Database
  mongodb: "devicon-mongodb-plain colored",
  mysql: "devicon-mysql-plain colored",
  postgresql: "devicon-postgresql-plain colored",
  sqlite: "devicon-sqlite-plain colored",
  redis: "devicon-redis-plain colored",

  firebase: "devicon-firebase-plain colored",
  supabase: "devicon-supabase-plain colored",

  // Cloud
  aws: "devicon-amazonwebservices-plain-wordmark colored",
  azure: "devicon-azure-plain colored",
  googlecloud: "devicon-googlecloud-plain colored",

  // DevOps
  docker: "devicon-docker-plain colored",
  kubernetes: "devicon-kubernetes-plain colored",
  nginx: "devicon-nginx-original colored",

  // Version Control
  git: "devicon-git-plain colored",
  github: "devicon-github-original",
  gitlab: "devicon-gitlab-plain colored",
  bitbucket: "devicon-bitbucket-original colored",

  // Tools
  figma: "devicon-figma-plain colored",
  vscode: "devicon-vscode-plain colored",
  postman: "devicon-postman-plain colored",
  vite: "devicon-vitejs-plain colored",
};

/*
|--------------------------------------------------------------------------
| TECH ICON
|--------------------------------------------------------------------------
*/

export function TechIcon({ icon, type = "devicon", size = 24, name = "" }) {
  /*
  |--------------------------------------------------------------------------
  | CUSTOM IMAGE
  |--------------------------------------------------------------------------
  */

  if (type === "image") {
    if (!icon) {
      return (
        <Code2 size={size} className="text-ink-900/40 dark:text-white/40" />
      );
    }

    return (
      <img
        src={icon}
        alt={name}
        width={size}
        height={size}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    );
  }

  /*
  |--------------------------------------------------------------------------
  | DEVICON
  |--------------------------------------------------------------------------
  */

  const iconClass = DEVICON_MAP[icon];

  /*
  |--------------------------------------------------------------------------
  | FALLBACK
  |--------------------------------------------------------------------------
  */

  if (!iconClass) {
    return <Code2 size={size} className="text-ink-900/40 dark:text-white/40" />;
  }

  return (
    <i
      className={iconClass}
      style={{
        fontSize: `${size}px`,
        lineHeight: 1,
      }}
      aria-label={name}
    />
  );
}

/*
|--------------------------------------------------------------------------
| TECH BADGE
|--------------------------------------------------------------------------
*/

export function TechBadge({ icon, name, type = "devicon" }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-ink-900 border border-paper-200 dark:border-white/5"
      title={name}
    >
      <span className="w-5 h-5 flex items-center justify-center shrink-0">
        <TechIcon icon={icon} type={type} size={20} name={name} />
      </span>

      {name && (
        <span className="text-xs font-medium text-ink-900 dark:text-paper-100">
          {name}
        </span>
      )}
    </div>
  );
}

