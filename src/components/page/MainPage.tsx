import Link from 'next/link';

import Avatar from '@/components/common/Avatar';
import Flex from '@/components/common/Flex';
import SectionWithLabel from '@/components/common/SectionWithLabel';
import MainAside from '@/components/MainAside';
import { cn, generateImageUrl } from '@/libs/utils';
import Posts from '../posts/Posts/Server';

const MainPage = () => {
  return (
    <Flex $direction="column" $gap="64px">
      <div className={cn("relative hidden h-60 w-full items-end justify-center p-5 md:h-96", 'md:flex')}>
        <picture className="absolute inset-0 text-transparent">
          <source
            srcSet={generateImageUrl({
              fileName: 'blog-bg',
              format: 'webp',
              option: 'q_60,c_fill',
            })}
            type="image/webp"
          />
          <img
            className="-z-10 h-full w-full object-cover"
            src={generateImageUrl({
              fileName: 'blog-bg',
              format: 'jpg',
              option: 'q_60,c_fill',
            })}
            alt="Background"
          />
        </picture>

        <Avatar
          className="h-32 w-32 translate-y-16 rounded-full border-4 border-white shadow-lg md:h-48 md:w-48"
          size={200}
          src="/assets/avatar.gif"
          priority
        />
      </div>
      <div className="flex w-full gap-[48px] items-start justify-center max-w-[1200px] mx-auto py-8">
        <SectionWithLabel
          className="flex-1 min-w-0 py-0"
          title={
            <Flex className="w-full mb-4" $justifyContent="space-between">
              <h3 className={cn("mb-2 text-xl font-bold md:text-2xl", 'border-l-6 border-black pl-2')}>Recent Posts</h3>
              <Link className="text-md hover:underline md:text-xl" href="/posts">
                더보기
              </Link>
            </Flex>
          }
        >
          <Posts count={10} dataFromServerSide />
        </SectionWithLabel>
        <MainAside />
      </div>
    </Flex>
  );
};

export default MainPage;
