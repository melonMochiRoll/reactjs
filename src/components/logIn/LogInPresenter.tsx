import React, { FC } from 'react';
import { LogInFormType } from '@Components/logIn/LogInContainer';
import { Form } from '@Styles/common';
import { InputTextField } from '@Components/InputTextField';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { HomeTemplate } from '@Components/MainLayout';

interface Props {
  form: LogInFormType,
  errors: LogInFormType,
  onChangeForm: (e: any) => void,
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
    <HomeTemplate>
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
    </HomeTemplate>
  )
};

export default LogInPresenter;