import request from '@Utils/axiosInstance';

const onVerifyEmail = async (email: string): Promise<boolean> => {
  try {
    await request({ url: `api/user/email?email=${email}` });
    return true;
  } catch (error) {
    return false;
  }
};

const onVerifyNickname = async (nickname: string): Promise<boolean> => {
  try {
    await request({ url: `api/user/nickname?nickname=${nickname}` });
    return true;
  } catch(error) {
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
  onVerifyEmail,
  onVerifyNickname,
  onSubmit,
};