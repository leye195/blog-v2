import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: ['https://www.dantechblog.xyz/sitemap.xml', 'https://dantechblog.xyz/sitemap.xml'],
  };
}
