import { axiosClient } from '@Utils/axiosInstance';
import { JoinSubmitFormType } from '@Components/join/JoinContainer';

export const onCheckEmail = async (
  email: string,
  ) => {
  try {
    await axiosClient({ url: `api/user/checkEmail?email=${email}` });
    return Promise.resolve();
  } catch(e) {
    return Promise.reject(e);
  };
};

export const onCheckNickname = async (
  nickname: string,
  ) => {
  try {
    await axiosClient({ url: `api/user/checkNickname?nickname=${nickname}` });
    return Promise.resolve();
  } catch(e) {
    return Promise.reject(e);
  };
};

export const onJoin = async (
  form: JoinSubmitFormType,
  ) => {
    try {
      await axiosClient({
        method: 'POST',
        url: '/api/user',
        data: form,
        withCredentials: true,
      });
      return Promise.resolve();
    } catch(e) {
      return Promise.reject(e);
    }   
};