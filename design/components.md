# ONTOH 컴포넌트 사용 가이드

_각 컴포넌트를 언제 · 어떻게 · 어떤 텍스트로 사용해야 하는지의 단일 참조._  
_토큰 참조: [tokens.md](tokens.md) · 클래스 카탈로그: [CHECKLIST.md](CHECKLIST.md)_

**업데이트**: 2026-07-28 · 섹션 5

---

## 목차
1. Button · 2. Card · 3. Tag · 4. Kicker · 5. Stat Number
6. Dropdown Link · 7. Breadcrumb · 8. Lightbox · 9. Feature Carousel
10. Alert · 11. Form · 12. Navigation
13. 텍스트 · 콘텐츠 작성 규칙 · 14. 컴포넌트 조합 원칙 · 15. 서비스별 예외 규칙

---

## 1. Button

**목적**: 사용자 액션(제출·이동·확인·취소) 트리거.

**사용 상황**: CTA · 폼 제출 · 모달 열기/닫기  
**사용하지 않는 상황**: 단순 이동만 → `<a>` 텍스트 링크

### Variant
- Type: `.btn-primary` (주 액션 · 밝은 배경) · `.btn-inverse` (주 액션 · 어두운 배경) · `.btn-outline-light` (보조 · 어두운 배경) · `.btn-outline-dark` (보조 · 밝은 배경)
- Size: `.btn-sm` (GNB 우측) · `.btn-md` (기본) · `.btn-lg` (모바일 메뉴)
- State: Default · Hover · Active · Focus (자동) · `.is-disabled` · `.is-loading`

### 텍스트 규칙
- 6-10자 이상적 (최대 15자)
- 명사구 우선 ("무료 현장 진단" O · "진단 받기" X)
- 아이콘은 텍스트 오른쪽

### Do
```html
<a href="contact.html" class="btn btn-primary btn-md">
  무료 현장 진단 <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
```

### Don't
```html
<!-- ❌ 긴 Tailwind 조합 반복 -->
<a class="inline-flex items-center bg-ink text-white px-7 py-3.5 text-[18px] font-bold ...">
<!-- ❌ Primary 여러 개 -->
<a class="btn btn-primary btn-md">진단</a>
<a class="btn btn-primary btn-md">문의</a>
```

---

## 2. Card

**목적**: 정보 단위(제품·뉴스·기능)를 시각적으로 그룹화.

**사용 상황**: Bento 그리드 · 3-column 카드 리스트 · 독립된 데이터  
**사용하지 않는 상황**: 리스트에 가까운 데이터 → 표 · 상태 알림 → `.alert-*`

### Property
- Base: `.card` (bg white · border hair · hover shadow-card)
- 조합: `p-6/7/8/10` (padding) · `flex flex-col`

### 텍스트 규칙
- 제목 15자 이내 · 본문 2-3줄 이내

### Do
```html
<article class="card p-7 flex flex-col">
  <h3 class="text-h3 font-bold text-ink mb-3">일일 위험 탐지 리포트</h3>
  <p class="text-body-sm text-sub">탐지 건수·유형·시간대별 패턴을 자동 정리한 일일 보고서.</p>
</article>
```

### Don't
- ❌ Card 안 Card 중첩 · ❌ 배경색 임의 변경

---

## 3. Tag / Chip

**목적**: 짧은 라벨 · 속성 · 카테고리 표시.

**사용 상황**: 카드 내 속성 · 필터 · 상태 표시  
**사용하지 않는 상황**: 클릭 액션 → `.btn` · 강조 텍스트 → `<strong>` `.text-*`

### Variant
- Base: `.tag` (bg-ink/[0.06] · text-ink)
- State: `.tag-error/warning/success/info`

### 텍스트 규칙
- 2-8자 · 명사 · 마침표 없음

### Do
```html
<ul class="flex flex-wrap gap-1.5">
  <li class="tag bg-ink/[0.06] text-ink">스트랩 착·비착 판별</li>
</ul>
<span class="tag tag-success">등록 완료</span>
```

### Don't
- ❌ Tag를 CTA로 사용 · ❌ 긴 문장 (10자 초과)

---

## 4. Kicker

**목적**: 섹션 상단 라벨 · "이 섹션이 무엇인지" 1-2단어.

**사용 상황**: 큰 헤딩(H2/H1) 위 · 섹션 시작 신호  
**사용하지 않는 상황**: 카드 안 · 페이지당 5개 이상 (남발 금지)

