import ky from 'ky';
import type { Post } from '@/types/notion';

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getTags = async () => {
  try {
    const data: string[] = await api.get('api/tags').json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getPost = async (id: string): Promise<Post> => {
  const data: Post = await api.get(`api/post?id=${id}`).json();
  return data;
};

export const getPosts = async (category: string, count?: number): Promise<Post[]> => {
  const data: Post[] = await api
    .get(`api/posts?category=${category}${count != null ? `&count=${count}` : ``}`, {
      next: {
        revalidate: 10,
      },
    })
    .json();

  return data;
};
