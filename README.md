# Personal Motorcycle Mechanic Course

A complete static educational course built around:

- 1995 Harley-Davidson Sportster 883 Hugger
- 1996 Harley-Davidson Electra Glide Ultra Classic
- 1998 Honda Shadow Aero 1100

## Course size

- **56 lessons** across **18 modules**
- ~63 hours 22 minutes including reading, videos and labs
- At least one YouTube video in every lesson
- Garage exercises and knowledge checks
- Master TOC with reading/video/lab/total duration
- Static Docusaurus site: no API, database or application server

## Run locally

```bash
npm install
npm start
```

Build the static site:

```bash
npm run build
npm run serve
```

## Publish with GitHub Pages

1. Create a GitHub repository named `motorcycle-mechanic-course`.
2. Replace every `YOUR-GITHUB-USERNAME` in `docusaurus.config.js` with your GitHub username/org.
3. Push this project to `main`.
4. In GitHub, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
5. The included `.github/workflows/deploy.yml` builds and publishes the site.

For a custom repo name, update `projectName` and `baseUrl` in `docusaurus.config.js`. For a custom domain, see Docusaurus/GitHub Pages documentation.

## Content editing

All course content is Markdown under `docs/`. Edit Markdown, commit, and push. Docusaurus generates navigation automatically from the folder structure and `_category_.json` files.

## Safety

This course is educational. Always use correct factory service information and appropriate professional help for safety-critical or unfamiliar work.

## External videos

Videos are linked/embedded from YouTube; they are not copied into this repository. Runtimes are approximate and can change if creators edit or replace content.


## MDX compatibility

Lesson answer disclosures and embedded YouTube players use Docusaurus/MDX-compatible JSX markup. This package includes the MDX markup fixes applied across all 56 lessons.
