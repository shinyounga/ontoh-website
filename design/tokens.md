# ONTOH 디자인 토큰 카탈로그

_모든 시각 요소(색상 · 타이포그래피 · 간격 · 그림자)의 단일 참조 소스._  
_사용 시 이 문서에 정의된 토큰만 사용 · 임의 hex/px 값 사용 금지._

**업데이트**: 2026-07-28 · 섹션 4 · Tailwind config 확장 완료

---

## 1. Color · 색상 토큰

### 1.1 Primitive (Tailwind config 기반)

| 토큰 | 값 | 용도 |
|---|---|---|
| `navy` | `#1b2e6a` | **로고 전용** (SVG 안에만) |
| `ink` | `#0A2440` | 딥네이비 · **헤드라인 · 메인 텍스트** |
| `body` | `#212121` | 기본 텍스트 |
| `sub` | `#555555` | 보조 텍스트 · 캡션 |
| `accent.DEFAULT` | `#0169a9` | 강조 · **링크 · CTA · 수치** |
| `accent.300` | `#8ed0ff` | 라이트 accent (다크 배경 위 강조) |
| `accent.400` | `#59b4ff` | 미디엄 accent |
| `band` | `#F5F6F8` | 연회색 배경 (섹션 밴드 · 아이템 hover) |
| `hair` | `#E5E7EB` | 헤어라인 · border 기본 |

### 1.2 Semantic State (신규 · 섹션 3)

| 토큰 | 값 | 용도 |
|---|---|---|
| `error` | `#dc2626` | 오류 · 실패 · 삭제 · 위험 |
| `warning` | `#ea580c` | 주의 · 경고 |
| `success` | `#137a52` | 성공 · 완료 · Health OK |
| `info` | `#0169a9` | 정보 (accent와 동일) |

### 1.3 사용 규칙

- **로고 SVG 안**에서만 `navy` 사용. 웹 UI에는 `ink`.
- 강조는 `accent` 하나로 통일. 여러 색 혼용 금지.
- State 컬러는 상태 표현(Alert · Tag)에만 사용.

---

## 2. Typography · 타이포그래피 토큰

### 2.1 Semantic Scale (신규 · Tailwind fontSize extend)

| 클래스 | 크기 | line-height | letter-spacing | 용도 |
|---|---|---|---|---|
| `text-caption` | 12px | 1.5 | - | 라벨 · 뱃지 · 푸터 메타 |
| `text-body-sm` | 13px | 1.6 | - | 폼 라벨 · 브레드크럼 · 작은 body |
| `text-body` | 15px | 1.65 | - | **본문 base** · 드롭다운 링크 |
| `text-body-md` | 17px | 1.65 | - | 서브 헤딩 body · 서브타이틀 |
| `text-body-lg` | 19px | 1.7 | - | 인트로 body · Feature 리스트 |
| `text-h3` | 22px | 1.3 | -0.01em | h3 · 카드 타이틀 |
| `text-h2` | 28px | 1.25 | -0.015em | h2 서브섹션 헤드 |
| `text-h1` | 38px | 1.2 | -0.02em | h1 페이지 타이틀 |
| `text-hero` | 48px | 1.15 | -0.02em | 인트로 히어로 큰 헤드라인 |

### 2.2 Font Family

- **Sans (전용)**: `Pretendard` (jsDelivr CDN)
- **단일 폰트 시스템** — Serif · Inter · Noto 등 병용 금지 (CLAUDE.md 규정)

### 2.3 Font Weight

| Weight | 이름 | 용도 |
|---|---|---|
| 400 | Regular | 기본 본문 |
| 500 | Medium | 강조 body |
| 600 | Semibold | 서브 헤딩 |
| 700 | Bold | 헤딩 · CTA 버튼 |
| 800 | Extrabold | Kicker · 특히 강조 |

### 2.4 사용 규칙

