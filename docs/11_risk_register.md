# 11 Risk Register

## Risk 1 - Scope Explosion

### Description

구글어스급 위성지도, 실시간 레이더, 태풍, 지형 그림자까지 한 번에 구현하려 하면 실패 가능성이 높다.

### Mitigation

- MVP는 지구 + 낮/밤 + 위치 + 일출/일몰로 제한
- 구름/태풍은 provider 구조만 먼저 만들기
- 자체 월페이퍼 엔진은 후순위

## Risk 2 - Map/Satellite Licensing

### Description

지도와 위성 이미지는 무료처럼 보여도 사용 조건, attribution, 캐싱 제한이 있다.

### Mitigation

- provider별 정책 문서화
- API 키 optional
- Google/OSM official tile 남용 금지
- 캐싱/갱신 주기 보수적으로 설정

## Risk 3 - Performance

### Description

월페이퍼는 항상 떠 있기 때문에 GPU/CPU 사용량이 민감하다.

### Mitigation

- 30 FPS 이하
- low-power mode
- 날씨 데이터 저빈도 갱신
- 태양 계산은 분 단위
- 필요 없는 애니메이션 제한

## Risk 4 - Location Privacy

### Description

사용자가 위치 기반 앱을 민감하게 받아들일 수 있다.

### Mitigation

- manual location 기본 지원
- 위치 로컬 저장
- 자체 서버 전송 금지
- UI에 privacy 문구 표시

## Risk 5 - Weather Safety Misunderstanding

### Description

태풍/레이더 레이어를 공식 경보처럼 오해할 수 있다.

### Mitigation

- 참고용 문구 표시
- provider와 update time 표시
- stale data 표시
- 공식 경보 확인 안내

## Risk 6 - Cesium Build Complexity

### Description

CesiumJS는 Vite 환경에서 assets 설정이 까다로울 수 있다.

### Mitigation

- Goal 2에서 별도 처리
- renderer fallback 구현
- README에 Cesium asset config 명시
- 초기에는 최소 기능으로 시작

## Risk 7 - Lively Package Format Drift

### Description

Lively metadata 형식이나 import 방식은 버전에 따라 달라질 수 있다.

### Mitigation

- 최신 Lively 문서 확인
- README에 수동 등록 절차도 설명
- metadata는 분리 파일로 관리

