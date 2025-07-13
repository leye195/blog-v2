import { getPageTitle } from 'notion-utils';

import NotionPage from '@/components/page/PostDetailPage';
import { getNotionPage } from '@/libs/notion';
import { PageProps } from '@/types/page';

export async function generateMetadata({ params }: PageProps) {
  const { id: pageId } = await params;
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

export default async function Post({ params }: PageProps) {
  const { id: pageId } = await params;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);

  return (
    <NotionPage title={title} recordMap={recordMap} rootPageId={pageId} previewImagesEnabled />
  );
}
