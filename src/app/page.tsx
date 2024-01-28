import { type Metadata } from "next";
import MainPage from "@/components/page/MainPage";

export const metadata: Metadata = {
  title: "Home | Dan DevLog",
  alternates: {
    canonical: "https://www.dantechblog.xyz/",
  },
  openGraph: {
    title: "Home | Dan DevLog",
  },
};

export default async function Home() {
  return <MainPage />;
}
