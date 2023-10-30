import { retrieveDatabase } from "@/libs/notion";
import type { NextApiRequest, NextApiResponse } from "next";

type Row = {
  id: string;
  name: {
    id: string;
    title: [
      {
        text: { content: string };
      }
    ];
  };
  tag: {
    id: string;
    name: string;
  }[];
  date: {
    id: string;
    date: {
      start: string;
    };
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { count, category = "all" } = req.query;
  const query = await retrieveDatabase();

  const rows = query.results.map((res) => {
    //@ts-ignore
    const { properties } = res;
    return {
      ...properties,
      id: res.id,
      tag: properties.tag.multi_select,
    };
  }) as Row[];
  const reStructed = rows.map((row) => ({
    id: row.id,
    name: row.name.title.reduce(
      (prev, cur) => `${prev}${cur.text.content}`,
      ""
    ),
    tag: row.tag.map((tag) => ({
      id: tag.id,
      name: tag.name,
    })),
    date: row.date.date.start,
  }));

  if (category && typeof category === "string" && category !== "all") {
    res.status(200).json(
      reStructed.filter(({ tag }) => {
        return tag.map(({ name }) => name).includes(category);
      })
    );
  }

  res.status(200).json(reStructed.slice(0, count != null ? +count : undefined));
}
