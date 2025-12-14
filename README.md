# BOB Home Care - Professional Cleaning Services Landing Page

A modern, bilingual (English/Arabic) landing page for Best of Bedz Home Care - Egypt's premier professional cleaning service provider.

## Features

- 🌐 **Bilingual Support**: Full English and Arabic translations with RTL layout
- 📱 **Fully Responsive**: Optimized for all devices
- ⚡ **Next.js 14**: Built with the latest App Router and TypeScript
- 🎨 **Tailwind CSS**: Modern, utility-first styling
- 📊 **Google Analytics**: Integrated GA4 tracking
- 🔍 **SEO Optimized**: Complete metadata, sitemap, and JSON-LD schema
- 💬 **WhatsApp Integration**: Direct booking via WhatsApp
- 🧮 **Pricing Calculator**: Interactive quote estimator

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HASSANBOB533/copilot-housekeeping.git
cd copilot-housekeeping
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from the example:
```bash
cp .env.example .env
```

4. Update the environment variables in `.env`:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_WHATSAPP_NUMBER=201000755755
NEXT_PUBLIC_SITE_URL=https://www.bobhomecare.com
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` configuration is already set up for optimal deployment.

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.next` folder and necessary files to your server
3. Run `npm start` to start the production server

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata and GA4
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt generation
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── WhyChooseUs.tsx     # Features and comparison
│   ├── Services.tsx        # Services with pricing tables
│   ├── PricingCalculator.tsx # Interactive calculator
│   ├── HowItWorks.tsx      # Process steps
│   ├── SpecialOffers.tsx   # Promotions
│   ├── Testimonials.tsx    # Client reviews
│   ├── ServiceAreas.tsx    # Coverage areas
│   ├── FAQ.tsx             # Accordion FAQ
│   ├── BookingForm.tsx     # Contact form
│   ├── Footer.tsx          # Footer with social links
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── LanguageToggle.tsx  # Language switcher
├── context/
│   └── LanguageContext.tsx # Language state management
├── lib/
│   ├── translations.ts     # EN/AR translations
│   ├── pricing.ts          # Pricing calculations
│   └── analytics.ts        # GA4 event tracking
├── public/
│   └── images/             # Static images (placeholder)
└── vercel.json             # Vercel configuration
```

## Services Offered

1. **Service Apartments** - Perfect for Airbnb and vacation rentals
2. **Deep Cleaning** - Comprehensive steam sanitization
3. **Move-In/Move-Out** - Fresh start cleaning
4. **Periodical Cleaning** - Regular maintenance packages
5. **Upholstery Cleaning** - Professional furniture care

## Service Areas

### Cairo
New Cairo (HQ), Maadi, Zamalek, Heliopolis, Sheikh Zayed, 6th of October, Nasr City, Rehab City, Katameya, Shorouk

### North Coast (NEW!)
New Alamein, Sidi Abdelrahman, Hacienda Bay, Marassi, Almaza Bay, Telal, Fouka Bay

## Contact

- **Phone/WhatsApp**: 01000755755
- **Email**: cs@bobhomecare.com
- **Website**: www.bobhomecare.com
- **Location**: Business Plus Complex, New Cairo, Egypt

## Social Media

- [Facebook](https://www.facebook.com/BestofBedzHomeCare/)
- [Instagram](https://www.instagram.com/bob_homecare/)
- [YouTube](https://www.youtube.com/@BOBHomeCare)
- [LinkedIn](https://www.linkedin.com/company/best-of-bedz/)

## License

© 2024 Best of Bedz Home Care. All rights reserved.
