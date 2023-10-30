import { retrievePageContent } from "@/libs/notion";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) throw new Error("Missing notion secret or DB ID");

  const pageData = await retrievePageContent(id as string);
  return Response.json(pageData);
}
