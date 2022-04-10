import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOASTIFY_BASIC_OPTION } from '@Constants/react.toastify.options';
import { Container, Form } from '@Styles/common';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { onLogIn } from '@Src/pages/LogIn/LogInService';
import { InputTextField } from '@Src/components/InputTextField';
import useForm from '@Src/hooks/useForm';

export interface LogInFormType {
  email: string;
  password: string;
}

const LogInContainer: FC = () => {
  const navigate = useNavigate();
  const [form, errors, onChangeForm, onChangeError] = useForm({
    email: '',
    password: '',
  });
  const { email, password } = form;

  const onSubmit = async (logInForm: LogInFormType) => {

    const emailError =
      validation.email(logInForm.email) || '';

    const passwordError =
      validation.password(logInForm.password) || '';

    onChangeError({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) {
      return;
    }

    await onLogIn(logInForm)
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        console.dir(err);
        toast.error('로그인에 실패하였습니다.', TOASTIFY_BASIC_OPTION);
      });
  };

  return (
  <Container>
    <Form onSubmit={(e: any) => {
      e.preventDefault();
      onSubmit({email, password});
    }}>
      <InputTextField
        label='이메일'
        name='email'
        value={email}
        onChange={onChangeForm}
        errorMessage={errors.email}
      />
      <InputTextField
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

export default LogInContainer;

const validation = {
  email: (value: string) => {
    if (value === '') {
      return '이메일을 입력해 주세요';
    }
    if (!validateEmail(value)) {
      return '유효하지 않은 이메일 주소입니다.'
    }
  },

  password: (value: string) => {
    if (value === '') {
      return '비밀번호를 입력해 주세요'
    }
  },
};

const validateEmail = (email: string) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
}