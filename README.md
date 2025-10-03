# MedMap — Personal Medication Reconciliation

A modern, user-friendly landing website for the MedMap health informatics pilot project. Built with React, TypeScript, and Tailwind CSS.

## Project Overview

MedMap is a medication reconciliation platform that helps patients capture, verify, and share a single trusted medication list with healthcare providers. This website serves to explain the platform, recruit pilot participants, and provide resources for patients, clinicians, and researchers.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Multi-page Navigation**: Home, About, Features, How It Works, Pilot Signup, Resources, Contact
- **Resource Library**: Quick-start guides, FAQ, privacy documentation, and technical guides
- **Pilot Recruitment**: Built-in signup form with consent management
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML
- **Modern UI**: Clean clinical SaaS aesthetic with medical blue color palette

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui component library
- **Routing**: React Router v6
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/GITHUB_USERNAME_HERE/medmap-landing.git

# Navigate to project directory
cd medmap-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Go to your repository Settings > Pages
3. Set Source to "gh-pages" branch
4. Your site will be live at `https://GITHUB_USERNAME_HERE.github.io/medmap-landing/`

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Install gh-pages package
npm install -g gh-pages

# Deploy to GitHub Pages
gh-pages -d dist
```

## Form Integration

The Contact and Pilot Signup forms are currently set to mock endpoints. To integrate with a real backend:

### Using Netlify Forms

1. Deploy to Netlify (drag & drop the `dist` folder)
2. Add `netlify` attribute to form tags:
   ```tsx
   <form netlify onSubmit={handleSubmit}>
   ```

### Using Formspree

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update form action:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## Downloadable Resources

Place these files in the `public/resources-files/` directory:
- `QuickStart_MedMap.pdf` - Quick-start guide
- `sample_medmap_fhir_export.json` - Sample FHIR export

Update the download links in the respective resource pages.

## Customization

### Design System

All colors and design tokens are defined in:
- `src/index.css` - CSS variables and global styles
- `tailwind.config.ts` - Tailwind theme configuration

### Color Palette

- Primary Blue: `#0F6FD1` (hsl(208 88% 44%))
- Secondary Teal: `#0B90C6` (hsl(192 91% 40%))
- Accent Orange: `#FF8A00` (hsl(28 100% 51%))
- Background: `#F7FAFC` (hsl(210 40% 98%))
- Text: `#0B1B2B` (hsl(210 100% 6%))

## Project Structure

```
src/
├── assets/              # Images and static assets
├── components/          # Reusable components
│   ├── ui/             # shadcn/ui components
│   ├── home/           # Home page sections
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── FloatingContact.tsx
├── pages/              # Page components
│   ├── resources/      # Resource subpages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── PilotSignup.tsx
│   └── Contact.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main app component
```

## Contact Information

- **Email**: research@medmap.study
- **Location**: University of Toronto, Dalla Lana School of Public Health
- **Address**: 155 College St, Toronto, ON M5T 3M7

## License

This is a research project. Contact the development team for licensing information.

## Acknowledgments

Built as part of a Master's in Health Informatics pilot project in partnership with campus health services and participating community pharmacists.
