import { Tag } from "@Typings/model";
import { axiosClient } from "@Utils/axiosInstance";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";

const useSearch = () => {
  const [ tag, setTag ] = useState('');
  const { isFetching: loading, data, refetch } = useQuery<Tag[], Error, Tag[], string[]>({
    queryKey: ['SearchTags', `${tag}`],
    queryFn: getSearchTag,
    enabled: false,
  });

  const onSearch = useCallback((value: string) => {
    setTag(value);
    refetch();
  }, [tag]);

  return { loading, data, onSearch };
};

export default useSearch;

const getSearchTag = async ({ queryKey }: { queryKey: string[] }): Promise<Tag[]> => {
  const { data } = await axiosClient({ url: `api/tag?keyword=${queryKey[1]}` });
  return data;
}