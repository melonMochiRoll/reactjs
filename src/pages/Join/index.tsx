import axios, { AxiosResponse } from 'axios';
import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _, { debounce } from 'lodash';
import useInput from '@Hooks/useInput';
import { Button, Container, Input, Form, ErrorMessage, SuccessMessage } from '@Styles/common';
import { toast, ToastContainer } from 'react-toastify';
import { TOASTIFY_BASIC_OPTION } from '@Src/constants/react.toastify.options';
import { JOIN_SUCCESS, PASSWORD_MISMATCH, PASSWORD_MATCH, EMAIL_EXIST, EMAIL_AVAILABLE, NICKNAME_EXIST, NICKNAME_AVAILABLE } from '@Src/constants/user.response';

const Join = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [emailExistError, setEmailExistError] = useState(false);
  const [nicknameExistError, setNicknameExistError] = useState(false);
  const [passwordVerifyError, setPasswordVerifyError] = useState(false);

  const CompareString = (a: string, b: string) => {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  };

  const onVerifyEmail = useCallback(
    debounce(
      (e: any) => {
      axios.get(
        `api/user/email?email=${e.target.value}`)
      .then((res: AxiosResponse) => {
        setEmailExistError(res.data);
      })
      .catch((error: any) => {
        console.dir(error);
      });
    }, 250),
  []);

  const onVerifyNickname = useCallback(
    debounce(
      (e: any) => {
      axios.get(
        `api/user/nickname?nickname=${encodeURIComponent(e.target.value)}`)
      .then((res: AxiosResponse) => {
        setNicknameExistError(res.data);
      })
      .catch((error: any) => {
        console.dir(error);
      });
    }, 250),
  []);

  const onVerifyPassword = useCallback(
    debounce((e: any) => {
      const result = CompareString(e.target.value, password)
      setPasswordVerifyError(!result);
    }, 250),
  [password]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios.post(
        '/api/user',
        { email, nickname, password }, 
        { withCredentials: true })
        .then(() => {
          navigate(`/login`);
          toast.success(JOIN_SUCCESS, TOASTIFY_BASIC_OPTION);
        })
        .catch((error) => {
          console.dir(error);
        });
    },
  [email, nickname, password]);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <label id="email_label">
          <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} onKeyUp={onVerifyEmail} placeholder={'EMAIL'} />
        </label>
        {email && !emailExistError && <SuccessMessage>{EMAIL_AVAILABLE}</SuccessMessage>}
        {email && emailExistError && <ErrorMessage>{EMAIL_EXIST}</ErrorMessage>}
        <label id="nickname_label">
          <Input type="nickname" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} onKeyUp={onVerifyNickname} placeholder={'NICKNAME'} />
        </label>
        {nickname && !nicknameExistError && <SuccessMessage>{NICKNAME_AVAILABLE}</SuccessMessage>}
        {nickname && nicknameExistError && <ErrorMessage>{NICKNAME_EXIST}</ErrorMessage>}
        <label id="password_label">
          <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} placeholder={'PASSWORD'} />
        </label>
        <label id="passwordCheck_label">
          <Input type="password" id="passwordCheck" name="passwordCheck" value={passwordCheck} onChange={onChangePasswordCheck} onKeyUp={onVerifyPassword} placeholder={'PASSWORD CHECK'} />
        </label>
        {password && passwordCheck && !passwordVerifyError && <SuccessMessage>{PASSWORD_MATCH}</SuccessMessage>}
        {password && passwordCheck && passwordVerifyError && <ErrorMessage>{PASSWORD_MISMATCH}</ErrorMessage>}
        <Button type='submit' long>회원가입</Button>
        <Link to={'/login'}>
          <Button long>뒤로</Button>
        </Link>
      </Form>
      <ToastContainer />
    </Container>
  )
}

export default Join;