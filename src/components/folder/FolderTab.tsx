import React, { FC } from 'react';
import styled from '@emotion/styled';
import FolderIcon from '@mui/icons-material/FolderOutlined';
import ArrowIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

interface Props {
  folderName: string;
  folderCount: number;
}

const FolderTab: FC<Props> = ({
  folderName,
  folderCount,
  }) => {
  return (
    <Link to={`/memo?folder=${folderName}`}>
      <TabBox>
        <Left>
          <FolderIcon color="primary" sx={{ mr: 2 }}/>
          {folderName}
        </Left>
        <Right>
          {folderCount}
          <ArrowIcon />
        </Right>
      </TabBox>
    </Link>
  );
}

export default FolderTab;

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
`;