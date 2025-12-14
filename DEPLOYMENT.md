# Deployment Guide - BOB Home Care Landing Page

## Pre-Deployment Checklist

### 1. Environment Variables

Create a `.env` file in the root directory (or configure in Vercel dashboard):

```env
# Google Analytics (optional but recommended)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# WhatsApp Contact Number
NEXT_PUBLIC_WHATSAPP_NUMBER=201000755755

# Site URL (for SEO)
NEXT_PUBLIC_SITE_URL=https://www.bobhomecare.com
```

### 2. Brand Images

Add the following images to `public/images/`:
- `logo.png` - BOB Home Care logo
- `hero-bedroom.jpg` - Hero section background
- `team-photo.jpg` - Team photo for about section
- `steam-cleaning.jpg` - Service images

See `public/images/README.md` for detailed specifications.

### 3. Google Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to your environment variables as `NEXT_PUBLIC_GA_ID`

### 4. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (the sitemap.xml is already configured)
4. Submit the sitemap: `https://www.bobhomecare.com/sitemap.xml`

---

## Vercel Deployment (Recommended)

### Quick Deploy

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub: `HASSANBOB533/copilot-housekeeping`

2. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

3. **Set Environment Variables**
   ```
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_WHATSAPP_NUMBER=201000755755
   NEXT_PUBLIC_SITE_URL=https://www.bobhomecare.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain**
   - Go to Project Settings → Domains
   - Add `www.bobhomecare.com`
   - Update DNS records as instructed
   - SSL certificate is automatically provisioned

### Automatic Deployments

Every push to the `main` branch will automatically deploy to production.

---

## Manual Deployment

### Using Node.js Server

1. **Build the Application**
   ```bash
   npm install
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```
   Server runs on port 3000 by default.

3. **Use PM2 for Process Management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "bob-homecare" -- start
   pm2 save
   pm2 startup
   ```

### Using Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t bob-homecare .
   docker run -p 3000:3000 \
     -e NEXT_PUBLIC_GA_ID=your-ga-id \
     -e NEXT_PUBLIC_WHATSAPP_NUMBER=201000755755 \
     -e NEXT_PUBLIC_SITE_URL=https://www.bobhomecare.com \
     bob-homecare
   ```

---

## Post-Deployment Steps

### 1. Test the Live Site

Visit your deployed URL and verify:
- [ ] All sections load correctly
- [ ] Language toggle (EN ↔ AR) works
- [ ] WhatsApp buttons open correct chat
- [ ] Pricing calculator functions properly
- [ ] Booking form submits to WhatsApp
- [ ] Mobile responsive design
- [ ] RTL layout for Arabic

### 2. SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible: `/robots.txt`
- [ ] Check structured data: Use [Schema Markup Validator](https://validator.schema.org/)
- [ ] Test Open Graph tags: Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### 3. Performance Testing

- [ ] Run [Lighthouse](https://pagespeed.web.dev/) audit
- [ ] Check mobile performance
- [ ] Verify image optimization
- [ ] Test Core Web Vitals

### 4. Analytics Setup

- [ ] Verify Google Analytics tracking
- [ ] Set up conversion goals
- [ ] Enable enhanced measurement
- [ ] Configure event tracking

---

## Monitoring & Maintenance

### Vercel Dashboard

Monitor:
- Deployment status
- Build logs
- Error tracking
- Analytics (if using Vercel Analytics)

### Google Analytics

Track:
- Page views
- User engagement
- Conversion events (booking clicks, WhatsApp clicks)
- Traffic sources

### Regular Updates

Update dependencies monthly:
```bash
npm update
npm audit fix
npm run build
```

---

## Troubleshooting

### Build Fails

**Error**: Module not found
- Solution: Run `npm install` to ensure all dependencies are installed

**Error**: Type errors
- Solution: Check TypeScript configuration in `tsconfig.json`

### Runtime Issues

**Language toggle doesn't work**
- Check browser console for JavaScript errors
- Verify localStorage is enabled

**WhatsApp doesn't open**
- Verify environment variable `NEXT_PUBLIC_WHATSAPP_NUMBER` is set
- Check if browser blocks popups

**Arabic text displays incorrectly**
- Ensure proper UTF-8 encoding
- Verify RTL styles are applied (`dir="rtl"` on html element)

---

## Support Contacts

- **Developer**: GitHub Issues on repository
- **Business**: cs@bobhomecare.com
- **Technical**: 01000755755

---

## Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Google Analytics Setup](https://support.google.com/analytics/answer/9304153)
- [Google Search Console Guide](https://support.google.com/webmasters/answer/9128668)
