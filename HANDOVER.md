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

- Cloudflare Pages rejected `public/Research_NIR_Vein_Finder.pdf` because it is larger than 25 MiB.
- To make deployment work, the publication link was temporarily changed to an external URL in:
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
