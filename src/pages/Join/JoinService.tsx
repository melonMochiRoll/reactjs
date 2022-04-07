import axiosClient from '@Utils/axiosInstance';

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

export const onSubmit = async (
  email: string,
  nickname: string,
  password: string,
): Promise<boolean> => {
  try {
    await axiosClient({
      method: 'post',
      url: '/api/user',
      data: {
        email,
        nickname,
        password,
      },
      withCredentials: true,
    });
    return true;
  } catch(error) {
    console.dir(error);
    return false;
  }
};