import { Skeleton } from '@mui/material';
import React from 'react';
import { IconDiv, Left, Right, TabBox } from './MemoTab';

const MemoTabSkeleton = () => {
  return (
    <TabBox>
      <Left>
        <IconDiv>
          <Skeleton variant="circular" width={30} height={30} />
        </IconDiv>
        <Skeleton variant="text" width={80}/>
      </Left>
      <Right>
        <Skeleton variant="text" width={40}/>
      </Right>
    </TabBox>
  );
}

export default MemoTabSkeleton;