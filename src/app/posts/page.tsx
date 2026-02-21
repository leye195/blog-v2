import { type Metadata } from 'next';
import { getPosts, getTags } from '@/apis';
import PostPage from '@/components/page/PostPage';

export const metadata: Metadata = {
  title: 'Posts',
  alternates: {
    canonical: 'https://www.dantechblog.xyz/posts',
  },
  openGraph: {
    title: 'Posts',
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
