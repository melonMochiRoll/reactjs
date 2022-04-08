import axiosClient from '@Utils/axiosInstance';
import { JoinFormType } from '@Src/pages/Join/JoinContainer';

export const onExistCheck = async (
  type: string,
  value: string,
): Promise<boolean> => {
  const { data } = await axiosClient({ url: `api/user/${type}?value=${value}` });
  if (data) {
    return true;
  }
  return false;
};

export const onJoin = async (
  form: JoinFormType
): Promise<boolean> => {
  try {
    await axiosClient({
      method: 'post',
      url: '/api/user',
      data: form,
      withCredentials: true,
    });
    return true;
  } catch(error) {
    console.dir(error);
    return false;
  }
};