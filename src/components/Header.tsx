import React, { FC, useEffect } from "react";
import styled from '@emotion/styled';
import useHeader from "@Hooks/useHeader";
import SearchContainer from "@Components/search/SearchContainer";
import NameTag from "./Nametag";
import { Skeleton } from "@mui/material";

const Header: FC = () => {
  const { userLoading, userData, userRefetch, onLogout } = useHeader();

  useEffect(() => {
    userRefetch();
  }, [userData]);

  return (
    <Box>
      <Left>
        MainLogo
        <SearchContainer />
      </Left>
      <Right>
        {!userLoading ?
          <NameTag
          nickname={userData?.nickname}
          onLogout={onLogout} /> :
          <Skeleton
            variant='text'
            width={150}
            height={40} /> }
      </Right>
    </Box>
  )
}

export default Header;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px auto 0 auto;
  width: 700px;
  height: 60px;
  max-width: 700px;
  padding: 8px 20px 10px 20px;
  border-radius: 6px;
  box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  background-color: #fffcf9;
`;

const Left = styled.div`
  display: flex;
  width: 420px;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;