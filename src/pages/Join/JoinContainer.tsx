import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { onJoin, onExistCheck } from '@Pages/Join/JoinService';
import JoinPresenter from './JoinPresenter';

export interface JoinSubmitFormType {
  email: string;
  nickname: string;
  password: string;
};

export interface JoinFormType extends JoinSubmitFormType {
  passwordCheck: string;
};

export interface JoinValidationType {
  email: (email: string) => Promise<string>,
  nickname: (nickname: string) => Promise<string>,
  password: (password: string, passwordCheck: string) => string,
  passwordCheck: (passwordCheck: string) => string,
};

const JoinContainer: FC = () => {
  const navigate = useNavigate();

  const validation = {

    email: async (email: string) => {
      if (email === '') {
        return '필수 입력 사항입니다.'
      }

      if (!validateEmail(email)) {
        return '유효하지 않은 이메일 주소입니다.'
      }

      try {
        await onExistCheck('email', email);
        return '이미 사용 중인 이메일입니다.';
      } catch(e){
        return '';
      }
    },

    nickname: async (nickname: string) => {
      if (nickname === '') {
        return '필수 입력 사항입니다.';
      }

      if (!/^[A-Za-z0-9]{4,12}$/.test(nickname)) {
        return '닉네임은 4~12자의 영문 혹은 숫자로 이루어져야 합니다.';
      }

      try {
        await onExistCheck('nickname', nickname);
        return '이미 사용 중인 닉네임입니다.';
      } catch(e){
        return '';
      }
    },

    password: (password: string, passwordCheck: string) => {
      if(password === '') {
        return '필수 입력 사항입니다.';
      }

      if(password.length < 6 || password.length > 12) {
        return '비밀번호는 6~12자로 이루어져야 합니다.';
      }

      if(password !== passwordCheck) {
        return '비밀번호를 확인해 주세요';
      }
      return '';
    },

    passwordCheck: (passwordCheck: string) => {
      if(passwordCheck === '') {
        return '필수 입력 사항입니다.';
      }
      return '';
    }
  };

  const onSubmit = async (
    joinForm: JoinFormType,
    setErrors: React.Dispatch<React.SetStateAction<JoinFormType>>,
    ) => {
    const emailError = await validation.email(joinForm.email);
    const nicknameError = await validation.nickname(joinForm.nickname);
    const passwordError = validation.password(joinForm.password, joinForm.passwordCheck);
    const passwordCheckError = validation.passwordCheck(joinForm.passwordCheck);

    setErrors({
      email: emailError,
      nickname: nicknameError,
      password: passwordError,
      passwordCheck: passwordCheckError,
    });

    if(emailError || nicknameError || passwordError || passwordCheckError) {
      return;
    }

    const { passwordCheck, ...joinSubmitForm } = joinForm;

    try {
      await onJoin(joinSubmitForm);
      navigate('/login');
    } catch(e) {
      console.dir(e);
    }
  };

  return (
    <JoinPresenter
      validation={validation}
      onSubmit={onSubmit}
    />
  )
};

export default JoinContainer;

export const validateEmail = (email: string) => {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regex.test(email.toLowerCase());
};