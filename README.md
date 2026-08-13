# Baljeet Singh — Portfolio

My personal portfolio site, built with React, TypeScript, and Tailwind CSS. It highlights my background in data engineering and analytics, work experience, technical skills, and featured projects.

**Live site:** _add your deployed URL here once hosted (e.g. via Vercel or Netlify)_

## Sections

- **Hero** — introduction and quick links
- **About** — background and focus areas
- **Experience** — internship and work history
- **Projects** — featured technical projects
- **Skills** — languages, tools, and frameworks
- **Certifications** — completed certifications
- **Contact** — a working contact form (via EmailJS)

## Tech stack

- React 19 + TypeScript
- Vite (build tool / dev server)
- Tailwind CSS
- Framer Motion (`motion`) for animations
- Lucide React for icons
- EmailJS for the contact form

## Run locally

**Prerequisites:** Node.js

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site will be available at `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run preview
```

## Deploying

This is a static Vite app, so it deploys cleanly to any static host. Two easy free options:

- **[Vercel](https://vercel.com)** — import the GitHub repo, it auto-detects Vite, deploys on push.
- **[Netlify](https://netlify.com)** — same flow; set build command to `npm run build` and publish directory to `dist`.

## Project content

All personal content (experience, skills, education, projects) lives in [`src/data.ts`](./src/data.ts) — update that file to edit the site's content without touching component code.
