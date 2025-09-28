'use client';

import { ComponentProps } from 'react';
import { useMedia } from 'react-use';

import Flex from '@/components/common/Flex';
import Tag from '@/components/common/Tag';
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
    <Flex className="mx-auto max-w-[1000px] p-4" $direction="column" $gap="8px">
      <Flex $direction="column">
        <h1 className="my-[8px] text-[38px]">
          <b>이영재(YoungJae Lee)</b>
        </h1>
        <Flex $direction="column" $gap="4px">
          <ul className="flex list-disc flex-col gap-2 pl-6 text-[16px]">
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
      <Flex className="w-full" $direction="column" $gap="10px">
        <Flex $direction="column" $gap="4px">
          <h2 className="text-[24px]">
            <b>Introduction</b>
          </h2>
          <div>
            <P>프론트엔드 개발자 이영재 입니다.</P>
            <P>
              서비스의 가치를 높이기 위해 주도적으로 문제를 발견하고 해결하는 것을 좋아합니다. 예를
              들어 서비스 성능을 분석하며{' '}
              <Anchor
                href="https://www.dantechblog.xyz/posts/e485275b-92a8-499d-81b3-466d27f944b2"
                target="_blank"
              >
                번들 사이즈 개선
              </Anchor>{' '}
              작업을 진행한 경험이 있습니다. 또한, 개발 생산성을 높이기 위해 새로운 툴 도입을 위한
              내부 리서치를 주도한 적도 있습니다.
            </P>
            <P>
              저는 항상 더 나은 개발자가 되기 위해 지속적으로 성장하고자 노력하고 있습니다. 이러한
              성장의 일환으로, 제가 경험한 것과 공부하며 정리한 내용들을 블로그에 기록하고 있습니다.
              이 기록들이 다른 개발자들에게 도움이 되길 바라며, 저 역시 이를 통해 새로운 인사이트를
              얻고 있습니다.
            </P>
            <br />
            <P>현재 Coinness 개발팀에서 frontend lead 역할을 수행하고 있습니다.</P>
          </div>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[24px]">
            <b>Work Experience</b>
          </h2>
          <Flex $direction={isMdDown ? 'column' : 'row'} $gap="10px">
            <div className="min-w-[165px]">
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
            <Flex className="border-l-4 border-blue-400 pl-2.5" $direction="column" $gap="10px">
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
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                  </Flex>
                  <div className="pl-6">
                    <ul className="list-disc max-md:text-[14px]">
                      <li>
                        eslint 설정 개선 및 sort import, unused-imports 등 추가 도입을 통한 개발
                        생산성 향상
                      </li>
                      <li>
                        버튼 debounce 적용을 통한 api 요청 감소 및 optimistic ui update를 통한 ux
                        개선
                      </li>
                      <li>
                        유저통합으로 인한 국내/글로벌 가입 인증 프로세스 메일인증으로 통일 적용
                      </li>
                      <li>
                        Gitlab 기반 언어팩 자동화 파이프라인(CI Schedule + MR 생성) 구축, 수동 작업
                        제거와 코드 충돌 최소화
                      </li>
                      <li>
                        서비스 기능 개발: 대시보드,투자내역, PnL 공유, Live 개편 등 신규 기능 개발
                        진행
                      </li>
                      <li>어드민 개발 및 유지보수</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
          <Flex $direction={isMdDown ? 'column' : 'row'} $gap="10px">
            <div className="min-w-[165px]">
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
            <Flex className="border-l-4 border-blue-400 pl-2.5" $direction="column" $gap="10px">
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
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="next.js14" type="outline" size="sm" />
                    <Tag name="ky" type="outline" size="sm" />
                    <Tag name="zustand" type="outline" size="sm" />
                    <Tag name="tailwind" type="outline" size="sm" />
                    <Tag name="react-query" type="outline" size="sm" />
                    <Tag name="wagmi" type="outline" size="sm" />
                  </Flex>
                  <P>
                    EZplay는 유저가 웹 게임을 쉽게 즐기도록 하기 위한 web3 미니 게임 플렛폼 입니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <ul className="list-disc max-md:text-[14px]">
                      <li>
                        공통 컴포넌트 개발(Modal, Popup, Dropdown 등)을 통한 컴포넌트 재활용성 및
                        개발 효율성 향상
                      </li>
                      <li>서버컴포넌트 내 data fetching 처리를 통한 네트워크 비용 감소</li>
                      <li>소셜 로그인 기능 (Google, Apple)을 통한 지갑 로그인 불편함 감소</li>
                      <li>
                        지갑 연동 및 Web3 기능 지원:
                        <ul className="list-disc pl-[18px]">
                          <li>지갑 연동 그리고, Web3 기능을 지원하기 위한 hook 및 유틸함수 생성</li>
                        </ul>
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
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="next.js" type="outline" size="sm" />
                    <Tag name="rtk(redux-toolkit)" type="outline" size="sm" />
                    <Tag name="react-query" type="outline" size="sm" />
                    <Tag name="web3-react" type="outline" size="sm" />
                    <Tag name="etherjs" type="outline" size="sm" />
                    <Tag name="wagmi" type="outline" size="sm" />
                  </Flex>
                  <P>
                    재화(Gold,Ticket) 소비를 통해 참여한 게임 플레이 순위 및 대결 결과에 따른 보상을
                    제공하는 블록체인 기반 게임 플랫폼 입니다. TF팀 일원으로 소프트런칭에 기여한 후
                    정식으로 팀에 합류하여 서비스 개발 및 개선에 참여하였습니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <ul className="list-disc max-md:text-[14px]">
                      <li>
                        프로젝트 구조 설정 및 성능 최적화
                        <ul className="list-disc pl-[18px]">
                          <li>프론트엔드 개발환경 및 프로젝트 구조 설정</li>
                          <li>
                            번들 분석 및 코드 스플리팅으로 First Load JS 470kb → 162kb(-65%) 최적화
                          </li>
                        </ul>
                      </li>
                      <li>
                        핵심 기능 개발 (Web3 & 결제)
                        <ul className="list-disc pl-[18px]">
                          <li>iframe + postMessage를 활용한 게임 클라이언트 이벤트 통신</li>
                          <li>
                            ERC-20 토큰 출금 및 Ticket NFT Convert 기능 구현 (NFT 소각 + 보상 지급)
                          </li>
                          <li>
                            Paypal 결제 연동을 통한 NFT 구매 과정 단축 및 사용자 결제 편의성 강화
                          </li>
                        </ul>
                      </li>
                      <li>
                        사용자 접근성 및 UX 개선
                        <ul className="list-disc pl-[18px]">
                          <li>
                            Google·Apple 소셜 로그인 및 게스트 로그인 지원 → Web3 비경험자 유입 확대
                          </li>
                          <li>출석 리워드 기능 구현으로 사용자 참여도 향상</li>
                        </ul>
                      </li>
                      <li>
                        운영 및 분석 지원
                        <ul className="list-disc pl-[18px]">
                          <li>
                            Web3 지갑 연동 지원 (web3-react, wagmi), WalletConnect V1 → V2
                            마이그레이션
                          </li>
                          <li>GA·Mixpanel 연동을 통한 사용자 행동 데이터 수집 지원</li>
                        </ul>
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
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="next.js" type="outline" size="sm" />
                    <Tag name="redux" type="outline" size="sm" />
                    <Tag name="emotion" type="outline" size="sm" />
                    <Tag name="react-query" type="outline" size="sm" />
                    <Tag name="web3-react" type="outline" size="sm" />
                    <Tag name="etherjs" type="outline" size="sm" />
                  </Flex>
                  <P>사용자가 NFT를 자유롭게 거래할 수 있는 C2C 마켓플레이스 입니다</P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <ul className="list-disc max-md:text-[14px]">
                      <li>
                        서비스 리뉴얼 및 마이그레이션
                        <ul className="list-disc pl-[18px]">
                          <li>
                            CRA + JavaScript 기반 v1 프로젝트를 Next.js + TypeScript 기반 v2로
                            마이그레이션
                          </li>
                          <li>UI/UX 리뉴얼 및 구조 개선을 통해 코드 안정성과 유지보수성 향상</li>
                        </ul>
                      </li>
                      <li>
                        NFT 거래 핵심 기능 개발
                        <ul className="list-disc pl-[18px]">
                          <li>NFT(ERC-721) 구매, 판매 제안(Offer) 생성·취소·승인 기능 구현</li>
                          <li>My Offers 페이지 및 관련 UI 컴포넌트 개발로 거래 기능 플로우 구현</li>
                        </ul>
                      </li>
                      <li>
                        대외 협업 및 신규 기능 개발
                        <ul className="list-disc pl-[18px]">
                          <li>
                            IPX(라인프렌즈)와 협업하여 OOZ NFT 티징 페이지 제작 (원페이지 스크롤 UI
                            구현)
                          </li>
                          <li>이메일 인증 플로우 추가로 사용자 보안 및 신뢰성 강화</li>
                        </ul>
                      </li>
                      <li>
                        Web3 지갑 확장 지원
                        <ul className="list-disc pl-[18px]">
                          <li>
                            web3-react 도입을 통한 멀티월렛 연동 (Metamask, Portis, WalletConnect,
                            WalletLink 등)
                          </li>
                          <li>사용자 접근성 향상 및 지갑 선택권 확대</li>
                        </ul>
                      </li>
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
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="recoil" type="outline" size="sm" />
                    <Tag name="emotion" type="outline" size="sm" />
                    <Tag name="react-query" type="outline" size="sm" />
                    <Tag name="web3-react" type="outline" size="sm" />
                  </Flex>
                  <P>
                    유저가 보유한 NFT를 스테이킹하여 일일 임무 및 PvP 보상을 획득할 수 있는
                    서비스입니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <ul className="list-disc max-md:text-[14px]">
                      <li>
                        Repair 기능 구현: NFT 스테이킹 아이템의 내구도 회복 기능을 도입하여 사용자가
                        지속적으로 보상을 획득할 수 있도록 개선
                      </li>
                      <li>
                        공통 컴포넌트 개발: 내구도 게이지, 알림 등 UI 요소를 공통화하여 재사용성 및
                        유지보수성 향상
                      </li>
                      <li>멀티 월렛 지원: WalletConnect 적용을 통한 다양한 지갑 연동 지원</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </Flex>
        <Flex $direction="column" $gap="4px">
          <h2 className="text-[24px]">
            <b>Open Sources</b>
          </h2>
          <div>
            <h3 className="text-[18px]">
              <b>
                <Anchor href="https://github.com/WintrCat/freechess" target="_blank">
                  freechess
                </Anchor>
              </b>
            </h3>
            <ul className="flex list-disc flex-col gap-1 pl-6 text-lg text-[16px]">
              <li>
                <Anchor href="https://github.com/WintrCat/freechess/pull/48" target="_blank">
                  Contribute review panel UI
                </Anchor>
              </li>
              <li>
                <Anchor href="https://github.com/WintrCat/freechess/pull/52" target="_blank">
                  Contribute report card component
                </Anchor>
              </li>
            </ul>
          </div>
        </Flex>
        <Flex $direction="column" $gap="4px">
          <h2 className="text-[24px]">
            <b>Skills</b>
          </h2>
          <div>
            <h3 className="text-[18px]">
              <b>Front-End</b>
            </h3>
            <ul className="flex list-disc flex-col gap-1 pl-6">
              <li>HTML / CSS</li>
              <li>React.js</li>
              <li>NextJS</li>
              <li>JavaScript, TypeScript</li>
              <li>Emotion, Styled-Component, TailwindCSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18px]">
              <b>Back-End</b>
            </h3>
            <ul className="flex list-disc flex-col gap-1 pl-6">
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[18px]">
              <b>Etc</b>
            </h3>
            <ul className="flex list-disc flex-col gap-1 pl-6">
              <li>Git / Github</li>
              <li>Jira</li>
            </ul>
          </div>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[24px]">
            <b>Education</b>
          </h2>
          <div>
            <p className="text-[18px]">
              <b className="underline">Beihang University</b> / <span>software engineering</span>
            </p>
            <span className="text-base">2013.09 ~ 2019.07</span>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ResumePage;
