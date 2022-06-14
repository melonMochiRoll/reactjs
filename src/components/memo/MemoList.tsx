import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Memo } from '@Typings/model';
import MemoTemplate from './MemoTemplate';
import useHeader from '@Hooks/useHeader';
import qs from 'qs';
import MemoTabSkeleton from './MemoTabSkeleton';
import MemoBottom from './bottom/MemoBottom';
import useMemos from './hooks/useMemos';

const MemoList: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = useHeader();
  const [ showDelete, setShowDelete ] = useState(false);
  const query: { folder?: string } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { loading, data, refetch } = useMemos(userData?.id, query.folder);

  useEffect(() => {
    if (!userData) {
      navigate('/');
    }
  });

  useEffect(() => {
    refetch();
  }, [userData]);

  const onSwitchDelete = () => {
    setShowDelete((prev) => !prev);
  };

  return (
    <>
      <ListBox>
        {data?.map((memo: Memo, i: number) => {
          return <MemoTemplate
            key={i}
            memo={memo}
            refetch={refetch}
            showDelete={showDelete} />
        })}
        {!data && loading &&
          Array.from({ length: 4 }).map((_, i) => {
            return <MemoTabSkeleton key={i} />
        })}
      </ListBox>
      <MemoBottom
        user={userData}
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