### Property (v3.5 · 2026-07-28 개정)
`.kicker` (**15px** · font-extrabold · accent · **세로 블록 5×20px prefix**)

**CSS**:
```css
.kicker { display:inline-flex; align-items:center; gap:.7rem; font-size:15px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; color:#0169a9; }
.kicker::before { content:""; width:5px; height:20px; background:#0169a9; display:inline-block; }
```

**시각적 특징**: 건축·구조적 · 시재건설급 대형 건설사 톤 강화. 텍스트 높이와 매칭되는 세로 액센트 블록. 위계 강화 (13→15px).

**변경 히스토리**:
- v3.5 (2026-07-28) — 폰트 15px · 블록 5×20px (위계 강화)
- v3.4 (2026-07-28) — 폰트 13px · 블록 4×18px (세로 블록 도입)
- v3.3 이전 — 폰트 13px · 26×2px 가로선 (저널리즘)

### 텍스트 규칙
- **한글 우선** (실제 사이트 전부 한글 · 영문 대문자는 미사용)
- 2-8자 · 명사구 · 마침표 없음
- 실 사용 예: "오시는 길" · "회사개요" · "핵심 기능" · "연구·성과" · "실증 사례"

### Do
```html
<p class="kicker">Products</p>
<h2 class="text-h2 font-bold">온토비전이 현장을 지키는 방법</h2>
```

### Don't
- ❌ 긴 문장 · 마침표 · 물음표 · ❌ kicker 안 kicker

---

## 5. Stat Number

**목적**: 숫자 통계 강조 (수치 · 성과).

**사용 상황**: Trust stats (5건 특허 · 13편 논문 · 20,000+ 데이터셋)

### Property
`.stat-num` (tabular-nums · letter-spacing 최적)

### Do
```html
<div class="stat-num text-h1 font-bold text-ink">
  5<span class="text-body font-semibold text-sub ml-1">건</span>
</div>
<p class="text-body-sm text-sub">특허 출원·등록</p>
```

---

## 6. Dropdown Link

**목적**: 드롭다운 패널 내 링크 아이템 (GNB · Breadcrumb 공통).

### Variant
- Base: `.dropdown-link`
- Context: `.gnb-panel-box .dropdown-link` (D4 Arrow) · `.bc-panel .dropdown-link` (D5 Accent Fill)
- State: `.dropdown-link.is-active` (현재 페이지)

### 텍스트 규칙
- 4-10자 · 명사 · 대메뉴명 동일

---

## 7. Breadcrumb

**목적**: 현재 위치 표시 + 상위 카테고리 이동.

### Property (한솔홈데코 스타일)
- `.bc-row` `.bc-cell` (48px 균일)
- `.bc-cell.bc-home` (48×48 정사각형)
- `.bc-cell.bc-menu` (min-width 158)
- `.bc-cell.is-current` (현재 페이지)
- Divider: `border-right: 1px solid rgba(255,255,255,0.15)`

### 사용 규칙
- 홈 아이콘 항상 첫 셀
- 대메뉴 → 중메뉴 순서 · 3단계 초과 지양
- 드롭다운 = 4개 대메뉴 리스트

### Don't
- ❌ Breadcrumb 없이 페이지 시작 (홈 제외 필수) · ❌ 화살표 아이콘 (세로선 원칙)

---

## 8. Lightbox

**목적**: 이미지 확대 팝업.

### Property
- Trigger: `<button data-lb="..." data-lb-cap="..." data-lb-group="...">`
- Container: `<dialog id="lb" class="lb-dialog">`
- 좌우 순환: 같은 `data-lb-group` 값 트리거 · 키보드 ←/→ · Esc 닫기

### 사용 상황
- 감지 시나리오 예시 · 특허/논문 썸네일 · 갤러리 이미지

### Don't
- ❌ 텍스트만 표시 · ❌ 폼 입력 (Modal 별도 필요)

---

## 9. Feature Carousel

**목적**: 여러 사례(Case)를 자동 순환 + 수동 이동.

### Property (Feature 04 규정 매칭 사례)
- `.lc-viewport` (playing 클래스로 auto)
- `.lc-stack > .lc-slide`
- `.lc-controls` (도트 · 화살표)

### 사용 상황
- 3-6개 케이스 순환

