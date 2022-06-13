import { Fade, Modal } from '@mui/material';
import { Memo } from '@Typings/model';
import React, { FC } from 'react';
import { Location, ModalBox, Textarea } from '@Components/memo/MemoModalTemplate';

interface Props {
  memo: Memo;
  open: boolean;
  onClose: () => void;
}

const SearchMemoModal: FC<Props> = ({ memo, open, onClose }) => {
  const { contents } = memo;

  return (
    <Modal
      open={open}
      onClose={onClose} >
      <Fade in={open} timeout={500}>
      <Location>
        <ModalBox>
          <Textarea value={contents} readOnly />
        </ModalBox>
      </Location>
      </Fade>
    </Modal>
  );
}

export default SearchMemoModal;