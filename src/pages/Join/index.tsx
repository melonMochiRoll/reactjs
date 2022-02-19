import axios from 'axios';
import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '@Hooks/useInput';
import { Button, Container, Input, Form } from '@Styles/common';
import { toast, ToastContainer } from 'react-toastify';
import { TOASTIFY_BASIC_OPTION } from '@Src/constants/react.toastify.options';
import { JOIN_SUCCESS } from '@Src/constants/user.response';

const Join = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

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
          //error logic
        });
    },
    [email, nickname, password]);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <label id="email_label">
          <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} placeholder={'EMAIL'} />
        </label>
        <br/>
        <label id="nickname_label">
          <Input type="nickname" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} placeholder={'NICKNAME'} />
        </label>
        <br/>
        <label id="password_label">
          <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} placeholder={'PASSWORD'} />
        </label>
        <br/>
        <label id="passwordCheck_label">
          <Input type="passwordCheck" id="passwordCheck" name="passwordCheck" value={passwordCheck} onChange={onChangePasswordCheck} placeholder={'PASSWORD CHECK'} />
        </label>
        <br/>
        <Button type='submit'>회원가입</Button>
        <Link to={'/login'}>
          <Button>뒤로</Button>
        </Link>
      </Form>
      <ToastContainer />
    </Container>
  )
}

export default Join;