### Don't
- ❌ 2개 이하 (병렬 배치로) · ❌ 10개 이상 (인지 부담)

---

## 10. Alert

**목적**: 사용자에게 상태 알림.

### Variant
- `.alert-error` (빨강) · `.alert-warning` (주황) · `.alert-success` (녹색) · `.alert-info` (accent)

### vs Toast (미도입)
- Alert: 인라인 · 지속 표시 (폼 오류)
- Toast: 일시 · 우상단 팝업 (액션 결과) — 미도입

### Do
```html
<div class="alert alert-success">
  <b>전송 완료</b> · ONTOH 담당자가 24시간 내로 답변 드립니다.
</div>
```

---

## 11. Form

**목적**: 사용자 입력 수집 (contact.html 전용).

### Property
- `.form-label` (레이블) · `.form-input` `.form-textarea` (입력)
- `.form-checkbox` · `.form-state.success/error`

### 사용 규칙
- `required` HTML5 속성 → 필수 필드 (`<span class="required">*</span>`)
- 에러는 `.alert-error` or `.form-state.error`

### 텍스트 규칙
- 라벨: 명사 (예: "회사명·기관명")
- Placeholder: `예) ○○주식회사`

---

## 12. Navigation

### GNB
- `.nav-item` `.nav-top` (밑줄 hover) · `.nav-panel` · `.gnb-megabar` · `.gnb-panel-box`
- 위치: sticky · 92px 높이
- 대메뉴 4개: 회사소개 · 제품소개 · 기술·연구 · 문의

### Breadcrumb Strip
- GNB 아래 얇은 남색 스트립 (48px)
- 홈 → 대메뉴 → 중메뉴

### Sitemap Rules
- 대메뉴 4개 고정 · 신규 추가는 별도 논의
- 중메뉴: 각 대메뉴 하위 1-4개 이내

---

## 13. 텍스트 · 콘텐츠 작성 규칙

### 일반 원칙
- **한국어 정중형** (합니다체) · 반말/축약 금지
- **AI 클리셰 금지**: "혁신적인" "원활한" "차세대" "게임 체인저" X
- **지어낸 수치 금지** — 없으면 "실증 진행 중"
- 중점(`·`) 사용: "감지 · 판단 · 개입 · 기록"

### 헤딩 계층
- h1 (페이지): 페이지당 1개 · 6-10자
- h2 (섹션): 12-30자 · 명사구
- h3 (하위): 5-15자

### 버튼 텍스트
- 6-10자 이상적 · 명사구 우선

### Tag 텍스트
- 2-8자 · 마침표 없음

### 카피 톤 (CLAUDE.md)
- 대형 건설사 · 기관형 톤 · 시재건설급 무게감

---

## 14. 컴포넌트 조합 원칙

### 권장 조합
- **Section**: kicker → H2 → 서브카피 → 콘텐츠(card grid · list)
- **CTA 카드**: kicker → H2 → 서브카피 → btn-primary + btn-outline
- **Feature**: 01 번호 → h3 → body 리스트 → tag chips

### 지양 조합
- ❌ kicker 안 kicker · ❌ card 안 card · ❌ btn-primary 여러 개
- ❌ 한 섹션에 3열 균등 카드 반복 (Bento · Zig-Zag 활용)
- ❌ 인접 섹션 동일 레이아웃 패턴

### 여백 위계
- 섹션 간: `py-16 md:py-24` (모바일 64px · 데스크톱 96px)
- 섹션 내: `mb-14 md:mb-16` (헤더 → 콘텐츠)
- 카드 내: `p-6/p-7/p-8` (내용량에 따라)

---

## 15. 서비스별 예외 규칙

### patents.html
- `.doc-thumb` — 특허·논문 문서 썸네일 (aspect-[3/4] · zoom-in cursor)

### blog/*.html
- `.prose` — 아티클 본문 (긴 텍스트 · h2/h3/p/ul 별도 스타일)
- `.define` — 강조 정의 박스
- `#readingProgress` — 상단 진행바
- `.toc-link` — 목차 링크

### contact.html
- `.form-*` — 폼 전용
- `.honeypot` — 스팸 방지 (숨김 필드)

---

## 진행 로그

### 2026-07-28
- 초안 · 섹션 5 완료 시점 컴포넌트 사용 가이드
- 12개 컴포넌트 + 텍스트 규칙 + 조합 원칙 + 예외 규칙
