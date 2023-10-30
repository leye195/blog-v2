import { getPosts } from "@/apis";
import { useQuery } from "@tanstack/react-query";

type Props<T> = {
  initData: T;
  category: string;
};

const useFetchPosts = <T>({ category, initData }: Props<T>) => {
  const { data, isLoading, isFetched } = useQuery<T>({
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
