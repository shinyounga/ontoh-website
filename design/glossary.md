# ONTOH 용어 사전 (Glossary)

_사이트·문서·커뮤니케이션 전반에서 일관되게 사용하는 용어 정리._  
_같은 개념을 여러 이름으로 부르지 않도록 이 문서에서만 확정._

**업데이트**: 2026-07-28 · 섹션 8

---

## 1. 브랜드 · 회사

| 표준 (한글) | 표준 (영문) | ❌ 잘못된 표기 |
|---|---|---|
| **주식회사 온토** | **ONTOH Inc.** | 온토주식회사 · Ontoh · 온토 (약칭은 문맥에 따라) |
| **온토** (약칭) | **ONTOH** | Onto · ONTO · OnToh |
| CEO 김태건 | CEO Kim Taegun | 김 대표 (공식 문서에서) |

### 사용 규칙
- 공식 문서 · footer: "주식회사 온토"
- 본문 · CTA: "ONTOH" (영문 브랜드명 강조 시) 또는 "온토" (한글 자연스러움)
- 로고: SVG 파일명 `assets/logo/ontoh/파랑.svg` — 텍스트로 대체 금지

---

## 2. 제품 · 서비스

| 표준 (한글) | 표준 (영문) | ❌ 잘못된 표기 |
|---|---|---|
| **온토비전** | **ONTOH Vision** | 온토 비전 (띄어쓰기 X) · OntohVision · Vision (문맥 상 필요 시만 축약 OK) |
| **온토케어** | **ONTOH Care** | 온토 케어 · Ontoh Care · Health (파일명은 health.html이지만 서비스명은 온토케어) |
| **제품소개** | Products | 솔루션 (이전에 사용 · 지금은 "제품소개"로 통일) |
| **CCTV 자율관제** | CCTV Autonomous Monitoring | 자율 CCTV · AI CCTV |
| **Physical AI** | Physical AI | 피지컬 AI · 실물 AI |
| **주요 위험 유형** | Key Hazard Types | 5가지 감지 · 5대 시나리오 · 5대 현장 위험 유형 (구 이름) |
| **RAG-LLM 규정 매칭** | RAG-LLM Regulation Matching | RAG 매칭 · LLM 매칭 |
| **PTZ 자율 제어** | PTZ Autonomous Control | PTZ 제어 |

---

## 3. 주요 위험 유형 · 명명 규칙

| 표준 명칭 | 이전 사용된 이름 (금지) |
|---|---|
| **안전모 미착용** | 안전모 미비 · 헬멧 미착용 |
| **안전대 미착용** | 스트랩 미착용 (섹션 3 통일 이전) · 안전벨트 미착용 |
| **개구부 안전조치** | 개구부 안전조치 미비 (구 이름) · 개구부 미설치 · 개구부 위험 |
| **상하동시작업** | 상하 동시 작업 (띄어쓰기 X) · 상하 작업 |
| **중장비 위험구역 침범** | 중장비 접촉 · 협착 위험 (제200조 근거 · 실제 명칭은 "위험구역 침범") |

### 사용 규칙
- Feature 02 스트립·Feature 04 캐러셀·주요 위험 유형 갤러리 모두 위 표준 명칭 사용
- 짧은 라벨이 필요할 때: "안전모" · "안전대" · "개구부" · "상하동시" · "중장비" 축약 가능

---

## 4. 산업안전보건 관련

| 표준 | 축약 · 대체 |
|---|---|
| **산업안전보건기준에 관한 규칙** | 안전보건규칙 (2회차 이후 축약) · 시행규칙 |
| **제32조 (보호구의 지급 등)** | 제32조 (문맥상 조 번호만) |
| **제43조 (개구부 등의 방호 조치)** | 제43조 |
| **제14조 (낙하물에 의한 위험의 방지)** | 제14조 |
| **제200조 (접촉 방지)** | 제200조 |
| KOSHA | 한국산업안전보건공단 (공식 문서에서만 풀네임) |
| WCAG 2.1 | Web Content Accessibility Guidelines (접근성 국제 표준) |

---

## 5. 웹사이트 · 페이지

| 표준 | 파일 | 대체 표현 |
|---|---|---|
| 홈 | `index.html` | 메인 · 첫 페이지 |
| 회사소개 | `about.html` | About · 소개 |
| 제품소개 | (dropdown) | Solutions (이전) · Products |
| 온토비전 | `vision.html` | Vision |
| 온토케어 | `health.html` | Care · Health |
| 기술·연구 | `patents.html` | Research · 기술연구 |
| 문의 | `contact.html` | Contact · 문의하기 |
| 도입 사례 | `references.html` | References · Case Studies |
| 이용약관 | `terms.html` | Terms |
| 개인정보처리방침 | `privacy.html` | Privacy Policy |
| 블로그 | `blog/index.html` | Blog · Tech Blog |

