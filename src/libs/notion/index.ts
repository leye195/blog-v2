import { Client } from '@notionhq/client';
import { NotionAPI } from 'notion-client';
import { NotionToMarkdown } from 'notion-to-md';

const notionSecret = process.env.NOTION_SECRET;
const notionDatabase = process.env.NOTION_DATABASE;

export const notion = new Client({
  auth: notionSecret,
  notionVersion: '2022-06-28',
});
export const notionToMD = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: true,
  },
});

export const queryDatabase = async () => {
  if (!notionDatabase || !notionSecret) {
    throw new Error('Missing notion secret or DB ID');
  }

  const query = await notion.databases.query({
    database_id: notionDatabase,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  });

  return query;
};

// notion-client 7.12.0부터 기본 User-Agent를 보내고 기본 도메인이 app.notion.com으로
// 바뀌었다. 그 전에는 UA 없는 요청을 Cloudflare가 403으로 막았다.
// 참고: https://github.com/NotionX/react-notion-x/issues/710
const notionClient = new NotionAPI({});

export const getNotionPage = async (id: string) => {
  const data = await notionClient.getPage(id);
  return data;
};
