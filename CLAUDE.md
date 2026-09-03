# insight-forge

"The Insight Forge": gamifierad fantasy-quiz som lär ut CRO- och analysgrunder. Fem realms med
narrativ, runor, frågor, minispel och boss fights. Byggd i april 2026 för de 36 Hyper
Island-analytikerna. Slutskärmen teasar en storytelling-kurs. Live på Vercel, projekt
`insight-forge`, öppen (Basic Auth lades till och togs bort igen).

**README.md är oförändrad Vite-boilerplate och beskriver ingenting.** Läs inte den som källa.

## Stack och körning
Vite 8, React 19, TS 6, Tailwind 4, Zustand med persist-key `insight-forge-game` i localStorage.
```
npm run dev        # 5173
npm run build      # tsc -b && vite build
npm run lint
node qa-test.mjs   # Playwright-QA mot localhost:5173, otrackad, inte i package.json
```
Deploy: Vercel via git push till `Pochtli137/the-insight-forge`.

## Fällor
- `generate_illustrations.py` genererar 50 illustrationer via Gemini och letar API-nyckel i
  `../allears/.env` och `../school-digest/.env`, alltså grannkataloger utanför repot.
- Ocommittade ändringar ligger i `src/data/questions.ts` och `package.json`. Kolla `git status`
  före du bygger vidare.
- Insiktslöpet (`gg-insight-run`) är ett annat spel, det som visades på commercial monthly.
  Blanda inte ihop dem.
