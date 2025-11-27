# Rick and Morty Fan Panel

Lekki panel w React + Vite do przeglądania najważniejszych postaci z Rick and Morty. Kod jest prosty i trzyma się mojego minimalnego stylu: niewiele zależności, routing oparty o loadery i jasna struktura.

- React 19, TypeScript, Vite 7, hash router na potrzeby statycznego hostingu.
- Tailwind 4 (plugin pod Vite) do layoutu; reszta to czysty JSX bez zbędnych komponentów.
- Typowany klient do API Rick and Morty (`src/lib/rick-and-morty-api-client`) + mały processor do wyciągania top N postaci.
- Kontekst `ConfigProvider` podaje wersję z `package.json` (`__APP_VERSION__` wstrzykiwane z Vite).

## Co tu zobaczysz
- Lista 5 top postaci (`/`) z nazwą, avatarem i linkiem.
- Szczegóły postaci (`/#/character/:id`) z danymi z API.
- Dane ściągane przez loadery routera (`fetchCharacters`, `fetchCharacter`) i przekazywane dalej przez `useLoaderData`.

## Jak uruchomić
1. `pnpm install`
2. `pnpm dev` i wchodzisz na `http://localhost:3000`
3. Build produkcyjny: `pnpm build` + podgląd: `pnpm preview`

## Testy
- Jednostkowe: `pnpm test` (Vitest).
- E2E: `pnpm test:e2e` (Playwright). Konfig pod `playwright.config.ts`, baseURL domyślnie `http://localhost:3000` (webServer wstaje sam).
- Scenariusze e2e siedzą w `tests/e2e/tests`, a page objecty w `tests/e2e/pages`.

## Struktura
- `src/pages` – widoki listy i szczegółu.
- `src/loaders` – loadery routera (pobierają dane przed renderem).
- `src/lib/rick-and-morty-api-client` – generowany klient OpenAPI.
- `src/context` – drobny kontekst z wersją aplikacji.

## Dalsze pomysły
- Dorzucić paginację/filtry, żeby nie kończyć na top 5.
- Podmienić placeholderowe style z `src/index.css` na coś spójnego z Tailwind 4.
- Napisać szybkie testy Vitest dla processorów/utili.
