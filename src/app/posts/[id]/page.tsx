import type { Metadata } from "next";
import { getPageTitle } from "notion-utils";
import { getNotionPage } from "@/libs/notion";
import type { PageProps } from "@/types/page";
import NotionPage from "@/components/page/PostDetailPage";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const pageId = params.id;
  const recordMap = await getNotionPage(pageId);
  const title = getPageTitle(recordMap);
  return {
    title: `${title}`,
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
    <NotionPage
      title={title}
      recordMap={recordMap}
      rootPageId={pageId}
      previewImagesEnabled
    />
  );
}
