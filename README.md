# Jhuma Jewellers — Update Juma

A separate Next.js 16.4.3 / React 19 / TypeScript website inspired by the reference image in the parent directory. The existing `juma-jewellery` project is unchanged.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For production: `npm run build` then `npm start`.

## Included

- Reference-inspired ivory, brown, gold and rose design with responsive layouts.
- Home, catalogue, four collections, original product detail pages, bridal, about, journal and three articles.
- Search, collection filtering, sorting, persistent browser wishlist and enquiry bag.
- Appointment, contact, jewellery care, FAQ, privacy and custom 404 pages.
- Original product and showroom photography copied from `../juma-jewellery/public/media`.
- Product names and descriptions retained from the original catalogue. Prices remain on enquiry.

## Before launching commercially

Appointment/contact requests and newsletter subscriptions are local demonstrations, clearly labelled in the interface. Connect a real delivery/storage service to receive submissions. No checkout, payment, authentication, shipping or inventory service is connected. Confirm product specifications, availability, policies and business contact details with the salon. Google Fonts requires an internet connection; local fallback fonts are provided.

## Checks

`npm run build` builds and type checks all routes. `npm run typecheck` checks TypeScript separately.
