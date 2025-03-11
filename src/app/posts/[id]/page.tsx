import type { Metadata } from 'next';
import { getPageTitle } from 'notion-utils';

import NotionPage from '@/components/page/PostDetailPage';
import { getNotionPage } from '@/libs/notion';
import type { PageProps } from '@/types/page';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageId = params.id;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);
  return {
    title: `${title}`,
    alternates: {
      canonical: `https://www.dantechblog.xyz/posts/${pageId}`,
    },
    openGraph: {
      title: `${title}`,
    },
  };
}

export default async function Post({ params: { id } }: PageProps) {
  const pageId = id;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);

  return (
    <NotionPage title={title} recordMap={recordMap} rootPageId={pageId} previewImagesEnabled />
  );
}
