import { axiosClient } from '@Utils/axiosInstance';
import { JoinSubmitFormType } from '@Src/pages/Join/JoinContainer';

export const onExistCheck = async (
  type: string,
  value: string,
  ) => {
  try {
    await axiosClient({ url: `api/user/${type}?value=${value}` });
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