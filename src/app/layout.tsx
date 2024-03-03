import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import AppProvider from "@/components/AppProvider";
import Layout from "@/components/layout";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NProgressBar from "@/components/NProgressBar";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "nprogress/nprogress.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dantechblog.xyz"),
  title: {
    default: "Dan DevLog",
    template: "%s | Dan DevLog",
  },
  description: "Blog posted about development",
  openGraph: {
    title: {
      default: "Dan DevLog",
      template: "%s | Dan DevLog",
    },
    url: "https://www.dantechblog.xyz/",
    siteName: "Dan DevLog",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <meta
          name="naver-site-verification"
          content="7a776dd7427332ce7d4ad3c3128f30cf9064ae22"
        />
      </head>
      <body className={inter.className}>
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
