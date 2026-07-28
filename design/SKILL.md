---
name: ontoh-design
description: Build new pages or components in the ONTOH website's brand style — 건설현장 안전관리 Physical AI 기업 · 기관형 딥네이비 톤. Use whenever creating/editing HTML files in this project.
---

# ONTOH Design Skill

새 페이지를 만들거나 기존 페이지를 수정할 때 **이 파일 하나만** 참조해서 스타일을 준수한다.

**깊이 있는 참조 문서** (필요 시 열기):
- `design/tokens.md` — Color · Typography (`text-h1` 등) · Shadow · Radius · Spacing 토큰 카탈로그
- `design/components.md` — 12개 컴포넌트 (Button · Card · Tag · Kicker · Breadcrumb · Lightbox 등) 사용 가이드 · Do/Don't
- `design/glossary.md` — 브랜드 · 제품 · 시나리오 · CTA · 톤 용어 사전 (같은 개념을 여러 이름으로 부르지 말 것)
- `design/CHECKLIST.md` — 10개 섹션 정합성 감사 로그
- `design/DESIGN.md` — 상세 원칙 · 이론 (레퍼런스)

---

## 0. 브랜드 요약

건설현장 안전관리 Physical AI 기업. **시재건설급 대형 건설사 톤** — 정연·절제·기관형.
색은 딥네이비 + 온토 블루 액센트 조합. 폰트 하나 (Pretendard), 아이콘 하나 (Iconify Solar), 스타일 하나 (Tailwind CDN).

---

## 1. 반드시 지킬 것 (Hard Rules)

### 1.1 스택
- **Tailwind CDN** (`https://cdn.tailwindcss.com`) 필수. 빌드 도구 안 씀.
- **Pretendard** 폰트 (jsDelivr CDN) 필수. Inter · Noto · 명조 금지.
- **Iconify Solar** 아이콘만. 이모지 · 다른 아이콘셋 금지.
- 단일 HTML 파일. 스타일은 `<style>` 블록 인라인 or 공용 `css/common.css`.

### 1.2 컬러 (딱 이 팔레트만 · 상세는 `tokens.md`)

**Primitive**
```
navy    #1b2e6a  — 로고 SVG 전용 (웹 UI 금지)
ink     #0A2440  — 헤드라인 · 헤더 · 다크 CTA 배경
body    #212121  — 본문
sub     #555555  — 보조 텍스트
accent  #0169a9  — 링크 · CTA · 수치 · 킥커 (+ 300/400 lighter)
band    #F5F6F8  — 섹션 구분 오프화이트
hair    #E5E7EB  — 테두리
```

**State (신규 · 섹션 3)**
```
error    #dc2626  — 오류 · 실패
warning  #ea580c  — 주의
success  #137a52  — 성공 · Health OK
info     #0169a9  — 정보 (accent와 동일 값)
```

**금지**: 웜톤, 다크 배경 본문, 보라·네온 그라디언트, 임의 hex 값 (반드시 위 palette만).

### 1.3 형태
- **rounded-none** (직각). `rounded-2xl` 이상 금지.
- **헤어라인 중심**. 큰 그림자는 hover 시에만.
- **여백으로 위계**. 볼드 남발 금지.

### 1.4 컨테이너
```html
<div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
```
- 섹션 세로 패딩: 일반 `py-16 md:py-24`, 인트로 히어로 `py-16 md:py-24`.

### 1.4b 타이포그래피 · Shadow 토큰 (신규 · 섹션 4)

**신규 fontSize scale** (기존 arbitrary `text-[42px]` 지양 · 신규 코드는 이 semantic scale 사용)
```
text-caption  12px    — 라벨 · 뱃지
text-body-sm  13px    — 폼 라벨 · 브레드크럼
text-body     15px    — 본문 base
text-body-md  17px    — 서브 헤딩 body
text-body-lg  19px    — 인트로 body
text-h3       22px    — h3 · 카드 타이틀
text-h2       28px    — h2 서브섹션
text-h1       38px    — h1 페이지 타이틀
text-hero     48px    — 인트로 히어로
```

**신규 boxShadow scale**
```
shadow-card       — 카드 hover
shadow-panel      — 드롭다운 패널
shadow-megabar    — GNB 메가메뉴
shadow-lightbox   — Lightbox 모달
```

**기존 arbitrary는 유지** (시각 조정용) · 새 코드는 semantic scale.

### 1.5 모션
```css
transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
```
**금지**: `ease-in-out`, `linear`, `ease`.

### 1.6 인접 섹션 다른 레이아웃
같은 3열 카드 그리드 두 번 연달아 금지 → Bento · Zig-Zag · 다른 그리드 조합.

### 1.7 언어
AI 클리셰 한국어 금지: "혁신적인", "원활한", "차세대", "게임 체인저", "혁신을 통해".
지어낸 수치 금지 — 없으면 "실증 진행 중 · 완료 시 공개" 표기.

### 1.8 컴포넌트 시스템 (신규 · 섹션 2)

