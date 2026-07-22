# ONTOH Design System

**주식회사 온토 (ONTOH Inc.)** — 건설현장 안전관리 Physical AI 기업의 웹사이트 디자인 시스템.

---

## 이 폴더가 뭔가

`www.ontoh.co.kr` 전체를 관통하는 **브랜드 · 색상 · 타이포 · 컴포넌트 · UI 키트**의 단일 진실 소스(single source of truth).
새 페이지를 만들거나 기존 페이지를 수정할 때 여기부터 봅니다.

## 파일 구성

| 파일 | 역할 |
|---|---|
| **[DESIGN.md](DESIGN.md)** | 메인 디자인 시스템 문서 — 토큰·타이포·컴포넌트·모션 전부 |
| **[SKILL.md](SKILL.md)** | 미래 프로젝트에서 재사용 가능한 스킬 파일 (Claude/AI 에이전트용) |
| **[colors_and_type.css](colors_and_type.css)** | CSS 변수 + 타입 스케일. 새 페이지에서 `<link>`로 불러 사용 |
| **[preview/](preview/)** | 실제 브라우저에서 볼 수 있는 인터랙티브 UI 키트 |
| **preview/index.html** | UI 키트 랜딩 |
| **preview/colors.html** | 컬러 팔레트 스와치 |
| **preview/typography.html** | 타입 스케일 데모 |
| **preview/spacing.html** | 스페이싱 스케일 |
| **preview/components.html** | 컴포넌트 갤러리 (GNB·카드·KPI 박스·태그·버튼 등) |

## 30초 요약 (브랜드 파운데이션)

### 컬러
- **Ink `#0A2440`** — 딥네이비, 헤드라인 · 헤더
- **Body `#212121`** — 차콜, 본문
- **Sub `#555555`** — 보조 텍스트
- **Accent `#0169a9`** — 온토 블루, 링크 · CTA · 수치
- **Band `#F5F6F8`** — 오프화이트, 섹션 구분
- **Hair `#E5E7EB`** — 헤어라인, 테두리

### 타입
- **Pretendard 단일** (한국어 필수). Inter/Noto Sans KR/명조체 사용 금지

### 형태
- **직각(rounded-none)** — 라운드 지양
- **헤어라인 중심** — 큰 그림자 자제
- **여백으로 위계** — 볼드 남발 금지

### 금지
- 웜 아이보리·쿨 그레이 틴트·다크 배경 (본문)
- 이모지 (→ Iconify Solar로 대체)
- ease-in-out / linear 트랜지션 (→ cubic-bezier(0.16, 1, 0.3, 1))
- 보라색·네온 AI 그라디언트

## 사용 방법

### 새 페이지 만들 때
1. **[DESIGN.md](DESIGN.md)**를 먼저 읽는다
2. `colors_and_type.css`를 `<link>`로 포함
3. **[preview/components.html](preview/components.html)**에서 필요한 컴포넌트 HTML 복사
4. Pretendard + Tailwind CDN + Iconify 스크립트 로드
5. 헤더/푸터는 기존 페이지(예: `about.html`)의 것 재사용

### 컴포넌트 확인
```
브라우저에서 design/preview/index.html 열기
→ 색상·타이포·컴포넌트 실물 확인
```

### AI 에이전트 사용
`SKILL.md`를 Claude Code / Cursor / GitHub Copilot에 컨텍스트로 주면 자동으로 ONTOH 스타일 준수.

## 기여 · 업데이트

- 컬러 · 폰트 · 컴포넌트 규칙 변경 시 **DESIGN.md → colors_and_type.css → preview/** 순서로 업데이트
- 기존에 흩어져 있던 문서는 `archive/design-legacy/`에 보관 (참고용)
- 실제 페이지에서 사용 중인 컴포넌트만 추가할 것 (미사용 컴포넌트는 배제)

## 관련 링크

- 회사 소개: [about.html](../about.html)
- 실제 사이트: https://ontoh.co.kr (도메인 연결 전엔 https://shinyounga.github.io/ontoh-website/)
- 저장소: https://github.com/shinyounga/ontoh-website

---
_Last updated: 2026-07-22 · Maintained by ONTOH_
