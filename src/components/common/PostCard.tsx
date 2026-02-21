import { type ComponentProps } from 'react';
import Flex from '@/components/common/Flex';
import Tag from '@/components/common/Tag';
import type { Post } from '@/types/notion';

type PostCardProps = ComponentProps<'div'> & Omit<Post, 'id'>;

const PostCard = ({ date, name, tag }: PostCardProps) => {
  return (
    <Flex
      className="h-full w-[inherit] p-4"
      $direction="column"
      $gap="10px"
      $justifyContent="space-between"
    >
      <Flex $direction="column" $gap="10px">
        <Flex $gap="8px">
          {tag.map(({ name, id }) => (
            <Tag key={id} name={name} />
          ))}
        </Flex>
        <h5 className="font-[600] md:text-[20px]">{name}</h5>
      </Flex>
      <Flex
        className="w-[inherit] md:text-[14px]"
        $alignItems="center"
        $justifyContent="space-between"
      >
        <time>{date}</time>
      </Flex>
    </Flex>
  );
};

export default PostCard;
