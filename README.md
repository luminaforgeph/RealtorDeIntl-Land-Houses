# RealtorDeIntl — Land & Houses

A quiet-luxury real estate website for discovering land, distinguished residences and commercial property opportunities in Port Harcourt, Nigeria.

## Technology

- Next.js 15 App Router and React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Zod request validation
- Next.js Image optimization
- Resend email delivery (optional configuration)

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Inquiry delivery

The contact form validates submissions on the server. To deliver enquiries, configure these environment variables:

- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL`
- `INQUIRY_FROM_EMAIL` (must be a sender/domain verified with Resend)
- `NEXT_PUBLIC_SITE_URL` (canonical production origin)

Until the email provider is configured, the API returns a clear service-unavailable response. It does not claim that an enquiry was delivered.

## Property content and imagery

The initial catalogue and photography are demonstration content. Replace the entries in `lib/properties.ts` with verified agency inventory, approved property images, accurate pricing, measurements, availability and legal particulars before launch. Do not represent the sample listings as active offers.

The site uses remote Unsplash photography for visual demonstration. Production listings should use client-approved, properly licensed images.

## Before production launch

- Confirm the agency's official address, telephone, email and social links.
- Replace all demonstration property content with verified listings.
- Add client-approved testimonials only after obtaining permission.
- Configure and test Resend sender credentials and recipient.
- Add request rate limiting / abuse protection to the inquiry endpoint.
- Set `NEXT_PUBLIC_SITE_URL` to the canonical domain.
- Run `npm run typecheck` and `npm run build`.
- Test mobile layouts, keyboard navigation and reduced-motion behavior.

## Project structure

- `app/` — routes, layouts, metadata and API handlers
- `components/` — reusable layout, property, contact and motion components
- `lib/` — listing data and validation
- `types/` — shared TypeScript models
- `public/` — local static assets
