import Link from "next/link";

import Avatar from "@/components/common/Avatar";
import Flex from "@/components/common/Flex";
import SectionWithLabel from "@/components/common/SectionWithLabel";
import PostList from "@/components/posts/PostList";
import { generateImageUrl } from "@/libs/utils";

const MainPage = () => {
  return (
    <Flex $direction="column" $gap="64px">
      <Flex
        className="md:h-[420px] h-[240px] w-full p-[20px] relative"
        $alignItems="flex-end"
        $justifyContent="center"
      >
        <picture
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: "transparent",
          }}
        >
          <source
            srcSet={generateImageUrl({
              fileName: "blog-bg",
              format: "webp",
              option: "q_60,c_fill",
            })}
            type="image/webp"
          />
          <img
            className="md:h-[420px] h-[240px] w-full z-[-1]"
            src={generateImageUrl({
              fileName: "blog-bg",
              format: "jpg",
              option: "q_60,c_fill",
            })}
            alt=""
          />
        </picture>

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
