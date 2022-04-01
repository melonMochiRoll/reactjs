import request from '@Utils/axiosInstance';

const onVerifyValue = async (value: string) => {
  try {
    await request({ url: `api/user?value=${value}` });
    return true;
  } catch (error) {
    console.dir(error);
    return false;
  }
};

const onSubmit = async (
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

export default {
  onVerifyValue,
  onSubmit,
};