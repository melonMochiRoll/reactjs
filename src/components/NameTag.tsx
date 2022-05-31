import React, { FC } from 'react';
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  nickname: string,
  onLogout: () => void,
}

const NameTag: FC<Props> = ({ nickname, onLogout }) => {
  return (
    <>
    {nickname ? (
      <>
        <Typography sx={{ mr: 2 }}>{nickname}님</Typography>
        <Button
          variant="contained"
          size="small"
          onClick={onLogout}>
            로그아웃
        </Button>
      </>
    ) : (
      <>
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={'/login'}>
          로그인
        </Button>
      </>
    )}
    </>
  );
}

export default NameTag;