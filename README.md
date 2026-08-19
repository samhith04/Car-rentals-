# ROAM

**Your road. Your car. Your time.**

A responsive car-rental product homepage created for the **Acdyon Technologies Frontend Challenge (Part 2 — "The Premium Home Page")**.

> ROAM is a fictional product concept. It is not a real company, and no data on this site represents real inventory, bookings, or businesses.

## Features

- Responsive car-rental homepage with a premium, editorial visual style
- Interactive booking search (pickup location, dates, vehicle type)
- Vehicle browsing with filterable demo listings
- Vehicle details modal with a realistic booking-adjacent interaction
- A dedicated product showcase demonstrating the search-and-select experience
- Trip planner interaction with local frontend state
- Fully responsive layout, from 390px mobile up to large desktop
- One subtle easter egg

## Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

All vehicle and pricing data lives in [`src/data/vehicles.js`](src/data/vehicles.js) as local, static demo data — there is no backend, database, or external API involved.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    BookingSearch.jsx
    VehicleCard.jsx
    VehicleGrid.jsx
    VehicleDetails.jsx
    ProductShowcase.jsx
    HowItWorks.jsx
    Categories.jsx
    TripPlanner.jsx
    Features.jsx
    FinalCTA.jsx
    Footer.jsx
  data/
    vehicles.js
  App.jsx
  main.jsx
  index.css
```

## Notes

- Vehicle photography is sourced from Unsplash for demo purposes only.
- This project intentionally excludes authentication, payments, pricing plans, and any real booking processing — see [DECISIONS.md](DECISIONS.md) for scope rationale.
