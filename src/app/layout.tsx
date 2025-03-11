import { Suspense } from 'react';
import type { Metadata } from 'next';

import AppProvider from '@/components/AppProvider';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Layout from '@/components/layout';
import NProgressBar from '@/components/NProgressBar';

import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'nprogress/nprogress.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dantechblog.xyz'),
  title: {
    default: 'Dan DevLog',
    template: '%s | Dan DevLog',
  },
  description: 'Blog posted about development',
  openGraph: {
    title: {
      default: 'Dan DevLog',
      template: '%s | Dan DevLog',
    },
    url: 'https://www.dantechblog.xyz/',
    siteName: 'Dan DevLog',
    type: 'website',
    images: [
      {
        url: 'https://www.dantechblog.xyz/assets/pageImage.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="Dan DevLog Feed RSS"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="naver-site-verification" content="7a776dd7427332ce7d4ad3c3128f30cf9064ae22" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5515333974833420"
          crossOrigin="anonymous"
        ></script>
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
