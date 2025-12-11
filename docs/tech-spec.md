# Tech Spec: WagerBabe Investor Deck Rebranding

## Overview

The WagerBabe Investor Deck project is currently built using the Astro docs template but still contains Comcreate SEO Report branding throughout. This specification outlines the changes needed to rebrand the site as a professional investor pitch deck for WagerBabe.

**Current State:**
- 16 pitch deck slides created as markdown files in `/src/content/docs/`
- Site still branded as "Comcreate SEO Report Template"
- SEO-focused components (stats, charts, metrics) not relevant for investor deck
- Navigation and footer contain Comcreate branding and contact info

**Target State:**
- Clean, professional investor pitch deck website
- WagerBabe branding throughout
- Navigation optimized for sequential slide viewing
- Removal of SEO-specific components
- Professional presentation suitable for investor audience

---

## Epic: Rebrand Site as WagerBabe Investor Deck

### Story 1: Core Branding & Configuration Updates

**Description:**
Update all configuration files, package metadata, and core layout files to reflect WagerBabe branding instead of Comcreate SEO Reports.

**Acceptance Criteria:**
- [ ] `package.json` name changed to `wagerbabe-investor-deck`
- [ ] `package.json` description updated to "WagerBabe Investor Deck - AI-Powered Pay-Per-Head Platform"
- [ ] `package.json` author updated to WagerBabe team
- [ ] `astro.config.mjs` site title configured as "WagerBabe Investor Deck"
- [ ] `README.md` rewritten with WagerBabe project description and deployment instructions
- [ ] `BaseLayout.astro` meta description updated to "WagerBabe - The AI-Powered Pay-Per-Head Platform"
- [ ] `BaseLayout.astro` page title template changed from "Comcreate SEO Reports" to "WagerBabe Investor Deck"
- [ ] `BaseLayout.astro` meta author updated to "WagerBabe"

**Files to Modify:**
- `/Users/joshuanolan/Wager Babe Pitch Deck/package.json`
- `/Users/joshuanolan/Wager Babe Pitch Deck/astro.config.mjs`
- `/Users/joshuanolan/Wager Babe Pitch Deck/README.md`
- `/Users/joshuanolan/Wager Babe Pitch Deck/src/layouts/BaseLayout.astro`

---

### Story 2: Header & Footer Component Rebranding

**Description:**
Update Header and Footer components to remove Comcreate branding and replace with appropriate WagerBabe branding and investor-focused navigation.

**Acceptance Criteria:**
- [ ] Header logo updated from Comcreate to WagerBabe (or text-based branding)
- [ ] Header navigation updated - remove "Main Site" link or replace with relevant investor link
- [ ] Header text "SEO Reports" changed to "Investor Deck" or "Pitch Deck"
- [ ] Footer completely rebranded - remove Comcreate contact info, services, tagline
- [ ] Footer updated with WagerBabe contact information
- [ ] Footer simplified for professional investor presentation (minimal, clean design)
- [ ] Footer copyright updated to "WagerBabe"
- [ ] Footer links updated to relevant WagerBabe resources (if applicable)

**Files to Modify:**
- `/Users/joshuanolan/Wager Babe Pitch Deck/src/components/Header.astro`
- `/Users/joshuanolan/Wager Babe Pitch Deck/src/components/Footer.astro`

**Design Notes:**
- Consider minimal footer with just copyright and contact email
- Header should be clean and not distract from pitch content

---

### Story 3: Homepage Transformation & Navigation Enhancement

**Description:**
Transform the homepage from an SEO report dashboard into a professional pitch deck landing page with clean navigation to all 16 slides.

**Acceptance Criteria:**
- [ ] Remove SEO-specific stats grid (keywords, traffic, backlinks, issues)
- [ ] Remove Charts component displaying SEO metrics
- [ ] Remove/delete `seo-metrics.json` data file (no longer needed)
- [ ] Update hero section heading from "SEO Reports" to "WagerBabe Investor Deck"
- [ ] Update hero tagline to investor-focused messaging (e.g., "The AI-Powered Pay-Per-Head Platform")
- [ ] Update hero description to professional pitch deck description
- [ ] Remove "Powered by Comcreate" badge
- [ ] Section header changed from "Available Reports" to "Pitch Deck Slides" or "Deck Overview"
- [ ] Verify all 16 pitch deck slides display correctly in navigation grid
- [ ] Ensure slides are ordered sequentially (01-16)
- [ ] DocLayout back navigation updated from "Back to all docs" to "Back to deck overview"

**Files to Modify:**
- `/Users/joshuanolan/Wager Babe Pitch Deck/src/pages/index.astro`
- `/Users/joshuanolan/Wager Babe Pitch Deck/src/layouts/DocLayout.astro`
- `/Users/joshuanolan/Wager Babe Pitch Deck/src/data/seo-metrics.json` (delete)
- `/Users/joshuanolan/Wager Babe Pitch Deck/src/components/Charts.astro` (remove import/usage)

**Design Notes:**
- Keep the clean, professional aesthetic
- Focus on easy navigation between slides
- Consider adding slide numbers/progress indicators

---

## Technical Considerations

**Dependencies:**
- No new dependencies required
- ApexCharts dependency can remain (may be useful for ROI/metrics slides)
- Astro 5.16.5 is current and appropriate

**Browser Support:**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design maintained

**Performance:**
- Static site generation ensures fast load times
- No performance concerns with current architecture

**SEO Considerations:**
- While this is a pitch deck, basic SEO metadata should be maintained
- Consider robots.txt if deck should not be publicly indexed
- Password protection may be desired for investor-only access

---

## Out of Scope

The following items are explicitly out of scope for this rebranding effort:

- Creating new slide content (16 slides already exist)
- Changing the color scheme or visual design system
- Adding authentication or password protection
- Creating custom slide templates beyond existing DocLayout
- Integration with CRM or analytics platforms
- Creating PDF export functionality
- Adding video or interactive elements to slides

---

## Testing Checklist

Before deploying, verify:

- [ ] All 16 slides load correctly
- [ ] Navigation works between slides and home
- [ ] Header displays WagerBabe branding
- [ ] Footer displays WagerBabe information
- [ ] No Comcreate references remain anywhere
- [ ] Mobile responsive layout works
- [ ] Build completes without errors (`npm run build`)
- [ ] Preview build works (`npm run preview`)
- [ ] All links functional
- [ ] Meta tags contain correct WagerBabe information

---

## Deployment Notes

**Vercel Deployment:**
- Existing `vercel.json` configuration should work as-is
- No framework changes needed
- Static export works with current setup
- Recommend custom domain: `deck.wagerbabe.com` or similar

**Post-Deployment:**
- Share URL with stakeholders for review
- Consider analytics tracking (Vercel Analytics or Google Analytics)
- Monitor for any broken links or display issues

---

## Estimated Effort

- Story 1 (Core Branding): 1-2 hours
- Story 2 (Header/Footer): 2-3 hours
- Story 3 (Homepage Transform): 2-3 hours

**Total Estimated Time:** 5-8 hours

---

## Success Metrics

Project will be considered successful when:

1. Zero Comcreate references remain in the codebase
2. All branding reflects WagerBabe identity
3. Navigation provides clear path through all 16 slides
4. Site builds and deploys without errors
5. Professional presentation suitable for investor audience
6. Responsive design works across devices
