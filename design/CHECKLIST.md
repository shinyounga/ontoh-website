# ONTOH 디자인 시스템 체크리스트

_사용자와 AI(Claude)가 함께 확인하며 진행하는 디자인 시스템 정합성 점검 리스트._

**목적**
- 용어·컴포넌트·토큰의 일관성 확보
- AI가 정확한 요소를 선택·생성하도록 기준 문서화
- 반복 작업을 줄이고 예측 가능한 결과 확보

**사용 방법**
1. 각 섹션을 순서대로 점검
2. 발견된 이슈는 [design/DESIGN.md](DESIGN.md)에 반영
3. 완료된 항목은 `[x]`로 표시
4. 이 파일과 실제 구현(HTML/CSS)이 어긋나면 이 문서를 정본으로 삼음

**진행 상태 요약**  
| # | 섹션 | 상태 |
|---|---|---|
| 1 | 컴포넌트 이름과 구조 | ✅ 완료 (2026-07-28) |
| 2 | 필수 컴포넌트 구성 | ✅ 완료 (2026-07-28) |
| 3 | 상태와 Variant | ✅ 완료 (2026-07-28) |
| 4 | 디자인 토큰 | ✅ 완료 (2026-07-28) |
| 5 | 컴포넌트 사용 기준 | ☐ |
| 6 | Figma 파일 구조 (N/A · 코드 기반) | ✅ 완료 (2026-07-28) |
| 7 | 디자인과 코드의 연결 | ✅ 완료 (2026-07-28) |
| 8 | AI가 이해할 수 있는 문서 | ✅ 완료 (2026-07-28) |
| 9 | 접근성과 품질 기준 | ✅ 완료 (2026-07-28) |
| 10 | 운영과 관리 | ✅ 완료 (2026-07-28) |

---

## 1. 컴포넌트 이름과 구조 ✅

- [x] **컴포넌트명이 목적에 맞게 정의되어 있나요?**  
축약·시각 기반 이름(`.dbox` `.band` `.rule` `.megabar` `.corp-card` `.myeongjo`)을 역할 기반으로 rename 완료.
- [x] **유사한 역할의 컴포넌트명이 통일되어 있나요?**  
GNB 드롭다운(`.dlink`) + Breadcrumb 드롭다운(`.bc-panel a`) → **`.dropdown-link` 로 통일**.
- [x] **컴포넌트 이름이 모양보다 역할을 기준으로 작성되어 있나요?**  
`.band` → Tailwind `bg-band` 유틸로 전환 · `.rule` → `border-hair`.
- [x] **컴포넌트가 일관된 계층 구조로 정리되어 있나요?**  
prefix 규칙 확립: `.bc-*` (breadcrumb) · `.gnb-*` (GNB) · `.lb-*` (lightbox) · `.lc-*` (feature carousel) · `.nav-*` (nav base).
- [x] **하나의 컴포넌트가 지나치게 많은 역할을 담당하고 있지는 않나요?**  
`.bc-cell`은 modifier(`.bc-home` `.bc-menu` `.is-current`)로 명확히 분리됨. 다른 컴포넌트도 단일 역할.

### 리팩토링 결과 (2026-07-28)
| Before | After | 사유 |
|---|---|---|
| `.dbox` | `.gnb-panel-box` | context (GNB) 명시 |
| `.megabar` | `.gnb-megabar` | context 명시 |
| `.corp-card` | `.card` | 짧고 명확 |
| `.dlink` + `.bc-panel a` | `.dropdown-link` | GNB · Breadcrumb 통일 |
| `.band` (CSS) | `bg-band` (Tailwind) | 유틸로 통합 |
| `.rule` | `border-hair` (Tailwind) | 유틸로 통합 |
| `.myeongjo` | 삭제 | 미사용 |

