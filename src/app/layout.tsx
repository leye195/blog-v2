import { Suspense } from 'react';
import type { Metadata } from 'next';

import AppProvider from '@/components/AppProvider';
import JsonLd from '@/components/common/JsonLd';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Layout from '@/components/layout';
import NProgressBar from '@/components/NProgressBar';
import { getBaseUrl } from '@/libs/url';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'nprogress/nprogress.css';
import '@/styles/globals.css';

const baseUrl = getBaseUrl();
const siteDescription = '프론트엔드·웹 개발 경험과 학습 기록을 정리하는 Dan DevLog입니다.';
const ogImage = `${baseUrl}/assets/pageImage.png`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Dan DevLog',
    template: '%s | Dan DevLog',
  },
  description: siteDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: {
      default: 'Dan DevLog',
      template: '%s | Dan DevLog',
    },
    description: siteDescription,
    url: baseUrl,
    siteName: 'Dan DevLog',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Dan DevLog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Dan DevLog',
      template: '%s | Dan DevLog',
    },
    description: siteDescription,
    images: [ogImage],
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dan DevLog',
  url: baseUrl,
  description: siteDescription,
  inLanguage: 'ko-KR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="Dan DevLog Feed RSS"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="naver-site-verification" content="7a776dd7427332ce7d4ad3c3128f30cf9064ae22" />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body>
        <GoogleAnalytics />
        <AppProvider>
          <Suspense fallback={<></>}>
            <NProgressBar />
          </Suspense>
          <Layout>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  );
}
