import React, { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import FolderTab from './FolderTab';
import useMemoCount, { MemoCount } from '@Hooks/useMemoCount';
import useHeader from '@Hooks/useHeader';
import MemoListBottom from '@Components/memo/MemoListBottom';
import { Skeleton } from '@mui/material';
import FolderTabSkeleton from './FolderTabSkeleton';

const FolderList: FC = () => {
  const { userData } = useHeader();
  const { memoCountloading, memoCount, memoCountRefetch } = useMemoCount(userData?.id);

  useEffect(() => {
    memoCountRefetch();
  }, [userData]);
  
  return (
    <>
      <ListBox>
        {memoCount?.map((ele: MemoCount, i: number) => {
          return <FolderTab
            key={i}
            folderName={ele.folderName}
            folderCount={ele.count} />
        })}
        {!memoCount && memoCountloading && 
          Array.from({ length: 3 }).map((_, i) => {
            return <FolderTabSkeleton key={i} />
          })}
      </ListBox>
      <MemoListBottom />
    </>
  );
}

export default FolderList;

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