# 03 MVP Scope

## MVP Name

MVP 0.1 - Local Earth Day/Night Wallpaper

## Included Features

### 1. 3D Earth

- CesiumJS 기반 지구 렌더링
- 초기 카메라는 지구 전체가 보이는 위치
- 천천히 회전하는 idle animation
- 사용자가 마우스로 회전/줌 가능

### 2. Location

- 브라우저 Geolocation 시도
- 실패 시 manual mode
- 기본 fallback 위치: Seoul, South Korea
- 사용자가 위도/경도 직접 입력 가능
- 위치는 localStorage에 저장

### 3. Solar Calculation

- 현재 시간 기준 태양 위치 계산
- 현재 위치 기준 일출/일몰 계산
- 현재 위치 기준 태양 고도 표시
- UTC/local time 표시

### 4. Day/Night Terminator

- 지구 표면 위 낮/밤 경계선 표시
- 밤 영역은 반투명 dark overlay
- 낮/밤 경계선은 매 분 또는 5분마다 갱신
- 시각적 정확도는 MVP 수준에서 허용하되 구조를 분리

### 5. Info Overlay

표시 항목:

- 현재 위치 이름 또는 좌표
- 현재 로컬 시간
- 일출 시간
- 일몰 시간
- 태양 고도
- 모드: Globe / Map placeholder
- 데이터 상태: Local / Offline / Demo

### 6. Lively Wallpaper Package

- `lively-info.json`
- 빌드 결과물
- README에 등록 방법 작성

## Excluded from MVP

- 실제 구름 레이어
- 태풍 경로
- 레이더 이미지
- KMA API 연동
- JMA Himawari 실시간 이미지
- NASA GIBS 실제 타일 연동
- Windows native settings app
- 자체 Windows wallpaper engine
- installer
- auto update

## MVP Acceptance Criteria

MVP가 완료되었다고 판단하는 기준:

1. `npm install` 후 `npm run dev`로 실행된다.
2. 브라우저에서 3D 지구가 보인다.
3. 위치 권한을 거부해도 수동 입력으로 진행 가능하다.
4. Seoul fallback으로도 정상 동작한다.
5. 낮/밤 overlay가 시간에 따라 바뀐다.
6. 일출/일몰 정보가 표시된다.
7. `npm run build` 결과물을 Lively에 등록할 수 있다.
8. API 키 없이도 데모 모드가 작동한다.
9. 네트워크 오류가 있어도 앱이 빈 화면으로 죽지 않는다.

