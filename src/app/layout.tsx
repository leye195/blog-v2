import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <AppProvider>
          <NProgressBar />
          <Layout>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  );
}
