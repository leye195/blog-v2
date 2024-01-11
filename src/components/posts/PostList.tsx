import Link from "next/link";
import { getPosts } from "@/apis";
import Flex from "@/components/common/Flex";
import PostCard from "@/components/common/PostCard";

type Props = {
  count?: number;
};

async function fetchNotionData(count?: number) {
  const data = await getPosts("all", count ?? undefined);
  return data;
}

export default async function PostList({ count }: Props) {
  const data = await fetchNotionData(count);
  return (
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
  );
}
