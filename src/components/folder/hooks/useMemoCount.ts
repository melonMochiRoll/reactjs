import { axiosClient } from "@Utils/axiosInstance";
import { useQuery } from "react-query";

export interface MemoCount {
  folderName: string,
  count: number,
}

const useMemoCount = (userId: number) => {
  const { isFetching: loading, data, refetch } = useQuery<MemoCount[], Error, MemoCount[], [string, number]>({
    queryKey: ['MyMemoCount', userId],
    queryFn: getMemoCount,
    enabled: false,
    retry: false,
  });

  return { loading, data, refetch };
};

export default useMemoCount;

const getMemoCount = async ({ queryKey }: { queryKey: [string, number] } ) => {
  const { data } = await axiosClient({ url: `api/memo/count?id=${queryKey[1] | 0}`});
  return data;
};