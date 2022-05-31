import { Fade, Modal } from '@mui/material';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import useInput from '@Hooks/useInput';

interface Props {
  open: boolean;
  onClose: () => void;
}

const MemoBottomModal: FC<Props> = ({ open, onClose }) => {
  const [ text, onChangeText ] = useInput('');
  
  return (
    <Modal
      open={open}
      onClose={onClose}>
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

export default MemoBottomModal;

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