"use client";

import { useState } from "react";
import Link from "next/link";
import { useAnimate } from "framer-motion";

import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import useFetchTags from "@/hooks/useFetchTags";
import useMounted from "@/hooks/useMounted";
import useScrollValue from "@/hooks/useScrollValue";
import { classnames, getPostsByCategory } from "@/libs/utils";
import { paletteColor } from "@/styles/variable";
import type { Post } from "@/types/notion";
import type { Data } from "@/types/page";

import { ArrowUp } from "@/components/icon";
import Flex from "@/components/common/Flex";
import PostCard from "@/components/common/PostCard";
import Tag from "@/components/common/Tag";
import Button from "@/components/common/Button";
import FloatingButton from "@/components/common/FloatingButton";

const PostPage = ({ data }: Data<Post[]>) => {
  const [posts, setPosts] = useState(data);
  const [category, setCategory] = useState("all");

  const isMounted = useMounted();
  const [scope, animate] = useAnimate();
  const { data: tags } = useFetchTags();
  const { y } = useScrollValue();

  const handleClickTag = (name: string) => () => {
    const animateTemplate = {
      opacity: [0, 1],
      y: [5, 0],
    };

    setCategory(name);
    animate("h1", animateTemplate, {
      duration: 0.5,
    });
    animate(".posts", animateTemplate, {
      duration: 0.5,
    });
  };

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useIsomorphicLayoutEffect(() => {
    setPosts(getPostsByCategory(data, category));
  }, [category, data]);

  if (!isMounted || !tags) return <></>;

  return (
    <Flex
      ref={scope}
      className="w-full p-[1rem] mt-[48px]"
      $direction="column"
      $alignItems="center"
    >
      <h1 className={classnames("text-[42px]", "flex")}>
        <b className="text-center">{category.toUpperCase()}</b>
        <span className="text-base text-slate-600">({posts.length})</span>
      </h1>
      <Flex className="w-[inherit]" $direction="column" $gap="12px">
        <Flex
          className="my-[10px] pb-[16px] w-[inherit]"
          $gap="8px"
          $justifyContent="center"
          $flexWrap="wrap"
        >
          <Button padding="0" onClick={handleClickTag("all")}>
            <Tag name="All" type="outline" size="lg" color="white" />
          </Button>
          {tags?.map((tag: string) => (
            <Button key={tag} padding="0" onClick={handleClickTag(tag)}>
              <Tag name={tag} type="outline" size="lg" color="white" />
            </Button>
          ))}
        </Flex>
        <Flex
          className="posts animate-fade-in w-full"
          $direction="column"
          $gap="12px"
        >
          {posts.map(({ id, name, date, tag, url }) => (
            <Link
              className="transition duration-500 border-2 rounded-xl w-[inherit] hover:border-blue-200 "
              key={id}
              href={`/posts/${id}`}
            >
              <PostCard id={id} name={name} date={date} tag={tag} url={url} />
            </Link>
          ))}
        </Flex>
      </Flex>
      <FloatingButton
        className={classnames(...[y > 10 ? "show" : ""])}
        bottom={40}
        right={40}
        padding="12px"
        borderRadius="50px"
        bgColor={paletteColor.blue200}
        hoverBgColor={paletteColor.blue200}
        onClick={handleToTop}
      >
        <ArrowUp />
      </FloatingButton>
    </Flex>
  );
};

export default PostPage;
