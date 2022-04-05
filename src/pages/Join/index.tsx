import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _, { debounce } from 'lodash';
import useInput from '@Hooks/useInput';
import { Container, Form, ErrorMessage, SuccessMessage } from '@Styles/common';
import { PASSWORD_MISMATCH, PASSWORD_MATCH, EMAIL_EXIST, EMAIL_AVAILABLE, NICKNAME_EXIST, NICKNAME_AVAILABLE } from '@Src/constants/user.response';
import { onSubmit, onVerifyValue } from '@Pages/Join/service';
import { Button, ButtonGroup, TextField } from '@mui/material';

const Join = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [emailExistError, setEmailExistError] = useState(false);
  const [nicknameExistError, setNicknameExistError] = useState(false);
  const [passwordVerifyError, setPasswordVerifyError] = useState(false);

  const handleSetErrorState = (setErrorState: React.Dispatch<React.SetStateAction<boolean>>) => {
    return useCallback(
      debounce(async (e: any) => {
        const type = e.target.name;
        const value = e.target.value;
        const verified = await onVerifyValue(type, value);
        setErrorState(verified);
      }, 500), []);
  };

  const handleVerifyPassword = useCallback(
    debounce(() => {
      setPasswordVerifyError(password !== passwordCheck);
    }, 250),
  [password, passwordCheck]);

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      await onSubmit(
        email,
        nickname,
        password,
        )
      .then(() => {
        navigate('/login');
      });
    },
  [email, nickname, password]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label id="email_label">
          <TextField
            type="email"
            id="email"
            name="email"
            label="Email"
            variant="standard"
            margin="normal"
            value={email}
            onChange={onChangeEmail}
            onKeyUp={handleSetErrorState(setEmailExistError)} />
        </label>
          {email && !emailExistError && <SuccessMessage>{EMAIL_AVAILABLE}</SuccessMessage>}
          {email && emailExistError && <ErrorMessage>{EMAIL_EXIST}</ErrorMessage>}
        <label id="nickname_label">
          <TextField
            type="nickname"
            id="nickname"
            name="nickname"
            label="Nickname"
            variant="standard"
            margin="normal"
            value={nickname}
            onChange={onChangeNickname}
            onKeyUp={handleSetErrorState(setNicknameExistError)} />
        </label>
          {nickname && !nicknameExistError && <SuccessMessage>{NICKNAME_AVAILABLE}</SuccessMessage>}
          {nickname && nicknameExistError && <ErrorMessage>{NICKNAME_EXIST}</ErrorMessage>}
        <label id="password_label">
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            variant="standard"
            margin="normal"
            value={password}
            onChange={onChangePassword}
            onKeyUp={handleVerifyPassword} />
        </label>
        <label id="passwordCheck_label">
          <TextField
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            label="Password Check"
            variant="standard"
            margin="normal"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            onKeyUp={handleVerifyPassword} />
        </label>
          {password && passwordCheck && !passwordVerifyError && <SuccessMessage>{PASSWORD_MATCH}</SuccessMessage>}
          {password && passwordCheck && passwordVerifyError && <ErrorMessage>{PASSWORD_MISMATCH}</ErrorMessage>}
        <ButtonGroup size="large" variant="contained" sx={{ mt: 3 }}>
          <Button type='submit'>회원가입</Button>
          <Button component={Link} to={'/login'}>뒤로</Button>
        </ButtonGroup>
      </Form>
    </Container>
  )
}

export default Join;