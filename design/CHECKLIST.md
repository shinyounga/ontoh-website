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
| 4 | 디자인 토큰 | ☐ |
| 5 | 컴포넌트 사용 기준 | ☐ |
| 6 | Figma 파일 구조 (N/A · 코드 기반) | ☐ |
| 7 | 디자인과 코드의 연결 | ☐ |
| 8 | AI가 이해할 수 있는 문서 | ☐ |
| 9 | 접근성과 품질 기준 | ☐ |
| 10 | 운영과 관리 | ☐ |

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

## 4. 디자인 토큰

- [ ] **색상 값이 공통 토큰으로 관리되고 있나요?**  
화면마다 임의의 HEX 값을 사용하지 않고 공통 컬러 기준을 사용합니다.
- [ ] **색상 이름이 실제 색보다 의미를 중심으로 작성되어 있나요?**  
`Blue 500`만 사용하는 것보다 `Action Primary`, `Text Error`처럼 용도가 드러나는 토큰을 함께 사용합니다.
- [ ] **타이포그래피가 공통 스타일로 정리되어 있나요?**  
폰트 크기, 굵기, 행간을 화면마다 직접 입력하지 않도록 관리합니다.
- [ ] **간격과 크기 기준이 토큰으로 정의되어 있나요?**  
Spacing, Radius, Border, Shadow 등의 값을 공통 규칙으로 관리합니다.
- [ ] **토큰의 단계와 이름 규칙이 일관적인가요?**  
Primitive, Semantic, Component 토큰이 명확하게 구분되어 있어야 합니다.
- [ ] **컴포넌트가 직접 값이 아닌 토큰을 사용하고 있나요?**  
토큰을 수정하면 관련 컴포넌트에도 변경 사항이 함께 반영되어야 합니다.

---

## 5. 컴포넌트 사용 기준

- [ ] **각 컴포넌트를 언제 사용해야 하는지 정리되어 있나요?**  
컴포넌트의 형태뿐 아니라 적절한 사용 상황까지 안내해야 합니다.
- [ ] **비슷한 컴포넌트의 차이가 설명되어 있나요?**  
Toast와 Alert, Dialog와 Bottom Sheet처럼 혼동하기 쉬운 요소의 사용 기준을 구분합니다.
- [ ] **사용하면 안 되는 사례가 정리되어 있나요?**  
Do와 Don't 예시를 통해 잘못된 사용을 방지합니다.
- [ ] **텍스트와 콘텐츠 작성 기준이 있나요?**  
버튼 글자 수, 레이블 작성 방식, 문장형·명사형 기준 등을 함께 문서화합니다.
- [ ] **컴포넌트 조합 규칙이 정리되어 있나요?**  
어떤 컴포넌트를 함께 사용할 수 있는지, 권장 레이아웃은 무엇인지 안내합니다.
- [ ] **서비스별 예외 규칙이 기록되어 있나요?**  
일반적인 시스템 규칙과 특정 기능에서만 사용하는 예외를 구분합니다.

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

## 6. Figma 파일 구조 _(N/A · 코드 기반 프로젝트)_

_ONTOH는 Figma 없이 코드(HTML/CSS/Tailwind)로 직접 관리하므로 이 섹션은 참고용._

- [ ] **페이지와 섹션 이름이 명확하게 정리되어 있나요?**
- [ ] **컴포넌트와 실제 화면이 분리되어 있나요?** _(design/preview/ vs 실제 페이지)_
- [ ] **레이어명이 역할에 맞게 정리되어 있나요?** _(HTML 주석 · class 명)_
- [ ] **Auto Layout이 일관되게 적용되어 있나요?** _(Tailwind flex/grid 일관성)_
- [ ] **불필요한 중복 컴포넌트가 제거되어 있나요?**
- [ ] **사용하지 않는 이전 버전이 분리되어 있나요?** _(archive/ 폴더 활용)_

---

## 7. 디자인과 코드의 연결

- [ ] **Figma 컴포넌트와 개발 컴포넌트가 같은 이름을 사용하나요?** _(코드 기반이라 자동 통일)_
- [ ] **Figma와 실제 서비스의 컴포넌트 상태가 일치하나요?** _(N/A)_
- [ ] **Storybook 등에서 개발 컴포넌트를 확인할 수 있나요?** _(design/preview/ 활용)_
- [ ] **디자인 변경 사항이 코드에도 반영되는 과정이 정리되어 있나요?**
- [ ] **디자인 시스템의 최신 버전을 구분할 수 있나요?**
- [ ] **디자인과 코드 사이의 연결 정보가 기록되어 있나요?**

---

## 8. AI가 이해할 수 있는 문서

- [ ] **디자인 시스템의 목적과 기본 원칙이 문서화되어 있나요?**  
우리 서비스가 어떤 기준과 방향으로 디자인되는지 먼저 설명합니다.
- [ ] **규칙이 이미지뿐 아니라 텍스트로도 작성되어 있나요?**  
AI는 시각적 예시만 보는 것보다 명확하게 작성된 설명을 함께 제공받을 때 기준을 이해하기 쉽습니다.
- [ ] **컴포넌트의 역할과 선택 조건이 구체적으로 작성되어 있나요?**  
"필요할 때 사용"이 아니라 어떤 상황에서 무엇을 선택해야 하는지 설명합니다.
- [ ] **예외 상황과 금지 사항이 기록되어 있나요?**  
AI가 임의로 판단하지 않도록 허용 범위와 제한 사항을 함께 전달합니다.
- [ ] **서비스에서 사용하는 용어가 통일되어 있나요?**  
같은 기능을 여러 이름으로 부르지 않도록 제품 용어 사전을 관리합니다.
- [ ] **AI에게 제공할 기준 문서가 최신 상태로 관리되고 있나요?**  
과거 정책과 현재 정책이 섞이지 않도록 업데이트 일자와 담당자를 표시합니다.

---

## 9. 접근성과 품질 기준

- [ ] **텍스트와 배경의 명도 대비 기준이 적용되어 있나요?**  
색상 토큰과 상태별 컬러가 접근성 기준을 충족하는지 확인합니다.
- [ ] **Focus 상태가 시각적으로 명확하게 정의되어 있나요?**  
키보드 사용자가 현재 선택된 요소를 확인할 수 있어야 합니다.
- [ ] **색상 외의 방법으로 상태를 구분할 수 있나요?**  
오류나 성공 상태를 색상만으로 전달하지 않고 아이콘이나 텍스트를 함께 사용합니다.
- [ ] **터치 영역과 클릭 영역의 최소 기준이 있나요?**  
버튼과 아이콘이 실제 사용 환경에서 충분히 선택 가능한 크기인지 확인합니다.
- [ ] **긴 텍스트와 다국어 상황을 고려했나요?**  
텍스트가 늘어나거나 줄어들어도 컴포넌트가 깨지지 않도록 설계합니다.
- [ ] **반응형 환경의 동작이 정의되어 있나요?**  
화면 크기에 따라 컴포넌트의 크기와 배치가 어떻게 달라지는지 정리합니다.

---

## 10. 운영과 관리

- [ ] **디자인 시스템을 관리하는 담당자가 정해져 있나요?**
- [ ] **새 컴포넌트를 추가하는 기준이 있나요?**
- [ ] **컴포넌트 변경 내역을 확인할 수 있나요?**
- [ ] **기존 컴포넌트를 폐기하는 절차가 있나요?**
- [ ] **디자이너와 개발자가 함께 리뷰하나요?**
- [ ] **정기적으로 사용 현황을 점검하나요?**

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
- 다음: 섹션 4 (디자인 토큰)
