# Decisions

## 1. Why this implementation over the obvious alternative?

React + Vite + Tailwind CSS was chosen because it gives fast local iteration, a component model that maps cleanly onto the section-by-section brief (navbar, hero, booking search, vehicle grid, etc.), and a utility-first styling approach that made it quick to keep spacing, type scale, and the neutral color system consistent across a dozen components without maintaining a separate stylesheet per component.

The bigger decision was building the product demonstration (booking search, vehicle grid, details modal, product showcase, trip planner) as real interactive React components with local state, rather than dropping in static screenshots or mockup images of a "product." Acdyon's core requirement is a section that *shows* the product, not just claims about it — a static image of a UI is still just a claim. Wiring up real `useState`-driven interactions (selecting a vehicle type and having the grid actually filter, opening a details modal, submitting the trip planner and getting a response) means a reviewer can click through an approximation of the real product experience in the browser, which is a fundamentally stronger demonstration than a picture of one.

## 2. Time-limit trade-off

Because of the limited challenge time, the implementation focuses on the homepage, vehicle browsing, booking interaction, and responsive behavior rather than building real authentication, payments, maps, or backend booking infrastructure. All vehicle data, availability, and pricing is static demo data in `src/data/vehicles.js`; "search," "select," and "continue" actions update local component state rather than calling any service.

With a full week, I would prioritize: automated accessibility testing (axe/Lighthouse) beyond the manual pass done here, image optimization (responsive `srcset`, self-hosted/optimized assets instead of remote Unsplash URLs), a real filtering/sort system with more demo inventory, richer booking states (multi-step flow, loading/empty/error states), and performance profiling for the animation-heavy sections.

## 3. AI usage

AI tools (Claude) were used throughout — for scaffolding the project, generating the initial component structure and Tailwind styling, drafting copy variations against the brief, and debugging issues like the local dev/preview tooling. I reviewed the generated code, ran the dev server to check each section against the brief, tested the interactive pieces (booking search filtering, vehicle modal, trip planner, mobile menu, easter egg) in the browser, checked layouts at multiple breakpoints, and adjusted spacing, copy, and structure where the first pass didn't match the intended design direction or the challenge requirements. Not everything here was manually hand-typed line by line, but every section was reviewed and verified rather than accepted as-is.
