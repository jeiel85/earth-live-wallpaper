# 05 Rendering Design

## Rendering Modes

### Mode A: Globe Mode

기본 모드. CesiumJS로 3D 지구를 렌더링한다.

Features:

- Earth globe
- Current location pin
- Day/night terminator
- Slow auto-rotation
- Optional cloud layer later

### Mode B: Local Map Mode

후속 모드. MapLibre GL JS로 현재 위치 중심의 2D/tilted map을 렌더링한다.

Features:

- Current location centered
- Day/night overlay
- Weather layers
- Typhoon path overlay
- Optional satellite basemap

## Day/Night Terminator Approach

MVP에서는 다음 방식 중 구현이 쉬운 것을 선택한다.

### Option 1: Cesium Entity Polygon

- 밤 영역을 polygon으로 계산
- 지구 표면 위에 반투명 material로 표시
- 장점: Cesium 구조에 맞음
- 단점: 좌표 계산 필요

### Option 2: Custom Shader / Post-process

- fragment shader로 solar vector 기준 조명 계산
- 장점: 시각적으로 부드러움
- 단점: 구현 난이도 높음

### MVP Recommendation

Option 1로 시작한다.

## Solar Calculation

Inputs:

- current UTC time
- latitude
- longitude

Outputs:

- sunrise time
- sunset time
- solar altitude
- solar azimuth
- subsolar point
- terminator polyline or night polygon

## Visual Design

### Globe

- Deep space background
- Earth slowly rotates
- Night overlay opacity: 0.45-0.65
- Terminator edge: soft gradient if feasible
- Location pin: small glowing dot

### UI Overlay

Position:

- bottom-left or top-right

Content:

```txt
Seoul, South Korea
2026-06-16 21:10
Sunrise 05:10
Sunset 19:56
Solar Altitude -18.2°
Mode Globe
```

Style:

- transparent dark panel
- subtle border
- no heavy dashboard
- text should not dominate wallpaper

## Performance Rules

- Target 30 FPS or lower
- Stop unnecessary re-render loops
- Recalculate solar data every 1-5 minutes, not every frame
- Weather layers should not update continuously
- Use requestAnimationFrame carefully
- Provide static mode for low-power devices

## Error States

### WebGL not available

Show a minimal fallback screen:

```txt
EarthLive Wallpaper
WebGL is not available on this device.
```

### Location blocked

Use manual mode and fallback Seoul.

### Network offline

Show local Earth and day/night only.

### Provider error

Disable that layer and keep the base wallpaper running.

