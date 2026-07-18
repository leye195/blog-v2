import { ComponentProps } from 'react';

import Flex from '@/components/common/Flex';
import type { Project, ProjectCategory, ProjectDetailItem } from '@/data/projects';
import { cn } from '@/libs/utils';

const Anchor = ({ children, className, ...props }: ComponentProps<'a'>) => (
  <a className={cn('underline', className)} {...props}>
    {children}
  </a>
);

/** 사용 기술 스택을 연회색 테두리 칩으로 표시 */
export const StackTags = ({ stack }: { stack?: string[] }) => {
  if (!stack || stack.length === 0) {
    return null;
  }

  return (
    <div className="mt-[8px] flex flex-wrap gap-[6px]">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-gray-200 px-[10px] py-[2px] text-[12px] text-dgray-200 max-md:text-[11px]"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

const ItemLabel = ({ item }: { item: ProjectDetailItem }) =>
  item.href ? (
    <Anchor href={item.href} target="_blank">
      <b>{item.label}</b>
    </Anchor>
  ) : (
    <b>{item.label}</b>
  );

/** 단순 불릿 항목 (라벨 — 본문) */
const SimpleItem = ({ item }: { item: ProjectDetailItem }) => (
  <li className="mb-[4px]">
    {item.label ? (
      <>
        <ItemLabel item={item} />
        {item.text ? ' — ' : null}
      </>
    ) : null}
    {item.text}
  </li>
);

/** 케이스 스터디 항목 (라벨 + 리드 + 문제/시도/해결/결과 블록, 미니멀 타이포) */
const CaseStudyItem = ({ item }: { item: ProjectDetailItem }) => (
  <div className="w-full">
    {item.label ? (
      <div className="text-[16px] max-md:text-[15px]">
        <ItemLabel item={item} />
      </div>
    ) : null}
    {item.text ? (
      <p className="mt-[2px] text-[14px] leading-relaxed text-gray-600">{item.text}</p>
    ) : null}
    {item.blocks && item.blocks.length > 0 ? (
      <Flex className="mt-[8px] w-full" $direction="column" $gap="8px">
        {item.blocks.map((block) => (
          <div key={block.heading}>
            <span className="text-[14px] font-semibold text-dgray-200 max-md:text-[13px]">
              {block.heading}
            </span>
            <ul className="mt-[2px] list-disc pl-[18px] text-[14px] leading-relaxed text-gray-800">
              {block.points.map((point) => (
                <li key={point} className="mb-[2px]">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Flex>
    ) : null}
  </div>
);

const CategoryBody = ({ category }: { category: ProjectCategory }) => {
  const isCaseStudy = category.items.some((item) => (item.blocks?.length ?? 0) > 0);

  if (isCaseStudy) {
    return (
      <div className="w-full divide-y divide-gray-100">
        {category.items.map((item) => (
          <div key={item.label ?? item.text} className="py-[14px] first:pt-0 last:pb-0">
            <CaseStudyItem item={item} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="list-disc pl-[20px] leading-relaxed max-md:text-[14px]">
      {category.items.map((item) => (
        <SimpleItem key={item.label ?? item.text} item={item} />
      ))}
    </ul>
  );
};

/**
 * 프로젝트 본문(주요 과제 + 주요 역할 및 성과)을 렌더링한다.
 * 프로젝트 상세 페이지에서 사용한다.
 */
const ProjectSections = ({ project }: { project: Project }) => (
  <>
    {project.challenges && project.challenges.length > 0 ? (
      <Flex
        className="w-full rounded-xl border border-gray-200 p-[20px] max-md:p-[16px]"
        $direction="column"
        $gap="6px"
      >
        <h3 className="text-[20px] max-md:text-[17px]">
          <b>주요 과제 및 문제 인식</b>
        </h3>
        <ul className="list-disc pl-[20px] leading-relaxed max-md:text-[14px]">
          {project.challenges.map((item) => (
            <SimpleItem key={item.label ?? item.text} item={item} />
          ))}
        </ul>
      </Flex>
    ) : null}

    <Flex className="w-full" $direction="column" $gap="20px">
      <h3 className="text-[20px] max-md:text-[17px]">
        <b>주요 역할 및 성과</b>
      </h3>
      {project.categories.map((category) => (
        <Flex
          key={category.title}
          className="w-full rounded-xl border border-gray-200 p-[20px] max-md:p-[16px]"
          $direction="column"
          $gap="8px"
        >
          <h4 className="text-[18px] max-md:text-[16px]">
            <b>{category.title}</b>
          </h4>
          <CategoryBody category={category} />
        </Flex>
      ))}
    </Flex>
  </>
);

export default ProjectSections;
