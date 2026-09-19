# Raed Abumostafa Portfolio

A responsive personal portfolio for Raed Abumostafa, a software engineering student focused on backend engineering and applied artificial intelligence. The site presents selected projects, technical skills, and a client-side contact form.

## Features

- Responsive single-page layout for desktop, tablet, and mobile screens
- Semantic sections for About, Projects, Skills, and Contact
- Mobile navigation toggle with accessible `aria-expanded` state
- Active navigation link based on the section currently in view
- Project cards with real portfolio images and expandable project details
- Client-side contact form validation for name, email, and message fields
- Keyboard focus styles and a skip link for improved accessibility
- No backend, build step, or external data service required

## Technologies

- HTML5 for semantic page structure
- CSS3 for layout, responsive behavior, custom properties, typography, and image framing
- Vanilla JavaScript for navigation, scroll state, and form validation
- Local image assets stored under `assets/images`

## Project Structure

```text
.
├── assets/
│   └── images/
│       ├── profile/
│       └── projects/
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── index.html
└── README.md
```

## Run Locally

No installation is required. Open `index.html` directly in a browser, or use a local static server from the project folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

## Contact Form

The contact form is intentionally a demonstration. JavaScript validates the fields in the browser, displays accessible error messages, and resets the form after valid input. It does not send or store personal information because this project has no backend.

## Documentation

- [Technical documentation](docs/technical-documentation.md) explains the architecture, styling, responsiveness, accessibility, and limitations.
- [AI usage report](docs/ai-usage-report.md) records how AI assistance was used, reviewed, and adapted during development.

## Limitations

- The contact form does not deliver messages.
- Project content and images are static.
- The page uses system-available font fallbacks and does not bundle a webfont.