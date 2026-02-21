import Link from 'next/link';
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

export default function PostListClient({
  data = [],
  className,
}: PostListProps) {
  const posts = data;
  return (
    <Flex className={cn('w-[inherit]', className)} $direction="column" $gap="12px">
      {posts.map(({ id, name, date, tag, url }) => (
        <Link
          className="w-[inherit] rounded-xl border-1 border-white-75 transition duration-500 hover:border-blue-500"
          key={id}
          href={`/posts/${id}`}
        >
          <PostCard id={id} name={name} date={date} tag={tag} url={url} />
        </Link>
      ))}
    </Flex>
  );
}
