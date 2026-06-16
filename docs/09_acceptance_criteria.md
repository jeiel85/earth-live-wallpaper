# 09 Acceptance Criteria

## Global Acceptance

- Project builds without API keys.
- No backend server is required for MVP.
- No analytics, ads, tracking, login, or Firebase is added.
- The app can be run locally in a browser.
- The app can be built as static files.
- The built output can be registered with Lively Wallpaper.
- A user can set location manually.
- The app does not crash when location permission is denied.
- The app does not crash when network is offline.
- The app does not show a blank screen when WebGL fails.

## Functional Acceptance

### Globe

- The globe fills the screen.
- The globe is visually acceptable as a wallpaper.
- The camera starts from a useful default view.
- Optional auto-rotation works.

### Location

- Default Seoul fallback works.
- Manual latitude/longitude input works.
- Saved location persists across refresh.
- Invalid coordinates are rejected.

### Solar

- Sunrise and sunset are displayed.
- Solar altitude and azimuth are displayed.
- Values update periodically.

### Terminator

- Night overlay is visible.
- Night overlay updates over time.
- Overlay can be toggled.
- No excessive frame-by-frame recalculation.

### Lively

- Build output includes metadata.
- README includes Lively setup instructions.
- Wallpaper does not require a native installer.

## Performance Acceptance

- CPU/GPU usage should be reasonable for a wallpaper.
- Rendering should target 30 FPS or lower in wallpaper mode.
- Solar calculations should not run every frame.
- Weather provider polling should be conservative.
- The app should have low-power mode.

## Privacy Acceptance

- No precise location is sent to a custom server.
- Location is stored locally.
- User can clear or change location.
- Weather provider calls are only made when layer is enabled.
- API keys are not committed.

## Documentation Acceptance

- README exists.
- AGENTS.md exists.
- OpenCode goal prompts exist.
- Data source and license risks are documented.
- Weather safety disclaimer exists.

