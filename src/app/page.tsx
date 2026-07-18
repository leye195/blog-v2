import { type Metadata } from 'next';
import MainPage from '@/components/page/MainPage';

export const metadata: Metadata = {
  title: 'Home | Dan DevLog',
  description: 'Dan DevLog 홈 — 최근 개발 포스트와 카테고리, 프로필을 한눈에 볼 수 있습니다.',
  alternates: {
    canonical: '/',
  },
};

export default async function Home() {
  return <MainPage />;
}
