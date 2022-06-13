import { axiosClient } from "@Utils/axiosInstance";
import { useQuery } from "react-query";

const useSearchMemos = (query: string) => {
  const { isLoading: loading, data, refetch } = useQuery<any, Error, any, string[]>({
    queryKey: ['SearchMemo', `${query}`],
    queryFn: getSearchMemos,
    enabled: false,
  });

  return { loading, data, refetch };
};

export default useSearchMemos;

const getSearchMemos = async ({ queryKey }: { queryKey: string[] }): Promise<any> => {
  const { data } = await axiosClient({ url: `api/tag/memo?tag=${queryKey[1]}` });
  return data;
};