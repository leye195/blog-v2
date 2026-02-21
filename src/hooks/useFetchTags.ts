import { useSuspenseQuery } from '@tanstack/react-query';
import { getTags } from '@/apis';

const useFetchTags = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['tags'],
    queryFn: getTags,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });

  return { data };
};

export default useFetchTags;
