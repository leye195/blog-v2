# 기술적 SEO / 색인 개선 (메타데이터 전용) — 설계

- 날짜: 2026-07-18
- 대상: Dan DevLog v2 (Next.js 15 App Router + Notion CMS)
- 라이브: https://www.dantechblog.xyz

## 목표

검색엔진 색인 정확도와 메타데이터 정합성을 개선한다. **새 라우트를 추가하지 않고**, 기존 페이지의 메타데이터와 구조화 데이터(JSON-LD)만 손본다.

선택된 상위 목표: 검색 노출/색인 개선, 소셜 공유(이미지 생성 제외한 메타 정합성).

## 범위 밖 (명시적 제외)

- 태그/카테고리 색인 가능 라우트 (`/posts/tag/*` 등) — 이번엔 하지 않음
- 포스트별 OG 이미지 동적 생성 (`next/og` / `ImageResponse`) — 하지 않음
- 포스트 OG/Twitter에 Notion cover 이미지 재사용 — 하지 않음 (사용자 결정)
- 성능 / Core Web Vitals 측정·최적화 — 다음 작업으로 미룸
- manifest PNG 아이콘 에셋 생성 — 이번엔 하지 않음 (별도 에셋 작업)

## 현재 상태 (감사 요약)

- 루트 레이아웃: `<html lang="en">`(콘텐츠는 한국어), `metadataBase`·canonical이 도메인 하드코딩, `description`이 영어 빈약 문구("Blog posted about development"), `twitter`/`robots` 블록 없음, OG 이미지에 width/height/alt·locale 없음.
- JSON-LD: 포스트 상세에만 `BlogPosting`. `WebSite`·`BreadcrumbList`·`publisher` 없음.
- sitemap/robots/RSS는 `NEXT_PUBLIC_BASE_URL` 기반(프로덕션 fallback)으로 동작 — 여기와 메타데이터의 base URL 소스가 갈림.
- robots: `/api/` disallow 없음.
- manifest: `theme_color`/`display`/`scope`/`icons` 없음.
- 홈: `<h1>` 없음 (최상단 heading이 `<h3>Recent Posts`).

## 설계

### 0. 공통: base URL 헬퍼 (선행 작업)

- 위치: `src/libs/`에 `getBaseUrl()` 추가 (예: `src/libs/url.ts` 또는 기존 `utils.ts`에 함수 추가 — 기존 구조 확인 후 결정).
- 동작: `NEXT_PUBLIC_BASE_URL`을 읽고 없으면 `https://www.dantechblog.xyz`로 fallback, 트레일링 슬래시 제거. sitemap/robots/rss가 이미 하는 정규화 로직과 동일 규칙.
- 목적: `metadataBase`와 각 페이지 canonical을 이 단일 소스로 통일. sitemap/robots도 점진적으로 같은 헬퍼를 쓰도록 정리(선택).
- 인터페이스: `getBaseUrl(): string` — 항상 트레일링 슬래시 없는 절대 URL 반환.

### 1. 루트 레이아웃 — `src/app/layout.tsx`

- `<html lang="en">` → `<html lang="ko">`.
- `metadataBase: new URL(getBaseUrl())`.
- `description`: 한국어 서술형으로 교체 (블로그 주제/운영자 반영, 약 70~120자).
- `robots` 추가:
  - `index: true`, `follow: true`
  - `googleBot`: `index: true, follow: true`, `max-image-preview: 'large'`, `max-snippet: -1`, `max-video-preview: -1`.
- `openGraph`: `locale: 'ko_KR'` 추가; 기존 이미지에 `width: 1200, height: 630, alt` 지정.
- `twitter` 추가: `card: 'summary_large_image'`, `title`, `description`, `images: [기존 공용 이미지]`.
- 기존 `<head>`의 RSS `link`, favicon, naver-site-verification `<meta>`는 유지.
- **WebSite JSON-LD** 렌더: `@type: WebSite`, `name`, `url`(getBaseUrl), `description`, `inLanguage: 'ko-KR'`. (검색 URL 엔드포인트가 없으므로 `potentialAction`/SearchAction은 넣지 않음.)

