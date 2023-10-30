import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import { NotionToMarkdown } from "notion-to-md";

type Block = {
  id: string;
  child_page: {
    [key: string]: string;
  };
  created_time: string;
};

const notionSecret = process.env.NOTION_SECRET;
const notionDatabase = process.env.NOTION_DATABASE;

export const notion = new Client({
  auth: notionSecret,
  notionVersion: "2022-06-28",
});
export const notionToMD = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: true,
  },
});

export const retrieveDatabase = async () => {
  if (!notionDatabase || !notionSecret) {
    throw new Error("Missing notion secret or DB ID");
  }

  const query = await notion.databases.query({
    database_id: notionDatabase,
    sorts: [
      {
        property: "date",
        direction: "descending",
      },
    ],
  });
  return query;
};

export const retrievePageContent = async (pageId: string) => {
  if (!notionSecret) throw new Error("Missing notion secret");

  const { child_page, created_time: createdTime } =
    (await notion.blocks.retrieve({
      block_id: pageId,
    })) as Block;
  const mdBlocks = await notionToMD.pageToMarkdown(pageId);
  const mdString = notionToMD.toMarkdownString(mdBlocks);

  return {
    title: child_page.title,
    content: mdString.parent,
    createdTime,
  };
};

const notionClient = new NotionAPI({});

export const getNotionPage = async (id: string) => {
  const data = await notionClient.getPage(id);
  return data;
};
