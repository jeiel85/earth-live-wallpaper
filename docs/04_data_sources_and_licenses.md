# 04 Data Sources and License Strategy

## Principle

지도, 위성, 날씨 데이터는 기능보다 **약관 준수와 지속 가능성**이 우선이다.

## Recommended Policy

- Google Earth/Google Maps 이미지를 무단 스크래핑하지 않는다.
- OpenStreetMap 공식 raster tile 서버를 무거운 기본 월페이퍼 배경으로 사용하지 않는다.
- 모든 외부 provider는 분리된 interface 뒤에 둔다.
- API 키가 필요한 provider는 optional로 둔다.
- provider별 사용 조건, 캐싱 조건, attribution을 문서화한다.

## Candidate Data Sources

| Purpose | Candidate | MVP Use | Notes |
|---|---|---:|---|
| 3D Earth rendering | CesiumJS | Yes | 렌더링 라이브러리 |
| 2D map rendering | MapLibre GL JS | Later | 지도 렌더링 라이브러리 |
| Day/night and solar data | SunCalc or internal algorithm | Yes | 로컬 계산 가능 |
| Satellite/cloud | NASA GIBS | Later | WMTS/WMS/XYZ 계열 접근 후보 |
| East Asia satellite | JMA Himawari | Later | 동아시아 구름 시각화 후보 |
| Korea weather | KMA / Open-Meteo KMA API | Later | 한국형 날씨 후보 |
| Weather tile layers | OpenWeatherMap | Later | API key 필요 가능 |
| OSM base map | OSM-derived provider or self-hosted tiles | Later | 공식 OSM tile 서버 남용 금지 |

## Lively Wallpaper License Note

Lively Wallpaper 자체를 fork하거나 내부 코드를 수정/배포하는 경우 GPL-3.0 영향을 검토해야 한다.

MVP에서는 Lively를 외부 실행 환경으로 사용하고, 이 프로젝트는 별도의 웹 월페이퍼 패키지로 유지한다.

## OpenStreetMap Tile Policy Note

OpenStreetMap 데이터는 자유롭게 사용할 수 있지만, OSM Foundation의 공식 raster tile 서버는 무제한 CDN이 아니다.

따라서 다음을 피한다.

- 대량 다운로드
- 사전 타일 수집
- 오프라인 저장용 대량 prefetch
- 월페이퍼 배경으로 지속적인 고빈도 타일 요청

대안:

- MapTiler / Stadia / Thunderforest 등 provider 검토
- OpenMapTiles 기반 self-hosting
- Natural Earth 같은 저해상도 오픈 데이터로 데모 모드 제공
- Cesium 기본 imagery provider 사용 조건 검토

## Weather/Satellite Refresh Policy

기본 갱신 주기 제안:

| Layer | Refresh Interval |
|---|---:|
| Day/night overlay | 1-5 minutes |
| Current weather text | 10-30 minutes |
| Cloud satellite layer | 30-60 minutes |
| Radar layer | 5-15 minutes, provider terms permitting |
| Typhoon track | 30-60 minutes or provider-specific |

## Attribution Requirements

UI에는 작게 다음 영역을 둔다.

```txt
Data: Local solar calculation | Map/Satellite: Provider name | Updated: YYYY-MM-DD HH:mm
```

## Safety Disclaimer for Weather

태풍, 레이더, 기상 레이어는 참고용 시각화로만 제공한다.

앱 내 문구:

```txt
Weather layers are visual references only. For official warnings and emergency decisions, check the national meteorological agency.
```

한국어 문구:

```txt
기상 레이어는 시각화 참고용입니다. 실제 경보와 재난 판단은 기상청 등 공식 채널을 확인하세요.
```