### 2. 페이지별 메타데이터

대상: `src/app/page.tsx`(홈), `src/app/posts/page.tsx`, `src/app/resume/page.tsx`, `src/app/resume/projects/[slug]/page.tsx`.

- 누락된 `description`을 한국어로 채운다 (페이지 성격에 맞게).
- `alternates.canonical`을 `getBaseUrl()` 기반으로 통일 (도메인 하드코딩 제거). `metadataBase`가 설정되므로 canonical은 상대 경로(`/`, `/posts`, `/resume`, `/resume/projects/{slug}`)로 두어도 절대 URL로 해석됨 — 상대 경로 방식으로 단순화.
- 홈 `<h1>` 추가: 시각적으로 숨긴(`sr-only` 성격) `<h1>`을 홈 페이지 컴포넌트(`MainPage`/`Hero` 영역)에 넣어 페이지 대표 제목을 제공. 스크린 판독기·검색엔진용, 화면 레이아웃은 그대로.

### 3. 포스트 상세 — `src/app/posts/[id]/page.tsx`

- BlogPosting JSON-LD 보강:
  - `publisher`: `@type: Organization`, `name: 'Dan DevLog'`, (가능하면) `logo` `@type: ImageObject`로 공용 이미지 지정.
  - `mainEntityOfPage`: `@type: WebPage`, `@id`: 해당 글의 canonical URL.
  - 기존 headline/description/image/datePublished/dateModified/author는 유지. `image` 배열이 비었을 때의 처리 확인(빈 배열이면 필드 생략 또는 공용 이미지).
- **BreadcrumbList JSON-LD** 추가: `홈(/) > Posts(/posts) > {글 제목}(canonical)`.
- OG/Twitter 이미지: 이번엔 손대지 않음 (범위 밖 결정). 단, 루트에서 내려오는 공용 이미지가 상속되는지 확인만.

### 4. robots — `src/app/robots.ts`

- 기존 `allow: '/'` 유지, `disallow: '/api/'` 추가. sitemap 참조는 그대로.

### 5. manifest — `src/app/manifest.ts`

- 추가: `theme_color`(사이트 primary 색), `background_color`(기존 유지), `display: 'standalone'`, `scope: '/'`, `lang: 'ko'`, `start_url` 유지.
- `icons`는 이번 범위 밖 (PNG 에셋 없음). favicon.ico는 유지.

## 데이터 흐름 / 영향

- 순수 서버 컴포넌트/메타데이터 계층 변경. 클라이언트 렌더 로직·데이터 페칭 경로 변화 없음.
- Notion 호출량 변화 없음 (포스트 상세 JSON-LD는 이미 있는 데이터 사용).
- base URL 헬퍼 도입으로 메타데이터의 base 소스가 env로 통일 → 프리뷰/프로덕션 환경 정합성 향상.

## 검증 방법

- `pnpm build` 성공 (타입/빌드 에러 없음).
- 렌더된 `<head>` 확인: `lang="ko"`, root `description`(한국어), `twitter:card`+image, `robots` 메타, OG `locale`/width/height/alt.
- 각 페이지 canonical이 올바른 절대 URL로 렌더되는지 확인.
- JSON-LD 유효성: WebSite / BlogPosting(publisher, mainEntityOfPage) / BreadcrumbList가 렌더되고 스키마 형태가 맞는지 (수동 확인 또는 Rich Results 형식 점검).
- `robots.txt`에 `/api/` disallow 반영.
- manifest에 새 필드 반영.
- 기존 테스트(`pnpm test`) 회귀 없음.

## 리스크 / 주의

- `lang="en" → "ko"` 변경은 사이트 전역 영향 — 콘텐츠가 한국어이므로 올바른 변경이지만 배포 후 확인.
- canonical을 상대 경로로 바꿀 때 `metadataBase`가 반드시 먼저 설정돼야 절대 URL로 해석됨 — 루트 레이아웃 변경과 순서 의존.
- WebSite/BreadcrumbList JSON-LD는 기존 `JsonLd` 컴포넌트를 재사용 (신규 컴포넌트 최소화).
