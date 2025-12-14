# Changelog

## [1.1.0] - 2024-12-14

### Updated Pricing Structure

#### Service Apartments (Airbnb/Holiday Homes)
**Base Pricing:**
- Studio/1BR: 1,500 EGP (was 1,200)
- 2 Bedrooms: 2,000 EGP (was 1,500)
- 3 Bedrooms: 2,500 EGP (was 2,000)
- 4 Bedrooms: 3,000 EGP (was 2,500)
- 5 Bedrooms: 4,000 EGP (was 3,000)
- 6 Bedrooms: 5,000 EGP (was 3,500)

**Laundry Add-ons:**
- Studio/1BR: +400 EGP (was +250)
- 2 Bedrooms: +600 EGP (was +350)
- 3 Bedrooms: +800 EGP (was +500)
- 4 Bedrooms: +1,000 EGP (was +750)
- 5 Bedrooms: +1,200 EGP (was +1,000)
- 6 Bedrooms: +1,500 EGP (was +1,250)

**New Add-ons:**
- Garden/Terrace: 5 EGP/m² (custom size input)
- Hospitality Items: Price on Request
- Upholstery items (chairs, sofas, mattresses)

#### Deep Cleaning
- Rate: 30 EGP/m² (was 35 EGP/m²)
- Minimum: 1,500 EGP / 50 m² (was 3,000 EGP)
- Kitchen Deep Clean: +1,000 EGP (was 1,500-3,000 EGP)
- Garden/Terrace: 8 EGP/m² (NEW)
- Upholstery add-ons (NEW)

#### Move-In/Move-Out
**Normal Construction:**
- Rate: 40 EGP/m² (was 50 EGP/m²)
- Minimum: 2,000 EGP / 50 m² (was 5,000 EGP)

**Heavy Construction:**
- Rate: 50 EGP/m² (was 65 EGP/m²)
- Minimum: 2,500 EGP / 50 m² (was 6,500 EGP)

#### Periodical Cleaning
**Per-Visit Pricing:**
- Studio/1BR: 800 EGP (unchanged)
- 2 Bedrooms: 1,200 EGP (was 1,000)
- 3 Bedrooms: 1,500 EGP (was 1,300)
- 4 Bedrooms: 2,000 EGP (was 1,600)
- 5 Bedrooms: 2,500 EGP (was 1,800)
- 6 Bedrooms: 3,000 EGP (was 2,000)

**New Add-ons:**
- Kitchen Tools/Oven Deep Clean: +250 EGP
- Garden/Terrace: 3 EGP/m²
- Upholstery items

#### Upholstery Cleaning
**New Per-Item Pricing:**
- Minimum order: 1,500 EGP
- Armchair/Salon chair: 250 EGP
- Single-seat sofa chair: 350 EGP
- 2-seater sofa: 400 EGP
- 3-seater sofa: 600 EGP
- 4-seater sofa: 800 EGP
- L-shape sofa: 1,000 EGP
- Sectional sofa: 1,200 EGP
- Small mattress: 400 EGP
- Large mattress: 600 EGP

### Added Features

#### Enhanced Pricing Calculator
- Custom m² input fields for property size
- Garden/Terrace size inputs for all applicable services
- Upholstery item selection with quantity controls
- Minimum order warnings for Deep Cleaning, Move-In/Out, and Upholstery
- Real-time price calculation with all add-ons

#### New Translations
- Arabic translations for all new pricing items
- "Price on Request" / "السعر عند الطلب"
- "Heavy Construction" / "بناء ثقيل"
- "Normal Construction" / "بناء عادي"
- "Kitchen Tools/Oven Deep Clean" / "تنظيف عميق لأدوات المطبخ والفرن"
- All upholstery item names in Arabic

#### Image Integration
- Added placeholder structure for hero bedroom image
- Added placeholder for official logo
- Documentation in `/public/images/README.md` for image requirements

### Technical Improvements

#### Code Quality
- Removed duplicate code in pricing.ts (upholsteryItems)
- Added translation keys for all placeholder text
- Improved type safety in calculator component
- Consistent use of pricing constants throughout codebase

#### Files Modified
- `lib/pricing.ts` - Updated pricing data and calculation logic
- `lib/translations.ts` - Added new English and Arabic translations
- `components/Services.tsx` - Updated service cards with new pricing
- `components/PricingCalculator.tsx` - Enhanced with custom inputs and upholstery selection
- `components/Hero.tsx` - Added hero image integration points
- `components/Header.tsx` - Added logo integration points

### Migration Notes

#### For Deployment
1. Upload brand images to `/public/images/`:
   - `hero-bedroom.jpg` (1920x1080px) - Hero section background
   - `logo.png` (200x200px) - Official BOB logo

2. Uncomment image components in:
   - `components/Hero.tsx` (lines with Image component)
   - `components/Header.tsx` (lines with Image component)

3. Test all pricing calculations with various input combinations

4. Verify all translations display correctly in both English and Arabic

### Breaking Changes
None - All changes are backward compatible with existing functionality.

### Security
- No vulnerabilities found in CodeQL security scan
- All dependencies up to date
