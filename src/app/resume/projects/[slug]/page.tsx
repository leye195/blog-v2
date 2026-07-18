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

  return {
    title,
    alternates: {
      canonical: `https://www.dantechblog.xyz/resume/projects/${slug}`,
    },
    openGraph: {
      title,
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
