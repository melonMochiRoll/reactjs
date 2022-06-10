import { Memo } from "@Typings/model";
import { axiosClient } from "@Utils/axiosInstance";
import { useQuery } from "react-query";

const useMemos = ( userId: number, folderName: string ) => {
  const { isFetching: loading, data, refetch } = useQuery<Memo[], Error, Memo[], [string, number, string]>({
    queryKey: ['MyMemoData', userId, folderName],
    queryFn: getMemos,
    enabled: false,
    retry: false,
  });

  return { loading, data, refetch };
};

export default useMemos;

const getMemos = async ({ queryKey }: { queryKey: [string, number, string] }): Promise<Memo[]> => {
  const { data } = await axiosClient({ url: `api/memo?id=${queryKey[1] | 0}&fn=${queryKey[2]}` });
  return data;
};