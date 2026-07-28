# ONTOH Design System

> 건설현장 안전관리 Physical AI 기업 · **주식회사 온토** 웹사이트 브랜드 · 컴포넌트 시스템
> Version 3.0 · 2026-07-22

---

## 목차
1. [브랜드 아이덴티티](#1-브랜드-아이덴티티)
2. [디자인 원칙](#2-디자인-원칙)
3. [디자인 토큰](#3-디자인-토큰)
4. [타이포그래피](#4-타이포그래피)
5. [스페이싱 · 레이아웃](#5-스페이싱--레이아웃)
6. [컴포넌트](#6-컴포넌트)
7. [모션 · 인터랙션](#7-모션--인터랙션)
8. [아이콘](#8-아이콘)
9. [접근성](#9-접근성)
10. [절대 하지 말 것](#10-절대-하지-말-것)
11. [기술 스택](#11-기술-스택)
12. [파일 구조 · 헤더/푸터](#12-파일-구조--헤더푸터)

---

## 1. 브랜드 아이덴티티

| 항목 | 값 |
|---|---|
| **회사명** | ONTOH (온토) · 주식회사 온토 |
| **사업 도메인** | 건설현장 안전관리 Physical AI |
| **제품** | ONTOH Vision (AI 영상 자율 관제) · ONTOH Health (디지털 보건 관리) |
| **대표이사** | 김태건 |
| **연락처** | ktg@ontoh.co.kr · www.ontoh.co.kr |
| **소재지** | (03777) 서울특별시 서대문구 연세로2나길 61, 캠퍼스타운에스큐브 304호 |
| **사업자번호** | 230-88-03436 |

### 브랜드 톤

**시재건설 등 대형 건설사 톤의 "기관형"** — 보수적 건설사 담당자에게 신뢰를 주는 정연함.
연구·특허·논문 기반의 기술 진정성 + 대기업 IR 자료 같은 절제된 위계.

### 로고

- **`assets/logo/ontoh/파랑.svg`** — 라이트 배경용 (딥네이비 로고)
- **`assets/logo/ontoh/흰색.svg`** — 다크 배경용 (푸터 등)
- 로고 네이비 `#1b2e6a`는 **로고 자산 전용** — 웹 UI에는 사용 금지 (`#0A2440` ink 사용)

---

## 2. 디자인 원칙

### 2.1 One Thing One Page
한 페이지 = 한 목적. 여러 액션을 한 곳에 몰아넣지 않는다.

### 2.2 여백으로 위계
볼드 남발보다 크기 · 여백 · 색상 대비로 위계를 만든다.

### 2.3 정직 · 절제
"혁신적인", "원활한", "게임 체인저" 같은 AI 클리셰 한국어 금지.
숫자는 있는 것만 정확히. 없는 성과는 지어내지 말고 "실증 진행 중"으로 표기.

### 2.4 헤어라인 미학
큰 그림자 · 컬러 배경보다 얇은 선(`#E5E7EB`)으로 구획.
`.corp-card` 같은 카드도 기본은 헤어라인 테두리, hover 시에만 그림자.

### 2.5 반복 금지
인접한 두 섹션이 같은 레이아웃 패턴을 사용하지 않는다.
(예: 3열 균등 카드 두 번 연달아 X → Bento Grid + Zig-Zag)

---

## 3. 디자인 토큰

### 3.1 컬러 팔레트

#### Primary (구조)

| 이름 | HEX | RGB | 사용처 |
|---|---|---|---|
| `ink` | **`#0A2440`** | 10, 36, 64 | 헤드라인 · 헤더 · 다크 CTA 배경 · 강조 |
| `body` | **`#212121`** | 33, 33, 33 | 본문 텍스트 (기본색) |
| `sub` | **`#555555`** | 85, 85, 85 | 보조 텍스트 · 캡션 |

#### Accent (강조)

| 이름 | HEX | 사용처 |
|---|---|---|
| `accent` (DEFAULT) | **`#0169a9`** | 링크 · CTA · 수치 · 킥커 · section-tag |
| `accent-300` | `#8ed0ff` | 다크 배경 위 킥커 텍스트 |
| `accent-400` | `#59b4ff` | 보조 강조 (그라디언트 등) |

#### Surface (배경 · 선)

| 이름 | HEX | 사용처 |
|---|---|---|
| `white` | `#FFFFFF` | 기본 배경 |
| `band` | **`#F5F6F8`** | 섹션 구분 배경 (오프화이트) |
| `hair` | **`#E5E7EB`** | 테두리 · 헤어라인 |

#### Semantic

| 이름 | HEX | 사용처 |
|---|---|---|
| `ok` | `#137a52` | Health 축 · 성공 · 보건 성과 강조 |
| `warn` | `#FEF9E7` / text `#8B6A00` | 초안(draft) 배너 · 안내 |

#### 브랜드 자산 전용 (웹 UI 사용 금지)

| 이름 | HEX | 용도 |
|---|---|---|
| `logo-navy` | `#1b2e6a` | 로고 SVG 원본 색상 (변경 금지) |

### 3.2 Radius (직각 우선)

```
--radius-none: 0px        ← 기본
--radius-sm:   2px        ← 예외 (라벨 도트 등)
--radius-full: 9999px     ← 아바타 · 필터 칩만
```

**원칙**: `border-radius`는 최소한만. Tailwind `rounded-*` 대신 `rounded-none` 명시.

### 3.3 Shadow (절제)

```
--shadow-card-hover: 0 18px 40px -22px rgba(10, 36, 64, .32);
--shadow-mega:       0 28px 46px -26px rgba(10, 36, 64, .3);
```

**원칙**: 그림자는 호버 시에만. `.corp-card:hover` → 위 shadow-card-hover 적용. 기본 상태는 헤어라인만.

---

## 4. 타이포그래피

### 4.1 폰트 (단일)

```html
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
```

```css
font-family: 'Pretendard', system-ui, sans-serif;
```

**절대 사용 금지**: Inter, Noto Sans KR, Roboto, 명조체(Serif). 슬로건 · 인용문도 Pretendard.

### 4.2 스케일

| 역할 | Size | Weight | Letter-spacing | 예시 |
|---|---|---|---|---|
| **Hero H1** | 34–46px (`text-[34px] md:text-[46px]`) | 800 (bold) | -0.02em | 페이지 제목 |
| **Section H2** | 28–42px | 700–800 | -0.02em | 섹션 헤드 |
| **Card H3** | 19–23px | 700 | -0.015em | 카드 제목 |
| **Sub-h H4** | 16–18px | 700 | -0.01em | 상세 소제목 |
| **Body** | 15.5–17px | 400 | 0 | line-height 1.75–1.85 |
| **Small** | 13.5–14px | 400 | 0 | 캡션 · 부가 |
| **Kicker** | 13px | 800 | 0.14em uppercase | 킥커 (라벨) |
| **Section tag** | 12px | 800 | 0.16em uppercase | Challenge · Solution 등 |
| **Meta** | 11.5–12.5px | 700 | 0.14em uppercase | 태그 · 스트립 라벨 |
| **KPI Num** | 32–44px | 800 | -0.03em, tabular-nums | 수치 강조 |

### 4.3 폰트 웨이트 팔레트

```
400 Regular   — 본문
600 Semibold  — 강조 문구
700 Bold      — 헤드라인 · 카드 제목 · 버튼
800 Extrabold — Hero · KPI 수치 · 킥커
```

**900 Black 사용 금지** — 웹에서 뭉개짐.

---

## 5. 스페이싱 · 레이아웃

### 5.1 컨테이너

```html
<div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
```

- **max-width**: 1280px (`max-w-7xl`)
- **수평 패딩**: 24px → 40px → 56px (반응형)

### 5.2 섹션 세로 패딩

| 컨텍스트 | Padding |
|---|---|
| Hero (넓은 여백) | `py-24 md:py-32` (96–128px) |
| 일반 섹션 | `py-16 md:py-20` (64–80px) |
| 컴팩트 섹션 | `py-14 md:py-16` (56–64px) |
| Sub-visual | `py-20 md:py-28` (80–112px) |

### 5.3 스페이싱 스케일 (Tailwind 기준)

| 토큰 | Rem | Px | 사용 |
|---|---|---|---|
| `space-1` | 0.25 | 4 | 아이콘 간격 |
| `space-2` | 0.5 | 8 | 인라인 gap |
| `space-3` | 0.75 | 12 | 태그 간격 |
| `space-4` | 1 | 16 | 카드 내부 원소 |
| `space-5` | 1.25 | 20 | 그리드 gap 소 |
| `space-6` | 1.5 | 24 | 카드 padding |
| `space-8` | 2 | 32 | 카드 padding (큰) |
| `space-10` | 2.5 | 40 | 섹션 내 그리드 gap |
| `space-14` | 3.5 | 56 | 섹션 상단 여백 |
| `space-16` | 4 | 64 | 섹션 여백 |
| `space-20` | 5 | 80 | 큰 섹션 여백 |
| `space-24` | 6 | 96 | Hero 여백 |

---

## 6. 컴포넌트

### 6.1 Kicker (킥커)

섹션 소개 라벨. 대문자 + 자간 넓게 + accent 색 + 좌측 선.

```html
<p class="kicker">Case Studies</p>
```

```css
.kicker { display:inline-flex; align-items:center; gap:.7rem;
  font-size:13px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; color:#0169a9; }
.kicker::before { content:""; width:4px; height:18px; background:#0169a9; display:inline-block; }
```

### 6.2 Section Tag

Kicker의 상세 페이지 버전. Challenge / Solution / Impact 등에 사용.

```html
<p class="section-tag">과제 · Challenge</p>
```

```css
.section-tag { display:inline-block; font-size:12px; font-weight:800;
  letter-spacing:.16em; text-transform:uppercase; color:#0169a9; margin-bottom:1rem; }
.section-tag::before { content:""; display:inline-block; width:4px; height:18px;
  background:#0169a9; vertical-align:middle; margin-right:.6rem; }
```

### 6.3 Tag / Chip

```html
<span class="tag bg-accent/10 text-accent">Vision 실증</span>
<span class="tag bg-ink/[0.06] text-ink">공공주택 지구조성</span>
```

```css
.tag { font-size:12px; font-weight:800; letter-spacing:.02em; padding:3px 9px; }
```

### 6.4 Card (`.corp-card`)

기본 콘텐츠 컨테이너. 헤어라인 → hover 시 살짝 뜨는 shadow.

```html
<a href="..." class="corp-card block p-8 group">
  ...
</a>
```

```css
.corp-card { background:#fff; border:1px solid #E5E7EB;
  transition: box-shadow .5s cubic-bezier(0.16,1,0.3,1),
              transform .5s cubic-bezier(0.16,1,0.3,1); }
.corp-card:hover { box-shadow: 0 18px 40px -22px rgba(10,36,64,.32);
  transform: translateY(-3px); }
```

### 6.5 KPI Box (3칸 상단 지표)

Voxel · Protex 스타일 "Impact in Numbers". 다크 배경 + 큰 수치.

```html
<div class="grid md:grid-cols-3 gap-3 md:gap-4">
  <div class="bg-ink p-7 md:p-8">
    <div class="text-white kpi-num mb-3">40<small>+건/일</small></div>
    <p class="text-white/60 text-[13.5px] leading-relaxed">위험행동 자동 감지</p>
  </div>
  ...
</div>
```

```css
.kpi-num { font-size:44px; font-weight:800; line-height:1;
  letter-spacing:-.03em; font-variant-numeric:tabular-nums; }
.kpi-num small { font-size:20px; font-weight:700; margin-left:.15rem; }
```

### 6.6 Summary Strip (4칸 요약 스트립)

사이트 개요 · 사양 · 기간 등을 4칸으로 나열.

```html
<div class="summary-strip">
  <div>
    <p class="text-[11.5px] text-sub/60 font-bold tracking-[0.14em] uppercase mb-2">현장 유형</p>
    <p class="text-[15.5px] font-bold text-ink">공공주택 지구조성</p>
  </div>
  ...
</div>
```

```css
.summary-strip { border:1px solid #E5E7EB; display:grid;
  grid-template-columns:repeat(2, 1fr); background:#fff; }
.summary-strip > div { padding:1.4rem 1.5rem 1.6rem;
  border-right:1px solid #E5E7EB; border-bottom:1px solid #E5E7EB; }
.summary-strip > div:nth-child(2n) { border-right:0; }
.summary-strip > div:nth-last-child(-n+2) { border-bottom:0; }
@media (min-width:768px) {
  .summary-strip { grid-template-columns:repeat(4, 1fr); }
  .summary-strip > div { border-bottom:0; border-right:1px solid #E5E7EB; }
  .summary-strip > div:nth-child(2n) { border-right:1px solid #E5E7EB; }
  .summary-strip > div:last-child { border-right:0; }
}
```

### 6.7 Points List (`.pts`)

법령 · Challenge · Solution의 정형 리스트. 아웃라인 도트 + 헤어라인 divider.

```html
<ul class="pts">
  <li>다수 시공사 병행 시공으로 <b>안전관리 통합 관제 부재</b></li>
  ...
</ul>
```

```css
.pts li { position:relative; padding:12px 0 12px 24px; border-bottom:1px solid #E5E7EB;
  color:#33383e; font-size:15.5px; line-height:1.65; }
.pts li:before { content:""; position:absolute; left:0; top:19px;
  width:8px; height:8px; border:2px solid #0169a9; border-radius:50%; }
.pts li b { color:#0A2440; font-weight:700; }
```

### 6.8 Badge (`.ba`)

인라인 수치 강조.

```html
오경보 <span class="ba">68% 감소</span>
```

```css
.ba { display:inline-block; background:#EAF0FA; color:#0A2440;
  font-weight:800; padding:2px 10px; font-size:14.5px; }
```

### 6.9 Law Chip

법령 · 준수 항목 나열용 칩.

```html
<span class="law-chip">산업안전보건법 제43조 (추락 방지)</span>
```

```css
.law-chip { font-size:13px; font-weight:700; color:#0A2440;
  background:#fff; border:1px solid #E5E7EB; padding:8px 13px; }
.law-chip::before { content:"§ "; color:#0169a9; }
```

### 6.10 Draft Notice (초안 배너)

미확정 콘텐츠 페이지 상단에 노란 스트립.

```html
<div class="draft-notice">
  <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-3 text-[13px] text-[#8B6A00]">
    <iconify-icon icon="solar:info-circle-linear"></iconify-icon>
    <strong>초안</strong> — 실증 진행에 따라 실제 데이터로 순차 업데이트됩니다.
  </div>
</div>
```

```css
.draft-notice { background:#FEF9E7; border-bottom:1px solid #F5DE83; }
```

### 6.11 GNB (Global Navigation) 메가메뉴

풀와이드 메가바 + 4대 카테고리(회사소개 / 솔루션 / 기술·연구 / 문의).
각 페이지가 동일한 헤더/푸터 공유. 자세한 마크업은 `preview/components.html` 참조.

### 6.12 Sub Hero + Breadcrumb

다크 배경 + 반투명 이미지 오버레이 + 킥커 + h1 + 브레드크럼.

### 6.13 CTA Section

다크 배경 + accent-300 킥커 + 대비 강한 CTA 버튼 2개.

### 6.14 Footer (강화 푸터)

3열 그리드 (회사 정보 / 메뉴 / 문의) + 하단 카피라이트 + 개인정보/이용약관 링크.

---

## 7. 모션 · 인터랙션

### 7.1 이징 커브 (단일 표준)

```css
transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
```

**금지**: `ease-in-out`, `linear`, `ease` — 전부 이 스프링 커브로 통일.

### 7.2 표준 지속시간

| 인터랙션 | Duration |
|---|---|
| Micro (hover 색상) | 200–280ms |
| Standard (버튼) | 340–400ms |
| Card hover | 500ms |
| 메가메뉴 열림 | 380ms |
| Reveal (스크롤) | 600–700ms |

### 7.3 Hover 패턴

- **버튼 · CTA**: `hover:scale-[1.02] active:scale-[0.98]`
- **카드**: `translateY(-3px)` + shadow
- **텍스트 링크 (dlink)**: 색상 변경 + gap 넓어짐 (아이콘 fade-in)
- **화살표 아이콘**: `gap` 1.5→2.5

### 7.4 Reveal (스크롤 진입 애니메이션)

```html
<div class="reveal">...</div>
<div class="reveal stagger-1">...</div>
<div class="reveal stagger-2">...</div>
```

`js/common.js`가 IntersectionObserver로 처리. `stagger-1/2/3/4/5`로 지연 부여.

---

## 8. 아이콘

### 8.1 라이브러리

**Iconify Solar 전용** — 그 외 아이콘셋 사용 금지.

```html
<script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>
```

```html
<iconify-icon icon="solar:arrow-right-linear" class="text-[13px]"></iconify-icon>
```

### 8.2 자주 쓰는 Solar 아이콘

| 용도 | 아이콘 |
|---|---|
| 화살표 (링크·CTA) | `solar:arrow-right-linear` |
| 브레드크럼 구분 | `solar:alt-arrow-right-linear` |
| 안전·보호 | `solar:shield-check-linear` · `solar:shield-user-linear` |
| 보건 | `solar:heart-pulse-linear` |
| 문서 | `solar:document-text-linear` |
| 부정(과제) | `solar:minus-circle-linear` |
| 긍정(해결) | `solar:check-circle-linear` |
| 안내 | `solar:info-circle-linear` |
| 인용 | `solar:quote-up-linear` |
| 메뉴 | `solar:hamburger-menu-linear` |
| 닫기 | `solar:close-circle-linear` |

### 8.3 절대 사용 금지

- **이모지** (📊 🚀 ⚡ 등) — 모두 Iconify Solar로 대체
- Font Awesome · Material Icons · Heroicons

---

## 9. 접근성

- **색상 대비**: 본문 텍스트 4.5:1, 큰 텍스트 3:1 (WCAG AA)
- **포커스 링**: 브라우저 기본 유지 (커스텀 안 함)
- **alt 텍스트**: 모든 `<img>`에 의미 있는 alt (장식용은 `alt=""`)
- **aria-label**: 아이콘만 있는 버튼에 필수 (예: 메뉴 토글)
- **키보드 네비게이션**: `<a>` `<button>` 사용, `<div onclick>` 금지
- **prefers-reduced-motion**: reveal 애니메이션은 이 사용자에겐 스킵 (`js/common.js`에서 처리)

---

## 10. 절대 하지 말 것

### 10.1 컬러
- 웜 아이보리 · 크림 팔레트
- 쿨 그레이 틴트
- 다크 배경 (본문 · CTA 다크 카드 제외)
- 보라색 · 네온 AI 그라디언트 (`from-purple-* to-pink-*`)
- 로고 네이비 `#1b2e6a` 웹 UI 사용 (로고 자산에만)

### 10.2 타이포
- Pretendard 외 폰트 (Inter · Noto Sans KR · Roboto · 명조 전부)
- 900 Black
- 대문자 남용 (kicker · section-tag 외)

### 10.3 형태
- 큰 라운드 (`rounded-2xl` 이상)
- 큰 그림자 (호버 이외)
- 3열 균등 카드 반복 (Bento · Zig-Zag 사용)
- 인접 섹션 동일 레이아웃

### 10.4 아이콘 · 문구
- 이모지
- AI 클리셰 한국어 ("혁신적인", "원활한", "차세대", "게임 체인저")
- 지어낸 수치 (없으면 "실증 진행 중"으로 표기)

### 10.5 코드
- 미완성 · 플레이스홀더 · `<!-- ... -->` 생략
- `ease-in-out` · `linear` 트랜지션
- `<div onclick>` (버튼 · 링크는 `<button>` · `<a>` 사용)
- `h-screen` (반응형 파괴, `min-h-[100dvh]` 사용)

---

## 11. 기술 스택

| 카테고리 | 기술 | 비고 |
|---|---|---|
| CSS 프레임워크 | **Tailwind CSS CDN** | `https://cdn.tailwindcss.com` |
| 폰트 | **Pretendard** (jsDelivr CDN) | 한국어 필수 |
| 아이콘 | **Iconify Solar** | 다른 셋 금지 |
| JS | 바닐라 JS (`js/common.js`) | 프레임워크 없음 |
| 이미지 자리표시 | `picsum.photos/seed/{name}/{w}/{h}` | Unsplash URL 금지 |
| 뷰포트 | `min-h-[100dvh]` | `h-screen` 금지 |
| 출력 | 단일 HTML 파일 | 빌드 도구 없음 |

### Tailwind 커스텀 설정 (모든 페이지 상단)

```html
<script>
  tailwind.config = {
    theme: { extend: {
      fontFamily: { sans: ['Pretendard', 'system-ui', 'sans-serif'] },
      colors: {
        navy: '#1b2e6a', ink: '#0A2440', body: '#212121', sub: '#555555',
        accent: { DEFAULT: '#0169a9', 300: '#8ed0ff', 400: '#59b4ff' },
        band: '#F5F6F8', hair: '#E5E7EB', ok: '#137a52',
      },
    } },
  }
</script>
```

---

## 12. 파일 구조 · 헤더/푸터

### 12.1 페이지 구조 (전형)

```
<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- meta, title, canonical, og:*, JSON-LD -->
  <!-- Tailwind CDN + Pretendard + Iconify -->
  <!-- tailwind.config 스크립트 -->
  <link rel="stylesheet" href="css/common.css">
  <style>/* 페이지 로컬 스타일 */</style>
</head>
<body class="bg-white font-sans antialiased">
  <header>...GNB + 메가메뉴...</header>
  <div id="mobileMenu">...</div>

  <!-- Sub Hero + Breadcrumb -->
  <section class="relative bg-ink overflow-hidden">...</section>

  <!-- 콘텐츠 섹션 (여러 개) -->
  <section class="border-b border-hair">
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 md:py-20">...</div>
  </section>

  <!-- CTA (선택) -->
  <section>...bg-ink...</section>

  <!-- Footer -->
  <footer class="bg-ink text-white/70">...</footer>

  <script src="js/common.js"></script>
</body>
</html>
```

### 12.2 공용 파일

| 파일 | 역할 |
|---|---|
| `css/common.css` | reveal 애니메이션 · 모바일 메뉴 · 스프링 유틸리티 |
| `js/common.js` | GNB 토글 · 스크롤 reveal · 헤더 스크롤 상태 |

### 12.3 헤더/푸터 복제

새 페이지는 기존 페이지(권장: `about.html`)의 `<header>`와 `<footer>`를 그대로 복제.
서브 폴더(`references/`, `blog/`)에선 상대 경로에 `../` 붙일 것.

---

## 부록: 컬러 코드 원본

- **공식 브랜드 컬러 (로고 자산)**: `#1b2e6a` (Navy) / RGB 27,46,106 / CMYK 75,57,0,58
- **웹 UI 딥네이비**: `#0A2440` (헤드라인·헤더 표준)
- **서브 컬러 · Accent**: `#0169a9` (링크·CTA·수치)

이 3개 색이 브랜드의 골격입니다. 그 외는 지원 팔레트.

---

_Last updated: 2026-07-22 · Version 3.0_
_Maintained by ONTOH Inc. (ktg@ontoh.co.kr)_
