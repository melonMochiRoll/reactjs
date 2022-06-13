import React, { FC } from 'react';
import styled from '@emotion/styled';
import TagIcon from '@mui/icons-material/Tag';
import { Tag } from '@Typings/model';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  tag: Tag;
  onClose: () => void;
}

const SearchTab: FC<Props> = ({ tag, onClose }) => {
  const { tag: tagName } = tag;

  return (
    <Link to={`/search?tag=${tagName}`}>
      <TabBox onClick={onClose}>
        <CircleIcon>
          <TagIcon color='primary' />
        </CircleIcon>
        <TitleBox>
          <Typography sx={{ fontWeight: 'bold' }}>{tagName}</Typography>
        </TitleBox>
      </TabBox>
    </Link>
  );
}

export default SearchTab;

const TabBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-contents: space-between;
  padding: 5px 15px;
  height: 70px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CircleIcon = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 30px;
  border: 1px solid black;
`;

const TitleBox = styled.div`
  display: flex;
  margin-left: 10px;
`;