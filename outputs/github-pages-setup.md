# GitHub Pages Setup

This project is ready to publish as a public, no-auth GitHub Pages site.

## What Was Added

- `.github/workflows/deploy-github-pages.yml`
- `SITE_BASE_PATH` handling so project sites work under `/repo-name/`
- `.nojekyll` output in `dist/client`
- `404.html` fallback output in `dist/client`
- `npm run build:github-pages`

## Setup Steps

1. Create a new GitHub repository.
2. Push this project to that repository's `main` branch.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Push to `main` or manually run the **Deploy GitHub Pages** workflow.

## Public URL

For a normal repository, the URL will be:

```text
https://<your-username>.github.io/<repo-name>/
```

For a repository named `<your-username>.github.io`, the URL will be:

```text
https://<your-username>.github.io/
```

## Notes

GitHub Pages is public by default for public repositories. Private repositories can still use Pages depending on your GitHub plan and repository settings.
