import Link from 'next/link';
import { getPosts } from '@/apis';
import Flex from '@/components/common/Flex';
import PostCard from '@/components/common/PostCard';
import { cn } from '@/libs/utils';
import { Post } from '@/types/notion';

type PostListProps = {
  data?: Post[];
  count?: number;
  dataFromServerSide?: boolean;
  className?: string;
};

async function fetchNotionData(count?: number) {
  const data = await getPosts('all', count ?? undefined);
  return data;
}

export default async function PostListServer({
  data = [],
  count,
  dataFromServerSide,
  className,
}: PostListProps) {
  const posts = dataFromServerSide ? await fetchNotionData(count) : data;

  return (
    <Flex className={cn('w-[inherit]', className)} $direction="column" $gap="12px">
      {posts.map(({ id, name, date, tag, url }) => (
        <Link
          className={cn("w-[inherit] border-b-1 border-white-75 transition duration-500 hover:border-blue-500", 'md:rounded-xl md:border-1')}
          key={id}
          href={`/posts/${id}`}
        >
          <PostCard id={id} name={name} date={date} tag={tag} url={url} />
        </Link>
      ))}
    </Flex>
  );
}
