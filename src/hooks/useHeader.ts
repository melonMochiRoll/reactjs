import { User } from "@Typings/model";
import { axiosClient } from "@Utils/axiosInstance"
import { useCallback } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const useHeader = () => {
  const { status: userStatus, data: userData, error: userError, refetch: userRefetch } = useQuery({
    queryKey: 'MyUserData',
    queryFn: getUser,
    retry: 2,
  });

  const onLogout = useCallback(async () => {
    try {
      await axiosClient({ url: `api/user/logout` });
      toast.info('로그아웃 되었습니다.');
      userRefetch();
    } catch(e) {}
  }, [userRefetch]);

  return { userStatus, userData, userError, userRefetch, onLogout };
};

export default useHeader;

const getUser = async (): Promise<User> => {
  const { data } = await axiosClient({ url: `api/user` });
  return data;
};