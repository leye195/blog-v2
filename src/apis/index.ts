import type { Post } from "@/types/notion";

export const getTags = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tags`);
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getPost = async (id: string): Promise<Post> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post?id=${id}`
  );
  const data = await res.json();
  return data;
};

export const getPosts = async (
  category: string,
  count?: number
): Promise<Post[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?category=${category}${
      count != null ? `&count=${count}` : ``
    }`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = await res.json();
  return data;
};
