# StartUp — Bootstrap 5 Clone

A responsive recreation of the Colorlib **StartUp** template
(https://preview.colorlib.com/theme/startup2/) built with **Bootstrap 5**
utility classes and components. Custom CSS is limited to the brand
accent color, the hero gradient, and hover-overlay effects — things
Bootstrap utilities can't express on their own.

## Structure

```
index.html          Single-page site (navbar, hero, services, about,
                     portfolio, how-we-work, team, testimonials,
                     contact form, footer)
css/custom.css       Minimal custom layer (see note above)
js/main.js           Footer year + mobile-nav auto-close
images/               Original template image assets
```

## Tech used

- Bootstrap 5.3 (CDN) — grid, navbar, cards, carousel, forms, utilities
- Bootstrap Icons (CDN) — social + play icons
- Google Fonts: Muli + Roboto (matches the original design)

## Responsiveness

- **Desktop (≥1200px):** full multi-column layout, horizontal nav
- **Tablet (768–1199px):** Bootstrap's `md`/`lg` breakpoints reflow
  service/team/portfolio grids to 2 columns
- **Mobile (<768px):** stacked single-column layout, Bootstrap's
  collapsible hamburger navbar

Test by resizing the browser or using dev tools' device toolbar.

## Deploy it yourself

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Bootstrap 5 clone of Colorlib StartUp template"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Deploy on Netlify
1. Go to https://app.netlify.com → **Add new site → Import an existing project**
2. Connect your GitHub repo
3. Build command: leave blank · Publish directory: `/` (root)
4. Click **Deploy site**

### 3. Deploy on Vercel (alternative)
1. Go to https://vercel.com/new
2. Import the same GitHub repo
3. Framework preset: **Other** · Output directory: `/` (root)
4. Click **Deploy**

Either way you'll get a live URL to submit alongside your GitHub link.
