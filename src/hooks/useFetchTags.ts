import { useQuery } from "@tanstack/react-query";
import { getTags } from "@/apis";

type Props = {
  initialData?: string[];
};

const useFetchTags = ({ initialData = [] }: Props) => {
  const { data } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const data = await getTags();
      return data;
    },
    refetchOnWindowFocus: false,
    initialData,
  });

  return { data };
};

export default useFetchTags;
