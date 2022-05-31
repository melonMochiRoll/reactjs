import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { onLogIn } from '@Components/logIn/LogInService';
import { validateEmail } from '@Components/join/JoinContainer';
import LogInPresenter from '@Components/logIn/LogInPresenter';
import useForm from '@Hooks/useForm';
import useHeader from '@Hooks/useHeader';

export interface LogInFormType {
  email: string;
  password: string;
}

const LogInContainer: FC = () => {
  const navigate = useNavigate();
  const { userRefetch } = useHeader(); 
  const [form, errors, onChangeForm, setErrors] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = async (logInForm: LogInFormType) => {

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
      userRefetch();
      navigate('/');
    } catch(e) {
      toast.error('이메일 혹은 비밀번호를 확인해 주세요');
    }
  };

  return (
    <LogInPresenter
      form={form}
      errors={errors}
      onChangeForm={onChangeForm}
      onSubmit={onSubmit}
    />
  )
};

export default LogInContainer;