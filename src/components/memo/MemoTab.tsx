import React, { FC } from 'react';
import styled from '@emotion/styled';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, Collapse } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Memo } from '@Typings/model';

interface Props {
  memo: Memo;
  onOpen: () => void;
  onDelete: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  showDelete: boolean;
}

const MemoTab: FC<Props> = ({
  memo,
  onOpen,
  onDelete,
  showDelete,
  }) => {
  const { publicMode, updatedAt, contents } = memo;
  const date = updatedAt.split('T')[0];
  const ellipsisContents = ellipsisText(contents);

  return (
    <TabBox onClick={onOpen}>
      <Left>
        <IconDiv>
          {publicMode ?
            <LockOpenIcon color="primary" /> :
            <LockOutlinedIcon color="primary" />}
        </IconDiv>
        {ellipsisContents}
      </Left>
      <Right>
        {date}
        <Collapse
          in={showDelete}
          orientation='horizontal'>
          <Button
            size="small"
            color="error"
            variant="contained"
            sx={{ ml: 1 }} >
            <DeleteOutlineIcon onClick={onDelete} fontSize='small' />
          </Button>
        </Collapse>
      </Right>
    </TabBox>
  );
}

export default MemoTab;

export const ellipsisText = (str: string) => {
  let temp = str;

  if (!temp) {
    return;
  }

  if (temp.length > 15) {
    temp = temp.slice(0, 15) + '...';
    return temp;
  }

  return temp;
};

export const TabBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 5px;
  border-bottom: solid 1px black;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'IBM Plex Sans KR';
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  font-family: 'IBM Plex Sans KR';
  color: #838383;
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
`;