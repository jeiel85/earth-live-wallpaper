# 06 Location and Privacy Design

## Location Strategy

Location resolution order:

1. Saved manual location
2. Browser Geolocation
3. IP-based approximate location, only if explicitly enabled later
4. Default fallback: Seoul, South Korea

## MVP Location Behavior

MVP에서는 IP 기반 위치 추정은 구현하지 않는다.

Reason:

- 외부 API 필요
- 개인정보 오해 가능성
- MVP에는 수동 설정으로 충분함

## Data Stored Locally

```json
{
  "locationMode": "manual",
  "latitude": 37.5665,
  "longitude": 126.9780,
  "label": "Seoul, South Korea",
  "lastUpdated": "2026-06-16T00:00:00Z"
}
```

## Data Not Collected

- 이름
- 이메일
- 계정
- 위치 기록
- 이동 경로
- 분석 이벤트
- 광고 ID
- 기기 식별자

## User Controls

- Use automatic location: on/off
- Manual latitude
- Manual longitude
- Location label
- Reset to Seoul
- Clear saved location

## Privacy Copy

English:

```txt
EarthLive stores your selected location locally on this device. It does not send your precise location to a custom server.
```

Korean:

```txt
EarthLive는 선택한 위치를 이 기기 안에만 저장합니다. 사용자의 정확한 위치를 별도 서버로 전송하지 않습니다.
```

## Weather Provider Note

일부 날씨/지도 provider는 좌표 기반 API 호출이 필요하다. 이 경우:

- 사용자가 해당 레이어를 켠 경우에만 호출
- provider 이름 표시
- API key는 사용자 설정 또는 개발자 설정에서 주입
- 자체 서버로 프록시하지 않는 한 좌표는 provider에 직접 전달됨

