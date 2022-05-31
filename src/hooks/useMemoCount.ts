import { axiosClient } from "@Utils/axiosInstance";
import { useQuery } from "react-query";

export interface MemoCount {
  folderName: string,
  count: number,
};

const useMemoCount = (userId: number) => {
  const { isFetching: memoCountloading, data: memoCount, refetch: memoCountRefetch } = useQuery<MemoCount[], Error, MemoCount[], [string, number]>({
    queryKey: ['MyMemoCount', userId],
    queryFn: getMemoCount,
    enabled: false,
    retry: false,
  });

  return { memoCountloading, memoCount, memoCountRefetch };
};

export default useMemoCount;

const getMemoCount = async ({ queryKey }: { queryKey: [string, number] } ) => {
  const { data } = await axiosClient({ url: `api/memo/count?id=${queryKey[1]}`});
  return data;
};