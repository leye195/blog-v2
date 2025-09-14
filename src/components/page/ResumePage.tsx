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
        <h1 className="text-[42px]">
          <b>이영재(YoungJae Lee)</b>
        </h1>
        <Flex $direction="column" $gap="4px">
          <ul className="mb-3 flex list-disc flex-col gap-2 pl-6 text-[18px]">
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
                mailto:leye195@naver.com
              </Anchor>
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex className="w-full" $direction="column" $gap="20px">
        <Flex $direction="column" $gap="8px">
          <h2 className="mb-3 text-[32px]">
            <b>Introduction</b>
          </h2>
          <div>
            <P>웹 프론트엔드 개발자 이영재 입니다.</P>
            <P>
              주어진 업무를 성실히 수행하는 것뿐만 아니라, 서비스의 가치를 높이기 위해 주도적으로
              문제를 발견하고 해결하는 것을 좋아합니다. 예를 들어 서비스 성능을 분석하며{' '}
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
          <h2 className="mb-3 text-[32px]">
            <b>Work Experience</b>
          </h2>
          <Flex $direction={isMdDown ? 'column' : 'row'} $gap="12px">
            <div className="min-w-[165px]">
              <h3 className="mb-1 text-[20px]">
                <b>
                  <Anchor href="https://adenasoft.com" target="_blank">
                    Adena Software
                  </Anchor>
                </b>
              </h3>
              <small className="text-[12px]">2024.10 ~ current</small>
              <br />
              <span className="text-[14px]">Frontend Engineer</span>
            </div>
            <Flex className="border-l-4 border-blue-400 pl-2.5" $direction="column" $gap="12px">
              <div>
                <h3 className="mb-1 text-[20px]">
                  <b>Coinness 개발팀</b>
                </h3>
                <small className="text-[16px]">2024.10 ~</small>
                <div className="my-[10px]">
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
          <Flex $direction={isMdDown ? 'column' : 'row'} $gap="12px">
            <div className="min-w-[165px]">
              <h3 className="mb-1 text-[20px]">
                <b>
                  <Anchor href="https://supertree.co/" target="_blank">
                    SuperTree
                  </Anchor>
                </b>
              </h3>
              <small className="text-[12px]">2020.10 ~ 2024.09 (3y 10m)</small>
              <br />
              <span className="text-[14px]">Frontend Engineer</span>
            </div>
            <Flex className="border-l-4 border-blue-400 pl-2.5" $direction="column" $gap="12px">
              <div>
                <h3 className="mb-1 text-[20px]">
                  <b>Tournament 개발팀</b>
                </h3>
                <small className="text-[16px]">2022.08 ~ 2024.09 </small>
                <div className="my-[10px]">
                  <h4 className="text-[18px]">
                    <b>
                      <Anchor href="https://ezplay.playdapp.com" target="_blank">
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
                <div className="my-[10px]">
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
                    제공하는 BlockChain Game Platform 입니다. TF팀 일원으로 서비스 소프트런칭에
                    기여하였으며 이후 정식으로 팀에 합류하여 서비스 개발 및 개선에 참여하였습니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <ul className="list-disc max-md:text-[14px]">
                      <li>프론트 개발환경 및 프로젝트 구조 설정</li>
                      <li>
                        게임 클라이언트 통합 및 이벤트 통신:
                        <ul className="list-disc pl-[18px]">
                          <li>
                            iframe과 postMessage를 활용한 게임 클라이언트 연동 및 이벤트 통신 구현
                          </li>
                        </ul>
                      </li>
                      <li>
                        점검 페이지 노출 및 접근 처리:
                        <ul className="list-disc pl-[18px]">
                          <li>
                            페이지 접근시 점검 진행 중인 경우 nextjs middleware api 활용을 통한
                            점검페이지 redirect 구현
                          </li>
                        </ul>
                      </li>
                      <li>
                        프로젝트 번들 사이즈 최적화:
                        <ul className="list-disc pl-[18px]">
                          <li>
                            <b>bundle-analyzer</b> 를 활용하여 프로젝트 번들 크기 분석을 통한 대체
                            가능 혹은 불필요 패키지 제거
                          </li>
                          <li>
                            모달 혹은 상호작용시 노출이 필요 혹은 우선순위가 낮은 컴포넌트들에
                            대하여 code splitting 적용을 통한 First Load JS 용량 <b>`470kb`</b>
                            에서 <b>`162kb`</b>로 감소
                          </li>
                        </ul>
                      </li>
                      <li>가상화폐(ERC-20) 보상 출금 기능 추가</li>
                      <li>
                        Ticket NFT Convert 기능 구현:
                        <ul className="list-disc pl-[18px]">
                          <li>
                            Marketplace에서 구매한 Ticket NFT를 토너먼트에서 사용할 수 있도록,
                            contract ABI의 burn 함수와 REST API 호출을 통해 NFT를 소각하고 보상을
                            지급하는 기능 구현
                          </li>
                        </ul>
                      </li>
                      <li>
                        Paypal 티켓 구매 기능 추가:
                        <ul className="list-disc pl-[18px]">
                          <li>
                            <b>react-paypal-js</b>를 사용하여 유저가 MarketPlace에서 NFT를 구매한 뒤
                            burn하는 과정 없이 Paypal 카드 결제를 통해 직접 티켓을 구매할 수 있는
                            기능 추가 하여 편의성을 높였습니다.
                          </li>
                        </ul>
                      </li>
                      <li>
                        출석 기능 및 플로우 구현:
                        <ul className="list-disc pl-[18px]">
                          <li>
                            유저가 로그인시 재화보상을 받을 수 있도록 하기 위한 출석 보드 및 출석
                            인증 모달 컴포넌트 작업 진행
                          </li>
                          <li>유저의 출석인지를 위한 도장 애니메이션 적용 작업</li>
                        </ul>
                      </li>
                      <li>
                        소셜(Google, Apple),게스트 로그인 기능 추가:
                        <ul className="list-disc pl-[18px]">
                          <li>
                            Web3 환경에 익숙하지 않은 유저들도 서비스에 쉽게 접근 할 수 있도록
                            Social&Guest 로그인 지원
                          </li>
                        </ul>
                      </li>
                      <li>유저 및 트래픽 분석 도구 (GA,Mixpanel) 연동</li>
                      <li>
                        web3 지갑 연동 지원:
                        <ul className="list-disc pl-[18px]">
                          <li>web3-react와 wagmi를 적용하여 Web3 지갑 연동을 지원</li>
                          <li>WalletConnect V1 -&gt; V2 마이그레이션</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="w-full bg-slate-50" />
              <div>
                <h3 className="mb-1 text-[20px]">
                  <b>Marketplace 개발팀</b>
                </h3>
                <small className="text-[16px]">2020.10 ~ 2022.08</small>
                <div className="my-[10px]">
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
                  <P>
                    PlayDapp MarketPlace는 사용자가 NFT를 거래할 수 있는 C2C 마켓플레이스입니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <ul className="list-disc max-md:text-[14px]">
                      <li>
                        v1/v2 리뉴얼 프론트엔드 개발
                        <ul className="list-disc pl-[18px]">
                          <li>
                            javascript로 되어 있는는 CRA 기반 v1 코드 파악후, typescript 기반
                            nextjs로 마이그레이션 및 UI 리뉴얼 개선 작업 진행
                          </li>
                        </ul>
                      </li>
                      <li>
                        NFT 상세 페이지
                        <ul className="list-disc pl-[18px]">
                          <li>NFT(ERC-721) 구매 기능 구현</li>
                          <li>Order(판매 제안) cancel 기능 구현</li>
                        </ul>
                      </li>
                      <li>
                        My Offers 페이지
                        <ul className="list-disc pl-[18px]">
                          <li>Offer(판매 제안) 승인 기능 구현</li>
                          <li>Offer Table, OfferAccept 모달 컴포넌트 구현</li>
                        </ul>
                      </li>
                      <li>
                        Email 인증 페이지
                        <ul className="list-disc pl-[18px]">
                          <li>email 인증 요청/결과 페이지 추가 및 기능 구현</li>
                        </ul>
                      </li>
                      <li>
                        OOZ 티징 페이지
                        <ul className="list-disc pl-[18px]">
                          <li>
                            마켓내 등록될 IPX (라인프렌즈)의 OOZ NFT 관련 티징 페이지 작업으로 IPX
                            측 디자이너와 협업을 통해 개발한 페이지로 one page scroll 형식으로 한
                            번에 한 페이지 씩 노출되도록 구현 진행
                          </li>
                        </ul>
                      </li>
                      <li>
                        멀티월렛 지원 확장을 위한, web3-react 도입
                        <ul className="list-disc pl-[18px]">
                          <li>
                            metamask, portis을 제외한 다른 월렛(walletLink, walletConnect) 로그인을
                            지원하기 위해 web3-react를 도입하였습니다.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-[10px]">
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
                    Multihoming 2.0 버전 지원을 위한 ItemManager에 내구제 기능 적용 작업을
                    진행하였습니다. itemManager는 유저가 소유하고 있는 nft를 스테이킹 하고 게임내
                    일일임무, PvP 보상을 받아갈수 있도록 해주는 서비스 입니다
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <ul className="list-disc max-md:text-[14px]">
                      <li>
                        Repair 기능 구현
                        <ul className="list-disc pl-[18px]">
                          <li>
                            서비스내 스테이킹한 nft들에 대해서 PLA 지불을 통해 내구도를 수리 할 수
                            있도록 로직 구현, 내구도를 유지함으로 유저는 지속적으로 보상을 받아갈 수
                            있음.
                          </li>
                        </ul>
                      </li>
                      <li>
                        공통 컴포넌트 개발
                        <ul className="list-disc pl-[18px]">
                          <li>
                            각 페이지에서 공통적으로 보여줘야 하는 내구도 게이지, 경고 메시지 등
                            컴포넌트들에 대해 모듈화를 진행하여 UI를 구성했습니다.
                          </li>
                        </ul>
                      </li>
                      <li>멀티 월렛 지원 - walletConnect</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="mb-3 text-[32px]">
            <b>Open Sources</b>
          </h2>
          <div>
            <h3 className="mb-2 text-[22px]">
              <b>
                <Anchor href="https://github.com/WintrCat/freechess" target="_blank">
                  freechess
                </Anchor>
              </b>
            </h3>
            <ul className="flex flex-col gap-1 pl-6 text-lg">
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
        <Flex $direction="column" $gap="8px">
          <h2 className="mb-3 text-[32px]">
            <b>Skills</b>
          </h2>
          <div>
            <h3 className="mb-2 text-[22px]">
              <b>Front-End</b>
            </h3>
            <ul className="flex flex-col gap-1 pl-6 text-lg">
              <li>HTML / CSS</li>
              <li>React.js</li>
              <li>NextJS</li>
              <li>JavaScript, TypeScript</li>
              <li>Emotion, Styled-Component, TailwindCSS</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-[22px]">
              <b>Back-End</b>
            </h3>
            <ul className="flex flex-col gap-1 pl-6 text-[18px]">
              <li>Node.js</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-[22px]">
              <b>Etc</b>
            </h3>
            <ul className="flex flex-col gap-1 pl-6 text-lg">
              <li>Git / Github</li>
              <li>Jira</li>
            </ul>
          </div>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="mb-3 text-[32px]">
            <b>Education</b>
          </h2>
          <div>
            <p className="mb-2 text-[22px]">
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
