import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import { NotionToMarkdown } from "notion-to-md";

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

const notionClient = new NotionAPI({});

export const getNotionPage = async (id: string) => {
  const data = await notionClient.getPage(id);
  return data;
};
