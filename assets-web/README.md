# 웹 배포용 이미지 세트

원본 PNG는 `ontoh/assets/` 에 그대로 두고, 배포용 최적화본만 `ontoh/assets-web/` 에 같은 경로 구조로 정리했습니다.

| 항목 | 값 |
|---|---|
| 대상 | 실제 페이지에서 참조되는 PNG 45장 |
| 변환 전 | 82.17 MB |
| 변환 후 | 4.10 MB |
| 절감 | 95.0% |
| 상한 | 파일당 100KB 미만 (전량 충족) |
| 포맷 | JPEG 39장 · WebP 6장 (투명 배경 유지용) |

## 배포 방법

```
# 1) 최적화본을 실제 자산 경로로 복사
cp -r ontoh/assets-web/* ontoh/assets/
# 2) 아래 표의 확장자 변경을 HTML/CSS 참조에 반영 (.png -> .jpg / .webp)
```

확장자가 바뀌므로 HTML/CSS의 `src`/`url()` 값을 함께 고쳐야 합니다. 페이지별 목록은 아래와 같습니다.

## 페이지별

### ontoh/about.html — 3장, 6.59 MB → 210 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/main/about.png` | `assets/main/about.jpg` | 6.37 MB → **100 KB** | 3000×1200 → **1920×768** | JPEG q53 |
| `assets/logo/partners/web/smart-construction.png` | `assets/logo/partners/web/smart-construction.webp` | 142 KB → **74 KB** | 2333×240 → **1920×197** | WebP q95 |
| `assets/logo/partners/web/yonsei.png` | `assets/logo/partners/web/yonsei.webp` | 81 KB → **36 KB** | 793×240 | WebP q95 |

### ontoh/blog/tiny-object-detection.html — 1장, 2.01 MB → 99 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/vision/archive/construction_cctv.png` | `assets/vision/archive/construction_cctv.jpg` | 2.01 MB → **99 KB** | 1536×1024 | JPEG q55 |

### ontoh/contact.html — 1장, 5.64 MB → 96 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/main/contact.png` | `assets/main/contact.jpg` | 5.64 MB → **96 KB** | 3000×1200 → **1920×768** | JPEG q79 |

### ontoh/design/portal/foundations/layout.html — 1장, 1.17 MB → 98 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/vision/main.png` | `assets/vision/main.jpg` | 1.17 MB → **98 KB** | 1765×1023 → **1412×818** | JPEG q40 |

### ontoh/design/portal/patterns/hero.html — 1장, 4.60 MB → 94 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/main/vision.png` | `assets/main/vision.jpg` | 4.60 MB → **94 KB** | 3000×1200 → **1920×768** | JPEG q79 |

### ontoh/health.html — 7장, 10.77 MB → 679 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/main/health.png` | `assets/main/health.jpg` | 8.24 MB → **99 KB** | 3000×1200 → **1536×614** | JPEG q31 |
| `assets/health/hero-dashboard.png` | `assets/health/hero-dashboard.webp` | 1.58 MB → **99 KB** | 1600×1802 | WebP q77 |
| `assets/health/features/04-health-followup.png` | `assets/health/features/04-health-followup.jpg` | 411 KB → **99 KB** | 1935×2780 → **1536×2206** | JPEG q43 |
| `assets/health/features/03-risk-factor-guide.png` | `assets/health/features/03-risk-factor-guide.jpg` | 229 KB → **100 KB** | 1599×1897 | JPEG q77 |
| `assets/health/features/01-medical-input.png` | `assets/health/features/01-medical-input.jpg` | 144 KB → **96 KB** | 1600×1893 | JPEG q93 |
| `assets/health/features/02-work-fit.png` | `assets/health/features/02-work-fit.jpg` | 96 KB → **88 KB** | 1598×1897 | JPEG q95 |
| `assets/health/features/04-search-function.png` | `assets/health/features/04-search-function.jpg` | 94 KB → **99 KB** | 1058×1063 | JPEG q93 |

### ontoh/index.html — 6장, 2.89 MB → 360 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/health/hero-dashboard.png` | `assets/health/hero-dashboard.webp` | 1.58 MB → **99 KB** | 1600×1802 | WebP q77 |
| `assets/vision/dashboard2.png` | `assets/vision/dashboard2.webp` | 1.01 MB → **100 KB** | 1800×1170 | WebP q71 |
| `assets/logo/partners/web/smart-construction.png` | `assets/logo/partners/web/smart-construction.webp` | 142 KB → **74 KB** | 2333×240 → **1920×197** | WebP q95 |
| `assets/logo/partners/web/yonsei.png` | `assets/logo/partners/web/yonsei.webp` | 81 KB → **36 KB** | 793×240 | WebP q95 |
| `assets/logo/partners/web/ex.png` | `assets/logo/partners/web/ex.webp` | 42 KB → **27 KB** | 808×240 | WebP q95 |
| `assets/logo/partners/web/molit.png` | `assets/logo/partners/web/molit.webp` | 39 KB → **25 KB** | 811×240 | WebP q95 |

