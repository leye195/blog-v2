import axios from "axios";

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTags = () => api.get("/api/tags");

export const getPost = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post?id=${id}`
  );
  const data = await res.json();
  return data;
};

export const getPosts = async (category: string, count?: number) => {
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
