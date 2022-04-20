import { User } from "@Src/typings/model";
import { axiosClient } from "@Src/utils/axiosInstance"
import { useQuery } from "react-query";

const getUser = async (): Promise<User> => {
  const { data } = await axiosClient({ url: `api/user` });
  return data;
};

export const useMyUserData = () => {
  return useQuery({
    queryKey: 'MyUserData',
    queryFn: getUser,
    retry: false,
  });
};