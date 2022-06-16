import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Memo } from '@Typings/model';
import MemoTemplate from './MemoTemplate';
import useHeader from '@Hooks/useHeader';
import qs from 'qs';
import MemoTabSkeleton from './MemoTabSkeleton';
import MemoBottom from './bottom/MemoBottom';
import useMemos from './hooks/useMemos';
import { useInView } from 'react-intersection-observer';

const MemoList: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = useHeader();
  const { ref, inView } = useInView({
    delay: 100,
  });
  const [ showDelete, setShowDelete ] = useState(false);
  const query: { folder?: string } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const [ currentSequence, setCurrentSequence ] = useState(15);
  const { isFetched, loading, data, refetch } = useMemos(userData?.id, query.folder, currentSequence);

  useEffect(() => {
    if (!userData) {
      navigate('/');
    }
  });

  useEffect(() => {
    if (inView && data?.hasMore) {
      setCurrentSequence((prev) => prev + 15);
    }
  }, [inView, data]);

  const onSwitchDelete = () => {
    setShowDelete((prev) => !prev);
  };

  return (
    <>
      <ListBox>
        {data?.memos.map((memo: Memo, i: number) => {
          if (memo) 
            return <MemoTemplate
              key={i}
              memo={memo}
              refetch={refetch}
              showDelete={showDelete} />
        })}
        {isFetched && <div ref={ref} />}
        {!data && loading &&
          Array.from({ length: 4 }).map((_, i) => {
            return <MemoTabSkeleton key={i} />
        })}
      </ListBox>
      <MemoBottom
        folder={query.folder}
        switchDelete={onSwitchDelete}
        refetch={refetch} />
    </>
  );
}

export default MemoList;

const ListBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: auto;
`;