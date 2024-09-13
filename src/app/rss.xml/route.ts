import Rss from "rss";
import { getPosts } from "@/apis";
import type { Post } from "@/types/notion";

const baseURL = "https://www.dantechblog.xyz";

const generateRssFeed = async () => {
  try {
    const posts = await getPosts("all");
    const feed = new Rss({
      title: "Dan DevLog",
      description: "Dan DevLog",
      site_url: baseURL,
      feed_url: `${baseURL}rss.xml`,
    });

    const parsedPosts = posts.map(async (post: Post) => {
      return {
        title: post.name,
        url: `${baseURL}/posts/${post.id}`,
        date: post.date,
        description: "",
      };
    });

    parsedPosts.forEach(({ title, description, url, date }: any) => {
      feed.item({
        title,
        description,
        url,
        date,
      });
    });

    return feed.xml({
      indent: true,
    });
  } catch (error) {
    // Handle error appropriately (e.g., log, return an error message, etc.)
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
