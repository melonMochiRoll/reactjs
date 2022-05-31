import LogInContainer from "@Components/logIn/LogInContainer";
import { MainBackground, MainBox } from "@Components/PageTemplate";
import useHeader from "@Hooks/useHeader";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogInPage: FC = () => {
  const navigate = useNavigate();
  const { userData, userRefetch } = useHeader();

  useEffect(() => {
    userRefetch();
    if (userData) {
      navigate('/');
    }
  }, [userData]);

  return (
    <MainBackground>
      <MainBox>
        <LogInContainer />
      </MainBox>
    </MainBackground>
  );
}

export default LogInPage;