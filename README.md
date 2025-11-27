# Rick and Morty Fan Panel

Lightweight React + Vite panel for browsing key Rick and Morty characters. Minimal dependencies, loader-based routing, and a clear structure.

- React 19, TypeScript, Vite 7, hash router for static hosting.
- Tailwind 4 (Vite plugin) for layout; the rest is plain JSX without extra component kits.
- Typed Rick and Morty API client (`src/lib/rick-and-morty-api-client`) plus a tiny processor for picking top N characters.
- `ConfigProvider` exposes the app version from `package.json` (`__APP_VERSION__` injected by Vite).

## What’s inside
- Top 5 characters list (`/`) with name, avatar, and link.
- Character details (`/#/character/:id`) pulled from the API.
- Data fetched via router loaders (`fetchCharacters`, `fetchCharacter`) and consumed with `useLoaderData`.

## Run it
1. `pnpm install`
2. `pnpm dev` then open `http://localhost:3000`
3. Production build: `pnpm build` + preview: `pnpm preview`

## Tests
- Unit: `pnpm test` (Vitest).
- E2E: `pnpm test:e2e` (Playwright). Config in `playwright.config.ts`, baseURL defaults to `http://localhost:3000` (webServer starts automatically).
- E2E scenarios live in `tests/e2e/tests`, page objects in `tests/e2e/pages`.

## Structure
- `src/pages` – list and detail views.
- `src/loaders` – router loaders (fetch data before render).
- `src/lib/rick-and-morty-api-client` – generated OpenAPI client.
- `src/context` – small app version context.

## Next ideas
- Add pagination/filters instead of stopping at top 5.
- Replace placeholder styles in `src/index.css` with something aligned to Tailwind 4.
- Add quick Vitest coverage for processors/utils.
