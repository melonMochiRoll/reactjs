import { Fade, Modal, TextField } from '@mui/material';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FolderIcon from '@mui/icons-material/FolderOutlined';

interface Props {
  open: boolean;
  beforeClose: () => void;
  publicMode: boolean;
  switchPublicMode: () => void;
  folderName: string;
  onChangeFolderName: (e: any) => void;
  text: string,
  onChangeText: (e: any) => void;
}

const MemoModalTemplate: FC<Props> = ({
  open,
  beforeClose,
  publicMode,
  switchPublicMode,
  folderName,
  onChangeFolderName,
  text,
  onChangeText,
  }) => {
  return (
    <Modal
      open={open}
      onClose={beforeClose}>
      <Fade in={open} timeout={500}>
      <Location>
        <ModalBox>
          <SettingBox>
            <IconBox onClick={switchPublicMode}>
              {publicMode ?
                <LockOpenIcon color="primary" fontSize="large" /> :
                <LockOutlinedIcon color="primary" fontSize="large" />}
            </IconBox>
            <InputBox>
              <FolderIcon color="primary" sx={{ mr: 2 }}/>
              <TextField
                value={folderName}
                onChange={onChangeFolderName}
                size="small"
                sx={{ width: 100 }}
                variant="standard" />
            </InputBox>
          </SettingBox>
          <Textarea value={text} onChange={onChangeText} />
        </ModalBox>
      </Location>
      </Fade>
    </Modal>
  );
}

export default MemoModalTemplate;

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
  border: 3px solid #1976d2;
  border-radius: 6px;
  background-color: #fffcf9;
`;

const SettingBox = styled.div`
  display: flex;
  padding: 5px 0;
  justify-content: space-around;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: auto;
  outline: 0;
  font-size: 20px;
  font-family: 'IBM Plex Sans KR';
  resize: none;
`;