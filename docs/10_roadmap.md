# 10 Roadmap

## Phase 0 - Design

- Finalize docs
- Decide project name
- Decide license for this project
- Confirm Lively package format

## Phase 1 - MVP Earth Wallpaper

Features:

- TypeScript + Vite app
- Cesium globe
- Location fallback
- Solar calculation
- Day/night overlay
- Lively package

Goal:

> A beautiful, working Earth day/night wallpaper.

## Phase 2 - Better Local Map Mode

Features:

- MapLibre GL JS 2D map mode
- Current location centered
- Optional vector/raster basemap provider
- Day/night overlay in local map
- Better settings UI

Goal:

> User can switch between globe mode and local map mode.

## Phase 3 - Cloud/Satellite Layer

Features:

- WeatherLayerProvider interface
- NASA GIBS layer prototype
- JMA Himawari candidate layer
- Refresh/staleness indicator
- Attribution UI

Goal:

> Earth feels alive with cloud/satellite visuals.

## Phase 4 - Korea Weather Mode

Features:

- KMA/Open-Meteo KMA forecast layer
- Korean location defaults
- Korean UI labels
- Rain/cloud summary
- Weather disclaimer

Goal:

> 한국 사용자에게 의미 있는 날씨 월페이퍼.

## Phase 5 - Typhoon Visualization

Features:

- Typhoon track provider
- GeoJSON line + points
- Forecast cone placeholder
- Time labels
- Intensity display
- Official warning disclaimer

Goal:

> 태풍 흐름을 월페이퍼에서 참고용으로 시각화.

## Phase 6 - Windows Desktop Shell

Features:

- WPF or WinUI 3 settings app
- WebView2 preview
- Lively setup helper
- Provider key management
- Export wallpaper package

Goal:

> 웹 월페이퍼를 일반 Windows 앱처럼 관리.

## Phase 7 - Native Wallpaper Engine Research

Only after the product proves useful.

Research:

- WorkerW/Progman embedding
- Multi-monitor behavior
- Fullscreen pause
- Battery pause
- GPU management
- Installer/update

Goal:

> Lively 없이도 독립 실행 가능한 버전 검토.

