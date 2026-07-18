import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProjectDetailPage from '@/components/page/ProjectDetailPage';
import { getProject, projects } from '@/data/projects';
import { PageProps } from '@/types/page';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  const title = `${project.company} - Projects`;
  const description = `${project.company}에서 진행한 프로젝트 상세 — 담당 역할과 기술 스택, 성과를 정리했습니다.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/resume/projects/${slug}`,
    },
  };
}

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
