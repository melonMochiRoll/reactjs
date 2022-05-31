import JoinContainer from "@Components/join/JoinContainer";
import { MainBackground, MainBox } from "@Components/PageTemplate";
import useHeader from "@Hooks/useHeader";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JoinPage: FC = () => {
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
        <JoinContainer />
      </MainBox>
    </MainBackground>
  );
}

export default JoinPage;