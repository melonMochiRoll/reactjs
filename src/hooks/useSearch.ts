import { axiosClient } from "@Src/utils/axiosInstance";
import { useState } from "react";
import { useQuery } from "react-query";

const useSearch = () => {
  const [keyword, setKeyword] = useState('');
  const { status: searchPostStatus, data: searchPost, error: searchPostError } = useQuery(`${keyword}`, {
    queryFn: getSearchData,
    enabled: !!keyword,
  });

  return { searchPostStatus, searchPost, searchPostError, setKeyword };
};

export default useSearch;

const getSearchData = async ({ queryKey }: any) => {
  const { data } = await axiosClient({ url: `api/memo/${queryKey}` });
  return data;
}