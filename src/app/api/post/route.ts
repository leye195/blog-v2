import { queryDatabase } from '@/libs/notion';
import type { RowType } from '@/types/notion';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) throw new Error('Missing notion secret or DB ID');

  const query = await queryDatabase();
  const rows = query.results.map((res) => {
    //@ts-ignore
    const { properties, url } = res;
    return {
      ...properties,
      id: res.id,
      tag: properties.tag.multi_select,
      url,
    };
  }) as RowType[];
  const reStructed = rows
    .map((row) => ({
      id: row.id,
      name: row.name.title.reduce((prev, cur) => `${prev}${cur.text.content}`, ''),
      tag: row.tag.map((tag) => ({
        id: tag.id,
        name: tag.name,
      })),
      date: row.date.date.start,
      url: row.url,
    }))
    .filter((post) => post.id == id);

  if (!reStructed) throw new Error('data not exist');

  return Response.json(reStructed[0]);
}
