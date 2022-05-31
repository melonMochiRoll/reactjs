import React, { FC } from 'react';
import styled from '@emotion/styled';
import AddMemoIcon from '@mui/icons-material/CreateOutlined';
import DelMemoIcon from '@mui/icons-material/DeleteOutlined';

interface Props {
  onOpen: () => void;
  switchDelete: () => void;
}

const MemoBottomButtons: FC<Props> = ({ onOpen, switchDelete }) => {
  return (
    <BottomBox>
      <IconButton onClick={onOpen}>
        <AddMemoIcon color="primary" />
      </IconButton>
      <IconButton onClick={switchDelete}>
        <DelMemoIcon color="primary" />
      </IconButton>
    </BottomBox>
  );
}

export default MemoBottomButtons;

const BottomBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  border-top: solid 1px black;
`;

const IconButton = styled.div`
  cursor: pointer;
  margin-left: 10px;
`;