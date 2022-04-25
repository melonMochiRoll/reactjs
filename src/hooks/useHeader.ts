import { User } from "@Src/typings/model";
import { axiosClient } from "@Src/utils/axiosInstance"
import { useCallback } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const getUser = async (): Promise<User> => {
  const { data } = await axiosClient({ url: `api/user` });
  return data;
};

const useHeader = () => {
  const { status: userStatus, data: user, error: userError, refetch: userRefetch } = useQuery({
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
  }, [userRefetch])

  return { userStatus, user, userRefetch, onLogout };
};

export default useHeader;