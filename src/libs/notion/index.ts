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

// notion.so는 Cloudflare 뒤에 있고, User-Agent 없는 요청은 403 HTML 챌린지로 막힌다.
// notion-client(비공식 API)는 accept/content-type만 보내므로 직접 넣어준다.
const NOTION_USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const notionClient = new NotionAPI({
  ofetchOptions: {
    headers: {
      'user-agent': NOTION_USER_AGENT,
    },
  },
});

export const getNotionPage = async (id: string) => {
  const data = await notionClient.getPage(id);
  return data;
};
