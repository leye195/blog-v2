export type ProjectDetailBlock = {
  /** 블록 제목 (예: "문제" | "시도" | "해결" | "결과") */
  heading: string;
  /** 블록 내 항목들 */
  points: string[];
};

export type ProjectDetailItem = {
  /** 굵게 표시되는 앞머리 라벨 (선택) */
  label?: string;
  /** 항목 본문 (요약 한 줄; blocks가 있으면 리드 문장으로 사용) */
  text?: string;
  /** 라벨에 걸 외부 링크 (선택) */
  href?: string;
  /** 케이스 스터디 상세 블록 (문제 → 시도 → 해결 → 결과 등) */
  blocks?: ProjectDetailBlock[];
};

export type ProjectCategory = {
  /** 카테고리 제목 (예: "페이백 기능 개발 (Payback)") */
  title: string;
  /** 이력서에 노출되는 한 줄 요약 */
  summary: string;
  /** 상세 페이지에 노출되는 전체 항목 */
  items: ProjectDetailItem[];
};

export type Project = {
  slug: string;
  company: string;
  companyUrl?: string;
  period: string;
  team?: string;
  intro?: string;
  /** 사용 기술 스택 */
  stack?: string[];
  /** 주요 과제 및 문제 인식 (선택) — 상세 페이지에서 카테고리 앞에 노출 */
  challenges?: ProjectDetailItem[];
  categories: ProjectCategory[];
};

