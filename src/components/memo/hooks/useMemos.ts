import { Memo, MemoWithHasMore } from "@Typings/model";
import { axiosClient } from "@Utils/axiosInstance";
import { useQuery } from "react-query";

type useMemosQueryKey = [string, number, string, number];

interface useMemosContext {
  queryKey: useMemosQueryKey;
};

const useMemos = ( userId: number, folderName: string, currentNumber: number ) => {
  const { isFetched, isFetching: loading, data, refetch } = useQuery<MemoWithHasMore, Error, MemoWithHasMore, useMemosQueryKey>({
    queryKey: ['MyMemoData', userId, folderName, currentNumber],
    queryFn: getMemos,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
  });

  return { isFetched, loading, data, refetch };
};

export default useMemos;

const getMemos = async ({ queryKey }: useMemosContext): Promise<MemoWithHasMore> => {
  const { data } = await axiosClient({ url: `api/memo?id=${queryKey[1] | 0}&fn=${queryKey[2]}&cs=${queryKey[3]}` });
  return data;
};