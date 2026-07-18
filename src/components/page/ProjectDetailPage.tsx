import { ComponentProps } from 'react';
import Link from 'next/link';

import Flex from '@/components/common/Flex';
import ProjectSections, { StackTags } from '@/components/page/ProjectSections';
import type { Project } from '@/data/projects';
import { cn } from '@/libs/utils';

const Anchor = ({ children, className, ...props }: ComponentProps<'a'>) => (
  <a className={cn('underline', className)} {...props}>
    {children}
  </a>
);

type Props = {
  project: Project;
};

const ProjectDetailPage = ({ project }: Props) => {
  return (
    <Flex className="mx-auto w-full max-w-[1000px] p-4" $direction="column" $gap="16px">
      <Link href="/resume" className="text-[14px] text-blue-500 underline">
        ← 이력서로 돌아가기
      </Link>

      <Flex $direction="column" $gap="4px">
        <h1 className="mt-0 mb-[4px] text-[32px] max-md:text-[26px]">
          <b>
            {project.companyUrl ? (
              <Anchor href={project.companyUrl} target="_blank">
                {project.company}
              </Anchor>
            ) : (
              project.company
            )}
          </b>
        </h1>
        <div className="text-[14px] text-gray-500">
          {project.team ? `${project.team} · ` : ''}
          {project.period}
        </div>
        <StackTags stack={project.stack} />
        {project.intro ? <p className="mt-[8px] max-md:text-[14px]">{project.intro}</p> : null}
      </Flex>

      <ProjectSections project={project} />
    </Flex>
  );
};

export default ProjectDetailPage;
