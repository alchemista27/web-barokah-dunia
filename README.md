# PT Barokah Dunia Semesta - Web Site

A modern Next.js application for PT Barokah Dunia Semesta, an Indonesian exporter of premium rattan furniture and botanical products.

## Screenshots

<div align="center">
  <img src="docs/Screenshot%20from%202026-05-30%2021-47-50.png" width="800" alt="Home Page Screenshot">
  <img src="docs/Screenshot%20from%202026-05-30%2021-48-03.png" width="800" alt="Products Page Screenshot">
  <img src="docs/Screenshot%20from%202026-05-30%2021-48-50.png" width="800" alt="Contact Page Screenshot">
</div>

## Features

- 🎨 **Modern Design** - Elegant "Hotel Riviera" design system with custom typography and colors
- ⚡ **Performance** - Built with Next.js 14 for optimized loading and SEO
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🛍️ **Product Showcase** - Interactive product gallery with detailed specifications
- 📍 **Contact Integration** - Google Maps embed and WhatsApp direct messaging
- 🎯 **Component-Based** - Reusable React components with CSS Modules for styling

## Project Structure

```
├── app/
│   ├── page.tsx                    # Home page with hero, products, gallery
│   ├── about-us/
│   │   ├── page.tsx                # About page with company story
│   │   └── about.module.css
│   ├── contact-us/
│   │   ├── page.tsx                # Contact page with forms and map
│   │   └── contact.module.css
│   ├── our-products/
│   │   ├── page.tsx                # Products page with category tabs
│   │   └── products.module.css
│   ├── components/
│   │   ├── Navbar.tsx              # Navigation bar
│   │   ├── Navbar.module.css
│   │   ├── Footer.tsx              # Site footer
│   │   ├── Footer.module.css
│   │   ├── ProductModal.tsx        # Modal for product details
│   │   └── ProductModal.module.css
│   ├── lib/
│   │   └── data.ts                 # Centralized product data
│   ├── styles/
│   │   └── main.css                # Global design system & utilities
│   └── layout.tsx                  # Root layout with Navbar & Footer
├── public/
│   └── assets/                     # Product images and gallery
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Design System

**Colors** (CSS Custom Properties):
- Primary: `#162C3A` - Main brand color
- Secondary: `#7B8B97` - Supporting text
- Tertiary: `#C9A16A` - Accent color
- Neutral: `#F2ECE0` - Light backgrounds
- Surface: `#FBF7EC` - Card backgrounds

**Typography**:
- Display: Playfair Display (serif) - Headlines
- Body: Jost (sans-serif) - Body text

**Spacing Tokens**:
- `--sp-sm`: 8px
- `--sp-md`: 16px
- `--sp-lg`: 32px
- `--sp-xl`: 64px
- `--sp-2xl`: 96px

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Pages

### Home (`/`)
- Hero section with company tagline
- Statistics and key metrics
- Feature highlights
- Featured product showcase
- Gallery of products
- Certification section
- Call-to-action banner

### About Us (`/about-us`)
- Company story and history
- Mission and values
- Three pillars of the company
- Vision and mission statements
- Downloadable documents (company profile, catalogs)

### Our Products (`/our-products`)
- Category tabs (Rattan Furniture, Botanical Products)
- Product grid with detailed cards
- Product specifications modal
- Order call-to-action

### Contact Us (`/contact-us`)
- Contact information cards
- Google Maps integration
- Business hours table
- WhatsApp chat integration
- Direct contact links (email, phone, WhatsApp)

## Key Components

### Navbar
- Fixed positioning with scroll detection
- Mobile hamburger menu
- Active route highlighting
- WhatsApp CTA button

### Footer
- Three-column layout
- Quick navigation links
- Contact information
- Social links

### ProductModal
- Full product details display
- Specification table
- Product badge and image
- WhatsApp enquiry button
- Close functionality (Escape key)

### Product Data
Centralized in `app/lib/data.ts`:
- 5 featured products with specifications
- 6 gallery images
- Product categories and descriptions
- WhatsApp integration

## WhatsApp Integration

All pages include WhatsApp contact buttons that use:
- Phone: `+62 877-5928-2334`
- Auto-filled message templates for product enquiries

## Styling

This project uses:
- **CSS Modules** for component scoping
- **CSS Custom Properties (Variables)** for theming
- **Mobile-first responsive design**
- **Flexbox & CSS Grid** for layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- Mobile-first design
- Tablet: 768px and up
- Desktop: 1024px and up

## License

© 2024 PT Barokah Dunia Semesta. All rights reserved.

## Support

For issues or questions about the website, please contact our team through WhatsApp or email.
