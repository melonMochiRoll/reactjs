import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import MemoBottom from './MemoBottom';
import useMemos from '@Hooks/useMemos';
import { useLocation, useNavigate } from 'react-router-dom';
import { Memo } from '@Typings/model';
import MemoTemplate from './MemoTemplate';
import useHeader from '@Hooks/useHeader';
import qs from 'qs';
import MemoTabSkeleton from './MemoTabSkeleton';

const MemoList: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = useHeader();
  const [ showDelete, setShowDelete ] = useState(false);
  const query: { folder?: string } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { memoLoading, memoData, memoRefetch } = useMemos(userData?.id, query.folder);
  console.dir(memoData);

  useEffect(() => {
    if (!query.folder || !userData) {
      navigate('/');
    }
  });

  useEffect(() => {
    memoRefetch();
  }, [userData]);

  const onSwitchDelete = () => {
    setShowDelete((prev) => !prev);
  };

  return (
    <>
      <ListBox>
        {memoData?.map((memo: Memo, i: number) => {
          return <MemoTemplate
            key={i}
            memo={memo}
            refetch={memoRefetch}
            showDelete={showDelete} />
        })}
        {!memoData && memoLoading &&
          Array.from({ length: 4 }).map((_, i) => {
            return <MemoTabSkeleton key={i} />
          })}
      </ListBox>
      <MemoBottom 
        switchDelete={onSwitchDelete} />
    </>
  );
}

export default MemoList;

const ListBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;

  a {
    color: inherit;
    text-decoration: none;
  }
`;