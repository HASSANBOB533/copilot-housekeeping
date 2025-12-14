# Deployment Guide - Pricing Update v1.1.0

## Overview
This update includes corrected pricing for all 5 services, enhanced calculator functionality, and image integration preparation.

## Pre-Deployment Checklist

### 1. Upload Brand Images

Upload the following images to `/public/images/`:

#### Required Images:

**1. hero-bedroom.jpg**
- Description: Two BOB team members in blue uniforms with green caps arranging pillows on a bed
- Size: 1920x1080px
- Format: JPG
- Usage: Hero section full-width background

**2. logo.png**
- Description: Green background (#00875A) with white circular icon and yellow accent, text "Best of Bedz Home Care"
- Size: 200x200px  
- Format: PNG with transparency
- Usage: Header, Footer, Favicon

### 2. Enable Images in Code

Once images are uploaded, uncomment the following code:

**In `components/Hero.tsx` (around line 29):**
```tsx
// UNCOMMENT THIS:
<Image 
  src="/images/hero-bedroom.jpg" 
  alt="BOB team members arranging pillows on bed"
  fill
  priority
  className="object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-r from-primary-green/90 to-royal-blue/80" />
```

**In `components/Header.tsx` (around line 48):**
```tsx
// UNCOMMENT THIS:
<Image 
  src="/images/logo.png" 
  alt="Best of Bedz Home Care Logo"
  width={48}
  height={48}
  className="rounded-full"
/>
```

### 3. Verify Pricing Calculator

Test the following scenarios:

#### Service Apartments:
- [ ] Select Studio/1BR - verify 1,500 EGP base
- [ ] Add laundry - verify +400 EGP
- [ ] Enter garden size (e.g., 30 m²) - verify +150 EGP (30 × 5)
- [ ] Add upholstery items (e.g., 2 armchairs) - verify +500 EGP

#### Deep Cleaning:
- [ ] Enter 40 m² - verify 1,500 EGP minimum applies
- [ ] Enter 100 m² - verify 3,000 EGP (100 × 30)
- [ ] Add kitchen deep clean - verify +1,000 EGP
- [ ] Add garden 20 m² - verify +160 EGP (20 × 8)

#### Move-In/Move-Out:
- [ ] Normal, 30 m² - verify 2,000 EGP minimum applies
- [ ] Normal, 100 m² - verify 4,000 EGP (100 × 40)
- [ ] Heavy, 30 m² - verify 2,500 EGP minimum applies
- [ ] Heavy, 100 m² - verify 5,000 EGP (100 × 50)
- [ ] Verify "No add-ons available" message displays

#### Periodical Cleaning:
- [ ] Select 2BR - verify 1,200 EGP
- [ ] Add kitchen tools/oven clean - verify +250 EGP
- [ ] Add garden 50 m² - verify +150 EGP (50 × 3)

#### Upholstery Cleaning:
- [ ] Add 1 L-shape sofa - verify 1,500 EGP (minimum applies)
- [ ] Add 2 L-shape sofas - verify 2,000 EGP
- [ ] Add various items totaling 1,200 - verify 1,500 EGP (minimum applies)

### 4. Language Testing

Switch to Arabic and verify:
- [ ] All new pricing displays correctly
- [ ] "السعر عند الطلب" shows for Hospitality Items
- [ ] "بناء عادي" / "بناء ثقيل" display correctly
- [ ] All upholstery items show Arabic translations
- [ ] Calculator placeholders show Arabic text
- [ ] Minimum warnings show in Arabic

### 5. Mobile Testing

Test on mobile devices (or browser dev tools):
- [ ] Pricing calculator scrolls properly
- [ ] Upholstery item list is scrollable
- [ ] Garden size inputs work correctly
- [ ] All pricing tables are responsive
- [ ] Services section tabs work on mobile

## Deployment Steps

### Option 1: Vercel (Recommended)

1. Ensure all images are uploaded to `/public/images/`
2. Uncomment image code in Hero.tsx and Header.tsx
3. Commit changes:
   ```bash
   git add components/Hero.tsx components/Header.tsx public/images/
   git commit -m "Enable hero image and logo"
   git push
   ```
4. Vercel will auto-deploy from the push

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Test the build locally:
   ```bash
   npm start
   ```
3. Upload the following to your server:
   - `.next/` directory
   - `public/` directory (with new images)
   - `package.json`
   - `next.config.ts`
4. Install dependencies on server:
   ```bash
   npm install --production
   ```
5. Start the server:
   ```bash
   npm start
   ```

## Post-Deployment Verification

### Critical Checks:
- [ ] Hero section displays with new bedroom image
- [ ] Logo displays in header
- [ ] All 5 service pricing displays correctly
- [ ] Pricing calculator works for all services
- [ ] Minimum order warnings show appropriately
- [ ] Upholstery item selection works
- [ ] Garden/Terrace custom inputs work
- [ ] Both English and Arabic work correctly
- [ ] WhatsApp integration still works
- [ ] Mobile responsive layout works

### Analytics Verification:
- [ ] Google Analytics tracking still works
- [ ] Quote requests track correctly
- [ ] WhatsApp clicks track correctly

## Rollback Plan

If issues occur, rollback to previous version:

```bash
git revert HEAD~4..HEAD
git push
```

This reverts the last 4 commits (pricing updates, image integration, code improvements, changelog).

## Support

If you encounter issues:

1. Check browser console for errors
2. Verify all images are uploaded correctly
3. Confirm image paths match exactly: `/images/hero-bedroom.jpg` and `/images/logo.png`
4. Test calculator with various inputs
5. Clear browser cache and test again

## Migration Summary

### Pricing Changes Impact:
- **Deep Cleaning**: 50% reduction in minimum order (3,000 → 1,500 EGP) - May increase conversions
- **Move-In/Move-Out**: 60% reduction in minimums - More accessible to smaller properties
- **Service Apartments**: 25% increase in base prices - Better reflects service value
- **Periodical Cleaning**: 20% average increase - Covers increased operational costs
- **Upholstery**: New transparent per-item pricing - Clearer for customers

### Customer Communication:
Consider notifying existing customers of pricing changes via:
- Email announcement
- Social media posts
- WhatsApp status update
- Website banner (temporary)

## Success Metrics

Track these after deployment:
- Quote request volume (should increase with lower minimums)
- Average order value
- Service type distribution
- Calculator usage rate
- Bounce rate on pricing page
- Time spent on services section

---

**Deployment Date**: _________________

**Deployed By**: _________________

**Verification Completed**: ☐ Yes ☐ No

**Issues Found**: _________________

**Resolution**: _________________
