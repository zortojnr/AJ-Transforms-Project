# AJ Transforms

![AJ Transforms logo](src/assets/images/aj-symbol-navy-gold.jpg)

AJ Transforms is a business transformation consultancy website focused on
helping organisations improve operational performance. It presents a
business-first approach to process improvement, workflow automation, practical
AI adoption, and sustainable growth.

## What the site includes

- Overview of the consultancy's business-first approach
- Capabilities, solutions, and industry information
- Insights on operational design and practical innovation
- A consultation brief form

The consultation form currently prepares a brief in the browser only. It does
not send or store submissions.

## Technology

- React and TypeScript
- Vite
- Tailwind CSS
- Motion and Three.js

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

The development server runs on port `3000`.

## Validate and build

```bash
npm run lint
npm run build
```

The production build is written to `dist/`.

## Deploy with Vercel

Import this repository into Vercel. The included `vercel.json` configures
`npm run build` as the build command and `dist` as the output directory.
