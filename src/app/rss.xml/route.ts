import Rss from "rss";
import NotionPageToHtml from "notion-page-to-html";
import { notionDBRowStructed as Post } from "@/types/notion";
import { getPosts } from "@/apis";

const generateRssFeed = async () => {
  try {
    const posts = await getPosts("all");
    const feed = new Rss({
      title: "Dan DevLog",
      description: "Dan DevLog",
      site_url: `${process.env.NEXT_PUBLIC_URL}`,
      feed_url: `${process.env.NEXT_PUBLIC_URL}rss.xml`,
    });

    const parsedPosts = await Promise.all(
      posts.map(async (post: Post) => {
        const { html } = await NotionPageToHtml.convert(post.url, {
          bodyContentOnly: true,
        });

        return {
          title: post.name,
          description: html,
          url: `${process.env.NEXT_PUBLIC_URL}/posts/${post.id}`,
          date: post.date,
        };
      })
    );

    parsedPosts.forEach(({ title, description, url, date }: any) => {
      feed.item({
        title,
        description: `${description?.slice(0, 120)}...`,
        url,
        date,
      });
    });

    return feed.xml();
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
