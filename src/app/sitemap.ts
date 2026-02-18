import type { MetadataRoute } from 'next';
import { getPosts } from '@/apis';
import type { Post } from '@/types/notion';

const FALLBACK_BASE_URL = 'https://www.dantechblog.xyz';

const normalizeBaseUrl = (url: string): string => {
  return url.endsWith('/') ? url.slice(0, -1) : url;
};

const toSafeDate = (value: string): Date => {
  const parsedDate = new Date(value);
  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_BASE_URL ?? FALLBACK_BASE_URL);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/rss.xml`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.4,
    },
  ];

  try {
    const posts = await getPosts('all');
    const postRoutes: MetadataRoute.Sitemap = posts.map((post: Post) => ({
      url: `${baseUrl}/posts/${post.id}`,
      lastModified: toSafeDate(post.date),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    return [...staticRoutes, ...postRoutes];
  } catch {
    return staticRoutes;
  }
}
