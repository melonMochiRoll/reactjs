import { Memo } from '@Typings/model';
import React, { FC, useState } from 'react';
import SearchMemoModal from './SearchMemoModal';
import SearchMemoTab from './SearchMemoTab';

interface Props {
  memo: Memo;
}

const SearchMemoTemplate: FC<Props> = ({ memo }) => {
  const [ modal, setModal ] = useState(false);

  const onOpen = () => {
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      <SearchMemoTab
        memo={memo}
        onOpen={onOpen} />
      <SearchMemoModal
        memo={memo}
        open={modal}
        onClose={onClose} />
    </>
  );
}

export default SearchMemoTemplate;