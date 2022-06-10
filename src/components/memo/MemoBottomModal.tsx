import React, { FC } from 'react';
import useInput from '@Hooks/useInput';
import { User } from '@Typings/model';
import { ICreateMemo } from './MemoBottom';
import useSwitch from '@Hooks/useSwitch';
import MemoModalTemplate from './MemoModalTemplate';

interface Props {
  user: User;
  folder: string;
  open: boolean;
  onClose: (data?: ICreateMemo) => void;
}

const MemoBottomModal: FC<Props> = ({ user, folder, open, onClose }) => {
  const [ text, onChangeText ] = useInput('');
  const [ publicMode, switchPublicMode ] = useSwitch(true);
  const [ folderName, onChangeFolderName ] = useInput(folder);
  const { id } = user;

  const beforeClose = () => {
    if (text) {
      const matched = text.match(/#[^\s#]+/g) || [];
      const replaced = matched.map((ele: string) => ele.replace(/#/g, ''));
      const tags = replaced.join(';');

      onClose({
        contents: text,
        publicMode,
        folderName,
        userId: id,
        tags,
      });
    }
    onClose();
  };
  
  return (
    <MemoModalTemplate
      open={open}
      beforeClose={beforeClose}
      publicMode={publicMode}
      switchPublicMode={switchPublicMode}
      folderName={folderName}
      onChangeFolderName={onChangeFolderName}
      text={text}
      onChangeText={onChangeText} />
  );
}

export default MemoBottomModal;