**모든 액션은 `.btn` 시스템 사용** (매번 긴 Tailwind 조합 금지):
```html
<a class="btn btn-primary btn-md">무료 현장 진단 →</a>
<a class="btn btn-outline-light btn-md">이메일 문의</a>
```
- Type: `btn-primary` · `btn-inverse` · `btn-outline-light` · `btn-outline-dark`
- Size: `btn-sm` · `btn-md` · `btn-lg`
- State: `.btn:disabled` · `.btn.is-loading`

**Card / Tag / Kicker 등 세부는 `components.md` 참조**

### 1.9 CTA 카피 통일 (섹션 4 결정)
- **Primary** (히어로 · CTA 카드): "무료 현장 진단"
- **Secondary** (footer · GNB 드롭다운): "도입 문의"
- 지양: 도입 상담 신청 · 데모 신청 · 상담 요청 (`glossary.md` 참조)

### 1.10 접근성 (신규 · 섹션 3)
- 모든 인터랙티브 요소에 `:focus-visible` 자동 적용 (`.btn`, `.dropdown-link`, `.bc-cell` 등)
- Focus outline: 2px solid #0169a9 · WCAG 2.1 준수

---

## 2. 페이지 시작 템플릿

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>페이지 제목 | ONTOH - 건설현장 안전관리 Physical AI 기업</title>
  <meta name="description" content="...">
  <link rel="canonical" href="https://ontoh.co.kr/...">
  <meta property="og:type" content="website">
  <meta property="og:title" content="...">
  <meta property="og:description" content="...">
  <meta property="og:image" content="https://ontoh.co.kr/assets/main/main1.png">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
  <script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>
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
  <link rel="stylesheet" href="css/common.css">
  <style>
    body { color: #212121; }
    .band { background: #F5F6F8; }
    /* 필요 컴포넌트 CSS 추가 (아래 참조) */
  </style>
</head>
<body class="bg-white font-sans antialiased">
  <!-- 헤더/GNB · 서브 히어로 · 콘텐츠 · CTA · 푸터 -->
  <script src="js/common.js"></script>
</body>
</html>
```

---

## 3. 컴포넌트 조각 (복사해서 사용)

### 3.1 Kicker (섹션 킥커)
```html
<p class="kicker">Case Studies</p>
```
```css
.kicker { display:inline-flex; align-items:center; gap:.6rem; font-size:13px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; color:#0169a9; }
.kicker::before { content:""; width:26px; height:2px; background:#0169a9; display:inline-block; }
```

### 3.2 Section Tag (상세 페이지 섹션 라벨)
```html
<p class="section-tag">과제 · Challenge</p>
```
```css
.section-tag { display:inline-block; font-size:12px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; color:#0169a9; margin-bottom:1rem; }
.section-tag::before { content:""; display:inline-block; width:26px; height:2px; background:#0169a9; vertical-align:middle; margin-right:.6rem; }
```

### 3.3 Tag / Chip
```html
<span class="tag bg-accent/10 text-accent">Vision 실증</span>
<span class="tag bg-ink/[0.06] text-ink">공공주택 지구조성</span>
```
```css
.tag { font-size:12px; font-weight:800; letter-spacing:.02em; padding:3px 9px; }
```

### 3.4 Card (`.corp-card`)
```html
<a href="..." class="corp-card block p-8 group">
  <h3 class="text-[22px] font-bold text-ink mb-3">타이틀</h3>
  <p class="text-[15px] text-sub leading-[1.75]">본문</p>
</a>
```
```css
.corp-card { background:#fff; border:1px solid #E5E7EB; transition: box-shadow .5s cubic-bezier(0.16,1,0.3,1), transform .5s cubic-bezier(0.16,1,0.3,1); }
.corp-card:hover { box-shadow: 0 18px 40px -22px rgba(10,36,64,.32); transform: translateY(-3px); }
```

### 3.5 KPI 3칸 (Impact in Numbers)
```html
<div class="grid md:grid-cols-3 gap-3 md:gap-4">
  <div class="bg-ink p-7 md:p-8">
    <div class="text-white kpi-num mb-3">40<small>+건/일</small></div>
    <p class="text-white/60 text-[13.5px] leading-relaxed">캡션</p>
  </div>
  <!-- x3 -->
</div>
```
```css
.kpi-num { font-size:44px; font-weight:800; line-height:1; letter-spacing:-.03em; font-variant-numeric:tabular-nums; }
.kpi-num small { font-size:20px; font-weight:700; margin-left:.15rem; }
```

### 3.6 Summary Strip 4칸
```html
<div class="summary-strip">
  <div>
    <p class="text-[11.5px] text-sub/60 font-bold tracking-[0.14em] uppercase mb-2">라벨</p>
    <p class="text-[15.5px] font-bold text-ink">값</p>
  </div>
  <!-- x4 -->
</div>
```
```css
.summary-strip { border:1px solid #E5E7EB; display:grid; grid-template-columns:repeat(2, 1fr); background:#fff; }
.summary-strip > div { padding:1.4rem 1.5rem 1.6rem; border-right:1px solid #E5E7EB; border-bottom:1px solid #E5E7EB; }
.summary-strip > div:nth-child(2n) { border-right:0; }
.summary-strip > div:nth-last-child(-n+2) { border-bottom:0; }
@media (min-width:768px) {
  .summary-strip { grid-template-columns:repeat(4, 1fr); }
  .summary-strip > div { border-bottom:0; border-right:1px solid #E5E7EB; }
  .summary-strip > div:nth-child(2n) { border-right:1px solid #E5E7EB; }
  .summary-strip > div:last-child { border-right:0; }
}
```

### 3.7 Points List (Challenge · Solution 등)
```html
<ul class="pts">
  <li>다수 시공사 병행 시공으로 <b>안전관리 통합 관제 부재</b></li>
</ul>
```
```css
.pts li { position:relative; padding:12px 0 12px 24px; border-bottom:1px solid #E5E7EB; color:#33383e; font-size:15.5px; line-height:1.65; }
.pts li:before { content:""; position:absolute; left:0; top:19px; width:8px; height:8px; border:2px solid #0169a9; border-radius:50%; }
.pts li b { color:#0A2440; font-weight:700; }
```

### 3.8 Badge (인라인 수치)
```html
오경보 <span class="ba">68% 감소</span>
```
```css
.ba { display:inline-block; background:#EAF0FA; color:#0A2440; font-weight:800; padding:2px 10px; font-size:14.5px; }
```

### 3.9 Law Chip (법령 나열)
```html
<span class="law-chip">산업안전보건법 제43조 (추락 방지)</span>
```
```css
.law-chip { font-size:13px; font-weight:700; color:#0A2440; background:#fff; border:1px solid #E5E7EB; padding:8px 13px; }
.law-chip::before { content:"§ "; color:#0169a9; }
```

### 3.10 Draft Notice (초안 배너)
```html
<div class="draft-notice">
  <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-3 text-[13px] text-[#8B6A00]">
    <iconify-icon icon="solar:info-circle-linear" class="align-middle text-[15px] mr-1"></iconify-icon>
    <strong>초안</strong> — 실증 진행에 따라 실제 데이터로 순차 업데이트됩니다.
  </div>
</div>
```
```css
.draft-notice { background:#FEF9E7; border-bottom:1px solid #F5DE83; }
```

---

## 4. GNB · 헤더 · 푸터

새 페이지 만들 때 **`about.html`의 `<header>`와 `<footer>`를 그대로 복사**해 사용.
서브 폴더면 경로에 `../` 붙일 것.

---

## 5. 자주 쓰는 Iconify Solar 아이콘

| 용도 | 아이콘 |
|---|---|
| 화살표 | `solar:arrow-right-linear` |
| 브레드크럼 구분 | `solar:alt-arrow-right-linear` |
| 안전·보호 | `solar:shield-check-linear` |
| 보건 | `solar:heart-pulse-linear` |
| 문서 | `solar:document-text-linear` |
| 과제(부정) | `solar:minus-circle-linear` |
| 해결(긍정) | `solar:check-circle-linear` |
| 안내 | `solar:info-circle-linear` |
| 인용 | `solar:quote-up-linear` |
| 메뉴 | `solar:hamburger-menu-linear` |

---

## 6. 최종 체크리스트

- [ ] `<html lang="ko">` 지정
- [ ] Tailwind CDN + Pretendard + Iconify 3종 로드
- [ ] `tailwind.config`에 색상 토큰 등록
- [ ] `css/common.css` `<link>`
- [ ] 헤더/GNB 복사 (같은 폴더면 그대로, 서브 폴더면 `../` 붙임)
- [ ] Hero → 본문 섹션 → CTA → 푸터 구조
- [ ] `js/common.js` `<script>`
- [ ] SEO meta (title · description · canonical · og:*) 채움
- [ ] `sitemap.xml`에 새 페이지 등록
- [ ] 이모지 없음
- [ ] rounded-none · 헤어라인
- [ ] `cubic-bezier(0.16, 1, 0.3, 1)` 이징
- [ ] AI 클리셰 한국어 없음
- [ ] 지어낸 수치 없음 (없으면 "실증 진행 중")

---

## 7. 참조 문서

- **[DESIGN.md](DESIGN.md)** — 상세한 이유·근거·컴포넌트 스펙 전부
- **[preview/index.html](preview/index.html)** — 실물로 확인
- **[colors_and_type.css](colors_and_type.css)** — CSS 변수만 필요할 때
- 아카이브: `archive/design-legacy/` — 이전 흩어진 문서들 (참고용)

---

_ONTOH Design Skill · v3.1 · 2026-07-28_  
_섹션 1~8 정합성 감사 반영 · 신규 문서 카탈로그 추가 (tokens.md · components.md · glossary.md · CHECKLIST.md)_
