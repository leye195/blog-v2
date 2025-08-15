import Link from 'next/link';

import PostCard from '@/components/common/PostCard';
import { cn } from '@/libs/utils';
import { Post } from '@/types/notion';

type PostGridProps = {
  data?: Post[];
  count?: number;
  dataFromServerSide?: boolean;
  className?: string;
};

export default function PostGridClient({
  data = [],

  className,
}: PostGridProps) {
  const posts = data;

  return (
    <div
      className={cn('grid w-full justify-center gap-[12px]', className)}
      style={{
        gridTemplateColumns: 'repeat(auto-fill,minmax(280px,auto))',
      }}
    >
      {posts.map(({ id, name, date, tag, url }) => (
        <Link
          className={cn(
            'min-h-[220px] rounded-xl border-2 transition duration-500 hover:border-blue-200',
            'max-md:min-h-[150px]',
          )}
          key={id}
          href={`/posts/${id}`}
        >
          <PostCard id={id} name={name} date={date} tag={tag} url={url} />
        </Link>
      ))}
    </div>
  );
}
