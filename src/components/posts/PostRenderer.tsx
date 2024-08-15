"use client";

import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ExtendedRecordMap } from "notion-types";

const Code = dynamic(
  () => import("react-notion-x/build/third-party/code").then((m) => m.Code),
  { ssr: false }
);
const Collection = dynamic(
  () =>
    import("react-notion-x/build/third-party/collection").then(
      (m) => m.Collection
    ),
  {
    ssr: false,
  }
);

type Props = {
  recordMap: ExtendedRecordMap;
  previewImagesEnabled?: boolean;
  disableHeader?: boolean;
  rootPageId?: string;
  rootDomain?: string;
};

export default function PostRenderer({
  recordMap,
  rootDomain,
  rootPageId,
  previewImagesEnabled,
  disableHeader,
}: Props) {
  return (
    <NotionRenderer
      className="p-0"
      recordMap={recordMap}
      darkMode={false}
      rootDomain={rootDomain}
      rootPageId={rootPageId}
      previewImages={previewImagesEnabled}
      components={{
        Collection,
        Code,
        nextImage: Image,
      }}
      disableHeader={disableHeader}
      isImageZoomable
    />
  );
}
