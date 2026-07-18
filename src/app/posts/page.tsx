import { type Metadata } from 'next';
import { getPosts, getTags } from '@/apis';
import PostPage from '@/components/page/PostPage';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Dan DevLog의 전체 개발 포스트 목록입니다. 카테고리별로 글을 살펴보세요.',
  alternates: {
    canonical: '/posts',
  },
};

async function fetchNotionData() {
  try {
    const data = await getPosts('all');
    return { data };
  } catch (error) {
    return { data: [] };
  }
}

export default async function Posts({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const { data } = await fetchNotionData();
  return <PostPage data={data} initialCategory={category} />;
}
