import Link from "next/link";
import Image from "next/image";

import Avatar from "@/components/common/Avatar";
import Flex from "@/components/common/Flex";
import SectionWithLabel from "@/components/common/SectionWithLabel";
import PostList from "@/components/posts/PostList";

const MainPage = () => {
  return (
    <Flex $direction="column" $gap="64px">
      <Flex
        className="md:h-[420px] h-[240px] w-full p-[20px] relative"
        $alignItems="flex-end"
        $justifyContent="center"
      >
        <Image
          className="md:h-[420px] h-[240px] w-full z-[-1]"
          src="/assets/bg.jpg"
          alt=""
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8c+hMPQAHlwLbS5qbuQAAAABJRU5ErkJggg=="
          fill
          priority
        />
        <Avatar
          className="md:w-[200px] md:h-[200px] w-[120px] h-[120px]  translate-y-[64px] border-spacing-4 border-2 border-gray-300"
          size={200}
          src="/assets/avatar.gif"
          priority
        />
      </Flex>
      <SectionWithLabel
        className="w-full px-[1rem]"
        title={
          <Flex className="w-full" $justifyContent="space-between">
            <h3 className="md:text-2xl text-xl font-bold mb-[8px]">
              Recent Posts
            </h3>
            <Link className="md:text-xl text-lg hover:underline" href="/posts">
              더보기
            </Link>
          </Flex>
        }
      >
        <PostList count={5} />
      </SectionWithLabel>
    </Flex>
  );
};

export default MainPage;
