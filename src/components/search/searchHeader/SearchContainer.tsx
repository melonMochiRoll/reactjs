import React, { FC } from "react";
import styled from '@emotion/styled';
import SearchInput from "@Components/search/searchHeader/SearchInput";
import SearchResult from "@Components/search/searchHeader/SearchResult";
import useSearch from "@Components/search/searchHeader/hooks/useSearch";
import useInput from "@Hooks/useInput";

const SearchContainer: FC = () => {
  const { data, loading, onSearch } = useSearch();
  const [ keyword, onChangeKeyword, setKeyword ] = useInput('');

  const onClose = () => {
    setKeyword('');
  };

  return (
    <Box>
      <SearchInput
        keyword={keyword}
        onChange={onChangeKeyword}
        onSearch={onSearch} />
      <SearchResult
        keyword={keyword}
        onClose={onClose}
        loading={loading}
        data={data} />
    </Box>
  )
};

export default SearchContainer;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;