import Rss from "rss";
import NotionPageToHtml from "notion-page-to-html";
import removeMarkdown from "markdown-to-text";
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

    const parsedPosts = await Promise.all(
      posts.map(async (post: Post) => {
        const { html } = await NotionPageToHtml.convert(post.url, {
          bodyContentOnly: true,
        });
        const description = removeMarkdown(html);

        return {
          title: post.name,
          url: `${baseURL}/posts/${post.id}`,
          date: post.date,
          description,
          content: html,
        };
      })
    );

    parsedPosts.forEach(({ title, description, url, date }: any) => {
      feed.item({
        title,
        description: `${description?.slice(0, 100)}...`,
        url,
        date,
        custom_elements: [
          {
            "content:encoded": description,
          },
        ],
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
