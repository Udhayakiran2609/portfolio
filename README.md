# Portfolio

Personal portfolio website built with React, TypeScript, and Vite.

## Features

- Project showcase with dedicated detail pages
- Direct `.exe` downloads for desktop apps:
  - `MyChat.exe`
  - `Isify.exe`
- About, contact, and responsive layout sections
- Smooth UI interactions with scroll reveal

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run locally

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Important File Locations

- Project data: `src/data/projects.ts`
- Project list page: `src/pages/Projects.tsx`
- Project details page: `src/pages/ProjectDetails.tsx`
- Public downloadable files: `public/`

## Notes

- Keep desktop installers inside `public/` so links like `/MyChat.exe` and `/Isify.exe` work as direct downloads.
