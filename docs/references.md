# References

These references were used to shape the technical strategy. Verify current terms before release.

## Lively Wallpaper

- GitHub repository: https://github.com/rocksdanister/lively
- Notes:
  - Free and open-source Windows live wallpaper application.
  - Supports webpage wallpapers.
  - Repository states GPL-3.0 license.
  - README states Windows 11 design using WinUI 3 + Windows App SDK.

## Microsoft WebView2

- Official documentation: https://learn.microsoft.com/en-us/microsoft-edge/webview2/
- Notes:
  - WebView2 embeds HTML, CSS, and JavaScript in native Windows apps.
  - Useful for a future Windows settings shell.

## CesiumJS

- Official page: https://cesium.com/platform/cesiumjs/
- GitHub repository: https://github.com/CesiumGS/cesium
- Notes:
  - Open-source JavaScript library for 3D globes and 2D maps.
  - Uses WebGL.

## MapLibre GL JS

- Official page: https://maplibre.org/
- Documentation: https://www.maplibre.org/maplibre-gl-js/docs/
- Notes:
  - Open-source TypeScript library for web maps.
  - Uses WebGL/GPU-accelerated rendering.

## NASA GIBS

- API docs: https://nasa-gibs.github.io/gibs-api-docs/access-basics/
- NASA Open APIs page: https://api.nasa.gov/
- Notes:
  - Provides satellite imagery products.
  - Supports WMS/WMTS/TWMS/XYZ style access patterns depending on product and endpoint.
  - Near-real-time data may still have processing delay.

## Japan Meteorological Agency Himawari

- Himawari real-time image: https://www.data.jma.go.jp/mscweb/data/himawari/
- Notes:
  - Candidate source for East Asia / Pacific satellite imagery.
  - Usage terms must be checked before integration.

## Korea Meteorological Administration

- KMA English site: https://www.kma.go.kr/neng/
- Notes:
  - Candidate source for Korean weather, radar, satellite, typhoon-related data.
  - API and image usage terms must be checked before integration.

## OpenWeatherMap

- Weather APIs: https://openweathermap.org/api
- Weather Maps: https://openweathermap.org/api/weathermaps
- Notes:
  - Candidate weather tile provider.
  - API key and pricing/usage rules may apply.

## Open-Meteo KMA API

- KMA API docs: https://open-meteo.com/en/docs/kma-api
- Notes:
  - Candidate forecast API for Korea-oriented weather data.

## OpenStreetMap Tile Usage Policy

- Policy: https://operations.osmfoundation.org/policies/tiles/
- Notes:
  - OSM data is free to use, but OSM Foundation public tile servers are not an unlimited CDN.
  - Avoid bulk download, prefetch, and heavy wallpaper-style use against public OSM tile servers.

