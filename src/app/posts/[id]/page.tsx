import { Block } from 'notion-types';
import { getPageTitle } from 'notion-utils';

import JsonLd from '@/components/common/JsonLd';
import NotionPage from '@/components/page/PostDetailPage';
import { getNotionPage } from '@/libs/notion';
import { getBaseUrl } from '@/libs/url';
import { getPageDescription, getPostCoverImage } from '@/libs/utils';
import { PageProps } from '@/types/page';

const baseUrl = getBaseUrl();
const siteImage = `${baseUrl}/assets/pageImage.png`;

export async function generateMetadata({ params }: PageProps) {
  const { id: pageId } = await params;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);
  const description = getPageDescription(recordMap) || `${title} - Dan DevLog`;
  const canonical = `/posts/${pageId}`;

  return {
    title: `${title}`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title}`,
      description,
      url: `${baseUrl}${canonical}`,
      siteName: 'Dan DevLog',
      type: 'article',
      locale: 'ko_KR',
      images: [siteImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title}`,
      description,
      images: [siteImage],
    },
  };
}

export default async function Post({ params }: PageProps) {
  const { id: pageId } = await params;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);

  const block = recordMap.block[pageId]?.value as Block;
  const createdTime = block.created_time;
  const lastEditedTime = block.last_edited_time;
  const coverImage = getPostCoverImage(recordMap, pageId);
  const description = getPageDescription(recordMap) || `${title} - Dan DevLog`;
  const postUrl = `${baseUrl}/posts/${pageId}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: coverImage ? [coverImage] : [siteImage],
    datePublished: createdTime ? new Date(createdTime).toISOString() : undefined,
    dateModified: lastEditedTime ? new Date(lastEditedTime).toISOString() : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    author: [
      {
        '@type': 'Person',
        name: 'DanYJ',
        url: baseUrl,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Dan DevLog',
      logo: {
        '@type': 'ImageObject',
        url: siteImage,
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Posts', item: `${baseUrl}/posts` },
      { '@type': 'ListItem', position: 3, name: title, item: postUrl },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <NotionPage title={title ?? ''} recordMap={recordMap} rootPageId={pageId} previewImagesEnabled />
    </>
  );
}
