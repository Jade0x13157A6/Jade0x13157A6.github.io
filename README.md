# Ruijue Luo — academic portfolio

A responsive, accessible, dependency-free personal academic website. Four HTML pages, CSS, JavaScript, and a small SVG favicon. No build step, backend, paid service, or external CDN is needed.

## Publish using GitHub Pages (personal homepage)

This site was prepared for GitHub username **`Jade0x13157A6`**.

1. While signed in to GitHub, create a **public** repository named **`Jade0x13157A6.github.io`** (repository name must exactly match your username followed by `.github.io`).
2. Upload **the *contents* of this folder**, not the folder itself, to the repository's `main` branch. `index.html` needs to be at the root.
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then save.
4. Once published, the URL is **https://jade0x13157a6.github.io/**. GitHub Pages deployments can take a few minutes to propagate.

### Git command alternative

If you have created the repository on GitHub:

```bash
cd ruijue-academic-website
git init
git branch -M main
git add .
git commit -m "Launch academic portfolio"
git remote add origin https://github.com/Jade0x13157A6/Jade0x13157A6.github.io.git
git push -u origin main
```

GitHub may request browser-based login/token authentication. Never paste credentials into the site.

## Preview locally

Open `index.html` in a browser, or start a lightweight local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize before/after publishing

- **Your bio:** edit `index.html`.
- **Project details:** edit `projects/cfi.html`, `projects/vdot.html`, `projects/specification.html`.
- **Appearance:** edit `assets/style.css`.
- **Add a portrait:** place your own authorized image in `assets/` and add an `<img>` in the hero area.
- **CV:** put your finalized PDF in a `cv/` directory and add a link to it. No CV has been included because none was provided.
- **Contact:** a GitHub link is used instead of publishing an unconfirmed personal email address.

### Important note about the CFI project

The full Sargantana mentorship integration should not be conflated with the *public standalone CFI FSM coding challenge* repository. The website intentionally makes this distinction.

## Project structure

```text
index.html
projects/
  cfi.html
  vdot.html
  specification.html
assets/
  style.css
  main.js
  favicon.svg
.nojekyll
README.md
```

## Privacy

This is intended to be a **public website**. Review all text before publishing. No analytics, tracking scripts, personal email address, or private files are included.
