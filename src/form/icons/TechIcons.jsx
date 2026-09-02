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
