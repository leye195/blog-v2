import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dan DevLog',
    short_name: 'Dan DevLog',
    description: '프론트엔드·웹 개발 경험과 학습 기록을 정리하는 Dan DevLog입니다.',
    lang: 'ko',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#E8713F',
  };
}
