import { type Metadata } from 'next';
import ResumePage from '@/components/page/ResumePage';

export const metadata: Metadata = {
  title: 'Resume',
  description: '프론트엔드 개발자 DanYJ의 경력, 프로젝트, 기술 스택을 정리한 이력서입니다.',
  alternates: {
    canonical: '/resume',
  },
};

export default async function Resume() {
  return <ResumePage />;
}
