import Rss from "rss";
import { getPosts } from "@/apis";
import { getNotionPage } from "@/libs/notion";
import { getPageDescription, getPostCoverImage } from "@/libs/utils";
import type { Post } from "@/types/notion";

export const revalidate = 3600;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.dantechblog.xyz";

const generateRssFeed = async () => {
  try {
    const posts = await getPosts("all", 20);
    const feed = new Rss({
      title: "Dan DevLog",
      description: "Dan DevLog - 기술 블로그",
      site_url: baseURL,
      feed_url: `${baseURL}/rss.xml`,
      language: "ko",
      pubDate: new Date(),
      copyright: `All rights reserved ${new Date().getFullYear()}, DanYJ`,
    });

    const parsedPosts = await Promise.all(
      posts.map(async (post: Post) => {
        try {
          const recordMap = await getNotionPage(post.id);
          const description = getPageDescription(recordMap) || "";
          const coverImage = getPostCoverImage(recordMap, post.id);

          return {
            title: post.name,
            url: `${baseURL}/posts/${post.id}`,
            date: post.date,
            description,
            categories: post.tag.map((tag) => tag.name),
            author: "DanYJ",
            enclosure: coverImage ? { url: coverImage } : undefined,
          };
        } catch (error) {
          console.error(`Error fetching recordMap for post ${post.id}:`, error);
          return {
            title: post.name,
            url: `${baseURL}/posts/${post.id}`,
            date: post.date,
            description: "",
            categories: post.tag.map((tag) => tag.name),
            author: "DanYJ",
          };
        }
      })
    );

    parsedPosts.forEach((item) => {
      feed.item(item);
    });

    return feed.xml({
      indent: true,
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return null;
  }
};

export async function GET() {
  const feedXml = await generateRssFeed();

  if (feedXml) {
    return new Response(feedXml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } else {
    return new Response("Error generating RSS feed.", { status: 500 });
  }
}