### 최종 컴포넌트 카탈로그
- **Base/Utility**: `.hero-bg-fixed`
- **GNB**: `.nav-item` · `.nav-top::after` · `.nav-panel` · `.gnb-megabar` · `.gnb-panel-box` · `.dropdown-link`
- **Breadcrumb 스트립**: `.bc-row` · `.bc-cell` (`.bc-home` `.bc-menu` `.is-current`) · `.bc-item` · `.bc-panel` (`.dropdown-link`) · `.bc-caret`
- **카드·통계**: `.card` · `.news-row` · `.stat-num` · `.kicker` · `.tag`
- **Lightbox**: `.lb-trigger` · `.lb-thumb` · `.lb-badge` · `.lb-dialog` · `.lb-frame` · `.lb-close` · `.lb-cap` · `.lb-nav` (`.lb-prev` `.lb-next`)
- **Feature 04 캐러셀**: `.lc-viewport` · `.lc-stack` · `.lc-slide` · `.lc-dot` · `.lc-nav` · `.lc-controls`
- **문서 썸네일** (patents): `.doc-thumb` · `.doc-zoom`

---

## 2. 필수 컴포넌트 구성 ✅

- [x] **서비스에서 반복적으로 사용하는 기본 컴포넌트가 제작되어 있나요?**  
`.card` 260곳 · `.tag` 194곳 · `.kicker` 82곳 · `.stat-num` 181곳 · `.dropdown-link` 통일 · 반복 사용 컴포넌트 잘 구성.
- [x] **버튼과 링크 등 주요 액션 요소가 준비되어 있나요?**  
**`.btn` 시스템 신규 도입** (97개 버튼 인스턴스 통일). Primary/Inverse/Outline-Light/Outline-Dark × SM/MD/LG 조합.
- [x] **입력과 선택을 위한 폼 컴포넌트가 준비되어 있나요?**  
contact.html에 Formspree 폼 + `.form-label` 커스텀 클래스. 정적 마케팅 사이트라 이 수준으로 충분.
- [x] **사용자에게 상태를 전달하는 피드백 컴포넌트가 있나요?**  
Lightbox(dialog) + Feature 04 캐러셀 컨트롤. 정적 사이트라 Toast/Alert 불필요 (contact 폼은 Formspree 자체 처리).
- [x] **데이터를 보여주기 위한 컴포넌트가 정리되어 있나요?**  
`.card` · `.tag` · `.kicker` · `.stat-num` · `.dropdown-link` · list(ul/ol) 다양한 표현 방식 확보.
- [x] **빈 화면과 오류 상황을 위한 컴포넌트가 있나요?**  
정적 사이트라 Empty/Error State 대부분 N/A. Hoster(GitHub Pages)의 404 fallback 활용.

### 신규 `.btn` 시스템 (2026-07-28 도입)

```
Base:      .btn
Variants:  .btn-primary · .btn-inverse · .btn-outline-light · .btn-outline-dark
Sizes:     .btn-sm (16.5px) · .btn-md (18px) · .btn-lg (18px, larger padding)
```

**사용 예시:**
```html
<a class="btn btn-primary btn-md">무료 현장 진단</a>
<a class="btn btn-outline-light btn-md">이메일 문의</a>
```

**변경 규모:** 97개 버튼 인스턴스 통일 · 25개 파일 · 22개 파일 CSS 추가

### 컴포넌트 종류 예시
**1. 기본 액션** — Button · Icon Button · Link · Dropdown Menu  
**2. 입력 요소** — Input · Textarea · Select · Checkbox · Radio · Switch · Date Picker  
**3. 탐색 요소** — Tabs · Breadcrumb · Pagination · Navigation · Stepper  
**4. 피드백 요소** — Toast · Alert · Tooltip · Dialog · Loading · Progress  
**5. 데이터 표현** — Card · List · Table · Badge · Tag · Empty State  

---

## 3. 상태와 Variant ✅