### ontoh/patents.html — 13장, 8.72 MB → 1.26 MB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/main/patents.png` | `assets/main/patents.jpg` | 5.02 MB → **100 KB** | 3000×1200 → **1920×768** | JPEG q73 |
| `assets/tech/patents/patent-2023-0592-thumb-1.png` | `assets/tech/patents/patent-2023-0592-thumb-1.jpg` | 968 KB → **100 KB** | 827×1169 | JPEG q62 |
| `assets/tech/patents/patent-2025-0986-thumb-1.png` | `assets/tech/patents/patent-2025-0986-thumb-1.jpg` | 685 KB → **99 KB** | 827×1169 | JPEG q68 |
| `assets/tech/papers/conf-2024-cctv-ptz-thumb.png` | `assets/tech/papers/conf-2024-cctv-ptz-thumb.jpg` | 353 KB → **99 KB** | 745×1053 | JPEG q48 |
| `assets/tech/papers/conf-2024-zero-shot-polygon-thumb-1.png` | `assets/tech/papers/conf-2024-zero-shot-polygon-thumb-1.jpg` | 259 KB → **99 KB** | 745×1053 | JPEG q37 |
| `assets/tech/papers/journal-2026-dsdl-tiny-thumb-01.png` | `assets/tech/papers/journal-2026-dsdl-tiny-thumb-01.jpg` | 241 KB → **98 KB** | 745×993 | JPEG q40 |
| `assets/tech/papers/journal-2025-moving-feature-thumb-01.png` | `assets/tech/papers/journal-2025-moving-feature-thumb-01.jpg` | 225 KB → **100 KB** | 745×993 | JPEG q51 |
| `assets/tech/papers/journal-2025-adaptive-water-thumb.png` | `assets/tech/papers/journal-2025-adaptive-water-thumb.jpg` | 216 KB → **99 KB** | 745×993 | JPEG q48 |
| `assets/tech/papers/journal-2024-monte-carlo-thumb.png` | `assets/tech/papers/journal-2024-monte-carlo-thumb.jpg` | 215 KB → **99 KB** | 744×982 | JPEG q64 |
| `assets/tech/papers/journal-2025-lvlm-safety-thumb-01.png` | `assets/tech/papers/journal-2025-lvlm-safety-thumb-01.jpg` | 209 KB → **99 KB** | 745×993 | JPEG q52 |
| `assets/tech/papers/domestic-2023-optimization-debris-thumb.png` | `assets/tech/papers/domestic-2023-optimization-debris-thumb.jpg` | 153 KB → **99 KB** | 744×1052 | JPEG q66 |
| `assets/tech/papers/domestic-2023-self-training-thumb.png` | `assets/tech/papers/domestic-2023-self-training-thumb.jpg` | 138 KB → **99 KB** | 744×1052 | JPEG q72 |
| `assets/tech/papers/conf-2022-comparing-objdet-thumb.png` | `assets/tech/papers/conf-2022-comparing-objdet-thumb.jpg` | 125 KB → **99 KB** | 550×833 | JPEG q83 |

### ontoh/references.html — 1장, 2.74 MB → 100 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/vision/reference/daejeon/main.png` | `assets/vision/reference/daejeon/main.jpg` | 2.74 MB → **100 KB** | 1513×827 → **1210×661** | JPEG q52 |

### ontoh/references/case-01.html — 1장, 2.74 MB → 100 KB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/vision/reference/daejeon/main.png` | `assets/vision/reference/daejeon/main.jpg` | 2.74 MB → **100 KB** | 1513×827 → **1210×661** | JPEG q52 |

### ontoh/vision.html — 16장, 44.45 MB → 1.54 MB

