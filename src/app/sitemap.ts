import { getPosts } from "@/apis";
import type { notionDBRowStructed as Post } from "@/types/notion";
export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const posts = await getPosts("all");
  const postSitemaps = posts.map((post: Post) => {
    return {
      url: `${baseUrl}/posts/${post.id}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
    },
    ...postSitemaps,
  ];
}
