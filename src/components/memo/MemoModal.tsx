import useInput from '@Hooks/useInput';
import useSwitch from '@Hooks/useSwitch';
import { Memo } from '@Typings/model';
import React, { FC, useEffect } from 'react';
import { IUpdateMemo } from './MemoTemplate';
import MemoModalTemplate from './MemoModalTemplate';

interface Props {
  memo: Memo;
  open: boolean;
  onClose: (data: IUpdateMemo) => void;
}

const MemoModal: FC<Props> = ({ memo, open, onClose }) => {
  const { id, contents, publicMode, folderName, tags } = memo;
  const [ text, onChangeText, setText ] = useInput(contents);
  const [ editpublicMode, switchEditPublicMode ] = useSwitch(publicMode);
  const [ editfolderName, onChangeEditFolderName ] = useInput(folderName);

  useEffect(() => {
    setText(contents);
  }, [contents]);

  const beforeClose = () => {
    const matched = text.match(/#[^\s#]+/g) || [];
    const tags = matched.join(';');

    onClose({
      memoId: id,
      contents: text,
      publicMode: editpublicMode,
      folderName: editfolderName,
      tags,
    });
  };

  return (
    <MemoModalTemplate
      open={open}
      beforeClose={beforeClose}
      publicMode={editpublicMode}
      switchPublicMode={switchEditPublicMode}
      folderName={editfolderName}
      onChangeFolderName={onChangeEditFolderName}
      text={text}
      onChangeText={onChangeText} />
  );
}

export default MemoModal;