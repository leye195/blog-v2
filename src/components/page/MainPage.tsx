import Link from 'next/link';

import Avatar from '@/components/common/Avatar';
import Flex from '@/components/common/Flex';
import SectionWithLabel from '@/components/common/SectionWithLabel';
import PostList from '@/components/posts/PostList';
import { generateImageUrl } from '@/libs/utils';

const MainPage = () => {
  return (
    <Flex $direction="column" $gap="64px">
      <Flex
        className="relative h-[240px] w-full p-5 md:h-[420px]"
        $alignItems="flex-end"
        $justifyContent="center"
      >
        <picture
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent',
          }}
        >
          <source
            srcSet={generateImageUrl({
              fileName: 'blog-bg',
              format: 'webp',
              option: 'q_60,c_fill',
            })}
            type="image/webp"
          />
          <img
            className="z-[-1] h-[240px] w-full md:h-[420px]"
            src={generateImageUrl({
              fileName: 'blog-bg',
              format: 'jpg',
              option: 'q_60,c_fill',
            })}
            alt=""
          />
        </picture>

        <Avatar
          className="h-[120px] w-[120px] border-spacing-4 translate-y-16 border-2 border-gray-300 md:h-[200px] md:w-[200px]"
          size={200}
          src="/assets/avatar.gif"
          priority
        />
      </Flex>
      <SectionWithLabel
        className="w-full px-4"
        title={
          <Flex className="w-full" $justifyContent="space-between">
            <h3 className="mb-2 text-xl font-bold md:text-2xl">Recent Posts</h3>
            <Link className="text-lg hover:underline md:text-xl" href="/posts">
              더보기
            </Link>
          </Flex>
        }
      >
        <PostList count={10} />
      </SectionWithLabel>
    </Flex>
  );
};

export default MainPage;
