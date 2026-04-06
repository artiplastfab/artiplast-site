# ArtıPlast Site

Premium corporate manufacturer website for ArtıPlast, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Highlights

- Multilingual route structure ready for `en`, `de`, `ar`, `bg`, and `az`
- Premium orange/white/black design system
- Sticky header, mobile menu, language switcher, and search overlay
- Home, Products, Product Detail, About, FAQ, and Contact pages
- Reusable product data model powering cards, detail pages, and search
- SEO basics with metadata, sitemap, and robots
- Placeholder media structure for future factory and product visuals

## Project Structure

```text
app/
  [locale]/
    about/page.tsx
    contact/page.tsx
    faq/page.tsx
    products/[slug]/page.tsx
    products/page.tsx
    layout.tsx
    page.tsx
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  ...
data/
  site.ts
lib/
  i18n.ts
  metadata.ts
  utils.ts
public/
  images/
    ...
proxy.ts
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

The root path redirects to `/en`. Other locale paths are available at `/de`, `/ar`, `/bg`, and `/az`.

## GitHub Push Steps

1. Initialize git if needed:

```bash
git init
git branch -M main
```

2. Add your GitHub remote:

```bash
git remote add origin https://github.com/YOUR-USERNAME/artiplast-site.git
```

3. Commit and push:

```bash
git add .
git commit -m "Build premium ArtıPlast manufacturer website"
git push -u origin main
```

## Vercel Deploy Steps

1. Push the repository to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click `Add New Project`.
4. Import the `artiplast-site` GitHub repository.
5. Keep the default framework detection for Next.js.
6. Click `Deploy`.

Optional CLI flow:

```bash
npm install -g vercel
vercel
```

## Cloudflare Domain + DNS Connection

1. Add your domain to Cloudflare if it is not already managed there.
2. In Vercel, open the project and add your production domain in `Settings -> Domains`.
3. Copy the DNS records Vercel provides.
4. In Cloudflare DNS, create the required records.
   Typical setup:
   - `A` record for apex domain pointing to Vercel's IP if requested
   - `CNAME` for `www` pointing to the Vercel target
5. Wait for DNS propagation and verify the domain inside Vercel.
6. Once verified, set SSL/TLS in Cloudflare to a compatible mode such as `Full`.

## Content and Expansion Notes

- English sample content is included now.
- Locale routing is ready for future translated dictionaries or CMS integration.
- Product data lives in `data/site.ts` so additional products can be added from one place.
- Placeholder media can be replaced by dropping in real product and factory imagery under `public/images`.
- The contact form is currently front-end only and should be connected to your preferred backend or email service later.
