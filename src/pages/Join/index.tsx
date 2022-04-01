import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _, { debounce } from 'lodash';
import useInput from '@Hooks/useInput';
import { Button, Container, Input, Form, ErrorMessage, SuccessMessage } from '@Styles/common';
import { JOIN_SUCCESS, PASSWORD_MISMATCH, PASSWORD_MATCH, EMAIL_EXIST, EMAIL_AVAILABLE, NICKNAME_EXIST, NICKNAME_AVAILABLE } from '@Src/constants/user.response';
import { JoinDependencies } from '@Src/typings/dependency';

const Join = ({ joinService }: JoinDependencies) => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [emailExistError, setEmailExistError] = useState(false);
  const [nicknameExistError, setNicknameExistError] = useState(false);
  const [passwordVerifyError, setPasswordVerifyError] = useState(false);

  const onVerifyValue = useCallback(
    debounce(
      async (e: any) => {
        const type = e.target.name;
        const value = e.target.value;
        const verified = await joinService.onVerifyValue(value);
        
        if (type === 'email') {
          setEmailExistError(verified);
        }

        if (type === 'nickname') {
          setNicknameExistError(verified);
        }
    }, 250),
  []);

  const onVerifyPassword = useCallback(
    debounce(() => {
      setPasswordVerifyError(password !== passwordCheck);
    }, 250),
  [password, passwordCheck]);

  const onSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      await joinService.onSubmit(
        email,
        nickname,
        password
        )
      .then(() => {
        navigate('/login');
      });
    },
  [email, nickname, password]);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <label id="email_label">
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            onKeyUp={onVerifyValue}
            placeholder={'EMAIL'} />
        </label>
          {email && !emailExistError && <SuccessMessage>{EMAIL_AVAILABLE}</SuccessMessage>}
          {email && emailExistError && <ErrorMessage>{EMAIL_EXIST}</ErrorMessage>}
        <label id="nickname_label">
          <Input
            type="nickname"
            id="nickname"
            name="nickname"
            value={nickname}
            onChange={onChangeNickname}
            onKeyUp={onVerifyValue}
            placeholder={'NICKNAME'} />
        </label>
          {nickname && !nicknameExistError && <SuccessMessage>{NICKNAME_AVAILABLE}</SuccessMessage>}
          {nickname && nicknameExistError && <ErrorMessage>{NICKNAME_EXIST}</ErrorMessage>}
        <label id="password_label">
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            onKeyUp={onVerifyPassword}
            placeholder={'PASSWORD'} />
        </label>
        <label id="passwordCheck_label">
          <Input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            onKeyUp={onVerifyPassword}
            placeholder={'PASSWORD CHECK'} />
        </label>
          {password && passwordCheck && !passwordVerifyError && <SuccessMessage>{PASSWORD_MATCH}</SuccessMessage>}
          {password && passwordCheck && passwordVerifyError && <ErrorMessage>{PASSWORD_MISMATCH}</ErrorMessage>}
        <Button type='submit' long>회원가입</Button>
        <Link to={'/login'}>
          <Button long>뒤로</Button>
        </Link>
      </Form>
    </Container>
  )
}

export default Join;