- [x] **기본 상태 외에 필요한 인터랙션 상태가 정의되어 있나요?**  
Hover(21곳)·Active(.btn-inverse)·**Focus (22개 파일 배포 · `:focus-visible outline 2px solid #0169a9`)** WCAG 2.4.7 준수.
- [x] **사용할 수 없는 상태가 명확하게 구분되어 있나요?**  
`.btn:disabled` `.btn.is-disabled` · `input/select/textarea:disabled` · opacity + cursor:not-allowed + pointer-events:none.
- [x] **오류와 경고 상태가 정의되어 있나요?**  
Tailwind config에 4가지 state color 추가: `error #dc2626` · `warning #ea580c` · `success #137a52` · `info #0169a9`.  
Text/Tag/Alert variant 각각 정의: `.text-error/warning/success/info` · `.tag-error/warning/success/info` · `.alert-error/warning/success/info`.
- [x] **로딩과 처리 중 상태가 준비되어 있나요?**  
`.btn.is-loading` · spinner (border rotation animation) · color 투명 + pointer-events 차단. 정적 사이트라 페이지 로딩은 N/A.
- [x] **사이즈와 유형이 Variant로 정리되어 있나요?**  
`.btn` = Type(Primary/Inverse/Outline-Light/Outline-Dark) × Size(SM/MD/LG). Tag/Alert도 State variant 정의.
- [x] **Property 이름이 AI가 이해하기 쉽게 작성되어 있나요?**  
`btn-primary`(Type) · `btn-md`(Size) · `is-current` `is-active` `is-loading` `is-disabled`(State) · `tag-error`(State variant) · 모두 역할 기반.

### 신규 State 시스템 (2026-07-28)

```
Focus:     22개 파일 · :focus-visible outline
Disabled:  .btn:disabled · input:disabled 등
Loading:   .btn.is-loading (spinner)
Text:      .text-error/warning/success/info
Tag:       .tag-error/warning/success/info
Alert:     .alert-error/warning/success/info
Colors:    error #dc2626 · warning #ea580c · success #137a52 · info #0169a9
```

### Property 표준
```
Type  = primary / inverse / outline-light / outline-dark
Size  = sm / md / lg
State = default (base) · hover · active · focus · disabled · loading · is-current · is-active
```

### 권장 Property 구조
```
Type   = Primary / Secondary / Tertiary
Size   = Small / Medium / Large
State  = Default / Hover / Pressed / Focus / Disabled
Loading = True / False
```

---

## 4. 디자인 토큰 ✅

- [x] **색상 값이 공통 토큰으로 관리되고 있나요?**  
Tailwind config에 12색상 정의 (navy/ink/body/sub/accent+3/band/hair) + 4 state color (error/warning/success/info).
- [x] **색상 이름이 실제 색보다 의미를 중심으로 작성되어 있나요?**  
`ink`(딥네이비 헤드라인) · `accent`(강조 링크·CTA) · `band`(연회색 밴드) · `hair`(헤어라인 border) · `error/warning/success/info` 모두 의미 기반.
- [x] **타이포그래피가 공통 스타일로 정리되어 있나요?**  
**신규 fontSize scale 9종 추가** (`text-caption` ~ `text-hero`) · Tailwind fontSize extend · line-height/letter-spacing 포함.
- [x] **간격과 크기 기준이 토큰으로 정의되어 있나요?**  
Spacing: Tailwind 기본 · Radius: 직각(rounded-none) 원칙 · Border: `border-hair` · **Shadow: 4종 semantic scale 신규** (`shadow-card/panel/megabar/lightbox`).
- [x] **토큰의 단계와 이름 규칙이 일관적인가요?**  
Primitive(Tailwind config) · Semantic(이름 자체가 semantic · ink/accent/error 등 겸함) · Component(.btn/.card/.tag 등) 3-layer.
- [x] **컴포넌트가 직접 값이 아닌 토큰을 사용하고 있나요?**  
`.btn-primary { background: #0A2440 }` = Tailwind `ink` 토큰. CSS 안 hex는 Primitive 참조. 향후 신규 코드는 semantic scale (`text-h1` `shadow-card` 등) 사용.

### 신규 Tailwind extend (2026-07-28)

**fontSize scale (9종)**  
`text-caption` (12px) · `text-body-sm` (13px) · `text-body` (15px) · `text-body-md` (17px) · `text-body-lg` (19px) · `text-h3` (22px) · `text-h2` (28px) · `text-h1` (38px) · `text-hero` (48px)

**boxShadow scale (4종)**  
`shadow-card` · `shadow-panel` · `shadow-megabar` · `shadow-lightbox`

