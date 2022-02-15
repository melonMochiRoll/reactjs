import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useInput from '@Hooks/useInput';
import { Button, Container, Input, Form } from '@Styles/common';

const Join = () => {
  const [joinSuccess, setJoinSuccess] = useState(false);
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
          setJoinSuccess(true);
        })
        .catch((error) => {
          console.dir(error);
          //error logic
        });
    },
    [email, nickname, password]);

  if (joinSuccess) {
    <Navigate to={'/login'}/>
  }

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
    </Container>
  )
}

export default Join;