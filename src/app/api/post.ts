import { retrievePageContent } from "@/libs/notion";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id) throw new Error("Missing notion secret or DB ID");

  const pageData = await retrievePageContent(id as string);
  res.status(200).json(pageData);
}
