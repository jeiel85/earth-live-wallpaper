# EarthLive Wallpaper

> Real-time 3D Earth live wallpaper for Windows 11. Location-aware sunlight visualization with optional weather and satellite overlays.

Built as a _Lively Wallpaper_ compatible Web Wallpaper. No backend server required. Runs entirely in the browser.

## Features

- **3D Earth globe** — Powered by CesiumJS, full-screen with smooth auto-rotation
- **Privacy-first** — Location is stored locally. No data sent to any custom backend
- **No API keys required** — Demo mode works out of the box
- **Lively Wallpaper compatible** — Registers as a Web Wallpaper via `lively-info.json`

### Roadmap

- [x] 3D Earth globe rendering
- [ ] Location input (auto-detect + manual lat/lng fallback)
- [ ] Day/night terminator overlay
- [ ] Sunrise/sunset display
- [ ] Optional weather & satellite overlays

## Getting Started

```bash
# Install dependencies
cd apps/wallpaper-web
npm install

# Start development
npm run dev

# Build for production
npm run build
```

The dev server starts at `http://localhost:5173`.

## Lively Wallpaper Installation

1. Run `npm run build` inside `apps/wallpaper-web/`.
2. Open **Lively Wallpaper** → **Add Wallpaper** → **Browse local file**.
3. Select `apps/wallpaper-web/dist/index.html`.

## Tech Stack

| Layer | Technology |
|---|---|
| Rendering | CesiumJS |
| Build | TypeScript + Vite |
| Platform | Lively Wallpaper (Web Wallpaper) |
| Target OS | Windows 11 |

## Project Structure

```
apps/wallpaper-web/     → Wallpaper web application
├── src/renderer/       → CesiumJS 3D globe rendering
├── src/solar/          → Solar / terminator calculations
├── src/location/       → Location provider (auto + manual)
├── src/settings/       → Local configuration
├── src/weather/        → Weather overlay providers
├── src/ui/             → Overlay UI components
└── src/styles/         → Global styles
docs/                   → Design documentation
```

## Design Docs

Design decisions and architecture are documented in the [`docs/`](./docs/) folder:

- [Product Specification](./docs/01_product_spec.md)
- [Architecture](./docs/02_architecture.md)
- [MVP Scope](./docs/03_mvp_scope.md)
- [Rendering Design](./docs/05_rendering_design.md)
- [Location & Privacy](./docs/06_location_privacy_design.md)
- [Lively Integration](./docs/07_lively_wallpaper_integration.md)

## License

MIT