| 기존 참조 | 배포 파일 | 크기 | 해상도 | 품질 |
|---|---|---|---|---|
| `assets/main/vision.png` | `assets/main/vision.jpg` | 4.60 MB → **94 KB** | 3000×1200 → **1920×768** | JPEG q79 |
| `assets/vision/detection/selected/05-opening/opening-008-segmentation.png` | `assets/vision/detection/selected/05-opening/opening-008-segmentation.jpg` | 3.66 MB → **100 KB** | 1672×941 → **1070×602** | JPEG q30 |
| `assets/vision/detection/selected/05-opening/opening-001-bbox.png` | `assets/vision/detection/selected/05-opening/opening-001-bbox.jpg` | 3.56 MB → **99 KB** | 1672×941 → **856×481** | JPEG q52 |
| `assets/vision/detection/selected/05-opening/opening-006-bbox.png` | `assets/vision/detection/selected/05-opening/opening-006-bbox.jpg` | 3.18 MB → **99 KB** | 1531×1027 → **979×657** | JPEG q46 |
| `assets/vision/detection/selected/05-opening/opening-007-bbox.png` | `assets/vision/detection/selected/05-opening/opening-007-bbox.jpg` | 3.18 MB → **99 KB** | 1537×1023 → **983×654** | JPEG q41 |
| `assets/vision/detection/selected/04-heavy-equipment/heavy-equipment-008-labeled.png` | `assets/vision/detection/selected/04-heavy-equipment/heavy-equipment-008-labeled.jpg` | 2.96 MB → **99 KB** | 1672×941 → **1070×602** | JPEG q47 |
| `assets/vision/detection/selected/05-opening/opening-003-bbox.png` | `assets/vision/detection/selected/05-opening/opening-003-bbox.jpg` | 2.85 MB → **98 KB** | 1672×941 → **1337×752** | JPEG q32 |
| `assets/vision/detection/selected/03-helmet/helmet-001-bbox.png` | `assets/vision/detection/selected/03-helmet/helmet-001-bbox.jpg` | 2.66 MB → **100 KB** | 1672×941 → **1070×602** | JPEG q50 |
| `assets/vision/detection/selected/03-helmet/helmet-006-bbox.png` | `assets/vision/detection/selected/03-helmet/helmet-006-bbox.jpg` | 2.53 MB → **99 KB** | 1672×941 → **1070×602** | JPEG q43 |
| `assets/vision/detection/selected/01-simultaneous-work/simultaneous-work-020-bbox.png` | `assets/vision/detection/selected/01-simultaneous-work/simultaneous-work-020-bbox.jpg` | 2.51 MB → **99 KB** | 1672×941 → **1070×602** | JPEG q52 |
| `assets/vision/detection/selected/04-heavy-equipment/heavy-equipment-011-labeled.png` | `assets/vision/detection/selected/04-heavy-equipment/heavy-equipment-011-labeled.jpg` | 2.50 MB → **99 KB** | 1672×941 → **1337×752** | JPEG q32 |
| `assets/vision/detection/selected/01-simultaneous-work/simultaneous-work-001-bbox.png` | `assets/vision/detection/selected/01-simultaneous-work/simultaneous-work-001-bbox.jpg` | 2.49 MB → **99 KB** | 1672×941 → **1070×602** | JPEG q53 |
| `assets/vision/detection/selected/02-fall-strap/fall-strap-006-bbox.png` | `assets/vision/detection/selected/02-fall-strap/fall-strap-006-bbox.jpg` | 2.49 MB → **99 KB** | 1672×941 → **1337×752** | JPEG q32 |
| `assets/vision/detection/selected/02-fall-strap/fall-strap-003-bbox.png` | `assets/vision/detection/selected/02-fall-strap/fall-strap-003-bbox.jpg` | 2.33 MB → **100 KB** | 1672×941 → **1337×752** | JPEG q41 |
| `assets/vision/features/01-realtime-monitoring.png` | `assets/vision/features/01-realtime-monitoring.jpg` | 1.93 MB → **98 KB** | 1378×794 → **1102×635** | JPEG q43 |
| `assets/vision/dashboard2.png` | `assets/vision/dashboard2.webp` | 1.01 MB → **100 KB** | 1800×1170 | WebP q71 |

## 검토가 필요한 항목

- `assets/main/health.png` — 100KB를 맞추려고 품질을 q31까지 낮췄습니다. 육안 확인 후 상한 완화를 고려하세요.
- `assets/vision/detection/selected/05-opening/opening-008-segmentation.png` — 100KB를 맞추려고 품질을 q30까지 낮췄습니다. 육안 확인 후 상한 완화를 고려하세요.
- `assets/vision/detection/selected/05-opening/opening-001-bbox.png` — 해상도를 1672×941 → 856×481 로 크게 줄였습니다. 확대 표시 여부를 확인하세요.
- `assets/vision/detection/selected/05-opening/opening-003-bbox.png` — 100KB를 맞추려고 품질을 q32까지 낮췄습니다. 육안 확인 후 상한 완화를 고려하세요.
- `assets/vision/detection/selected/04-heavy-equipment/heavy-equipment-011-labeled.png` — 100KB를 맞추려고 품질을 q32까지 낮췄습니다. 육안 확인 후 상한 완화를 고려하세요.
- `assets/vision/detection/selected/02-fall-strap/fall-strap-006-bbox.png` — 100KB를 맞추려고 품질을 q32까지 낮췄습니다. 육안 확인 후 상한 완화를 고려하세요.
- `assets/vision/main.png` — 100KB를 맞추려고 품질을 q40까지 낮췄습니다. 육안 확인 후 상한 완화를 고려하세요.
- `assets/tech/papers/conf-2024-zero-shot-polygon-thumb-1.png` — 100KB를 맞추려고 품질을 q37까지 낮췄습니다. 육안 확인 후 상한 완화를 고려하세요.
- `assets/tech/papers/journal-2026-dsdl-tiny-thumb-01.png` — 100KB를 맞추려고 품질을 q40까지 낮췄습니다. 육안 확인 후 상한 완화를 고려하세요.
- `assets/health/features/04-search-function.png` — 최적화본이 원본보다 큽니다(94 KB → 99 KB). 원본 PNG 유지를 권합니다.

품질 비교: `ontoh/assets-jpeg-preview/compare.html`
