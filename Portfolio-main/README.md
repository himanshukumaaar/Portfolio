# Himanshu Kumar - Developer Portfolio

A futuristic, modern, and professional portfolio designed for Software Engineers and Backend Developers. Built using a sleek glassmorphism UI with subtle 3D/particle effects to highlight technical proficiency.

## Features
- **Glassmorphism UI**: Premium dark theme with vibrant blue accents.
- **Dynamic GitHub Integration**: Live fetching of top public repositories using the GitHub API.
- **Interactive Particles**: Subtle background animations configured for a professional look.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.
- **Contact Form**: Integrated with Web3Forms for direct messaging without a backend.
- **SEO Optimized**: Standard meta tags and Open Graph data included.

## Project Structure
- `index.html`: Main HTML file containing all sections.
- `assets/css/style.css`: All styling, CSS variables, and responsive media queries.
- `assets/js/script.js`: UI interactions, scroll spy, smooth scroll, form handling.
- `assets/js/github.js`: Logic to fetch and render GitHub repositories dynamically.
- `assets/js/app.js`: Configuration for particles.js.

## Customization
1. **GitHub Username**: Open `assets/js/github.js` and change `const username = 'himanshukumaaar';` to your own username.
2. **Contact Form**: The form uses Web3Forms. Ensure you have your correct Access Key in `index.html` inside the `<input type="hidden" name="access_key" value="...">` field.
3. **Resume**: Replace `assets/images/Resume.pdf` with your updated resume file.

## Advanced LinkedIn Integration (Optional Backend Architecture)
Full dynamic LinkedIn activity auto-sync is not available purely via the static frontend due to API CORS and authentication restrictions.

**For future dynamic LinkedIn integration**, use a Django + Django REST Framework backend with LinkedIn API OAuth 2.0.

**Backend Idea:**
- Django, Django REST Framework, requests, django-environ, SQLite/PostgreSQL
- API Endpoints:
  - `/api/linkedin/profile/`
  - `/api/linkedin/posts/`
  - `/api/linkedin/activity/`

*Important:* LinkedIn API access is restricted. Use mock/fallback data if permissions are unavailable. **Do not expose LinkedIn secrets in the frontend.**

## Deployment to GitHub Pages
Follow these steps to deploy your updated portfolio:

1. Replace the existing files in your local `Portfolio-main` directory with the new updated files.
2. Open your terminal in the `Portfolio-main` directory.
3. Run the following Git commands:
   ```bash
   git add .
   git commit -m "Update portfolio to modern glassmorphism design"
   git push origin main
   ```
4. If GitHub Pages is enabled for the `main` branch, your website will be automatically updated at `https://himanshukumaaar.github.io/Portfolio/`.

---
*Designed for performance, aesthetics, and technical excellence.*
