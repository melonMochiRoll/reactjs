import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { FC } from 'react';

interface Props {
  type?: string;
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler;
  onBlur?: any;
  errorMessage?: string;
  successMessage?: string;
}

export const InputTextField: FC<Props> = ({
  type = 'text',
  label,
  name,
  value,
  onChange,
  onBlur,
  errorMessage,
  successMessage,
  }) => {
  return (
    <FormControl
      variant="standard"
      margin="normal"
      sx={{ maxWidth: 200 }}
    >
      <InputLabel>{label}</InputLabel>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormHelperText error sx={{ fontWeight: 'bold', mt: 1, }}>
        {errorMessage}
      </FormHelperText>
      {value && !errorMessage &&
      <FormHelperText sx={{ color: '#07a400', fontWeight: 'bold' }}>
        {successMessage}
      </FormHelperText>}
    </FormControl>
  )
};