# Muhammad Sulaimaan — Portfolio

A static Angular portfolio built with Angular 22. It includes selected projects, experience, education, skills, contact links, prefilled hiring email, and a Google Calendar booking link.

## Run locally

Install dependencies once:

```powershell
npm install
```

Start the development server:

```powershell
npm start
```

Open `http://localhost:4200/` in your browser. Angular CLI serves the site and reloads it when source files change.

## Production build

```powershell
npm run build
```

The built static site is written to `dist/`.

## Automatic hosting

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site to GitHub Pages whenever a commit is pushed to `main`. After the first workflow run, the site is available at:

<https://sulaimaangit.github.io/port-folio/>

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** if it is not already selected. Each successful deployment updates the hosted site automatically.