- 새 컴포넌트는 **semantic scale (`text-h1`, `text-body` 등)만 사용**.
- Arbitrary `text-[Xpx]`는 기존 코드 유지 · 새 코드 사용 금지.
- **Pretendard 단일** · Serif · Inter · Noto 등 병용 금지.

---

## 3. Shadow · 그림자 토큰

### 3.1 Semantic Scale (신규 · Tailwind boxShadow extend)

| 클래스 | 값 | 용도 |
|---|---|---|
| `shadow-card` | `0 18px 40px -22px rgba(10,36,64,0.32)` | 카드 hover |
| `shadow-panel` | `0 24px 44px -20px rgba(10,36,64,0.35)` | 드롭다운 패널 |
| `shadow-megabar` | `0 28px 46px -26px rgba(10,36,64,0.30)` | GNB 메가메뉴 |
| `shadow-lightbox` | `0 40px 80px -20px rgba(10,36,64,0.5)` | Lightbox 모달 |

### 3.2 사용 규칙

- 새 그림자 정의 금지 · 4가지 semantic scale 중 선택.
- 색상은 항상 `rgba(10,36,64, alpha)` (ink 컬러 기반).

---

## 4. Border Radius · 모서리

### 4.1 프로젝트 규칙

**기본: 직각 (`rounded-none`)**

- CLAUDE.md 규칙: "형태: 직각(rounded-none) · 헤어라인 · 여백으로 위계"
- 대형 건설사 · 기관형 톤

### 4.2 예외

| 클래스 | 용도 |
|---|---|
| `rounded-full` | 원형 · Lightbox 좌우 nav 버튼 (`.lb-nav`) |
| `rounded-full` | Loading spinner |

---

## 5. Spacing · 간격

Tailwind 기본 spacing scale 사용. 커스텀 spacing 정의 없음.

- 컴포넌트 간 세로 여백: `py-16` `py-24` `py-28` `py-32` 등
- 카드 내 padding: `p-6` `p-7` `p-8` `p-10`
- 텍스트 gap: `gap-2` `gap-3` `gap-4`

---

## 6. Layer 계층 구조

### 6.1 Primitive Layer
- Tailwind config `colors`, `fontSize`, `boxShadow`, `fontFamily`
- 원자 값 정의

### 6.2 Semantic Layer
- Primitive 이름이 이미 의미 기반 (ink, accent, error 등)
- 별도 Semantic layer 없이 Primitive가 Semantic 역할 겸함
- 향후 필요 시 CSS 변수(`--text-primary` 등)로 확장 가능

### 6.3 Component Layer
- `.btn` `.card` `.tag` `.alert` `.dropdown-link` 등
- Primitive 토큰 참조 (`background: #0A2440` = Tailwind `ink`)

---

## 7. 사용 예시

**Before (arbitrary)**
```html
<h1 class="text-white text-[42px] md:text-[48px] font-bold tracking-tight" 
    style="letter-spacing:-0.02em;">
  온토비전
</h1>
```

**After (semantic scale)**
```html
<h1 class="text-white text-hero font-bold">
  온토비전
</h1>
```

**Before (arbitrary shadow)**
```html
<article class="bg-white border border-hair 
                shadow-[0_18px_40px_-22px_rgba(10,36,64,0.32)]">
```

**After (semantic shadow)**
```html
<article class="card">  <!-- .card 컴포넌트가 shadow-card 사용 -->
```

---

## 8. Governance · 관리 원칙

1. **모든 신규 색상/폰트/그림자는 이 문서에 먼저 정의** 후 사용.
2. **임의 hex/px 값 사용 금지** — 필요하면 토큰 추가 논의.
3. **토큰 이름은 semantic** (역할 기반). `blue-500` X · `accent` O.
4. **문서 업데이트 시 하단 로그 필수**.

---

## 진행 로그

### 2026-07-28
- 초안 · 섹션 4 완료 시점 기준 토큰 카탈로그 확정
- Tailwind config에 fontSize (9개), boxShadow (4개) semantic scale 추가
- 22개 파일 반영
