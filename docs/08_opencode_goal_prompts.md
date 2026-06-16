# 08 OpenCode Goal Prompts

이 파일은 OpenCode에 순서대로 넣을 수 있는 `/goal` 프롬프트 모음입니다.

한 번에 모든 목표를 넣지 말고, Goal 1이 완료되면 실행 확인 후 Goal 2로 넘어가세요.

---

## Goal 1 - Project Bootstrap

```md
/goal Create the initial project structure for a Windows 11 live wallpaper web app named EarthLive Wallpaper.

Context:
- This is a Lively Wallpaper compatible web wallpaper MVP.
- Use TypeScript + Vite.
- The main app lives in apps/wallpaper-web.
- Do not create a backend.
- Do not add analytics, ads, telemetry, login, Firebase, or remote config.
- The app must be able to run without API keys.

Implement:
1. Create apps/wallpaper-web with Vite + TypeScript.
2. Add a clean folder structure:
   - src/app
   - src/renderer
   - src/solar
   - src/location
   - src/settings
   - src/weather
   - src/ui
   - src/styles
   - public
3. Add README instructions for npm install, npm run dev, npm run build.
4. Add a placeholder public/lively-info.json.
5. Add a minimal UI that displays "EarthLive Wallpaper" and app status.
6. Add TypeScript strict mode.

Acceptance criteria:
- npm install works.
- npm run dev starts the app.
- npm run build succeeds.
- No API key is required.
```

---

## Goal 2 - Cesium Globe MVP

```md
/goal Implement the first working 3D Earth globe renderer.

Context:
- Existing app is TypeScript + Vite under apps/wallpaper-web.
- Use CesiumJS for 3D Earth rendering.
- Keep rendering code isolated under src/renderer.
- The app must keep working even if Cesium assets fail to load.

Implement:
1. Install and configure CesiumJS for Vite.
2. Create CesiumGlobeRenderer.ts.
3. Render a 3D globe that fills the screen.
4. Add a slow optional auto-rotation.
5. Add a minimal star/deep-space background style.
6. Add an error fallback if WebGL or Cesium initialization fails.
7. Add a simple overlay panel showing renderer status.

Acceptance criteria:
- npm run dev shows a 3D globe.
- npm run build succeeds.
- If renderer initialization fails, the app shows a readable fallback instead of a blank screen.
```

---

## Goal 3 - Location and Settings

```md
/goal Add local-first location handling and settings.

Context:
- This app is a privacy-first live wallpaper.
- Do not send precise location to a custom backend.
- Location should work with browser Geolocation when available, and manual fallback when denied.
- Default fallback location is Seoul, South Korea.

Implement:
1. Create BrowserLocationProvider.ts.
2. Create ManualLocationProvider.ts.
3. Create LocationStore.ts using localStorage.
4. Add a small SettingsPanel where users can:
   - request automatic browser location
   - enter latitude
   - enter longitude
   - enter location label
   - reset to Seoul
5. Show current location on the overlay panel.
6. Add basic validation for latitude and longitude.
7. Make sure denied location permission does not break the app.

Acceptance criteria:
- Location permission accepted: app uses browser location.
- Location permission denied: app uses manual or fallback location.
- Manual location persists after refresh.
- No backend is introduced.
```

---

## Goal 4 - Solar Calculation and Info Panel

```md
/goal Add solar calculation for sunrise, sunset, solar altitude, and solar azimuth.

Context:
- The app needs to show sunlight information based on current time and selected location.
- Use SunCalc or a small internal solar calculation module.
- Keep solar logic under src/solar.
- The UI must remain simple and wallpaper-friendly.

Implement:
1. Create SolarPositionService.ts.
2. Create SunriseSunsetService.ts.
3. Compute:
   - sunrise time
   - sunset time
   - solar altitude
   - solar azimuth
4. Update the overlay panel to show:
   - location label
   - local time
   - sunrise
   - sunset
   - solar altitude
   - solar azimuth
5. Recalculate at a reasonable interval, not every frame.
6. Add unit tests if the project test setup is simple; otherwise add documented test cases.

Acceptance criteria:
- Seoul fallback shows sunrise/sunset and solar values.
- Values update over time.
- npm run build succeeds.
- App remains usable offline after initial assets load.
```

