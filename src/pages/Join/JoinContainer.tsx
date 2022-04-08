import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _, { debounce } from 'lodash';
import { onJoin, onExistCheck } from '@Pages/Join/JoinService';
import useForm from '@Src/hooks/useForm';
import { EMAIL_AVAILABLE, EMAIL_EXIST, NICKNAME_AVAILABLE, NICKNAME_EXIST, PASSWORD_MATCH, PASSWORD_MISMATCH } from '@Src/constants/user.response';
import { Container, ErrorMessage, Form, SuccessMessage } from '@Src/styles/common';
import { InputTextField } from '@Src/components/InputTextField';
import { Button, ButtonGroup } from '@mui/material';

export type JoinFormType = {
  email: string;
  nickname: string;
  password: string;
};

const JoinContainer: FC = () => {
  const navigate = useNavigate();
  const [form, errors, onChangeForm, onChangeError] = useForm({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });
  const { email, nickname, password, passwordCheck } = form;

  const validation = {
    valueExist: useCallback(
      debounce(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const type = e.target.name;
        const value = e.target.value;
        const result = await onExistCheck(type, value);
        if (result) {
          onChangeError(type, EMAIL_EXIST);
        } else {
          onChangeError(type, '');
        }
      }, 500), []),
    passwordMatch: useCallback(
      debounce(() => {
        if(password !== passwordCheck) {
          onChangeError('password', PASSWORD_MISMATCH);
        } else {
          onChangeError('password', '');
        }
      }, 500), [password, passwordCheck]),
  };

  const onSubmit = async (
    form: JoinFormType
    ) => {
      await onJoin(form)
        .then(() => {
          navigate('/login');
        });
    };

  useEffect(() => {

  });

  return (
    <Container>
      <Form>
        <InputTextField
          label='Email'
          name='email'
          value={email}
          onChange={onChangeForm}
          onKeyUp={validation.valueExist}
        />
        {email && !errors.email && <SuccessMessage>{EMAIL_AVAILABLE}</SuccessMessage>}
        {email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <InputTextField
          label="Nickname"
          name="nickname"
          value={nickname}
          onChange={onChangeForm}
        />
        {form.nickname && !errors.nickname && <SuccessMessage>{NICKNAME_AVAILABLE}</SuccessMessage>}
        {form.nickname && errors.nickname && <ErrorMessage>{NICKNAME_EXIST}</ErrorMessage>}
        <InputTextField
          label="Password"
          name="password"
          value={password}
          onChange={onChangeForm}
          onKeyUp={validation.passwordMatch}
        />
        <InputTextField
          label="Password Check"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChangeForm}
          onKeyUp={validation.passwordMatch}
        />
        {form.password && form.passwordCheck && !errors.password && <SuccessMessage>{PASSWORD_MATCH}</SuccessMessage>}
        {form.password && form.passwordCheck && errors.password && <ErrorMessage>{PASSWORD_MISMATCH}</ErrorMessage>}
        <ButtonGroup size="large" variant="contained" sx={{ mt: 3 }}>
          <Button type='submit' sx={{ width: 200 }}>회원가입</Button>
        </ButtonGroup>
        <Button component={Link} to={'/login'} sx={{ mt: 3 }}>뒤로</Button>
      </Form>
    </Container>
  )
}

export default JoinContainer;