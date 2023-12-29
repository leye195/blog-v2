import { useQuery } from "@tanstack/react-query";
import { getTags } from "@/apis";

const useFetchTags = () => {
  const { data } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data } = await getTags();
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { data };
};

export default useFetchTags;
