# 07 Lively Wallpaper Integration

## Goal

MVP는 Lively Wallpaper에서 로컬 웹 월페이퍼로 등록 가능한 형태를 우선 지원한다.

## Why Lively First

자체 Windows wallpaper engine은 다음 이유로 후순위가 좋다.

- Windows desktop worker window 제어가 까다로움
- 멀티 모니터/절전/전체화면 앱 감지 구현 필요
- 설치/권한/호환성 이슈 발생
- MVP의 핵심은 월페이퍼 엔진이 아니라 지구/날씨 렌더링임

## Lively Package Example

`public/lively-info.json` 예시:

```json
{
  "AppVersion": "0.1.0",
  "Title": "EarthLive Wallpaper",
  "Thumbnail": "thumbnail.jpg",
  "Preview": "preview.gif",
  "Desc": "A location-aware live Earth wallpaper with day/night visualization.",
  "Author": "Aiden Park",
  "License": "MIT",
  "Contact": "https://github.com/jeiel85",
  "Type": 1,
  "FileName": "index.html"
}
```

실제 Lively metadata schema는 구현 시점에 최신 문서를 확인해야 한다.

## Build Output

```txt
dist/
  index.html
  assets/
  lively-info.json
  thumbnail.jpg
  preview.gif
```

## Local Development Flow

```bash
cd apps/wallpaper-web
npm install
npm run dev
npm run build
```

## Lively Registration Flow

1. Lively Wallpaper 설치
2. `npm run build`
3. `dist` 폴더를 zip으로 묶거나 Lively가 요구하는 방식으로 추가
4. Lively에서 새 월페이퍼 추가
5. `index.html` 또는 패키지를 선택

## Multi-monitor Consideration

MVP에서는 멀티모니터별 위치/카메라 분리는 구현하지 않는다.

Later:

- monitor-specific layout
- different camera per monitor
- low-power secondary monitors

## Future Native Shell

Phase 2 이후 Windows 앱을 추가하면 다음을 할 수 있다.

- 설정 UI 제공
- 미리보기 제공
- Lively 등록 안내
- provider key 관리
- 향후 자체 wallpaper engine 실험