### 카탈로그 위치
전체 토큰 정의는 **[design/tokens.md](tokens.md)** 신규 파일 참조.

### 기존 arbitrary 값 처리 원칙
- 15가지 arbitrary `text-[Xpx]` 시각 조정용 · 기존 코드 유지
- 새 컴포넌트/리팩토링에만 semantic scale 사용 (혼용 방지)

---

## 5. 컴포넌트 사용 기준 ✅

- [x] **각 컴포넌트를 언제 사용해야 하는지 정리되어 있나요?**  
[design/components.md](components.md) · 12개 주요 컴포넌트(Button/Card/Tag/Kicker/StatNumber/DropdownLink/Breadcrumb/Lightbox/Carousel/Alert/Form/Navigation) 각각 목적·사용 상황·비사용 상황 명시.
- [x] **비슷한 컴포넌트의 차이가 설명되어 있나요?**  
Alert vs Toast (Toast 미도입 · Alert 인라인 지속 · Toast 우상단 일시), Card vs Alert (그룹핑 vs 상태 알림), Tag vs Btn (라벨 vs 액션) 등.
- [x] **사용하면 안 되는 사례가 정리되어 있나요?**  
각 컴포넌트마다 Do & Don't 코드 예시 · 안티패턴 명시 (card 중첩 · btn-primary 다중 · kicker 안 kicker 등).
- [x] **텍스트와 콘텐츠 작성 기준이 있나요?**  
헤딩(h1 6-10자·h2 12-30자·h3 5-15자) · 버튼(6-10자 명사구) · Tag(2-8자) · AI 클리셰 금지 목록 · 정중형 필수.
- [x] **컴포넌트 조합 규칙이 정리되어 있나요?**  
권장 조합(kicker → H2 → 서브카피 → 콘텐츠), 지양 조합, 여백 위계(py-16/24 · mb-14/16 · p-6/7/8) 문서화.
- [x] **서비스별 예외 규칙이 기록되어 있나요?**  
patents.html의 `.doc-thumb` · blog의 `.prose/.define/.toc-link/#readingProgress` · contact의 `.form-*/.honeypot` 등 페이지 전용 클래스 정리.

### 문서 위치
전체 사용 가이드는 **[design/components.md](components.md)** 신규 파일 참조.

### 컴포넌트 문서에 포함할 항목
```
컴포넌트명
사용 목적
사용하는 상황
사용하지 않는 상황
Property 및 Variant
텍스트 작성 기준
상태별 동작
접근성 기준
디자인 예시
개발 컴포넌트 링크
```

---

## 6. Figma 파일 구조 _(코드 기반으로 재해석)_ ✅

_ONTOH는 Figma 없이 코드(HTML/CSS/Tailwind)로 직접 관리. 각 항목을 파일/폴더/HTML 구조로 재해석하여 점검._

- [x] **페이지와 섹션 이름이 명확하게 정리되어 있나요?**  
파일명 role-based (about/vision/health/patents/contact/references/terms/privacy/blog). 섹션은 HTML 주석으로 `<!-- ==================== 섹션명 ==================== -->` 명시.
- [x] **컴포넌트와 실제 화면이 분리되어 있나요?**  
`design/preview/` = UI 킷 (컴포넌트 갤러리) · 정본 페이지 = 화면. 명확 분리.
- [x] **레이어명이 역할에 맞게 정리되어 있나요?**  
HTML class는 섹션 1 리팩토링으로 role-based prefix 통일 (`.bc-*` `.gnb-*` `.lb-*` `.lc-*` `.btn-*` 등). ID는 semantic (`#lb` `#formSuccess` `#mobileMenu`).
- [x] **Auto Layout이 일관되게 적용되어 있나요?**  
Tailwind flex/grid 일관 사용 · 인접 섹션 동일 레이아웃 지양 (Bento · Zig-Zag) · CLAUDE.md 규칙 준수.
- [x] **불필요한 중복 컴포넌트가 제거되어 있나요?**  
섹션 1 리팩토링에서 이름 통일 · 섹션 2 리팩토링에서 97개 버튼 인스턴스 통합 · 중복 제거 완료.
- [x] **사용하지 않는 이전 버전이 분리되어 있나요?**  
`archive/` 폴더 활용: design-legacy · history_demos · menu_demos · pre_v3 · pre-restructure · v2_intermediate · 구 인덱스 버전 등 완전 분리.

