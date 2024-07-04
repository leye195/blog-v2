import { type Metadata } from "next";
import { getPosts, getTags } from "@/apis";
import PostPage from "@/components/page/PostPage";

export const metadata: Metadata = {
  title: "Posts",
  alternates: {
    canonical: "https://www.dantechblog.xyz/posts",
  },
  openGraph: {
    title: "Posts",
  },
};

async function fetchNotionData() {
  try {
    const data = await getPosts("all");
    const tags = await getTags();

    return { data, tags };
  } catch (error) {
    return { data: [], tags: [] };
  }
}

export default async function Posts() {
  const { data, tags } = await fetchNotionData();
  return <PostPage data={data} tagsData={tags} />;
}
