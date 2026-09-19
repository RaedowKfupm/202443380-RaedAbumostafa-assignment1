# Technical Documentation

## Overview

This project is a static, single-page portfolio built with HTML, CSS, and vanilla JavaScript. It has no backend and no build pipeline, which keeps the site easy to inspect, run, and deploy as static files.

## Architecture

- `index.html` owns the semantic page structure and content.
- `css/styles.css` owns the visual system, layout, responsive rules, and image presentation.
- `js/script.js` adds progressive enhancement for navigation and form behavior.
- `assets/images` contains the locally hosted profile and project images.
- `docs` contains project-maintenance and development-process documentation.

The page is organized into a header with the About hero, followed by Projects, Skills, and Contact sections. Navigation links use section IDs for simple, reliable in-page routing.

## Design and Layout

The visual direction uses a paper, ink, rust, and sand palette with strong editorial typography. CSS custom properties in `:root` keep colors, spacing, shadows, and container sizing consistent.

The main layouts use CSS Grid. The hero places introductory copy beside the profile image, the project section uses a two-card grid, and the contact section places the copy beside the form. Cards and controls use stable spacing and responsive constraints to prevent content from changing the layout unexpectedly.

Images use explicit `width` and `height` attributes, `loading="lazy"` where appropriate, and `object-position` for the WiFi project image so its important subject remains visible in its card crop.

## Responsive Behavior

The layout changes at two primary breakpoints:

- Below `62rem`, multi-column skills and contact layouts become single-column layouts.
- Below `46rem`, the navigation becomes a toggleable menu and grids collapse to one column.
- Below `35rem`, form actions stack vertically and secondary image-caption details are reduced.

Fluid `clamp()` values control typography, gutters, and section spacing between breakpoints. The contact headline uses explicit spans for intentional line breaks and a width constraint that prevents text from overlapping the form.

## JavaScript Behavior

The script is defensive: each feature checks whether its expected elements exist before attaching behavior.

1. The footer year is populated from the current date.
2. The mobile navigation toggles the menu and keeps `aria-expanded` synchronized.
3. Scrolling updates `aria-current` on the navigation link for the section currently in view.
4. The contact form trims input, checks minimum lengths, validates email format, sets `aria-invalid`, and writes messages into dedicated error elements.
5. A valid form submission displays a demo status and resets the fields; no request is sent.

## Accessibility

The page includes semantic landmarks, one clear `h1`, labelled sections, descriptive image `alt` text, form labels, a skip link, visible keyboard focus styles, `aria-current`, `aria-expanded`, `aria-invalid`, and a live status region. Decorative text and project indexes are hidden from screen readers where appropriate.

## Performance and Maintainability

The site has no runtime dependencies or bundler overhead. Local assets avoid an external image request, deferred JavaScript prevents it from blocking initial HTML parsing, and lazy loading is used for below-the-fold project images. The code is split by responsibility and uses descriptive class names so future edits can remain localized.

## Testing Notes

The page should be checked in a desktop and mobile browser viewport. Verify navigation links, the mobile menu, project detail disclosure, keyboard focus, and both invalid and valid contact-form states. A static server such as `python -m http.server 8000` is sufficient for local testing.

## Limitations and Future Work

The contact form is a front-end demonstration and requires a trusted backend or form service before production use. Future improvements could add project links, automated accessibility testing, optimized image formats, a content-management workflow, and a real submission endpoint with spam protection.
