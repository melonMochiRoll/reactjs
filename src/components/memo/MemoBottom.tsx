import React, { FC, useState } from 'react';
import MemoBottomButtons from './MemoBottomButtons';
import MemoBottomModal from './MemoBottomModal';

interface Props {
  switchDelete: () => void;
}

const MemoBottom: FC<Props> = ({ switchDelete }) => {
  const [ modal, setModal ] = useState(false);

  const onOpen = () => {
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
  };
  
  return (
    <>
      <MemoBottomButtons
        onOpen={onOpen}
        switchDelete={switchDelete} />
      <MemoBottomModal
        open={modal}
        onClose={onClose} />
    </>
  );
}

export default MemoBottom;