---

## Goal 5 - Day/Night Terminator Overlay

```md
/goal Implement a day/night terminator overlay on the Cesium globe.

Context:
- The core identity of the app is real-time day/night visualization.
- MVP accuracy should be visually plausible and structurally correct.
- Do not attempt building-level shadows.
- Keep terminator logic separated from UI and renderer initialization.

Implement:
1. Create DayNightTerminatorLayer.ts.
2. Compute a night-side polygon or equivalent Cesium entity using current UTC time.
3. Render a semi-transparent night overlay on the globe.
4. Update the overlay every 1 to 5 minutes.
5. Allow enabling/disabling the terminator layer from settings.
6. Keep the app performant and avoid recalculating every frame.

Acceptance criteria:
- A visible night region appears on the globe.
- The night region changes when time changes.
- Overlay can be toggled.
- App still builds successfully.
```

---

## Goal 6 - Lively Wallpaper Package

```md
/goal Package the app as a Lively Wallpaper compatible web wallpaper.

Context:
- The MVP should be installable in Lively Wallpaper as a local web wallpaper.
- Do not implement a custom Windows wallpaper engine.
- Keep the output simple and documented.

Implement:
1. Finalize public/lively-info.json.
2. Add placeholder thumbnail and preview files or document how to add them.
3. Add a script to build the wallpaper package.
4. Add docs/lively_installation.md with step-by-step instructions.
5. Ensure the dist output can be imported into Lively or zipped for import.
6. Include troubleshooting notes.

Acceptance criteria:
- npm run build creates a usable dist folder.
- Documentation explains how to register it in Lively.
- No custom native wallpaper engine is added.
```

---

## Goal 7 - Weather Provider Architecture

```md
/goal Add the provider architecture for future weather, cloud, radar, and typhoon layers without implementing full real-time data yet.

Context:
- Future providers may include NASA GIBS, JMA Himawari, KMA, Open-Meteo, and OpenWeatherMap.
- MVP should not depend on API keys.
- The provider architecture must support attribution and last update timestamps.
- Weather layers are visual reference only, not official safety alerts.

Implement:
1. Create WeatherLayerProvider interface.
2. Create WeatherLayerManager.
3. Create MockWeatherProvider with fake cloud/radar/typhoon metadata.
4. Add layer toggles in settings:
   - clouds
   - radar
   - typhoon track
5. Add attribution and last-updated display in overlay.
6. Add stale-data status support.
7. Add docs explaining provider safety and API-key policy.

Acceptance criteria:
- Weather layer toggles exist.
- Mock provider demonstrates the structure.
- No real provider API key is required.
- UI clearly marks mock/demo data.
```

---

## Goal 8 - NASA GIBS Prototype Layer

```md
/goal Prototype a NASA GIBS satellite/cloud layer provider behind the existing WeatherLayerProvider interface.

Context:
- Use official NASA GIBS access patterns only.
- Do not aggressively poll or bulk download tiles.
- Keep this layer optional and disabled by default if it is unstable.
- Display provider attribution and last update time.

Implement:
1. Create NasaGibsProvider.ts.
2. Add configuration for layer name, date/time, opacity, and refresh interval.
3. Add conservative caching behavior appropriate for browser cache.
4. Add error handling for tile loading failures.
5. Add documentation about provider limitations and update delays.
6. Make sure app works when NASA GIBS is unreachable.

Acceptance criteria:
- The layer can be enabled from settings.
- If data loads, it appears on the globe or is clearly represented as a prototype.
- If data fails, base globe continues working.
- No excessive polling or scraping behavior is introduced.
```

---

## Recommended Stopping Point

실제 출시 전 MVP로는 Goal 1-6까지만 완료해도 충분합니다.

Goal 7-8은 구조 검증용이며, 구름/태풍/레이더는 별도 단계로 천천히 추가하는 것이 안전합니다.

