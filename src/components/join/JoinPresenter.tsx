import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { InputTextField } from "@Components/InputTextField";
import { Form } from "@Styles/common";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { JoinFormType } from "@Components/join/JoinContainer";

export interface JoinValidationType {
  email: (email: string) => Promise<string>,
  nickname: (nickname: string) => Promise<string>,
  password: (password: string, passwordCheck: string) => string,
  passwordCheck: (passwordCheck: string) => string,
};

interface Props {
  form: JoinFormType,
  errors: JoinFormType,
  onChangeForm: (e: any) => void,
  onChangeError: (name: string, error: string) => void,
  validation: JoinValidationType,
  onSubmit: (form: JoinFormType) => void,
};

const JoinPresenter: FC<Props> = ({
  form,
  errors,
  onChangeForm,
  onChangeError,
  validation,
  onSubmit,
  }) => {
  const { email, nickname, password, passwordCheck } = form;

  return (
    <Form onSubmit={(e: any) => {
      e.preventDefault();
      onSubmit({
        email,
        nickname,
        password,
        passwordCheck
      });
    }}>
      <InputTextField
        label='이메일'
        name='email'
        value={email}
        onChange={onChangeForm}
        onBlur={async (e: any) => {
          onChangeError(e.target.name, await validation.email(e.target.value));
        }}
        errorMessage={errors.email}
        successMessage={'사용 가능한 이메일입니다.'}
      />
      <InputTextField
        label="닉네임"
        name="nickname"
        value={nickname}
        onChange={onChangeForm}
        onBlur={async (e: any) => {
          onChangeError(e.target.name, await validation.nickname(e.target.value));
        }}
        errorMessage={errors.nickname}
        successMessage={'사용 가능한 닉네임입니다.'}
      />
      <InputTextField
        type="password"
        label="비밀번호"
        name="password"
        value={password}
        onChange={onChangeForm}
        onBlur={(e: any) => {
          onChangeError(e.target.name, validation.password(password, passwordCheck));
        }}
        errorMessage={errors.password}
        successMessage={'비밀번호가 일치합니다.'}
      />
      <InputTextField
        type="password"
        label="비밀번호 확인"
        name="passwordCheck"
        value={passwordCheck}
        onChange={onChangeForm}
        onBlur={() => {
          onChangeError('password', validation.password(password, passwordCheck));
        }}
        errorMessage={errors.passwordCheck}
      />
      <ButtonGroup
        size="large"
        variant="contained"
        sx={{ mt: 3 }}>
        <Button type='submit' sx={{ width: 200 }}>회원가입</Button>
      </ButtonGroup>
      <Box sx={{ display: 'flex', mt: 3 }}>
        <Typography variant="button">이미 가입되어 있으신가요?</Typography>
        <Button component={Link} to={'/login'} sx={{ p: 0, fontWeight: 'bold' }}>로그인</Button>
      </Box>
    </Form>
  )
};

export default JoinPresenter;