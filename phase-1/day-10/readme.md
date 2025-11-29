# Day 10 — Git Workflow & Deployment

This day focuses on a clean Git/GitHub workflow and deploying the mini‑site.

## Repo
- GitHub repository: <REPLACE_WITH_REPO_URL>
- Live URL (Vercel/Netlify): <REPLACE_WITH_LIVE_URL>

## Branching and PR
1. Ensure main is up to date
   - `git checkout main && git pull`
2. Create a feature branch
   - `git checkout -b feature/responsive-polish`
3. Make a small change (e.g., tweak spacing or color token)
4. Commit with a clear message
   - `git add -A && git commit -m "Polish: adjust spacing scale on cards"`
5. Push and open PR
   - `git push -u origin feature/responsive-polish`
   - Open a Pull Request on GitHub; add a short description and checklist
6. Review and merge the PR (squash or merge)
7. Pull the merged changes locally
   - `git checkout main && git pull`

## Deploy to Vercel (option A)
1. Create account at vercel.com and import your GitHub repo
2. Framework preset: “Other” (plain HTML/CSS)
3. Output directory: `/` (project root)
4. Deploy; note the production URL
5. Enable Preview Deployments for PRs (optional)

## Deploy to Netlify (option B)
1. Create account at netlify.com and “Add new site from Git”
2. Build command: none; Publish directory: `/`
3. Deploy and copy the site URL
4. Enable Deploy Previews for PRs (optional)

## Post‑deploy checklist
- Title and meta description render correctly
- Images have `alt`; pages are navigable by keyboard
- Responsive at 900px and 600px breakpoints
- Links and buttons have visible focus styles (browser default acceptable)

## Mini‑site suggestion
- Use `day-05`, `day-07`, and `day-08` assets to assemble:
  - `/index.html` (home/feature grid)
  - `/about.html`
  - `/contact.html`
  - Shared `/styles.css`

Record links above once live.

