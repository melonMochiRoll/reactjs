import { MemoWithHasMore } from "@Typings/model";
import { axiosClient } from "@Utils/axiosInstance";
import { useQuery } from "react-query";

type useSearchMemosQueryKey = [string, string, number];

interface useMemosContext {
  queryKey: useSearchMemosQueryKey;
};

const useSearchMemos = ( query: string, currentSequence: number ) => {
  const { isFetched, isLoading: loading, data } = useQuery<MemoWithHasMore, Error, MemoWithHasMore, useSearchMemosQueryKey>({
    queryKey: ['SearchMemo', query, currentSequence],
    queryFn: getSearchMemos,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
  });

  return { isFetched, loading, data };
};

export default useSearchMemos;

const getSearchMemos = async ({ queryKey }: useMemosContext): Promise<MemoWithHasMore> => {
  const { data } = await axiosClient({ url: `api/tag/memo?tag=${queryKey[1]}&cs=${queryKey[2]}` });
  return data;
};