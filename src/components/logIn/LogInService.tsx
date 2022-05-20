import { axiosClient } from "@Utils/axiosInstance"
import { LogInFormType } from "@Components/logIn/LogInContainer";

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