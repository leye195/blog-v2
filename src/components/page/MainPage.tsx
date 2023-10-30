"use client";

import Link from "next/link";
import Image from "next/image";

import { type notionDBRowStructed as Post } from "@/types/notion";
import { type Data } from "@/types/page";
import Flex from "@/components/common/Flex";
import PostCard from "@/components/common/PostCard";
import SectionWithLabel from "@/components/common/SectionWithLabel";
import Avatar from "@/components/common/Avatar";

const MainPage = ({ data }: Data<Post[]>) => {
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
          blurDataURL="/assets/bg.jpg"
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
        <Flex className="w-[inherit]" $direction="column" $gap="12px">
          {data.map(({ id, name, date, tag, url }) => (
            <Link
              className="transition duration-500 border-2 rounded-xl w-[inherit] hover:border-blue-200 "
              key={id}
              href={`/posts/${id}`}
            >
              <PostCard id={id} name={name} date={date} tag={tag} url={url} />
            </Link>
          ))}
        </Flex>
      </SectionWithLabel>
    </Flex>
  );
};

export default MainPage;
