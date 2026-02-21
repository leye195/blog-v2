'use client';

import { useState, useTransition } from 'react';
import { useAnimate } from 'framer-motion';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Tag from '@/components/common/Tag';

import useFetchTags from '@/hooks/useFetchTags';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import { cn, getPostsByCategory } from '@/libs/utils';
import type { Post } from '@/types/notion';
import type { Data } from '@/types/page';
import Posts from '../posts/Posts/Client';

interface PostPageProps extends Data<Post[]> {
  initialCategory?: string;
}

const PostPage = ({ data, initialCategory = 'all' }: PostPageProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryCategory = searchParams.get('category') || initialCategory;

  const [posts, setPosts] = useState(data);
  const [category, setCategory] = useState(queryCategory);
  const [isPending, startTransition] = useTransition();

  const [scope, animate] = useAnimate();
  const { data: tags } = useFetchTags();

  const handleClickTag = (name: string) => () => {
    const params = new URLSearchParams(searchParams.toString());
    if (name === 'all') {
      params.delete('category');
    } else {
      params.set('category', name);
    }

    const animateTemplate = {
      opacity: [0, 1],
      y: [5, 0],
    };

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
      setCategory(name);
    });

    animate('h1', animateTemplate, {
      duration: 0.5,
    });
    animate('.posts', animateTemplate, {
      duration: 0.5,
    });
  };

  useIsomorphicLayoutEffect(() => {
    setCategory(queryCategory);
  }, [queryCategory]);

  useIsomorphicLayoutEffect(() => {
    setPosts(getPostsByCategory(data, category));
  }, [category, data]);

  return (
    <Flex ref={scope} className="mt-12 w-full p-4" $direction="column" $alignItems="center">
      <h1 className={cn('text-[42px]', 'flex')}>
        <b className="text-center">{category.toUpperCase()}</b>
        <span className="text-base text-slate-600">({posts.length})</span>
      </h1>
      <Flex className="w-[inherit]" $direction="column" $gap="12px">
        <Flex
          className="my-[10px] w-[inherit] pb-4"
          $gap="8px"
          $justifyContent="center"
          $flexWrap="wrap"
        >
          <Button className="p-0" onClick={handleClickTag('all')}>
            <Tag name="All" type='outline' size="lg" />
          </Button>
          {tags?.map((tag: string) => (
            <Button key={tag} className="p-0" onClick={handleClickTag(tag)}>
              <Tag name={tag} type='outline' size="lg" />
            </Button>
          ))}
        </Flex>
        <Flex className={cn("posts animate-fade-in w-full", isPending && "opacity-50")} $direction="column" $gap="12px">
          <Posts type="grid" data={posts} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostPage;
