import React from 'react';
import { Left, Right, TabBox } from './FolderTab';
import FolderIcon from '@mui/icons-material/FolderOutlined';
import ArrowIcon from '@mui/icons-material/KeyboardArrowRight';
import { Skeleton } from '@mui/material';

const FolderTabSkeleton = () => {
  return (
    <TabBox>
      <Left>
        <FolderIcon color="primary" sx={{ mr: 2 }}/>
        <Skeleton variant="text" width={50}/>
      </Left>
      <Right>
        <Skeleton variant="text" width={20}/>
        <ArrowIcon />
      </Right>
    </TabBox>
  );
}

export default FolderTabSkeleton;