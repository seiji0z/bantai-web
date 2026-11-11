# BantAI web

School-focused BantAI landing page built with React and Vite.

## Project structure

```text
src/
  components/
    layout/       Shared navigation and footer
    ui/            Reusable presentation components
  pages/           Page-level composition
  sections/        One file per landing-page section
  App.jsx          Application entry component
```

The website is currently one scrollable landing page. Each section has its own
component so teammates can work independently without editing a monolithic
page file.

Run the project with:

```bash
npm run dev
```
