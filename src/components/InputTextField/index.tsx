import { FormControl, Input, InputLabel } from '@mui/material';
import React, { FC } from 'react';

interface Props {
  type?: string,
  label: string,
  name: string,
  value: string,
  onChange: React.ChangeEventHandler,
  onKeyUp?: any,
}

export const InputTextField: FC<Props> = ({ type = 'text', label, name, value, onChange, onKeyUp }) => {
  return (
    <FormControl
      variant="standard"
      margin="normal"
    >
      <InputLabel>{label}</InputLabel>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </FormControl>
  )
};