# AGENTS.md

## Project

EarthLive Wallpaper is a Windows 11 live wallpaper project focused on a real-time Earth, location-aware sunlight visualization, and optional weather/satellite overlays.

## Development Style

Use incremental implementation. Do not implement all future features at once. Finish the MVP first.

## Priority Order

1. Working web wallpaper MVP
2. Reliable 3D Earth rendering
3. Location input and fallback behavior
4. Day/night terminator overlay
5. Lively Wallpaper packaging metadata
6. Weather/satellite provider abstraction
7. Optional Windows settings shell

## Technical Stack

Preferred MVP stack:

- TypeScript
- Vite
- CesiumJS
- SunCalc or internal solar calculation module
- Optional MapLibre GL JS for 2D mode
- Local JSON settings
- Lively Wallpaper web wallpaper format

Do not introduce a backend server for the MVP.

## Privacy Requirements

- Do not send precise user location to any custom backend.
- Do not add analytics, tracking, telemetry, ads, Firebase, or remote config.
- Store location settings locally.
- Make automatic location optional.
- Provide manual latitude/longitude and city name fallback.

## API and Data Requirements

- API keys must never be hard-coded.
- Use `.env.local` or local settings for optional provider keys.
- The app must run in demo mode without API keys.
- Any map, weather, or satellite layer must clearly show provider name and last update time where available.
- Do not scrape Google Earth, Google Maps, or other proprietary imagery.
- Do not bulk-download OpenStreetMap tiles.
- Do not use OpenStreetMap public raster tile servers as a heavy default wallpaper data source.

## Rendering Requirements

- Prefer 30 FPS cap or lower for wallpaper mode.
- Provide low-power mode.
- Pause or reduce update frequency when wallpaper is not visible if host APIs allow it.
- Avoid constant network polling.
- Default satellite/weather refresh intervals must be conservative.

## Code Quality

- Keep modules small and explicit.
- Separate rendering, data providers, location, settings, and UI overlay.
- Add defensive error handling for network and WebGL failures.
- Add README instructions for local dev and Lively installation.
- Avoid overengineering before MVP is visible.

## Do Not Implement in MVP

- Native wallpaper engine
- Google Earth integration
- Building-level shadows
- Full radar product ingestion
- Real-time typhoon warnings
- Account login
- Cloud sync
- Ads or analytics

