import React, { FC } from "react";
import styled from '@emotion/styled';
import useHeader from "@Src/hooks/useHeader";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchContainer from "@Src/components/search/SearchContainer";

const Header: FC = () => {
  const { user, onLogout } = useHeader();

  return (
    <Box>
      <Left>
        MainLogo
        <SearchContainer />
      </Left>

      {user ? (
        <Right>
          <Typography sx={{ mr: 2 }}>{user.nickname}님</Typography>
          <Button
            variant="contained"
            size="small"
            onClick={onLogout}>
              로그아웃
            </Button>
        </Right>
      ) : (
        <Right>
          <Button
            variant="contained"
            size="small"
            component={Link}
            to={'/login'}>
              로그인
            </Button>
        </Right>
      )}
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