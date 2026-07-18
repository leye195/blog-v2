'use client';

import { ComponentProps } from 'react';

import { useMedia } from 'react-use';
import Link from 'next/link';


import Flex from '@/components/common/Flex';
import { getProject } from '@/data/projects';
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
  const coinness = getProject('coinness');
  const ezplay = getProject('ezplay');
  const tournaments = getProject('playdapp-tournaments');
  const marketplace = getProject('playdapp-marketplace');

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
            <P>
              블록체인(NFT, P2E)과 투자 정보 플랫폼 도메인에서 일해온 6년차 프론트엔드 개발자입니다. 사용자 서비스와 운영 어드민 양쪽에서 반복되는 병목을 구조 개선으로 풀어내며, 성능과 개발 생산성을 함께 끌어올려 왔습니다.
            </P>
            <P>
              주어진 스펙을 구현하는 데서 멈추지 않고, 서비스 전반에서 개선이 필요한 지점을 직접 찾아 해결하는 것을 강점으로 삼습니다. 성능·구조·협업의 병목을 스스로 발견해{' '}
              <Anchor
                href="https://www.dantechblog.xyz/posts/e485275b-92a8-499d-81b3-466d27f944b2"
                target="_blank"
              >
                번들 사이즈 65% 절감
              </Anchor>
              , 언어팩 충돌 100% 제거, 이미지 생성 속도 87% 단축으로 이어냈고,{' '}
              <Anchor
                href="https://www.dantechblog.xyz/posts/2628cb44-979a-803a-a79f-dcc7429c933a"
                target="_blank"
              >
                GitLab 언어팩 파이프라인 구축
              </Anchor>
              과 Knip 기반 데드코드 관리처럼 팀 전체의 생산성을 높이는 개선도 주도했습니다.
            </P>
            <P>
              API와 디자인 기반 코드 생성 자동화처럼 AI 도구를 실무에 적극 활용하고, 이렇게 쌓은 문제 해결 경험과 학습 내용은 블로그를 통해 꾸준히 공유하고 있습니다.
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
                    <span className="text-base">(2024.10 ~ )</span>{' '}
                    <Link
                      href="/resume/projects/coinness"
                      className="text-[14px] font-normal text-blue-500 underline max-md:text-[13px]"
                    >
                      상세 보기 →
                    </Link>
                  </h4>

                  <P>{coinness?.intro}</P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      {coinness?.categories.map((category) => (
                        <li key={category.title}>
                          <b>{category.title}</b> — {category.summary}
                        </li>
                      ))}
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
                      EZPlay
                    </b>{' '}
                    <span className="text-base">(2024.06 ~ 2024.09)</span>{' '}
                    <Link
                      href="/resume/projects/ezplay"
                      className="text-[14px] font-normal text-blue-500 underline max-md:text-[13px]"
                    >
                      상세 보기 →
                    </Link>
                  </h4>
                  <P>{ezplay?.intro}</P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      {ezplay?.categories.map((category) => (
                        <li key={category.title}>
                          <b>{category.title}</b> — {category.summary}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="my-[4px]">
                  <h4 className="text-[18px]">
                    <b>
                      PlayDapp Tournaments
                    </b>{' '}
                    <span className="text-base">(2022.08 ~ 2024.06)</span>{' '}
                    <Link
                      href="/resume/projects/playdapp-tournaments"
                      className="text-[14px] font-normal text-blue-500 underline max-md:text-[13px]"
                    >
                      상세 보기 →
                    </Link>
                  </h4>

                  <P>{tournaments?.intro}</P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      {tournaments?.categories.map((category) => (
                        <li key={category.title}>
                          <b>{category.title}</b> — {category.summary}
                        </li>
                      ))}
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
                      PlayDapp MarketPlace
                    </b>{' '}
                    <span className="text-base">(2020.10 ~ 2022.08)</span>{' '}
                    <Link
                      href="/resume/projects/playdapp-marketplace"
                      className="text-[14px] font-normal text-blue-500 underline max-md:text-[13px]"
                    >
                      상세 보기 →
                    </Link>
                  </h4>

                  <P>{marketplace?.intro}</P>
                  <b>주요 역할 및 성과:</b>
                  <div>
                    <ul
                      className={cn(
                        'list-disc pl-[18px] max-md:text-[14px]',
                        isMdDown && 'list-none',
                      )}
                    >
                      {marketplace?.categories.map((category) => (
                        <li key={category.title}>
                          <b>{category.title}</b> — {category.summary}
                        </li>
                      ))}
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
