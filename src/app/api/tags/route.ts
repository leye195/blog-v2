import { queryDatabase } from "@/libs/notion";
import type { Tag } from "@/types/notion";

export async function GET() {
  const query = await queryDatabase();

  const tags = (
    query.results.map((res) => {
      //@ts-ignore
      const { properties } = res;
      return properties.tag.multi_select.map(({ name }: Tag) => name);
    }) as string[]
  ).flat();

  return Response.json(Array.from(new Set(tags)));
}
