'use client';

import { ComponentProps } from 'react';
import { useMedia } from 'react-use';

import Flex from '@/components/common/Flex';
import { cn, getBreakpointQuery } from '@/libs/utils';
import breakpoints from '@/styles/breakpoints';

const P = ({ children, className, ...props }: ComponentProps<'p'>) => (
  <p className={cn('mb-[4px] max-md:text-[14px]', className)} {...props}>
    {children}
  </p>
);

const Anchor = ({ children, className, ...props }: ComponentProps<'a'>) => (
  <a className={cn('underline', className)} {...props}>
    {children}
  </a>
);

const ResumePage = () => {
  const isMdDown = useMedia(getBreakpointQuery(breakpoints.down('md')), false);

  return (
    <Flex className="mx-auto max-w-[1000px] p-4" $direction="column" $gap="6px">
      <Flex $direction="column">
        <h1 className="mt-0 mb-[8px] text-[32px]">
          <b>이영재(YoungJae Lee)</b>
        </h1>
        <Flex $direction="column" $gap="2px">
          <ul className="flex list-disc flex-col gap-1 pl-6 text-[16px]">
            <li>
              <b>Github:</b>{' '}
              <Anchor className="text-blue-500" href="https://github.com/leye195" target="_blank">
                https://github.com/leye195
              </Anchor>
            </li>
            <li>
              <b>Blog:</b>{' '}
              <Anchor className="text-blue-500" href="https://www.dantechblog.xyz" target="_blank">
                https://www.dantechblog.xyz
              </Anchor>
            </li>
            <li>
              <b>Email:</b>{' '}
              <Anchor className="text-blue-500" href="mailto:leye195@naver.com">
                leye195@naver.com
              </Anchor>
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex className="w-full" $direction="column" $gap="6px">
        <Flex $direction="column" $gap="2px">
          <h2 className="text-[22px]">
            <b>Introduction</b>
          </h2>
          <div>
            <P>서비스 운영 과정에서 발생하는 성능, 구조, 협업 병목 문제를 발견하고 개선하는 것을 강점으로 가진 프론트엔드 엔지니어입니다.</P>
            <P>
              서비스 성능 최적화(
              <Anchor
                href="https://www.dantechblog.xyz/posts/e485275b-92a8-499d-81b3-466d27f944b2"
                target="_blank"
              >
                번들 사이즈 -65%
              </Anchor>
              )와 CI 기반 자동화(
              <Anchor
                href="https://www.dantechblog.xyz/posts/2628cb44-979a-803a-a79f-dcc7429c933a"
                target="_blank"
              >
                GitLab 언어팩 파이프라인 구축
              </Anchor>
              ), Knip 도입을 통한 데드코드 감지·관리 등을 통해 서비스 품질과 팀 생산성개선을 주도했습니다.
            </P>
            <P>
              또한 기술적 문제 해결 과정과 경험을 블로그를 통해 지속적으로 공유하며, 학습과 개선 중심의 개발을 지향하고 있습니다.
            </P>
          </div>
        </Flex>
        <Flex $direction="column" $gap="6px">
          <h2 className="text-[22px]">
            <b>Work Experience</b>
          </h2>
          <Flex $direction={isMdDown ? 'column' : 'row'}>
            <div className="min-w-[150px]">
              <h3 className="text-[18px]">
                <b>
                  <Anchor href="https://adenasoft.com" target="_blank">
                    Adena Software
                  </Anchor>
                </b>
              </h3>
              <small className="text-[10px]">2024.10 ~ current</small>
              <br />
              <span className="text-[14px]">Frontend Engineer</span>
            </div>
            <Flex
              className={cn('border-l-0 border-black pl-4', isMdDown && 'border-none pl-0')}
              $direction="column"
              $gap="6px"
            >
              <div>
                <h3 className="text-[18px]">
                  <b>Coinness 개발팀</b>
                </h3>
                <small className="text-[14px]">2024.10 ~</small>
                <div className="my-[4px]">
                  <h4 className="text-[18px]">
                    <b>
                      <Anchor href="https://coinness.com" target="_blank">
                        Coinness - Web
                      </Anchor>
                    </b>{' '}
                    <span className="text-base">(2024.10 ~ )</span>
                  </h4>

                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      <li>
                        <b>FE 코드 컨벤션 표준화 및 데드코드 자동 관리 체계 구축(ESLint/Knip)</b> → 코드 품질 및 개발 효율 개선
                      </li>
                      <li><b>Optimistic UI·버튼 debounce 적용</b> → 불필요한 API 요청 감소 및 사용자 체감 응답성 개선</li>
                      <li>
                        글로벌 서비스 운영 및 인증 체계 통합 → 메일 인증 기반으로 통합하여 사용자
                        경험 일원화 및 유지보수 부담 감소
                      </li>
                      <li>
                        <a
                          className="underline"
                          href="http://localhost:3000/posts/2628cb44-979a-803a-a79f-dcc7429c933a"
                        >
                          <b>Gitlab 기반 언어팩 자동화 파이프라인(CI Schedule + MR 생성) 구축</b> →  MR
                          수동 생성 제거 및 언어팩 관련 충돌 발생률 100% 감소
                        </a>
                      </li>
                      <li>
                        대시보드,투자내역, PnL 공유, Live 개편 등 신규 기능 개발 및 어드민 유지보수
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
          <Flex $direction={isMdDown ? 'column' : 'row'}>
            <div className="min-w-[150px]">
              <h3 className="text-[18px]">
                <b>
                  <Anchor href="https://supertree.co/" target="_blank">
                    SuperTree
                  </Anchor>
                </b>
              </h3>
              <small className="text-[10px]">2020.10 ~ 2024.09 (3y 10m)</small>
              <br />
              <span className="text-[14px]">Frontend Engineer</span>
            </div>
            <Flex
              className={cn('border-l-0 border-black pl-4', isMdDown && 'border-none pl-0')}
              $direction="column"
              $gap="6px"
            >
              <div>
                <h3 className="text-[18px]">
                  <b>Tournament 개발팀</b>
                </h3>
                <small className="text-[14px]">2022.08 ~ 2024.09 </small>
                <div className="my-[4px]">
                  <h4 className="text-[18px]">
                    <b>
                      <Anchor href="https://ezplay.game" target="_blank">
                        EZPlay
                      </Anchor>
                    </b>{' '}
                    <span className="text-base">(2024.06 ~ 2024.09)</span>
                  </h4>
                  <P>
                    기존 Web3 토너먼트 플랫폼의 높은 진입장벽을 낮추기 위해 기획된 참여형 미니게임 플랫폼 EZPlay의 리뉴얼 및 성능 최적화를 담당했습니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      <li>
                        <b>Next.js App Router 기반 아키텍처 설계</b>: 서버 컴포넌트(RSC)를 적극 활용하여 클라이언트 사이드 번들 사이즈를 줄이고 초기 로딩 속도를 개선
                      </li>
                      <li>
                        <b>데이터 페칭 및 캐싱 전략 수립</b>: 서비스 도메인 특성에 맞춰 ISR(Incremental Static Regeneration)과 SSR(Server-Side Rendering) 기법을 선택적으로 설계 및 적용
                      </li>
                      <li>
                        <b>사용자 접근성 및 UX 개선</b>: Google/Apple 소셜 로그인 및 게스트 로그인 기능을 도입하여 복잡한 지갑 생성 없이 서비스 이용이 가능하도록 개선
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-[4px]">
                  <h4 className="text-[18px]">
                    <b>
                      <Anchor target="_blank">PlayDapp Tournaments</Anchor>
                    </b>{' '}
                    <span className="text-base">(2022.08 ~ 2024.06)</span>
                  </h4>

                  <P>
                    게임 플레이 결과에 따라 보상을 제공하는 블록체인 기반 플랫폼으로, 초기 TF팀으로 합류하여 소프트 런칭 및 서비스 안정화를 주도했습니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      <li>
                        <b>프론트엔드 파트 리딩(4인 구성)</b>: 프로젝트 전반의 기술 스택 선정 및 컨벤션 수립을 주도하여 협업 효율 극대화
                      </li>
                      <li>
                        <b>Web3 게임 브릿지 구축</b>: iframe+postMessage 기반 통신으로 게임 클라이언트 연동
                      </li>
                      <li>
                        <b>Web3 지갑 고도화</b>: wagmi 도입 및 WalletConnect V1 → V2 마이그레이션
                      </li>
                      <li>
                        <b>번들 최적화</b>: 코드 스플리팅 및 번들 분석을 통해 First Load JS 사이즈를 470kb에서 162kb로 65% 절감하여 초기 로딩 속도 개선
                      </li>
                      <li>
                        ERC-20 토큰(이더리움 기반 디지털 자산) 출금 및 NFT 전환 기능 구현 → NFT 소각 시 보상 지급 지원
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="w-full bg-slate-50" />
              <div>
                <h3 className="text-[18px]">
                  <b>Marketplace 개발팀</b>
                </h3>
                <small className="text-[14px]">2020.10 ~ 2022.08</small>
                <div className="my-[4px]">
                  <h4 className="text-[18px]">
                    <b>
                      <Anchor href="https://market.playdapp.com" target="_blank">
                        PlayDapp MarketPlace
                      </Anchor>
                    </b>{' '}
                    <span className="text-base">(2020.10 ~ 2022.08)</span>
                  </h4>

                  <P>NFT를 거래할 수 있는 C2C 마켓플레이스의 리뉴얼 및 고도화를 진행했습니다.</P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      <li>
                        <b>서비스 리뉴얼</b>: CRA+JS 기반 v1 → Next.js+TS 기반 v2 마이그레이션 및 UI/UX
                        개선
                      </li>
                      <li>
                        <b>NFT 거래 기능</b>: NFT(ERC-721) 구매, 판매 제안(Offer) 생성·취소·승인 기능 구현
                        및 My Offers 페이지 개발
                      </li>
                      <li>
                        <b>외부 협업</b>: IPX(라인프렌즈)와 협업하여 OOZ NFT 티징 페이지 제작 (원페이지
                        스크롤 UI 구현) → 신규 유저 유입 확대
                      </li>
                      <li><b>web3-react 도입</b>: 멀티월렛 지원(Metamask, WalletConnect 등)</li>
                    </ul>
                  </div>
                </div>
                <div className="my-[4px]">
                  <h4 className="text-[18px]">
                    <b>
                      <Anchor href="https://itemmanager.playdapp.com/" target="_blank">
                        ItemManager
                      </Anchor>
                    </b>{' '}
                    <span className="text-base">(2022.03 ~ 2022.04)</span>
                  </h4>
                  <P>
                    유저가 보유한 NFT를 스테이킹하여 일일 임무 및 PvP 보상을 획득할 수 있는
                    서비스입니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      <li>
                        Repair 기능 구현 → NFT 스테이킹 아이템의 내구도 회복 기능을 도입하여
                        사용자가 지속적으로 보상을 획득할 수 있도록 개선
                      </li>
                      <li>공통 컴포넌트(내구도 게이지·경고 메시지) 개발 → UI 일관성 강화</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </Flex>
        <Flex $direction="column" $gap="2px">
          <h2 className="text-[22px]">
            <b>Community Activities</b>
          </h2>
          <div className="flex flex-col">
            <ul className="list-disc pl-6 text-[16px]">
              <li>
                오픈소스 기여:{' '}
                <Anchor href="https://github.com/WintrCat/freechess" target="_blank">
                  freechess
                </Anchor>{' '}
                (리뷰 패널, 리포트 카드{' '}
                <Anchor href="https://github.com/WintrCat/freechess/pull/48" target="_blank">
                  [PR #48]
                </Anchor>
                <span className="mx-[4px]">,</span>
                <Anchor href="https://github.com/WintrCat/freechess/pull/52" target="_blank">
                  [PR #52]
                </Anchor>
                )
              </li>
              <li>
                개인 블로그 운영:{' '}
                <Anchor href="https://www.dantechblog.xyz/" target="_blank">
                  dantechblog.xyz
                </Anchor>
              </li>
            </ul>
          </div>
        </Flex>
        <Flex $direction="column" $gap="2px">
          <h2 className="text-[22px]">
            <b>Skill</b>
          </h2>
          <div>
            <p>TypeScript, JavaScript, React, Next.js, Node.js, Git, Jira</p>
          </div>
        </Flex>
        <Flex $direction="column" $gap="2px">
          <h2 className="text-[22px]">
            <b>Education</b>
          </h2>
          <div>
            <p className="text-[18px]">
              <b className="underline">Beihang University</b>, <span>Software Engineering</span> (
              <span className="text-base">13.09 - 19.07</span>)
            </p>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ResumePage;
