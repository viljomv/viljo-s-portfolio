# Angular Portfolio Guide

This is a complete, modern Portfolio website built with Angular 16.

## Project Structure

- **src/app/components/**: Contains all functional components:
  - `header`: Navigation bar.
  - `hero`: Introduction section with animations.
  - `about`: Biography and skills.
  - `experience`: Work experience timeline.
  - `education`: Academic background.
  - `projects`: Showcase of your work (data-driven).
  - `contact`: Contact information.
- **src/styles.css**: Global styles, CSS variables (colors, fonts), and utility classes.
- **src/index.html**: Main entry point adding Google Fonts (Inter).

## How to Customize

1. **Update Content**:
   - **About**: Edit `src/app/components/about/about.component.html`.
   - **Experience**: Edit `src/app/components/experience/experience.component.ts`.
   - **Education**: Edit `src/app/components/education/education.component.ts`.
   - **Projects**: Edit `src/app/components/projects/projects.component.ts`.

2. **Change Colors/Theme**:
   - Open `src/styles.css`.
   - Modify the variables at the top (e.g., `--accent`, `--bg-primary`).

## How to Run

1. Open a terminal in this folder.
2. Run the following command:
   ```bash
   npm start
   ```
   (This runs `ng serve` on port 7000).
3. Open your browser and visit: [http://localhost:7000](http://localhost:7000)

## Deployment

To deploy to a live server (like Netlify, Vercel, or GitHub Pages):
1. Run `npm run build`.
2. The production files will be created in the `dist/portfolio` folder.
3. Upload the contents of `dist/portfolio` to your host.
