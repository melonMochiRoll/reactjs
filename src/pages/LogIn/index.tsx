import axios from 'axios';
import React, { useCallback } from 'react';
import { useState } from "react"
import { Link, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOASTIFY_BASIC_OPTION } from '@Constants/react.toastify.options';
import { EMAIL_EMPTY, LOGIN_ERROR, PASSWORD_EMPTY } from '@Constants/user.response';
import useInput from '@Hooks/useInput';
import { Button, Container, Form, Input } from '@Styles/common';

const LogIn = () => {
  const [logInSuccess, setLogInSuccess] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email) {
        toast.error(`${EMAIL_EMPTY}`, TOASTIFY_BASIC_OPTION);
        return;
      }
      if (!password) {
        toast.error(`${PASSWORD_EMPTY}`, TOASTIFY_BASIC_OPTION);
        return;
      }
      axios.post(
        '/api/user/login',
        { email, password }, 
        { withCredentials: true })
        .then(() => {
          setLogInSuccess(true);
        })
        .catch(() => {
          toast.error(`${LOGIN_ERROR}`, TOASTIFY_BASIC_OPTION);
        });
    },
    [email, password]);

  if (logInSuccess) {
    <Navigate to={'/'}/>
  }

  return (
  <Container>
    <Form onSubmit={onSubmit}>
      <label id="email_label">
        <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} placeholder={'EMAIL'} />
      </label>
      <br/>
      <label id="password_label">
        <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} placeholder={'PASSWORD'} />
      </label>
      <br/>
      <Button type='submit'>로그인</Button>
      <Link to={'/join'}>
        <Button>회원가입</Button>
      </Link>
    </Form>
    <ToastContainer />
  </Container>
  )
};

export default LogIn;