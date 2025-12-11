# WagerBabe Investor Deck

A professional investor pitch deck website for WagerBabe - The AI-Powered Pay-Per-Head Platform.

## Overview

This pitch deck presents WagerBabe, a fully operational PPH platform featuring:
- Full sportsbook with live in-game betting
- Automated grading
- AI-powered smart reports
- Modern tech stack (FastAPI, Next.js 15, React 19)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deck Structure

The pitch deck contains 16 slides:

1. **Title** - WagerBabe introduction
2. **The Problem** - PPH industry challenges
3. **The Solution** - WagerBabe platform overview
4. **Platform Features** - Player and agent features
5. **The AI Advantage** - Smart reporting capabilities
6. **Live Betting & Auto-Grading** - Core technology
7. **Technology Stack** - Modern architecture
8. **Investment Tiers** - Partnership levels
9. **ROI Model** - Financial projections
10. **Competitive Comparison** - Market positioning
11. **Target Market** - Customer segments
12. **What's Live vs Roadmap** - Current and future features
13. **The Team** - Leadership
14. **Why Invest Now** - Investment thesis
15. **The Ask** - Investment details
16. **Contact** - Get in touch

## Project Structure

```
/
├── public/              # Static assets (logos, favicons)
├── src/
│   ├── components/      # Reusable components
│   ├── content/
│   │   └── docs/        # Pitch deck slides (markdown)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/
│       └── global.css   # Brand styling
└── README.md
```

## Deployment

Deploy to Vercel:

```bash
npm run build
```

The site is optimized for static hosting on Vercel, Netlify, or any static hosting provider.

### Quick Deploy to Vercel

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Astro and deploys
5. Share the generated URL with investors

## Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Preview production build locally |

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** Inter, JetBrains Mono
- **Hosting:** Vercel (recommended)

## License

Proprietary - WagerBabe
