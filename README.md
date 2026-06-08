# Diego Hinagas — Portfolio

Single-page portfolio site built with Vite, React, and Tailwind CSS, deployed on Cloudflare Pages.

## Tech Stack

- **Vite 6** — build tool and dev server
- **React 18** — UI library (JSX, StrictMode)
- **Tailwind CSS 3** — utility-first styling
- **Cloudflare Pages** — hosting via Wrangler
- **react-awesome-reveal** — scroll-triggered animations
- **react-scroll** — smooth-scroll navigation
- **react-icons** — icon set (Heroicons, Simple Icons, Bootstrap Icons)

## Getting Started

```bash
git clone https://github.com/diegoalbert27/hinagas-portafolio.git
cd hinagas-portafolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start Vite dev server                    |
| `npm run build`      | Production build to `dist/`              |
| `npm run preview`    | Build and preview with Wrangler locally  |
| `npm run deploy`     | Build and deploy to Cloudflare Pages     |
| `npm run lint`       | Lint `src/` with ESLint                  |

## Project Structure

```
hinagas-portafolio/
├── index.html               # Entry point
├── vite.config.js           # Vite + React + Cloudflare plugins
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── wrangler.jsonc           # Cloudflare Wrangler configuration
└── src/
    ├── main.jsx             # React root render
    ├── App.jsx              # Root component (section layout)
    ├── index.css            # Global styles (Tailwind directives)
    ├── assets/
    │   └── images/          # Static images (avatar, cards, etc.)
    └── components/
        ├── Navbar.jsx       # Fixed top navigation + mobile drawer
        ├── Header.jsx       # Hero section with avatar and links
        ├── About.jsx        # Bio, education, and certifications
        ├── Experience.jsx   # Work history timeline
        ├── Skills.jsx       # Technical skill categories
        └── Footer.jsx       # Site footer
```

## Sections

- **Header** — Full-screen hero with avatar, role, location, and social links.
- **About** — Professional bio, education (UPTA), and certifications (Udemy, University of Helsinki).
- **Experience** — Timeline of four roles across fintech and software agencies, with bulleted achievements and tech tags.
- **Skills** — Skill cards organized by category: Backend, Cloud, Databases, Architecture, Observability, Domain, Tools.
- **Footer** — Simple footer with tagline.

## Deployment

The site is deployed to Cloudflare Pages via Wrangler:

```bash
npm run deploy
```

Configuration lives in `wrangler.jsonc`. The SPA fallback (`not_found_handling: "single-page-application"`) ensures client-side navigation works correctly on refresh.
