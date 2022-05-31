import styled from '@emotion/styled';
import useInput from '@Hooks/useInput';
import { Fade, Modal } from '@mui/material';
import { Memo } from '@Typings/model';
import React, { FC, useEffect } from 'react';
import { IUpdateMemo } from './MemoTemplate';

interface Props {
  memo: Memo;
  open: boolean;
  onClose: (data: IUpdateMemo) => void;
}

const MemoModal: FC<Props> = ({ memo, open, onClose }) => {
  const { id, contents, publicMode, folderName } = memo;
  const [ text, onChangeText, setText ] = useInput(contents);

  useEffect(() => {
    setText(contents);
  }, [contents]);

  return (
    <Modal
      open={open}
      onClose={() => onClose({
        memoId: id,
        contents: text,
        publicMode,
        folderName,
        tags: '' })}>
      <Fade in={open} timeout={500}>
      <Location>
        <ModalBox>
          <Textarea value={text} onChange={onChangeText} />
        </ModalBox>
      </Location>
      </Fade>
    </Modal>
  );
}

export default MemoModal;

const Location = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: 0;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 650px;
  height: 600px;
  padding: 1px;
  border-radius: 6px;
  background-color: #fffcf9;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: auto;
  outline-color: #1976d2;
  border: 3px solid #1976d2;
  border-radius: 6px;
  font-size: 20px;
  font-family: 'IBM Plex Sans KR';
  resize: none;
`;