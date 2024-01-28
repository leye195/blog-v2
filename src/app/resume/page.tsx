import ResumePage from "@/components/page/ResumePage";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  alternates: {
    canonical: "https://www.dantechblog.xyz/resume",
  },
  openGraph: {
    title: "Resume",
  },
};

export default async function Resume() {
  return <ResumePage />;
}
