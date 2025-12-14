# Brand Images

Place the following brand images in this directory:

## Required Images:

### 1. logo.png
- Official BOB Home Care logo
- Green background (#00875A) with white circular icon and yellow accent
- Recommended size: 200x200px
- Format: PNG with transparency

### 2. hero-bedroom.jpg
- Bedroom service image showing two team members in blue uniforms with green caps
- Use for: Hero section background, Service Apartments card
- Recommended size: 1920x1080px
- Format: JPG

### 3. team-photo.jpg
- Five team members with professional equipment (Kärcher vacuum, floor cleaner)
- Use for: About Us, Why Choose Us, Team section
- Recommended size: 1200x800px
- Format: JPG

### 4. steam-cleaning.jpg
- Professional steam sanitization on kitchen stovetop
- Use for: Deep Cleaning service, Kitchen add-on section
- Recommended size: 800x600px
- Format: JPG

## Usage in Code:

Once images are added, update the components to use them:

```tsx
import Image from 'next/image';

// Example usage in Hero component
<Image 
  src="/images/hero-bedroom.jpg" 
  alt="Professional cleaning service"
  fill
  priority
  className="object-cover"
/>
```

## Optimization:

Next.js automatically optimizes images when using the `next/image` component:
- Automatic lazy loading
- WebP conversion
- Responsive sizing
- Blur placeholder generation

No additional optimization needed!
