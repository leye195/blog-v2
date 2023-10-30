import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveDatabase } from "@/libs/notion";
import type { Tag } from "@/types/notion";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const query = await retrieveDatabase();

  const tags = (
    query.results.map((res) => {
      //@ts-ignore
      const { properties } = res;
      return properties.tag.multi_select.map(({ name }: Tag) => name);
    }) as string[]
  ).flat();

  res.status(200).json(Array.from(new Set(tags)));
}