---

## 7. 디자인과 코드의 연결 ✅

- [x] **Figma 컴포넌트와 개발 컴포넌트가 같은 이름을 사용하나요?**  
N/A · 코드 기반이라 자동 통일 (Figma 없음). 컴포넌트 이름 규칙은 [components.md](components.md) 참조.
- [x] **Figma와 실제 서비스의 컴포넌트 상태가 일치하나요?**  
N/A · 코드가 유일한 진실 소스.
- [x] **Storybook 등에서 개발 컴포넌트를 확인할 수 있나요?**  
`design/preview/` 5개 페이지 (index/colors/typography/spacing/components) · 로컬 서버로 브라우저 확인 가능.
- [x] **디자인 변경 사항이 코드에도 반영되는 과정이 정리되어 있나요?**  
[design/README.md](README.md) "기여 · 업데이트 워크플로우" 섹션 · 신규 컴포넌트/토큰 변경/리팩토링 각각 절차 문서화.
- [x] **디자인 시스템의 최신 버전을 구분할 수 있나요?**  
Git commit 히스토리 (primary source) + CHECKLIST.md 진행 로그 + 각 문서 하단 업데이트 날짜.
- [x] **디자인과 코드 사이의 연결 정보가 기록되어 있나요?**  
[components.md](components.md) 각 컴포넌트 실제 사용 예시 + [tokens.md](tokens.md) 토큰-Tailwind config 매핑 + [README.md](README.md) 파일 구성 표.

---

## 8. AI가 이해할 수 있는 문서 ✅

