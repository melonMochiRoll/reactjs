import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOASTIFY_BASIC_OPTION } from '@Constants/react.toastify.options';
import { onLogIn } from '@Src/pages/LogIn/LogInService';
import { validateEmail } from '@Src/pages/Join/JoinContainer';
import LogInPresenter from '@Src/pages/LogIn/LogInPresenter';

export interface LogInFormType {
  email: string;
  password: string;
}

const LogInContainer: FC = () => {
  const navigate = useNavigate();

  const onSubmit = async (logInForm: LogInFormType, setErrors: any) => {

    const validation = {
      email: (value: string) => {
        if (value === '') {
          return '이메일을 입력해 주세요';
        }
        if (!validateEmail(value)) {
          return '유효하지 않은 이메일 주소입니다.'
        }
        return '';
      },
    
      password: (value: string) => {
        if (value === '') {
          return '비밀번호를 입력해 주세요'
        }
        return '';
      },
    };

    const emailError =
      validation.email(logInForm.email);

    const passwordError =
      validation.password(logInForm.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) {
      return;
    }

    try {
      await onLogIn(logInForm);
      navigate('/login');
    } catch(e) {
      console.dir(e);
      toast.error('이메일 혹은 비밀번호를 확인해 주세요', TOASTIFY_BASIC_OPTION);
    }
  };

  return (
    <LogInPresenter onSubmit={onSubmit} />
  )
};

export default LogInContainer;