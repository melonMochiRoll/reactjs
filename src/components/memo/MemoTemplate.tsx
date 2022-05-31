import React, { FC, useState } from 'react';
import { Memo } from '@Typings/model';
import MemoModal from './MemoModal';
import MemoTab from './MemoTab';
import { axiosClient } from '@Utils/axiosInstance';

interface Props {
  memo: Memo;
  refetch: () => void;
};

export interface IUpdateMemo {
  memoId: number;
  contents: string;
  publicMode: boolean;
  folderName: string;
  tags: string;
}

const MemoTemplate: FC<Props> = ({ memo, refetch }) => {
  const { publicMode, contents, updatedAt } = memo;
  const [ modal, setModal ] = useState(false);

  const onOpen = () => {
    setModal(true);
  };

  const onClose = async (data: IUpdateMemo) => {
    await editMemo(memo, data, refetch);
    setModal(false);
  };

  return (
    <>
      <MemoTab
        contents={contents}
        publicMode={publicMode}
        updatedAt={updatedAt}
        onOpen={onOpen} />
      <MemoModal
        memo={memo}
        open={modal}
        onClose={onClose} />
    </>
  );
}

export default MemoTemplate;

const editMemo = async (
  prevData: Memo,
  data: IUpdateMemo,
  refetch: () => void,
  ) => {
  const { contents, publicMode, folderName } = prevData;
  const { memoId, tags, ...remainder } = data;

  if (!objectCompare({contents, publicMode, folderName}, remainder)) {
    await axiosClient({
      method: 'PUT',
      url: 'api/memo',
      data,
    });
    refetch();
  }
};

const objectCompare = (a: Object, b: Object) => {
  return Object.values(a).join() === Object.values(b).join();
};