- [x] **디자인 시스템의 목적과 기본 원칙이 문서화되어 있나요?**  
[SKILL.md](SKILL.md) 브랜드 요약(30초) · [README.md](README.md) 30초 요약 · [CLAUDE.md](../CLAUDE.md) 회사·디자인 지침. 3중 문서화.
- [x] **규칙이 이미지뿐 아니라 텍스트로도 작성되어 있나요?**  
모든 규칙 마크다운 텍스트. Do/Don't 코드 예시 (components.md) + 시각 예시 (design/preview/) 병행.
- [x] **컴포넌트의 역할과 선택 조건이 구체적으로 작성되어 있나요?**  
[components.md](components.md) 12개 컴포넌트 각각 "사용 상황 · 사용하지 않는 상황" 명시.
- [x] **예외 상황과 금지 사항이 기록되어 있나요?**  
[CLAUDE.md "절대 하지 말 것"] · [components.md Do/Don't] · [SKILL.md "반드시 지킬 것 · 금지"] · [glossary.md "지양 표현"] 4중 방어.
- [x] **서비스에서 사용하는 용어가 통일되어 있나요?**  
**[design/glossary.md](glossary.md) 신규 생성** · 브랜드/제품/시나리오/CTA/톤 10개 카테고리 · 표준 vs 금지 표기 대조.
- [x] **AI에게 제공할 기준 문서가 최신 상태로 관리되고 있나요?**  
각 문서 하단 업데이트 날짜 · Git commit 히스토리 · CHECKLIST 진행 로그 · SKILL.md v3.1 갱신 (섹션 8 반영).

### AI 참조 문서 계층 (v3.1)

```
CLAUDE.md          — 프로젝트 최상위 · 브랜드·회사·디자인 30초 요약
    ↓
design/SKILL.md    — Claude/AI 에이전트 스킬 파일 · 필수 규칙 요약
    ↓
design/README.md   — 문서 인덱스 · 워크플로우
    ↓
design/tokens.md   — Color · Typography · Shadow · Radius · Spacing
design/components.md — 12개 컴포넌트 상세 (Property · Do/Don't · 텍스트 규칙)
design/glossary.md — 용어 사전 (브랜드 · 제품 · 시나리오 · CTA · 톤)
design/CHECKLIST.md — 정합성 감사 로그 (10섹션)
design/DESIGN.md   — 이론적 배경 · 레퍼런스 (상세)
```

### AI 프롬프트 시 참조 우선순위
1. **작업 유형이 명확한 경우**: 해당 문서만 (버튼 = components.md#1-button · 토큰 값 = tokens.md · 용어 = glossary.md)
2. **새 페이지 만들 때**: SKILL.md 전체 → components.md 필요 컴포넌트 → tokens.md 값 참조
3. **리팩토링·정합성 감사**: CHECKLIST.md 진행 로그 확인 후 관련 섹션 참조

---

## 9. 접근성과 품질 기준 ✅

- [x] **텍스트와 배경의 명도 대비 기준이 적용되어 있나요?**  
사이트 사용 색상 조합 전체 실측: Ink 14.87:1 (AAA) · Body 16.13:1 (AAA) · Sub 7.46:1 (AAA) · Accent 5.68:1 (AA) · Success 4.76:1 (AA) · Error 5.94:1 (AA) — [design/a11y.md §1](a11y.md#1-색상대비-wcag-143-146) 상세.
- [x] **Focus 상태가 시각적으로 명확하게 정의되어 있나요?**  
섹션 3에서 확립 · `:focus-visible` 3px accent 아웃라인 · 24개 파일 반영. 스킵 링크 Focus 시 상단 노출.
- [x] **색상 외의 방법으로 상태를 구분할 수 있나요?**  
Alert 4종 (error/warning/success/info) 각각 색상 + Iconify Solar 아이콘 + 텍스트 라벨 병행 · [components.md #10 Alert](components.md).
- [x] **터치 영역과 클릭 영역의 최소 기준이 있나요?**  
`.btn.btn-md` 52px · `.bc-cell` 48×48 · Form input 52px · WCAG 44px 초과 · [a11y.md §4](a11y.md#4-터치클릭-영역-wcag-255).
- [x] **긴 텍스트와 다국어 상황을 고려했나요?**  
컴포넌트별 글자 수 규칙 (components.md #13) · `<html lang="ko">` 30개 파일 · Pretendard 다국어 지원.
- [x] **반응형 환경의 동작이 정의되어 있나요?**  
Tailwind 브레이크포인트 6단계 · `py-16 md:py-24` 등 여백 위계 · `min-h-[100dvh]` · [a11y.md §6](a11y.md#6-반응형).

### 추가 조치 (배치 완료 · 13개 페이지)
- **Skip-to-content 링크** — `<a href="#main" class="skip-to-content">본문 바로가기</a>` (WCAG 2.4.1)
- **`<main id="main" tabindex="-1">`** 랜드마크 (기존 `<main>` 있는 경우 id/tabindex 추가 · 없으면 header→footer 사이 wrap)
- **`.skip-to-content` CSS** (Ink 배경 · Focus 시 상단 노출)
- **`prefers-reduced-motion`** 전역 미디어 쿼리 (모든 애니메이션·트랜지션 최소화)

### 신규 문서
- **[design/a11y.md](a11y.md)** — WCAG 2.1 AA 기준 · 9개 섹션 (색상대비 · Focus · 상태 · 터치 · 텍스트 · 반응형 · 시맨틱 · 모션 · 점검)

---

## 10. 운영과 관리 ✅

- [x] **디자인 시스템을 관리하는 담당자가 정해져 있나요?**  
CEO 김태건 (오너 · 브랜드 결정 · 최종 승인) · AI 협업 Claude Code (구현·문서화) · [operations.md §1](operations.md#1-담당자-ownership).
- [x] **새 컴포넌트를 추가하는 기준이 있나요?**  
5개 판단 체크리스트 (재사용성·기존 조합 대안·토큰 준수·CLAUDE.md 규정·접근성) + 7단계 프로세스 · [operations.md §2](operations.md#2-신규-컴포넌트-추가-기준).
- [x] **컴포넌트 변경 내역을 확인할 수 있나요?**  
Git commit 히스토리 (primary) + CHECKLIST.md 진행 로그 (secondary) + 문서 하단 업데이트 날짜 + SKILL.md/README.md 버전 표기 · [operations.md §3](operations.md#3-변경-내역-확인).
- [x] **기존 컴포넌트를 폐기하는 절차가 있나요?**  
5단계 (사용처 확인 → components.md 제거 → CSS 삭제 → archive/ 이동 → CHECKLIST 로그) · 실 폐기 사례 4건 문서화 · [operations.md §4](operations.md#4-기존-컴포넌트-폐기-deprecation-절차).
- [x] **디자이너와 개발자가 함께 리뷰하나요?**  
현 구조 = CEO 겸직 · Solo + AI cross-check 모델 · 셀프 리뷰 체크리스트 + AI 질의 체크리스트 · 팀 확장 시 프로세스 갱신 지점 명시 · [operations.md §5](operations.md#5-디자이너--개발자-협업-리뷰).
- [x] **정기적으로 사용 현황을 점검하나요?**  
분기별 (CHECKLIST 순회 + 컴포넌트 사용 감사) · 반기별 (Lighthouse 실측 + 벤치마크 재검토) · 자동화 후보 (GitHub Actions Lighthouse CI 등) · [operations.md §6](operations.md#6-정기-사용-현황-점검).

### 신규 문서
- **[design/operations.md](operations.md)** — 8개 섹션 · 담당자 · 신규/폐기 프로세스 · 리뷰 · 정기 점검 · 문서-코드 정합성 유지

---

## 진행 로그

_점검 진행 시 여기에 발견 사항, 결정 사항, 후속 액션 기록._

### 2026-07-28
- 체크리스트 파일 생성
- **섹션 1 완료** · 대규모 rename 리팩토링 (29개 파일)
  - `.dbox`/`.megabar`/`.corp-card`/`.dlink` → prefix 계층 규칙 적용
  - `.dlink` + `.bc-panel a` → `.dropdown-link` 통일
  - `.band`/`.rule` → Tailwind 유틸(`bg-band`/`border-hair`)로 통합
  - `.myeongjo` 삭제 (미사용)
- **섹션 2 완료** · 버튼 시스템 신규 도입 (97개 인스턴스 통일)
- **섹션 3 완료** · State 시스템 전면 구축 (Focus·Disabled·Loading·State Colors)
- **섹션 4 완료** · Tailwind fontSize(9종) + boxShadow(4종) scale 신규 · design/tokens.md 카탈로그
- **섹션 5 완료** · design/components.md 신규 (12개 컴포넌트 사용 가이드 · Do/Don't · 텍스트 규칙 · 조합 원칙 · 예외 규칙)
- **섹션 6 완료** · 파일 구조 · HTML 주석 · Auto Layout · archive 활용 모두 정합성 확인
- **섹션 7 완료** · design/README.md 워크플로우 섹션 추가 · 문서 인덱스 최신화 (v3.1)
- **섹션 8 완료** · design/glossary.md 신규 (10개 카테고리 용어 사전) · SKILL.md v3.1 갱신 (신규 문서 카탈로그 · State/Typography/Shadow scale 반영)
- **섹션 9 완료** · design/a11y.md 신규 (WCAG 2.1 AA 기준) · 13개 페이지에 skip-to-content · `<main id="main">` · prefers-reduced-motion CSS 배치 반영
- **섹션 10 완료** · design/operations.md 신규 (담당자·신규/폐기 프로세스·리뷰·정기 점검·문서-코드 정합성 8개 섹션) · **CHECKLIST 10섹션 전체 완료**
- **Kicker 스펙 개정** (v3.3 → v3.4) · 26×2px 가로선 → **4×18px 세로 블록** (건축·구조적 톤 강화 · 시재건설급 대형 건설사 톤 매치)
  - HTML 19개 파일 batch 적용 (`.kicker` + `.section-tag` 일괄)
  - 문서 갱신: DESIGN.md · SKILL.md · components.md
  - 판단 근거: 아티팩트 10종 시각 비교 (kicker-variants) · 3번(Vertical Block Bold) 선정