export const projects: Project[] = [
  {
    slug: 'coinness',
    company: 'Coinness - Web',
    companyUrl: 'https://coinness.com',
    period: '2024.10 ~',
    team: 'Coinness 개발팀',
    intro:
      '블록체인·투자 정보 플랫폼 Coinness의 프론트엔드 전반을 담당하며, 페이백(거래소 수수료 환급) 기능 개발부터 광고 운영, 성능·개발 생산성 개선까지 주도했습니다.',
    stack: ['React 18', 'TypeScript', 'Vite', 'TanStack Query', 'React Router', 'TailwindCSS', 'Recharts'],
    categories: [
      {
        title: '페이백 기능 개발 (Payback)',
        summary: '수수료 환급 핵심 기능(계산기·거래소 연동·혜택·출금·대시보드)을 Web/WebView 공통 플로우로 구축',
        items: [
          {
            label: '예상 페이백 계산기',
            text: '거래소 수수료 정책 기반 예상 환급금을 계산하는 웹/웹뷰 공용 화면으로, 비로그인 사용자도 접근 가능하도록 설계했습니다.',
            blocks: [
              {
                heading: '접근',
                points: [
                  'useCalculatorForm(폼 상태·입력 핸들러, 사용자 입력값만 수집)과 useCalculatePayback(계산 수행 + 결과 화면 이동 트리거)으로 관심사 분리',
                  'paybackRate 소수 변환 및 헤더·결과 상단 노출값 반올림 처리 — 기획 변경에 따라 반올림 방식·노출 포맷을 유연하게 수정',
                ],
              },
              { heading: '결과', points: ['계산 로직 재사용성과 기획 변경 대응력 확보'] },
            ],
          },
          {
            label: 'Web/WebView 상태 전달 통일',
            blocks: [
              {
                heading: '문제',
                points: [
                  '결과 페이지로 navigate하며 넘긴 location.state가, 웹뷰 브릿지(redirectWebAction)가 웹뷰를 다시 띄우는 과정에서 유실됨',
                ],
              },
              {
                heading: '해결',
                points: ['상태값을 navigate 대신 queryString으로 전달해 웹뷰 재진입에도 값이 보존되도록 변경'],
              },
              { heading: '결과', points: ['웹·웹뷰에서 동일한 계산 플로우 보장'] },
            ],
          },
          {
            label: '페이백 혜택·버프 페이지',
            blocks: [
              {
                heading: '구성',
                points: [
                  'Hero·EventCardList·Banner 영역 구성',
                  'EventCard 클릭 시 AppBridge.redirectExternalURLAction로 외부 링크, 배너 클릭 시 거래소 상세 혜택으로 이동',
                ],
              },
              {
                heading: '리팩터',
                points: [
                  'useBuffTable에서 JSX를 제거하고 순수 데이터를 반환하도록 데이터/프레젠테이션 분리',
                  'BenefitRate 공통 컴포넌트 추출',
                ],
              },
            ],
          },
          {
            label: '거래소 연동 및 유입 동선',
            blocks: [
              {
                heading: '문제',
                points: [
                  '앱스플라이어 딥링크가 앱은 열리나 지정 경로로 이동하지 않음',
                  '앱 다운로드 원링크 QR이 구 앱스토어로 연결됨',
                ],
              },
              {
                heading: '해결',
                points: [
                  '딥링크를 URL 스킴으로 처리하고, 앱 다운로드 QR을 react-qr-code로 교체',
                  '거래소 선택 페이지·혜택 배너 API 연동, OG 태그(title/description/og image) 적용',
                ],
              },
            ],
          },
        ],
      },
      {
        title: '광고 노출 및 운영 (Ads)',
        summary: 'AdSense·Ad Manager 운영, Fill/No-fill 동적 감지·가상 스크롤 광고 최적화로 CLS·재요청 방지',
        items: [
          {
            label: 'AdSense 반응형 광고 CLS 방지',
            blocks: [
              {
                heading: '문제',
                points: [
                  'AdSense가 부모 요소에 !important 인라인 스타일을 강제 주입해 레이아웃 점프(CLS) 유발',
                  '반응형 배너는 부모에 명시적 width가 없으면 availableWidth=0 오류 발생',
                ],
              },
              {
                heading: '해결',
                points: [
                  'MutationObserver로 스타일 변경을 감지해 레이아웃에 큰 영향을 주는 인라인 스타일만 제거',
                  '반응형 배너 부모에 명시적 width 지정, height 고정 대신 min-height로 최소 영역 확보',
                ],
              },
            ],
          },
          {
            label: 'Fill/No-fill 동적 감지',
            blocks: [
              {
                heading: '문제',
                points: ['no-fill(광고 없음) 시 빈 광고 영역이 남아 UX·레이아웃 저하'],
              },
              {
                heading: '해결',
                points: [
                  'useAdStatusObserver 커스텀 훅으로 data-ad-status(unfilled)를 추적',
                  'unfilled 시 해당 영역 자체를 비노출 처리',
                ],
              },
            ],
          },
          {
            label: '가상 스크롤 내 광고 최적화',
            blocks: [
              {
                heading: '문제',
                points: [
                  '가상 스크롤에서 광고가 viewport를 벗어나면 unmount→remount 발생',
                  '애드센스가 매번 재요청되어 CTR/RPM 하락 및 계정 리스크',
                ],
              },
              { heading: '시도', points: ['overscan 확대, DOM KeepAlive → 실패'] },
              {
                heading: '해결 (sticky portal)',
                points: [
                  '리스트 내부엔 광고와 동일 크기의 빈 spacer div만 배치',
                  '광고 컴포넌트는 리스트 외부에 absolute로 독립 렌더링',
                  'position×virtualRowHeight + height로 top 좌표를 계산·동기화',
                ],
              },
              { heading: '결과', points: ['스크롤 중 unmount·추가 요청 없이 최초 광고 유지'] },
            ],
          },
          {
            label: '무한 스크롤 중복 광고 방지',
            blocks: [
              {
                heading: '문제',
                points: ['동일 slotId에 반복 요청 시 애드센스가 기존 낙찰 광고를 재사용'],
              },
              {
                heading: '해결',
                points: [
                  'infeed_v1/v2/v3 등 slotId를 순환 교차 호출(슬롯 분할)',
                  '중복 노출 감소 + 입찰 경쟁 활성화',
                ],
              },
            ],
          },
          {
            label: 'Google Ad Manager 연동·마이그레이션',
            blocks: [
              {
                heading: '구현',
                points: [
                  'defineOutOfPageSlot 전면 광고, BOTTOM_ANCHOR 앵커 광고 도입',
                  '앵커 광고가 body에 주입하는 padding-bottom을 제거하는 훅으로 레이아웃 보정',
                  'AdSense 사이드·네이티브 슬롯을 GAM으로 마이그레이션',
                ],
              },
              {
                heading: '문제·해결',
                points: ['인피드 no-fill 근본 원인이 오프스크린 슬롯 미파기 누적임을 파악 → 롤링 윈도우로 파기'],
              },
            ],
          },
          {
            label: '보상형 광고 및 노출 실험',
            text: '출석 보상 플로우에 보상형 전면 광고를 연동(no-fill 시 정상 진행)하고, Firebase Remote Config로 노출 위치·여부를 동적 제어하며 A/B 테스트·노출/클릭 이벤트 로깅을 운영했습니다.',
          },
        ],
      },
      {
        title: '개발 생산성 및 DX',
        summary: '언어팩 자동화(충돌 100%↓)·AI 코드 생성 자동화·Knip 데드코드 관리',
        items: [
          {
            label: 'GitLab 언어팩 자동화 파이프라인 구축',
            href: 'https://www.dantechblog.xyz/posts/2628cb44-979a-803a-a79f-dcc7429c933a',
            blocks: [
              {
                heading: '문제',
                points: ['언어팩을 개발자가 수동 MR로 반영해 충돌이 잦고 반복 작업 부담'],
              },
              {
                heading: '해결',
                points: [
                  'GitLab Schedule(매일 오전 10시, 주말 제외)로 chore/i18n 브랜치에 MR 자동 생성·최신화',
                  '급할 땐 파이프라인 수동 변수로 임시 반영',
                ],
              },
              { heading: '결과', points: ['수동 MR 생성 제거 및 언어팩 충돌 발생률 100% 감소'] },
            ],
          },
          {
            label: 'AI 코드 생성 자동화 (Custom Skills)',
            blocks: [
              {
                heading: '흐름',
                points: [
                  'Swagger/OpenAPI → 컨벤션에 맞는 API 함수 생성(swagger-to-api)',
                  '→ TanStack Query 훅·query key factory 생성(api-to-hook)을 /swagger 커맨드로 실행',
                ],
              },
              {
                heading: '확장',
                points: [
                  'figma-to-code로 Figma 디자인 기반 UI 코드를 생성해 디자인 UI 작업 시간 단축',
                  'generate-story로 컴포넌트의 각 상태(state)별 케이스를 Storybook에 자동 반영',
                  'generate-test로 컴포넌트·로직 테스트 코드 생성',
                ],
              },
            ],
          },
          {
            label: 'Knip 기반 데드코드 관리',
            text: '미사용 파일·export·의존성을 자동 감지해 CI 아티팩트화하고, 레거시 혜택·출석 코드 등 실제 데드코드 제거에 활용했습니다.',
          },
          {
            label: '개발 안전장치·컨벤션',
            text: '보호 브랜치 로컬 커밋을 차단하는 pre-commit 훅, simple-import-sort 등 ESLint·Stylelint 표준화, CLAUDE.md 규칙을 1,179줄 → 405줄(66%↓)로 정리했습니다.',
          },
        ],
      },
      {
        title: '성능 및 사용자 경험 최적화',
        summary: 'PnL 이미지 생성 87%↑·가상 스크롤·Prefetch·Optimistic UI로 체감 성능 개선',
        items: [
          {
            label: 'PnL 공유 이미지 생성 속도 87% 개선 (2.3s → 0.3s)',
            blocks: [
              {
                heading: '문제',
                points: ['html2canvas가 DOM→canvas 재드로잉에 2초 이상 소요, 번들 140KB'],
              },
              {
                heading: '해결',
                points: [
                  'modern-screenshot(25.4KB)로 교체 — DOM 직렬화→SVG 포장→canvas 렌더',
                  '컴포넌트 마운트 완료 시점에 DOM→이미지 변환을 미리 실행해 다운로드 클릭 시 즉시 저장',
                ],
              },
              {
                heading: '추가 이슈',
                points: [
                  '배포 후 폰트·이미지 재요청 지연 → subset font(라틴·숫자·특수문자)만 base64로 임베딩, font-weight별 필요한 것만 유지',
                  '깨지는 UI 일부는 SVG로 교체, QRCode 오류복원 레벨을 Q→L로 낮춰 인식률 개선',
                ],
              },
            ],
          },
          {
            label: '가상 스크롤',
            text: '@tanstack/react-table·react-virtual 기반 독립 VirtualScroller를 만들어 지갑 내역·라이브·검색 등 대규모 목록에 적용, viewport 내 DOM만 유지하고 동적 ROW 높이 측정으로 스크롤 점프를 방지했습니다.',
          },
          {
            label: 'Prefetch·병렬 요청',
            blocks: [
              { heading: '문제', points: ['대시보드 진입 시 선후관계 없는 요청들이 waterfall로 직렬 처리됨'] },
              {
                heading: '해결',
                points: [
                  '선후관계 없는 요청을 useSuspenseQueries로 병렬화(컴포넌트당 useSuspenseQuery 하나 사용 구조로 정리)',
                  'Equity Chart에 query prefetch 적용',
                ],
              },
            ],
          },
          {
            label: 'Optimistic UI·Debounce',
            text: 'useMarketBookmark의 onMutate 낙관적 업데이트와 onError 롤백, 즐겨찾기·구독 버튼 debounce로 과도한 API 요청을 방지했습니다.',
          },
          {
            label: 'Suspense·Error Boundary',
            text: '속보 상세·커뮤니티 ProfitCard·모바일웹 홈을 섹션별 Suspense/ErrorBoundary로 분리하고, 서버 상태별 에러는 중앙 처리하도록 구성했습니다.',
          },
          {
            label: '번들 최적화',
            blocks: [
              {
                heading: '교체',
                points: [
                  'lodash → es-toolkit, lottie-web → lottie_light(eval 제거)',
                  'dynamic import 경고 수정으로 code splitting 정상화',
                ],
              },
              {
                heading: '청크·결과',
                points: [
                  'Vite manualChunks로 도메인별 청크 분리(rollup-plugin-visualizer 활용)',
                  '메인 번들 약 25%(4,752 → 3,033KB) 절감',
                ],
              },
            ],
          },
        ],
      },
      {
        title: '제품 아키텍처 및 설계',
        summary: 'React Router Data API 전환으로 책임 분리, Recharts 시계열 차트 시각화',
        items: [
          {
            label: 'React Router Data API 전환',
            blocks: [
              {
                heading: '목표',
                points: [
                  'loader로 렌더 전 데이터 사전 로드, action+Form으로 낙관적 UI/리다이렉트/검증 일원화',
                  'lazy로 라우트 단위 코드 스플리팅, errorElement·전환 취소(AbortController)·자동 revalidation',
                ],
              },
              {
                heading: '방식',
                points: [
                  'createBrowserRouter·createRoutesFromElements로 기존 트리를 유지하며 점진 마이그레이션',
                  'AppRouteLayout·RequireAuth·RouterContainer·RouterSideEffects로 인증·레이아웃·데이터 로딩 책임 분리',
                ],
              },
            ],
          },
          {
            label: '자산 변동 시계열 차트',
            text: 'recharts AreaChart 기반 누적 수익률(PnL) Equity Chart와 기간 필터(7D/30D/90D/180D)를 구현(XAxis 첫 날짜 누락 보정)하고, 대시보드에 TradingView 차트를 연동했습니다.',
          },
          {
            label: '로케일 아키텍처',
            text: '언어별 네비게이션 useGlobalNavigate를 useLocale(로케일 읽기)·useLocalizedNavigate(이동)로 분리하고 facade 패턴으로 점진 교체, SwitchCase로 언어별 렌더링을 통합했습니다.',
          },
          {
            label: '상태·데이터 설계',
            text: 'query-key-factory로 queryKey를 팩토리화하고 모달 상태를 URL 쿼리로 관리(useQueryParams), 관심코인 편집 뷰를 discriminated union으로 모델링해 중첩 삼항·non-null 단언을 제거했습니다.',
          },
        ],
      },
    ],
  },
  {
    slug: 'playdapp-marketplace',
    company: 'PlayDapp MarketPlace',
    period: '2020.10 ~ 2022.08',
    team: 'Marketplace 개발팀',
    intro: 'PlayDapp 생태계의 블록체인 NFT C2C 마켓플레이스 서비스 리뉴얼 및 고도화를 진행했습니다.',
    stack: ['Next.js', 'TypeScript', 'Redux', 'TanStack Query', 'Emotion', 'web3-react'],
    challenges: [
      {
        label: '멀티 체인 분리로 인한 운영 효율성 저하',
        text: 'Polygon 마켓과 Ethereum 마켓이 완전히 별도의 프로젝트 구조로 분리 운영되어, 기능 추가 및 유지보수 시 리소스가 2배로 낭비되는 비효율적인 아키텍처였습니다.',
      },
      {
        label: 'JS 레거시 환경의 낮은 개발 안정성',
        text: '프로젝트 전체가 JavaScript 기반 CRA(Create React App)로 작성되어 데이터 구조 파악이 어렵고, 신규 기능 추가 시 잠재적 런타임 에러에 쉽게 노출되는 한계가 있었습니다.',
      },
      {
        label: '글로벌 유저 타겟을 위한 SEO 및 마케팅 확장성 필요',
        text: '마켓플레이스 특성상 검색 엔진 노출(SEO)이 중요했으나 CSR 환경으로 한계가 있었고, 글로벌 IP 협업에 신속히 대응할 유연한 UI 아키텍처가 부재했습니다.',
      },
    ],
    categories: [
      {
        title: '서비스 통합 및 리뉴얼',
        summary: '레거시 JS/CRA → Next.js·TS·Emotion 전면 리뉴얼(SSR·SEO), 멀티 체인 코드베이스 통합',
        items: [
          {
            label: 'Next.js & TypeScript 기반 전면 리뉴얼',
            text: '레거시 JS/CRA 환경을 Next.js·TypeScript·Emotion 스택으로 재구축하여 타입 안정성을 확보하고, SSR 도입으로 검색 엔진 최적화(SEO) 성능 개선',
          },
          {
            label: '체인 통합 파이프라인 설계',
            text: '별개로 관리되던 멀티 체인 마켓 인프라를 하나의 코드베이스로 통합 관리할 수 있도록 프론트엔드 비즈니스 로직 최적화',
          },
        ],
      },
      {
        title: 'NFT 거래 기능',
        summary: 'NFT Detail prefetch·구매 플로우, useListingCancel 훅 기반 Offer 파이프라인·My Offers, metadata refresh',
        items: [
          {
            label: 'NFT Detail 페이지',
            text: 'getServerSideProps에서 react-query prefetchQuery로 item detail을 prefetch해 클라이언트에 전달하고, 구매(buy)는 redux에 order 정보를 담아 market SDK 거래 reducer를 호출하며 event state에 따라 modal로 진행 단계를 노출 (불필요한 SDK 재초기화·API 호출 로직 제거)',
          },
          {
            label: 'Offer 파이프라인',
            text: '판매(sell)·makeOffer 등록 취소 로직을 useListingCancel 훅(isCancelListing·handleCancelListing 반환)으로 공통화해 반복 코드를 제거하고, My Offers(Offer Table·OfferAccept 모달)로 Offer 승인 기능 구현',
          },
          {
            label: 'NFT metadata refresh',
            text: 'NFT metadata가 비어 있을 때 useToastMessage 훅(position·duration 옵션)으로 refresh 진행 상태를 안내',
          },
        ],
      },
      {
        title: '인증 및 대외 협업',
        summary: 'Email 인증(정적 라우팅 결과 페이지), IPX 협업 OOZ 티징 페이지',
        items: [
          {
            label: 'Email 인증 페이지',
            text: 'react-hook-form register로 입력 유효성을 검증하고, 인증 결과 페이지는 getStaticPaths·getStaticProps로 결과·에러 값을 동적 라우팅 경로로 받아 렌더링해 페이지별 중복 작성을 제거',
          },
          {
            label: '대외 협업 (OOZ 티징)',
            text: 'IPX(라인프렌즈)와 협업하여 OOZ NFT 티징 페이지를 원페이지 스크롤 UI로 제작 → 신규 유저 유입 확대',
          },
        ],
      },
    ],
  },
  {
    slug: 'ezplay',
    company: 'EZPlay',
    period: '2024.06 ~ 2024.09',
    team: '토너먼트 개발팀',
    intro:
      '기존 PlayDapp Tournaments의 높은 진입장벽을 낮추기 위한 미니게임 위주의 서비스 마이그레이션과 리뉴얼을 통한 재런칭을 진행했습니다.',
    stack: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Zustand', 'TanStack Query', 'wagmi', 'viem', 'Ky'],
    challenges: [
      {
        label: '높은 이탈률',
        text: '복잡한 지갑 연결 절차 및 레이아웃으로 인해 초기 사용자 유입 및 전환이 어려운 구조적 한계가 존재했습니다.',
      },
      {
        label: '데이터 신선도와 성능의 트레이드오프',
        text: '실시간성이 중요한 게임 데이터와 랭킹 정보를 효율적으로 렌더링하면서도 서버 부하를 최소화할 필요가 있었습니다.',
      },
    ],
    categories: [
      {
        title: '서비스 페이지 개발',
        summary: '메인·카테고리·마이어카운트·게임·FAQ·약관 등 서비스 주요 페이지 직접 개발',
        items: [
          { text: '메인 페이지 · 카테고리 페이지' },
          { text: '마이어카운트(EZ Point 내역·좋아요 리스트·My NFT·티켓 내역)' },
          { text: '게임 페이지(일반·토너먼트)' },
          { text: 'FAQ 페이지' },
          { text: '이용약관(TOS)·개인정보 처리방침' },
          { text: '404 페이지' },
        ],
      },
      {
        title: '성능 및 아키텍처 최적화',
        summary: 'Next.js App Router(RSC)로 번들·초기 로딩 개선, ISR·SSR 캐싱 전략으로 API 호출 최적화',
        items: [
          {
            label: 'Next.js App Router 기반 설계',
            text: '서버 컴포넌트(RSC)를 적극 활용하여 클라이언트 사이드 번들 사이즈를 줄이고 초기 로딩 속도를 개선',
          },
          {
            label: '데이터 페칭 및 캐싱 전략 수립',
            text: '서비스 도메인 특성에 맞춰 ISR(Incremental Static Regeneration)과 SSR(Server-Side Rendering)을 설계·적용하여 API 호출을 최적화',
          },
        ],
      },
      {
        title: '사용자 접근성 개선',
        summary: 'CSS Grid 반응형 타일 배치로 게임 탐색 일관성 확보, 소셜·게스트 로그인 기반 Instant Play로 이탈률 개선',
        items: [
          {
            label: '그리드 레이아웃 적용',
            text: '메인 페이지의 모든 게임에 CSS Grid 시스템을 적용해 화면 크기에 반응하는 가변적·균형 잡힌 타일 배치를 구현, 일관된 게임 탐색 환경과 스캔 효율성을 극대화',
          },
          {
            label: '진입 장벽 완화 및 UX 개선',
            text: '지갑 생성 필수 구조에서 벗어나 Google/Apple 소셜 로그인·게스트 로그인 파이프라인을 구축하고, 지갑 없이 즉시 플레이(Instant Play) 가능한 UX를 구현해 초기 이탈률 개선에 기여',
          },
        ],
      },
    ],
  },
  {
    slug: 'playdapp-tournaments',
    company: 'PlayDapp Tournaments',
    period: '2022.08 ~ 2024.06',
    team: '토너먼트 개발팀',
    intro:
      '게임 플레이 결과에 따라 보상을 제공하는 블록체인 기반 플랫폼으로, 초기 TF팀으로 합류해 약 1.5개월 만에 소프트 런칭을 완료하고 이후 서비스 안정화를 주도했습니다.',
    stack: ['Next.js', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Emotion', 'web3-react', 'wagmi'],
    challenges: [
      {
        label: '짧은 런칭 기한 내 소프트 런칭 필요',
        text: '초기 TF팀으로서 제한된 일정(약 1.5개월) 안에 블록체인 게임 플랫폼의 소프트 런칭을 완료해야 하는 시간적 제약이 있었습니다.',
      },
    ],
    categories: [
      {
        title: '프로젝트 리딩 및 아키텍처',
        summary: 'FE 파트 리딩(4인)·개발 환경/구조 설정, 서비스 페이지 다수 개발, Web3 게임 브릿지 구축',
        items: [
          {
            label: '프론트엔드 파트 리딩(4인)',
            text: '프로젝트 전반의 기술 스택 선정 및 컨벤션 수립을 주도하고, 프론트 개발 환경·프로젝트 구조를 설정해 팀 협업 효율을 높임',
          },
          {
            label: '서비스 전반 UI 개발',
            text: '서비스 내 다수 페이지를 직접 개발해 전체 페이지의 약 60%를 담당했습니다.',
            blocks: [
              {
                heading: '담당 페이지',
                points: [
                  '메인 페이지 · 마이 프로필',
                  '게임 페이지(동적 라우팅) · 무료 플레이(freezone)',
                  'PvP 리플레이 페이지(동적 라우팅)',
                  'FAQ 페이지',
                  '메일 인증 플로우: 결과 체크(resultCode 분기)·전송 완료·인증 완료·오류 페이지',
                  '404 페이지',
                ],
              },
            ],
          },
          {
            label: 'Web3 게임 브릿지 구축',
            text: 'iframe으로 게임 클라이언트를 연동하고 postMessage로 게임 플레이·결과 노출 이벤트를 통신하는 체계 구축',
          },
        ],
      },
      {
        title: 'Web3 인프라 및 온체인 기능',
        summary: 'WalletConnect V2 마이그레이션(wagmi 채택), 보상 출금·NFT Convert·재화 Migration 구현',
        items: [
          {
            label: 'WalletConnect V2 마이그레이션',
            blocks: [
              { heading: '문제', points: ['WalletConnect V1 서비스 종료로 V2로의 마이그레이션이 필요'] },
              {
                heading: '검토',
                points: [
                  'web3-react로 진행하려면 V8로 올려야 하는데, V6와 구조·사용법이 완전히 달라 부작용이 크고 일부 지갑은 V8을 지원하지 않음',
                ],
              },
              {
                heading: '해결',
                points: ['공식 문서가 권장하는 wagmi를 도입해 마이그레이션, 지갑 연동 안정성 확보'],
              },
            ],
          },
          {
            label: '가상화폐 보상 출금',
            text: 'react-hook-form으로 입력값 유효성을 검증하고 contract ABI 함수를 호출해 보상으로 얻은 가상화폐 출금을 처리',
          },
          {
            label: 'Ticket NFT Convert · 재화 Migration',
            text: 'Ticket을 NFT로 전환하는 Convert 기능과 유저 재화 Migration 기능을 구현해 온체인 자산 플로우를 처리',
          },
        ],
      },
      {
        title: '성능 최적화',
        summary: 'bundle-analyzer 분석 + code splitting으로 First Load JS 470kb → 162kb(65%↓)',
        items: [
          {
            label: '번들 사이즈 65% 절감',
            href: 'https://www.dantechblog.xyz/posts/e485275b-92a8-499d-81b3-466d27f944b2',
            blocks: [
              {
                heading: '분석',
                points: ['bundle-analyzer로 번들 크기를 분석해 대체 가능하거나 불필요한 패키지를 제거'],
              },
              {
                heading: '최적화',
                points: ['모달 등 상호작용 시 노출되거나 우선순위가 낮은 컴포넌트에 code splitting 적용'],
              },
              {
                heading: '결과',
                points: ['First Load JS를 470kb에서 162kb로 65% 절감해 초기 로딩 속도 개선'],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
