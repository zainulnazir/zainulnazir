# Handover

## Project

- Repo path: `/Users/zainulnazir/Projects/zainulnazir`
- Git remote: `https://github.com/zainulnazir/zainulnazir.git`
- Main branch: `main`
- Latest pushed commit at time of writing: `4b3740f`

## Current Live Deployment

- Cloudflare Pages project: `zainulnazir`
- Production URL: `https://zainulnazir.pages.dev`
- Latest deployment URL: `https://2961370a.zainulnazir.pages.dev`

## Important Deployment Notes

- This app is deployed as a static export.
- `next.config.ts` uses:
  - `output: "export"`
  - `images: { unoptimized: true }`
- Working build command:
  - `npm run build`
- Cloudflare Pages output directory:
  - `out`

## PDF Handling

- `public/Research_NIR_Vein_Finder.pdf` was removed from the codebase because Cloudflare Pages rejected it for being larger than 25 MiB.
- The publication link now points to an external R2 URL in:
  - `src/components/Publications.tsx`
- Current paper link:
  - `https://pub-0951765016044c0d8d09ae3469298c27.r2.dev/research/Research%20NIR%20Vein-Finder.pdf`
- User explicitly said not to upload the PDF to Pages and to serve it elsewhere later.

## Recent Content Changes

- Improved recruiter-facing copy without changing the site design.
- Added the `Lumbar Spine Implant Concept` as a proper project in:
  - `src/components/Projects.tsx`
- Updated the GitHub profile README in:
  - `README.md`
- Strengthened:
  - Hero positioning
  - About section copy
  - Experience wording
  - Projects wording
  - Publications wording
  - Skills wording
  - Contact section wording

## Recent Design / UX Changes

- About section was rebuilt into a single profile-style image panel using:
  - `src/components/About.tsx`
  - `src/components/About.module.css`
- The profile portrait is served from:
  - `public/images/zain-profile-cutout.png`
- Education and Experience were redesigned into premium timelines on desktop and tablet using:
  - `src/components/Education.tsx`
  - `src/components/Education.module.css`
  - `src/components/Experience.tsx`
  - `src/components/Experience.module.css`
- On phone sizes, Education and Experience now switch to a simpler stacked card layout instead of keeping the full timeline rail.
- Mobile navigation now uses a centered hamburger menu rather than a compressed full-width horizontal nav, using:
  - `src/components/Navigation.tsx`
  - `src/components/Navigation.module.css`
- About, Hero, Projects, Skills, Contact, and global spacing were adjusted for phones and tablets in:
  - `src/components/Hero.module.css`
  - `src/components/Projects.module.css`
  - `src/components/Skills.module.css`
  - `src/components/Contact.module.css`
  - `src/app/globals.css`

## Section Backup

- Before redesigning About, Experience, and Publications on 2026-03-26, backups were saved in:
  - `backups/2026-03-26-section-refresh/`
- That folder contains the previous versions of:
  - `About.tsx`
  - `About.module.css`
  - `Experience.tsx`
  - `Experience.module.css`
  - `Publications.tsx`
  - `Publications.module.css`
- Additional backup snapshots created during later iterations:
  - `backups/2026-03-26-experience-timeline/`
  - `backups/2026-03-26-academic-polish/`
  - `backups/2026-03-26-mobile-nav-pass/`

## Cloudflare Notes

- There are two Pages projects in the account right now:
  - `zainulnazir`
  - `zainulnazir-portfolio`
- `zainulnazir-portfolio` was created earlier during setup and is no longer the intended production project.
- If desired, it can be deleted later to avoid confusion.

## Known Local-Only Files

- These were intentionally left untracked:
  - `AGENTS.md`
  - `CLAUDE.md`
  - `Gemini_Generated_Image_xsa79sxsa79sxsa7.png`

## Validation Status

- Last known successful checks:
  - `npm run lint`
  - `npx tsc --noEmit`
  - `npm run build`

## High-Value Next Steps

1. Optionally move the R2 `r2.dev` paper URL to a custom domain later.
2. Optionally delete the unused Cloudflare Pages project `zainulnazir-portfolio`.
3. Add stronger proof to portfolio projects:
   - screenshots
   - concrete outcomes
   - exact personal contributions
   - architecture / technical decisions
4. Improve the lumbar spine implant project with more specific engineering details if available.
5. Consider adding a custom domain to Cloudflare Pages.

## Resume Context For Next Chat

- The user wants improvements, but does not want the website design language changed.
- Content, polish, deployment, and recruiter-facing upgrades are welcome.
- Large visual redesigns were previously disliked and reverted.
- Keep changes restrained and aligned with the original look.
