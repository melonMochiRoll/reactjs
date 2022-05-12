import React, { FC } from "react";
import SearchInput from "@Src/components/search/SearchInput";
import SearchResult from "@Src/components/search/SearchResult";
import useSearch from "@Src/hooks/useSearch";

const SearchField: FC = () => {
  const { searchPost, setTag: onSearch } = useSearch();
  
  return (
    <>
      <SearchInput
        onSearch={onSearch}
        />
      <SearchResult />
    </>
  )
};

export default SearchField; // SearchResult, searchPost를 props로 받고 모달로 목록 출력