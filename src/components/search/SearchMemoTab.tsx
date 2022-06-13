import { ellipsisText, IconDiv, Left, Right, TabBox } from '@Components/memo/MemoTab';
import { Memo } from '@Typings/model';
import React, { FC } from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

interface Props {
  memo: Memo;
  onOpen: () => void;
}

const SearchMemoTab: FC<Props> = ({ memo, onOpen }) => {
  const { publicMode, updatedAt, contents } = memo;
  const date = updatedAt?.split('T')[0];
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
      </Right>
    </TabBox>
  );
}

export default SearchMemoTab;