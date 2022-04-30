import { axiosClient } from "@Src/utils/axiosInstance";
import { useState } from "react";
import { useQuery } from "react-query";

const useSearch = () => {
  const [tag, setTag] = useState('');
  const { status: searchPostStatus, data: searchPost } = useQuery(`${tag}`, {
    queryFn: getSearchData,
    enabled: !!tag,
  });

  return { searchPostStatus, searchPost, setTag };
};

export default useSearch;

const getSearchData = async ({ queryKey }: any) => {
  const { data } = await axiosClient({ url: `api/memo?tag=${queryKey}` });
  return data;
}