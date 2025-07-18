import { getPosts } from '@/apis';
import type { Post } from '@/types/notion';

export default async function sitemap() {
  const baseUrl = 'https://www.dantechblog.xyz';
  const posts = await getPosts('all');
  const postSitemaps = posts.map((post: Post) => {
    return {
      url: `${baseUrl}/posts/${post.id}`,
      lastModified: new Date(post.date),
      priority: 0.7,
      changeFrequency: 'weekly',
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: 'monthly',
    },
    ...postSitemaps,
  ];
}
