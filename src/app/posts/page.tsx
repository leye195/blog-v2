import { type Metadata } from "next";
import { getPosts } from "@/apis";
import PostPage from "@/components/page/PostPage";

export const metadata: Metadata = {
  title: "Posts | Dan DevLog",
};

async function fetchNotionData() {
  const data = await getPosts("all");
  return data;
}

export default async function Posts() {
  const data = await fetchNotionData();
  return <PostPage data={data} />;
}
