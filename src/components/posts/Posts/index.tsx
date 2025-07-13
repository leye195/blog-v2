import { Post } from '@/types/notion';
import PostGrid from './PostGrid';
import PostList from './PostList';

type Props = {
  data?: Post[];
  type?: 'list' | 'grid';
  count?: number;
  dataFromServerSide?: boolean;
  className?: string;
};

export default function Posts({ type = 'list', ...props }: Props) {
  if (type === 'grid') {
    return <PostGrid {...props} />;
  }

  return <PostList {...props} />;
}
