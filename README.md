# Arpan Sadhak — Portfolio

React + Vite + Tailwind CSS portfolio site, built from the provided design reference.
Includes dark/light mode, smooth-scroll section navigation, and a custom 404 page.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/       UI pieces (Sidebar, Hero, ProjectCard, Contact, etc.)
  pages/
    Home.jsx        Assembles all sections
    NotFound.jsx    Custom 404 page (matches the site's theme)
  context/
    ThemeContext.jsx   Dark/light mode, persisted to localStorage
  data/
    portfolioData.js   ALL site content lives here right now
  hooks/
    usePortfolioData.js   Where the site's content is read from
    useActiveSection.js   Highlights the active sidebar link on scroll
```

## Plugging in a real backend later

Every piece of content (profile, projects, skills, testimonials, etc.) flows
through **one hook**: `src/hooks/usePortfolioData.js`. When your backend is
ready, open that file and replace the local-data line with a fetch call:

```js
const res = await fetch('/api/portfolio');
if (!res.ok) throw new Error('Failed to load portfolio data');
return await res.json();
```

As long as your API response matches the shape in `src/data/portfolioData.js`,
no component needs to change — loading and error states are already handled
in `src/pages/Home.jsx`.

The contact form in `src/components/Contact.jsx` currently just shows a local
"sent" confirmation — wire its `handleSubmit` up to your `/api/contact`
endpoint when that exists.

## Images & resume

Drop real files into `public/` and update the paths in
`src/data/portfolioData.js`:

- `public/avatar.jpg` — profile photo
- `public/projects/*.jpg` — project thumbnails
- `public/testimonials/*.jpg` — testimonial avatars
- `public/resume.pdf` — downloadable CV

Missing images fail gracefully (they just hide instead of showing a broken
image icon), so the site works fine before you add them.

## Deploying

SPA fallback files are already included so client-side routing (and the
404 page) work correctly:

- `public/_redirects` — Netlify
- `vercel.json` — Vercel

For other hosts, make sure unknown routes are rewritten to `index.html`.
