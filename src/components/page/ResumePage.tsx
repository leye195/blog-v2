"use client";

import { useMedia } from "react-use";
import styled from "styled-components";

import Flex from "@/components/common/Flex";
import Tag from "@/components/common/Tag";
import { getBreakpointQuery } from "@/libs/utils";
import breakpoints from "@/styles/breakpoints";

const P = styled.p`
  margin-bottom: 4px;

  ${breakpoints.down("md")} {
    font-size: 14px;
  }
`;

const Anchor = styled.a`
  text-decoration: underline;
`;

const Ul = styled.ul`
  ${breakpoints.down("md")} {
    font-size: 14px;
  }
`;

const ResumePage = () => {
  const isMdDown = useMedia(getBreakpointQuery(breakpoints.down("md")), false);

  return (
    <Flex className="max-w-[1000px] mx-auto p-4" $direction="column" $gap="8px">
      <Flex $direction="column">
        <h1 className="text-[42px]">
          <b>안녕하세요! </b>
          <br className="max-md:hidden" />
          <b>저는 이영재 입니다.</b>
        </h1>
        <Flex $direction="column" $gap="4px">
          <ul className="flex flex-col gap-2 text-[18px] pl-6 mb-3">
            <li>
              <b>Github:</b>{" "}
              <Anchor
                className="text-blue-500"
                href="https://github.com/leye195"
                target="_blank"
              >
                https://github.com/leye195
              </Anchor>
            </li>
            <li>
              <b>Blog:</b>{" "}
              <Anchor
                className="text-blue-500"
                href="https://www.dantechblog.xyz"
                target="_blank"
              >
                https://www.dantechblog.xyz
              </Anchor>
            </li>
            <li>
              <b>Email:</b>{" "}
              <Anchor className="text-blue-500" href="mailto:leye195@naver.com">
                mailto:leye195@naver.com
              </Anchor>
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex className="w-full" $direction="column" $gap="20px">
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[32px] mb-3">
            <b>Introduction</b>
          </h2>
          <div>
            <P>
              블록체인 스타트업에서 웹 프론트엔드 개발자로서 일을 하였습니다.
              개발자로 업무를 수행하는 한 편 잠깐이지만 토너먼트 라는 프로젝트의
              프론트엔드 리드를 진행한 경험도 있습니다.
            </P>
            <P>
              주어진 업무를 성실히 수행하는 것뿐만 아니라, 서비스의 가치를
              높이기 위해 주도적으로 문제를 발견하고 해결하는 것을 좋아합니다.
              예를 들어 서비스 성능을 분석하며{" "}
              <Anchor
                href="https://www.dantechblog.xyz/posts/e485275b-92a8-499d-81b3-466d27f944b2"
                target="_blank"
              >
                번들 사이즈 개선
              </Anchor>{" "}
              작업을 진행한 경험이 있습니다. 또한, 개발 생산성을 높이기 위해
              새로운 툴 도입을 위한 내부 리서치를 주도한 적도 있습니다.
            </P>
            <P>
              저는 항상 더 나은 개발자가 되기 위해 지속적으로 성장하고자
              노력하고 있습니다. 이러한 성장의 일환으로, 제가 경험한 것과
              공부하며 정리한 내용들을 블로그에 기록하고 있습니다. 이 기록들이
              다른 개발자들에게 도움이 되길 바라며, 저 역시 이를 통해 새로운
              인사이트를 얻고 있습니다.
            </P>
          </div>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[32px] mb-3">
            <b>Work Experience</b>
          </h2>
          <Flex $direction={isMdDown ? "column" : "row"} $gap="22px">
            <div>
              <h3 className="text-[22px] mb-1">
                <b>
                  <Anchor href="https://supertree.co/" target="_blank">
                    SuperTree
                  </Anchor>
                </b>
              </h3>
              <small className="text-[16px]">2020.10 ~ 2024.09</small>
              <br />
              <span className="text-[16px]">Frontend Engineer</span>
            </div>
            <Flex
              className="border-blue-400 border-l-4 pl-4"
              $direction="column"
              $gap="12px"
            >
              <div>
                <h3 className="text-[22px] mb-1">
                  <b>Tournament 개발팀</b>
                </h3>
                <small className="text-[16px]">2022.08 ~ 2024.09 </small>
                <div className="my-[10px]">
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor
                        href="https://ezplay.playdapp.com"
                        target="_blank"
                      >
                        EZPlay
                      </Anchor>
                    </b>{" "}
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
                    EZplay는 유저가 웹 게임을 쉽게 즐기도록 하기 위한 web3 미니
                    게임 플렛폼 입니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <ul>
                      <li>
                        공통 컴포넌트 개발:
                        <ul className="pl-[18px]">
                          <li>
                            Modal, Popup, Dropdown 등의 재사용 가능한 컴포넌트를
                            구현하여 코드 재활용성을 높이고 개발 효율성 향상.
                          </li>
                        </ul>
                      </li>
                      <li>
                        서버컴포넌트 내 data fetching 처리를 통한 네트워크 비용
                        감소
                      </li>
                      <li>
                        소셜 로그인 기능:
                        <ul className="pl-[18px]">
                          <li>
                            Google, Apple 소셜 로그인 기능을 구현하여 사용자
                            접근성을 향상
                          </li>
                        </ul>
                      </li>
                      <li>
                        지갑 연동 및 Web3 기능 지원:
                        <ul className="pl-[18px]">
                          <li>
                            지갑 연동 그리고, Web3 기능을 지원하기 위한 hook 및
                            유틸함수 생성
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-[10px]">
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor target="_blank">PlayDapp Tournaments</Anchor>
                    </b>{" "}
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
                    재화(Gold,Ticket) 소비를 통해 참여한 게임 플레이 순위 및
                    대결 결과에 따른 보상을 제공하는 BlockChain Game Platform
                    입니다. TF로 합류하여 서비스 소프트런칭에 기여하였으며 이후
                    정식으로 팀에 합류하여 서비스 개발 및 개선에 참여하였습니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <Ul>
                      <li>프론트 개발환경 및 프로젝트 구조 설정</li>
                      <li>
                        게임 클라이언트 통합 및 이벤트 통신:
                        <Ul className="pl-[18px]">
                          <li>
                            iframe과 postMessage를 활용한 게임 클라이언트 연동
                            및 이벤트 통신 구현
                          </li>
                        </Ul>
                      </li>
                      <li>
                        점검 페이지 노출 및 접근 처리:
                        <Ul className="pl-[18px]">
                          <li>
                            페이지 접근시 점검 진행 중인 경우 nextjs middleware
                            api 활용을 통한 점검페이지 redirect 구현
                          </li>
                        </Ul>
                      </li>
                      <li>
                        프로젝트 번들 사이즈 최적화:
                        <ul className="pl-[18px]">
                          <li>
                            <b>bundle-analyzer</b> 를 활용하여 프로젝트 번들
                            크기 분석을 통한 대체 가능 혹은 불필요 패키지 제거
                          </li>
                          <li>
                            모달 혹은 상호작용시 노출이 필요 혹은 우선순위가
                            낮은 컴포넌트들에 대하여 code splitting 적용을 통한
                          </li>
                          <li>
                            First Load JS 용량 <b>`470kb`</b>에서 <b>`162kb`</b>
                            로 감소
                          </li>
                        </ul>
                      </li>
                      <li>가상화폐(ERC-20) 보상 출금 기능 추가</li>
                      <li>
                        Ticket NFT Convert 기능 구현:
                        <Ul className="pl-[18px]">
                          <li>
                            Marketplace에서 구매한 Ticket NFT를 토너먼트에서
                            사용할 수 있도록, contract ABI의 burn 함수와 REST
                            API 호출을 통해 NFT를 소각하고 보상을 지급하는 기능
                            구현
                          </li>
                        </Ul>
                      </li>
                      <li>
                        Paypal 티켓 구매 기능 추가:
                        <ul className="pl-[18px]">
                          <li>
                            <b>react-paypal-js</b>를 사용하여 유저가
                            MarketPlace에서 NFT를 구매한 뒤 burn하는 과정 없이
                            Paypal 카드 결제를 통해 직접 티켓을 구매할 수 있는
                            기능 추가 하여 편의성을 높였습니다.
                          </li>
                        </ul>
                      </li>
                      <li>
                        출석 기능 및 플로우 구현:
                        <ul className="pl-[18px]">
                          <li>
                            유저가 로그인시 재화보상을 받을 수 있도록 하기 위한
                            출석 보드 및 출석 인증 모달 컴포넌트 작업 진행
                          </li>
                          <li>
                            유저의 출석인지를 위한 도장 애니메이션 적용 작업
                          </li>
                        </ul>
                      </li>
                      <li>
                        소셜(Google, Apple),게스트 로그인 기능 추가:
                        <ul className="pl-[18px]">
                          <li>
                            Web3 환경에 익숙하지 않은 유저들도 서비스에 쉽게
                            접근 할 수 있도록 Social&Guest 로그인 지원
                          </li>
                          <li>
                            `@react-oauth/google`와 `react-apple-login`
                            라이브러리 사용하여 소셜 로그인 기능을 구현하였으며,
                            공통 인자를 전달 받아 처리하기 하는
                            <b> SocialLoginButton</b> 컴포넌트 추가
                          </li>
                        </ul>
                      </li>
                      <li>
                        유저 및 트래픽 분석 도구 연동:
                        <ul className="pl-[18px]">
                          <li>
                            GA와 Mixpanel 연동을 통한 유저 및 트래픽 분석 지원
                          </li>
                        </ul>
                      </li>
                      <li>
                        web3 지갑 연동 지원:
                        <ul className="pl-[18px]">
                          <li>
                            web3-react와 wagmi를 적용하여 Web3 지갑 연동을 지원
                          </li>
                          <li>
                            WalletConnect V2로의 마이그레이션 작업을
                            진행하였으며, 기존 WalletConnect V1 지원 종료로 인해
                            발생한 문제를 해결하기 위해 web3-react V8 버전으로의
                            업데이트를 검토하였습니다. 이 과정에서 몇몇 지갑이
                            web3-react V8에서 지원되지 않음을 발견하고, 공식
                            문서에서 권장하는 방법을 따르기로 결정하였습니다.
                          </li>
                        </ul>
                      </li>
                    </Ul>
                  </div>
                </div>
              </div>
              <hr className="w-full  bg-slate-50" />
              <div>
                <h3 className="text-[22px] mb-1">
                  <b>Marketplace 개발팀</b>
                </h3>
                <small className="text-[16px]">2020.10 ~ 2022.08</small>
                <div className="my-[10px]">
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor
                        href="https://market.playdapp.com"
                        target="_blank"
                      >
                        PlayDapp MarketPlace
                      </Anchor>
                    </b>{" "}
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
                    PlayDapp MarketPlace는 사용자가 NFT를 거래할 수 있는 C2C
                    마켓플레이스입니다.
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <Ul>
                      <li>
                        v1/v2 리뉴얼 프론트엔드 개발
                        <Ul className="pl-[18px]">
                          <li>
                            javascript로 되어 있는는 CRA 기반 v1 코드 파악후,
                            typescript 기반 nextjs로 마이그레이션 및 UI 리뉴얼
                            개선 작업 진행
                          </li>
                        </Ul>
                      </li>
                      <li>
                        NFT 상세 페이지
                        <Ul className="pl-[18px]">
                          <li>NFT(ERC-721) 구매 기능 구현</li>
                          <li>
                            Order(판매 제안) cancel 기능 구현
                            <Ul className="pl-[18px]">
                              <li>
                                isCancelListing과 취소 로직을 실행하는
                                handleCancelListing 함수를 리턴하는
                                useListingCancel hook 생성 및 활용을 통한 중복
                                코드
                              </li>
                            </Ul>
                          </li>
                        </Ul>
                      </li>
                      <li>
                        My Offers 페이지
                        <Ul className="pl-[18px]">
                          <li>Offer(판매 제안) 승인 기능 구현</li>
                          <li>Offer Table, OfferAccept 모달 컴포넌트 구현</li>
                        </Ul>
                      </li>
                      <li>
                        Email 인증 페이지
                        <Ul className="pl-[18px]">
                          <li>
                            email 인증 요청 기능 구현
                            <ul className="pl-[18px]">
                              <li>
                                react-hook-form 제공 register 함수를 통한 입력
                                값 유효성 체크 및 handleSubmit 함수를 활용하여
                                submit 요청에 대한 성공 및 에러 대한 처리를
                                진행하도록 구현
                              </li>
                            </ul>
                          </li>
                          <li>
                            email 인증 결과 페이지
                            <ul className="pl-[18px]">
                              <li>
                                각 결과에 대한 페이지를 별도 작성하는것이 아닌
                                getStaticPaths와 getStaticProps를 활용하여 인증
                                결과 및 에러 값을 동적 라우팅 경로로 전달받아
                                결과에 대한 페이지를 랜더링하여 보여주도록 구현
                              </li>
                            </ul>
                          </li>
                        </Ul>
                      </li>
                      <li>
                        OOZ 티징 페이지
                        <Ul className="pl-[18px]">
                          <li>
                            마켓내 등록될 IPX (라인프렌즈)의 OOZ NFT 관련 티징
                            페이지 작업으로 IPX 측 디자이너와 협업을 통해 개발한
                            페이지로 one page scroll 형식으로 한 번에 한 페이지
                            씩 노출되도록 구현 진행
                          </li>
                        </Ul>
                      </li>
                      <li>
                        멀티월렛 지원 확장을 위한, web3-react 도입
                        <ul className="pl-[18px]">
                          <li>
                            metamask, portis을 제외한 다른 월렛(walletLink,
                            walletConnect) 로그인을 지원하기 위해 web3-react를
                            도입하였습니다.
                          </li>
                        </ul>
                      </li>
                    </Ul>
                  </div>
                </div>
                <div className="my-[10px]">
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor
                        href="https://itemmanager.playdapp.com/"
                        target="_blank"
                      >
                        ItemManager
                      </Anchor>
                    </b>{" "}
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
                    Multihoming 2.0 버전 지원을 위한 ItemManager에 내구제 기능
                    적용 작업을 진행하였습니다. itemManager는 유저가 소유하고
                    있는 nft를 스테이킹 하고 게임내 일일임무, PvP 보상을
                    받아갈수 있도록 해주는 서비스 입니다
                  </P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <Ul>
                      <li>
                        Repair 기능 구현
                        <Ul className="pl-[18px]">
                          <li>
                            유저가 itemManager에 스테이킹한 nft들에 대해서 PLA를
                            지불하여 내구도를 수리 할 수 있도록 로직을 구현하여
                            지속적으로 보상을 받아갈 수 있도록 하였습니다.
                          </li>
                        </Ul>
                      </li>
                      <li>
                        공통 컴포넌트 개발
                        <Ul className="pl-[18px]">
                          <li>
                            각 페이지에서 공통적으로 보여줘야 하는 내구도
                            게이지, 경고 메시지 등 컴포넌트들에 대해 모듈화를
                            진행하여 UI를 구성했습니다.
                          </li>
                        </Ul>
                      </li>
                      <li>
                        멀티 월렛 지원 - walletConnect
                        <Ul className="pl-[18px]">
                          <li>
                            기존에 portis 월렛을 통한 로그인 만 지원하는 경우
                            portis 월렛 제품 자체에서 에러가 발생하여 로그인이
                            안되는 이슈가 많아 walletConnect 월렛 로그인도
                            추가적으로 지원하여 유저가 다른 경로를 통해 로그인을
                            할 수 있도록 개선 하였습니다.
                          </li>
                        </Ul>
                      </li>
                    </Ul>
                  </div>
                </div>
                <div>
                  <h4 className="text-[20px]">
                    <b>
                      <Anchor
                        href="https://geodomain.event.playdapp.com"
                        target="_blank"
                      >
                        GEO.DOMAIN Promotion
                      </Anchor>
                    </b>{" "}
                    <span className="text-base">(2022.02 ~ 2022.03)</span>
                  </h4>
                  <Flex className="my-2" $gap="6px" $flexWrap="wrap">
                    <Tag name="typescript" type="outline" size="sm" />
                    <Tag name="react" type="outline" size="sm" />
                    <Tag name="next.js" type="outline" size="sm" />
                    <Tag name="next-i18next" type="outline" size="sm" />
                    <Tag name="emotion" type="outline" size="sm" />
                  </Flex>
                  <P>GEO.DOMAIN NFT 이벤트 프로모션 페이지 입니다.</P>
                  <b>주요 역할 및 성과:</b>
                  <div className="pl-6">
                    <Ul>
                      <li>
                        GEO.DOMAIN NFT 오픈 이벤트 프로모션 프로젝트 환경 구성
                        및 페이지 구현
                      </li>
                      <li>i18n 활용 영어, 한글 다국어 지원</li>
                    </Ul>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[32px] mb-3">
            <b>Open Sources</b>
          </h2>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>
                <Anchor
                  href="https://github.com/WintrCat/freechess"
                  target="_blank"
                >
                  freechess
                </Anchor>
              </b>
            </h3>
            <Ul className="text-lg flex flex-col gap-1 pl-6">
              <li>
                <Anchor
                  href="https://github.com/WintrCat/freechess/pull/48"
                  target="_blank"
                >
                  Contribute review panel UI
                </Anchor>
              </li>
              <li>
                <Anchor
                  href="https://github.com/WintrCat/freechess/pull/52"
                  target="_blank"
                >
                  Contribute report card component
                </Anchor>
              </li>
            </Ul>
          </div>
        </Flex>
        <Flex $direction="column" $gap="8px">
          <h2 className="text-[32px] mb-3">
            <b>Skills</b>
          </h2>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>Front-End</b>
            </h3>
            <Ul className="text-lg flex flex-col gap-1 pl-6">
              <li>HTML / CSS</li>
              <li>React.js</li>
              <li>NextJS</li>
              <li>JavaScript, TypeScript</li>
              <li>Emotion, Styled-Component, TailwindCSS</li>
            </Ul>
          </div>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>Back-End</b>
            </h3>
            <Ul className="text-[18px] flex flex-col gap-1 pl-6">
              <li>Node.js</li>
            </Ul>
          </div>
          <div>
            <h3 className="text-[22px] mb-2">
              <b>Etc</b>
            </h3>
            <Ul className="text-lg flex flex-col gap-1 pl-6">
              <li>Git / Github</li>
              <li>Jira</li>
            </Ul>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ResumePage;
