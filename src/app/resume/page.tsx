import { type Metadata } from 'next';
import ResumePage from '@/components/page/ResumePage';

export const metadata: Metadata = {
  title: 'Resume',
  alternates: {
    canonical: 'https://www.dantechblog.xyz/resume',
  },
  openGraph: {
    title: 'Resume',
  },
};

export default async function Resume() {
  return <ResumePage />;
}
