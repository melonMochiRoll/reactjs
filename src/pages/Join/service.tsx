import request from '@Utils/axiosInstance';

export const onVerifyValue = async (
  type: string,
  value: string,
): Promise<boolean> => {
  const { data } = await request({ url: `api/user/${type}?value=${value}` });
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
    await request({
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