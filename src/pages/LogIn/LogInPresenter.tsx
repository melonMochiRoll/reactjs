import React, { FC } from 'react';
import { LogInFormType } from '@Src/pages/LogIn/LogInContainer';
import { Container, Form } from '@Src/styles/common';
import { InputTextField } from '@Src/components/InputTextField';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainLayout from '@Src/layouts/MainLayout';

interface Props {
  form: any,
  errors: any,
  onChangeForm: any,
  onSubmit: (form: LogInFormType) => void;
};

const LogInPresenter: FC<Props> = ({
  form,
  errors,
  onChangeForm,
  onSubmit,
  }) => {
  const { email, password } = form;

  return (
    <MainLayout>
      <Container>
        <Form onSubmit={(e: any) => {
          e.preventDefault();
          onSubmit({
            email,
            password
          });
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
    </MainLayout>
  )
};

export default LogInPresenter;