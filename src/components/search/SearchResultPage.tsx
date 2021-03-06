import qs from "qs";
import React, { FC, useEffect, useState } from "react";
import styled from '@emotion/styled';
import { useLocation } from "react-router-dom";
import useSearchMemos from "@Components/search/hooks/useSearchMemos";
import { Memo } from "@Typings/model";
import SearchMemoTemplate from "./SearchMemoTemplate";
import MemoTabSkeleton from "@Components/memo/MemoTabSkeleton";
import { useInView } from "react-intersection-observer";

const SearchResultPage: FC = () => {
  const location = useLocation();
  const { ref, inView } = useInView({
    delay: 100,
  });
  const query: { tag?: string } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { tag: searchTag } = query;
  const [ currentSequence, setCurrentSequence ] = useState(15);
  const { isFetched, loading, data } = useSearchMemos(searchTag, currentSequence);

  useEffect(() => {
    if (inView && data?.hasMore) {
      setCurrentSequence((prev) => prev + 15);
    }
  }, [inView, data]);
  
  return (
    <ListBox>
      {data?.memos.map((memo: Memo, i: number) => {
        return <SearchMemoTemplate
          key={i}
          memo={memo} />
      })}
      {isFetched && <div ref={ref} />}
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