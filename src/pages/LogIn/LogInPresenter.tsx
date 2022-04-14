import React, { FC } from 'react';
import { LogInFormType } from '@Src/pages/LogIn/LogInContainer';
import useForm from '@Src/hooks/useForm';
import { Container, Form } from '@Src/styles/common';
import { InputTextField } from '@Src/components/InputTextField';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

interface Props {
  onSubmit: (
    form: LogInFormType,
    setErrors: React.Dispatch<React.SetStateAction<LogInFormType>>,
  ) => void;
};

const LogInPresenter: FC<Props> = ({ onSubmit }) => {
  const [form, errors, onChangeForm, setErrors, onChangeError] = useForm({
    email: '',
    password: '',
  });
  const { email, password } = form;

  return (
  <Container>
    <Form onSubmit={(e: any) => {
      e.preventDefault();
      onSubmit({
        email,
        password
      }, setErrors);
    }}>
      <InputTextField
        label='이메일'
        name='email'
        value={email}
        onChange={onChangeForm}
        errorMessage={errors.email}
      />
      <InputTextField
        type="password"
        label='비밀번호'
        name='password'
        value={password}
        onChange={onChangeForm}
        errorMessage={errors.password}
      />
      <ButtonGroup
        size="large"
        variant="contained"
        sx={{ mt: 3 }}>
        <Button type='submit' sx={{ width: 200 }}>로그인</Button>
      </ButtonGroup>
      <Box sx={{ display: 'flex', mt: 3 }}>
        <Typography variant="button">아직 회원이 아니신가요?</Typography>
        <Button component={Link} to={'/join'} sx={{ p: 0, ml: 1, fontWeight: 'bold' }}>회원가입</Button>
      </Box>
    </Form>
    <ToastContainer />
  </Container>
  )
};

export default LogInPresenter;