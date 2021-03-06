import { User } from '@Typings/model';
import { axiosClient } from '@Utils/axiosInstance';
import React, { FC, useState } from 'react';
import MemoBottomButtons from './MemoBottomButtons';
import MemoBottomModal from './MemoBottomModal';

interface Props {
  folder: string;
  switchDelete: () => void;
  refetch: () => void;
}

export interface ICreateMemo {
  contents: string,
  publicMode: boolean,
  folderName: string,
  userId: number,
  tags: string,
}

const MemoBottom: FC<Props> = ({
  folder,
  switchDelete,
  refetch,
}) => {
  const [ modal, setModal ] = useState(false);

  const onOpen = () => {
    setModal(true);
  };

  const onClose = async (data? :ICreateMemo) => {
    await createMemo(data, refetch);
    setModal(false);
  };
  
  return (
    <>
      <MemoBottomButtons
        onOpen={onOpen}
        switchDelete={switchDelete} />
      <MemoBottomModal
        folder={folder}
        open={modal}
        onClose={onClose} />
    </>
  );
}

export default MemoBottom;

const createMemo = async (data: ICreateMemo = null, refetch: () => void) => {
  if (data) {
    await axiosClient({
      method: 'POST',
      url: 'api/memo',
      data,
    });
    refetch();
  }
};