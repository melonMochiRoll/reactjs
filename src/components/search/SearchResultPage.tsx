import qs from "qs";
import React, { FC, useEffect } from "react";
import styled from '@emotion/styled';
import { useLocation } from "react-router-dom";
import useSearchMemos from "@Components/search/hooks/useSearchMemos";
import { Memo } from "@Typings/model";
import SearchMemoTemplate from "./SearchMemoTemplate";
import MemoTabSkeleton from "@Components/memo/MemoTabSkeleton";

const SearchResultPage: FC = () => {
  const location = useLocation();
  const query: { tag?: string } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { tag: searchTag } = query;
  const { loading, data, refetch } = useSearchMemos(searchTag);

  useEffect(() => {
    refetch();
  }, [searchTag]);
  
  return (
    <ListBox>
      {data?.map((memo: Memo, i: number) => {
        return <SearchMemoTemplate
          key={i}
          memo={memo} />
      })}
      {!data && loading &&
        Array.from({ length: 4 }).map((_, i) => {
          return <MemoTabSkeleton key={i} />
      })}
    </ListBox>
  );
}

export default SearchResultPage;

const ListBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: auto;
`;