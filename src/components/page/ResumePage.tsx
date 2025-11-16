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
            <P>주도적으로 문제를 발견하고 해결하는 것을 좋아합니다.</P>
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
              ), Knip 도입을 통한 데드코드 감지·관리 등을 통해 서비스 품질과 팀 생산성을 개선한
              경험이 있습니다.
            </P>
            <P>
              또한 블로그를 통해 학습과 경험을 꾸준히 공유하며, 제 경험이 다른 개발자와 동료들에 게
              인사이트가 되고 저 또한 지속적으로 성장하고 있습니다.
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
                        FE 코드 컨벤션 표준화 및 데드코드 자동 관리 체계 구축(ESLint·Knip) → 코드
                        품질 향상 및 개발 효율 개선
                      </li>
                      <li>Optimistic UI·버튼 debounce 적용 → API 요청 감소, 사용자 경험 개선</li>
                      <li>
                        글로벌 서비스 운영 및 인증 체계 통합 → 메일 인증 기반으로 통합하여 사용자
                        경험 일원화 및 유지보수 부담 감소
                      </li>
                      <li>
                        <a
                          className="underline"
                          href="http://localhost:3000/posts/2628cb44-979a-803a-a79f-dcc7429c933a"
                        >
                          Gitlab 기반 언어팩 자동화 파이프라인(CI Schedule + MR 생성) 구축 →  MR
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
                    EZplay는 유저가 웹 게임을 쉽게 즐기도록 하기 위한 web3 미니 게임 플렛폼 입니다.
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
                        공통 컴포넌트 개발(Modal, Popup, Dropdown 등) → 재활용성 확보 및 개발 효율성
                        향상
                      </li>
                      <li>
                        서버컴포넌트 캐싱, 데이터 특성에 따라 ISR/no-store 구분 적용 → 불필요한 API
                        호출 제거 및 페이지 로딩 속도 개선
                      </li>
                      <li>
                        소셜 로그인(Google, Apple) 기능 도입 → 지갑 로그인 불편 해소 및 신규 사용자
                        유입 개선
                      </li>
                      <li>지갑 연동 및 Web3 기능 지원</li>
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
                    재화(Gold,Ticket) 소비를 통해 참여한 게임 플레이 순위 및 대결 결과에 따른 보상을
                    제공하는 블록체인 기반 게임 플랫폼 입니다. TF팀 일원으로 소프트런칭에 기여한 후
                    정식으로 팀에 합류하여 서비스 개발 및 개선에 참여하였습니다.
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
                        프론트엔드 리드(프론트엔드 4인 구성)로 프로젝트 구조/컨벤션을 수립하여 협업
                        효율을 개선하고, 정식 합류 이후에도 코드 품질 및 개발 표준을 지속적으로 주도
                      </li>
                      <li>
                        번들 최적화: 번들 분석 및 코드 스플리팅 적용 → First Load JS 470kb →
                        162kb(-65%) 최적화, 초기 로딩 속도 개선
                      </li>
                      <li>
                        Web3 게임 브릿지 구축: iframe+postMessage 기반 통신으로 게임 클라이언트 연동
                      </li>
                      <li>
                        결제 편의성 강화: Paypal 결제 연동 → 카드 결제를 통한 직접 티켓 구매 지원
                      </li>
                      <li>
                        ERC-20 토큰(가상화폐) 출금 및 NFT 전환 기능 구현 → NFT 소각 시 보상 지급
                        지원
                      </li>
                      <li>
                        사용자 접근성 및 UX 개선: Google·Apple 소셜 로그인·게스트 로그인 지원, 출석
                        리워드+애니메이션 적용
                      </li>
                      <li>Web3 지갑 고도화: wagmi 적용, WalletConnect V1 → V2 마이그레이션</li>
                      <li>GA·Mixpanel 연동 → 사용자 행동 데이터 트래킹 및 UX 개선 근거 확보</li>
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

                  <P>사용자가 NFT를 자유롭게 거래할 수 있는 C2C 마켓플레이스 입니다</P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      <li>
                        서비스 리뉴얼: CRA+JS 기반 v1 → Next.js+TS 기반 v2 마이그레이션 및 UI/UX
                        개선
                      </li>
                      <li>
                        NFT 거래 기능: NFT(ERC-721) 구매, 판매 제안(Offer) 생성·취소·승인 기능 구현
                        및 My Offers 페이지 개발
                      </li>

                      <li>
                        대외 협업: IPX(라인프렌즈)와 협업하여 OOZ NFT 티징 페이지 제작 (원페이지
                        스크롤 UI 구현) → 신규 유저 유입 확대
                      </li>
                      <li>이메일 인증 플로우 추가 → 사용자 보안 및 신뢰성 강화</li>
                      <li>web3-react 도입 → 멀티월렛 지원(Metamask, WalletConnect 등)</li>
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
                      <li>WalletConnect 연동 → 멀티월렛 지원 확장</li>
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
