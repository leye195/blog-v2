import Link from 'next/link';

import Flex from '@/components/common/Flex';
import SectionWithLabel from '@/components/common/SectionWithLabel';
import MainAside from '@/components/MainAside';
import { cn } from '@/libs/utils';
import Hero from './Hero';
import Posts from '../posts/Posts/Server';

const MainPage = () => {
  return (
    <Flex $direction="column" $gap="64px">
      <Hero />
      <div className="flex w-full gap-[48px] items-start justify-center mx-auto py-8">
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
