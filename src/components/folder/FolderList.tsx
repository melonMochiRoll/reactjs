import React, { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import FolderTab from './FolderTab';
import useMemoCount, { MemoCount } from './hooks/useMemoCount';
import useHeader from '@Hooks/useHeader';
import FolderTabSkeleton from './FolderTabSkeleton';

interface Props {}

const FolderList: FC<Props> = () => {
  const { userData } = useHeader();
  const { loading, data, refetch } = useMemoCount(userData?.id);

  useEffect(() => {
    refetch();
  }, [userData]);
  
  return (
    <>
      <ListBox>
        {data?.map((ele: MemoCount, i: number) => {
          return <FolderTab
            key={i}
            folderName={ele.folderName}
            folderCount={ele.count} />
          })
        }
        {!data && loading && 
          Array.from({ length: 3 }).map((_, i) => {
            return <FolderTabSkeleton key={i} />
        })}
      </ListBox>
    </>
  );
}

export default FolderList;

const ListBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: auto;

  a {
    color: inherit;
    text-decoration: none;
  }
`;