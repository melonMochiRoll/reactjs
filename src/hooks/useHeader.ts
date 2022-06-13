import { User } from "@Typings/model";
import { axiosClient } from "@Utils/axiosInstance"
import { useCallback } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const useHeader = () => {
  const { isFetching: userLoading, data: userData, refetch: userRefetch } = useQuery<User, Error, User, string>({
    queryKey: 'MyUserData',
    queryFn: getUser,
    enabled: false,
  });

  const onLogout = useCallback(async () => {
    try {
      await axiosClient({ url: `api/user/logout` });
      toast.info('로그아웃 되었습니다.');
      userRefetch();
    } catch(e) {}
  }, [userRefetch]);

  return { userLoading, userData, userRefetch, onLogout };
};

export default useHeader;

const getUser = async (): Promise<User> => {
  const { data } = await axiosClient({ url: `api/user` });
  return data;
};