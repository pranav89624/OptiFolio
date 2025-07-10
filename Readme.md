# DevFolio - Modern Developer Portfolio Template

A high-performance portfolio template built with Eleventy featuring:
- Perfect Lighthouse scores (100/100)
- Sleek dark theme with purple accents
- Mobile-first responsive design
- CSS-only animations and interactions
- Semantic HTML5 and accessible markup

## 🚀 Quick Start

```bash
# 1. Clone repository
git clone https://github.com/yourusername/devfolio.git
cd devfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

## 🏗 Project Structure
```
src/
├── _includes/
│   ├── layouts/
│   │   └── base.njk          # Main template
│   └── partials/             # Component library
│       ├── header.njk        # Navigation bar
│       ├── hero.njk          # Introduction section  
│       ├── skills.njk        # Skills matrix
│       ├── projects.njk      # Work showcase
│       ├── testimonials.njk  # Client feedback
│       ├── cta.njk           # Contact CTA
│       └── footer.njk        # Footer content
├── styles/
│   └── style.css             # Global stylesheet
├── index.njk                 # Homepage content
.eleventy.js                  # 11ty configuration
```

## 🎨 Customization Guide
### Personalize Content

```
<!-- src/_includes/partials/hero.njk -->
<h1 class="hero-title">Your Name Here</h1>
<p class="hero-subtitle">Your professional tagline</p>
```

### Modify Design
Edit CSS variables in src/styles/style.css:
```
:root {
  --color-primary: #6366f1;       /* Brand color */
  --color-dark: #0f172a;          /* Dark background */
  --color-light: #f8fafc;         /* Light text */
  --font-base: 'Inter', sans-serif;
  --font-mono: 'Space Mono', monospace;
}
```

### Add Projects
```
<!-- src/_includes/partials/projects.njk -->
<article class="project-card">
  <div class="project-image">
    <img src="/your-project.webp" alt="Project" loading="lazy">
  </div>
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Project description...</p>
    <ul class="project-tech">
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </div>
</article>
```

## ⚡ Performance Optimizations
```
Technique              	    Implementation Details

Critical CSS        	  Inlined in base template
Image Loading	          Native lazy loading with fallback
Font Handling	          Preloaded with crossorigin
JavaScript	          Only 2.6KB vanilla JS (menu/scroll)
Animations	          Hardware-accelerated CSS transforms
```

---
- 🛠 Built with Eleventy by [Pranav](https://github.com/pranav89624)
- 🎨 Designed for developers
- 📱 Fully responsive on all devices
