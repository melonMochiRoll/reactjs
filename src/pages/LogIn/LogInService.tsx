import { axiosClient } from "@Src/utils/axiosInstance"
import { LogInFormType } from "@Src/pages/LogIn/LogInContainer";

export const onLogIn = async (logInForm: LogInFormType) => {
  try {
    await axiosClient({
      method: 'POST',
      url: `api/user/login`,
      data: logInForm,
      withCredentials: true,
    });
    return Promise.resolve();
  } catch(e) {
    return Promise.reject(e);
  }
}