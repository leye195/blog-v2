import * as React from 'react';
import { type ExtendedRecordMap } from 'notion-types';
import Flex from '@/components/common/Flex';
import Giscus from '@/components/Giscus';
import PostRenderer from '@/components/posts/PostRenderer';

type Props = {
  title?: string;
  recordMap: ExtendedRecordMap;
  previewImagesEnabled?: boolean;
  disableHeader?: boolean;
  rootPageId?: string;
  rootDomain?: string;
};

const NotionPage = ({
  title,
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
  disableHeader = true,
}: Props) => {
  return (
    <Flex className="mx-auto max-w-[1000px] p-4" $alignItems="center" $direction="column" $gap={12}>
      {title && (
        <h1 className="mb-0 text-[28px] max-sm:text-[22px]">
          <b>{title}</b>
        </h1>
      )}
      <PostRenderer
        recordMap={recordMap}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        previewImagesEnabled={previewImagesEnabled}
        disableHeader={disableHeader}
      />
      <Giscus />
    </Flex>
  );
};

export default NotionPage;
