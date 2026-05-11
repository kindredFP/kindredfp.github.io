# The LAB Basketball — Website Redesign

A modern, high-performance static website for **The LAB Basketball** training facility in Milton, Ontario.

## 🏀 About

This is a redesigned website for JP Albano's elite basketball skills training and player development program. The original site was built on Wix; this rebuild is a clean, fast, single-file static HTML site with zero dependencies — no framework, no build step required.

## ✨ Features

- **Mobile-first & fully responsive** — works on phones, tablets, and desktops
- **Animated hero section** with stats and action-oriented CTAs
- **Interactive Sessions tab panel** — ball handling, shooting, finishing, defence, conditioning
- **Program cards** — Private, Semi-Private, Group, Rep/Team
- **Coach Bio section** — JP Albano's full story and credentials
- **AAU Travel Team section** with achievements
- **3-on-3 program section**
- **Testimonials grid**
- **Contact form** with program selection
- **Scroll reveal animations** powered by Intersection Observer
- **Animated ticker** with program highlights
- **Social links** — Instagram, Facebook, X/Twitter
- **No dependencies** — pure HTML, CSS, and vanilla JS

## 🚀 Getting Started

Since this is a single HTML file, there's nothing to install.

### Option 1: Open locally

```bash
open index.html
```

Or just double-click `index.html` in Finder / Explorer.

### Option 2: Serve locally (recommended for development)

```bash
# Using Python
python3 -m http.server 8080

# Using Node
npx serve .
```

Then open `http://localhost:8080`

## 📦 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://yourusername.github.io/repo-name/`

## 🎨 Customization Guide

All visual settings live in CSS variables at the top of `index.html`:

```css
:root {
  --orange:  #F4600C;   /* primary accent */
  --orange2: #FF8C00;   /* hover state */
  --black:   #0A0A0A;   /* page background */
  --white:   #F5F0EB;   /* body text */
}
```

### Things to update before launch

| Item | Where |
|------|--------|
| Coach JP photo | Replace the placeholder in the "About" section with `<img src="your-photo.jpg" alt="JP Albano">` |
| Hero stats | Update the 10+, AAA, 8+ numbers if needed |
| Testimonials | Replace placeholder quotes with real parent/athlete testimonials |
| Registration form links | Already linked to existing JotForm forms |
| Session schedule/pricing | Add a Pricing section or link to the Sessions page |
| Google Analytics / Meta Pixel | Add tracking script just before `</body>` |

### Adding a real photo

Replace the `.about-img-placeholder` div inside `.about-img-box` with:

```html
<img src="images/jp-albano.jpg" alt="JP Albano — Head Trainer, The LAB Basketball" />
```

### Connecting the contact form

The form currently shows a browser alert on submit. To connect it to a real backend:

- **Formspree** (free, easy): `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- **JotForm embed**: Replace the form with an existing JotForm iframe
- **Netlify Forms**: Add `netlify` attribute to the form tag if hosting on Netlify

## 📁 File Structure

```
/
├── index.html          # Everything — HTML, CSS, JS in one file
├── README.md           # This file
└── images/             # Add your photos here (coach, facility, action shots)
    └── .gitkeep
```

## 🔗 Existing Links Preserved

- New player registration: https://form.jotform.com/70547649633263
- Returning player: https://form.jotform.com/72783097511158
- 3-on-3 registration: https://form.jotform.com/90083784167161
- Instagram: https://www.instagram.com/the_lab_basketball/
- Facebook: https://www.facebook.com/The-LAB-Basketball-Training-Development-1642338786062293/
- Twitter/X: https://twitter.com/The_LAB_Milton

## 📬 Contact

The LAB Basketball · 821 Main Street E, Milton ON L9T 3Z3  
📞 416-433-0408 · ✉️ info@thelabbasketball.com
