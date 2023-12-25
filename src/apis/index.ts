import axios from "axios";
import type { Post } from "@/types/notion";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTags = (): Promise<string[]> => api.get("/api/tags");

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
