import React, { FC } from 'react';
import styled from '@emotion/styled';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

interface Props {
  contents: string;
  publicMode: boolean;
  updatedAt: string;
  onOpen: () => void;
}

const MemoTab: FC<Props> = ({ contents, publicMode, updatedAt, onOpen }) => {
  const date = updatedAt.split('T')[0];
  const ellipsisContents = ellipsisText(contents);

  return (
    <TabBox onClick={onOpen}>
      <Left>
        <IconDiv>
          {publicMode ?
            <LockOutlinedIcon color="primary"/> :
            <LockOpenIcon color="primary"/>}
        </IconDiv>
        {ellipsisContents}
      </Left>
      <Right>
        {date}
      </Right>
    </TabBox>
  );
}

export default MemoTab;

const ellipsisText = (str: string) => {
  let temp = str;

  if (str.length > 15) {
    temp = temp.slice(0, 15) + '...';
    return temp;
  }

  return temp;
};

export const TabBox = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
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