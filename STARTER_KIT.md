# 🎨 Design System Starter Kit

> **새 제품 · 새 사이트 디자인 시스템 구축용 스타터 킷.**
> ONTOH 웹사이트를 만든 방식 그대로 · 새 프로젝트에 재현할 수 있도록 필요한 재료 · 순서 · 체크리스트 통합.
>
> **원본 프로젝트**: `ontoh-website` (건설현장 안전관리 Physical AI 기업)
> **작성일**: 2026-08-10

---

## 📚 목차

1. [이 문서의 목적](#-이-문서의-목적)
2. [최종 결과물 미리 보기](#-최종-결과물-미리-보기)
3. [필요한 재료 · 5개 축](#-필요한-재료--5개-축)
4. [단계별 구축 순서](#-단계별-구축-순서)
5. [브랜드별 리라이트 체크리스트](#-브랜드별-리라이트-체크리스트)
6. [Optional · SEED 스타일 포털](#-optional--seed-스타일-포털)
7. [운영 · 정기 점검](#-운영--정기-점검)
8. [Reference · 원본 링크](#-reference--원본-링크)

---

## 🎯 이 문서의 목적

새 제품 페이지를 만들 때 · **AI가 사이트 톤을 지키며 새 페이지를 자율 생성**하도록 만드는 시스템을 구축한다.

**핵심 원리**:
- 사람이 하나하나 규칙을 만드는 것보다 · 잘 만든 skill (`SKILL.md`) 하나를 AI가 읽고 · 매 페이지 만들 때 반영하는 게 훨씬 지속 가능
- 그 skill을 잘 쓰려면 · **컬러 · 타이포 · 컴포넌트 · Do/Don't**가 정확·강제적으로 정의돼야 함
- 산업 벤치마크 → 브랜드 톤 확립 → skill 문서화 → 실 페이지 검증 순으로 진행

---

## 🖼️ 최종 결과물 미리 보기

새 프로젝트에 이 스타터 킷을 적용하면 나오는 구조:

```
new-product/
├── CLAUDE.md                       ← 프로젝트 컨텍스트 (AI 매번 참조)
├── STARTER_KIT.md                  ← 이 파일 (다음 프로젝트용)
├── index.html · about.html ...     ← 실 페이지들
├── css/common.css · js/common.js   ← 공용 스타일/스크립트
├── design/                         ← 🎨 디자인 시스템 (single source of truth)
│   ├── README.md                   ← 폴더 인덱스
│   ├── SKILL.md                    ← 🎯 AI가 페이지 만들 때 읽는 메인 지침
│   ├── DESIGN.md                   ← 상세 원칙 · 이론
│   ├── tokens.md                   ← Color · Typography · Shadow · Radius · Spacing
│   ├── components.md               ← 컴포넌트 카탈로그 (Button · Card · Kicker · Nav …)
│   ├── glossary.md                 ← 브랜드 · 제품 · 시나리오 용어 사전
│   ├── a11y.md                     ← WCAG 2.1 AA 접근성 기준
│   ├── operations.md               ← 담당자 · 프로세스 · 정기 점검
│   ├── CHECKLIST.md                ← 10섹션 정합성 감사 로그
│   ├── colors_and_type.css         ← CSS 변수 · 타입 스케일 (직접 import)
│   ├── preview/                    ← 브라우저에서 실물 UI 키트 확인
│   └── portal/ (선택)              ← SEED 스타일 살아있는 디자인 시스템 (35+ 페이지)
└── docs/references/                ← 벤치마크 분석 (해당 산업)
    └── {industry}_reference.md     ← 5~7개 사이트 매트릭스
```

---

## 🧬 필요한 재료 · 5개 축

### 🥇 축 1 · 원본 스킬 소스 (GitHub)

**어디서 왔나**:
- **원본 GitHub**: https://github.com/Leonxlnx/taste-skill (by @lexnlin)
- **Supanova 파생**: https://supanova.dev · 한국어 · standalone HTML 특화 · 4 sub-skill

**어디에 있나** (이 프로젝트 안):
```
archive/design-legacy/supanova-design-skill/
├── README.md                       ← 4 스킬 소개
├── taste-skill/SKILL.md            ← 메인 · 처음부터 프리미엄 랜딩 만들기
├── redesign-skill/SKILL.md         ← 기존 페이지 업그레이드
├── soft-skill/SKILL.md             ← $150k 에이전시 감성 (Double-Bezel · 스프링 · 글래스)
└── output-skill/SKILL.md           ← 완성 출력 강제 (플레이스홀더 · 생략 차단)
```

**새 프로젝트로 복사**: 4 폴더 통째로 · `archive/design-legacy/supanova-design-skill/` 에 그대로 배치.

---

### 🥈 축 2 · 벤치마크 · 톤 레퍼런스

**목적**: 새 제품이 속한 산업의 톤·양식을 먼저 파악 → 우리만의 각을 잡기 위해.

**ONTOH 사례** (`archive/design-legacy/건설사_웹디자인_레퍼런스.md`):
- 대상 5개사: **시재건설 · 삼성물산 · DL이앤씨 · 포스코이앤씨 · HDC현대산업개발**
- 매트릭스: 배경 · 브랜드 컬러 · 폰트 · 히어로 · 모서리 · 무드
- 결론: 화이트 배경 + 단일 블루(네이비~딥블루) 절제 · 대칭·정형 그리드 · 다크모드·네온·보라 그라디언트 없음

**새 프로젝트에 적용**:
1. 새 제품 속한 산업 대표 5~7개 회사 웹사이트 나열
2. 각각 3분씩 살펴보며 매트릭스 채우기
3. **공통 DNA** 추출 (모두가 지키는 것 = 산업 문법)
4. **차별화 각** 찾기 (아무도 안 하는 것 = 우리 각)

---

### 🥉 축 3 · 디자인 문서 템플릿 (`design/` 폴더 구조)

**복사할 파일** (이 프로젝트 `design/` 에서 새 프로젝트 `design/` 로):

| 파일 | 내용 | 리라이트 강도 |
|---|---|---|
| **`SKILL.md`** | 🎯 AI 지침 (Hard Rules · 컬러 · 타이포 · 컴포넌트 · Do/Don't) | 🔴 완전 리라이트 |
| `tokens.md` | 토큰 카탈로그 | 🟡 값만 교체 |
| `components.md` | 12 컴포넌트 가이드 | 🟡 사용할 것만 유지 |
| `glossary.md` | 브랜드·제품 용어 사전 | 🔴 완전 리라이트 |
| `a11y.md` | WCAG 2.1 AA 기준 | 🟢 그대로 재사용 |
| `operations.md` | 담당자·프로세스 | 🟡 조직 맞게 |
| `CHECKLIST.md` | 10섹션 감사 로그 | 🟢 그대로 재사용 (내용은 새로) |
| `DESIGN.md` | 상세 원칙 (레퍼런스) | 🔴 리라이트 |
| `README.md` | 폴더 인덱스 | 🟡 링크 유지 · 브랜드만 |
| `colors_and_type.css` | CSS 변수 · 타입 스케일 | 🟡 값 교체 |

**중요**: 이 중에서도 **`SKILL.md` 하나가 가장 중요**. 나머지는 SKILL.md가 참조하는 부속 문서.

---

### 🎨 축 4 · SEED 스타일 살아있는 포털 (선택)

**어디에 있나**: `design/portal/` (35 페이지 · 브라우저에서 볼 수 있는 실물 디자인 시스템)

**구조**:
```
design/portal/
├── index.html                      ← 6 카테고리 카드
├── 404.html
├── shared/
│   ├── shell.css                   ← ~27KB · 공통 스타일
│   └── shell.js                    ← ~15KB · topnav · sidebar · 테마 토글 · 검색 · 코드 복사 · Prism
├── get-started/                    ← 시작하기 (3 페이지)
├── foundations/                    ← Color · Typography · Spacing · Radius · Elevation · Motion · Iconography · Voice&Tone · Writing · State · Layout · Accessibility (12 페이지)
├── components/                     ← 12 컴포넌트 페이지
├── patterns/                       ← 4 패턴 페이지
└── develop/                        ← 개발 가이드 (2 페이지)
```

**언제 필요한가**:
- 팀·클라이언트에게 살아있는 스타일 가이드 보여주고 싶을 때
- 협업 규모 커질 때 · 여러 사람이 컴포넌트 카탈로그 참조할 때
- **1인 프로젝트라면 스킵 가능** — `SKILL.md` + 문서로 충분

**복사법**:
- `design/portal/` 통째 복사 → `shared/shell.css`·`shell.js` 는 브랜드 색상만 교체하면 그대로 사용
- 각 페이지의 실 예시는 브랜드에 맞게 리라이트

---

### 🔧 축 5 · 프로젝트 지침 (CLAUDE.md)

**어디에 있나**: 프로젝트 루트 `CLAUDE.md`

**역할**:
- AI가 매 세션 처음에 자동으로 읽는 프로젝트 컨텍스트
- 회사 정보 · 폴더 구조 · 디자인 시스템 링크 · 절대 하지 말 것 · 기술 스택

**ONTOH `CLAUDE.md` 구조 참조**:
```markdown
# {PROJECT} 프로젝트

## 회사 정보
- 회사명 · 사업 · 제품 · CEO · 이메일 · 주소 · 사업자번호

## 🎨 디자인 시스템 (Single Source of Truth)
- design/ 폴더 안내 (README · DESIGN · SKILL · tokens · components · preview)
- 브랜드 30초 요약 (컬러 · 폰트 · 아이콘 · 형태 · 모션 · 톤)
- 핵심 기술 스택 (Tailwind CDN · Pretendard · Iconify Solar · picsum.photos)
- 절대 하지 말 것

## 📁 프로젝트 구조
- 페이지 나열
- 폴더 구조

## 🗂️ 이전 문서 (참고용)
- archive/ 안내
```

---

## 📋 단계별 구축 순서

### Phase 0 · 준비 (30분)
- [ ] 새 프로젝트 폴더 생성
- [ ] Git 초기화 · GitHub 리포 연결
- [ ] 이 스타터 킷 (`STARTER_KIT.md`) 새 프로젝트 루트에 복사

### Phase 1 · 브랜드 30초 요약 (1시간)
- [ ] 컬러 팔레트 6~8개 · Primary/Secondary/Accent/Body/Sub/Band/Hair
- [ ] 폰트 1개 결정 (한글: Pretendard · 영문: Inter · 병용 금지)
- [ ] 아이콘셋 1개 결정 (Iconify Solar 추천)
- [ ] 모서리·모션 방향 결정 (직각/모던/부드러움)
- [ ] 톤 한 문장으로 (기관형 / 스타트업 / 감성 / 미니멀)
- [ ] 금지 리스트 (이모지 · 특정 그라디언트 · 특정 easing 등)

### Phase 2 · 산업 벤치마크 (2~3시간)
- [ ] `docs/references/{industry}-reference.md` 생성
- [ ] 대표 5~7개 사 · 매트릭스 작성 (배경 · 컬러 · 폰트 · 히어로 · 모서리 · 무드)
- [ ] 공통 DNA 정리
- [ ] 우리만의 차별화 각 정하기

### Phase 3 · 원본 스킬 · 참조 자료 배치 (30분)
- [ ] `archive/design-legacy/supanova-design-skill/` 통째 복사
- [ ] `archive/design-legacy/{industry}-reference.md` 배치
- [ ] `archive/design-legacy/DESIGN_PRINCIPLES.md` (초안용) 배치

### Phase 4 · design/ 문서 스켈레톤 (2~3시간)
- [ ] `design/README.md` — 폴더 인덱스
- [ ] `design/tokens.md` — 토큰 값 확정
- [ ] `design/components.md` — 사용할 컴포넌트 리스트업
- [ ] `design/glossary.md` — 브랜드 용어 정리
- [ ] `design/a11y.md` — ONTOH 것 그대로 복사 (WCAG 기준 공통)
- [ ] `design/operations.md` — 조직 담당자·프로세스
- [ ] `design/CHECKLIST.md` — 10섹션 감사 항목만 유지
- [ ] `design/DESIGN.md` — 상세 원칙 리라이트

### Phase 5 · SKILL.md 완성 (2~3시간)
- [ ] Supanova taste-skill + soft-skill 참고
- [ ] Hard Rules (스택 · 컬러 · 타이포 · 아이콘 · 파일 구조)
- [ ] 컴포넌트 사용법 (Button · Card · Kicker · Nav · Hero · CTA 등)
- [ ] Do / Don't (금지 리스트 강화)
- [ ] 접근성 요구사항 (Skip-to-content · aria · alt)
- [ ] 코드 예시 (실제 페이지에서 뽑아온 스니펫)

### Phase 6 · CLAUDE.md 완성 (30분)
- [ ] 회사 정보
- [ ] 디자인 시스템 폴더 안내 (design/SKILL.md 링크)
- [ ] 브랜드 30초 요약
- [ ] 절대 하지 말 것
- [ ] 폴더 구조 다이어그램

### Phase 7 · 첫 페이지 만들며 실전 검증 (반나절+)
- [ ] `index.html` 초안 · SKILL.md 따라서만 만들기
- [ ] 어긋난 부분 · SKILL.md 보강 (반복)
- [ ] Hero · Feature · CTA · Footer 최소 4 섹션

### Phase 8 (선택) · SEED 포털 (하루+)
- [ ] `design/portal/` 통째 복사
- [ ] `shared/shell.css` · `shell.js` 브랜드 색상 교체
- [ ] 각 페이지 실 예시 리라이트

### Phase 9 · GitHub Pages 배포 · 도메인 연결
- [ ] `.github/workflows/pages.yml` 설정 (필요 시)
- [ ] Custom domain 연결
- [ ] `robots.txt` · `sitemap.xml` 세팅

---

## ✅ 브랜드별 리라이트 체크리스트

### 컬러
- [ ] Primary (헤드라인·헤더): 딥 톤 1개
- [ ] Accent (링크·CTA·수치): 브랜드 시그니처 1개
- [ ] Body (본문): 진한 회색 or 검정
- [ ] Sub (보조): 중간 회색
- [ ] Band (섹션 구분): 오프화이트
- [ ] Hair (테두리): 연한 회색
- [ ] State: OK · Warning · Error 각 1개
- [ ] Logo 전용 (있으면): SVG용 별도 색

### 타이포
- [ ] 폰트 1개 결정 (병용 금지 명시)
- [ ] Scale: caption 12 / body-sm 13 / body 15 / body-md 17 / body-lg 19 / h3 22 / h2 28 / h1 38 / hero 48 (같은 값 재사용 or 브랜드 맞게 조정)
- [ ] Weight: 400 · 500 · 600 · 700 · 800
- [ ] letter-spacing: 한글 -0.01em ~ -0.02em / 영문 -0.025em까지

### 컴포넌트 (최소 필요)
- [ ] Button (primary · outline · inverse · sm/md/lg)
- [ ] Card (기본 · hover state)
- [ ] Kicker (섹션 소제목)
- [ ] Tag / Badge
- [ ] Nav (topbar · 모바일 메뉴)
- [ ] Hero (풀블리드 or 그리드 2col)
- [ ] CTA 섹션
- [ ] Footer

### 톤 · 카피
- [ ] AI 클리셰 금지 리스트 (혁신적인 · 원활한 · 차세대 · 게임 체인저 등)
- [ ] 지어낸 수치 금지 → "실증 진행 중" 표기 규칙
- [ ] 이모지 vs 아이콘 정책
- [ ] 명령형 vs 서술형 톤

### 파일 / 코드
- [ ] `min-h-[100dvh]` 사용 · `h-screen` 금지
- [ ] `picsum.photos/seed/{name}/{w}/{h}` 이미지 자리표시 규칙 (Unsplash URL 금지)
- [ ] `cubic-bezier(0.16, 1, 0.3, 1)` 시그니처 easing 결정
- [ ] `ease-in-out` · `linear` 금지

---

## 🎁 Optional · SEED 스타일 포털

`design/portal/` 은 팀·클라이언트에게 보여주기 위한 **살아있는 스타일 가이드** · 35 페이지.

**필요한지 판단**:
- ✅ 팀 3인+ / 클라이언트 협업 / 여러 프로덕트 라인 → 포털 만들자
- ❌ 1~2인 · 단일 프로덕트 → SKILL.md + 문서로 충분 · 시간 절약

**만든다면**:
- `design/portal/shared/shell.css` · `shell.js` 는 색상 변수만 교체하면 그대로 사용 가능
- 각 페이지 (foundations/color.html 등) 실 예시는 브랜드 맞게 리라이트

---

## 🔄 운영 · 정기 점검

디자인 시스템은 만들고 나서 **정기 유지보수**가 관건.

`design/operations.md` 를 참고 · 다음 리듬으로:
- **월 1회** · 새로 만든 페이지가 SKILL.md 위반한 부분 있는지 감사
- **분기 1회** · CHECKLIST.md 10섹션 전체 감사
- **반기 1회** · 산업 벤치마크 업데이트 · 우리 톤이 여전히 유효한지

---

## 📎 Reference · 원본 링크

- **taste-skill GitHub**: https://github.com/Leonxlnx/taste-skill (원본)
- **Supanova**: https://supanova.dev (한국어 파생)
- **Pretendard 폰트**: https://cactus.tistory.com/306
- **Iconify Solar**: https://icones.js.org/collection/solar
- **Tailwind CDN**: https://cdn.tailwindcss.com
- **WCAG 2.1 AA**: https://www.w3.org/WAI/WCAG21/quickref/?levels=aa
- **picsum.photos**: https://picsum.photos

---

## 💡 마지막 팁

1. **SKILL.md 하나만 잘 만들자** — 나머지는 부속 · 이 파일 하나로 AI가 새 페이지 만들 수 있어야 한다.
2. **완벽하려 하지 말고 실전 검증부터** — 초안 SKILL.md 만들고 · 첫 페이지 만들면서 부족한 부분 보강.
3. **금지 리스트가 허용 리스트보다 강력하다** — "이건 하지 마"가 "이렇게 해"보다 AI에게 더 잘 먹힌다.
4. **벤치마크 없이 시작 금지** — 산업 톤 모르고 만들면 · 뜬금없거나 흔한 결과 나온다.

---

_v1.0 · 2026-08-10 · ONTOH 웹사이트 구축 경험 기반_
