import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/apis";
import type { Post } from "@/types/notion";

type Props = {
  initData: Post[];
  category: string;
};

const useFetchPosts = ({ category, initData }: Props) => {
  const { data, isLoading, isFetched } = useQuery<Post[]>({
    queryKey: ["posts", category],
    queryFn: async () => {
      const data = await getPosts(category);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { data: data ?? initData, isLoading, isFetched };
};

export default useFetchPosts;
