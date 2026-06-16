# EarthLive Wallpaper — Web App

A Windows 11 live wallpaper web app that renders a real-time 3D Earth with location-aware sunlight visualization.

> Built for [Lively Wallpaper](https://rocksdanister.github.io/lively/) Web Wallpaper format.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm 9+

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The dev server starts at `http://localhost:5173` by default.

## Project Structure

```
apps/wallpaper-web/
├── public/
│   └── lively-info.json      # Lively Wallpaper manifest
├── src/
│   ├── app/                  # Application bootstrap and state
│   ├── renderer/             # 3D Earth / 2D map rendering
│   ├── solar/                # Solar position and terminator calculations
│   ├── location/             # User location detection and management
│   ├── settings/             # Local configuration
│   ├── weather/              # Weather and satellite overlay providers
│   ├── ui/                   # UI components
│   └── styles/               # Global styles
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Lively Wallpaper Installation

1. Run `npm run build` to generate the `dist/` folder.
2. In Lively Wallpaper, click **Add Wallpaper** → **Browse local file**.
3. Select `apps/wallpaper-web/index.html` or the `dist/index.html`.

## Demo Mode

The app runs in demo mode without any API keys. Optional weather/satellite overlays require provider-specific keys configured via local settings — never hard-coded.

## License

MIT