---

## 6. 컴포넌트 · 디자인 시스템

| 표준 클래스 | 역할 | 별칭 · 이전 이름 (금지) |
|---|---|---|
| `.btn` (base) + `.btn-primary/inverse/outline-light/outline-dark` | 버튼 시스템 | 매번 `bg-ink text-white px-7...` 반복 X |
| `.card` | 정보 카드 | `.corp-card` (이전) · Card Panel |
| `.tag` | 라벨 chip | Badge · Chip · Label |
| `.kicker` | 섹션 label (uppercase) | Overline · Eyebrow |
| `.dropdown-link` | 드롭다운 아이템 | `.dlink` (이전) · `.bc-panel a` (이전) |
| `.bc-*` prefix | Breadcrumb 스트립 | 빵부스러기 · Breadcrumbs |
| `.gnb-*` prefix | Global Navigation Bar | 메가메뉴 · GNB |
| `.lb-*` prefix | Lightbox 팝업 | Modal · 이미지 팝업 |
| `.lc-*` prefix | Feature Carousel | 캐러셀 · Slider |
| `.alert-error/warning/success/info` | 상태 알림 | Toast (미도입) · Notice · Message |

---

## 7. CTA · 액션 문구

| 상황 | 표준 문구 | 이전 사용 (금지) |
|---|---|---|
| Primary CTA (히어로·CTA 카드) | **무료 현장 진단** | 도입 상담 신청 (섹션 4 통일 이전) · 데모 신청 · 시연 요청 |
| Secondary (footer · GNB 드롭다운) | **도입 문의** | 상담 신청 · 문의하기 |
| 이메일 링크 | **이메일 문의** | 메일 보내기 · 이메일 상담 |
| 문의 폼 제출 | **전송** | 제출 · Submit · Send |

---

## 8. 톤 · 문체 규칙

### 반드시 지킬 것
- **한국어 정중형** (합니다체) — "…합니다", "…하십시오" · 반말 금지
- 중점 `·` 사용 (예: "감지 · 판단 · 개입 · 기록")
- **AI 클리셰 금지**: 혁신적인 · 원활한 · 차세대 · 게임 체인저 · 최첨단 · 획기적인
- **지어낸 수치 금지** — 없으면 "실증 진행 중"
- 반복 어휘 지양 · 문장 리듬 유지

### 지양 표현
| ❌ 금지 | ✅ 대안 |
|---|---|
| 혁신적인 CCTV 솔루션 | 기존 CCTV에 AI를 얹은 자율 관제 솔루션 |
| 원활한 도입 | 별도 장비 없이 도입 |
| 차세대 안전 관리 | 규정 자동 대조 안전 관리 |
| 게임 체인저 | 현장 검증된 방식 |
| 최첨단 AI | RAG-LLM 기반 AI |

---

## 9. 기술 용어

| 표준 | 정의 | 대체 표기 |
|---|---|---|
| Tailwind CDN | `https://cdn.tailwindcss.com` | Tailwindcss · TW |
| Iconify Solar | `solar:*` prefix 아이콘 | Iconify · Solar Icons |
| Pretendard | 웹폰트 (한글 · 영문 통합) | Pretendard Std |
| Formspree | 문의 폼 백엔드 (`https://formspree.io`) | Form spree |
| GitHub Pages | 정적 사이트 호스팅 | GH Pages |

---

## 10. 파일·폴더 명명

| 유형 | 규칙 | 예시 |
|---|---|---|
| HTML 파일 | 소문자 · 하이픈 | `about.html` · `case-01.html` |
| 이미지 | 소문자 · 하이픈 · 카테고리 폴더 | `assets/vision/detection/03-helmet/helmet-006.png` |
| 문서 | 대문자 (design/) · 소문자 (기타) | `DESIGN.md` `README.md` · `tokens.md` |
| Preview 파일 | 원본명 + `-preview` or `-v1` 등 | `hover-preview.html` · `health-v1.html` |
| 아카이브 | `archive/` 하위 | `archive/design-legacy/` · `archive/pre-restructure/` |

---

## 진행 로그

### 2026-07-28
- 초안 · 섹션 8 완료 시점 용어 사전 확정
- 브랜드 · 제품 · 시나리오 · 페이지 · 컴포넌트 · CTA · 톤 · 기술 · 파일명 규칙 정리
- 이전 리팩토링에서 통일된 용어 (스트랩 → 안전대, 도입 상담 신청 → 무료 현장 진단, .dlink → .dropdown-link 등) 명시
