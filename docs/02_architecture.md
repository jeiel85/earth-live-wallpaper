# 02 Architecture

## Recommended Architecture

MVP는 다음 구조를 사용한다.

```txt
earth-live-wallpaper/
  apps/
    wallpaper-web/
      public/
        lively-info.json
      src/
        main.ts
        app/
          App.ts
          AppState.ts
        renderer/
          CesiumGlobeRenderer.ts
          DayNightTerminatorLayer.ts
          LocationPinLayer.ts
          CameraController.ts
        solar/
          SolarPositionService.ts
          SunriseSunsetService.ts
        location/
          BrowserLocationProvider.ts
          ManualLocationProvider.ts
          LocationStore.ts
        settings/
          SettingsStore.ts
          Defaults.ts
        weather/
          WeatherLayerProvider.ts
          MockWeatherProvider.ts
          NasaGibsProvider.placeholder.ts
        ui/
          OverlayPanel.ts
          SettingsPanel.ts
          ErrorBanner.ts
        styles/
          global.css
      package.json
      vite.config.ts
  docs/
    ...
```

## Runtime Model

```txt
Lively Wallpaper
  └─ loads local web wallpaper
      └─ Vite-built static web app
          ├─ CesiumJS renders globe
          ├─ Solar service computes sun position
          ├─ Terminator layer renders day/night
          ├─ Location provider resolves position
          └─ Overlay UI shows status
```

## Why Web-first

웹 기반으로 시작하는 이유:

1. CesiumJS, MapLibre GL JS 같은 지리/3D 시각화 생태계가 강함
2. Lively Wallpaper가 웹페이지형 월페이퍼를 지원함
3. Windows 네이티브 월페이퍼 엔진 구현을 나중으로 미룰 수 있음
4. OpenCode로 반복 개발하기 쉬움
5. 추후 WebView2 기반 설정 앱으로 확장 가능

## Optional Phase 2 Desktop Shell

MVP 이후 다음 구조를 추가할 수 있다.

```txt
apps/
  desktop-shell/
    EarthLive.Desktop/
      MainWindow.xaml
      MainWindow.xaml.cs
      Services/
        WebWallpaperBuildService.cs
        SettingsBridge.cs
        WindowsLocationService.cs
```

이 shell은 다음 역할만 담당한다.

- 설정 UI
- Lively 등록 안내
- 로컬 설정 파일 편집
- Windows Location API 접근
- WebView2 preview

## Data Flow

```txt
User / Location Permission
  -> LocationProvider
  -> AppState
  -> SolarPositionService
  -> DayNightTerminatorLayer
  -> CesiumGlobeRenderer
  -> OverlayPanel
```

Weather layer data flow:

```txt
WeatherLayerProvider
  -> Tile metadata / GeoJSON / raster layer
  -> Layer manager
  -> Cesium imagery layer or MapLibre layer
```

## Module Boundaries

### Rendering

- 지구, 지도, 카메라, 레이어 렌더링
- 외부 API 직접 호출 금지
- 데이터는 provider에서 전달받기

### Solar

- 태양 위치 계산
- 일출/일몰 계산
- 낮/밤 경계선 계산용 좌표 생성

### Location

- 자동 위치
- 수동 위치
- 권한 실패 처리
- 저장/복원

### Weather

- provider interface
- mock data
- NASA GIBS placeholder
- future KMA/JMA/OpenWeatherMap provider

### UI

- 상태 표시
- 설정 입력
- 오류/오프라인 안내

## MVP Implementation Principle

MVP에서는 정확도보다 **동작하는 구조와 확장 가능한 경계**가 더 중요하다.

단, 태양 위치와 일출/일몰은 사용자가 바로 체감하는 기능이므로 테스트 가능한 형태로 구현한다.

