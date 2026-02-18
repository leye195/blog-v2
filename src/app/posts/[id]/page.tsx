import { getPageTitle } from 'notion-utils';

import JsonLd from '@/components/common/JsonLd';
import NotionPage from '@/components/page/PostDetailPage';
import { getNotionPage } from '@/libs/notion';
import { PageProps } from '@/types/page';

const getPageDescription = (recordMap: any) => {
  const blocks = Object.values(recordMap.block);
  const textContent = blocks
    .filter((block: any) => block.value?.type === 'text')
    .map((block: any) => block.value?.properties?.title?.map((t: any) => t[0]).join(''))
    .filter(Boolean)
    .join(' ');

  const description = textContent.length > 160 ? textContent.slice(0, 160) + '...' : textContent;
  return description || undefined;
};

export async function generateMetadata({ params }: PageProps) {
  const { id: pageId } = await params;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);
  const block = recordMap.block[pageId]?.value;
  const coverImage = block?.format?.page_cover;
  const description = getPageDescription(recordMap) || `${title} - Dan DevLog`;



  return {
    title: `${title}`,
    description,
    alternates: {
      canonical: `https://www.dantechblog.xyz/posts/${pageId}`,
    },
    openGraph: {
      title: `${title}`,
      description,
      url: `https://www.dantechblog.xyz/posts/${pageId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title}`,
      description,
    },
  };
}

export default async function Post({ params }: PageProps) {
  const { id: pageId } = await params;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);

  const block = recordMap.block[pageId]?.value;
  const createdTime = block?.created_time;
  const lastEditedTime = block?.last_edited_time;
  const coverImage = block?.format?.page_cover;
  const description = getPageDescription(recordMap) || `${title} - Dan DevLog`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: coverImage ? [coverImage] : [],
    datePublished: createdTime ? new Date(createdTime).toISOString() : undefined,
    dateModified: lastEditedTime ? new Date(lastEditedTime).toISOString() : undefined,
    author: [
      {
        '@type': 'Person',
        name: 'DanYJ',
        url: 'https://www.dantechblog.xyz',
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <NotionPage title={title} recordMap={recordMap} rootPageId={pageId} previewImagesEnabled />
    </>
  );
}
