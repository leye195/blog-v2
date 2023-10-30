import ResumePage from "@/components/page/ResumePage";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Dan DevLog",
};

export default async function Resume() {
  return <ResumePage />;
}
